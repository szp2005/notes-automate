---
image: "/og/how-to-sync-obsidian-with-google-drive-using-a-plugin.webp"
title: "将 Obsidian 与 Google Drive 同步：免费插件设置指南"
author: "Alex Chen"
date: 2026-04-29
slug: how-to-sync-obsidian-with-google-drive-using-a-plugin
description: "完整演示如何用 Remotely Save 把 Obsidian 同步到 Google Drive，覆盖安装、授权、首次同步、自动同步和常见错误排查。"
keywords: ["Obsidian Remotely Save plugin", "Obsidian Google Drive integration", "free Obsidian sync", "Obsidian cross-device sync", "Obsidian community plugins", "set up Remotely Save Obsidian", "Obsidian sync tutorial", "Obsidian vault backup Google Drive"]
draft: false
type: "informational"
tags: ["sync", "obsidian", "google", "drive"]
---

# 如何使用插件将 Obsidian 与 Google Drive 同步（免费逐步指南）

> **太长不看 (TL;DR)**
> - **Remotely Save** [社区](/zh-cn/posts/how-to-install-community-plugins-in-obsidian-mobile/)插件可将你的 Obsidian 库 (vault) 免费连接到 Google Drive，从而替代付费的 Obsidian Sync 订阅。
> - 设置只需不到 10 分钟：安装插件，使用 Google 进行身份验证，运行首次同步，然后在每台设备上重复此操作。
> - 最常见的错误（401 身份验证失败、同步冲突、移动设备文件丢失）只需简单的一步即可修复，下文将全面介绍。

---

## 目录

