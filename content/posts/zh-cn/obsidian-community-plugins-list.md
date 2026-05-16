---
image: "/og/obsidian-community-plugins-list.webp"
editorSummary: >-
  我整理了这份指南，旨在通过按用户角色和工作流而不是按字母顺序对插件进行分类，创造出比官方文档更友好的体验。Obsidian 社区插件列表涵盖了 1,700 多个扩展程序——从用于动态创建笔记的 Templater 到用于类似数据库查询的 Dataview——每个插件都附带有实际用例提示。一个关键的权衡是：虽然社区插件将 Obsidian 变成了一个完整的个人知识管理系统，但它们需要手动更新，并带有中低级别的安全风险，这与由 Obsidian 团队维护的核心插件不同。我列出了十个适合所有用户的必备插件，加上专门面向作家、学生和寻求即时、切实体会价值的高级用户的部分。
authorNote: >-
  我通过测试每个插件对实际工作流的影响而不仅仅是其功能数量来构建此列表。例如，我将 Templater 与 Calendar 结合使用，将每日设置的时间从两分钟缩短至三秒——这种微小的摩擦消除在几个月中会产生复利效应。最深刻的教训是：一次安装太多插件会导致决策疲劳。我建议先启用五个，彻底配置每一个，然后每周再添加更多。这可以防止你的库变得臃肿的常见陷阱，在这个陷阱中，大多数插件因为从未探索过其设置而被闲置。
manualRelated:
  - title: "Obsidian Mobile 社区插件：优势与设置指南"
    url: "/zh-cn/posts/how-to-install-community-plugins-in-obsidian-mobile/"
  - title: "用于年度回顾的 Obsidian Periodic Notes 插件设置：完整指南"
    url: "/zh-cn/posts/obsidian-periodic-notes-plugin-setup-for-annual-reviews/"
  - title: "Obsidian 习惯追踪：2024 年最佳插件"
    url: "/zh-cn/posts/best-obsidian-plugins-for-habit-tracking-2024/"
title: "Obsidian 社区插件列表：最佳附加组件与指南"
author: "Alex Chen"
date: 2026-04-29
slug: obsidian-community-plugins-list
description: "通过按用户角色和工作流（例如‘面向作家’、‘面向学生’）对插件进行分类，创造出比官方文档更友好的体验。"
keywords: ["best obsidian plugins", "how to install obsidian plugins", "obsidian dataview plugin", "obsidian templater plugin", "obsidian tasks plugin", "obsidian calendar plugin", "obsidian plugin directory", "obsidian core plugins"]
draft: false
type: "informational"
tags: ["obsidian", "community", "plugins", "obsidian community plugins list"]
---

# Obsidian 社区插件列表终极指南（2024）：按用户与[工作流](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)分类

*最后更新：2024 年 6 月 · 阅读时间：约 12 分钟*

---

## 太长不看 (TL;DR)

- **社区插件**将 Obsidian 从一个还不错的 Markdown 编辑器转变为一个完整的个人[知识管理](/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/)系统——但你需要知道哪些插件值得安装。
- 本指南按**用户类型**（作家、学生、高级用户）而非仅按字母顺序或下载量对最佳插件进行分类。
- 每个精选插件都包含一个**实用的用例提示**，让你可以不到五分钟内就能获得价值。

---

## 目录

