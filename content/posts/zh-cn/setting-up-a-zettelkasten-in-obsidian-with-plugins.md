---
image: "/og/setting-up-a-zettelkasten-in-obsidian-with-plugins.webp"
editorSummary: >-
  在 Obsidian 中通过插件设置 Zettelkasten（卡片盒笔记法），可以将你的笔记库从一张空白画布转变为一个相互关联的知识引擎。我的指南围绕五个具体步骤展开：建立最小化的文件夹架构，安装如 Templater 和 Dataview 等必备插件，设计标准化的笔记模板，通过 MOC（内容映射）实现双向链接，以及执行每日的“收集-处理-连接”工作流。关键的权衡在于，虽然通过插件实现自动化可以减少创建笔记时的阻力，但过度依赖插件功能可能会掩盖 Zettelkasten 的核心原则——即它依赖于扁平的结构和硬链接，而非层级文件夹。如果没有自律的链接习惯，即使是最复杂的插件设置也会变成一个无法导航的档案馆。
authorNote: >-
  我在将我的研究笔记库从嵌套文件夹迁移到真正的 Zettelkasten 时，测试了这套完整的五步流程。当我启用 Templater 的基于文件夹的自动化，并将我的收件箱映射到闪念笔记模板时，记录笔记的阻力大幅下降。然而，我发现 Dataview 对 MOC 的查询只有在你保持严格的 Frontmatter（前文属性）纪律时才有效——我最初因为元数据不一致而丢失了三周的笔记，直到 Linter 插件追溯性地强制执行了格式化。随着时间的推移，这套工作流确实会产生复利效应，但设置阶段需要耐心。
manualRelated:
  - title: "科学研究论文的 Obsidian 工作流：完整指南"
    url: "/zh-cn/posts/obsidian-workflow-for-scientific-research-papers/"
  - title: "Obsidian Copilot 完整指南：与你的笔记聊天"
    url: "/zh-cn/posts/copilot-for-obsidian-chat-with-your-notes/"
  - title: "优化每日笔记工作流以提升生产力：五步指南"
    url: "/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/"
title: "在 Obsidian 中通过插件设置 Zettelkasten：五步指南"
description: "了解在 Obsidian 中使用插件设置 Zettelkasten 的确切流程。我们涵盖了建立互联笔记的最佳工具、工作流和文件夹结构。"
pubDate: "2026-05-02"
author: "Alex Chen"
tags: ["obsidian", "zettelkasten", "note-taking", "knowledge management"]
slug: "setting-up-a-zettelkasten-in-obsidian-with-plugins"
type: "informational"
---

# 在 Obsidian 中通过插件设置 Zettelkasten：五步指南

> **快速解答：** 在 Obsidian 中通过插件设置 Zettelkasten 涉及配置你的核心文件夹结构，安装像 Templater 和 [Dataview](/zh-cn/posts/creating-automated-index-pages-with-obsidian-dataview/) 这样的[自动化](/zh-cn/posts/templater-plugin-tutorial-for-obsidian-power-users/)插件，创建标准化的 Markdown [模板](/zh-cn/posts/advanced-obsidian-templates-for-literature-review-matrix/)，建立双向链接策略，并为闪念笔记（fleeting notes）、文献笔记（literature notes）和永久笔记（permanent notes）构建日常[工作流](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)。这将把 Obsidian 从一个基础的 Markdown 编辑器转变为一个自动化的、相互关联的知识引擎。

Zettelkasten 方法从根本上改变了[研究人员](/zh-cn/posts/obsidian-vs-heptabase-for-visual-research-workflows/)、软件工程师和作家处理信息的方式。这个由多产的社会学家 Niklas Luhmann 最初开发的“卡片盒”系统，依赖于创建细小、原子化且深度互联的笔记，让单个知识碎片能够随着时间的推移产生复利效应。虽然 Luhmann 依靠物理索引卡片和木制文件柜，但现代[知识工作者](/zh-cn/posts/understanding-the-difference-between-folders-and-tags-obsidian/)使用数字框架来复制和扩展这一过程。

Obsidian 被广泛认为是实现数字 Zettelkasten 的首选应用程序。因为它将所有数据作为纯文本 Markdown 保存在本地，并原生支持双向链接，所以它完美地反映了 Luhmann 原始方法的非层级、网络化本质。你拥有自己的文件，格式是开源的，而且即使有成千上万条笔记，该软件的运行速度也令人难以置信。

然而，由于其空白画布的特性，全新安装的 Obsidian 可能会让人感到不知所措。这款软件的真正力量是通过其强大的社区生态系统解锁的。在 Obsidian 中通过插件设置 Zettelkasten，可以让你消除重复性的格式设置，自动生成[元数据](/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/)，动态查询你的[数据库](/zh-cn/posts/obsidian-bases-native-update-review-2026/)，并在数千条笔记中保持结构的一致性。这篇详尽的五步指南准确地详细介绍了如何使用最有效的插件来构建一个面向未来的 Zettelkasten。

