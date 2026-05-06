---
image: "/og/how-to-use-obsidian-dataview-for-beginners.webp"
title: "什么是 Dataview？为什么它是你笔记的颠覆者？"
date: 2026-04-28
slug: how-to-use-obsidian-dataview-for-beginners
description: "为会议记录、项目跟踪和内容日历等常见用例提供可复制粘贴的查询“菜谱”，帮助初学者快速上手。"
keywords: ["obsidian dataview examples", "dataview query language", "DQL tutorial", "obsidian dataview table", "obsidian dataview list", "obsidian dataview task query", "how to install dataview obsidian", "obsidian metadata tutorial"]
draft: false
author: "Alex Chen"
type: "informational"
tags: ["dataview", "game changer", "notes", "how to use obsidian dataview for beginners"]
---

_As an Amazon Associate we earn from qualifying purchases. This post may contain affiliate links._

# 如何使用 Obsidian Dataview：面向初学者的分步指南与可复制查询

---

**太长不看 (TL;DR)**

- Dataview 能够使用简单的、类似自然语言的命令，将你的 Obsidian 笔记变成一个可查询的数据库——无需任何编程经验。
- 你可以使用 YAML frontmatter 或行内字段（inline fields）为笔记添加“标签”（元数据），然后编写简短的查询语句，自动将这些笔记提取到列表和表格中。
- 本指南为你提供用于会议记录、书籍追踪和项目中心的复制粘贴“菜谱”——你可以在 10 分钟内构建出切实可用的[仪表盘](/zh-cn/posts/advanced-dataview-js-scripts-for-custom-obsidian-dashboards/)。

---

## 目录

