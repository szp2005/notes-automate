---
publishedAt: 2026-05-16T14:58:13+08:00
image: "/og/templater-plugin-tutorial-for-obsidian-power-users.webp"
editorSummary: >-
  我在阅读这篇 Templater 插件教程时意识到，随着你的 Obsidian 知识库不断增长，静态模板会成为一个瓶颈。本文教授高级用户如何掌握执行命令、条件逻辑和 tp.system 模块来实现动态提示，从而超越基础的日期插入。最令我印象深刻的是自动化威力与复杂性之间的权衡——虽然文件夹模板和 Javascript 执行消除了重复性任务，但它们需要仔细设置用户系统命令执行和脚本文件位置。将文件自动移动到年/月结构的具体工作流，证明了 Templater 将 Obsidian 变成了一个真正的自动化引擎，而不仅仅是一个文本扩展器。
authorNote: >-
  我在整理堆积在知识库根目录的会议笔记时，测试了这个文件移动自动化功能。通过设置文件夹模板将 Meetings 文件夹绑定到特定模板，然后在执行块中使用 tp.file.move，我瞬间就将新笔记路由到了 Meetings/2026/05 结构中。主要陷阱是：我起初忘记在设置中启用“用户系统命令执行（User System Command Execution）”，导致脚本静默失败。一旦启用，该工作流完全消除了我手动导航文件夹的需要。
manualRelated:
  - title: "使用 Templater 变量构建自动化的每周回顾"
    url: "/zh-cn/posts/building-automated-weekly-reviews-with-templater-variables/"
  - title: "直接从 Obsidian 笔记触发 n8n 工作流：完整指南"
    url: "/zh-cn/posts/triggering-n8n-workflows-directly-from-obsidian-notes/"
  - title: "Obsidian Calendar 插件完整指南：基于时间的笔记"
    url: "/zh-cn/posts/obsidian-calendar-plugin-for-time-based-notes/"
title: "Obsidian 高级用户 Templater 插件教程：进阶自动化"
description: "通过这篇进阶教程掌握 Obsidian 的 Templater 插件。学习如何自动化工作流、使用 Javascript 代码片段并构建复杂的笔记模板。"
pubDate: "2026-05-01"
author: "Alex Chen"
tags: ["obsidian", "templater", "automation", "productivity"]
slug: "templater-plugin-tutorial-for-obsidian-power-users"
type: "informational"
---

# Obsidian 高级用户 Templater 插件教程：进阶[自动化](/zh-cn/posts/triggering-n8n-workflows-directly-from-obsidian-notes/)

> **快速解答：** Templater 插件将 Obsidian 从一个静态文本编辑器转变为自动化的知识系统。通过利用其执行命令（`<%* %>`）、系统模块（`tp.file`、`tp.date`）以及 Javascript 能力，高级用户可以实现文件路由自动化、生成动态[元数据](/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/)、提示用户输入，并直接将外部 API 的数据提取到笔记中。

对于大多数 Obsidian 用户来说，核心的 [Templates](/zh-cn/posts/advanced-obsidian-templates-for-literature-review-matrix/) 插件是避免重复输入的入门工具。它处理静态文本插入和基础的日期标记。然而，随着你的个人[知识管理](/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/)（PKM）系统增长到成千上万条笔记，静态模板就会成为瓶颈。你最终会在管理元数据、将文件移动到正确文件夹以及格式化链接上花费比实际写作或思考更多的时间。

这正是 Templater 插件从根本上改变你与 Obsidian 交互方式的地方。它不仅仅是一个文本扩展器；它是运行在你的知识库（vault）中的一个成熟的自动化引擎。

这篇面向 Obsidian 高级用户的 Templater 插件教程将跳过诸如“如何插入日期”等基础课程。相反，我们将直接深入探讨进阶的 Javascript 执行、动态文件路由、复杂逻辑，以及构建在笔记创建瞬间自动运行的模块化工作流。

## 为什么核心 Templates 插件对高级用户来说不够用

