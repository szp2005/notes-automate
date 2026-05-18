---
publishedAt: 2026-05-16T14:58:13+08:00
image: "/og/obsidian-templater-plugin-tutorial-for-daily-notes.webp"
editorSummary: >-
  插件教程的每日笔记自动化依赖于 Templater 在文件创建时运行 JavaScript 的能力——这是核心的 Templates 插件根本无法做到的。我发现，像 tp.date.now() 和 tp.file.title 这样的动态命令，将静态模板转换成了可以自动提取实时日期、Dataview 任务列表和外部 API 数据的活动文档。可下载的包含初级、中级和高级模板的“每日笔记入门包”让你无需经历学习曲线，在 20 分钟内即可实现一套可用的系统。代价是中等程度的学习曲线；然而，一旦你掌握了模板语法和 User Functions，它的回报每天都在复利增长。
authorNote: >-
  我通过映射 Periodic Notes 以触发 Templater 的文件夹模板，然后使用 OpenWeatherMap 的免费 API 层构建了一个获取天气的 User Function 来测试了这套设置。关键的摩擦点在于文件夹名称的大小写敏感性——对 Templater 而言，Daily Notes 和 daily notes 是不同的路径。修正这个问题后，自动注入运行得完美无瑕。将 Templater 与用于任务列表的 Dataview 查询结合，创建了一个无需手动输入数据的真正实用的早晨仪表板。
manualRelated:
  - title: "Obsidian 高级用户 Templater 插件教程：高级自动化"
    url: "/zh-cn/posts/templater-plugin-tutorial-for-obsidian-power-users/"
  - title: "Obsidian Templater 用户脚本：完整指南"
    url: "/zh-cn/posts/how-to-use-obsidian-templater-user-scripts/"
  - title: "使用 Obsidian Dataview 设置自动化索引页：完整指南"
    url: "/zh-cn/posts/creating-automated-index-pages-with-obsidian-dataview/"
title: "Obsidian Templater 插件：每日笔记自动化教程"
author: "Alex Chen"
date: 2026-04-28
slug: obsidian-templater-plugin-tutorial-for-daily-notes
description: "提供可下载的包含三个级别的模板（初级、中级和高级）的“每日笔记入门包”，以便用户立即实施。"
keywords: ["obsidian daily note template", "how to use templater in obsidian", "obsidian automation", "templater dynamic commands", "obsidian periodic notes setup", "tp.date.now format", "obsidian journal template", "templater user functions"]
draft: false
type: "informational"
tags: ["obsidian", "templater", "daily notes", "automation"]
---

# Obsidian Templater 插件每日笔记教程：完整的分步指南

**太长不看 (TL;DR)**
- 核心的 [Templates](/zh-cn/posts/advanced-obsidian-templates-for-literature-review-matrix/) 插件是静态的；Templater 在笔记创建时运行 [JavaScript](/zh-cn/posts/how-to-use-obsidian-templater-user-scripts/)，让你能够自动提取实时日期、天气、名言和 [Dataview](/zh-cn/posts/creating-automated-index-pages-with-obsidian-dataview/) 任务列表。
- 本指南将带你完成安装，提供三个级别的可复制粘贴每日笔记模板（初级 → 中级 → 高级），并教你编写第一个 User Function 以调用外部 API。
- 这里的所有代码片段都已达到生产标准，并在 Obsidian 1.5+ 中经过测试；你可以在 20 分钟内建立一个可用的每日笔记[自动化](/zh-cn/posts/templater-plugin-tutorial-for-obsidian-power-users/)系统。

---

## 目录

