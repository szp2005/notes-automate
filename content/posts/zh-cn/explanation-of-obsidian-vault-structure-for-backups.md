---
publishedAt: 2026-05-16T14:58:13+08:00
image: "/og/explanation-of-obsidian-vault-structure-for-backups.webp"
title: "Obsidian 库结构与备份完全解析（完整指南）"
description: "关于 Obsidian 库结构与备份的完整解析。了解如何保护您的笔记、理解隐藏的 .obsidian 文件夹，并防止数据丢失。"
pubDate: "2026-05-02"
author: "Alex Chen"
tags: ["obsidian", "backups", "pkm", "data security"]
slug: "explanation-of-obsidian-vault-structure-for-backups"
type: "informational"
---

# Obsidian 库结构与备份完全解析（完整指南）

> **快速解答：** 要全面解析 Obsidian 库结构与备份，首先要认识到您的库（vault）只是电脑上的一个标准本地文件夹。为了全面备份您的工作区，您必须同时保护可见的 Markdown 文件（您的笔记）和隐藏的 `.obsidian` 目录，后者包含您的[插件](/zh-cn/posts/periodic-notes-plugin-weekly-reviews/)、主题、快捷键和核心配置，从而确保您能够恢复完全相同的环境而不会丢失任何自定义设置。

Obsidian 最大的优势在于其“本地优先”的理念。与将您的个人[知识管理](/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/)系统锁定在专有云数据库背后不同，Obsidian 将所有内容以纯文本文件的形式直接存储在您的硬盘上。这意味着您对自己的数据拥有绝对的控制权、无与伦比的隐私保护，并能够离线访问您的笔记。然而，这种本地优先的方法也将责任完全推到了您的肩上：如果您的硬盘损坏且没有备份，您的整个知识库将荡然无存。

准确理解您的 Obsidian 库中到底包含什么是确保数据永久安全的关键第一步。许多用户错误地认为备份可见的文本文件就足够了，结果在遭遇灾难性的硬盘故障后才发现，他们丢失了花费数周时间配置的插件、自定义 CSS 以及复杂的文件夹架构。

本全面指南深入解析了用于备份的 Obsidian 库结构。通过了解库的剖析——从标准的 Markdown 文件到隐藏在表面之下的复杂系统文件——您可以设计出一个万无一失的自动化[备份策略](/zh-cn/posts/configuring-obsidian-for-automated-daily-backup-to-dropbox/)，不仅保护您的知识，还保护您精心定制的工作区环境。

## Obsidian 库的剖析

从本质上讲，Obsidian 库只是一个文件夹。您可以使用 macOS 的 Finder、Windows 的 File Explorer 或任何命令行界面打开此文件夹。由于没有在后台运行的数据库，您可以切实看到知识系统的每一个组件。广义上讲，其结构分为两个截然不同的类别：可见资产和隐藏配置文件。

### 可见文件：Markdown 与媒体文件

库中最明显的部分由您每天创建并与之交互的文件组成。Obsidian 依赖于标准格式，这确保了即使该软件明天就消失了，您仍然可以使用任何基本的文本编辑器（如 Notepad 或 TextEdit）阅读您的笔记。

- **Markdown 文件 (.md)：** 这些是您库中的命脉。您输入的每一条笔记、创建的每一个链接以及分配的每一个标签都使用 Markdown 语法保存为纯文本。它们占用的存储空间非常小。一个包含 10,000 条详细笔记的库可能只占用 50 到 100 兆字节的磁盘空间。
- **附件与媒体：** 当您将图片、PDF、音频片段或视频拖入 Obsidian 笔记时，该软件会将该文件复制到您的库中。根据您的设置，这些文件可能存储在根目录中，与笔记并排，或者路由到专用的“附件”文件夹中。与 Markdown 文件不同，媒体文件会使您的库的大小呈指数级增长。一个充斥着高分辨率 PDF 和图片的库很容易达到几 GB 的大小。
- **Canvas 文件 (.canvas)：** 如果您使用 Obsidian 的无限画布功能进行视觉头脑风暴，这些文件会以 `.canvas` 为扩展名的开放 JSON 格式保存。

从备份的角度来看，这些可见文件代表了您的实际数据。丢失它们意味着丢失您的思想、[研究](/zh-cn/posts/obsidian-vs-devonthink-for-large-research-archives/)和记录。

### 隐藏引擎：`.obsidian` 文件夹

