---
publishedAt: 2026-05-16T14:58:13+08:00
image: "/og/how-to-use-obsidian-templater-user-scripts.webp"
evidenceImage:
  src: "/media/adsense-phase2/code-laptop.jpg"
  alt: "由带有代码的笔记本电脑代表的 Templater 脚本工作"
  caption: "一个开发笔记本电脑屏幕，用于展示本地 AI 和自动化工作流示例。"
  credit: "Christina Morillo / Pexels"
  sourceUrl: "https://www.pexels.com/photo/black-and-gray-laptop-computer-turned-on-doing-computer-codes-1181271/"
editorSummary: >-
  Templater 用户脚本非常强大，因为它们让 Obsidian 表现得像一个小型本地应用程序。这也意味着它们需要像对待代码一样谨慎。如果你从执行单一任务的命名小脚本开始，本指南将最为实用：格式化日期、创建笔记、获取元数据或更新 Frontmatter。我建议将脚本保存在版本控制中，避免隐藏的副作用，并在让脚本处理重要的 vault 文件夹之前，先在复制的笔记上进行测试。
authorNote: >-
  对于 Templater 脚本，我喜欢在附近保留一个暂存 vault。如果一个脚本在缺少字段、包含特殊字符和处于意外文件夹的测试笔记中无法正常运行，那么它就不适合用于主 vault。
manualRelated:
  - title: "Obsidian 动态模板 Templater 插件指南"
    url: "/zh-cn/posts/templater-plugin-for-obsidian-dynamic-templates-guide/"
  - title: "Obsidian 自定义 Templater 脚本免费下载"
    url: "/zh-cn/posts/custom-templater-scripts-for-obsidian-free-download/"
  - title: "用于批量处理 Obsidian Markdown 文件的 Python 脚本"
    url: "/zh-cn/posts/python-scripts-for-bulk-processing-obsidian-markdown-files/"
title: "Obsidian Templater 用户脚本：完整指南"
description: "了解如何使用 Obsidian Templater 用户脚本来自动化工作流、获取 API 数据，并在你的每日笔记中直接执行自定义 JavaScript。"
pubDate: "2026-05-07"
author: "Alex Chen"
tags: ["obsidian", "templater", "automation", "javascript"]
slug: "how-to-use-obsidian-templater-user-scripts"
type: "informational"
---

# Obsidian Templater 用户脚本：完整指南

> **快速解答：** 要使用 Obsidian Templater 用户脚本，请在 Templater 的设置中启用该功能，并定义一个专用的脚本文件夹。在该文件夹中创建导出函数的 `.js` 文件，并在你的 Obsidian 模板中使用 `<% tp.user.scriptName() %>` 语法调用它们。这使你能够运行复杂的 JavaScript、获取外部数据，并对你的 vault 自动化进行深度自定义。

对于许多用户来说，Obsidian 最初只是一个简单的 Markdown 编辑器，很快就会演变成一个全面的个人[知识管理](/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/)（PKM）系统。虽然基本模板有助于标准化你的[笔记记录](/zh-cn/posts/comparing-obsidian-metadata-menu-vs-database-folder/)，但当你需要动态数据、API 集成或复杂逻辑时，它们往往会遇到瓶颈。这正是 Templater 插件最强大的功能发挥作用的地方：用户脚本（User Scripts）。

用户脚本允许你编写外部 JavaScript 文件，并在你的 Obsidian 模板中直接执行它们。你可以将逻辑模块化，保持其整洁，并通过单行 Templater 语法触发高级自动化，而不是在模板中挤满难以阅读的内联代码。

无论你是想自动获取当前天气、拉取最新的日历事件，还是从你的 vault 中解析特定的元数据，了解如何使用 Obsidian Templater 用户脚本都能解锁 vault 自动化的全新境界。

## 设置你的脚本文件夹

在执行任何自定义代码之前，你需要配置 Templater 以识别你的脚本存储位置。正确的组织结构对于维护一个整洁的 vault 至关重要，尤其是在你的脚本库不断增长时。

