---
publishedAt: 2026-05-11T18:25:22+08:00
image: "/og/building-a-second-brain-using-obsidian-and-readwise.webp"
title: "使用 Obsidian 和 Readwise 构建第二大脑：完整指南"
description: "准确了解如何使用 Obsidian 和 Readwise 构建第二大脑，将零散的高亮标注转化为相互关联、可操作的知识管理系统。"
pubDate: "2026-05-02"
author: "Alex Chen"
tags: ["Obsidian", "Readwise", "Knowledge Management", "Productivity"]
slug: "building-a-second-brain-using-obsidian-and-readwise"
type: "informational"
---

# 使用 Obsidian 和 Readwise 构建第二大脑：完整指南

> **快速解答：** 使用 Obsidian 和 Readwise 构建第二大脑，需要通过官方插件将 Readwise 的自动化高亮捕获直接连接到 Obsidian 的本地 Markdown 库中。通过将 Kindle、网页和播客的标注汇入到一个集中的收件箱，你可以逐步对这些笔记进行总结和链接，从而创建一个极具韧性且相互关联的个人知识库。

现代知识工作者每天都要消耗海量的信息——文章、书籍、播客和时事通讯。然而，如果没有一个可靠的系统来捕获和连接这些信息，大多数洞见会在几小时内烟消云散。由 Tiago Forte 推广的“第二大脑”概念，提供了一个将记忆外化的框架。但是，你选择的软件决定了维护这个框架的摩擦力大小。

许多[笔记](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)生态系统会将你的数据困在专有格式中，或者需要很快就会变得无法维持的手动数据录入。Obsidian 和 Readwise 的结合解决了数据主权问题和捕获摩擦力问题。Obsidian 为思考和链接提供了一个面向未来、本地优先的 Markdown 环境，而 Readwise 则充当了通用聚合器，能够自动从几乎任何阅读平台提取高亮标注。

这份详尽的指南将详细拆解如何构建这个系统。我们将涵盖连接这两个工具的机制、处理传入高亮标注的 Obsidian 库结构设计，以及将消极消费转化为积极知识创造所需的日常[工作流](/zh-cn/posts/automating-your-task-management-with-obsidian-tasks-plugin/)。

## 无摩擦知识系统的架构

要理解为什么这种特定的软件组合如此有效，可以看看[知识管理](/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/)管道的不同阶段：捕获（Capture）、组织（Organize）、提炼（Distill）和表达（Express），简称 CODE。

### Readwise 作为通用捕获引擎

Readwise 消除了[个人知识管理](/zh-cn/posts/customizing-obsidian-sidebar-with-commander-plugin-icons/)中最显著的瓶颈：手动提取高亮标注。无论你是在 Kindle 上阅读，在 Instapaper 或 Matter 中高亮文章，还是保存 Twitter 帖子，Readwise 都能将这些标注聚合到一个单一数据库中。这种聚合通过 API 集成在后台悄无声息地进行。

通过消除复制粘贴文本的手工劳动，你可以确保遇到的每一个产生共鸣的想法都能真正进入你的系统。Readwise 还支持通过 Snipd 等工具进行播客剪辑，并利用其移动应用程序的 OCR 功能进行纸质书扫描。

### Obsidian 作为提炼与链接中心

如果说 Readwise 是漏斗，那么 Obsidian 就是加工厂。Obsidian 完全基于存储在硬盘上的纯文本 Markdown 文件运行。这保证了即使在几十年后，你的笔记仍然可以访问，而不受任何公司服务器状态或订阅模式的影响。

Obsidian 的核心优势在于其双向链接。当 Readwise 将你的高亮标注导出到 Obsidian 时，这些标注不再是孤立的片段；它们变成了图谱中的节点。你可以将心理学书籍中的引语与行为经济学的文章链接起来，浮现出你本来无法自然建立的联系。

## 在 Obsidian 中设置 Readwise Official 插件

连接这两个工具的桥梁是 Obsidian 的 Readwise Official 插件。正确配置此集成至关重要，它可以防止你的库变成一个混乱且毫无格式的文本垃圾场。

### 安装与认证

首先，确保你有一个有效的 Readwise 订阅（Obsidian 导出功能需要完整版订阅）。在 Obsidian 中，导航到社区[插件](/zh-cn/posts/periodic-notes-plugin-weekly-reviews/)设置，如果你还没有关闭安全模式，请将其关闭，然后搜索 "Readwise Official"。安装并启用该插件。