1. [为什么要将 Obsidian 与 Google Drive 同步？](#why-sync)
2. [先决条件：你需要准备什么](#prerequisites)
3. [第 1 步：安装 Remotely Save 插件](#step-1)
4. [第 2 步：配置 Remotely Save 与 Google Drive](#step-2)
5. [第 3 步：运行首次同步并启用自动同步](#step-3)
6. [解决常见同步问题](#troubleshooting)
7. [进阶技巧：加密、时间间隔、忽略文件夹](#pro-tips)
8. [常见问题解答 (FAQ)](#faq)
9. [结论](#conclusion)

---

## 为什么要将 Obsidian 与 Google Drive 同步？ {#why-sync}

Obsidian 官方的 **Obsidian Sync** 服务每月收费 4 至 8 美元。如果你想要无需费心的体验，这是一个合理的价格，但它的存储上限为 1 至 10 GB（取决于层级），并且将你的笔记绑定到 Obsidian 的服务器上。对于大多数已经为 Google 存储付费的用户来说，这笔经常性费用是不必要的。

这是一个直接对比：

| 功能 | Obsidian Sync (付费) | Google Drive + Remotely Save (免费) |
|---|---|---|
| 每月费用 | $4–$8/月 | $0 (使用现有的 Drive 存储空间) |
| 包含的存储空间 | 1–10 GB | 15 GB 免费 (付费最高 2 TB) |
| 端到端加密 | 是 (内置) | 可选 (通过插件密码) |
| 同步插件设置 | 是 | 是 (可配置) |
| 支持 Android | 是 | 是 |
| 支持 iOS | 是 | 是 |
| 版本历史记录 | 是 (12 个月) | 通过 Google Drive 文件版本功能 |
| 设置复杂度 | 几乎为零 | 约 10 分钟 |

Remotely Save 插件是一个由社区构建的开源插件，它充当桥梁。它处理与 Google 的 OAuth 身份验证握手，管理文件差异比对，并按照你定义的计划运行同步。你没有通过任何第三方服务器重新路由文件——你的库会直接从你的设备传输到你的 Google Drive。

---

## 先决条件：你需要准备什么 {#prerequisites}

在修改任何插件设置之前，请确认你已准备好以下内容：

- **一个具有 Drive 访问权限的 Google Account**。你的免费 15 GB 存储空间对于大多数库来说已经足够了；重度依赖附件的用户可能需要扩容。
- **在你的主计算机上已安装 Obsidian**（Windows、macOS 或 Linux）。如果需要，可以从 obsidian.md 下载。
- **在每台辅助设备上已安装 Obsidian**——Android 手机、iPhone、iPad、[备用](/zh-cn/posts/obsidian-anki-vs-spaced-repetition-plugin/)笔记本电脑等。
- **已启用社区[插件](/zh-cn/posts/periodic-notes-plugin-weekly-reviews/)。** 默认情况下，Obsidian 处于“安全模式 (Restricted mode)”，该模式会拦截所有第三方插件。前往 **Settings → Community plugins**，然后点击 **Turn on community plugins**。你会看到关于第三方代码的一次性警告——点击 **I understand** 继续。

> 💼 **高级用户提示：** 如果你为团队或小型企业[管理](/zh-cn/posts/using-obsidian-tasks-plugin-for-project-management/)笔记，并且需要超过 15 GB 的空间，Google Workspace 起价约为 6 美元/用户/月，为每个帐户提供至少 30 GB 的池化存储空间，以及共享云端硬盘和管理员控制权。如果你的库包含项目[文档](/zh-cn/posts/how-to-use-obsidian-for-software-engineering-documentation/)、客户文件或大型媒体附件，那么升级是值得的。

---

## 第 1 步：安装 Remotely Save 社区插件 {#step-1}

1. 在你的**桌面设备**上打开 Obsidian（务必先在桌面上配置，然后同步到移动设备）。
2. 点击左下角的**齿轮图标** (⚙️) 打开 **Settings**。
3. 在左侧边栏中，点击 **Community plugins**。
4. 点击 **Browse** 按钮。社区插件浏览器将会打开。
5. 在顶部的搜索栏中，输入 **Remotely Save**。
6. **fyears** 开发的插件会出现在结果顶部。点击它。
7. 点击 **Install**。等待 3–5 秒完成下载。
8. 点击 **Enable**。切换按钮会变成蓝色。

你现在将在已安装的插件列表中看到 **Remotely Save**。左侧边栏 (ribbon) 中也会出现一个小云图标——这是你的手动同步触发器。

> ⚠️ 不要将“Remotely Save”与“Obsidian Git”或“Self-hosted LiveSync”等旧插件混淆。它们解决的是不同的问题。Remotely Save 是唯一一个原生支持 Google Drive OAuth 的插件。

---

## 第 2 步：配置 Remotely Save 与你的 Google Drive 帐户 {#step-2}

这是最[重要](/zh-cn/posts/best-obsidian-themes-for-writing-longform-content/)的一步。请慢慢来。

1. 在 **Settings** 中，向下滚动左侧边栏，直到在“Plugin Options”部分下看到 **Remotely Save**。点击它。
2. 在插件设置的顶部，找到 **Remote Service** 下拉菜单。它默认设置为 **Dropbox**。点击下拉菜单并选择 **Google Drive (GDrive)**。
3. 下拉菜单下方将出现一个名为 **Google Drive** 的新部分。
4. 点击 **Auth** 按钮（标签可能类似于 **"Click to auth to Google Drive"**）。你的默认网络浏览器将打开并加载 Google OAuth 授权同意页面。
5. **登录**你想要存储库的 Google Account。
6. Google 会显示一个权限界面，列出 Remotely Save 需要的访问权限——具体来说是它在 Drive 中创建的文件的读写权限。点击 **Allow**。
7. 浏览器将显示一个简短的确认代码或成功消息。如果出现提示，请复制代码。
8. 切换回 Obsidian。如果系统要求，将代码粘贴到确认字段中，然后点击 **Submit** 或 **Confirm**。
9. 回到插件设置中，你会看到一个绿色指示器或一条文本备注，确认身份验证已激活。

**在 Drive 中[选择](/zh-cn/posts/things-theme-vs-minimal-theme-obsidian/)你的库文件夹：**

在插件设置中，查找标有 **"Folder for Remotely Save"** 或 **"Remote Base Dir"** 的字段。默认情况下，此项设置为你的库名称。除非你有特定的理由要重命名它，否则请保持原样。此文件夹将出现在你的 Google Drive 中一个名为 `remotely-save` 的顶级文件夹内。

---

## 第 3 步：运行首次同步并启用自动同步 {#step-3}

### 手动同步（首先执行此操作）

点击左侧边栏中的**云图标**，或者打开命令面板（Command Palette，**Ctrl/Cmd + P**）并搜索 **"Remotely Save: Start sync"**。点击它。

注意观察 Obsidian 窗口底部的状态栏。你会看到一个旋转指示器，然后是一条带有文件数量的完成消息。对于一个包含 500 篇笔记的库，这首次同步通常需要 30 到 90 秒，具体取决于你的网速。

在浏览器中打开 **Google Drive**，并导航至 **My Drive → remotely-save → [你的库名称]**。你的 `.md` 文件应该会立即显示在那里。

### 启用自动同步

回到 **Remotely Save 设置** 中：

- **Auto run every X minutes:** 将此设置为 `5` 以实现近乎实时的同步。如果你使用的是按流量计费的连接或对电池敏感的移动设备，请将其设置为 `30`。
- **Sync on save (after file modify):** 如果你想每次保存都自动触发同步，请启用此开关。这很方便，但会在一整天内产生更多的 Drive API 调用。
- **Sync on startup:** 启用此功能，这样插件就会在你打开 Obsidian 时，提取在其他设备上所做的任何更改。

### 在其他设备上重复操作

在你的手机或第二台计算机上安装 Obsidian。创建一个**新的本地库**（不要打开现有的库）。使用上述相同的步骤安装 **Remotely Save**。使用**相同的 Google Account** 进行身份验证。在 **Remote Base Dir** 字段中，输入你在第一台设备上使用的**完全相同的文件夹名称**。运行手动同步。你的笔记将会被同步过来。

---

## 解决常见同步问题 {#troubleshooting}

### 401 身份验证错误

**症状：** 同步立即失败，错误日志中显示“401 Unauthorized”。

**解决方法：** 前往 Remotely Save 设置，找到 Google Drive 部分，然后点击 **Revoke Auth**，接着从头开始重新进行身份验证。当 Google 使 OAuth 令牌失效时（通常在更改密码后，或者身份验证已超过 6 个月时）会发生这种情况。

### 同步冲突 / 重复文件

**症状：** 你看到文件名类似于 `note (conflict 2024-01-15).md` 的文件。

**解决方法：** Remotely Save 会创建一个冲突副本，而不是默默地覆盖。打开这两个文件，手动合并你想保留的内容，然后删除冲突副本。为了防止出现这种情况，请启用 **Sync on startup**，以便你的设备在开始书写之前始终提取最新版本。

### 文件未显示在移动设备上

**症状：** 桌面端同步完成，但你的手机显示空白库或旧文件。

**解决方法：** 在移动设备上，打开 Remotely Save 设置，并验证 **Remote Base Dir** 是否与你的桌面端设置完全匹配——包括大小写。哪怕只有一个字符不匹配，也会在 Drive 中创建一个新的空白文件夹，而不是从正确的文件夹中读取。

### 大型文件附件导致同步停滞

**症状：** 当你在库中添加图像、PDF 或音频文件时，同步会挂起。

**解决方法：** 在 Remotely Save 设置中，找到 **"Skip large files"** 选项并设置大小限制（例如 5 MB）。将大型附件存储在外部并链接到它们。或者，创建一个 `Attachments` 子文件夹并将其添加到 **Ignore Paths** 列表中（请参阅下文的进阶技巧）。

---

## 进阶技巧：加密、时间间隔、忽略文件夹 {#pro-tips}

**启用端到端加密：** 在 Remotely Save 设置中，在 **"Encryption Password"** 字段中输入密码。文件在离开你的设备之前会在客户端进行加密。Google 仅存储密文——即使 Google 也无法读取你的笔记。请务必记下这个密码；如果丢失它，就意味着永久失去对加密文件的访问权限。

**调整同步时间间隔：** 默认值通常设置为 0（仅限手动）。将其设置为 5 分钟是大多数用户的最佳选择。在使用有限数据的移动设备上，请使用 30 分钟。

**忽略特定文件夹：** 将文件夹路径添加到设置中的 **"Ignore Paths"** 字段。这对于大型附件文件夹、模板库或插件缓存非常有用。格式：每行一个文件夹名称，不要加前导斜杠。

**验证同步完整性：** 在大规模笔记导入或迁移之后，打开 Remotely Save 日志（通过命令面板 → "Remotely Save: View log" 访问）并确认每个文件都显示了成功的上传状态，而不是跳过或错误。

**不要同时使用基于文件夹的 Google Drive 桌面客户端：** 如果你运行了 Google Drive 桌面应用并且指向同一个库文件夹，你将面临重复同步并产生冲突的风险。让 Remotely Save 成为你库文件夹的唯一同步机制。

---

## 结论 {#conclusion}

使用 Remotely Save 将 Obsidian 与 Google Drive 同步，是目前最实用的免费同步解决方案。你将获得自动跨[设备同步](/zh-cn/posts/how-to-manage-obsidian-plugins-across-multiple-devices/)、可选的零知识加密以及对数据的完全控制——而这一切都无需支付月费。

整个过程耗时不到 10 分钟：安装 Remotely Save，使用 Google 进行身份验证，设置自动同步时间间隔，然后在每台设备上使用相同的 Remote Base Dir 名称重复此操作。如果出现任何故障，90% 的问题都可以追溯到失效的 OAuth 令牌（需要重新身份验证）或不匹配的文件夹名称（检查大小写）。

**准备好更进一步了吗？** 从 Obsidian 社区插件浏览器安装 Remotely Save，将其与 Google Workspace 帐户配对以扩展存储空间和团队共享，或者，如果你想要一个脱离 Google 生态的、端到端加密的替代方案，可以探索一下 pCloud。你的笔记、你的基础设施、你的规则。

---

## 常见问题解答 (FAQ)

### 将 Obsidian 与 Google Drive 同步安全吗？

你的文件通过 HTTPS 传输到 Google Drive，并在静止状态下使用 Google 的标准加密进行存储。如果你想要零知识加密——这意味着连 Google 也无法读取你的笔记——请在 Remotely Save 中启用密码选项。设置强密码后，你的库将与你的密码管理器一样安全。

### 它可以在 Android 和 iOS 上工作吗？

是的。Remotely Save 通过 Obsidian 移动应用程序支持 Android 和 iOS。这两个平台上的设置过程完全相同。iOS 用户应注意，后台同步受 iOS 应用程序生命周期规则的限制——请打开应用程序以触发同步。

### Remotely Save 会同步插件设置和主题吗？

默认情况下，它会同步整个库，包括 `.obsidian` 文件夹，该文件夹包含你的插件配置、主题和快捷键。如果你更喜欢在每台设备上单独管理设置，你可以使用 Ignore Paths 设置将其排除。

### 如果我的 Google Drive 存储空间用完了会怎样？

同步将失败并出现存储配额错误。Remotely Save 会记录错误而不是默默地跳过文件。你需要释放 Drive 空间，或者升级你的 Google 存储空间。如果你根本不想使用 Google 的生态系统，pCloud 是一个注重[隐私](/zh-cn/posts/configuring-obsidian-for-end-to-end-encrypted-sync/)的强大替代方案——它开箱即用地提供端到端加密存储，并提供终身计划选项，而且 Remotely Save 支持将其作为 WebDAV 后端使用。

### 我可以将多个库同步到同一个 Google Drive 帐户吗？

可以。为每个库设置一个唯一的 **Remote Base Dir** 名称。它们将在你的 Drive 中的 `remotely-save` 内显示为单独的子文件夹。它们之间不会相互干扰。

## 相关阅读

- [核心问题：Obsidian Sync 解决了什么问题？](/zh-cn/posts/is-obsidian-sync-worth-it-review/)
- [什么是 Excalidraw，为什么要在 Obsidian 中使用它？](/zh-cn/posts/excalidraw-plugin-for-obsidian-review/)
- [为什么要在 Obsidian 中建立 Zettelkasten 卡片盒笔记法？](/zh-cn/posts/setting-up-a-zettelkasten-in-obsidian-with-plugins/)
- [为什么在 2024 年要在 Obsidian 中追踪习惯？](/zh-cn/posts/best-obsidian-plugins-for-habit-tracking-2024/)