虽然可见文件包含了您的知识，但隐藏的 `.obsidian` 文件夹决定了您如何与这些知识进行交互。在[默认](/zh-cn/posts/things-theme-vs-minimal-theme-obsidian/)情况下，macOS 和 Linux 等操作系统会隐藏以句点 (`.`) 开头的文件夹。Windows 也可能会根据您的视图设置将其隐藏。

`.obsidian` 文件夹是您特定库的“大脑”。它将纯文本文件的静态目录转变为一个动态、互连且高度定制的[个人知识管理](/zh-cn/posts/customizing-obsidian-sidebar-with-commander-plugin-icons/)环境。对用于备份的 Obsidian 库结构的完整解析必须重点强调这个隐藏目录。如果您仅备份 Markdown 文件，那么在一台新电脑上恢复您的库时，将会得到一个完全空白的 Obsidian 环境：默认主题，没有插件，没有自定义快捷键，也没有保存的工作区。

## 为什么 `.obsidian` 文件夹对备份至关重要

要真正体会需要备份的内容，我们需要仔细剖析 `.obsidian` 目录。了解其子组件可以帮助您在决定备份例程中包含或排除哪些内容时做出明智的决策，特别是当您面临严格的存储限制或处理复杂的[版本控制](/zh-cn/posts/setting-up-obsidian-git-for-automated-version-control/)系统时。

### 核心设置与工作区

直接在 `.obsidian` 文件夹中，您会发现几个记录您偏好的关键 JSON 文件。

- **`app.json`：** 存储核心应用程序设置，例如您的拼写检查偏好、附件文件夹位置以及默认查看模式。
- **`appearance.json`：** 跟踪您当前的主题、强调色和字体设置。
- **`hotkeys.json`：** 如果您花了几个小时将自定义键盘快捷键绑定到特定操作，此文件是唯一存储这些偏好的地方。
- **`core-plugins.json`：** 记录了哪些原生 Obsidian 功能（如大纲、标签面板或 Canvas）被开启或关闭。
- **`workspace.json`（以及 `workspace-mobile.json`）：** 这些文件会不断更新。它们记住了哪些面板是打开的、它们的拆分配置以及您最后查看的文件。当您启动 Obsidian 并准确地从您离开的地方恢复时，它就是在读取这些文件。

### 社区插件与主题

Obsidian 社区开发了数千个第三方插件，这些插件极大地扩展了软件的功能——从添加 [Dataview](/zh-cn/posts/creating-automated-index-pages-with-obsidian-dataview/) 查询和 [Kanban](/zh-cn/posts/kanban-plugin-for-obsidian-project-management/) 看板到集成人工智能和高级日历工具。

- **`plugins/` 目录：** 该文件夹为您安装的每一个社区插件都包含一个子文件夹。在每个子文件夹内，通常有一个 `main.js`（插件代码）、一个 `manifest.json`（插件元数据）和一个 `data.json` 文件。`data.json` 文件极其重要；它存储了您为该个别插件配置的特定设置和参数。
- **`themes/` 目录：** 您从外观菜单下载的任何社区主题都作为 CSS 文件存储在此处。

### 代码片段与自定义 CSS

如果您是一位通过自定义 CSS 调整界面的高级用户，您的代码将存储在 `.obsidian/snippets/` 文件夹中。备份此目录可确保外观修改（例如自定义复选框样式、调整后的标题大小或特定的颜色高亮）在系统崩溃或迁移到新设备后仍然有效。

## Obsidian 库结构与备份完全解析：包含与排除的内容

在设计备份架构时，您必须决定是备份绝对的所有内容，还是实施选择性方法。对于绝大多数用户来说，最安全、最简单的方法是完整复制：备份整个库文件夹，包括隐藏文件及所有内容。然而，随着您的库的扩展，可能需要一些微调。

### 必须备份的目录

您的备份脚本或软件必须明确包含：
1. 根目录和可见子文件夹中的所有 `.md`、`.canvas` 和媒体文件。
2. 整个 `.obsidian` 文件夹，专门针对 `plugins`、`themes` 和 `snippets` 子目录，以及所有 `.json` 配置文件。

如果您使用的是 Obsidian Sync（官方付费同步服务），它允许您选择性地切换在不同设备间同步哪些配置文件。即使您使用 Obsidian Sync，您也应该维护一个独立、外部的库备份，因为 Sync 是一种同步工具，而不是真正的历史备份解决方案。

### 缓存文件与不必要的臃肿

虽然备份 `.obsidian` 文件夹至关重要，但如果您使用高级备份工具（如 Git、Restic，或在备份软件中设置特定的文件排除规则），其中有一些特定文件是可以安全排除的。