点击“连接”后，系统会提示你在浏览器中对 Readwise 账户进行认证。授权完成后，插件将建立直接的 API 连接来提取你的高亮标注。

### 配置导出目录

默认情况下，Readwise 可能会将文件直接丢到你库的根目录下。这会立即造成混乱。在插件设置中，为传入的高亮标注指定一个专门的文件夹。一个常见的命名惯例是将此文件夹命名为 `Inbox/Readwise` 或 `Sources/Readwise`。

将这些原始高亮标注与你经过处理的、永久性的笔记（通常称为 "Evergreen" 或 "Zettelkasten" 笔记）分离开来，是维护一个整洁的第二大脑的基本原则。Readwise 文件夹充当了暂存区的作用。

## 自定义 Markdown 格式

Readwise 允许你使用 Jinja2 模板语言，自定义高亮标注到达 Obsidian 时的具体格式。花时间配置此模板，可以将原始文本转化为高度结构化的[元数据](/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/)。

### 页面标题与 YAML Frontmatter

在其网站的 Readwise 导出设置中，你可以规定导出文件的结构。首先将文件名设置为清晰简洁的格式，比如 `{{title}}`。

接下来，利用 YAML frontmatter。这使你能够根据来源类型自动标记文档，并捕获作者和 URL。一个标准的 frontmatter 块可能如下所示：

```yaml
tags: [source/{{category}}]
author: [[{{author}}]]
title: "{{title}}"
url: {{url}}
```

将作者姓名包裹在双括号 `[[{{author}}]]` 中，可以在 Obsidian 中自动创建指向该作者的双向链接。如果你导入了同一作者的三本书，Obsidian 会立即将它们连接起来。

### 高亮格式化规则

你还可以对高亮标注本身进行格式化。强烈建议在每个高亮标注后附加特定的位置或 URL。此外，如果你在阅读应用中对高亮处做了笔记，Readwise 也能将它们导出。

配置模板以区分作者的原话（也许可以格式化为引用块 `> {{highlight_text}}`）和你自己的评论（`- **我的笔记：** {{note}}`）。当你在几个月后重温这篇笔记时，这种视觉上的区分至关重要。

## 工作流：从原始高亮到永久知识

拥有自动化管道只是成功的一半。使用 Obsidian 和 Readwise 构建第二大脑需要一个刻意的例行程序来处理传入的信息。如果没有处理工作流，你只是在囤积文本。

### 筛选过程

预留出专门的时间——也许是每天结束时的 15 分钟，或者是周日上午的一个小时——来查看 `Inbox/Readwise` 文件夹中的新文件。

在这个筛选过程中，通读这些高亮标注。你经常会发现，一句在当时看来很深刻的话，在一周后由于缺乏上下文而变得平淡无奇。删除那些不再产生共鸣的高亮标注。对于那些仍然有价值的标注，加粗核心概念，或者用你自己的话重新书写。这被称为“渐进式总结”。

### 创建常青笔记

最终目标是从你的来源中提取核心思想，并将它们转化为独立的、原子化的笔记——通常被称为常青笔记（Evergreen notes）或卡片盒笔记（Zettels）。

当一个 Readwise 高亮标注激发了某个想法时，在你的主库中创建一个新笔记。用你自己的话把这个概念写下来，完全独立于原始的来源文本。然后，在这个新笔记的底部，创建一个指回 Readwise 来源文件的链接作为引用。

这个过程将你的库从一个收集他人思想的档案馆，转变为一个由你自己综合出来的想法所交织成的网络。

## Obsidian 与 Readwise 集成的进阶技巧

一旦基础管道顺畅运行，你就可以利用 Obsidian 可扩展的生态系统来增强 Readwise 导入的效用。

### 利用 Dataview 创建仪表盘

Obsidian 的 Dataview 插件允许你像查询数据库一样查询你的 Markdown 文件。因为你已经配置了 Readwise 模板以包含特定的 YAML frontmatter（例如 `tags: [source/book]`），你可以创建动态的仪表盘。

你可以编写一个简单的 Dataview 查询，自动列出你今年阅读过的所有书籍（按日期排序），或者提取某位特定作家撰写的所有文章。这会将你的 Readwise 文件夹从一个静态目录转变为一个动态图书馆。

### 间隔重复集成

Readwise 最初作为一个间隔重复工具推出，通过每日邮件呈现过去的高亮标注。虽然你可以继续使用 Readwise 应用程序来实现这一点，但你也可以将此功能直接引入 Obsidian。