首先，在你的 Obsidian vault 中创建一个专门用于存放脚本的新文件夹。一个常见且有效的命名约定是 `Scripts` 或 `Templates/Scripts`。将其放置在模板文件附近在逻辑上是合理的，但确切位置取决于你个人的 vault 结构。

接下来，打开你的 Obsidian 设置，导航到 Templater 插件配置，并向下滚动到“User Scripts”部分。切换设置以启用用户脚本，然后指定你刚刚创建的文件夹的路径。Templater 现在将主动监控此目录以查找有效的 JavaScript 文件。每当你添加或修改脚本时，你可能需要重新加载 Templater（或重启 Obsidian）才能使更改生效，尽管最近的版本已经能够无缝处理这个问题。

## 编写你的第一个用户脚本

Templater 用户脚本使用 CommonJS 模块格式。这意味着你的 JavaScript 文件必须使用 `module.exports` 导出一个函数或包含多个函数的对象。

让我们创建一个简单的脚本来理解其工作原理。在你指定的脚本文件夹中创建一个名为 `greet.js` 的文件。使用纯文本编辑器（或者如果你的 Obsidian 安装了允许编辑 `.js` 文件的插件，也可以使用 Obsidian）打开此文件，并添加以下代码：

```javascript
function generateGreeting(name) {
    const hour = new Date().getHours();
    let greeting = "Good evening";
    
    if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 18) {
        greeting = "Good afternoon";
    }
    
    return `${greeting}, ${name}!`;
}

module.exports = generateGreeting;
```

此脚本评估当前系统时间并返回一个符合语境的问候语。因为文件名为 `greet.js`，Templater 会将此函数暴露为 `tp.user.greet`。

## 在模板中调用脚本

一旦你的脚本被保存并被 Templater 识别，调用它就非常直接了。打开你现有的一个模板或创建一个新模板。要执行我们刚刚编写的脚本，请插入以下 Templater 标签：

```markdown
<% tp.user.greet("Alex") %>
```

当你将此模板应用于笔记时，Templater 会拦截该标签，找到 `greet.js`，将字符串 "Alex" 传递给你的函数，并将标签替换为返回的输出，例如 "Good morning, Alex!"。

你还可以将内部 Templater 变量传递给你的脚本。例如，如果你想将当前笔记的标题传递给脚本，你可以这样写：

```markdown
<% tp.user.processTitle(tp.file.title) %>
```

Templater 内置对象与你的自定义逻辑之间的这种互操作性，正是用户脚本异常强大的原因。

## 从外部 API 获取数据

用户脚本最实用的应用之一是直接从互联网将实时数据拉取到你的每日笔记中。由于脚本在 Obsidian 的 Electron 环境中运行，你因此可以访问原生的 JavaScript fetch 功能。

想象一下，你想在你的每日笔记中插入一句随机的励志名言。你可以编写一个名为 `getQuote.js` 的脚本：

```javascript
async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        return `> "${data.content}"\n> — *${data.author}*`;
    } catch (error) {
        return "> Could not fetch quote today.";
    }
}

module.exports = fetchQuote;
```

请注意，此函数是异步的。Templater 天生支持处理异步函数。在你的模板中，你只需使用 `await` 前缀来调用它，以确保模板在渲染其余文本之前等待 API 响应：

```markdown
<% await tp.user.getQuote() %>
```

这种模式可以被复制用于天气 API、像 Todoist 这样的任务管理器，甚至是查询你自己的自定义数据库。

## 将 Obsidian 的 App 对象传递给脚本

对于高级工作流，你可能需要你的脚本直接与 Obsidian vault 进行交互——创建文件、读取元数据或修改现有笔记。为此，你必须将 Obsidian 的 `app` 对象从模板传递到脚本中。

在你的模板中，将 `app` 作为参数传递：

```markdown
<% await tp.user.vaultAnalyzer(app) %>
```