## 第一步：构建基础架构

在下载任何社区插件之前，你需要建立你的笔记库的物理架构。一个常见的错误是创建嵌套过深的文件夹层级。Zettelkasten 方法在扁平化结构中茁壮成长，在这种结构中，连接是通过链接而不是文件夹建立的。

### 最小化文件夹架构

有意地保持文件夹结构的宽泛性。在你的 Obsidian 笔记库中创建以下基础目录：

1. **00_Inbox**（收件箱）：这是所有尚未处理的闪念笔记、快速捕获和原始想法的存放区。
2. **10_Sources**（来源）：也称为文献笔记，这个文件夹存储你的高亮显示、阅读笔记以及对文章、书籍和播客的总结。
3. **20_Zettelkasten**（卡片盒）：你系统的核心。这个文件夹存放你的永久笔记——用你自己的话写成的原子化的、精心制作的想法。
4. **30_MOCs**（内容映射）：Maps of Content。这些作为更广泛主题的索引或路标。
5. **99_System**（系统）：笔记库的后台管理。在这里存放你的模板、脚本和资源文件（如图片、PDF）。

### 配置核心 Obsidian 设置

在添加第三方工具之前，导航到 Obsidian 的设置，并针对 Zettelkasten 工作流优化核心行为：

- **文件与链接 (Files & Links)**：启用“自动更新内部链接 (Update internal links automatically)”。如果你重命名一条笔记，Obsidian 将在你整个笔记库中更新每一个链接到该笔记的实例。
- **文件与链接 (Files & Links)**：将“新笔记的默认位置 (Default location for new notes)”设置为你的 `00_Inbox` 文件夹。这确保每一个新想法都能在没有任何阻力的情况下立即被捕获，等待后续处理。
- **文件与链接 (Files & Links)**：将“附件文件夹路径 (Attachment folder path)”设置为系统目录中的子文件夹，例如 `99_System/Attachments`。这可以使你的主要笔记文件夹保持干净，没有图片文件和 PDF。
- **核心插件 (Core Plugins)**：如果你偏好原生 ID 生成，请启用“Zettelkasten prefixer”，尽管我们很快会用一个更强大的社区替代品来替换它。确保“模板 (Templates)”已关闭，因为我们将使用一个更高级的社区插件来实现此功能。

## 第二步：安装必备的社区插件

社区插件架起了标准文本编辑器和复杂知识库之间的桥梁。在 Obsidian 中通过插件设置 Zettelkasten 时，少即是多。通过严格专注于自动化捕获和处理阶段的摩擦点的工具，避免“插件臃肿”。

### Templater：标准化笔记创建

Templater 是你系统中最重要的插件。与核心的模板功能不同，Templater 允许你使用变量和 JavaScript 函数自动将日期、光标位置和动态元数据插入你的笔记中。

1. 从社区插件菜单安装并启用 Templater。
2. 在 Templater 设置中，将你的“模板文件夹位置 (Template folder location)”设置为 `99_System/Templates`。
3. 启用“创建新文件时触发 Templater (Trigger Templater on new file creation)”。这确保只要你在特定文件夹中创建笔记，就会自动应用正确的模板。
4. 启用“文件夹模板 (Folder Templates)”，并将你的 Inbox 文件夹映射到你的闪念笔记模板，将你的 Sources 文件夹映射到你的文献笔记模板。

### Dataview：查询你的知识库

Dataview 将你的 Obsidian 笔记库变成一个数据库。它允许你编写类似 SQL 的查询，以根据标签、文件夹或 Frontmatter 元数据来聚合笔记。

在 Zettelkasten 背景下，Dataview 对于构建 MOC (Maps of Content) 和追踪未处理的笔记来说是无价的。例如，你可以编写一个简单的查询来列出你的 Inbox 中所有超过三天的笔记，确保没有任何东西被遗漏。

### Linter：保持笔记一致性

随着你的 Zettelkasten 增长到数千条笔记，格式不一致会成为一个大问题。Linter 插件在保存时自动格式化你的 Markdown 文件。

配置 Linter 以自动插入 YAML Frontmatter，确保一致的标题间距，正确格式化标签，并剥离尾部空格。这在你的整个笔记库中强制执行严格的结构完整性，而无需手动格式化。

## 第三步：设计你的 Zettelkasten 笔记模板

模板减少了创建新笔记时的认知负荷。通过预先定义结构，你可以完全专注于想法，而不是格式。在你指定的模板文件夹中创建以下三个模板。

### 闪念笔记模板

闪念笔记是原始的、未经处理的想法。这里的首要任务是速度。