原生的 Obsidian Templates 插件仅限于简单的字符串替换（`{{title}}`、`{{date}}`、`{{time}}`）。它无法在笔记创建期间评估逻辑、与文件系统交互或向你提问。

作为一名高级用户，你的[工作流](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)可能需要：
- 自动将新创建的“Meeting Note”移动到 `Meetings/2026/05` 目录中。
- 在创建项目仪表板时，提示你从下拉菜单中选择一个“项目状态（Project Status）”。
- 根据星期几或笔记所在的文件夹有条件地插入文本。
- 通过外部 API 获取实时数据，例如天气或日历事件。

Templater 通过其强大的 API 和 Javascript 执行上下文来处理所有这些需求。它允许你编写在模板被触发的具体时刻执行的实际代码，从而生成能够自我构建结构的动态的、具有上下文感知能力的笔记。

## 为进阶工作流设置 Templater

在深入研究复杂的脚本之前，你必须配置 Templater 以允许最大的灵活性。限制性的设置将导致执行脚本静默失败。

### 启用 Javascript 执行

要释放 Templater 的真正潜力，你必须允许它运行 Javascript。
1. 导航至 **Settings > Templater**。
2. 向下滚动至 **User System Command Execution** 并找到 **Enable User System Command Execution** 开关。将其打开。
3. 如果你计划使用保存在你的知识库中的自定义脚本，请配置 **Script files folder location**。在你的知识库中创建一个名为 `Scripts` 或 `Templater Scripts` 的文件夹，并将此设置指向它。

### 文件夹模板与自动化

最强大的可启用功能之一是 **Folder Templates**（文件夹模板）。这允许你将特定模板绑定到特定文件夹。
1. 开启 **Trigger Templater on new file creation**（在新文件创建时触发 Templater）。
2. 启用 **Enable Folder Templates**。
3. 添加一个规则：例如，将 `Meetings` 文件夹映射到模板 `Templates/Meeting Note.md`。

现在，无论何时你在 `Meetings` 文件夹内创建一个新的空白笔记（或脚本在那里创建了一个），Templater 都将在没有任何手动干预的情况下立即应用 `Meeting Note` 模板。这完全消除了“创建笔记 -> 打开命令面板 -> 插入模板”的繁琐序列。

## 掌握 Templater 语法与模块

Templater 使用特定的标签来区分常规文本和要执行的代码。理解这些标签之间的差异至关重要。

- `<% %>` — **插值（Interpolation）：** 评估内部代码并将结果作为文本输出。用于日期、标题和基础模块输出。
- `<%* %>` — **执行（Execution）：** 运行 Javascript 逻辑，但*不*直接输出文本。用于变量声明、`if/else` 语句、API 调用和文件系统操作。
- `<%+ %>` — **动态（Dynamic）：** 每次切换到阅读模式（Reading mode）时动态更新。（请谨慎使用，因为它会减慢大型笔记的渲染速度）。

### 使用 tp.date 和 tp.file 生成动态元数据

生成元数据是最常见的用例，但我们可以将其推向超越基础日期的水平。

要获取完全清除了非法字符的文件标题：
`<% tp.file.title.replace(/[\\/#^[\]|:]/g, '') %>`

动态计算未来或过去的日期（例如，将复习日期设置为创建后的 7 天）：
`Review Date: <% tp.date.now("YYYY-MM-DD", 7) %>`

获取上一个周一的日期，对[每周回顾](/zh-cn/posts/obsidian-template-for-weekly-reflection-and-planning/)模板非常有用：
`<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>`

### 使用 tp.system 进行用户输入和提示

将值硬编码到模板中会限制它们的重用性。`tp.system` 模块允许你在模板运行时与其进行交互。

**使用 `tp.system.prompt` 进行文本输入：**
```javascript
<%*
let clientName = await tp.system.prompt("Client Name?");
let projectScope = await tp.system.prompt("Project Scope?");
%>
# <% clientName %> - Project Charter
**Scope:** <% projectScope %>
```

**使用 `tp.system.suggester` 创建下拉菜单：**
这对于维护一致的元数据（如状态标签）且避免拼写错误至关重要。

