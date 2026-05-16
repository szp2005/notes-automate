---
image: "/og/how-to-publish-obsidian-notes-to-a-blog.webp"
title: "将 Obsidian 笔记发布到博客：5步指南"
description: "了解如何高效地将 Obsidian 笔记发布到博客。我们将介绍静态站点生成器、插件和工作流，帮助您将本地 vault 转化为在线网站。"
pubDate: "2026-05-02"
author: "Alex Chen"
tags: ["obsidian", "blogging", "knowledge management", "workflow"]
slug: "how-to-publish-obsidian-notes-to-a-blog"
type: "informational"
---

# 将 Obsidian 笔记发布到博客：5步指南

> **快速解答：** 将 Obsidian 笔记发布到博客最有效的方法是使用静态站点生成器（如 Quartz、Astro 或 Hugo）。通过将 Markdown 文件推送到 GitHub 仓库，您可以自动将本地笔记部署到 Vercel 或 Netlify 等平台，而不会破坏您现有的[知识管理](/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/)[工作流](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)。

对于许多[研究人员](/zh-cn/posts/obsidian-vs-heptabase-for-visual-research-workflows/)、作家和[开发者](/zh-cn/posts/best-obsidian-plugins-for-developers-and-code-snippets/)来说，Obsidian 是知识的中心枢纽。您所有的想法、草稿和联系都以纯文本 Markdown 文件的形式保存在本地。然而，在过去，与世界分享这些知识需要一个碎片化的工作流：在本地起草，复制文本，粘贴到内容管理系统（CMS，如 WordPress）中，然后手动修复格式、链接和图片。

这种摩擦往往阻碍了有价值的见解走出本地 vault。如果您的笔记已经用 Markdown 编写，您应该能够毫不费力地将它们推送到网络上。

了解如何直接将 Obsidian 笔记发布到博客可以简化您的发布流程。通过将本地的 `.md` 文件夹连接到现代 Web 部署平台，您可以将私人的知识管理系统转变为公开的数字花园 (digital garden)。本指南剖析了连接本地 vault 与公共互联网的最有效方法，并比较了官方解决方案、面向开发者的工作流以及第三方插件集成。

## 官方解决方案：Obsidian Publish

如果您希望采用阻力最小的路径，并且有预算支持核心开发团队，Obsidian Publish 是原生的解决方案。

Obsidian Publish 允许您选择本地 vault 中的特定文件夹或文件，并立即将它们推送到由 Obsidian 托管的 Web URL。该平台会自动处理内部 wikilinks、关系图谱 (graph views) 和本地图片。

### Publish 的主要优势

主要优势在于绝对的简单性。没有需要配置的 Git 仓库，没有需要排查的构建错误，而且除非您想自定义默认主题，否则无需编写 CSS。您只需点击 Obsidian 侧边栏中的纸飞机图标，选择要更新的文件，然后点击发布。

Obsidian Publish 原生理解特定于 Obsidian 的 Markdown 语法，包括块引用 (block references)、标注 (callouts) 以及（在有限程度上的）[Dataview](/zh-cn/posts/creating-automated-index-pages-with-obsidian-dataview/) 查询。它还提供内置的搜索功能和交互式关系图谱，与您的本地体验如出一辙。

### 权衡与成本

主要的缺点是订阅费用。每月 8 美元（按年计费），这比许多通常对个人使用免费的静态站点托管平台要贵。此外，虽然您可以注入自定义 CSS 和 JavaScript，但与从零开始构建自己的网站相比，您的结构化[自定义](/zh-cn/posts/minimal-theme-for-obsidian-customization-tips/)选项是有限的。您无法控制底层的 HTML 生成，这使得高级的技术 SEO 或复杂的网站架构难以实施。

## 开发者路线：静态站点生成器 (SSGs)

对于那些希望完全控制自己网站的设计、性能和托管成本的人来说，将 Obsidian 与静态站点生成器 (SSG) 集成是最佳路径。SSG 获取您的 Markdown 文件并将其编译为静态的 HTML、CSS 和 JavaScript 文件，这些文件可以托管在任何地方。

### 选择合适的 SSG

并非所有的 SSG 都能在开箱即用的情况下很好地处理 Obsidian 特定风格的 Markdown。Obsidian 严重依赖 `[[wikilinks]]` 而不是标准的 `[markdown](links.md)`，许多传统的 SSG 并不能原生解析这一点。

**Quartz 4：** Quartz 是目前最受欢迎的专门为发布 Obsidian 笔记而构建的 SSG。它基于 Node.js，原生理解 wikilinks、反向链接生成、本地图片路径和标签。它需要极少的配置就能让数字花园运行起来。

