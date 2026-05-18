---
publishedAt: 2026-05-16T14:58:13+08:00
image: "/og/setting-up-obsidian-with-apple-shortcuts-for-mobile.webp"
editorSummary: >-
  Obsidian Apple Shortcuts Mobile 设置通过绕过应用程序缓慢的启动过程，彻底改变了你在 iOS 上捕捉灵感的方式。我发现 Advanced URI 插件对于追加到 daily notes 和自动化复杂的工作流至关重要，但代价是必须仔细处理 vault 名称的 URL 编码——哪怕是一个未编码的字符都会破坏整个 URI。通过构建通过 Safari 共享表单直接处理文本输入、时间戳和网页剪辑的 shortcuts，你可以创建一个无缝的管道，让你无需等待 Obsidian 加载即可将想法、文章和听写直接发送到你的 vault 中。这种方法从根本上将移动端笔记记录从充满摩擦的体验变成了即时捕捉。
authorNote: >-
  我在 iPhone 15 上设置了一个 daily note 追加器来测试这个工作流，将听写 shortcut 映射到 Action Button 以便在开车时免提捕捉。真正的挑战出现在我的 vault 名称包含空格时——我最初忘记了 URL 编码，花了二十分钟排查 shortcut 运行但数据从未保存的静默失败。当我正确地将 My%20Vault 编码并验证了 Advanced URI 插件设置后，整个系统运行得完美无缺。现在我无需打开 Obsidian 即可即时捕捉语音笔记。
manualRelated:
  - title: "面向 Obsidian 重度用户的 Templater 插件教程：高级自动化"
    url: "/zh-cn/posts/templater-plugin-tutorial-for-obsidian-power-users/"
  - title: "使用 Alfred 自动化 Obsidian Advanced URI：设置指南"
    url: "/zh-cn/posts/obsidian-advanced-uri-automation-alfred/"
  - title: "使用 Python 自动化 Obsidian Daily Notes：完整指南"
    url: "/zh-cn/posts/automate-obsidian-daily-notes-using-python/"
title: "在移动端通过 Apple Shortcuts 设置 Obsidian：完整指南"
description: "了解如何掌握在移动端通过 Apple Shortcuts 设置 Obsidian。无缝自动化你在 iOS 上的快速捕捉、daily notes 和任务。"
pubDate: "2026-05-03"
author: "Alex Chen"
tags: ["obsidian", "apple shortcuts", "productivity", "automation"]
slug: "setting-up-obsidian-with-apple-shortcuts-for-mobile"
type: "informational"
---

# 在移动端通过 Apple Shortcuts 设置 Obsidian：完整指南

> **快速解答：** 在移动端通过 Apple Shortcuts 设置 Obsidian 需要使用官方的 Obsidian URI scheme 或像 Advanced URI 这样的[社区](/zh-cn/posts/how-to-install-community-plugins-in-obsidian-mobile/)插件。通过创建一个 Apple Shortcut 来格式化你的文本并通过 Obsidian URI 链接发送它，你可以绕过缓慢的加载时间，将想法、[daily notes](/zh-cn/posts/automate-obsidian-daily-notes-using-python/) 或任务直接从你的 iPhone 或 iPad 主屏幕捕捉到你的 vault 中。

对于许多用户来说，Obsidian 是桌面上用于个人[知识管理](/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/)的终极工具。然而，当过渡到移动环境时，一个常见的摩擦点出现了：移动端应用程序可能需要几秒钟的时间来加载，特别是在使用大型 vaults 或大量使用插件的情况下。这种延迟破坏了快速捕捉的流程——即在灵感溜走之前将其记下的关键能力。

对于 iOS 和 iPadOS 用户的解决方案在于 Apple Shortcuts。通过将 Obsidian 的深度链接功能（URI schemes）与苹果原生的[自动化](/zh-cn/posts/templater-plugin-tutorial-for-obsidian-power-users/)工具相集成，你可以创建一个无摩擦的即时捕捉管道。你可以直接将文本、URL 和听写发送到你的 vault 中，而无需等待 Obsidian 应用程序完全初始化。

本指南提供了通过 Apple Shortcuts 在移动端设置 Obsidian 的全面、循序渐进的方法。无论你是想快速将想法追加到 daily note、从 Safari 保存网页剪辑，还是创建专门的任务条目，这些自动化的工作流都将从根本上改变你在旅途中与笔记交互的方式。

## 为什么 Apple Shortcuts 能彻底改变移动端 Obsidian