- **`.obsidian/workspace.json`：** 因为此文件在您每次点击新笔记或调整面板大小时都会更新，所以它处于不断变化中。如果您正在使用像 Git 这样的版本控制软件来备份您的库，跟踪 `workspace.json` 将导致数百次毫无意义的提交。排除它仅仅意味着，如果您从备份中恢复，您的笔记将打开为默认视图，而不是您最后使用的布局。
- **`.trash/`：** 如果您已配置将 Obsidian 的删除文件发送到其内部的 `.trash` 文件夹，而不是系统回收站，您可能不需要备份它。排除废纸篓文件夹可以节省空间并防止废弃文件杂乱您的备份存档。
- **大型缓存文件：** 某些复杂的插件会在它们各自的插件文件夹中生成内部缓存文件或本地数据库（用于索引或特定渲染任务）。虽然通常很小，但偶尔一个优化不佳的插件会生成巨大的缓存文件。如果某个插件文件夹看起来异常庞大，它可能正在生成可以安全地从日常备份中排除的缓存数据。

## 根据库结构选择正确的备份策略

现在您已经彻底了解了用于备份的 Obsidian 库结构，您必须实施一种能够可靠地捕获此结构的策略。由于 Obsidian 文件是标准的系统文件，您不会被锁定在任何单一的备份生态系统中。

### 云存储同步（Dropbox、Google Drive、iCloud）

对于普通消费者来说，最常见的方法是将整个 Obsidian 库目录直接放置在云同步文件夹中，例如 Dropbox、Google Drive、OneDrive 或 iCloud Drive。

**优点：** 
- 完全无阻力且自动化。
- 非常适合在多台台式电脑之间同步。
- 提供基本的版本历史记录（大多数云提供商允许您在 30 天内恢复文件的旧版本）。

**缺点：** 
- 移动访问可能很麻烦。Apple 严格限制应用程序与文件系统的交互方式，使得 iCloud 成为同步到 iPhone 或 iPad 的唯一高度可靠的免费选项。
- 同步冲突。如果您在两台不同的电脑上同时打开 Obsidian，云提供商在试图调和对隐藏的 `.obsidian` 文件夹的同时更改时，可能会创建重复文件或损坏 `workspace.json` 文件。

### 自动本地备份（Time Machine、File History）

使用本机操作系统工具——适用于 macOS 的 Apple Time Machine 或适用于 Windows 的 File History——是极佳的第二层保护。这些工具会每小时自动将您的整个硬盘驱动器（包括隐藏的 `.obsidian` 文件夹）复制到外部驱动器。

**优点：** 
- 完美捕捉确切的库结构，包含所有隐藏和系统文件，无需手动配置。
- 允许您回到过去，恢复三周前删除的特定段落。

**缺点：** 
- 需要将外部硬盘驱动器物理连接到计算机（或在本地网络上可用）。
- 无法防止盗窃、火灾或严重洪水等站点范围的灾难。

### 使用 Git 进行版本控制

对于软件[开发者](/zh-cn/posts/best-obsidian-plugins-for-developers-and-code-snippets/)、工程师和技术用户来说，Git 是 Obsidian 备份的黄金标准。使用社区插件 *Obsidian Git*，您可以自动化提交库更改并将其推送到 GitHub、GitLab 或 Bitbucket 上的私人存储库的过程。

**优点：** 
- 创建一个原始的、带注释的历史记录，准确展示您的知识库是如何演变的。
- 难以置信的空间效率，因为 Git 只跟踪改变的特定文本行，而不是复制整个文件。
- 允许您通过将 `workspace.json` 和 `.trash` 添加到 `.gitignore` 文件来轻松排除快速变化的文件。

**缺点：** 
- 对于非技术用户来说，学习曲线陡峭。
- Git 是为文本设计的，而不是为大型媒体文件。如果您的库严重依赖于 50MB 的 PDF 研究论文、4K 视频片段或未压缩的音频文件，您的 Git 存储库将很快变得臃肿、缓慢，并且可能会违反 GitHub 的文件大小限制。

## 实用建议：建立一个万无一失的 Obsidian 备份系统

为了保证您库结构的安全，您必须超越单点故障的局限。实施多层方法可确保一个系统中的故障不会导致数据完全丢失。

### 3-2-1 备份法则

数据安全的行业标准是 3-2-1 法则，并且它非常适用于 Obsidian 库结构。

