---
publishedAt: 2026-05-16T14:58:13+08:00
image: "/og/extracting-readwise-highlights-to-obsidian-via-n8n.webp"
evidenceImage:
  src: "/media/adsense-phase2/notebook-writing.jpg"
  alt: "高亮复习与笔记设置"
  caption: "工作台上的手写笔记，用于说明研究记录和复习习惯。"
  credit: "cottonbro studio / Pexels"
  sourceUrl: "https://www.pexels.com/photo/person-writing-on-a-notebook-5185080/"
editorSummary: >-
  只有当导入的高亮成为可用的笔记时，Readwise 到 Obsidian 的自动化才是有价值的。本指南应帮助读者避免在没有改进复习的情况下移动更多文本的常见陷阱。我会围绕来源、书籍/文章标题、高亮文本、标签以及询问高亮用途的小型处理步骤来设计 n8n 工作流。最强大的系统会保留原始高亮的完整性，同时为摘要、操作或文献笔记的开发创建一个单独的层。
authorNote: >-
  当我审查高亮工作流时，我会检查高亮是否仍然可以追溯到其来源。当自动化能够保留上下文并创建复习队列时，它才是有帮助的，而不是当它向仓库倾倒另外数百条引言时。
manualRelated:
  - title: "使用 Obsidian 和 Readwise 构建第二大脑"
    url: "/zh-cn/posts/building-a-second-brain-using-obsidian-and-readwise/"
  - title: "用于 Obsidian 书签管理的 Raindrop.io 集成"
    url: "/zh-cn/posts/raindrop-io-integration-for-obsidian-bookmark-management/"
  - title: "将网页剪藏整合到您的卡片盒笔记系统中"
    url: "/zh-cn/posts/integrating-web-clips-into-your-zettelkasten-note-system/"
title: "通过 n8n 将 Readwise 高亮提取至 Obsidian：完整 5 步指南"
description: "掌握通过 n8n 将 Readwise 高亮提取至 Obsidian 的技术工作流。学习解析 JSON 数据、格式化 Markdown 以及自动化您的 PKM 系统。"
pubDate: "2026-05-07"
author: "Alex Chen"
tags: ["obsidian", "readwise", "automation", "n8n"]
slug: "extracting-readwise-highlights-to-obsidian-via-n8n"
type: "informational"
---

# 通过 n8n 将 Readwise 高亮提取至 Obsidian：完整 5 步指南

> **快速解答：** 通过 n8n 将 Readwise 高亮提取至 Obsidian 涉及使用 n8n 的 HTTP Request 节点轮询 Readwise Export API，使用 Item Lists 节点拆分 JSON 响应，使用 Code 节点将高亮数据格式化为 Markdown，最后通过 Obsidian Local REST API 或同步的云端文件夹将格式化后的文本发送至您的 Obsidian 仓库（vault）。

个人知识管理（PKM）在很大程度上依赖于数据的无摩擦流动。Readwise 在汇总来自 Kindle、网页剪藏工具和播客的高亮方面表现出色，而 Obsidian 则为连接这些想法提供了无与伦比的环境。虽然 Readwise 提供了官方的 Obsidian 插件，但高级用户通常会发现其格式化限制和同步触发条件存在局限性。构建自定义自动化管道能让您完全控制注释进入仓库的方式。

通过 n8n 将 Readwise 高亮提取至 Obsidian，为知识路由提供了一种强大、可视化的编程方法。通过在原始数据到达您的仓库之前从 Readwise API 拦截它们，您可以注入条件逻辑、附加 AI 生成的摘要、重组元数据，或将特定标签路由到不同的文件夹。本指南详细分解了使用 n8n 连接这两个应用程序所需的确切技术工作流。

## 为什么构建自定义 n8n 工作流而不是使用原生插件？

官方的 Readwise 到 Obsidian 插件对于标准用例效果很好，但它作为一个黑盒运行。您配置一个模板，它在 Obsidian 打开时在后台安静地运行。将这个过程转移到像 n8n 这样的外部自动化平台上，可以为复杂的个人知识管理系统带来几个明显的优势。

首先，n8n 工作流独立于您的 Obsidian 应用程序状态运行。官方插件需要 Obsidian 在您的设备上处于打开和活动状态才能触发同步。n8n 管道可以在服务器上的 cron 计划中运行，全天候处理高亮并将它们推送到您的存储库（通过 Git 或云同步）。当您打开仓库时，笔记已经在那里了。