**Astro：** Astro 是一个高性能、现代的框架，非常适合标准博客。虽然它需要一个插件（如 `remark-obsidian` 或自定义解析逻辑）来处理 wikilinks，但它为您提供了对前端架构无与伦比的控制力，并且默认情况下不输出任何客户端 JavaScript，从而带来完美的 Lighthouse 性能得分。

**Hugo：** Hugo 是用 Go 编写的，可以在毫秒内构建大型网站。它需要严格的 Frontmatter 格式和仔细的配置来处理 wikilinks，但它是处理高容量 Markdown 博客的行业标准。

### 部署工作流

要使用 SSG 进行发布，您需要一个流水线。标准架构涉及三个组件：您的本地 vault、一个 Git 仓库和一个部署平台。

1. 配置您的 SSG，使其使用 Obsidian vault 中的特定文件夹作为内容目录。
2. 在您的 vault（或仅仅是内容子文件夹）中初始化一个 Git 仓库。
3. 将仓库推送到 GitHub。
4. 将 GitHub 仓库连接到 Vercel、Netlify 或 Cloudflare Pages 等托管提供商。

配置完成后，您的发布工作流就变成了输入一个 git commit 命令。Vercel 或 Netlify 会检测到推送，在云端重建您的网站，并在几秒钟内发布新的 HTML 文件。

## 折中方案：社区插件

如果您更喜欢免费的解决方案，但又对 Git 命令行和 Node.js 环境感到畏惧，有几个社区插件可以作为桥梁，将笔记直接从 Obsidian 界面推送到外部平台。

### WordPress 集成

如果您已经有一个 WordPress 网站，Obsidian-to-WordPress 插件允许您通过 WordPress REST API 将 Markdown 笔记作为新博客文章推送。这些插件通常在推送过程中将 Markdown 转换为 HTML。然而，处理本地图片附件和维护对已发布笔记的更新可能会很繁琐，如果没有精确配置，经常会导致图片链接失效。

### Ghost 和 Hashnode 插件

针对 Ghost 和 Hashnode 等现代发布平台也存在相应的插件。这些平台具有强大的 API，可以直接接收 Markdown。通过在插件设置中存储您的 API 密钥，您可以在 Frontmatter 中添加 `published: true` 标签，并运行命令面板操作，以在远程博客上即时生成草稿或已发布的文章。这对于连载式博客非常有效，但不太适合不断更新笔记、相互链接的数字花园。

## 管理公开和私人笔记的实用建议

当您将主要的思考环境连接到网络时，区分公开内容和私人想法变得至关重要。您绝对不希望意外地将财务记录或粗糙、未经编辑的草稿推送到您的公开仓库。

### 结构化 Vault 以实现隔离

如果您使用的是自动化的 Git 流水线，请不要试图纯粹依靠 Frontmatter 标签（例如 `publish: true`）来过滤笔记，因为漏掉一个标签可能会暴露隐私数据。相反，应依赖物理文件夹隔离。

创建一个名为 `/Public` 或 `/Blog` 的顶级文件夹。配置您的 Git 仓库或 SSG 内容路径，使其*仅*跟踪此特定目录。将所有私人笔记、每日日志和草稿保存在此文件夹之外。当笔记准备好发布时，将其移入 `/Public` 目录。

### 小心处理内部链接

当您将笔记移动到公开文件夹时，它可能仍然包含指向公开文件夹外私人笔记的 wikilinks。当 SSG 构建站点时，这些将变成死链接。

为了缓解这个问题，请对公开笔记采取严格的链接策略。在发布之前，检查该特定文件的本地关系图谱。确保所有传出链接指向同样驻留在 `/Public` 目录中的文件。像 `Find unlinked files and unresolved links` 这样的插件可以帮助您在推送 commit 之前审核公开文件夹中的断连问题。

### 标准化您的 Frontmatter

静态站点生成器严重依赖 YAML Frontmatter 来了解如何渲染页面。为所有注定要发布的笔记建立一个标准化的 Frontmatter 模板。

您所需的最低限度的 Frontmatter 应包括 `title`、`date` 和 `tags`。使用 Obsidian 内置的 [Templates](/zh-cn/posts/advanced-obsidian-templates-for-literature-review-matrix/) 核心插件或社区的 [Templater](/zh-cn/posts/templater-plugin-tutorial-for-obsidian-power-users/) 插件，在公开文件夹中创建新笔记时自动注入此 YAML 块。这可以防止在部署阶段由于缺少[元数据](/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/)而导致构建失败。

## 设置您的自动发布流水线

