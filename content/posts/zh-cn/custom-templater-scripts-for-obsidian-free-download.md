---
publishedAt: 2026-05-16T14:58:13+08:00
image: "/og/custom-templater-scripts-for-obsidian-free-download.webp"
title: "Obsidian 自定义 Templater 脚本免费下载 (2026)"
description: "正在寻找 Obsidian 自定义 Templater 脚本的免费下载？获取我们精心挑选的工作流自动化脚本集，节省您数小时的手动输入时间。"
pubDate: "2026-05-07"
author: "Alex Chen"
tags: ["obsidian", "templater", "workflow automation", "productivity"]
slug: "custom-templater-scripts-for-obsidian-free-download"
type: "informational"
---

# Obsidian 自定义 Templater 脚本免费下载 (2026)

> **快速解答：** 您可以直接从下方的代码块中免费下载我们为您准备的完整 Obsidian 自定义 Templater 脚本集。这些开箱即用的脚本可以自动化您的每日笔记、会议纪要、项目结构以及 Zettelkasten ID 生成，让您无需手动格式化，即可瞬间精简您的库（vault）。

在 Obsidian 中构建强大的知识管理系统通常会伴随大量令人沮丧的重复性输入。每次创建新的会议笔记、每日日志或项目中心时，您可能都要花最初的几分钟来配置前言（frontmatter）、设置链接和构建标题。社区插件 Templater 解决了这个问题，它允许您将动态变量和 JavaScript 直接注入到笔记中。

然而，从零开始编写这些脚本需要具备 JavaScript 和 Obsidian API 的相关知识。与其把周末的时间花在调试代码上，不如利用预先构建好的自动化脚本。本指南提供了一个全面的代码库，在这里您可以准确找到所需的 Obsidian 自定义 Templater 脚本免费下载，从而升级您的个人知识管理架构。

## 为什么您的库需要高级 Templater 脚本

Obsidian 自带了一个原生的“Templates”核心插件，用于插入静态文本已经足够。如果您只需要在笔记中插入一个基本的 Markdown 表格，核心插件完全可以胜任。由 SilentVoid13 开发的 Templater 则运行在一个完全不同的层级上。

Templater 在文件创建时解析并执行逻辑。它可以读取当前日期、计算过去和未来的日期、通过对话框提示您输入内容、自动重命名文件、将文件移动到特定文件夹，甚至可以从外部 API 获取数据。

通过实施本指南中提供的脚本，您可以消除元数据中的人为错误。您的标签（tags）将保持一致，每日笔记可以完美地相互链接，您的项目文件夹也无需手动拖拽即可保持井井有条。

## 入门指南：先决条件与配置

在复制以下脚本之前，您必须配置您的 Obsidian 库以正确处理它们。如果未设置好插件，将导致渲染出纯文本而不是执行代码。

1. **安装插件：** 导航至 Obsidian 设置 > Community Plugins（社区插件）。如果您尚未关闭“Restricted Mode”（安全模式），请将其关闭。搜索“Templater”并安装它。
2. **启用插件：** 在已安装的插件列表中打开 Templater 开关。
3. **设置模板文件夹：** 在 Templater 设置菜单中，定义您的模板文件夹位置（例如，`Meta/Templates`）。
4. **在文件创建时触发：** 这是最关键的设置。开启“Trigger Templater on new file creation”。这确保了在生成新笔记的瞬间自动运行您的脚本。
5. **启用系统命令（可选但推荐）：** 对于与操作系统交互的高级脚本，请开启“Enable User System Command Execution”。

## 核心集合：7 个 Obsidian 自定义 Templater 脚本

以下是您的 Obsidian 自定义 Templater 脚本免费下载库。您可以直接将代码块复制到您指定的模板文件夹内单独的 Markdown 文件中。

### 1. 动态每日笔记生成器

这个脚本超越了标准的日期插入功能。它会自动生成指向昨天和明天的导航链接，为您的 Dataview 查询设置好前言，并将光标准确地放置在您需要开始输入的位置。

```markdown
---
creation_date: <% tp.file.creation_date("YYYY-MM-DD HH:mm") %>
aliases: [<% tp.date.now("YYYY-MM-DD, dddd") %>]
tags: [daily]
---
# <% tp.date.now("dddd, MMMM Do YYYY") %>

[[<% tp.date.now("YYYY-MM-DD", -1) %>|← Yesterday]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>|Tomorrow →]]

## 🎯 Primary Focus
<% tp.file.cursor(1) %>

## 📝 Notes & Logs
- 

## ✅ Tasks
- [ ] 
```

### 2. 自动化会议纪要框架

会议笔记通常需要标准化的命名约定和结构化的元数据来追踪参会者和行动项。该脚本会通过对话框提示您输入会议标题和参会者，瞬间重命名文件，并将其移动到您的 Meetings（会议）文件夹中。