```yaml
---
aliases: []
tags: [inbox, fleeting]
created: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
status: unprocessed
---
```
### <% tp.file.title %>

<% tp.file.cursor(1) %>

`<% tp.file.cursor(1) %>` 命令在文件创建的那一刻自动将你的打字光标放置在标题的正下方，消除了在打字前点击的需要。

### 文献笔记模板

文献笔记总结了你所消费的内容。它们需要有关原始来源的元数据，以保持学术的严谨性和可追溯性。

```yaml
---
aliases: []
tags: [source, literature]
created: <% tp.file.creation_date("YYYY-MM-DD") %>
author: 
url: 
type: 
---
```
### 来源总结

- **参考资料：** [[书籍或文章名称]]
- **关键要点：** 
  - <% tp.file.cursor(1) %>

### 永久笔记模板

永久笔记是你的 Zettelkasten 的原子单位。每条笔记都应该代表一个单一的、用你自己的话写成的独特想法，并脱离其原始的来源背景。

```yaml
---
aliases: []
tags: [zettel, permanent]
created: <% tp.file.creation_date("YYYY-MM-DD") %>
up: 
related: 
---
```
### <% tp.file.title %>

<% tp.file.cursor(1) %>

***
**参考资料：**
- 

注意 Frontmatter 中的 `up:` 和 `related:` 属性。这对于结构链接至关重要，我们将在下一步中讨论。

## 第四步：建立你的链接和标签策略

Zettelkasten 的决定性特征是笔记之间的连接网络。如果没有严格的策略，你的笔记库将很快变成一个无法导航的孤立文件网。

### 双向链接和“向上 (Up)”的概念

你的 Zettelkasten 中的每一个永久笔记都应该至少连接到另一个笔记。为此，最有效的框架是分配方向性链接：

- **向上链接 (Up Links)：** 这个特定的想法属于什么更广泛的主题？将这个笔记链接到一个更高层级的 MOC (Map of Content)。
- **相关链接 (Related Links)：** 哪些同类概念与这个想法相似、矛盾或互补？ 
- **向下链接 (Down Links)：** 哪些具体的例子或子论点可以澄清这个想法？

当创建一条关于“复利对指数基金的影响”的永久笔记时，“向上”链接会指向一个更广泛的 `[[Investing MOC]]`，而“相关”链接可能会指向关于 `[[Inflation]]` 或 `[[Risk Tolerance]]` 的笔记。

### 内容映射 (MOCs)

Luhmann 使用字母数字 ID（如 1a、1b、1b1）来划分主题分支。在 Obsidian 中，由于动态搜索和图谱可视化，这在很大程度上是不必要的。相反，请使用 MOC (Maps of Content)。

MOC 只是一个作为特定主题索引的笔记。使用 Dataview 插件，你可以自动化这些索引。例如，在你的 `[[Investing MOC]]` 中，你可以插入以下代码块：

```dataview
LIST
FROM "20_Zettelkasten"
WHERE contains(up, "[[Investing MOC]]")
```

这将动态列出你的笔记库中将 Investing MOC 指定为父级的每一个永久笔记，完全消除了手动更新索引文件的需要。

### 标签约定：状态与主题

在 Obsidian 中通过插件设置 Zettelkasten 时，一个常见的失败点是过度使用标签。如果你用 `#investing` 标记一条笔记，你就错失了将其链接到 `[[Investing MOC]]` 的机会。

应将标签主要保留用于定义笔记的**状态**或**类型**，而不是其主题。有效的 Zettelkasten 标签包括：
- `#inbox`：需要处理。
- `#literature`：来源总结。
- `#permanent`：完全综合的原子化想法。
- `#to-expand`：需要更多研究的笔记。

通过将标签视为工作流触发器而不是主题文件夹，你可以强迫自己在想法之间建立硬链接，从而强化你的神经网络图谱。

## 第五步：执行每日 Zettelkasten 工作流

随着架构、插件和模板的到位，系统已经准备就绪。一个 Zettelkasten 的价值取决于维护它的处理流程。该工作流包括三个不同的阶段：捕获、处理和连接。

### 阶段一：捕获闪念

当想法在会议中、阅读时或散步时闪现时，速度至关重要。打开 Obsidian，触发“新笔记”快捷键，然后输入想法。因为你已经配置了 Templater，让其将闪念笔记模板应用到你的 Inbox 文件夹，所以元数据会自动生成。在此阶段不要担心格式、拼写或链接。目标严格来说是捕获原始材料。

### 阶段二：处理成永久知识

每天或每周结束时，留出 20 到 30 分钟的时间来处理你的 Inbox。回顾你的闪念笔记和文献笔记。 

问问自己：这个想法值得在我的知识库中占有永久的一席之地吗？如果是，提取出单一的、原子化的想法。在 `20_Zettelkasten` 文件夹中创建一个新笔记。用你自己的话清晰地写下这个想法，就像你在向同事解释一样。如果一篇文献笔记包含三个不同的见解，它应该生成三个独立的永久笔记。