其次，对结构的控制是绝对的。如果您希望将带有“architecture”标签的高亮格式化为任务，而将带有“quote”标签的高亮附加到每日笔记中，n8n 可以毫不费力地处理这种路由。您可以利用条件 Switch 节点来评估来源类型（例如，书籍与文章），并对每种类型应用完全不同的 Markdown 模板。

最后，集成 n8n 允许进行数据丰富。在高亮接触到您的 Obsidian 仓库之前，您的 n8n 工作流可以将文本通过本地 LLM 或 OpenAI API 传递，以生成一句话摘要、提取关键实体或翻译文本。这将基本的同步转变为主动的处理管道。

## 自动化管道的先决条件

在构建工作流之前，您必须准备好端点。这种集成需要访问令牌以及 n8n 将文件写入本地或云托管的 Obsidian 仓库的成熟方法。

您将需要：
1. **Readwise Access Token：** 可从 Readwise 开发者仪表板获取。此令牌授予读取您整个高亮库的权限。
2. **n8n 实例：** 这可以是 n8n Cloud 或通过 Docker 自托管的实例。确保您的实例已更新以支持最新的核心节点。
3. **Obsidian 写入权限：** 您需要一种方法让 n8n 交付 Markdown 文件。有两种主要方法：
   - **Obsidian Local REST API 插件：** 如果 n8n 与您的桌面计算机在同一局域网上本地运行，这是理想的选择。它向本地 HTTP PUT 和 POST 请求公开您的仓库。
   - **Git 或云同步：** 如果使用云端 n8n，您可以将输出写入与 Obsidian 同步的 GitHub 存储库（通过 Obsidian Git 插件），或使用 n8n 节点将文件直接推送到您的仓库所在的 Dropbox 或 Google Drive。

为了本指南的目的，我们将重点使用 HTTP Request 节点与 Readwise API 交互并格式化输出，为您的首选交付方法做好准备。

## 第 1 步：轮询 Readwise Export API

工作流首先请求您的最新数据。Readwise 提供了一个专用的 `/v2/export/` 端点，专门为需要增量同步新高亮的集成而设计。

在您的 n8n 画布中，添加一个 **Schedule Trigger** 节点。将其设置为按您的首选间隔运行，例如每小时一次或每天午夜运行一次。请注意速率限制；每五分钟运行一次来读取高亮是不必要的，并且可能导致 API 限流。

接下来，附加一个 **HTTP Request** 节点。这是提取过程的引擎。使用以下参数配置它：
- **Method:** GET
- **URL:** `https://readwise.io/api/v2/export/`
- **Authentication:** Generic Credential Type（或 Header Auth）。
- **Headers:** Name: `Authorization`, Value: `Token YOUR_READWISE_TOKEN`。

为确保您只提取新高亮，而不是每次都下载整个库，您必须利用 `updatedAfter` 查询参数。在 n8n 中，您可以通过从本地文件、数据库读取上次成功运行的时间戳，或利用 n8n 的静态数据功能在两次执行之间保留时间戳来管理此操作。将此 ISO 8601 格式的日期字符串传入 HTTP Request 节点的查询参数中。

## 第 2 步：解析 Readwise JSON 响应

Readwise Export API 返回一个深度嵌套的 JSON 对象。根级别包含一个 `results` 数组。此数组中的每个项目代表一个来源（书籍、文章或推文线程）。在每个来源对象内部，都有一个包含各个注释的 `highlights` 数组。

为了在 n8n 中有效地处理这些，您需要扁平化数据结构。如果不拆分，您无法轻松地将嵌套数组直接映射到各个 Markdown 文件中。

添加一个 **Item Lists** 节点（以前称为 Split In Batches 或 Item Lists 分割功能）。将节点配置为：
- **Operation:** Split Out Items
- **Field To Split Out:** `results`

这将单个 API 响应转换为多个 n8n 项目，每本书或每篇文章一个。如果您的目标是每本书创建一个 Obsidian 笔记（这是标准的 PKM 方法），您可以继续在此级别格式化数据。

如果您的目标是为每一个高亮创建一个单独的原子笔记，您将需要第二个 **Item Lists** 节点。将字段设置为 `highlights`，以将数据进一步拆分为细粒度的注释级别。

## 第 3 步：为 Obsidian Markdown 格式化输出

隔离数据后，您必须将 JSON 属性转换为 Obsidian 风格的 Markdown。n8n 的 **Code** 节点（使用 JavaScript）为此提供了最强大的环境，它在处理复杂的字符串操作和模板字面量方面远胜于标准表达式字段。