```markdown
<%*
const meetingTitle = await tp.system.prompt("What is the meeting about?");
const attendees = await tp.system.prompt("Who is attending? (comma separated)");
const date = tp.date.now("YYYY-MM-DD");
const newFileName = `${date} - ${meetingTitle}`;
await tp.file.rename(newFileName);
await tp.file.move("/Work/Meetings/" + newFileName);
_%>
---
date: <% tp.date.now("YYYY-MM-DD") %>
type: meeting
attendees: [<% attendees %>]
project: 
---
# <% meetingTitle %>

**Date:** <% tp.date.now("YYYY-MM-DD HH:mm") %>
**Attendees:** <% attendees %>

## 📌 Agenda
<% tp.file.cursor(1) %>

## 🗣️ Discussion Points
- 

## ⚡ Action Items
- [ ] 
```

### 3. 智能项目中心创建器

在初始化一个新项目时，您需要一个汇总任务和笔记的中心枢纽。此脚本会询问项目名称，创建一个标准化的仪表盘，并设置一个 Dataview 查询占位符。

```markdown
<%*
let projectName = await tp.system.prompt("Enter Project Name:");
await tp.file.rename("Project - " + projectName);
_%>
---
status: active
priority: medium
deadline: <% tp.date.now("YYYY-MM-DD", 30) %>
tags: [project]
---
# 🚀 <% projectName %>

## Overview
<% tp.file.cursor(1) %>

## 📋 Outstanding Tasks
```dataview
TASK
FROM "Projects/<% projectName %>"
WHERE !completed
```

## 🔗 Related Resources
- 
```

### 4. 书籍与文章元数据获取器

对于那些构建个人图书馆或引用文献的人来说，格式化作者、出版日期和标签需要花费不少时间。这个脚本简化了您阅读材料的录入过程。

```markdown
<%*
const title = await tp.system.prompt("Title of the resource:");
const author = await tp.system.prompt("Author:");
const type = await tp.system.suggester(["Book", "Article", "Video", "Podcast"], ["book", "article", "video", "podcast"]);
await tp.file.rename(`${type.charAt(0).toUpperCase() + type.slice(1)} - ${title}`);
_%>
---
title: "<% title %>"
author: "<% author %>"
type: <% type %>
status: to-read
rating: 
date_added: <% tp.date.now("YYYY-MM-DD") %>
---
# <% title %>
**Author:** [[<% author %>]]

## 💡 Key Takeaways
<% tp.file.cursor(1) %>

## 📝 Rough Notes
- 
```

### 5. Zettelkasten 新 ID 生成器

如果您使用 Zettelkasten 方法，管理唯一的字母数字 ID 是必不可少的。此脚本可以绕过核心 Zettelkasten 插件，生成一个精确的时间戳 ID 并追加您的笔记标题。

```markdown
<%*
let title = await tp.system.prompt("Note Title:");
let id = tp.date.now("YYYYMMDDHHmmss");
await tp.file.rename(id + " " + title);
_%>
---
aliases: ["<% title %>"]
tags: [zettel]
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
---
# <% title %>

<% tp.file.cursor(1) %>

***
**Links:**
```

### 6. 每周回顾汇总器

每周回顾需要回顾过去七天的情况。此脚本自动计算当前周的开始和结束日期，帮助您提取该特定范围内的每日笔记 Dataview 查询。

```markdown
---
type: weekly-review
week: <% tp.date.now("gggg-[W]ww") %>
---
# Review for <% tp.date.now("gggg-[W]ww") %>
**Dates:** <% tp.date.now("YYYY-MM-DD", -tp.date.now("E")+1) %> to <% tp.date.now("YYYY-MM-DD", 7-tp.date.now("E")) %>

## 🏆 Wins of the week
<% tp.file.cursor(1) %>

## 🚧 Challenges
- 

## 🎯 Next Week's Focus
- [ ] 
```

### 7. 任务管理仪表盘

这是一个简单但极其有效的脚本，它创建了一个仪表盘视图，根据典型的标签结构对您的任务进行分类。它假定您在库中使用了像 `#urgent` 或 `#someday` 这样的标签。

```markdown
# 📋 Master Task Dashboard
Last Updated: <% tp.file.last_modified_date("YYYY-MM-DD HH:mm") %>

## 🔥 Urgent & Important
```dataview
TASK
WHERE contains(tags, "#urgent") AND !completed
```

## 📅 Upcoming
```dataview
TASK
WHERE !completed AND due > date(today)
SORT due ASC
```

## 💡 Someday / Maybe
<% tp.file.cursor(1) %>
- [ ] 
```

## 如何安装您下载的脚本

一旦您从上面的 Obsidian 自定义 Templater 脚本免费下载部分复制了原始文本，请按照以下步骤将它们集成到您的工作流中：

1. **创建一个模板文件：** 在 Obsidian 中，导航到您指定的模板文件夹。创建一个新笔记并赋予它一个易于识别的名称，如 `tpl-Meeting-Note`。
2. **粘贴代码：** 将原始脚本粘贴到此新笔记中。
3. **映射到快捷键：** 为了最大化效率，请将您最常用的模板映射到快捷键。前往 Settings（设置） > Templater。在“Template Hotkeys”下，点击“Add new hotkey for template”。选择 `tpl-Meeting-Note`。
4. **分配快捷键：** 前往 Settings > Hotkeys，搜索“Templater: tpl-Meeting-Note”，并将其绑定到一个组合键，例如 `Cmd+Shift+M`。 

