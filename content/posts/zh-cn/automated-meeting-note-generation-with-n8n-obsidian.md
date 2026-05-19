---
publishedAt: 2026-05-11T18:25:22+08:00
image: "/og/automated-meeting-note-generation-with-n8n-obsidian.webp"
title: "使用 n8n 和 Obsidian 自动生成会议笔记：5 步指南"
description: "了解如何使用 n8n 和 Obsidian 构建自动化的会议笔记生成工作流。捕获转录内容，通过 LLM 进行总结，并直接同步到您的本地知识库中。"
pubDate: "2026-05-07"
author: "Alex Chen"
tags: ["n8n", "Obsidian", "productivity automation", "knowledge management"]
slug: "automated-meeting-note-generation-with-n8n-obsidian"
type: "informational"
---

# 使用 n8n 和 Obsidian 自动生成会议笔记：5 步指南

> **快速解答：** 使用 n8n 和 Obsidian 构建自动化的会议笔记生成工作流，主要包括：通过 webhook 捕获原始音频或文本转录，通过 n8n 中的 LLM 节点对其进行处理以实现结构化总结，并将格式化的 markdown 文件直接写入您本地的 Obsidian 知识库。这种架构消除了手动数据录入，标准化了格式，并确保了本地文件中知识保留的一致性。

专业人士每周都会花费数小时将会议讨论综合成可操作的笔记。虽然转录服务已变得商品化，但原始转录稿众所周知难以阅读。它们包含无意义的填充词、偏离主题的闲聊以及非结构化的对话，如果在几周后回顾，信噪比极低。将这些转录稿手动格式化为有用文档的过程带来了巨大的管理开销。

要在原始对话数据和结构化的个人知识管理之间架起桥梁，需要一条集成管道。使用 n8n（一种基于节点的工作流自动化工具），您可以拦截会议数据，以编程方式对其进行转换，并将其路由到您的本地系统。通过将其与高度可定制的本地 markdown 知识库 Obsidian 相结合，您可以建立一条无摩擦的管道。

实现使用 n8n 和 Obsidian 自动生成会议笔记，可确保您参加的每次通话都能被系统地解析、标记并存储在本地驱动器上，而无需手动干预。本指南概述了从头开始构建此系统所需的确切架构、节点配置和 API 连接。

## n8n 到 Obsidian 管道的架构

要构建可靠的系统，必须了解数据流。此管道运行于专为个人知识管理调整的提取、转换和加载 (ETL) 架构之上。

### 通过 Webhooks 提取
此自动化的触发器通常是 webhook。像 Fireflies、Fathom 或 Mac Whisper 这样的会议助手可以在会议结束的那一刻发送包含最终转录稿和元数据（与会者、持续时间、日期）的 POST 请求。n8n 使用 Webhook 节点捕获此有效负载，作为您数据的入口点。

### 通过 LLMs 转换
必须压缩并格式化原始转录稿。在 n8n 内部，数据传递到 Advanced AI 节点或指向 LLM 提供商（OpenAI、Anthropic 或本地实例，如 Ollama）的标准 HTTP Request 节点。通过提供严格的系统提示词 (system prompt)，LLM 将非结构化文本处理成清晰、预定义的结构：执行摘要、做出的决定和行动项。

### 加载到 Obsidian
Obsidian 本质上是一个本地的 markdown 文件目录。将数据加载到其中，需要直接写入文件系统（如果 n8n 托管在同一台机器上），或者通过局域网的 API 进行通信。最稳健的方法是利用 Obsidian Local REST API 插件，它允许 n8n 发送 HTTP POST 请求，直接在您的知识库中创建一个格式完整的 `.md` 文件。

## 您的自动化环境的前提条件

在组装工作流之前，请确保您已正确配置了必要的基础设施。

1. **n8n 实例：** 您可以使用 n8n Cloud 或通过 Docker 自托管的实例。如果您是自托管，请确保您的 n8n 服务器具有访问运行 Obsidian 的机器的网络权限。
2. **Obsidian：** 已安装在您的主要机器上。
3. **Obsidian Local REST API 插件：** 必须在您的 Obsidian 知识库中安装并启用此社区插件。启用后，复制 Bearer Token 并记下端口号（默认为 27123）。
4. **LLM API 密钥：** 用于 OpenAI、Anthropic 的活动 API 密钥，或连接到本地 Ollama 服务器以处理文本。
5. **转录源：** 能够发送包含会议转录稿的 webhook 的服务。

## 第 1 步：将转录稿摄取到 n8n