```javascript
<%*
const statuses = ["Backlog", "In Progress", "Review", "Completed"];
const selectedStatus = await tp.system.suggester(statuses, statuses);
%>
---
status: <% selectedStatus %>
---
```
当该模板运行时，将会出现一个类似命令面板的窗口，强制你选择一个预定义的状态。

## 执行命令：<% %> 的力量

执行命令是 Obsidian 变身为 IDE（集成开发环境）的关键所在。因为你编写的是标准 Javascript，所以你可以利用条件逻辑、循环和异步操作。

### 模板中的条件逻辑

你可能希望有一个单一的每日笔记模板，它在周末和工作日表现出不同的行为。你可以使用 Javascript 的 `if/else` 语句，而不是维护两个独立的模板。

```javascript
<%* 
const dayOfWeek = tp.date.now("dddd"); 
let focusText = "";

if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
    focusText = "Weekend! Time to disconnect and recharge.";
} else {
    focusText = "Workday. Check your task manager and prioritize top 3 items.";
}
%>
### Daily Focus
<% focusText %>
```

### 在创建时自动移动文件

PKM 中最令人沮丧的方面之一是文件夹的卫生状况。如果你通过快速添加快捷方式创建笔记，它通常会落在根目录中。Templater 可以在笔记创建的瞬间，根据其标题或属性自动将文件移动到正确的目录。

在执行块内使用 `tp.file.move` 函数。 

```javascript
<%*
// Prompt for the project name
let projectName = await tp.system.prompt("Enter Project Name");

// Rename the file to include the project name
await tp.file.rename(projectName + " - Planning");

// Move the file to the active projects directory
await tp.file.move("Projects/Active/" + projectName + " - Planning");
%>
```

当你在知识库根目录中对一个新建的、无标题的笔记触发此模板时，它会提示你输入名称，重命名文件，并立即将其传送到你的 `Projects/Active` 文件夹中。

## 构建一个复杂的每日笔记模板

让我们将这些概念组合成一个高级用户的每日笔记模板。该模板将：
1. 动态生成指向昨天和明天的链接。
2. 提示你输入“每日意图（Daily Intention）”。
3. 检查今天是否是星期一，如果是，则自动生成“每周回顾（Weekly Review）”部分。
4. 自动将文件移动到年/月文件夹结构中，如果文件夹不存在则创建它们。

```javascript
<%*
// 1. Setup Variables and Folder Structure
const year = tp.date.now("YYYY");
const month = tp.date.now("MM-MMMM");
const targetFolder = `Journal/${year}/${month}`;

// Move file to the correct year/month folder
await tp.file.move(`${targetFolder}/${tp.file.title}`);

// 2. User Input
const intention = await tp.system.prompt("What is your main intention for today?");

// 3. Conditional Weekly Review
const dayOfWeek = tp.date.now("dddd");
let weeklyReviewSection = "";
if (dayOfWeek === "Monday") {
    weeklyReviewSection = `
## 🔄 Weekly Kickoff
- [ ] Review last week's completed tasks
- [ ] Schedule deep work blocks
- [ ] Process inbox to zero
`;
}
%>
---
date: <% tp.date.now("YYYY-MM-DD") %>
type: daily
intention: "<% intention %>"
---

# <% tp.file.title %>

<< [[<% tp.date.now("YYYY-MM-DD", -1) %>|Yesterday]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>|Tomorrow]] >>

## 🎯 Daily Intention
> <% intention %>

<% weeklyReviewSection %>

## 📝 Notes & Observations
- 

## ✅ Tasks
- [ ] 
```

这个单一模板取代了手动文件夹导航、手动输入元数据，以及为一周中不同日子准备的多个独立模板。

## 通过 Templater 用户脚本集成外部 API

对于绝对的高级用户，Templater 允许你在外部 `.js` 文件中编写自己的自定义 Javascript 函数，并在你的模板中调用它们。这就是你将 Obsidian 连接到外部世界的方式。