了解为什么需要这种集成的机制有助于设计更好的工作流。当你打开 Obsidian 移动端应用程序时，它必须解析你的整个 vault、加载社区[插件](/zh-cn/posts/periodic-notes-plugin-weekly-reviews/)，并应用自定义 CSS 才能变得可交互。虽然桌面处理器在几毫秒内就能处理完这些，但移动设备受限于电池和散热限制，所需时间明显更长。

Apple Shortcuts 绕过了这个启动序列以进行数据输入。使用被称为 URI（统一资源标志符）的协议，Shortcuts 可以将一段经过重度编码的文本字符串发送给操作系统，然后操作系统会将其直接传递给 Obsidian 的后台进程。

好处是显而易见的：
- **零加载时间捕捉：** 从主屏幕小组件、锁屏或 Action Button 触发一个 shortcut，输入你的想法，然后点击完成。
- **一致的格式化：** Shortcuts 可以在发送给 Obsidian 之前自动将[元数据](/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/)、时间戳和标签追加到你的输入中。
- **上下文感知：** Shortcuts 可以提取你当前的位置、当前的 Safari 网页或剪贴板内容，并自动将它们格式化为 Markdown。

## 自动化设置的基本先决条件

在 Apple Shortcuts 中构建任何工作流之前，需要正确配置你的环境。如果未能建立这些先决条件，将导致 URI 错误或数据未保存的静默失败。

### Obsidian Sync 或 iCloud Drive
你的 vault 必须在你的 iOS 设备上可访问。与 Apple Shortcuts 集成最可靠的两种方法是 Obsidian Sync 和 iCloud Drive。如果你通过辅助应用程序使用像 Git 或 Syncthing 这样的第三方同步工具，如果本地文件系统尚未协调更改，URI schemes 可能会偶尔失败。iOS 原生理解 iCloud Drive，使其对于直接与文件交互的 Shortcuts 非常可靠，尽管 URI schemes 在 Obsidian Sync 上也能完美运行。

### Advanced URI 插件
虽然 Obsidian 具有原生的 URI 支持，但其功能对于复杂的移动端工作流来说有些有限。对于想要追加文本到特定标题、自动化 daily notes 或在不打开 UI 的情况下触发内部命令的用户来说，由 Vinzent 开发的社区插件“Advanced URI”是必需的。

要安装它：
1. 在你的桌面或移动端应用程序上打开 Obsidian。
2. 导航到 Settings > Community Plugins。
3. 如果你还没有关闭 Safe Mode，请将其关闭。
4. 搜索“Advanced URI”并点击 Install，然后 Enable。
5. 在插件设置中，确保正确识别了你的 vault 名称。

### Vault 名称 URL 编码
URI schemes 要求对你的 vault 名称进行 URL 编码。如果你的 vault 命名为 `My Knowledge Base`，则在 Shortcut 中必须写成 `My%20Knowledge%20Base`。将所有空格替换为 `%20`，并避免在你的 vault 文件夹名称中使用特殊字符，以防止解析错误。

## 第 1 步：构建基础的快速捕捉 Shortcut

移动端用户最常见的需求是一个简单的文本输入框，它在一个特定文件夹（例如“Inbox”）中创建一个新文件。

以下是在新的 Apple Shortcut 中添加操作的确切顺序：

1. **Ask for Input:** 添加“Ask for Input”操作。将其设置为请求 `Text`，提示语为“What's on your mind?”。
2. **Set Variable:** 添加一个“Set Variable”操作。将其命名为 `NoteContent` 并将其设置为 `Provided Input`。
3. **URL Encode:** 添加“URL Encode”操作。将 `NoteContent` 变量传递给它。这可确保笔记中的空格、换行符和特殊字符不会破坏 URI 链接。
4. **Current Date:** 添加一个“Date”操作。对其进行格式化以输出自定义字符串，例如 `yyyyMMddHHmmss`。这确保每次快速捕捉都有一个唯一的文件名。
5. **Text (Constructing the URI):** 添加一个“Text”操作。这是你构建 Obsidian URL 的地方。使用以下语法：
   `obsidian://new?vault=YOUR%20VAULT%20NAME&file=Inbox/Note%20CurrentDate&content=URL%20Encoded%20Text`
   *(将 YOUR%20VAULT%20NAME 替换为你实际经过 URL 编码的 vault 名称，并使用 Shortcut 变量表示 CurrentDate 和 URL Encoded Text)。*
6. **Open URL:** 添加“Open URL”操作并将 Text 块传递给它。