现在，在任何新文件中按下 `Cmd+Shift+M` 将立即触发提示序列、重命名文件、格式化 Markdown，并将您的光标放置在正确的位置。

## 修改脚本的实用建议

Templater 的魅力在于其灵活性。虽然上面提供的下载文件功能强大，但您不可避免地会想要调整它们以匹配您特定的元数据架构。以下是修改这些脚本的具体建议。

### 理解执行块
Templater 使用两种主要的标签类型。 
- `<% ... %>` 用于执行函数并将字符串直接输出到您的文档中。
- `<%* ... _%>` 是一个执行命令块。它在后台运行 JavaScript 逻辑（如重命名文件或提示用户），但不会在笔记本身输出任何文本。请注意闭合括号前的下划线 `_`；这可以防止脚本在您的 Markdown 中留下一行空行。

### 调整日期格式
Templater 依赖于 Moment.js 库来进行所有日期格式化。如果您喜欢不同的日期结构，您只需要更改括号内的字符串。
- 对于标准的欧洲格式：`<% tp.date.now("DD-MM-YYYY") %>`
- 对于拼写出来的格式：`<% tp.date.now("MMMM Do, YYYY") %>`（输出结果：May 7th, 2026）
- 计算未来的日期：`<% tp.date.now("YYYY-MM-DD", 7) %>`（输出正好 7 天后的日期）。

### 使用 Suggester（建议器）界面
虽然 `tp.system.prompt()` 非常适合开放式文本输入，但您应该使用 `tp.system.suggester()` 来强制执行严格的分类。这可以防止在您的标签或项目名称中出现拼写错误。

Suggester 函数需要两个数组：显示文本（您在弹出菜单中看到的内容）和实际输出值（在文本中打印的内容）。 
示例：`await tp.system.suggester(["High Priority", "Low Priority"], ["high", "low"])`

### 控制光标放置
永远不要低估 `<% tp.file.cursor(1) %>` 的力量。在长达数百行的复杂模板中，寻找开始输入的正确位置纯粹是浪费时间。在模板执行后，将此代码段准确放置在您希望光标出现的位置。您可以通过顺序编号（1，2，3）定义多个光标，这使您可以快速通过 Tab 键在文档中穿梭。

## 结论

从杂乱无章的库过渡到顺畅、自动化的知识系统并不需要计算机科学学位。通过利用这个 Obsidian 自定义 Templater 脚本免费下载集合，您可以立即实施专业级的自动化。从集成每日笔记和会议框架开始，将它们映射到您喜欢的快捷键，看着您的日常管理负担消失。随着您对语法的掌握越来越熟练，您可以轻松调整 JavaScript 变量，以完美契合您个人的工作流需求。

## 常见问题解答

### 运行这些 Templater 脚本安全吗？
是的。本指南中提供的自定义脚本利用了 Templater 社区插件的内部 Obsidian API。它们不会下载外部的有效载荷（payloads），也不会访问您指定的 Obsidian 库目录之外的文件系统。

### 这些脚本能在 Obsidian 移动端上使用吗？
可以，Templater 完全兼容 iOS 和 Android 的 Obsidian 移动版。使用 `tp.system.prompt()` 的脚本将在您的智能手机或平板电脑上成功调用原生的对话框，让您在移动中也能无缝生成模板。

### 如何将脚本映射到快捷键？
导航到您的 Obsidian 设置，选择 Templater 插件选项，向下滚动到“Template Hotkeys”。将您所需的模板添加到列表中，然后移至 Obsidian 的核心“Hotkeys”菜单，分配您喜欢的组合键。

### Obsidian 核心 Templates 和 Templater 之间有什么区别？
Obsidian 核心的 Templates 插入的是静态的、预定的文本和基本的日期格式。而 Templater 是一个可编程引擎，能够执行 JavaScript，计算未来或过去的日期，提示用户输入文本，自动重命名文件以及操作库文件夹。

### 我可以与团队共享这些自定义脚本吗？
绝对可以。由于这些脚本保存为模板文件夹内标准的 `.md` Markdown 文件，您可以通过 GitHub 共享它们、使用 Obsidian Sync 同步它们，或通过云存储分发它们，以保持整个团队的格式标准化。

---

## 相关阅读

- [Obsidian Canvas 对比 Excalidraw：哪个视觉工具胜出？](/zh-cn/posts/obsidian-canvas-vs-excalidraw-for-mind-mapping/)

- [自定义 Obsidian 仪表盘的高级 Dataview JS 脚本：完整指南](/zh-cn/posts/advanced-dataview-js-scripts-for-custom-obsidian-dashboards/)

- [自定义 Obsidian 仪表盘的高级 Dataview JS 脚本：完整指南](/zh-cn/posts/advanced-dataview-js-scripts-for-custom-obsidian-dashboards/)