自动化从在 n8n 中创建一个新工作流并添加一个 **Webhook** 触发器节点开始。

配置 Webhook 节点以监听 HTTP POST 请求。将路径设置为特定的名称，例如 `incoming-meeting-transcript`。n8n 将生成一个测试 URL。您必须将此 URL 映射到您的会议转录软件的 webhook 设置中。

当您的转录软件触发时，有效负载将到达 n8n。标准的有效负载通常如下所示：

```json
{
  "meeting_title": "Q3 Marketing Sync",
  "date": "2026-05-07T14:30:00Z",
  "attendees": ["Alex", "Sarah", "John"],
  "transcript": "Okay, let's get started... [full text]"
}
```

在 Webhook 之后立即添加一个 **Set** 节点（或在较新的 n8n 版本中添加 **Edit Fields** 节点）。将这些传入的变量映射到标准化名称，以便在后续步骤中更容易引用它们。

## 第 2 步：通过 LLM 节点进行处理和总结

使用 n8n 和 Obsidian 自动生成会议笔记的核心在于转换阶段。如果没有结构，原始文本毫无用处。

将 **OpenAI** 节点（或您首选的 LLM 提供商）添加到画布上。将操作设置为 "Chat" 或 "Complete"。您将把上一步的转录变量输入到用户提示词中，但在系统提示词中，您需要指示格式化规则。

使用严格的、基于角色的系统提示词，以确保输出不需要手动清理：

```text
You are an expert executive assistant. Read the following raw meeting transcript and generate a highly structured summary. 
You must output ONLY standard markdown. Do not include introductory text.

Structure the output exactly as follows:
## Executive Summary
[A 3-4 sentence paragraph summarizing the core purpose and outcome of the meeting]

## Decisions Made
- [Decision 1]
- [Decision 2]

## Action Items
- [ ] [Task] (@[Person Responsible])
- [ ] [Task] (@[Person Responsible])

## Key Discussion Points
- [Point 1]
- [Point 2]
```

通过强制执行此结构，您可以保证生成的每条笔记都符合您知识库的内部格式约定，从而允许 Obsidian 的任务管理插件（如 Tasks 或 Dataview）原生读取行动项。

## 第 3 步：格式化 Markdown 有效负载

Obsidian 严重依赖 YAML frontmatter 进行元数据跟踪。在将 LLM 的输出发送到 Obsidian 之前，您必须将其包裹在此元数据中。

在 n8n 中添加一个 **Code** 节点，以将第 1 步中的元数据和第 2 步中总结的 markdown 主体拼接在一起。

在 Code 节点内编写一个简单的 JavaScript 代码片段：

```javascript
const title = $input.item.json.meeting_title;
const date = $input.item.json.date.split('T')[0];
const attendees = $input.item.json.attendees.join(', ');
const summaryBody = $input.item.json.llm_output;

const markdownContent = `---
title: "${title}"
date: ${date}
attendees: [${attendees}]
tags: [meeting, automated]
---

# ${title}

${summaryBody}
`;

return {
  json: {
    filename: `${date} - ${title}.md`,
    content: markdownContent
  }
};
```

此节点将格式化将成为您的 Obsidian 文件的确切字符串。YAML frontmatter 确保您稍后可以使用 Obsidian Dataview 查询您的笔记，按日期或与会者过滤会议。

## 第 4 步：将 n8n 连接到您的 Obsidian 知识库

准备好确切的文件名和 markdown 内容后，最后一步是将文件写入您的硬盘。

将 **HTTP Request** 节点添加到您的 n8n 工作流中。此节点将与您机器上运行的 Obsidian Local REST API 插件进行交互。

如下配置 HTTP Request 节点：
* **Method:** POST
* **URL:** `http://[YOUR_IP_ADDRESS]:27123/vault/Inbox/{{$json.filename}}`
* **Authentication:** Header Auth
* **Name:** `Authorization`
* **Value:** `Bearer [YOUR_OBSIDIAN_API_TOKEN]`
* **Body Content Type:** `text/markdown`
* **Body Parameters:** 将此直接映射到第 3 步中生成的 `content` 变量。

*关于目标路径的说明：* 在上面的 URL 中，`/vault/Inbox/` 强制 API 在您的知识库根目录下名为 "Inbox" 的文件夹中放置新的 markdown 文件。强烈建议将自动生成的文件路由到指定文件夹，而不是将它们直接与您手动整理的笔记混合在一起。

## 第 5 步：测试和优化工作流

使用历史转录数据在 n8n 中手动执行工作流。验证 webhook 是否接收了数据，LLM 是否生成了正确的 markdown 结构，以及 HTTP request 是否成功在您的 Obsidian 知识库中创建了文件。