然后，在你的 `vaultAnalyzer.js` 脚本中，你可以利用 Obsidian API：

```javascript
async function analyzeVault(app) {
    const files = app.vault.getMarkdownFiles();
    const fileCount = files.length;
    return `Your vault currently contains ${fileCount} markdown files.`;
}

module.exports = analyzeVault;
```

这赋予了你的脚本与功能完备的 Obsidian 插件相同级别的访问权限，而无需承担编写和编译独立插件的开销。

## 实用建议与权衡

虽然用户脚本很强大，但它们需要一种有纪律的方法，以防止你的 vault 变得脆弱。

保持你的脚本模块化和聚焦。一个名为 `weather.js` 的脚本应该只获取天气，而不是同时格式化你的任务列表。当 API 端点发生变化或脚本失败时，这会使调试变得容易得多。

依赖 `.js` 文件，而不是在模板的 `<* *>` 执行标签内编写大量内联 JavaScript 代码块。内联代码难以格式化，在 Obsidian 中缺乏语法高亮显示，并且无法在多个模板中轻松重用。通过将逻辑保留在脚本文件夹中，你将 Markdown 演示与 JavaScript 执行分离开来。

注意执行时间。如果你的每日笔记模板通过用户脚本查询五个不同的外部 API，那么创建新的每日笔记可能需要几秒钟的时间。始终在你的 API 脚本中实现 `try/catch` 块并返回一个后备字符串（如 "Service unavailable"），这样即使单个网络请求失败，你的模板也不会完全崩溃。

## 结论

掌握如何使用 Obsidian Templater 用户脚本，弥合了静态笔记记录和动态[工作流](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)自动化之间的差距。通过设置专用的脚本文件夹、使用 CommonJS 模块格式以及利用异步 API 调用，你可以将 Obsidian vault 转变为与外部世界交互的集中式枢纽。从简单的文本操作脚本开始，逐渐转向外部数据获取，最终，你将构建出完全契合你认知风格的高度定制化工作流。

## 常见问题

### 我需要了解 JavaScript 才能使用 Templater 用户脚本吗？
是的，编写和调试用户脚本需要基本的 JavaScript 知识。然而，有大量的 Obsidian 用户在论坛和 GitHub 上分享预先编写好的脚本，即使你不是程序员，也可以复制、粘贴和修改它们。

### 为什么我的用户脚本返回 "tp.user.myScript is not a function"？
此错误通常意味着 Templater 尚未识别该文件。确保该文件具有 `.js` 扩展名，位于 Templater 设置中指定的确切文件夹内，并且正确使用了 `module.exports = yourFunction`。重新加载 Templater 插件通常可以解决此问题。

### 我可以在脚本中使用像 'fs' 或 'path' 这样的 Node.js 模块吗？
可以，由于 Obsidian 运行在 Electron 上，你可以在用户脚本中 `require()` 标准的 Node.js 模块。这允许你读写 Obsidian vault 之外的本地文件系统。

### 用户脚本在多台设备之间使用安全吗？
如果你使用 Obsidian Sync 或云盘，用户脚本可以无缝同步。然而，依赖绝对文件路径或特定于系统的命令行工具的脚本，如果在桌面和移动环境不同时可能会失败。坚持使用相对 vault 路径和 Obsidian API，以获得最大的兼容性。

### 我的用户脚本数量有限制吗？
Templater 没有内置的硬性限制。你可以在指定的文件夹中拥有数十个脚本。只有当触发模板时，脚本实际执行的内容才会成为性能问题，而不是存储了多少脚本。

---

## 相关阅读

- [Obsidian Canvas 与 Excalidraw：哪款视觉工具胜出？](/zh-cn/posts/obsidian-canvas-vs-excalidraw-for-mind-mapping/)

- [使用 Templater 脚本自动化 Obsidian Frontmatter：5 步指南](/zh-cn/posts/automating-obsidian-frontmatter-with-templater-scripts/)