使用 Obsidian Spaced Repetition 等插件，你可以将特定的高亮标注或你从中衍生出的原子化笔记格式化为[抽认卡](/zh-cn/posts/spaced-repetition-plugin-for-obsidian-flashcards/)。如果你正在使用第二大脑进行学术研究或学习新的技术技能，这特别有用，能够确保主动回忆最关键的信息。

## 实用建议：结构与权衡

当使用 Obsidian 和 Readwise 构建第二大脑时，你会面临影响系统长期可行性的结构性决策。为了避免常见的陷阱，以下是一些具体的建议。

**库结构的维度：**
保持极浅的文件夹层级。复杂的嵌套文件夹结构必然会崩溃，因为想法很少能完美地归入一个类别。依赖双向链接和标签而不是文件夹。一个行之有效的结构非常简单：
- `01_Inbox`（你的 Readwise 文件夹所在的地方）
- `02_Atlas`（内容映射图，索引笔记）
- `03_Notes`（你永久的、原子化的笔记）
- `04_Sources`（其他非 Readwise 的参考资料）

**[自动化](/zh-cn/posts/templater-plugin-tutorial-for-obsidian-power-users/)的权衡：**
Readwise 到 Obsidian 管道的主要权衡在于[生产力](/zh-cn/posts/obsidian-vs-reflect-for-fast-daily-journaling/)的错觉。因为捕获是完全自动化的，感觉好像你仅仅通过阅读就在完成工作。并非如此。自动化捕获是第二大脑的先决条件，而不是它的全部。你必须在 CODE 框架的“提炼”和“表达”阶段严格约束自己。如果你发现自己有 500 个未处理的来源文件，请暂停阅读，专注于提炼。

**处理更新：**
当你向正在阅读的一本书添加新的高亮标注时，Readwise 会更新 Obsidian 中的现有文件。请确保你的模板设置为“附加新的高亮标注”而不是覆盖整个文件，否则你在 Obsidian 中手动添加到该文件的任何笔记或格式，都会在同步时被销毁。

## 结论

使用 Obsidian 和 Readwise 构建第二大脑，在低摩擦捕获和高自主性组织之间提供了一个最佳的平衡。通过将收集高亮标注的机械性任务卸载给 Readwise，你将认知能量保留给了真正重要的事情：连接想法、识别模式和生成原创输出。虽然初始设置需要注意细节——特别是在配置[模板](/zh-cn/posts/advanced-obsidian-templates-for-literature-review-matrix/)和 frontmatter 方面——但最终的系统将是一个极具韧性、本地所有的知识库，其价值将在你的一生中不断复利增长。

## 常见问题解答

### 我需要 Readwise 的付费版本才能使用这个系统吗？
是的，将高亮标注导出到 Obsidian 的功能需要 Readwise 的完整订阅级别。较低的订阅级别仅提供每日高亮标注回顾功能。

### 如果我取消订阅，Readwise 会删除我在 Obsidian 中的高亮标注吗？
不会。因为 Obsidian 将你的笔记作为本地 Markdown 文件存储在你的硬盘上，所以 Readwise 已经导出的任何高亮标注都永久属于你，不受你的订阅状态影响。

### Readwise 如何处理纸质书的高亮标注？
Readwise 在其移动应用程序中提供了一个 OCR（光学字符识别）扫描仪。你可以对实体页面拍照，在屏幕上高亮文本，该应用程序将其转录，并将其与你的数字高亮标注一起直接同步到你的 Obsidian 库中。

### 如果我在 Obsidian 中重命名 Readwise 文件会发生什么？
如果你在 Obsidian 中更改了 Readwise 导出文件的文件名，Readwise 插件在下次同步时将无法识别它，并将使用原始名称创建一个重复的文件。最好保持生成时的文件名不变，并使用别名或链接来进行导航。

### 如果我使用 Readwise，我能在设备之间同步我的 Obsidian 库吗？
可以。Readwise 只是将文本文件存放到你的库中。然后，你可以使用 Obsidian Sync、iCloud Drive、Dropbox 或任何其他标准的文件同步方法，在你的移动设备或备用电脑上访问这些文件。

---

## 相关阅读

- [如何使用自托管服务器同步 Obsidian：完整指南](/zh-cn/posts/how-to-sync-obsidian-with-self-hosted-servers/)

- [使用 Raycast 自动化 Obsidian URI 协议：完整指南](/zh-cn/posts/obsidian-uri-protocol-for-automation-with-raycast/)
- [2026 年最适合 Zettelkasten 方法的笔记应用](/zh-cn/posts/best-note-taking-apps-for-zettelkasten-methodology-2026/)