1. [什么是 Dataview？为什么它是你笔记的颠覆者？](#what-is-dataview)
2. [第 1 步：在 60 秒内安装和设置 Dataview](#installing-dataview)
3. [秘诀：如何为 Dataview 标记你的笔记](#tagging-notes)
4. [你的第一个查询：从零到自动化列表](#first-queries)
5. [实用菜谱：你今天就能构建的 3 个 Dataview 仪表盘](#practical-recipes)
6. [过滤与排序：准确找到你需要的内​​容](#filtering-sorting)
7. [救命！我的查询不起作用：常见错误与修复](#troubleshooting)
8. [常见问题解答 (FAQ)](#faq)
9. [结论](#conclusion)

---

## 什么是 Dataview？为什么它是你笔记的颠覆者？ {#what-is-dataview}

把 Dataview 想象成你 vault（知识库）的自动图书管理员。你像往常一样记笔记，但要在上面贴上小标签——状态、日期或类别。Dataview 读取这些标签并为你建立动态索引。每次你添加新笔记时，索引都会自动更新。你再也不用手动维护项目或会议记录的列表了。

**使用 Dataview 之前：** 你有 200 篇笔记放在各个文件夹里。要找到所有标记为 `#project/alpha` 的笔记，你要么得记住你把它们放在了哪里，要么进行全局搜索，并祈祷你那天命名是一致的。

**使用 Dataview 之后：** 一篇名为“Project Alpha Hub”的笔记会显示一个动态表格，包含每一个相关的笔记及其状态和最后修改时间。只要你创建或更改了任何内容，它就会即时更新。

Dataview 带来的三个具体优势：

1. **自动索引。** 一篇名为“阅读列表”的笔记，始终显示你 vault 中的每一本书籍笔记，并按评分排序——设置后你无需进行任何干预。
2. **动态仪表盘。** 一个每周回顾页面，可以提取所有笔记中标记为未完成的任务，无需手动收集。
3. **跨文件任务追踪。** 单一视图集中展示你整个 vault 中每一个 `- [ ]` 复选框，并可按项目或截止日期进行过滤。

如果你想认真建立一个真正的个人知识系统，像这样结构化[记笔记](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)背后的理念，在 Tiago Forte 的《构建第二大脑》（Building a Second Brain）和 Sönke Ahrens 的《卡片笔记工作法》（How to Take Smart Notes）中都有清晰的阐述——这两本书都值得在阅读本指南的同时一并阅读。

---

## 第 1 步：在 60 秒内安装和设置 Dataview {#installing-dataview}

Dataview 是一个社区插件，因此你需要先启用社区插件功能。

**安装步骤：**

1. 打开 Obsidian。进入 **Settings**（左下角的齿轮图标）。
2. 在左侧边栏中点击 **Community plugins**。
3. 如果你看到“Safe mode（安全模式）”警告，请点击 **Turn on community plugins**。
4. 点击 **Browse**。
5. 在搜索栏中，输入 **Dataview**。
6. 点击由 **blacksmithgu** 开发的结果，然后点击 **Install**。
7. 安装完成后，点击 **Enable**。

就是这样——Dataview 已经开始运行了。

**有两个值得立即启用的设置：**

- **Enable JavaScript Queries（启用 JavaScript 查询）** —— 这会解锁 `dataviewjs` 代码块，在基础查询不够用时为你提供更强大的功能。进入 Settings → Dataview，然后将其开启。你今天用不到它，但以后会需要的。
- **Enable Inline Queries（启用行内查询）** —— 这让你可以在一行文本内部运行微小的查询，比如在句子中嵌入动态的笔记数量。同样在 Settings → Dataview 中设置。

将其他所有设置保留为默认值。你可以稍后探索其他设置，但这往往是初学者跟着教程做却发现不起作用时容易绊倒的地方。

---

## 秘诀：如何为 Dataview 标记你的笔记 {#tagging-notes}

Dataview 只能报告它能读取的内容。这意味着你的笔记需要元数据（metadata）——Dataview 可以查找和过滤的结构化信息。可以把元数据想象成贴在文件夹上的标签。

有两种添加元数据的方法。

### 方法 1：YAML Frontmatter（推荐用于结构化笔记）

YAML frontmatter 位于笔记的最顶部，在两组三连破折号之间。它是最可靠的方法，并且适用于每种 Dataview 查询类型。

```yaml
---
title: "Q3 Marketing Meeting"
date: 2024-09-15
type: meeting
status: done
attendees:
 - Sarah
 - Dev team
tags:
 - meetings
 - marketing
---
```

每一行都是一个 `key: value`（键值对）。你来定义键——Dataview 会读取它们。名称由你选择；只需保持一致即可。如果你在一篇笔记中将其称为 `status`，而在另一篇笔记中称为 `Status`（大写 S），Dataview 会将它们视为不同的字段。

**用于会议记录的复制粘贴模板：**

```yaml
---
title: ""
date:
type: meeting
project: ""
status: done
---
```

### 方法 2：行内字段（用于快速、即时的标记）

你可以使用 `key:: value` 的格式，在笔记正文的任何位置添加元数据。

```
Today I finished reading **Atomic Habits**.

rating:: 5
status:: read
author:: James Clear
genre:: self-help
```

当你在注重流畅写作并且想在不回到顶部的情况下插入数据点时，行内字段速度更快。双冒号（`::`）是 Dataview 寻找的信号。

**何时使用哪种方法：**

| 方法 | 最适合 | 限制 |
|---|---|---|
| YAML frontmatter | 模板、结构化的笔记类型 | 必须位于文件顶部 |
| 行内字段 | 随手记、段落中的数据 | 在进行复杂查询时可靠性稍低 |

为每种笔记类型选择一种方法并坚持下去。在同一笔记中混合使用这两种方法是有效的，但很快就会变得混乱。

---

## 你的第一个查询：从零到自动化列表 {#first-queries}

Dataview 查询位于一种特殊的代码块中。你用三个反引号和单词 `dataview` 打开它，编写你的查询，然后用三个反引号关闭。

````
```dataview
LIST FROM #meetings
```
````

那是可能的最简单的查询。它将每一个标记为 `#meetings` 的笔记显示为一个可点击的列表。

### 三个构建块

每一个 Dataview 查询都遵循这种模式：

```
[要显示什么] [从哪里获取] [如何过滤/排序]
```

实际语法为：

```
LIST / TABLE [字段]
FROM [来源]
WHERE [条件]
SORT [字段] [升序/降序]
```

### 将自然语言翻译为 Dataview 查询

| 你想要什么 | Dataview 查询 |
|---|---|
| 显示所有带有某个标签的笔记 | `LIST FROM #your-tag` |
| 显示某个文件夹中的所有笔记 | `LIST FROM "FolderName"` |
| 显示具有特定状态的笔记 | `LIST FROM #projects WHERE status = "active"` |
| 显示包含特定列的表格 | `TABLE author, status FROM #books` |
| 显示所有笔记中未完成的任务 | `TASK WHERE !completed` |

### 你的第一个表格

````
```dataview
TABLE date, status, project
FROM #meetings
SORT date desc
```
````

这会将每一个会议记录显示为一个包含三列（date、status 和 project）的表格，并将最新的放在顶部。如果你的会议记录的 YAML frontmatter 中含有那些确切的字段名称，那么粘贴这段代码后它会立即生效。

---

## 实用菜谱：你今天就能构建的 3 个 Dataview 仪表盘 {#practical-recipes}

为这些仪表盘分别创建一篇新笔记。粘贴 frontmatter 模板和查询语句，然后开始添加带有匹配元数据的笔记。

### 菜谱 1：会议记录索引

**它的作用：** 自动列出过去 30 天内的每一次会议记录。

为你的会议记录创建一个 YAML 模板：

```yaml
---
type: meeting
date: 2024-09-15
attendees: ""
project: ""
action-items: ""
---
```

仪表盘查询：

````
```dataview
TABLE date, attendees, project
FROM #meetings OR "Meetings"
WHERE date >= date(today) - dur(30 days)
SORT date desc
```
````

你创建的每一篇新会议记录——将它放入你的 "Meetings" 文件夹或打上 `#meetings` 标签，填好 frontmatter——这个表格就会自动更新。

### 菜谱 2：书籍追踪表格

**它的作用：** 追踪你记录的每一本书，包含作者、阅读状态和你的评分。

用于书籍笔记的 Frontmatter 模板：

```yaml
---
type: book
author: ""
genre: ""
status: reading
rating:
date-finished:
---
```

仪表盘查询：

````
```dataview
TABLE author, genre, status, rating, date-finished
FROM "Books"
SORT rating desc
```
````

你将得到一个自动更新的排名阅读列表，当你更改评分或将一本书标记为读完时，它就会更新。不再需要电子表格了。

### 菜谱 3：项目中心

**它的作用：** 将与一个项目相关的所有笔记和未完成任务集中到一个视图中。

````
```dataview
TABLE file.mtime as "Last Modified", status
FROM "Projects/Alpha"
SORT file.mtime desc
```
````

在这个中心笔记的同一页面的下方，添加一个任务视图：

````
```dataview
TASK
FROM "Projects/Alpha"
WHERE !completed
```
````

现在你的 Project Alpha 中心显示了该文件夹中的每一篇笔记，以及它们中所有未勾选的复选框。这就是多数人试图构建的“Obsidian 中的仪表盘”用例。

如果你想更深入地了解如何正确构建此类系统，Skillshare 或 Udemy 上的 PKM 和 Obsidian 课程涵盖了让这些查询变得强大得多的 vault 架构。

---

## 过滤与排序：准确找到你需要的内​​容 {#filtering-sorting}

### WHERE 子句

`WHERE` 过滤你的结果。只有符合条件的笔记才会出现。

```
WHERE status = "in-progress"
WHERE rating >= 4
WHERE date > date(2024-01-01)
WHERE contains(tags, "work")
```

你可以组合多个条件：

```
WHERE status = "in-progress" AND project = "Alpha"
WHERE status = "done" OR status = "archived"
```

### SORT 子句

`SORT` 控制顺序。`asc` = A 到 Z，从旧到新。`desc` = Z 到 A，从新到旧。

```
SORT date desc
SORT rating asc
SORT file.mtime desc
```

`file.mtime` 是 Dataview 为每篇笔记创建的内置字段——它的意思是“该文件的最后修改时间”。你不需要将其添加到 frontmatter 中。

### 一个完整、实用的查询

这里是将所有内容组合在一起的查询，它能找出所有活跃的工作项目，显示它们的截止日期和负责人，并将最近修改的放在顶部：

````
```dataview
TABLE due-date, owner, status
FROM #projects
WHERE status = "active"
SORT file.mtime desc
```
````

把它像一句话一样读出来：“给我一个包含 due-date、owner 和 status 的表格，来源于标记为 #projects 的笔记，但只显示状态等于 active 的那些，并把最近更改的排在最前面。”

---

## 救命！我的查询不起作用：常见错误与修复 {#troubleshooting}

### 错误 1："Dataview: No results to show"

这是最常见的问题。它意味着 Dataview 运行成功，但找到了零篇匹配的笔记。

**检查清单：**

- [ ] 查询中的标签是否与你笔记中的标签完全匹配？（`#meetings` 和 `#Meetings` —— 区分大小写）
- [ ] 引号中的文件夹名称是否完全匹配，包括大写？（`"Books"` 和 `"books"`）
- [ ] 运行查询之前，你是否保存了带有 frontmatter 的笔记？
- [ ] `WHERE` 中的字段名拼写是否与 YAML 中的字段名完全相同？

**快速测试：** 将 `FROM #your-tag` 更改为 `FROM ""`（空字符串表示“整个 vault”）。如果出现结果，说明你的标签或文件夹路径写错了。

### 错误 2：查询代码块显示为纯文本

你在开头的反引号之后漏掉了 `dataview` 这个词，或者插件没有启用。返回 Settings → Community plugins 确认 Dataview 已开启。

### 错误 3：字段在表格中显示为 "null"

该字段存在于你的查询中，但在该笔记的 frontmatter 中不存在。你要么将该字段添加到笔记中，要么在查询中添加 `WHERE field` 以排除没有该字段的笔记。

### 错误 4：文件夹路径不起作用

Dataview 中的文件夹路径区分大小写，并且必须完全匹配。如果你的文件夹是 `Projects/Alpha Team`，查询需要写成 `FROM "Projects/Alpha Team"` —— 而不是 `from "projects/alpha team"` 或 `FROM "Projects/AlphaTeam"`。

**专业提示：** 在 Obsidian 中，在文件资源管理器中右键单击文件夹并检查确切名称。将它直接复制粘贴到你的查询中。

### 错误 5：日期比较不起作用

你的日期字段在 frontmatter 中必须采用 `YYYY-MM-DD` 格式。`date: September 15, 2024` 无法正确解析。请使用 `date: 2024-09-15`。

---

## 结论 {#conclusion}

Dataview 不是魔法，但它很接近了。核心工作流非常简单：使用 YAML frontmatter 为你的笔记添加一致的标签，使用 `LIST / TABLE / FROM / WHERE / SORT` 结构编写一个简短的查询，然后让 Dataview 为你完成维护工作。

从小处开始。这周先构建书籍追踪器。下周，设置会议索引。一个月内你将拥有一个能够自我组织的 vault，你会想不通以前没有它是怎么工作的。

在早期起最大作用的三件事：在 frontmatter 中保持一致的字段名、将笔记放入合乎逻辑的文件夹中，以及在查询未返回任何结果时使用故障排除检查清单。

**准备好深入了解了吗？**

- 加深你对 PKM 理念的理解，这能让 Dataview 真正发挥用武之地：阅读《构建第二大脑》（Building a Second Brain） 或 《卡片笔记工作法》（How to Take Smart Notes）。
- 若要通过结构化的视频学习 Obsidian 和个人[知识管理](/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/)，Skillshare 和 Udemy 都有专门的 Obsidian 课程，其中通过真实的 vault 案例逐步讲解了高级的 Dataview 设置。
- 如果你希望随时随地访问你整理好的 vault，Obsidian Sync 是官方的端到端加密方案——你的 Dataview 仪表盘在每台设备上的工作方式都完全一致。

从一个查询开始。其他一切都会水到渠成。

---

## 常见问题解答 (FAQ)

### 问：我需要懂编程才能使用 Dataview 吗？

不需要。基本的查询语言 (DQL) 读起来几乎就像英语。本指南中的示例不需要任何编程背景。唯一的“高级”选项——DataviewJS——使用了 JavaScript，但你完成绝大多数现实世界的用例都永远不需要碰到它。

### 问：Dataview 会拖慢我的 Obsidian vault 吗？

在低于 1000 篇笔记的 vault 中，你不会注意到任何影响。在非常大的 vault（超过 5000 篇笔记）中，没有 `FROM` 过滤器的复杂查询——意味着它们会扫描每个文件——可能会增加轻微的延迟。将你的查询范围限制在特定的文件夹或标签内可以保持高速运行。

### 问：Dataview 标签和 Obsidian 标签有什么区别？

它们是相同的标签。笔记正文或 frontmatter 中的 `#meetings` 与 Obsidian 在标签面板中显示的标签是一样的。Dataview 读取 Obsidian 的原生标签——你不需要一套单独的系统。

### 问：我可以通过 Obsidian Sync 在不同设备上跨设备使用 Dataview 吗？

可以。Obsidian Sync 会同步你的整个 vault，包括 Dataview 插件和你所有的笔记。你的仪表盘在手机、平板电脑和任何其他设备上都功能完备。查询会在每台设备上本地运行，而不是在云端。

### 问：为什么我应该使用 YAML frontmatter 而不仅仅是依赖文件夹和标签？

标签和文件夹回答的是“这篇笔记在哪里？”Frontmatter 回答的是“这篇笔记是关于什么的，它有哪些属性？”一篇书籍笔记可以放在 Books 文件夹中并且带有 #books 标签——但只有 frontmatter 能告诉 Dataview 这本特定的书评分为 4，读完日期是 3 月 3 日，状态是“已读”。这正是让过滤和排序真正变得有用的原因。

## 相关阅读

- [什么是 Periodic Notes 插件（以及为什么它是颠覆者）](/zh-cn/posts/obsidian-periodic-notes-plugin-review/)
- [什么是 Obsidian Callouts（以及为什么它们是颠覆者）](/zh-cn/posts/how-to-use-callouts-in-obsidian-for-better-notes/)
- [为什么你的日常笔记需要 Templater 插件](/zh-cn/posts/obsidian-templater-plugin-tutorial-for-daily-notes/)
- [为什么你的主题是你 Obsidian 中最重要的写作工具](/zh-cn/posts/best-obsidian-themes-for-writing-longform-content/)

---

## Related Reading

- [What is the Periodic Notes Plugin (And Why It's a Game-Changer)](/posts/obsidian-periodic-notes-plugin-review/)

- [What is the Periodic Notes Plugin (And Why It's a Game-Changer)](/posts/obsidian-periodic-notes-plugin-review/)