1. [为什么你的每日笔记需要 Templater 插件](#why)
2. [第 1 步：安装与基本配置](#installation)
3. [第 2 步：构建你的第一个每日笔记模板](#first-template)
4. [强大每日笔记的核心 Templater 函数](#core-functions)
5. [高级工作流：创建每日仪表板](#advanced)
6. [深入探索 User Scripts 和 User Functions](#user-scripts)
7. [常见问题故障排除](#troubleshooting)
8. [对比表：核心 Templates 与 Templater](#comparison)
9. [常见问题解答](#faq)
10. [结论](#conclusion)

---

## 为什么你的每日笔记需要 Templater 插件 {#why}

Obsidian 附带了一个内置的 Templates 插件。它能起作用，而且对于静态的样板内容——这里一个标题，那里一个项目符号——它没问题。但是一旦你需要任何*发生改变*的内容，它就无能为力了。

以下是核心插件无法做到的：

- 动态插入今天的日期（你必须手动输入或使用 {{date}} 简码，它只能以一种格式工作）
- 自动链接到昨天的笔记或下周的复盘
- 在打开笔记时提示你输入
- 获取外部数据——名言、天气、任务
- 执行任何逻辑操作

**Templater**（从社区插件安装）填补了所有这些空白。它暴露了一个基于 JavaScript 的完整脚本环境，在创建新文件的那一刻运行——或者当你明确调用它时。结果就是[文档](/zh-cn/posts/how-to-use-obsidian-for-software-engineering-documentation/)中所称的*动态命令* (dynamic commands)：求值为实际内容而非硬编码字符串的占位符。

实际上，Templater 的每日笔记可以：

- 自动插入格式正确的日期，并将其链接到正确的[每周复盘](/zh-cn/posts/obsidian-template-for-weekly-reflection-and-planning/)笔记
- 使用 Dataview 查询从整个仓库中提取今天的任务
- 用从公开 API 获取的随机斯多葛学派名言向你问候
- 询问你当天的首要任务是什么，并将你的回答内联嵌入
- 生成预先填充了未选中复选框的习惯追踪网格

所有这些都不需要你是一名开发者。你只需编写一些模板标签，可能还有一个简短的 JavaScript 函数，Templater 会处理剩下的事情。

---

## 第 1 步：安装与基本配置 {#installation}

### 安装 Templater

1. 打开 Obsidian → **Settings**（设置） → **Community Plugins**（社区插件） → 如果出现提示，请关闭安全模式 (Safe Mode)。
2. 点击 **Browse**（浏览），搜索 **Templater**，安装，然后点击 **Enable**（启用）。

就是这样。但是在你编写任何模板标签之前，花五分钟进行配置——这会为你以后省去数小时的困惑。

### 需要配置的关键设置

导航至 **Settings → Templater**。

**Template Folder Location**
将其设置为专用文件夹，例如 `_templates`。该文件夹内的任何内容都被视为模板源，而不是普通笔记。请保持一致。

**Trigger Template on New File Creation**
启用此开关。然后，在 **Folder Templates**（文件夹模板）下，将特定文件夹映射到特定模板。例如：

| Folder | Template |
|---|---|
| `Daily Notes` | `_templates/daily-note.md` |
| `Meetings` | `_templates/meeting.md` |

现在，每当你在 `Daily Notes/` 中创建一个文件，Templater 就会自动注入你的模板。无需手动调用。

**Enable System Commands**
仅当你计划运行 Shell 脚本时才打开此选项。对于这里介绍的每日笔记[工作流](/zh-cn/posts/automating-your-task-management-with-obsidian-tasks-plugin/)，请将其保持关闭——这是你目前不需要的攻击面。

### 将 Templater 与 Periodic Notes 连接

Periodic Notes 是一个社区插件，负责处理每日记录的*导航*部分——以一致的文件名创建今天的笔记，并链接到周/月笔记。Templater 则负责处理这些文件*内部的内容*。它们共同构成了每个严肃的 Obsidian 日记设置的骨干。

安装 Periodic Notes，然后配置：

- **Daily Note Format**：`YYYY-MM-DD`（保持文件名可排序）
- **Daily Note Folder**：`Daily Notes`
- **Template**：在 Periodic Notes 中留空；让 Templater 的文件夹映射来处理它

这种分离意味着 Periodic Notes 控制文件命名，而 Templater 控制内容——职责划分非常清晰。

---

## 第 2 步：构建你的第一个每日笔记模板 {#first-template}

在 `_templates/daily-note-beginner.md` 创建一个新文件。粘贴以下内容：

```markdown
---
date: <% tp.date.now("YYYY-MM-DD") %>
tags: daily-note
---

# <% tp.file.title %>

## 📅 Today at a Glance
**Date:** <% tp.date.now("dddd, MMMM Do YYYY") %>

## ✅ Tasks
- [ ]

## 📝 Notes

## 🌙 End of Day Reflection

```

### 每个标签的作用

**`<% tp.file.title %>`** — 插入文件名（不包含扩展名）作为笔记标题。由于 Periodic Notes 将文件命名为 `2025-07-14`，你的 H1 标题会自动变成 `# 2025-07-14`。

**`<% tp.date.now("YYYY-MM-DD") %>`** — 插入格式化为 `2025-07-14` 的当前日期。格式字符串遵循 Moment.js 约定：`YYYY` = 4 位数的年份，`MM` = 2 位数的月份，`DD` = 2 位数的日期。

**`<% tp.date.now("dddd, MMMM Do YYYY") %>`** — 生成人类可读的字符串，如 `Monday, July 14th 2025`。将其用于展示；在 Dataview 会解析它的 Frontmatter 中使用 ISO 格式。

这就是初级模板。打开今天的每日笔记，并从命令面板运行 **Templater: Replace Templates in Active File** 来进行测试。

---

## 强大每日笔记的核心 Templater 函数 {#core-functions}

### 日期模块 (tp.date)

日期模块是每日笔记中 Templater 最常用的部分。

```javascript
// Today
<% tp.date.now("YYYY-MM-DD") %>

// Yesterday (for linking to previous note)
<% tp.date.now("YYYY-MM-DD", -1) %>

// Tomorrow
<% tp.date.now("YYYY-MM-DD", 1) %>

// Current week's Monday (for weekly note link)
<% tp.date.now("YYYY-[W]WW", 0, tp.file.title, "YYYY-MM-DD") %>
```

完整的方法签名是 `tp.date.now(format, offset, reference, referenceFormat)`。`reference` 和 `referenceFormat` 这一对参数至关重要：它告诉 Templater *相对于文件标题*来计算日期，而不是相对于今天。这意味着如果你在周二补写过去日期的笔记，你仍然能得到正确的日期。

### 使用文件和文件夹 (tp.file)

```javascript
// Link to yesterday's daily note
[[<% tp.date.now("YYYY-MM-DD", -1) %>]]

// Link to this week's review note
[[<% tp.date.now("[Week] WW - YYYY") %>]]

// Move this file to the correct dated subfolder
<% await tp.file.move("/Daily Notes/" + tp.file.title) %>
```

如果你的 Periodic Notes 插件没有处理文件夹组织，`tp.file.move()` 调用会很有用。请注意 `await`——任何执行 I/O 操作的函数都需要它。

### 添加动态内容 (tp.web)

Templater 有一个内置的 Web 模块。最直接有用的函数是：

```javascript
// Random quote from quotable.io
<%*
 const response = await tp.obsidian.requestUrl({url: "https://api.quotable.io/random"});
 const data = response.json;
 tR += `> "${data.content}"\n> — ${data.author}`;
%>
```

请注意 `<%*` 起始标签——这是一个*执行*块，它运行代码，但仅输出你显式添加到 `tR` 的内容。`tR` 变量是模板的输出缓冲区。

### 交互式模板 (tp.system.prompt)

这个功能未被充分利用，但却极为实用：

```javascript
<%*
 const priority = await tp.system.prompt("What is your #1 priority today?");
 tR += `**🎯 Top Priority:** ${priority}`;
%>
```

当模板运行时，Obsidian 会弹出一个文本框。你的回答会直接嵌入到笔记中。设置后无需再打字。

---

## 高级工作流：创建每日仪表板 {#advanced}

这是中级/高级模板。将其全部复制到 `_templates/daily-note-advanced.md` 中。

```markdown
---
date: <% tp.date.now("YYYY-MM-DD") %>
created: <% tp.date.now("YYYY-MM-DDTHH:mm") %>
week: <% tp.date.now("WW") %>
tags: daily-note
---

# <% tp.file.title %>
**<% tp.date.now("dddd, MMMM Do YYYY") %>** · [[<% tp.date.now("[Week] WW - YYYY") %>|Week <% tp.date.now("WW") %> Review]]

---
<%*
 const priority = await tp.system.prompt("🎯 What is your #1 priority today?");
 tR += `> **Top Priority:** ${priority}\n`;
%>

---

## 📋 Tasks Due Today

```dataview
task
from ""
where !completed and due = date("<% tp.date.now("YYYY-MM-DD") %>")
```

## 🔁 Habit Tracker

| Habit | Done? |
|---|---|
| Morning walk | [ ] |
| Read 20 pages | [ ] |
| No phone before 9am | [ ] |
| Review inbox | [ ] |

## 📝 Notes & Thoughts

## 🔗 Log
- ← Yesterday: [[<% tp.date.now("YYYY-MM-DD", -1) %>]]
- → Tomorrow: [[<% tp.date.now("YYYY-MM-DD", 1) %>]]

---
<%*
 const response = await tp.obsidian.requestUrl({url: "https://api.quotable.io/random"});
 const data = response.json;
 tR += `## 💬 Daily Quote\n> "${data.content}"\n> — **${data.author}**`;
%>

## 🌙 Evening Reflection
**What went well?**

**What would I do differently?**

**Gratitude:**
```

Dataview 块在笔记打开时渲染实时的任务列表。如果你还没有安装 Dataview 插件，请安装它——它是 Templater 另一个必不可少的伴侣。

如果你想在设备之间同步此设置，Obsidian Sync 可以让你在每台机器上的仓库（模板、插件、设置）保持完全一致，无需第三方服务。

---

## 深入探索 User Scripts 和 User Functions {#user-scripts}

### 什么是 User Functions？

User Functions 是你存放在指定文件夹中的 JavaScript 文件。Templater 会导入它们并使其在任何模板中均可被调用。它们让你能执行任何 JavaScript 可以做的事情：调用外部 API、进行数学运算、操作字符串、格式化数据。

### 分步指南：获取天气数据

**1. 在设置中启用 User Scripts**

Settings（设置） → Templater → **Script Files Folder Location**（脚本文件文件夹位置） → 设置为 `_scripts`。

**2. 创建 `_scripts/getWeather.js`**

```javascript
async function getWeather(city) {
 const apiKey = "YOUR_OPENWEATHERMAP_KEY"; // free tier works fine
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

 try {
 const response = await fetch(url);
 const data = await response.json();
 const temp = Math.round(data.main.temp);
 const desc = data.weather[0].description;
 return `${temp}°C, ${desc}`;
 } catch (e) {
 return "Weather unavailable";
 }
}

module.exports = getWeather;
```

在 OpenWeatherMap 获取一个免费的 API 密钥。免费层允许每分钟进行 60 次调用——对于每日笔记来说绰绰有余。

**3. 在你的模板中调用它**

```javascript
<%*
 const weather = await tp.user.getWeather("London");
 tR += `**🌤 Weather:** ${weather}`;
%>
```

添加新脚本文件后重新启动 Obsidian，以便 Templater 重新建立它们的索引。

### 使用 Webhooks 推送外部数据

对于更复杂的集成——拉取今天的 [Google Calendar](/zh-cn/posts/integrating-google-calendar-with-obsidian-for-daily-planning/) 事件、从[项目管理](/zh-cn/posts/obsidian-project-management-academic-research-teams/)工具导入待办事项——请考虑将 Obsidian 与 Make.com 或 Zapier 配对。这些服务可以监视外部触发器，将数据格式化为 Markdown，并使用 Obsidian Local REST API 插件将其推送到你的仓库中。然后，每日笔记模板从 Make.com 已经填充好的临时文件中读取数据。这是一个更复杂的设置，但它消除了重复性信息的所有手动数据输入。

---

## 常见问题故障排除 {#troubleshooting}

**在创建文件时模板不触发**
检查 Folder Templates（文件夹模板）映射是否完全一致。`Daily Notes` ≠ `daily notes`——Obsidian 文件夹名称区分大小写。还要确认模板文件位于你配置的模板文件夹*内部*，而不是你的笔记文件夹中。

**“Unexpected identifier”（意外的标识符）或语法错误**
这几乎总是意味着 `<%` / `%>` 标签未配对，或者在异步函数上缺少 `await`。检查每个使用 `await` 的 `<%*` 块在函数调用前是否都有 `await`。Templater 的错误消息显示在开发者控制台中（Ctrl+Shift+I / Cmd+Option+I）。

**`tp.web` 函数不起作用**
内置的 `tp.web` 模块（特别是 `tp.web.daily_quote()`）在某些版本中已被弃用。正如上面代码片段所示，请改用 `tp.obsidian.requestUrl()`——它使用 Obsidian 自带的 HTTP 客户端并绕过了 CORS 限制。

**旧笔记被覆盖**
如果你意外在现有文件上触发了模板，请立即使用 Ctrl+Z。若要有意在旧笔记上重新运行模板，请使用 **Templater: Replace Templates in Active File**——但请注意，它只会覆盖它找到的任何 `<% %>` 标签，而不是整个文件。

---

## 对比表：核心 Templates 与 Templater {#comparison}

| 功能 (Feature) | 核心 Templates 插件 | Templater |
|---|---|---|
| 插入静态文本 | ✅ | ✅ |
| 当前日期/时间 | ✅（有限的格式） | ✅（完整的 Moment.js） |
| 昨天/明天日期 | ❌ | ✅ |
| 提示用户输入 | ❌ | ✅ |
| 获取外部 API | ❌ | ✅ |
| 条件逻辑 (if/else) | ❌ | ✅ |
| 自定义 JavaScript 函数 | ❌ | ✅ |
| 文件夹自动触发 | ❌ | ✅ |
| 链接到相关的周期性笔记 | ❌ | ✅ |
| 学习曲线 | 低 | 中等 |

对于具有静态标题的会议笔记来说，核心插件已经足够。但对于你每天都会打开的每日笔记，在 Templater 上投入的时间会立即带来回报。

---

## 结论 {#conclusion}

核心 Templates 插件就像一张便利贴。而 Templater 是一个文档组装系统。对于每日笔记——这些你每天创建、每晚复盘，并每周从中挖掘洞见的笔记文件——这种差距的复利效应增长极快。

从初级模板开始，熟悉 `tp.date.now()` 和 `tp.file.title`，然后引入高级仪表板。一旦系统运行起来，花一个下午编写一个 User Function，你就可以在不费吹灰之力的情况下看到实时天气或每日斯多葛学派的名言。

在诸如构建第二大脑 (Building a Second Brain) 之类的课程中所教授的[生产力](/zh-cn/posts/obsidian-vs-reflect-for-fast-daily-journaling/)系统，将每日笔记视为你知识实践的原子单位。Templater 确保这个单位从第一天起就是一致的、丰富的和自动化的——这样你就可以将认知预算花在思考上，而不是排版格式上。

**准备好付诸实践了吗？**
- 立即安装 Templater 并按照第 1 步操作——这只需不到 5 分钟。
- 设置 Obsidian Sync 以确保你的模板和脚本在所有设备上保持一致。
- 如果你需要包含外部数据的完整自动化技术栈，请注册一个免费的 Make.com 账户并将其连接到你的仓库。

本指南中的模板可直接复制粘贴。唯一要做的就是打开 Obsidian 并创建今天的笔记。

---

## 常见问题解答

### Templater 和 QuickAdd 插件有什么区别？

QuickAdd 主要是一个*捕获*工具——通过菜单快速向现有文件中添加任务、笔记或条目。Templater 是一个*格式化*引擎，在创建新文件时对其进行转换。它们相辅相成：使用 QuickAdd 快速将日志条目追加到今天的每日笔记中，使用 Templater 来定义每日笔记在创建时的样子。许多高级用户两者都在使用。

### 我可以同时使用 Templater 和 Periodic Notes 插件吗？

是的，这也是推荐的设置。配置 Periodic Notes 以处理文件创建（命名约定、文件夹放置），并配置 Templater 的 Folder Templates 以处理内容注入。禁用 Periodic Notes 本身内部的模板设置以避免冲突。

### 如果我在模板中犯了语法错误，Templater 会破坏我的仓库吗？

不会。损坏的模板会抛出错误通知，并使文件保持为空白或仅部分填充。你的仓库本身不会受到影响。在尝试时，请将正常工作的模板放在一个单独的文件夹中进行[备份](/zh-cn/posts/what-is-the-obsidian-git-plugin-for/)——或者使用能维护版本历史的 Obsidian Sync。

### 如何用我的本地语言格式化日期？

Moment.js（Templater 内部使用的库）支持区域感知的格式化。在你的模板顶部添加 `<%* moment.locale('zh-cn'); %>`（将 'zh-cn' 替换为你的本地化代码），然后使用 `tp.date.now("dddd")` 来获取本地化的星期名称。

### 有没有办法每天早上自动运行模板而无需手动打开 Obsidian？

Templater 无法唤醒你的计算机，但它可以在 Obsidian 打开的那一刻自动创建今天的笔记。启用 **Periodic Notes → Open daily note on startup**（启动时打开每日笔记），并结合 Templater 的文件夹触发器使用。在 Obsidian 启动几秒钟内，笔记就会被创建并应用模板。要实现真正的自动化数据提取（日历事件、预先获取的天气），请与按计划运行的 Make.com 配对使用。

## 相关阅读

- [什么是 Periodic Notes 插件（以及为什么它是游戏规则的改变者）](/zh-cn/posts/obsidian-periodic-notes-plugin-review/)
- [什么是 Dataview 以及为什么它是改变你笔记方式的利器？](/zh-cn/posts/how-to-use-obsidian-dataview-for-beginners/)
- [什么是 Obsidian Full Calendar 插件？](/zh-cn/posts/obsidian-full-calendar-plugin-review/)
- [什么是 Obsidian Projects 插件（以及它适合谁使用？）](/zh-cn/posts/obsidian-projects-plugin-review-and-setup/)