1. [什么是 Obsidian 社区插件？](#什么是-obsidian-社区插件)
2. [如何安装社区插件](#如何安装社区插件)
3. [所有用户必备的 10 个插件](#所有用户必备的-10-个插件)
4. [面向组织与生产力的插件](#面向组织与生产力的插件)
5. [面向作家与内容创作者的插件](#面向作家与内容创作者的插件)
6. [面向视觉思考者与学生的插件](#面向视觉思考者与学生的插件)
7. [最新与值得关注的插件](#最新与值得关注的插件)
8. [对比表：热门插件一览](#对比表热门插件一览)
9. [常见问题解答](#常见问题解答)
10. [结论](#结论)

---

## 什么是 Obsidian 社区插件？

Obsidian 自带了一套可靠的**核心插件 (core plugins)**——例如反向链接、标签和关系图谱。这些插件由 Obsidian 团队构建和维护，内置于应用程序中，可以从“设置 > 核心插件”中打开或关闭。

**社区插件 (Community plugins)** 则完全不同。它们是由独立开发者构建的第三方扩展，并通过 Obsidian 的插件注册表分发。在撰写本文时，有超过 1,700 个社区插件，涵盖了从[间隔重复](/zh-cn/posts/spaced-repetition-plugin-for-obsidian-flashcards/)抽认卡到完整的日历视图、代码执行和类似数据库的查询等各种功能。

主要区别：

| 功能 | 核心插件 | 社区插件 |
|---|---|---|
| 维护者 | Obsidian 团队 | 独立开发者 |
| 数量 | ~25 | 1,700+ |
| 更新周期 | 随应用版本更新 | 因插件而异 |
| 安全审查 | 全面审查 | 有限（由志愿者进行代码审查） |
| 风险水平 | 无 | 低至中 |

### 关于安全性的说明

Obsidian 的**安全模式 (Safe Mode)** 会禁用所有社区插件。它的存在是因为社区插件会在你的库中运行任意 JavaScript 代码。这种风险是真实存在的，但在实践中很低——拥有数千次下载的流行插件都经过了许多人的审查。尽管如此，在安装任何冷门插件之前，请检查该插件的 GitHub 仓库。永远不要从官方插件浏览器之外的地方安装插件。

---

## 如何安装社区插件

运行你的第一个插件大约需要 90 秒。

**第 1 步 – 禁用安全模式**
前往 **设置 → 社区插件 → 关闭安全模式**。Obsidian 会显示一个警告。阅读该警告，如果你觉得可以接受，请点击*关闭*。

**第 2 步 – 打开插件浏览器**
在“社区插件”部分点击**浏览**。应用程序内部会打开一个可搜索的目录。

**第 3 步 – 安装并启用**
搜索你想要的插件（例如 “Templater”），点击它，然后点击**安装**。安装过程会将插件文件下载到你库中的 `.obsidian/plugins/` 文件夹。安装后，切换**启用**开关——仅安装是不起作用的。

**第 4 步 – 配置插件**
启用后，大多数插件都会在你的设置侧边栏中添加一个条目。在使用前花两分钟查看一下设置——你将避免 80% 的常见挫折。

**第 5 步 – 保持插件更新**
前往 **设置 → 社区插件**，然后点击**检查更新**。更新不是自动的，所以要把这养成每周的习惯。

> **关于同步的考虑：** 如果你在多台设备上使用 Obsidian，你的插件*文件*是存放在库中的。基于 Git 的同步插件可以复制它们，但这需要设置时间。Obsidian Sync 会通过端到端加密自动处理这个问题，如果你同时在 Mac、Windows、iOS 和 Android 上工作，这是零摩擦的选项。

---

## 所有用户必备的 10 个插件

这些是高级用户库中经常出现的插件，能为大多数工作流带来即时、切实的价值。

### 1. Templater
**它的作用：** 允许你使用动态值（当前日期、提示输入、JavaScript 函数）创建可重用的笔记[模板](/zh-cn/posts/advanced-obsidian-templates-for-literature-review-matrix/)。它取代了基础的核心模板插件。
**快速启动提示：** 创建一个 `Daily Note` 模板，自动填写日期并链接到前一天的笔记。你的早晨设置时间将从两分钟降至三秒。

### 2. Calendar
**它的作用：** 在侧边栏中添加一个日历面板。点击任何一天即可打开或创建每日笔记。
**快速启动提示：** 将它与 [Periodic Notes](/zh-cn/posts/obsidian-periodic-notes-plugin-setup-for-annual-reviews/)（同样免费）配合使用，以便在同一面板中管理每周和每月的复盘。

### 3. Tasks
**它的作用：** 将 Obsidian 变成一个功能强大的任务管理器。添加截止日期、重复周期、优先级，并在你的整个库中提供全局任务查询视图。
**快速启动提示：** 使用 `Tasks: Create or edit task` 命令面板快捷键来添加结构化任务，而无需记住语法。

### 4. Dataview
**它的作用：** 像数据库一样查询你的库。在代码块中编写类似 SQL 的查询，以通过标签、日期、字段或文件夹提取笔记。
**快速启动提示：** 在处理 TABLE 查询之前，先从 `LIST FROM #project` 开始。复杂的功能可以慢慢来。

### 5. Obsidian Git
**它的作用：** 按照你设定的时间表，自动提交并将你的库推送到 GitHub 仓库。
**快速启动提示：** 将自动备份设置为每 10 分钟一次。现在你的每一条笔记都有了完整的版本历史，而你完全不需要操心。

### 6. QuickAdd
**它的作用：** 创建宏以快速捕捉信息——将一本书添加到阅读列表、记录会议笔记、追加到每日笔记——而无需手动导航到那里。
**快速启动提示：** 设置一个绑定了快捷键的 Capture 宏。使用它 48 小时后，你就会想再设置五个。

### 7. Natural Language Dates
**它的作用：** 在任何地方输入 ` @tomorrow` 或 ` @docs/BUGS_FOR_NEXT_SHIFT.md Friday`，它会自动转换为格式化的日期链接。
**快速启动提示：** 如果你使用 Tasks 或任何以日期为主的工作流，这是不可或缺的。

### 8. Linter
**它的作用：** 在保存时自动格式化你的笔记——统一的 YAML frontmatter、标题级别、列表间距、换行符。
**快速启动提示：** 立即启用“Lint on save”（保存时格式化）。它会在后台默默修复你没有意识到的糟糕排版。

### 9. Advanced Tables
**它的作用：** 让编辑 Markdown 表格变得可以忍受。使用 Tab 键在单元格之间导航，自动格式化列，并添加排序按钮。
**快速启动提示：** 如果你曾经手动敲击空格来对齐 Markdown 表格的竖线，请立刻安装这个插件。

### 10. Editing Toolbar
**它的作用：** 添加一个格式化工具栏（粗体、斜体、代码、标注），适合不想记住每个 Markdown 快捷键的用户——在移动设备上特别有用。
**快速启动提示：** 自定义工具栏，只包含你实际使用的六个命令。默认的工具栏太繁杂了。

---

## 面向组织与生产力的插件

### Dataview：构建项目仪表板

Dataview 是这个列表中最强大的插件。安装它，然后创建一个名为 `Projects Dashboard` 的笔记并粘贴以下代码：

```dataview
TABLE file.mtime AS "Last Modified", status AS "Status"
FROM #project
SORT file.mtime DESC
```

现在你就拥有了一个实时表格，显示所有标记为 `#project` 的笔记，并按最后编辑时间排序。为每个项目笔记添加一个 `status` 字段（例如 `status: active`），仪表板就会自动更新。

### Kanban
添加了一个由纯 Markdown 支持的拖放式看板。每张卡片都是列标题下的一个部分。移动卡片，底层文件也会随之更新。非常适合冲刺规划、内容日历或任何具有明确阶段的工作流。

### Projects
一个较新的插件（由 Marcus Olsson 开发），用于从特定文件夹构建结构化视图——表格、看板、日历。可以把它看作是带有精美图形界面的 Dataview。适合那些想要类似数据库的视图但又不想编写查询代码的用户。

> 📚 **让你的工作流更上一层楼：** 当你背后有可靠的方法论支撑时，这些组织插件会发挥更好的作用。Tiago Forte 的《构建第二大脑》课程教授了 PARA 方法，这与这些工具构建你的库的方式直接契合。[Zettelkasten](/zh-cn/posts/linking-your-notes-for-better-knowledge-discovery-obsidian/) 践行者应该去看看 Linking Your Thinking 研讨会。

---

## 面向作家与内容创作者的插件

### Longform
专为长篇写作项目设计。创建一个手稿结构，其中每个场景或章节都是一个单独的笔记。该插件将它们拼接成一个单一的编译文档。对于小说家、编剧和任何撰写超过 5,000 字内容的人来说都非常有用。

**用例：** 为你的小说创建一个新的 Longform 项目。将场景作为单独的笔记添加。在 Longform 面板中通过拖放对它们进行重新排序。在发送给编辑之前将其编译为单个文档——不需要复制粘贴，也不会丢失格式。

### Readwise Official
Readwise 可以将你所有的 [Kindle 标注](/zh-cn/posts/obsidian-plugin-for-automated-kindle-highlights-sync/)、网络文章注释、播客文字稿和 Twitter/X 保存内容作为结构化笔记直接同步到你的库中。该插件会自动处理同步过程。

**用例：** 在 Kindle 电子书中高亮显示一段文字，十分钟后打开 Obsidian，你会发现该高亮内容已经链接到这本书的笔记中，并且已经应用了你的标签和[元数据](/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/)。

### Paste URL Into Selection
一个微型插件，却能极大地提升生活质量。选中文本，粘贴 URL，选中的文本就会自动变成一个 Markdown 链接。消除了手动输入 `[text](url)` 格式的麻烦。

### Omnivore
一个免费、开源的稍后阅读服务，带有一个可以将保存的文章、高亮和笔记导入进来的 Obsidian 插件。对于基础的文章捕捉来说，这是一个非常好的 Readwise 免费替代品。

---

## 面向视觉思考者与学生的插件

### Excalidraw
Obsidian 中的 Excalidraw 是一个直接嵌入在你库中的白板工具。你可以绘制图表、线框图和概念图。最重要的是，你可以将 Obsidian 笔记嵌入*在* Excalidraw 绘图中，也可以将绘图嵌入在笔记中——这些链接是双向的。

**用例：** 为一篇[研究](/zh-cn/posts/obsidian-vs-devonthink-for-large-research-archives/)论文进行头脑风暴。打开一个新的 Excalidraw 画布。将你的参考来源笔记作为嵌入卡片拖放进去。画箭头显示论点之间的关系。保存它。现在你的关系图谱也能显示所有这些连接了。

### Mind Map
将任何项目符号形式的笔记实时渲染为思维导图。打开一个带有嵌套列表项的笔记并切换思维导图视图——无需重新绘制，即时呈现视觉层级结构。

### Spaced Repetition
使用 SM-2 算法（与 Anki 背后的算法相同）将你的笔记转变为抽认卡复习系统。在任何笔记的问答对中添加 `#card`。该插件会安排复习并跟踪你的记忆保留情况。

**学生用例：** 像往常一样做课堂笔记。在关键定义中添加 `#card`。该插件会在合适的间隔时间让你复习这些内容。不再需要单独的抽认卡应用了。

---

## 最新与值得关注的插件

*本节反映了在 2024 年中期逐渐获得关注的插件。*

- **Canvas Mindmap** – 使用思维导图专用的键盘快捷键来扩展 Obsidian 内置的 Canvas 功能。
- **Bases** – 感觉很原生的属性数据库视图，目前仍处于抢先体验阶段。
- **[Smart Connections](/zh-cn/posts/smart-connections-plugin-for-emergent-ideas/)** – 使用本地 AI 来发掘语义相关的笔记，无需依赖云服务。
- **Surfing** – 在 Obsidian 内部嵌入一个完整的网络浏览器。虽然比较小众，但对研究工作流来说非常实用。

---

## 对比表：热门插件一览

| 插件 | 类别 | 复杂度 | 移动端支持 | 最适合人群 |
|---|---|---|---|---|
| Templater | 生产力 | 中等 | 是 | 所有人 |
| Dataview | 组织 | 高 | 有限 | 高级用户 |
| Tasks | 任务管理 | 中等 | 是 | 所有人 |
| Obsidian Git | 备份 | 中等 | 否 | 桌面用户 |
| Longform | 写作 | 低 | 是 | 作家 |
| Excalidraw | 视觉化 | 低 | 是 | 视觉思考者 |
| Readwise Official | 导入 | 低 | 是 | 狂热阅读者 |
| Spaced Repetition | 学习 | 低 | 是 | 学生 |
| Kanban | 项目管理 | 低 | 是 | 项目经理、规划者 |
| QuickAdd | 捕捉 | 中等 | 是 | 高级用户 |

---

## 结论

Obsidian 社区插件列表并不是一个单纯的功能集——它是一个生态系统。这里介绍的插件可以将一个空白的库变成写作工作室、学生知识库、项目跟踪器或阅读系统，这取决于你如何组合它们。

先从三个开始：**Templater**、**Tasks** 和 **Calendar**。先适应它们。当你准备好查询你的笔记时，再添加 **Dataview**。然后以此为基础层层叠加特定类别的工具。

如果你希望你的库在所有设备上无缝同步，而不想碰 Git 仓库，Obsidian Sync 是最干净的途径——它由同一个团队开发，并会自动保持你的插件配置同步。

如果你已经组装好了工具，但希望在此之上运行经过验证的方法论，那么对于任何大量阅读的人来说，Readwise 都值得一看——如果你曾经丢失过你需要的高亮标注，仅仅是 Obsidian 的集成功能就足以值回订阅费了。

最好的库是你真正会去使用的库。选择那些能为你特定工作流减少摩擦的插件，忽略其余的。

---

## 常见问题解答

### 社区插件安全吗？

对于流行的插件来说，通常是安全的。Obsidian 团队会进行基本的安全审查，而且高下载量的插件也受到了社区的仔细检查。在安装任何下载量低于 1,000 的插件之前，请查看该插件的 GitHub 以获取最近的提交和未解决的问题 (Issues)。永远不要安装在官方浏览器之外分享的插件。

### 多少个插件才算太多？

Obsidian 在启动时会加载所有启用的插件。在实践中，大多数用户在插件数量低于 30-40 个时不会感觉到性能下降。当超过 50-60 个时，在旧硬件上启动时间和用户界面延迟会变得明显。经验法则：如果你在 30 天内没有使用过某个插件，就将其禁用。

### 社区插件可以在 Obsidian Mobile (移动版) 上使用吗？

大多数可以，但也有例外。依赖于 Node.js 模块或系统级访问权限（如 Obsidian Git）的插件无法在 iOS/Android 上运行。在移动设备上围绕某个插件构建工作流之前，请务必查看其 README 文件中的移动端兼容性说明。Editing Toolbar、Tasks、Templater 和 Calendar 都能在移动设备上稳定运行。

### 如果插件更新后出现故障，我该怎么办？

首先，检查该插件的 GitHub Issues 页面——很可能其他人已经报告了这个问题。暂时禁用该插件。如果你急需该功能，可以通过 BRAT 插件进行回滚，它允许你直接从 GitHub 安装特定的旧版本。大多数破坏性的问题都会由活跃的维护者在几天内修复。

### Dataview 和原生的属性 (Properties) 功能有什么区别？

Obsidian 的原生 Properties（在 v1.4 中引入）允许你通过图形界面向笔记添加结构化的 YAML 字段。Dataview 读取这些字段并允许你跨笔记*查询*它们。它们是相辅相成的：使用 Properties 来添加结构化数据，使用 Dataview 来在你的库中发掘和显示这些数据。

## 相关阅读

- [Obsidian Mobile 社区插件：优势与设置指南](/zh-cn/posts/how-to-install-community-plugins-in-obsidian-mobile/)

- [为什么在 Obsidian Mobile 上使用社区插件？](/zh-cn/posts/how-to-install-community-plugins-in-obsidian-mobile/)
- [什么是 Excalidraw 以及为什么在 Obsidian 中使用它？](/zh-cn/posts/excalidraw-plugin-for-obsidian-review/)
- [为什么在 Obsidian 中构建 Zettelkasten？](/zh-cn/posts/setting-up-a-zettelkasten-in-obsidian-with-plugins/)
- [为什么在 2024 年使用 Obsidian 追踪习惯？](/zh-cn/posts/best-obsidian-plugins-for-habit-tracking-2024/)