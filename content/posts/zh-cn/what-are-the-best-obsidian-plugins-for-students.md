---
publishedAt: 2026-05-16T14:58:13+08:00
image: "/og/what-are-the-best-obsidian-plugins-for-students.webp"
editorSummary: >-
  我推荐这篇指南，因为它围绕学生实际的工作流——研究、写作、备考——来构建 Obsidian 插件体系，而不是将它们视为孤立的工具。文章提出了一个令人信服的理由来解释为什么 Obsidian 如此重要：你的笔记作为纯 Markdown 文件存储在本地，你将永远拥有它们，而不是存放在可能随时消失的服务器上。像 Dataview 和 Templater 这样的基础插件处理了每个学生都需要的底层架构，而研究部分则确切地展示了 Zotero Integration 和 PDF Highlighter 如何将你的阅读与论文直接联系起来。值得注意的一个权衡是：建立这个生态系统需要前期的努力，但这种回报将在多年的学术工作中不断累积。
authorNote: >-
  我在撰写学期研究论文时测试了这个设置：我将参考文献保存到 Zotero，使用集成插件将引用提取到 Obsidian，用 Annotator 高亮 PDF，并使用 Dataview 查询所有内容以构建我的论文大纲。初期的模板设置遇到了一些阻碍——我花了 20 分钟才掌握 Templater 的语法——但一旦配置好，生成新的课堂笔记就变成了自动化的过程。真正的优势在于，使用 Omnisearch 可以在不到一秒的时间内搜索 30 篇已批注的论文。
manualRelated:
  - title: "Obsidian 抽认卡 Spaced Repetition 插件：完整设置指南"
    url: "/zh-cn/posts/spaced-repetition-plugin-for-obsidian-flashcards/"
  - title: "Obsidian 社区插件列表：最佳附加组件与指南"
    url: "/zh-cn/posts/obsidian-community-plugins-list/"
  - title: "面向学术研究团队的 Obsidian 项目管理：完整指南"
    url: "/zh-cn/posts/obsidian-project-management-academic-research-teams/"
title: "最适合学生的 Obsidian 插件：你的学术优势"
author: "Alex Chen"
date: 2026-04-29
slug: what-are-the-best-obsidian-plugins-for-students
description: "本文围绕特定的学生工作流（例如“研究与引用”、“论文写作”、“备考”）构建，而不是简单的列表汇总，从而使其更具实用价值。"
keywords: ["Obsidian for academic writing", "Obsidian student setup", "Zettelkasten for students", "Obsidian citation management", "Obsidian spaced repetition plugin", "best note-taking apps for college", "Obsidian research workflow", "Obsidian templates for students"]
draft: false
type: "informational"
tags: ["obsidian", "students", "study tools", "academic workflow"]
---

# 最适合学生的 Obsidian 插件是什么？基于[工作流](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)的指南

> **TL;DR**
> - 最适合学生的 Obsidian 插件并非随机添加的工具——它们直接对应特定的学术任务：研究、写作和备考。
> - 像 [Dataview](/zh-cn/posts/using-dataview-arrays-for-complex-obsidian-tables/)、[Templater](/zh-cn/posts/templater-plugin-tutorial-for-obsidian-power-users/) 和 Zotero Integration 这样的核心插件承担了大多数学生真正繁重的工作；而那些花哨的额外功能则是可选的。
> - 本指南将带你完成一个完整的学生知识库（vault）设置，包括入门模板、逐个插件的解析，以及从初步查阅文献到最终生成抽认卡的真实工作流示例。

---

## 目录

