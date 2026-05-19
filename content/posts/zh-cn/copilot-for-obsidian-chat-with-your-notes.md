---
publishedAt: 2026-05-16T14:58:13+08:00
image: "/og/copilot-for-obsidian-chat-with-your-notes.webp"
title: "Copilot for Obsidian 完整指南：与你的笔记对话"
description: "探索如何原生使用 Copilot for Obsidian 与笔记进行对话。了解设置方法、本地 LLM 集成以及用于高效知识检索的工作流。"
pubDate: "2026-05-01"
author: "Alex Chen"
tags: ["obsidian", "ai tools", "knowledge management", "productivity"]
slug: "copilot-for-obsidian-chat-with-your-notes"
type: "informational"
---

# Copilot for Obsidian 完整指南：与你的笔记对话

> **快速解答：** Copilot for Obsidian 是一个[社区](/zh-cn/posts/how-to-install-community-plugins-in-obsidian-mobile/)插件，它将大型语言模型 (LLM) 直接集成到你的 Obsidian 库 (vault) 中。它允许你与现有的 Markdown 笔记进行对话、总结长文档并生成文本，你可以使用基于云的 API（如 OpenAI 和 Anthropic），也可以通过 Ollama 和 LM Studio 使用注重[隐私](/zh-cn/posts/configuring-obsidian-for-end-to-end-encrypted-sync/)的本地模型。

管理不断增长的 Obsidian 库最终会面临扩展性问题。随着你的[每日笔记](/zh-cn/posts/automate-obsidian-daily-notes-using-python/)、[研究](/zh-cn/posts/obsidian-vs-devonthink-for-large-research-archives/)剪报和会议纪要的收集从几百个扩展到几千个 Markdown 文件，标准的搜索功能就变得不够用了。你可能记得三个月前写下过关于某个项目的具体见解，但关键字搜索只能带来碎片化的上下文。

正是在这种情况下，将 AI 层直接引入你的个人[知识管理](/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/) (PKM) 系统能创造出可衡量的价值。你不必再将笔记复制粘贴到运行着 ChatGPT 或 Claude 的独立浏览器窗口中，而是可以与一个已经了解你活动工作区上下文的 AI 进行交互。

Copilot for Obsidian 填补了这一空白。它作为驻留在侧边栏中灵活的对话界面运行，能够读取你的活动笔记、搜索你的库，并帮助你在不打断注意力的前提下综合信息。本指南将探讨如何设置该插件，为其配置云端和本地模型，并构建有效的[工作流](/zh-cn/posts/automating-your-task-management-with-obsidian-tasks-plugin/)来与你的个人知识库进行交互。

## 了解 Copilot for Obsidian 的架构

在深入配置之前，了解该插件如何与你的数据和外部模型交互是很有帮助的。Copilot for Obsidian 不会在你的库上训练 AI。相反，它使用类似于检索增强生成 (RAG) 的技术，并结合了活动窗口的上下文。

### 上下文窗口与活动笔记
当你打开一个聊天会话时，Copilot 主要查看你当前处于活动状态的笔记。它将这篇笔记的文本用作发送给语言模型的提示词 (prompt) 的“上下文”。如果你正在阅读一篇 3,000 字的研究论文并问：“主要论点是什么？”，该插件会将这 3,000 字与你的问题打包在一起，并发送给配置好的 LLM。

### 库索引与搜索
更高级的交互涉及查询整个库。Copilot 可以利用 Obsidian 的搜索功能根据你的查询查找相关笔记，从这些笔记中提取片段，并将它们提供给 LLM 以生成答案。这需要仔细管理你所选择使用的模型固有的上下文窗口限制。

### API 抽象层
该插件充当一个客户端。它格式化你的请求并将它们发送到标准的 API 端点。这意味着它完全独立于后端模型。只要服务提供兼容 OpenAI 的 API 结构（这是当前的行业标准），Copilot 就可以连接到它。正是这种抽象使你能够在用于复杂推理的 GPT-4o 和用于私人离线工作的本地 Llama 3 模型之间无缝切换。

## 选择你的语言模型后端

设置 Copilot 时最关键的决定是选择模型后端。你的选择决定了交互的速度、智能程度和隐私级别。

### 云 API：最强能力
使用云提供商可提供最高水平的推理能力和最大的上下文窗口，这对于综合大量文本至关重要。