当你运行此 shortcut 时，会立即出现一个原生的 iOS 文本框。按下回车键后，文本会被静默路由到你的 Obsidian Inbox 文件夹中作为一个新的 markdown 文件。

## 第 2 步：高级自动化：追加到 Daily Notes

将每个想法都创建为新文件可能会使你的 vault 变得杂乱。许多用户更喜欢将移动端捕捉的内容直接追加到他们的 Daily Note 中。这需要 Advanced URI 插件。

Advanced URI 允许你动态定位 daily note，而无需在 Apple Shortcuts 中计算今天的日期格式。

该[工作流](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)类似于快速捕捉 shortcut，但 URI 结构有显著改变：

1. **Ask for Input:** 提示输入文本。
2. **URL Encode:** 编码提供的输入。
3. **Text Action:** 构建 Advanced URI。格式为：
   `obsidian://advanced-uri?vault=YOUR%20VAULT%20NAME&daily=true&data=URL%20Encoded%20Text&mode=append`

通过设置 `daily=true` 和 `mode=append`，你指示 Obsidian 查找今天的 daily note（如果不存在则根据你的 Daily Notes 插件设置创建它）并将文本添加到文件底部。

### 添加时间戳和格式化
为了让追加到 daily note 的内容更加结构化，你可以在进行 URL 编码之前对文本进行格式化。在你的 Apple Shortcut 中，在“Ask for Input”之后添加一个“Text”操作：

```markdown
- [ ] [[Current Time]] Provided Input
```

将这串格式化后的文本传递给 URL Encoder。现在，每次你捕捉想法时，它都会作为一个带有时间戳的待办清单项出现在你的 daily note 中，非常适合跟踪任务或每日日志。

## 第 3 步：网页剪辑和保存文章到 Obsidian

iOS 上的 Safari 没有标准的浏览器扩展，这使得网页剪辑变得困难。然而，Apple Shortcuts 可以出现在 iOS 的 Share Sheet 中，允许你直接将网页发送到 Obsidian。

要构建一个 Share Sheet 网页剪辑器：
1. 在 Shortcut 设置（'i' 图标）中，启用“Show in Share Sheet”。
2. 将输入类型设置为仅接受 `Safari web pages` 和 `URLs`。
3. **Get Details of Safari Web Page:** 使用此操作提取 `Name` (标题) 和 `Page URL`。
4. **Get Markdown from Rich Text:** 将网页内容通过此操作传递。这会尝试将文章正文转换为 Markdown。
5. **Text Action:** 格式化你的笔记。
   ```markdown
   # Safari Web Page Name
   Source: [Link](Page URL)
   Date: Current Date

   Markdown from Rich Text
   ```
6. **URL Encode:** 对整个 Text 块进行编码。
7. **Text (URI Construction):** 
   `obsidian://new?vault=YOUR%20VAULT&file=Articles/URL%20Encoded%20Name&content=URL%20Encoded%20Text`
8. **Open URL:** 执行该链接。

现在，在 Safari 中阅读文章时，点击共享图标，选择你的 Obsidian Clipper shortcut，文章将被解析、格式化，并保存到你的 vault 的“Articles”文件夹中。

## 第 4 步：听写和音频捕捉

对于无法打字的情况——比如开车或走路时——语音捕捉是必不可少的。iOS 内置了强大的听写功能，可以轻松集成到这个管道中。

用“Dictate Text”操作替换基础 shortcut 中的“Ask for Input”操作。将语言设置为你的偏好，并选择它是应该在停顿后还是在手动点击时停止聆听。将听写文本的输出传递到你的 URL Encoder，并像往常一样继续。

对于拥有 iPhone 15 Pro 或更新机型的用户来说，将听写到 Obsidian 的 shortcut 映射到物理 Action Button 会创造出终极的无摩擦捕捉设备。只需长按即可开始录音，松开后即可将转录文本直接发送到你的 daily note 中。

## iOS Obsidian Shortcuts 常见问题排查

即使经过仔细设置，你在处理 iOS 上的 URL schemes 和后台应用刷新时也可能会遇到特定问题。

**问题：Shortcut 运行了，但 Obsidian 打开到主页且没有保存任何内容。**
这几乎总是 URL 编码失败导致的。确保你的 vault 名称和笔记内容中的每一个空格、换行符和特殊字符都被完全编码。文本输入中只要有一个未编码的空格或与号（`&`）就会破坏 URI 解析，导致 Obsidian 默认返回到标准的主屏幕。