将一个 Code 节点连接到您的 Item Lists 节点。对于旨在每本书创建一个笔记的工作流，您的 JavaScript 将迭代遍历嵌套的高亮并构建笔记正文。

一种标准的脚本方法涉及提取 YAML frontmatter 的书籍元数据，然后将 highlights 数组映射到格式化的引用块中：

```javascript
for (const item of $input.all()) {
  const source = item.json;
  
  let markdown = `---\n`;
  markdown += `title: "${source.title}"\n`;
  markdown += `author: "${source.author}"\n`;
  markdown += `category: "${source.category}"\n`;
  markdown += `readwise_id: ${source.user_book_id}\n`;
  markdown += `---\n\n`;
  
  markdown += `# ${source.title}\n\n`;
  markdown += `![Cover Image](${source.cover_image_url})\n\n`;
  
  if (source.highlights && source.highlights.length > 0) {
    markdown += `## Highlights\n\n`;
    source.highlights.forEach(hl => {
      markdown += `> ${hl.text}\n`;
      if (hl.note) {
        markdown += `\n**Note:** ${hl.note}\n`;
      }
      markdown += `\n*Location: ${hl.location} | [Open in Readwise](${hl.readwise_url})*\n`;
      markdown += `---\n`;
    });
  }
  
  item.json.formatted_markdown = markdown;
  item.json.safe_filename = source.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.md';
}
return $input.all();
```

该脚本确保您的 YAML frontmatter 保持纯净，并处理附加到高亮的个人笔记是否存在的情况。它还生成一个经过清理的文件名，这对下一步至关重要，因为 Obsidian（和底层文件系统）将拒绝包含冒号或斜杠的文件路径。

## 第 4 步：将数据传递到 Obsidian

通过 n8n 将 Readwise 高亮提取至 Obsidian 的最后阶段是将生成的 Markdown 写入您的仓库。该方法在很大程度上取决于您的托管架构。

### 方法 A：使用 Local REST API（自托管网络）
如果您的 n8n 实例和 Obsidian 仓库位于同一个局域网中，Obsidian Local REST API 插件是最快的途径。

添加另一个 **HTTP Request** 节点。
- **Method:** POST（如果您正在附加/覆盖，则使用 PUT）
- **URL:** `http://192.168.X.X:27123/vault/Readwise/${{ $json.safe_filename }}`
- **Headers:** `Authorization: Bearer YOUR_OBSIDIAN_API_KEY`, `Content-Type: text/markdown`
- **Body:** 使用表达式传入 `{{ $json.formatted_markdown }}`。

### 方法 B：使用 GitHub（云架构）
如果您在云 VPS 上运行 n8n 并通过 GitHub 跨设备同步 Obsidian，请通过 Git 协议路由数据。

您可以在 n8n 中使用 **GitHub** 节点。
- **Operation:** Create or Update File
- **Repository:** 您的仓库存储库。
- **File Path:** `Readwise/{{ $json.safe_filename }}`
- **File Content:** `{{ $json.formatted_markdown }}`

这种方法为您的摘要提供版本控制，并确保在您下次拉取时数据无缝同步到您的桌面或移动 Obsidian 应用程序。

## 第 5 步：处理更新和附加高亮

PKM 自动化中最复杂的挑战之一是处理增量更新。当您在几周内阅读一本书时，您将多次提取同一本书的高亮。如果您的工作流只是简单地覆盖现有文件，您将丢失在 Obsidian 中建立的任何手动编辑或双向链接。

为了解决这个问题，您的 n8n 工作流必须在写入之前检查笔记是否已经存在。

如果使用 Local REST API，首先对文件路径执行 GET 请求。
- 如果返回 404 (Not Found)，请使用 POST 请求创建整个文件，包括 YAML frontmatter。
- 如果返回 200 (OK)，则仅从 JSON 负载中分离出*新*的高亮，将它们格式化为没有 YAML 标头的简单引用块，并使用该 API 专门的 `PATCH` 或附加端点将新文本注入现有文件的底部。

如果使用 Git，您必须检索当前文件内容，将新格式化的字符串附加到 Code 节点中文本块的末尾，并提交更新后的聚合文件。准确处理状态是将脆弱脚本与生产级自动化区分开来的关键。

## 高级定制和元数据提取

一旦通过 n8n 将 Readwise 高亮提取至 Obsidian 的基本管道开始运行，您可以将其功能扩展到远超标准插件提供的范围。

**AI 自动标记：** 在格式化之前，通过 OpenAI 或 Anthropic 节点路由高亮文本。向 LLM 提示：“分析此高亮并返回恰好三个以逗号分隔的相关组织标签。”将这些动态生成的标签附加到 Obsidian frontmatter 中，让您的仓库图谱视图无需手动排序即可自动聚类概念。