*   **OpenAI (GPT-4o / GPT-4o-mini)：** 标准选择。它需要一个 OpenAI 开发者帐户和一个 API 密钥。你按处理的 token（词元）付费。GPT-4o 提供 128,000 个 token 的上下文窗口，使你可以轻松地将整本书的摘要或几周的每日笔记输入到聊天中。
*   **Anthropic (Claude 3.5 Sonnet / Haiku)：** 许多用户在处理文本时更喜欢 Claude，因为它的语气通常更自然，而且其编码能力非常出色。Claude 3.5 Sonnet 提供 200,000 个 token 的窗口，非常适合海量文档的综合。
*   **Google (Gemini 1.5 Pro / Flash)：** Gemini 模型提供海量的上下文窗口（多达 200 万个 token），使它们在分析整个库级别的数据集时无与伦比，尽管插件集成有时可能需要根据确切使用的 API 网关进行额外配置。

### 本地 LLM：绝对隐私
如果你的库包含敏感的客户数据、日记或专有研究，将文本发送给云提供商可能是不可行的。你可以完全在本地硬件上运行模型。

*   **Ollama：** 在 macOS、Linux 和 Windows 上运行本地模型的最简单方法。一旦 Ollama 安装并运行了像 `llama3` 或 `mistral` 这样的模型，你只需将 Copilot 指向 `http://localhost:11434` 并选择本地模型即可。
*   **LM Studio：** 提供了一个图形界面，用于从 Hugging Face 下载和运行量化模型。它具有一个内置的本地推理服务器，可完美模仿 OpenAI API，默认在 1234 端口上运行。

运行本地模型需要强大的硬件。为了获得流畅的性能，强烈推荐使用 Apple Silicon Mac（M1/M2/M3 及 16GB+ RAM）或配备独立 Nvidia GPU（至少 8GB VRAM）的 PC。

## 分步安装与配置

设置 Copilot for Obsidian 非常简单，但正确配置 API 连接往往是用户经常遇到错误的地方。

### 1. 安装社区插件
1. 打开 Obsidian 设置。
2. 导航到**社区[插件](/zh-cn/posts/periodic-notes-plugin-weekly-reviews/)**并确保关闭**安全模式**。
3. 点击**浏览**并搜索“Copilot”。
4. 寻找由 *logancyang* 创建的插件。点击**安装**，然后**启用**。

### 2. 配置云 API（以 OpenAI 为例）
1. 转到 Obsidian 中的 Copilot 设置面板。
2. 在 **Default Model** 部分，选择 `gpt-4o` 或 `gpt-4o-mini`。
3. 找到 **OpenAI API Key** 字段。
4. 从 OpenAI 开发者仪表板 (`platform.openai.com`) 生成一个 API 密钥。请注意，这需要一个有余额的开发者帐户，它与 ChatGPT Plus 订阅是分开的。
5. 将密钥粘贴到设置中。插件将安全地保存它。

### 3. 配置本地模型（以 Ollama 为例）
1. 确保 Ollama 正在你的机器上运行，并且你已经拉取了一个模型（例如，在终端中运行 `ollama run llama3`）。
2. 在 Copilot 设置中，找到 **Ollama Settings** 部分。
3. 开启 **Enable Ollama** 选项。
4. 将 **Ollama Base URL** 设置为 `http://127.0.0.1:11434`（默认端口）。
5. 在 **Ollama Models** 字段中，输入你已下载的模型的准确名称（例如，`llama3`）。
6. 将设置顶部的 **Default Model** 更改为你刚刚指定的本地模型。

## 核心工作流：如何与你的笔记对话

配置完成后，你可以通过命令面板 (`Ctrl/Cmd + P` -> "Copilot: Open Copilot") 打开 Copilot 聊天面板。以下是在日常工作中最有效地利用该工具的方法。

### 文档总结与问答
最可靠的用例是询问有关活动文档的问题。打开你保存的一篇长文章或一份复杂的会议记录。

*   **Prompt：** "总结本次会议的关键行动项，并将每项分配给所提及的人员。"
*   **Prompt：** "这篇论文的核心论点是什么？作者提供了哪些证据来支持它？"

Copilot 会读取当前聚焦的 Markdown 文件，附加你的提示词，并在侧边栏中返回结果。然后，你可以使用内置的复制按钮将摘要粘贴回你的笔记中。

### 库搜索与综合
要跨多个笔记提出问题，你需要确保 Copilot 正在利用你的库上下文。你可以使用聊天界面中的 `@` 命令显式引用库中的其他文件或文件夹。

*   **Prompt：** "@folder:Meeting-Notes 基于过去四周的会议，阻碍 Project X 完成的反复出现的障碍是什么？"
*   **Prompt：** "@note:2025-Q1-Goals @note:2025-Q2-Goals 比较这两份[计划](/zh-cn/posts/obsidian-full-calendar-plugin-review/)文档并列出结转的目标。"

