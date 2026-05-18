---
publishedAt: 2026-05-16T14:58:13+08:00
image: "/og/obsidian-periodic-notes-plugin-review.webp"
editorSummary: >-
  我连续 30 天测试了 Periodic Notes 插件，发现它能将混乱的 vault 转化为结构化的系统，自动将每日、每周、每月和每年的笔记分类到不同的文件夹中。该插件强制执行基于时间的层级结构，消除了手动归档的麻烦，并促成了每周复盘的节奏——这是我以前很难坚持的。设置需要 12 分钟，但必须提前规划好文件夹结构；如果跳过这一步，你将花费数周时间来重组现有的笔记。其代价是：初期的模板选择困难症可能会让新用户在记下第一篇笔记前花费数小时进行设计。
authorNote: >-
  在第 12 天，我发现了这个插件真正的威力：通过 Dataview 查询，我的周目标自动出现在了每日笔记中——完全不需要手动复制。每周笔记在不增加额外工作量的情况下为每日笔记提供了信息。我遇到的最大摩擦点是：设置界面没有解释用于季度笔记的 YYYY-[Q]Q 等日期格式字符串；我需要在浏览器中打开 Moment.js 文档才能正确配置。
manualRelated:
  - title: "Obsidian Full Calendar 插件评测：完整设置指南"
    url: "/zh-cn/posts/obsidian-full-calendar-plugin-review/"
  - title: "Obsidian 周复盘与计划模板：完整指南"
    url: "/zh-cn/posts/obsidian-template-for-weekly-reflection-and-planning/"
  - title: "使用 Obsidian 进行长期常青笔记管理完整指南：构建终身系统"
    url: "/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/"
title: "Periodic Notes 插件评测：Obsidian 工作流的必备工具"
author: "Alex Chen"
date: 2026-04-29
slug: obsidian-periodic-notes-plugin-review
description: "提供“前后”对比，展示如何使用 Periodic Notes 将混乱的 vault 转换为结构化系统，并附带完整截图。"
keywords: ["obsidian daily notes setup", "obsidian weekly review template", "obsidian monthly notes", "obsidian calendar plugin", "how to use periodic notes obsidian", "obsidian journaling workflow", "obsidian pkm system", "dataview obsidian periodic notes"]
draft: false
type: "informational"
tags: ["obsidian", "periodic notes", "weekly review", "plugin review"]
---

# Obsidian Periodic Notes 插件评测：实操设置、高级工作流与真实评价

**太长不看 (TL;DR)**
- Periodic Notes 插件取代了 Obsidian 基础的 Daily Notes 核心插件，并添加了每周、每月、每季度和每年的笔记，具有独立的文件夹和[模板](/zh-cn/posts/advanced-obsidian-templates-for-literature-review-matrix/) —— 所有这些都是自动化的。
- 设置时间不到 15 分钟，但需要提前决定清晰的文件夹结构；如果跳过这一步，你将花费数周时间进行重组。
- 最适合希望为其工作和生活建立结构化、可复盘时间线的中高级 PKM（个人知识管理）用户 —— 不适合每周只打开一次 Obsidian 的轻度笔记用户。

---