### 阶段三：连接协议

最后也是最关键的一步是将新的永久笔记放入网络中。 

1. 将“向上”链接分配给相关的 MOC。
2. 在你的笔记库中搜索相关的关键字。
3. 将新笔记链接到至少一个现有的永久笔记。
4. 打开现有的永久笔记，并确保反向链接的上下文是合理的。如果必要，添加一句简短的解释句。

一旦永久笔记被链接并标记为 `#permanent`，你就可以从 Inbox 中删除原始的闪念笔记，或者将文献笔记归档在你的 Sources 文件夹中。

## 实施系统时的常见陷阱

启动一个新系统的热情常常会导致结构性错误。在优化你的设置时，请记住这些陷阱：

**追求完美的工具栈**
花费数周时间配置 [CSS 片段](/zh-cn/posts/top-obsidian-css-snippets-for-clean-minimalist-look/)、测试复杂的 Dataview 脚本以及安装数十个社区插件是极其容易的。这是一种以生产力为名的拖延形式。Zettelkasten 的核心在于写作和链接。如果一个插件不能直接减少写作或链接时的阻力，就卸载它。

**撰写整体性的巨型笔记**
Zettelkasten 依赖于“原子化”笔记。如果你的永久笔记需要滚动浏览许多页，并且涵盖了三个不同的主题，它就无法被有效地链接。将庞大的想法分解成更小的、离散的原则。

**强行关联**
并不是每条笔记都能立刻完美地融入你的图谱中。如果你找不到相关的笔记来链接，不要强行建立表面的联系。创建该笔记，将其链接到一个宽泛的 MOC，并允许图谱数据库在未来自然地将其浮现出来。

## 常见问题解答

### 我需要在 Obsidian 中使用数字 ID 系统（如 Zettelkasten IDs）吗？
使用带时间戳的数字 ID（例如 202605021430）对于 Luhmann 在物理上查找纸质卡片至关重要，但在 Obsidian 中很大程度上是不必要的。Obsidian 的双向链接、无链接提及功能和搜索功能使自然语言标题在快速识别和检索信息方面更加有效。

### 对于基础的 Obsidian Zettelkasten，哪些插件是严格必需的？
从技术上讲，你可以通过使用 Obsidian 核心的模板 (Templates)、Zettelkasten 前缀器 (Zettelkasten Prefixer) 和搜索 (Search) 功能，在不使用任何社区插件的情况下构建一个 Zettelkasten。然而，为了实现简化的工作流，强烈建议将 Templater（用于高级日期和光标自动化）和 Dataview（用于动态生成 MOC）作为基础补充。

### 我如何在 Zettelkasten 中处理大量日常笔记？
日常笔记（Daily notes）充当着扩展的收件箱。与其将日常笔记作为永久存储位置，不如使用它来按时间顺序捕捉闪念。在处理阶段，从你的日常笔记中提取有价值的想法，将它们综合成独立的、原子化的永久笔记，并将它们链接到你的 Zettelkasten 结构中。

### 我可以在多台设备上同步我的 Zettelkasten 吗？
是的，因为 Obsidian 依赖于本地 Markdown 文件，你可以使用像 iCloud、Google Drive 或 Dropbox 这样的标准云存储提供商来同步你的笔记库。对于专门针对移动设备优化的无缝同步，付费的 Obsidian Sync 服务提供了最可靠的体验，并包含端到端[加密](/zh-cn/posts/configuring-obsidian-for-end-to-end-encrypted-sync/)。

### 在 Zettelkasten 中，标签和文件夹有什么区别？
文件夹会把一条笔记强行放到单一的、固定的位置，从而在想法之间制造人为的边界。标签则允许一条笔记同时存在于多个分类中。在 Zettelkasten 中，文件夹应该谨慎地用于宏观的架构划分（如 Inbox 与 Permanent），而标签则应该用于表明信息的状态或格式。

---

## 相关阅读

- [科学研究论文的 Obsidian 工作流：完整指南](/zh-cn/posts/obsidian-workflow-for-scientific-research-papers/)

- [科学研究论文的 Obsidian 工作流：完整指南](/zh-cn/posts/obsidian-workflow-for-scientific-research-papers/)

- [用于注重隐私的知识管理的 Obsidian 与 Logseq 对比](/zh-cn/posts/obsidian-vs-logseq-for-privacy-focused-knowledge-management/)

- [Obsidian Copilot 完整指南：与你的笔记聊天](/zh-cn/posts/copilot-for-obsidian-chat-with-your-notes/)
- [Obsidian 中用于时间戳视频笔记的 HoverNotes：完整指南](/zh-cn/posts/hovernotes-for-timestamped-video-notes-obsidian/)