要使用 SSG 和 GitHub 实施开发者路线，请按照以下具体步骤建立无缝的、免费的发布流水线。

### 步骤 1：初始化项目

在此示例中我们将使用 Quartz，因为它原生处理 Obsidian 格式。打开终端，将 Quartz 仓库克隆到本地计算机，将其放置在 Obsidian vault 的旁边或内部。

导航到该目录并使用 `npm install` 安装所需的依赖项。运行设置命令 `npx quartz create` 以初始化配置文件。

### 步骤 2：建立内容符号链接

Quartz 需要知道您的 Markdown 文件位于何处。与其手动复制文件，不如在 Obsidian 的 `/Public` 文件夹和 Quartz 的 `/content` 目录之间创建一个符号链接 (symlink)。

在 macOS 或 Linux 上，运行 `ln -s /path/to/Obsidian/Public /path/to/quartz/content`。这确保了当您在 Obsidian 中编辑文件时，Quartz 会实时看到完全相同的文件，而不会在您的硬盘上复制数据。

### 步骤 3：本地测试

在终端中运行 `npx quartz build --serve`。这将启动一个本地 Web 服务器（通常在 `localhost:8080`）。打开浏览器，预览您的笔记渲染为 HTML 时的外观。点击您的 wikilinks 并确保您的本地图片正常加载。

### 步骤 4：配置 GitHub

在 GitHub 上创建一个新仓库。在您的本地 Quartz 目录中，初始化 Git (`git init`)，添加您的文件 (`git add .`)，并提交更改。将本地仓库链接到远程 GitHub 仓库并推送您的代码。

确保正确配置了 `.gitignore` 文件，以排除 `node_modules` 文件夹和任何本地环境变量。

### 步骤 5：部署到 Cloudflare Pages

Cloudflare Pages 为静态站点提供快速、免费的托管服务。登录 Cloudflare 仪表板，导航到 Pages，然后选择“Connect to Git”。选择您刚刚创建的仓库。

在构建设置中，将框架预设设置为“None”或“Custom”。将构建命令设置为 `npx quartz build`，并将输出目录设置为 `public`。点击部署。三分钟内，您的 Obsidian 笔记将在全球内容分发网络 (CDN) 上线。每次您向 GitHub 推送新 commit 时，Cloudflare 都会自动重建并部署网站。

## 常见问题解答

### 我可以只发布 Obsidian vault 中的特定文件夹吗？
可以。最安全的方法是将所有面向公众的笔记隔离到一个特定的根文件夹（例如 `/Digital-Garden`）中。然后，您将部署工具或静态站点生成器严格指向该文件夹，以确保私人目录中的笔记永远不会被编译或推送到网络上。

### 发布 Obsidian 到博客时 wikilinks 有效吗？
像 Jekyll 或基础版 Astro 这样的标准静态站点生成器默认情况下不理解 `[[wikilinks]]`，并且需要自定义解析插件。然而，像 Obsidian Publish、Quartz 和特定的 Gatsby [主题](/zh-cn/posts/things-theme-vs-minimal-theme-obsidian/)等专门的工具被设计为能解析和渲染 wikilinks 与反向链接，与您本地 vault 中呈现的完全一致。

### 发布 Obsidian 时我该如何处理图片？
如果使用 SSG，您必须确保构建过程可以访问您的图片附件文件夹。最佳实践是在 Obsidian 设置中为公开文件夹设置一个覆盖，将新附件保存到一个子文件夹（如 `/Public/assets`）。这确保了 SSG 可以在部署期间将图片与 HTML 捆绑在一起。

### Obsidian Publish 值得花钱订阅吗？
如果您更看重易用性而不是技术控制力，那么 Obsidian Publish 物有所值。它消除了管理 Node.js 环境、Git 仓库或托管提供商的需求。如果您看重零摩擦的发布和原生的关系图谱支持，那么它是最有效的选择。

### 我可以将自定义域名与这些发布方法结合使用吗？
可以。Obsidian Publish、Vercel、Netlify 和 Cloudflare Pages 都支持路由到自定义域名。您只需更新域名注册商的 DNS 记录（添加 A 记录或 CNAME 记录），将其指向您的托管提供商的服务器。

---

## 相关阅读

- [用于学术研究的 Obsidian 插件：5款最佳工具](/zh-cn/posts/top-5-obsidian-plugins-for-academic-research/)
- [Obsidian Copilot 完整指南：与您的笔记对话](/zh-cn/posts/copilot-for-obsidian-chat-with-your-notes/)
- [Obsidian 中带时间戳视频笔记的 HoverNotes：完整指南](/zh-cn/posts/hovernotes-for-timestamped-video-notes-obsidian/)