**问题：Advanced URI 追加 daily note 创建了重复文件。**
确保你 Obsidian 中的 Daily Notes 核心插件设置与你的预期完全匹配。如果 Advanced URI 找不到与你设置中指定的日期格式完美匹配的文件，它就会创建一个新文件。iOS 和 Obsidian 之间在时区或日期字符串格式上的差异可能会导致出现重复条目。

**问题：Shortcut 停滞在“Open URL”步骤。**
iOS 有时会在后台严重挂起应用程序。如果 Obsidian 关闭了很长时间或你的设备 RAM 不足，URI 命令在等待 Obsidian 启动时可能会超时。在编码步骤和“Open URL”步骤之间添加一个“Wait 1 second”操作有时可以给系统提供足够的缓冲来处理请求。

## 最大化你的移动端生产力工作流

一旦技术基础稳固，你就可以扩展这些工作流来处理复杂的[任务管理](/zh-cn/posts/automating-your-task-management-with-obsidian-tasks-plugin/)和元数据生成。

考虑将 iOS 专属数据添加到你的捕捉中。Apple Shortcuts 可以访问你当前的地理位置、[日历](/zh-cn/posts/obsidian-full-calendar-plugin-review/)事件和健康数据。你可以构建一个 shortcut，当你到达办公室时触发，自动生成一个每日工作日志笔记，里面预先填满了你当天的会议（直接从 Apple Calendar 解析）。

此外，利用 iOS 小组件。将你最常用的 Shortcuts 直接放在主屏幕或锁屏上。无需通过导航文件夹来寻找你的快速捕捉功能，从锁屏点击一下即可立即唤出键盘。

记住要将你的移动端工作流与桌面端工作流明确分开。桌面端用于综合、大量编辑和连接想法。移动端应该纯粹优化为提取和捕捉。通过倾向于使用 Apple Shortcuts，你消除了移动端体验中导航的负担，让你能够完全专注于你试图保存的信息。

## 结论

在移动端通过 Apple Shortcuts 设置 Obsidian，是弥合繁重的、本地优先的知识管理与快速的、随时随地的数据捕捉需求之间差距的终极方法。通过掌握 Obsidian URI scheme 并利用 Advanced URI 插件，你可以构建一套个性化的捕捉工具——从听写管道到 Safari [网页剪辑器](/zh-cn/posts/review-of-the-best-obsidian-web-clipper-extensions/)。这种设置消除了移动端加载时间的摩擦，确保无论你在哪里，你的 vault 都能成为你的想法、任务和每日日志的单一且不受妥协的真实来源。

## 常见问题

### 我需要订阅 Obsidian Sync 才能使用 Apple Shortcuts 吗？
不需要，Obsidian Sync 并非严格要求。Apple Shortcuts 在你的设备上触发本地 URI 命令。只要你的 vault 存储在 iCloud Drive 中并且可以被本地的 Obsidian iOS 应用程序访问，shortcuts 就能正常运行。

### 我可以在没有网络连接的离线状态下运行 Obsidian Shortcuts 吗？
可以。因为 URI 命令完全由 iOS 操作系统和你设备上安装的 Obsidian 应用程序在本地处理，这些 shortcuts 在飞行模式或没有蜂窝网络信号的区域也能完美运行。

### 如何自动将标签添加到我的移动端捕捉内容中？
在你的 Apple Shortcut 的文本格式化阶段，只需在通过 URL Encoder 操作之前，在文本字符串的末尾输入你想要的标签（例如 `#mobile-capture` 或 `#inbox`）。Obsidian 会将它们读取为标准的 markdown 标签。

### 为什么我使用与号或井号时，文本输入会被截断？
与号（`&`）和井号（`#`）是 URL 结构中的保留字符。如果你的 Apple Shortcut 没有正确地对文本输入使用“URL Encode”操作，操作系统会认为这些字符是命令的结尾。在将你的文本变量组合成 Obsidian URI 链接之前，请务必确保其经过了完全的 URL 编码。

### 是否可以使用 Shortcuts 从 Obsidian 中提取数据？
可以，但这更复杂。Advanced URI 插件允许你指定文件路径并通过 x-callback-url 返回其内容。然而，这需要更高级的 Shortcuts 编程技巧来捕获返回的数据，并解析 Markdown 以供在其他 iOS 应用程序中使用。

---

## 相关阅读

- [使用 Alfred 自动化 Obsidian Advanced URI：设置指南](/zh-cn/posts/obsidian-advanced-uri-automation-alfred/)

- [使用 Alfred 自动化 Obsidian Advanced URI：设置指南](/zh-cn/posts/obsidian-advanced-uri-automation-alfred/)