1. 在你配置的 `Scripts` 文件夹中，创建一个名为 `weather.js` 的文件。
2. 编写一个兼容 Node.js 的脚本来获取数据：

```javascript
async function getWeather(city) {
    try {
        const response = await fetch(`https://wttr.in/${city}?format=%C+%t`);
        const data = await response.text();
        return data.trim();
    } catch (error) {
        return "Weather unavailable";
    }
}
module.exports = getWeather;
```

3. 在你的 Obsidian 模板中，使用 `tp.user` 模块调用这个自定义脚本：

```markdown
### Morning Status
**Weather:** <% await tp.user.weather("London") %>
```

当模板运行时，Templater 会执行外部脚本，联系 API，并将实时天气数据直接注入到你的 markdown 文件中。你可以使用同样的方法从 Google Calendar API 提取日历事件，从 [Readwise](/zh-cn/posts/building-a-second-brain-using-obsidian-and-readwise/) 获取最近阅读的文章，或者从 Todoist 同步任务。

## 结论

Obsidian 的原生功能非常强大，但掌握 Templater 插件则架起了被动文本库与主动的思想操作系统之间的桥梁。通过利用执行命令（`<%* %>`）、条件逻辑、系统提示和自定义用户脚本，你可以自动消除文件管理和元数据格式化带来的摩擦。

从为最常见的笔记类型实施文件夹模板开始，然后逐步引入 `tp.system.suggester` 以标准化你的标签。随着你对 Javascript 的日益熟悉，你会发现 Obsidian 中几乎所有的工作流瓶颈都可以通过精心编写的 Templater 脚本来解决。

## 常见问题解答

### 为什么我的 Templater 脚本显示为原始代码而不是被执行？
这通常是因为你没有在设置中启用“Trigger Templater on new file creation（在新文件创建时触发 Templater）”，或者你使用的是核心 Templates 插件的热键，而不是 Templater 的热键。确保你使用的是 `Templater: Open Insert Template modal` 来触发执行。

### Templater 可以修改笔记中现有的文本吗？
Templater 主要设计用于在光标位置或文件创建时插入内容。虽然你可以使用 `tp.file.content` 模块读取当前文件，但通过编程方式修改现有文本更适合使用 MetaEdit、Linter 等插件，或编写自定义的 Obsidian 脚本。

### <% %> 和 <%* %> 之间有什么区别？
标准的 `<% %>` 标签用于插值——它评估代码并将输出打印到笔记中（比如插入一个日期）。`<%* %>` 标签用于执行——它在后台运行 Javascript 逻辑（比如移动文件或定义变量），但不向屏幕打印任何内容，除非通过 `tR += "string"` 显式指示。

### Templater 在 Obsidian 移动端上可用吗？
是的，Templater 在 iOS 和 Android 上均可使用。然而，依赖特定 Node.js 模块或繁重文件系统操作的复杂脚本，由于移动操作系统的沙盒限制，其行为可能会有所不同或执行速度变慢。为了获得最大的移动端兼容性，请坚持使用标准的 `tp` 模块。

### 如何调试失败的 Templater 脚本？
如果脚本失败，请按 `Ctrl + Shift + I`（Mac 上为 `Cmd + Option + I`）打开 Obsidian 开发者控制台。Templater 将在那里输出详细的错误信息，向你指出脚本或模板中导致 Javascript 执行中断的确切代码行。

---

## 相关阅读

- [使用 Templater 变量构建自动化的每周回顾](/zh-cn/posts/building-automated-weekly-reviews-with-templater-variables/)

- [学术研究必备的 5 款 Obsidian 插件](/zh-cn/posts/top-5-obsidian-plugins-for-academic-research/)

- [浏览 Obsidian 主题的两种方法：应用内与网页端](/zh-cn/posts/obsidian-theme-store-browser/)

- [2026 年最佳 Obsidian Tasks 插件设置：完整指南](/zh-cn/posts/best-obsidian-tasks-plugin-setup-2026/)
- [Obsidian Calendar 插件完整指南：基于时间的笔记](/zh-cn/posts/obsidian-calendar-plugin-for-time-based-notes/)