*注意：跨越整个库的查询会消耗更多的 token。如果使用云提供商，请确保你使用的 API 具有足够的上下文限制，并监控你的 API 使用成本。*

### 写作与编辑辅助
Copilot 可以充当了解你风格的本地化编辑。

*   **Prompt：** "重写选定的文本，使其更正式、简洁，适合技术规范。"
*   **Prompt：** "生成一个 Markdown 表格，比较我上面列出的三个软件工具的规格。"

你可以在笔记中突出显示特定文本，Copilot 将使用该选择作为其主要上下文，从而允许进行精准编辑，而不会使模型因整个文档的内容而产生混淆。

## 管理上下文窗口与成本

将 LLM 集成到 PKM 时，一个常见的陷阱是误解上下文窗口。

上下文窗口是模型一次可以在其“工作记忆”中保存的最大文本量（以 token 为单位衡量，其中 1 个 token ≈ 0.75 个单词）。如果你尝试将包含 500,000 个单词的文件夹输入到具有 128,000 个 token 限制的模型中，插件将截断文本，从而导致幻觉或不完整的答案。

此外，使用像 OpenAI 或 Anthropic 这样付费 API 时，发送给模型的每个词和生成的每个词都要花钱。

### 降低成本策略
1.  **对简单任务使用较小的模型：** 将默认模型设置为 `gpt-4o-mini` 或 `claude-3-haiku`。这些模型经过了高度优化，速度非常快，且每次请求的成本只有不到一美分。它们完全足以校对或总结简短的笔记。
2.  **保留重型模型用于综合任务：** 只有当你需要跨多个长文档进行复杂推理时，才切换到 `gpt-4o` 或 `claude-3.5-sonnet`。
3.  **有针对性的上下文：** 与其要求 Copilot 阅读整个库，不如使用 Obsidian 的原生搜索功能找到 3-4 个高度相关的笔记，打开它们，或者在提示词中专门标记它们。缩小上下文范围可以提高 AI 的准确性，同时降低成本。

## 结论

将 AI copilot 集成到你的 Obsidian [工作流](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)中，可将该应用程序从静态的文件柜转变为活跃的研究助手。通过设置 Copilot for Obsidian，你将获得快速探究自己的想法、总结密集材料并浮现被遗忘联系的能力。无论你选择云 API 的原始力量进行海量的上下文综合，还是依靠本地模型来保持绝对的数据主权，将你的笔记视为对话界面都是对[个人知识管理](/zh-cn/posts/customizing-obsidian-sidebar-with-commander-plugin-icons/)的一次重大升级。成功的关键在于理解上下文窗口的局限性，并利用有针对性的提示词从本地化数据中提取精确的价值。

## 常见问题解答

### Copilot for Obsidian 可以免费使用吗？
该插件本身是免费开源的。但是，如果将其连接到 OpenAI 或 Anthropic 等商业服务，你需要为 API 的使用付费。如果你通过 Ollama 使用本地模型，整个设置是 100% 免费的。

### 该插件会在我的私人笔记上训练 AI 模型吗？
不会。Copilot for Obsidian 仅将活动笔记（或你明确查询的笔记）中的特定文本发送到你配置的 API 端点，并且仅在发起聊天提示时发送。像 OpenAI 和 Anthropic 这样的 API 提供商在他们的服务条款中声明，通过他们付费 API 提交的数据不会被用来训练他们的基础模型。

### 为什么 AI 会产生幻觉或给出关于我的库的错误答案？
这通常发生在超过模型上下文窗口的情况下。如果你提出一个关于几十个笔记的宽泛问题，插件必须截断文本以适应模型的限制。在没有全文的情况下，AI 会尝试猜测答案。请使用特定的 `@` 标签将上下文缩小到几个高度相关的笔记。

### 我可以在没有互联网连接的情况下离线运行吗？
是的，绝对可以。如果你配置 Copilot 连接到运行着 Ollama 或 LM Studio 的本地服务器，所有的数据处理都会直接在你计算机的 CPU 或 GPU 上进行。这不需要互联网连接，并确保了最大程度的隐私。

---

## 相关阅读

- [发布 Obsidian 笔记：将你的库变成公开博客](/zh-cn/posts/how-to-publish-obsidian-notes-to-a-blog/)

- [Canvas for Obsidian：2026 年无限白板创意](/zh-cn/posts/canvas-for-obsidian-infinite-whiteboard-ideas/)
- [Obsidian 中使用 HoverNotes 制作时间戳视频笔记：完整指南](/zh-cn/posts/hovernotes-for-timestamped-video-notes-obsidian/)