- **3 份您的数据副本：** 您应该在硬盘上拥有主要的活动副本，加上两份备份副本。
- **2 种不同的存储介质：** 不要将两个备份都存储在同一个外部硬盘上。使用混合介质，比如一个外部硬盘驱动器和一个云存储提供商。
- **1 份异地副本：** 确保至少有一个备份在物理上远离您的计算机。如果电涌摧毁了您的笔记本电脑并连带烧毁了插在上面的外部驱动器，您的异地云备份将挽救您的库。

对 Obsidian 应用该法则的实际操作如下所示：
1. **主要副本：** 存储在您的笔记本电脑 SSD 上。
2. **本地备份：** 由 macOS 的 Time Machine 或 Windows 的 File History 处理，备份到办公桌上的外部 SSD 中。
3. **异地备份：** 库位于 Dropbox 文件夹中（自动同步到云端），或者您使用 Obsidian Git 插件每 30 分钟将更改推送到私有 GitHub 存储库。

### 处理跨平台怪癖

如果您正在跨 macOS、Windows 以及 Android 或 iOS 设备使用 Obsidian，隐藏的 `.obsidian` 文件夹有时会引起摩擦。因为操作系统渲染字体和处理文件路径的方式不同，在 Windows 上完美运行的配置在 Mac 上看起来可能会有些不对劲。

为了解决这个问题，[高级用户](/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/)通常会利用 Obsidian 指定不同配置文件夹的能力。在 Obsidian 设置中（About -> Override config folder），您可以更改默认的 `.obsidian` 文件夹名称。您可以创建 `.obsidian-mac`、`.obsidian-windows` 和 `.obsidian-mobile`。您的备份系统会备份这三个文件夹，但每台设备将从其特定的文件夹读取，从而在防止主题或快捷键同步冲突的同时，确保核心的 Markdown 文件保持统一并得到持续备份。

## 结论

对用于备份的 Obsidian 库结构的透彻解析表明，保护您的个人知识管理系统需要做的不仅仅是复制文本文件。您的库是一个活生生的生态系统，严重依赖于隐藏的 `.obsidian` 目录中的配置、插件和样式表。通过积极设计一种兼顾可见笔记和隐藏引擎的备份策略——并应用诸如 3-2-1 法则之类的可靠框架——您可以保证您的数字大脑在未来的几十年里保持安全、便携，并完全在您的掌控之中。

## 常见问题解答

### 如果我备份了我的库但排除了 .obsidian 文件夹会怎样？
如果您将 `.obsidian` 文件夹排除在备份之外，随后需要恢复您的库，您将完美地找回所有书写的文本、笔记和附件。然而，您将丢失所有已安装的主题、社区插件、自定义快捷键和工作区布局，迫使您从头开始手动重建您的用户界面和工具集。

### 我可以将我的 Obsidian 库直接存储在 Google Drive 上吗？
可以，您可以将整个 Obsidian 库（包括隐藏结构）直接存储在同步到云端的本地 Google Drive 文件夹中。这可以作为一个极好的、无缝的异地备份，尽管您必须确保 Drive 应用程序设置为将文件“保持离线可用（available offline）”，以防止 Obsidian 在尝试读取未加载的笔记时冻结。

### 用于备份目的时，一个平均水平的 Obsidian 库会达到多大？
如果您主要编写文本并使用标准插件，Obsidian 库很少会超过 100-200 兆字节，这使得备份起来非常快速且便宜。然而，如果您的库结构中大量包含嵌入式 PDF、高分辨率图片或录音，文件夹的大小可能会迅速扩展到数十 GB，这可能需要升级您的云存储方案。

### 如果我已经在使用外部硬盘，我还需要 Obsidian Sync 吗？
Obsidian Sync 和外部硬盘的作用截然不同。Obsidian Sync 主要是一种同步工具，旨在利用端到端[加密](/zh-cn/posts/configuring-obsidian-for-end-to-end-encrypted-sync/)，无缝且实时地在您的台式机、笔记本电脑和移动设备之间更新工作区。外部硬盘提供历史性的自动本地备份；在没有真正备份的情况下完全依赖 Sync 会使您面临风险——如果您意外删除文件，该删除操作会跨所有设备进行同步。

---

## 延伸阅读

- [学生如何使用 Obsidian 整理课堂笔记：2026 完整指南](/zh-cn/posts/how-to-organize-school-notes-using-obsidian-for-students/)
- [将 PARA 方法应用于 Obsidian 库：完整指南](/zh-cn/posts/applying-the-para-method-to-an-obsidian-vault/)
- [Obsidian 的 Canvas：2026 年的无限白板创意](/zh-cn/posts/canvas-for-obsidian-infinite-whiteboard-ideas/)