**播客音频时间戳：** Readwise 经常更新其集成，最近通过 Snipd 等应用捕获了播客高亮。您可以在 n8n 中使用 Switch 节点来检测 `source_type === 'podcast'`。将这些项目路由到强调音频时间戳和链接的单独格式化路径，使其原生格式化以适应 Media Extended 等 Obsidian 插件，从而允许您在 Obsidian 中点击高亮并直接跳转到音频位置。

**抽认卡生成：** 如果您使用 Obsidian 进行间隔重复（通过 Spaced Repetition 插件或 Anki 桥接器），n8n 可以检测 Readwise 笔记中的特定触发词。如果 Readwise 笔记包含“?”，n8n 可以将高亮解析为问题，将笔记解析为答案，在将输出字符串推送到您的仓库中专用的抽认卡文件夹之前，将其格式化为 `Question :: Answer`。

## 排查常见 Webhook 和同步错误

构建自定义数据管道会引入特定的故障点。在部署的头几周内，监控 n8n 执行日志至关重要。

**初始同步的速率限制：** Readwise `/v2/export/` API 专为增量同步设计。如果您尝试在单次运行中下载包含 10,000 个高亮的库，而未正确处理分页，HTTP 请求将超时或抛出 429 Too Many Requests 错误。在 HTTP Request 节点中使用 n8n 的分页设置，以优雅地处理 Readwise JSON 响应中提供的 `nextPageCursor`。

**Markdown 格式化损坏：** JSON 负载经常包含未转义的字符、换行符或不可见的控制字符（尤其是来自网页剪藏工具）。如果将这些直接传递到 YAML frontmatter 中而不进行清理，Obsidian 将无法解析 frontmatter 块。在构建 YAML 字符串之前，始终在 Code 节点中通过基本的清理正则表达式运行 title 和 author 字符串，以剥离冒号或未转义的引号等字符。

**同步冲突：** 如果您的 n8n 工作流在您在 Obsidian 中编辑同一文件的确切时刻将文件推送到 GitHub，您将创建一个 Git 合并冲突。为了缓解这种情况，请将您的 n8n 管道安排在典型的不活跃时间运行，或将新的高亮附加到指定的“Readwise 收件箱”文件，而不是直接编辑您的核心书籍笔记。

## 常见问题解答

### n8n 可以提取我多年前标记的旧高亮吗？
可以。如果您在 HTTP Request 节点中省略 `updatedAfter` 参数，Readwise API 将提供您的整个历史记录。您必须确保配置 n8n 的分页设置，以跨多个 API 页面处理大量数据，以防超时错误。

### 通过 n8n 传递我的 Readwise 令牌安全吗？
如果您在安全的服务器上自托管 n8n，您的凭据仍由您控制。将您的 Readwise API 令牌安全地存储在 n8n 内置的 Credentials 管理器中，而不是将其作为纯文本直接硬编码到 HTTP Request 节点中。

### 如何阻止 n8n 在 Obsidian 中创建重复的笔记？
实施状态管理。您必须记录最后一次成功处理的高亮的 ID，或准确使用 `updatedAfter` 参数。此外，配置您的 Obsidian 交付方法（Git 或 REST API）以检查文件是否存在并附加新数据，而不是在每次执行时强制覆盖文件。

### 这种方法适用于移动端 Obsidian 设置吗？
如果您使用云中介，它在移动端效果极佳。由于移动操作系统限制了后台服务器进程，您无法轻松地从远程 n8n 服务器到手机使用 Local REST API 插件。相反，让 n8n 将 Markdown 文件推送到您的 Git 存储库或 Obsidian Sync 文件夹；移动应用将在打开时无缝提取新文件。

### 我可以过滤哪些高亮被发送到 Obsidian 吗？
绝对可以。这是使用自动化平台的主要好处。在 Item Lists 节点之后添加 IF 节点或 Filter 节点。您可以配置诸如“仅当 `category` 等于 `books` 时继续”或“仅当高亮包含特定标签时继续”等规则，确保您的仓库不会被低价值的网页剪藏弄乱。

---

## 相关阅读

- [Obsidian Canvas 与 Excalidraw：哪个可视化工具胜出？](/zh-cn/posts/obsidian-canvas-vs-excalidraw-for-mind-mapping/)

- [适合撰写长篇内容的最佳 Obsidian 主题](/zh-cn/posts/best-obsidian-themes-for-writing-longform-content/)