打开 Obsidian 并检查新文件。检查 frontmatter 是否存在语法错误——如果 YAML 无效，Obsidian 将无法正确解析元数据。确保行动项使用标准的 `- [ ]` 语法，以便任务聚合插件能够识别它们。

在 n8n 中添加一个 **Error Trigger** 工作流来捕获失败。如果 LLM 超时或 Obsidian REST API 无法访问（例如，如果您的计算机处于睡眠状态），您应该配置 n8n 向您的电子邮件或 Slack 发送通知，并保留转录的有效负载以便稍后重试。

## 系统可靠性和隐私的实用建议

在设计处理公司内部数据或私人讨论的自动化系统时，特定的架构决策决定了该设置的长期可行性。

**通过收件箱方法管理状态：** 永远不要将自动输出直接写入您的永久笔记目录中。将所有 n8n 输出路由到 Obsidian 中的 `000_Inbox` 文件夹。这迫使您审查、验证并将文件手动移动到其最终存放位置。AI 幻觉时有发生；收件箱充当隔离区，确保损坏或幻觉数据不会污染您的知识图谱。

**优先使用本地 LLM 以确保机密性：** 将专有商业会议的转录稿发送到外部 API（如 OpenAI）会带来安全风险，并可能违反公司合规政策。如果隐私至关重要，请在托管 n8n 的同一台机器上通过 Ollama 运行本地 LLM。像 Llama 3 (8B) 或 Mistral 这样的模型非常能够结构化会议转录稿，并确保您的原始数据永远不会离开您的本地网络。

**处理异步文件同步：** 如果您无法使用 Obsidian Local REST API（例如，您将 n8n 托管在远程云服务器上，而您的本地机器处于严格的 NAT 之后），请更改第 4 步。与其直接向 Obsidian 发送 HTTP Request，不如使用 n8n 节点将 markdown 文件保存到云存储提供商（如 Dropbox、Google Drive 或 GitHub）。然后，配置您本地的 Obsidian 知识库以从该目录同步。一旦 n8n 将文件写入 Dropbox，Dropbox 桌面客户端会将其同步到您的硬盘，Obsidian 也会立即对其进行索引。

## 综合您的自动化工作流

实现使用 n8n 和 Obsidian 自动生成会议笔记，用静默、可靠的后台进程取代了繁琐的行政家务。通过利用 webhooks 进行摄取，LLMs 进行结构转换，以及直接 API 调用生成本地文件，您的系统将充当专属助手。这种架构完美扩展，确保无论您是一周开一次会还是四十次会，您的知识库都能保持一致更新、标准化并立即可搜索。

## 常见问题解答

### 我可以完全在本地运行此工作流以保护隐私吗？
可以。您可以在本地机器上使用 Docker 托管 n8n，使用本地实例的 Whisper 进行转录，并运行 Ollama 进行 LLM 处理。在这种配置下，没有任何会议数据会离开您的个人网络。

### 我需要付费订阅 n8n 才能与 Obsidian 集成吗？
不需要。您可以免费自托管社区版的 n8n。如果您不想管理服务器，n8n Cloud 提供了付费层级，但关于 HTTP requests 和 webhooks 的功能在两个版本中保持一致。

### n8n 如何处理音频记录等文件附件？
如果您的 webhook 接收的是音频文件（如 MP3）而不是文本转录，您必须在 LLM 步骤之前添加一个音频转录节点。n8n 支持 OpenAI 的 Whisper API，它可以处理二进制音频数据，并将其转换为工作流其余部分所需的文本转录稿。

### 如果在 webhook 触发时 Obsidian 已关闭会怎样？
如果 Obsidian 已关闭，则 Local REST API 插件处于离线状态，n8n 中的 HTTP Request 节点将失败。为防止数据丢失，请配置 n8n 在失败时自动重试节点，或使用云同步的解决方法（将 markdown 文件保存到 iCloud/Dropbox 文件夹，Obsidian 在打开时将从中读取）。

---

## 相关阅读

- [Obsidian 与 Notion API 用于自动化工作流：2026 年对比](/zh-cn/posts/obsidian-vs-notion-api-for-automated-workflows/)

- [在 Obsidian 中使用 DataviewJS 管理重复任务：完整指南](/zh-cn/posts/managing-recurring-tasks-in-obsidian-with-dataviewjs/)

- [2026 年 Obsidian Minimal 主题的最佳字体搭配](/zh-cn/posts/best-font-pairings-obsidian-minimal-theme-2026/)