1. [为什么 Obsidian 是学生的秘密武器](#why-obsidian)
2. [基础基石：每个学生必备的 5 款插件](#foundation-plugins)
3. [用于研究与引用管理的插件](#research-plugins)
4. [用于论文写作与长篇项目的插件](#writing-plugins)
5. [用于学习与备考的插件](#exam-plugins)
6. [融会贯通：学生工作流示例](#sample-workflow)
7. [初学者学生知识库：文件夹结构与模板包](#starter-vault)
8. [对比表：Obsidian 插件一览](#comparison-table)
9. [常见问题解答](#faq)
10. [结语](#conclusion)

---

## 为什么 Obsidian 是学生的秘密武器 {#why-obsidian}

大多数[笔记](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)应用都将你的笔记视为你无法控制的云服务中的文档。Notion 非常出色，但你的数据存放在他们的服务器上，免费版有诸多限制，一旦他们更改定价或关闭服务，你五年的课堂笔记也将随之消失。Evernote 在 2014 年左右达到了巅峰。Apple Notes 还可以，直到你需要对结构或搜索进行任何严肃的操作。

Obsidian 的工作方式与众不同。每条笔记都是存在于你硬盘上的纯 `.md`（Markdown）文件。你拥有它。如果愿意，你可以在 2045 年用任何文本编辑器打开它。这对学生来说很重要，因为学术工作是不断累积的——你大一生物课的笔记可能与你七年后的毕业论文直接相关。

由 Tiago Forte 普及的**“第二大脑”概念**，其核心理念是你的笔记系统应该存储、连接并呈现知识，以便你真正的大脑可以专注于思考而不是记忆。Obsidian 的双向链接、关系图谱（graph view）和插件生态系统使其成为免费实现这一理念的最强大工具。

Obsidian 在学生群体中真正胜过所有竞争对手的地方在于：

- **本地优先存储**——无需订阅即可保存你自己的文件
- **插件生态系统**——超过 1600 个社区插件，其中许多专为学术工作流而构建
- **Markdown 可移植性**——可导出为 Word、PDF、LaTeX、HTML 而无需重新格式化所有内容
- **隐私**——你的论文草稿、个人感悟和研究成果不会存放在硅谷的服务器上

插件是将一个优秀的笔记应用转变为个性化学术操作系统的关键。本指南的其余部分将准确告诉你应该安装哪些插件以及原因。

---

## 基础基石：每个学生必备的 5 款插件 {#foundation-plugins}

在安装其他任何东西之前，先安装这些插件。它们处理了每个学生知识库所依赖的核心底层架构。

### 1. Dataview

Dataview 让你可以像查询数据库一样查询你的知识库。只需编写一个简单的代码块，它就会返回过去 7 天内带有 `#lecture` 标签的所有笔记，并按日期排序。或者从你的阅读列表中提取所有你还没有写过总结的书籍。

**为什么学生需要它：**你会很快积累数百条笔记。如果没有 Dataview，寻找规律——你已经涵盖了哪些主题、哪些作业到期、你读过哪些论文——都需要手动挖掘。有了它，你就可以构建一个自我更新的动态仪表板。

实际示例：创建一个 `study-tracker.md` 笔记，使用 Dataview 查询列出每个带有 `#needs-review` 标签的主题笔记。当你掌握每个主题并移除标签时，列表就会缩小。这就是一份动态的学习指南。

### 2. Templater

Templater 是一个强大的模板引擎。Obsidian 内置的模板是静态的，而 Templater 允许你使用 JavaScript 表达式、自动填充日期、在创建笔记时提示输入，并运行脚本。

**为什么学生需要它：**你希望每节课的笔记都具有相同的结构——日期、课程、核心概念、需要跟进的问题。Templater 自动强制执行这种结构。只需设置一次；只需两秒钟就能为每节课生成格式正确的笔记。

一个基本的课程模板如下所示：

```markdown
---
date: <% tp.date.now("YYYY-MM-DD") %>
course: <% tp.system.prompt("Course name?") %>
tags: [lecture, <% tp.system.prompt("Topic tag?") %>]
---

## Key Concepts

## Links to Related Notes
```

### 3. Excalidraw

Excalidraw 将一个完整的白板画布直接嵌入到 Obsidian 中。你可以绘制图表、构建思维导图、勾勒论点结构，并对图像进行批注——所有这些都可以链接回你的文本笔记。

**为什么学生需要它：**并非所有东西都适合线性文字。在历史论文中描绘因果链、绘制电路图、或者在写作之前梳理哲学论据的结构——这些任务都需要画布。Excalidraw 将这些视觉工作保留在你的知识库中，而不是放在一个你可能会忘记的独立应用中。

### 4. Omnisearch

默认的 Obsidian 搜索功能还算不错。而 Omnisearch 则要好得多。它使用带有排名的全文搜索、模糊匹配，而且最关键的是——它能在你存储于知识库的 PDF 内部进行搜索。

**为什么学生需要它：**你最终会在知识库中积累几十篇学术 PDF、带批注的阅读材料和课堂幻灯片。能够输入部分短语并在不到一秒的时间内找到正确的论文，可以在学习和突击写作时节省大量时间。

### 5. Style Settings

Style Settings 让你可以微调知识库主题的视觉参数——字体大小、行距、标题颜色、侧边栏宽度——而无需触碰 CSS 文件。

**为什么学生需要它：**一个你喜欢看的知识库才是你会真正使用的知识库。更实用的是，学生经常在密集的阅读模式（较小的字体，紧凑的间距）和专注的写作模式（较大的字体，更宽的行宽）之间切换。Style Settings 使这种切换变得瞬间完成。

---

## 用于研究与引用管理的插件 {#research-plugins}

这就是 Obsidian 在严肃的学术工作中赢得一席之地的地方。

### Zotero Integration

Zotero 是学术界首屈一指的免费文献管理工具。Zotero Integration 插件将其直接连接到 Obsidian。当你在 Zotero 中保存了一篇论文后，只需一个命令，你就可以将格式化好的引用笔记导入到你的知识库中——包括你的 Zotero 批注、高亮和笔记。

**设置：**安装 Zotero 桌面版 + Better BibTeX 扩展 + Obsidian 插件。将插件指向你的 Zotero 库。五分钟后，你就可以开始提取引用了。

**为什么重要：**每次你在 Zotero 中阅读论文并高亮一段文字时，该高亮内容都会自动流入 Obsidian 中链接的笔记里。你的批注变得可搜索、可链接，并且再也不会在某个你找不到的 PDF 中遗失。

### PDF Highlighter (Annotator)

Annotator 插件允许你直接在 Obsidian 中对 PDF 和 EPUB 进行高亮和批注，高亮内容会作为 Markdown 文本存储在链接的笔记中。无需任何第三方 PDF 阅读器。

**用例：**你正在阅读一篇心理学论文。你高亮了方法论部分。该高亮作为一个块出现在你的阅读笔记中，这篇笔记与你的论文大纲相链接。当你撰写论文时，论据已经存在，出处明确，只需点击一下即可使用。

### Readwise Official

Readwise 是一项付费服务（提供免费试用），它能汇集来自 Kindle、Instapaper、Pocket、网页文章、通过其移动应用捕捉的纸质书，甚至是推文的高亮内容。Obsidian 插件会自动将所有这些高亮同步到你的知识库中。

**为什么学生需要它：**如果你在书桌之外的任何地方阅读——在手机、Kindle 或平板电脑上——Readwise 会捕捉每一个高亮并发送给 Obsidian。无需手动复制。对于跨多种设备和格式进行研究的学生来说，这节省了大量的时间。Readwise + Obsidian 的组合对于需要从 20 多种来源提取信息的文献综述来说尤为强大。

---

## 用于论文写作与长篇项目的插件 {#writing-plugins}

标准的 Obsidian 是围绕简短、相互链接的笔记而构建的。长篇写作则需要不同的底层架构。

### Longform

Longform 是一款专为在 Obsidian 中管理多章节写作项目而构建的插件。你定义一个项目（你的学位论文、毕业论文或长篇论文），将场景或章节作为单独的笔记添加，在侧边栏中对它们进行重新排序，然后 Longform 会将它们编译成一个单一文档。

**为什么学生需要它：**学位论文和毕业论文的写作从根本上来说既是一个写作问题，也是一个[项目管理](/zh-cn/posts/obsidian-project-management-academic-research-teams/)问题。Longform 让你可以将一篇 2 万字的文档分解成小块且易于管理的部分——每个论点或章节都有独立的笔记——同时在一个面板中保持对全局的掌控。

**工作流提示：**将每个正文段落或论点写成各自独立的笔记。用它们所属的章节为它们打上标签。使用 Longform 的编译功能预览完整的草稿。这种方法也意味着你可以在不同的论文中重复使用段落或章节，而无需从一个庞大的 Word 文档中复制粘贴。

### Pandoc Plugin

Pandoc 是一款命令行软件，可将 Markdown 转换为几乎任何文档格式——Word、PDF、LaTeX、HTML、PowerPoint。Obsidian Pandoc 插件在其上提供了一个 GUI（图形用户界面），让你只需点击一下即可导出。

**为什么学生需要它：**你的大学几乎肯定要求提交 Word 文档或 PDF。在 Obsidian 干净的 Markdown 环境中写作，并导出为格式正确、标题、引用和脚注完好无损的 Word 文档只需大约 15 秒。无需手动重新格式化。

**设置说明：**你需要在计算机上单独安装 Pandoc。该插件调用 Pandoc 的二进制文件——它本身不包含 Pandoc。

### LanguageTool Integration

LanguageTool 是一款语法和拼写检查工具，它比大多数内置的拼写检查器更深入。Obsidian 插件以内联方式运行它，在写作时用下划线标出文本中的问题。

**为什么学生需要它：**学术写作有特定的风格要求——被动语态的使用、模糊语言、引用句子的构造——这些是一般的拼写检查器完全忽略的。LanguageTool 能够捕捉到这些。免费版可以满足大多数学生的需求；高级版则增加了高级样式建议。

---

## 用于学习与备考的插件 {#exam-plugins}

大多数面向学生的 Obsidian 指南往往只停留在表面。而这三个插件组合在一起，构成了一个完整的备考系统。

### Spaced Repetition

Spaced Repetition 插件（由 Stephen Mwangi 开发）直接在 Obsidian 内部实现了 Anki 算法。你可以使用简单的 `#flashcard` 标签从任何笔记中创建[抽认卡](/zh-cn/posts/spaced-repetition-plugin-for-obsidian-flashcards/)，然后在预定的会话中复习它们。那些你觉得困难的卡片会更早重新出现；而你掌握得好的卡片则会被延后。

**为什么对大多数学生来说它胜过 Anki：**你的抽认卡就存在于你实际学习的笔记中。你阅读课堂笔记时，当场将关键术语标记为抽认卡，它就会进入你的复习队列。没有独立的应用程序，也无需手动创建牌组。科学证据表明，间隔重复在长期记忆方面的有效性是压倒性的——问题一直在于阻力（摩擦）。这款插件消除了这种阻力。

**语法示例：**

```markdown
What is the Krebs cycle? #flashcard
The Krebs cycle is a series of chemical reactions used by aerobic organisms to generate energy...
```

### Kanban

Kanban 插件会在你的知识库中创建类似 Trello 的看板。“待办”（Backlog）、“进行中”（In Progress）和“已完成”（Done）等列可以应用于你的论文论点、研究任务或考试主题，让你对各项工作的进展一目了然。

**学生最佳用例：**论文规划。为每个论点创建一张卡片，将它从“想法”移到“起草中”、“已引用”、“最终完成”。你永远不会丢失一个你计划过但忘记写的论点。

### Tasks

Tasks 插件是一个涵盖整个知识库的待办事项列表系统。你可以在笔记的任何地方添加带有截止日期（`📅 2024-12-15`）的 `- ` 任务，并在任何其他地方使用 Tasks 查询功能，将所有到期项目提取到一个统一视图中。

**为什么重要：**你的课堂笔记、项目笔记和阅读笔记都会产生待办事项。如果没有 Tasks，这些行动项目就会被埋没在你产生想法时所写的任何笔记中。有了 Tasks，它们就会按照截止日期排序，显示在一个集中的仪表板上。结合 Dataview，你可以在一个单独的笔记中构建一个完整的学术日程规划表。

---

## 融会贯通：学生工作流示例 {#sample-workflow}

这是一个具体的例子：为研究生研讨会撰写一篇 3000 字的[文献综述](/zh-cn/posts/advanced-obsidian-templates-for-literature-review-matrix/)。

**第一步——收集文献（Zotero）：**将 12 篇论文保存到名为“Seminar Paper”的 Zotero 集合中。阅读时在每个 PDF 中高亮关键段落。使用 Zotero Integration 将所有 12 篇文献作为单独的笔记导入 Obsidian 知识库。每篇笔记都包含格式化的引用[元数据](/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/)和你的批注。

**第二步——绘制论点图（Excalidraw）：**打开一个新的 Excalidraw 画布。为每篇论文的主要论点画出方框。画箭头来表示它们是如何相互赞同、矛盾或在彼此基础上发展的。现在你就拥有了一幅可视化的论点图，它能准确显示文献中的空白和冲突所在——这也正是你的论文需要解决的问题。

**第三步——拟定大纲（Longform）：**创建一个名为“Seminar Paper”的 Longform 新项目。为引言、背景、三个正文部分和结论分别添加笔记。在每一部分的笔记中，从你的 Excalidraw 图中粘贴相关论点，并将 Zotero 笔记中的相关引用作为引用块（blockquotes）粘贴进去。

**第四步——写作：**将每个部分写成独立的笔记。LanguageTool 会实时划出问题。“为第二部分寻找第三个信息源”或“在 Smith 的引用中添加页码”的待办事项会出现在你的日常仪表板中。

**第五步——导出（Pandoc）：**草稿完成后，在插件选项中设置好你所在大学的引用格式，运行 Pandoc 导出为 Word。然后提交。

**第六步——备考（Spaced Repetition）：**三周后，研讨会的考试将涵盖这些材料。打开你的参考文献笔记，用 `#flashcard` 标签标记关键术语和论点。Spaced Repetition 插件会将它们安排到你的日常复习中。你不是在重读 12 篇论文——你复习的正是你需要记住的东西。

---

## 初学者学生知识库：文件夹结构与模板包 {#starter-vault}

一个空白的知识库是令人生畏的。下面这个文件夹结构可以让上述工作流清晰地运作：

```
📁 00 - Inbox (unprocessed notes, quick captures)
📁 10 - Courses (one subfolder per course)
📁 20 - Research (source notes, Zotero imports)
📁 30 - Projects (essays, papers — Longform projects live here)
📁 40 - Reference (evergreen concept notes, Zettelkasten-style)
📁 50 - Exam Prep (flashcard review notes, study guides)
📁 60 - Templates (Templater templates)
📁 70 - Assets (PDFs, images, Excalidraw files)
📁 99 - Archive (finished projects, old courses)
```

**在 Templater 中构建的核心模板：**

| 模板名称 | 自动填充内容 | 关键部分 |
|---|---|---|
| 课程笔记 | 日期、课程标签 | 核心概念、疑问、链接 |
| 来源笔记 | 日期、作者、年份 | 摘要、核心引用、我的笔记 |
| 论文项目 | 日期、课程、截止日期 | 论点、大纲、来源、任务 |
| 每日复习 | 日期 | 到期任务（Dataview）、到期的抽认卡 |
| 概念笔记 | 日期 | 定义、示例、关联笔记 |

---

## 对比表：Obsidian 插件一览 {#comparison-table}

| 插件 | 类别 | 免费？ | 难度 | 是否必备？ |
|---|---|---|---|---|
| Dataview | 组织管理 | 是 | 中等 | 是 |
| Templater | 工作流 | 是 | 中等 | 是 |
| Excalidraw | 可视化 | 是 | 低 | 是 |
| Omnisearch | 搜索 | 是 | 低 | 是 |
| Style Settings | 自定义 | 是 | 低 | 可选 |
| Zotero Integration | 研究 | 是 | 中等 | 是（针对研究人员） |
| Annotator | 研究 | 是 | 低 | 是（涉及大量 PDF） |
| Readwise | 研究 | 付费服务 | 低 | 可选 |
| Longform | 写作 | 是 | 低 | 是（针对长篇论文） |
| Pandoc | 导出 | 是* | 中等 | 是 |
| LanguageTool | 写作 | 免费增值 | 低 | 推荐 |
| Spaced Repetition | 备考 | 是 | 低 | 是 |
| Kanban | 计划 | 是 | 低 | 推荐 |
| Tasks | 计划 | 是 | 中等 | 是 |

*必须单独安装 Pandoc 软件（免费）。

---

## 结语 {#conclusion}

关于“什么是最适合学生的 Obsidian 插件”这个问题，诚实的答案并不是一个单一的列表——这是一个取决于你实际在做什么的决定。一个做课堂笔记的大一本科生只需要 Templater、Omnisearch 和 Spaced Repetition，暂时不需要其他任何东西。而一个写毕业论文的博士生，在基础之上还需要 Zotero Integration、Longform 和 Pandoc。

本指南中基于工作流的方法是关键所在。安装那些能解决你当前面临的实际问题的插件。当你开始写研究论文时，再构建研究工作流。当一个项目庞大到无法在单篇笔记中管理时，再添加 Longform。在第一次大考的前一周再添加 Spaced Repetition。你的知识库应该随着你的学术工作一起成长，而不是在写第一篇笔记之前就让你承受大量的复杂性。

对于大多数学生来说，真正能带来显著改变的插件组合是：

1. **Templater**——从第一天起保持一致的结构
2. **Dataview**——让你写下的所有内容清晰可见
3. **Zotero Integration**——让研究成果不再丢失
4. **Longform**——让你能切实管理的长篇论文
5. **Spaced Repetition**——行之有效的记忆留存

这就是五个插件。从这里开始吧。

---

### 📚 想要深入了解？

如果你更喜欢视频教程而不是文字指南，市面上有一些优秀的结构化课程，可以手把手教你从零开始构建一个学术 Obsidian 知识库——详细涵盖 Dataview 查询、Templater 脚本和 PKM（个人知识管理）理论。查看 Udemy 上评分最高的 Obsidian 课程，以及 Skillshare 生产力课程库中的内容，获取与这篇书面设置指南相辅相成的引导式教程。

---

*插件的可用性和功能会随着 Obsidian 的更新而变化。本指南中的所有插件信息均根据当前的社区插件目录进行了验证。在安装之前，请始终查看插件的 GitHub 页面以获取最新的兼容性说明。*

---

## 常见问题解答

### 如何在我的笔记本电脑和手机之间同步我的 Obsidian 笔记？

最干净整洁的付费选项是 Obsidian Sync，使用学生折扣后每月 4 美元。它采用端到端加密，并由 Obsidian 团队开发，因此它能正确处理插件设置和[主题](/zh-cn/posts/things-theme-vs-minimal-theme-obsidian/)。免费的替代方案包括 iCloud（仅限 Mac/iPhone，效果还不错）、Syncthing（自托管，免费，设置上稍微有些技术门槛），或者如果你熟悉 GitHub 的话，可以通过 Obsidian Git 插件建立基于 Git 的工作流。

### Obsidian 对学生免费吗？

是的。Obsidian 的核心应用程序对于个人使用是完全免费的，这包括所有的学生用途。两个付费附加服务分别是 Obsidian Sync（折后每月 4 美元）和 Obsidian Publish（每月 8 美元，用于将公共知识库托管为网站）。本指南中提到的每一个社区插件都是免费的。你可以无限期地以零成本运行一个功能完备的学术知识库。

### 如果我是一个完全的新手，最好的入门方式是什么？

从零插件开始。花一周时间用纯 Markdown 写笔记，以理解双向链接和标签的基础知识。然后安装 Templater 并构建两个模板：一个用于课程，一个用于阅读。在第三周添加 Dataview 以查询你所构建的内容。一次性堆砌所有的 14 个插件就是人们在一个月内放弃这个系统的原因，因为这让人感到不知所措。“初学者知识库”部分中的文件夹结构是一个很好的初步脚手架。

### Obsidian 可以替代我的待办事项应用吗？

对于大多数学生来说，是的。Tasks 插件与 Dataview 相结合，创建了一个比任何独立的待办事项应用更紧密地融入你实际工作的系统，因为你的任务存在于上下文中——“为第二部分寻找第三个信息源”的任务就位于你需要它的实际论文笔记中。主要的限制在于，Obsidian 的移动应用在快速记录方面比专用的待办事项应用慢。解决办法是使用 Inbox（收件箱）文件夹记录手机上的快速笔记，稍后在桌面端进行处理。

### 对于学生而言，Obsidian 与 Notion 相比如何？

Notion 在视觉效果、表格和协作功能（与同学共享数据库）方面胜出。Obsidian 则在速度、离线访问、数据所有权、搜索深度以及专门针对学术工作的插件生态系统质量方面占优。对于主要进行独立研究和写作的学生来说，Obsidian 是更强大的工具。而对于经常参与小组项目且需要共享工作空间的学生来说，Notion 能让协作变得更轻松。许多学生会同时使用两者：用 Notion 进行共享项目管理，用 Obsidian 进行个人笔记和研究。

## 相关阅读

- [What is Excalidraw 及其在 Obsidian 中使用的原因？](/zh-cn/posts/excalidraw-plugin-for-obsidian-review/)
- [为什么要在 Obsidian 中构建卡片盒笔记法（Zettelkasten）？](/zh-cn/posts/setting-up-a-zettelkasten-in-obsidian-with-plugins/)
- [2024 年为什么要在 Obsidian 中追踪习惯？](/zh-cn/posts/best-obsidian-plugins-for-habit-tracking-2024/)
- [什么是 Obsidian 社区插件？](/zh-cn/posts/obsidian-community-plugins-list/)