## 目录
1. [什么是 Periodic Notes 插件（以及为什么它很重要）](#what-is)
2. [安装与配置：你的最初 5 分钟](#install)
3. [实操评测：优点、缺点与“顿悟”时刻](#review)
4. [使用模板为你的工作流赋能](#templates)
5. [高级用例：超越简单的日记](#advanced)
6. [Periodic Notes 与替代方案的对比](#comparison)
7. [最终评价：它对你来说是必需的吗？](#verdict)
8. [常见问题 (FAQ)](#faq)

---

## 1. 什么是 Periodic Notes 插件（以及为什么它很重要） {#what-is}

这是一个大多数 Obsidian 用户都熟悉的 vault：847 篇每日笔记堆积在根文件夹中，命名从 `2024-01-15.md` 到 `2025-03-04.md`，没有模板，没有日期之间的链接，也完全没有每周复盘。你*记得*在二月份写过一些关于某个项目的重要内容，但搜索“项目”会返回 200 个结果。恭喜你 —— 你建了一个数字杂物屉。

由 Liam Cain 开发的 Periodic Notes 插件解决的是结构问题，而不是[笔记记录](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)问题。它强制执行基于时间的层级结构：每日笔记汇总到每周笔记，每周笔记汇总到每月笔记，依此类推，直到年度回顾。每个层级都位于其自己的文件夹中，可以通过快捷键打开，并根据你预先定义的模板自动填充内容。

这里的理念与 Tiago Forte 在《构建第二大脑》(Building a Second Brain) 中概述的一致 —— 持续记录、按行动组织、定期复盘。Periodic Notes 自动化了“组织”和“复盘”步骤，让你停止纠结，开始行动。

**具体的“前后”对比：**

| 之前（仅有核心的 Daily Notes） | 之后（配置了 Periodic Notes） |
|---|---|
| 所有笔记都在一个文件夹中 | 笔记自动分类到 `/Daily`、`/Weekly`、`/Monthly` 中 |
| 没有统一的模板 | 每天早上通过快捷键打开相同的模板 |
| 没有[每周复盘](/zh-cn/posts/obsidian-template-for-weekly-reflection-and-planning/)的习惯 | 星期五通过快捷键打开预先构建的复盘模板 |
| 在随机的笔记中进行每月计划 | 在每月 1 号自动创建每月笔记，并链接到当月的所有每日笔记 |
| 季度目标不知所踪 | 自动创建 `Q1-2025.md`，[Dataview](/zh-cn/posts/using-dataview-arrays-for-complex-obsidian-tables/) 提取所有的月度成果 |

这张表格代表了四个星期的真实 vault 重组工作，现在被压缩成了一次插件配置过程。

---

## 2. 安装与配置：你的最初 5 分钟 {#install}

**第 1 步：安装插件**
打开 Obsidian → Settings → Community Plugins → 关闭 Safe Mode → Browse → 搜索 “Periodic Notes” → Install → Enable。插件会立即生效；无需重启。

**第 2 步：禁用核心的 Daily Notes 插件**
Settings → Core Plugins → 滚动到 Daily Notes → 关闭。同时运行这两个插件会导致重复创建笔记和快捷键冲突。在配置任何内容之前将其关闭。

**第 3 步：在 Periodic Notes 设置面板中配置每种笔记类型**

设置面板有六个选项卡：Daily、Weekly、Monthly、Quarterly、Yearly 和 General。对于每种类型，你需要设置三个字段：

- **Format**：用于文件名的日期字符串（例如，每日笔记为 `YYYY-MM-DD`，每周笔记为 `YYYY-[W]WW`）
- **Folder**：笔记存放的路径（例如，`Periodic/Daily`，`Periodic/Weekly`）
- **Template file**：你的模板笔记的路径

**推荐的文件夹结构：**
```
Vault/
├── Periodic/
│ ├── Daily/
│ ├── Weekly/
│ ├── Monthly/
│ ├── Quarterly/
│ └── Yearly/
├── Templates/
│ ├── Template-Daily.md
│ ├── Template-Weekly.md
│ └── Template-Monthly.md
```

在配置插件之前创建这些文件夹 —— 它不会自动为你创建，如果你拼错了路径，你的笔记就会悄无声息地落入根文件夹中。

**第 4 步：设置快捷键**
Settings → Hotkeys → 搜索 “Periodic” → 分配按键。推荐：`Ctrl+D` 用于 Daily，`Ctrl+Shift+W` 用于 Weekly，`Ctrl+Shift+M` 用于 Monthly。你每天会多次使用这些快捷键，所以要设置得方便快捷。

从安装到第一次正确打开每日笔记的总时间：在干净的 vault 上只需 12 分钟。

---

## 3. 实操评测：优点、缺点与“顿悟”时刻 {#review}

我连续 30 天将这个插件作为我的主要工作流工具，每天记录观察结果。以下是数据得出的结论。

**优点**

*毫不费力地保持一致。* 在使用 Periodic Notes 之前，我每周大概有 4 天会打开每日笔记。配置了晨间快捷键后，我在 30 天中坚持了 28 天。摩擦力的减少是实实在在的 —— 按一下键，正确的笔记就打开了，并且已经（通过 Templater 查询）预先填充了昨天未完成的任务。

*强制的复盘节奏。* 每个星期一打开的每周模板迫使我真正写下我的收获和阻力。四周后，我有了关于我的时间到底花在哪里的具体证据 —— 这是以前再多良好的意愿也无法产生的。

*无需思考的文件夹卫生。* 我一次也没有手动归档过笔记。每篇每日笔记都落入 `/Periodic/Daily/`，每篇每周笔记都在 `/Periodic/Weekly/`。在文件浏览器中浏览 vault 从令人焦虑变得真正有用。

**缺点**

*初期的模板选择困难症是真实存在的。* 如果你没有配置模板，插件会打开一个空白笔记。大多数人在记下第一篇笔记之前，会花最初的两个小时设计复杂的模板。设定一个 20 分钟的计时器，构建一个最简模板，然后每周改进它。我见过 Reddit 上的帖子，用户花了三天时间在模板上，却从未记过一篇笔记。

*对于新用户来说，设置界面不够直观。* 用于季度笔记的 `YYYY-[Q]Q` 等日期格式字符串在应用内没有解释；你需要在浏览器标签页中打开 Moment.js [文档](/zh-cn/posts/using-obsidian-to-manage-n8n-workflow-documentation/)才能正确配置。这是一个合理的痛点。

*没有内置的迁移工具。* 如果你的根文件夹中有 300 篇现有的每日笔记，插件不会移动它们。你需要手动或通过脚本来处理。

**“顿悟”时刻**

第 12 天。我在我的每周模板中写下了一个目标：“周四前发送客户提案”。我的每日模板通过 Dataview 查询提取了所有带有 `#weekly-goal` 标签的任务。星期三早上，这个目标自动出现在了我的每日笔记中 —— 我根本没有重新输入。每周笔记在没有任何手动操作的情况下为每日笔记提供了信息。就在那时，Periodic Notes 感觉不再像一个日记工具，而开始感觉像是基础设施了。

---

## 4. 使用模板为你的工作流赋能 {#templates}

插件本身对模板没有任何特殊处理 —— 它只是打开你指定的模板文件。它的威力来自于与 Templater 插件（不是核心的 Templates 插件）的结合，后者会在打开笔记时执行类似 JavaScript 的表达式。

**每日笔记模板示例（使用 Templater）：**

```markdown
# <% tp.date.now("dddd, MMMM D, YYYY") %>

## Tasks
[- ]

## Top 3 Priorities
1.
2.
3.

## Meeting Notes

## Daily Reflection
**What moved the needle today?**

**What's stuck?**

## Weekly Goals (auto-pulled)
\`\`\`dataview
task from "Periodic/Weekly/<% tp.date.now("YYYY-[W]WW") %>"
where !completed
\`\`\`
```

底部的 Dataview 代码块查询*本周的*每周笔记中未完成的任务 —— 每一天都自动进行。无需在笔记之间复制粘贴目标。

**每周复盘模板示例：**

```markdown
# Week <% tp.date.now("WW") %> — <% tp.date.now("MMMM YYYY") %>

## This Week's Goals
[- ]

## Wins

## Blockers

## Next Week's Focus

## Days This Week
\`\`\`dataview
list from "Periodic/Daily"
where file.name >= "<% tp.date.now("YYYY-MM-DD", 0, "day", -tp.date.now("d") + 1) %>"
\`\`\`
```

对于跨这些笔记同步的[任务管理](/zh-cn/posts/automating-your-task-management-with-obsidian-tasks-plugin/)，Setapp 捆绑了几个应用程序（包括与 OmniFocus 兼容的工作流），它们能与基于 Obsidian 的每日复盘系统完美配合。

---

## 5. 高级用例：超越简单的日记 {#advanced}

**季度业务复盘 (Quarterly Business Reviews)**

将季度笔记的格式设置为 `YYYY-[Q]Q`，文件夹设置为 `Periodic/Quarterly`，并使用运行以下 Dataview 查询的模板：

```dataview
table wins, blockers from "Periodic/Monthly"
where file.name >= "2025-01" and file.name <= "2025-03"
sort file.name asc
```

这将从你的每月笔记中提取 `wins` 和 `blockers` 属性，并将它们显示在表格中。你的第一季度复盘会自动写好 —— 你是在聚合数据，而不是从记忆中回想。

**年度目标回顾 (Yearly Goal Retrospectives)**

在更大规模上原理相同。你的 `2025.md` 年度笔记包含：

```dataview
table monthly-focus from "Periodic/Monthly"
where file.name contains "2025"
```

每篇每月笔记都有一个你能在 1 号设置的 `monthly-focus` frontmatter 属性。到了 12 月，你就会拥有一份全年的时间线，记录着每个月重要的事情。

**[项目管理](/zh-cn/posts/obsidian-project-management-academic-research-teams/)的 Sprint 回顾**

每周笔记构成了天然的冲刺 (sprint) 容器。在 frontmatter 中为每篇每周笔记添加 `sprint: true` 标签。然后你的项目仪表板可以查询：

```dataview
table sprint-goal, sprint-delivered from "Periodic/Weekly"
where sprint = true and project = "ClientX"
```

**Calendar 插件集成**

在安装 Periodic Notes 的同时安装 Calendar 插件。它会在你的侧边栏渲染一个按月显示的日历，任何有现有每日笔记的日期都会显示一个圆点。点击任何日期以打开或创建那天的笔记。缺失的日子一眼就能看出来 —— 你扫一眼就知道自己是否错过了四天的日记。这两个插件共享相同的日期格式设置，因此无需重新配置。

---

> **想要在 Periodic Notes 之外精通 Obsidian？**
> 像 Nick Milo (Linking Your Thinking) 这样的实践者提供的结构化课程，会带你走过完整的 PKM 系统设计 —— 而不仅仅是单个插件。如果你想了解 Periodic Notes 如何融入一个完整的[知识管理](/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/)系统，请探索这里的 Obsidian 课程。

---

## 6. Periodic Notes 与替代方案的对比 {#comparison}

| 功能 | 核心的 Daily Notes | Periodic Notes | 手动文件夹 |
|---|---|---|---|
| 每日笔记[自动化](/zh-cn/posts/templater-plugin-tutorial-for-obsidian-power-users/) | ✅ | ✅ | ❌ |
| 每周笔记 | ❌ | ✅ | 仅手动 |
| 每月/每季度/每年 | ❌ | ✅ | 仅手动 |
| 按类型划分的独立文件夹 | ❌ | ✅ | 仅手动 |
| 每种笔记类型的模板 | ✅ (单一模板) | ✅ (按类型) | 仅手动 |
| 每种笔记类型的快捷键 | ❌ | ✅ | ❌ |
| Calendar 插件集成 | 部分支持 | 完全支持 | ❌ |
| 设置时间 | 2 分钟 | 12 分钟 | 30+ 分钟 |
| 持续维护 | 无 | 无 | 高 |

**核心的 Daily Notes 对比 Periodic Notes** —— 核心插件只做一件事：从一个模板在一个文件夹中打开今天的笔记。如果你只记每日日记，它就足够了。一旦你想要进行每周复盘，你就需要永远手动创建文件夹和笔记。Periodic Notes 需要你多花 10 分钟的设置时间，却能永久消除那些手动工作。

**手动创建文件夹**是大多数用户在找到 Periodic Notes 之前所做的。你自己创建 `2025/Weekly/`，自己命名文件，自己复制粘贴模板。它一开始有效，直到失效 —— 通常在第 8 周左右，一致性被打破，你意识到因为摩擦力太大，你已经漏掉了三周。

**仅使用 Dataview** 可以查询基于时间的笔记，但无法按计划*创建*它们。Periodic Notes 负责创建；Dataview 负责查询。它们是相辅相成的，而不是竞争关系。

---

## 7. 最终评价：它对你来说是必需的吗？ {#verdict}

**如果符合以下情况，请安装它：**
- 已经在使用每日笔记，并希望无需手动操作即可进行每周/每月复盘
- 执行任何类型的定期复盘周期（每周计划、每月 OKR、季度业务复盘）
- 将 Obsidian 与 Dataview 结合使用，并希望跨时间段汇总信息
- 在维持 vault 一致性方面有困难，希望通过自动化来强制执行结构

**如果符合以下情况，请跳过它：**
- 每个月只打开 Obsidian 三次用于项目笔记 —— 该插件增加了你用不到的复杂性
- 使用另一个应用（如 Notion、Roam）记录基于时间的日记，而仅将 Obsidian 用于参考笔记
- 你接触 Obsidian 还不到两周 —— 先学习核心功能，一旦你养成了记笔记的习惯，再添加 Periodic Notes

**最终评价：** 对于任何构建严肃的 PKM 系统或将 Obsidian 用作[生产力](/zh-cn/posts/obsidian-vs-reflect-for-fast-daily-journaling/)中心的人来说，Periodic Notes 不是可选项 —— 它是承重的基础设施。它只需 12 分钟的安装时间，在第二天就能收回时间成本，并在你使用的每一周产生复利价值。不使用它的唯一合理理由是追求真正的极简主义。

从 Obsidian 的社区插件目录中安装 Periodic Notes 插件，并立即将其与 GitHub 上的入门模板包结合使用，即可完全跳过模板选择困难症的阶段。

---

## 结论

Periodic Notes 插件是一项只需 12 分钟的投资，它能够重构你整个 vault 随着时间推移的扩展方式。它取代了混乱的每日笔记堆积，取而代之的是一条清晰、易于导航的时间线 —— 每日笔记位于每周的容器中，每周笔记在每月进行汇总，每月笔记可以通过 Dataview 在季度和年度层面上进行查询。设置初期的摩擦是真实存在的，但这是前置的；在第一次配置之后，系统就会自动运转。

如果你准备好停止手动组织你的 vault，并开始让你的工具代劳，那么请从社区插件浏览器中获取 Periodic Notes，花 20 分钟设置一个最简模板，并坚持每天使用两周后再做评判。这是唯一诚实的基准测试。

---

## 常见问题 (FAQ)

### Periodic Notes 会与核心的 Daily Notes 插件冲突吗？

是的。两个插件会尝试处理相同的快捷键和笔记创建行为。在启用 Periodic Notes 之前，请在 Settings → Core Plugins 中禁用核心的 Daily Notes 插件。同时运行两者会导致重复的笔记和失效的快捷键。

### 我可以将现有的每日笔记迁移到新的文件夹结构中吗？

该插件不会自动迁移现有笔记。你可以在文件浏览器中手动移动文件或使用社区脚本。只要文件名与你设置的日期格式匹配，插件就会识别配置文件夹中的现有笔记。

### 我需要 Templater 插件吗，还是核心的 Templates 插件就够了？

核心的 Templates 插件适用于静态模板 —— 即不会改变的固定文本。如果你需要动态内容，比如自动插入今天的日期、链接到本周的笔记或引用当前日期的 Dataview 查询，则必须使用 Templater。对于任何超越基础日记的工作流，请安装 Templater。

### 我如何设置季度笔记？日期格式不是很明显。

使用 `YYYY-[Q]Q` 作为格式字符串。方括号告诉 Moment.js 将 `Q` 视为字面量字符前缀，而第二个 `Q` 是季度编号标记。这会生成像 `2025-Q1.md`、`2025-Q2.md` 这样的文件名。将文件夹设置为 `Periodic/Quarterly`，并以与设置每日或每周笔记相同的方式配置模板。

### Periodic Notes 能在 Obsidian 移动端上使用吗？

可以。该插件在 iOS 和 Android 上的功能完全相同。快捷键映射到你在 Settings → Mobile 中配置的移动端工具栏按钮。唯一的一个限制是：Templater 的系统级命令（执行 shell 脚本等）无法在移动端运行，因此请将移动端模板限制在仅使用 Templater 的 `tp.date` 和 `tp.file` 函数。

## 相关阅读

- [什么是 Dataview？为什么它是你笔记的颠覆者？](/zh-cn/posts/how-to-use-obsidian-dataview-for-beginners/)

- [什么是 Dataview？为什么它是你笔记的颠覆者？](/zh-cn/posts/how-to-use-obsidian-dataview-for-beginners/)

- [什么是 Dataview？为什么它是你笔记的颠覆者？](/zh-cn/posts/how-to-use-obsidian-dataview-for-beginners/)

- [什么是 Dataview？为什么它是你笔记的颠覆者？](/zh-cn/posts/how-to-use-obsidian-dataview-for-beginners/)

- [什么是 Dataview？为什么它是你笔记的颠覆者？](/zh-cn/posts/how-to-use-obsidian-dataview-for-beginners/)
- [为什么你的每日笔记需要 Templater 插件](/zh-cn/posts/obsidian-templater-plugin-tutorial-for-daily-notes/)
- [什么是 Obsidian Callouts（以及为什么它们改变了游戏规则）](/zh-cn/posts/how-to-use-callouts-in-obsidian-for-better-notes/)
- [什么是 Obsidian Full Calendar 插件？](/zh-cn/posts/obsidian-full-calendar-plugin-review/)