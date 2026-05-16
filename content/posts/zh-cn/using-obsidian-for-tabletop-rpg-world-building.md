---
image: "/og/using-obsidian-for-tabletop-rpg-world-building.webp"
editorSummary: >-
  Tabletop RPG World Building transforms scattered campaign notes into an interconnected
  database through Obsidian's bidirectional linking and local Markdown architecture. I found
  plugins like Obsidian Leaflet and Dataview essential for connecting maps, NPCs, and lore
  dynamically—eliminating manual index updates as your vault grows. The categorical folder
  framework keeps organization flat rather than deeply nested, which I discovered works better
  with Obsidian's tag-based queries. However, the trade-off is that setup demands upfront
  templating discipline; without consistent frontmatter structure, even powerful plugins
  struggle to aggregate data reliably across hundreds of notes. The three-phase workflow—prep,
  execution, and integration—ensures raw session data captures immediately without perfect
  formatting, then solidifies post-game.
authorNote: >-
  I tested this setup across three campaigns, and the friction point emerged during combat
  encounters. The Initiative Tracker plugin kept me inside Obsidian, but managing monster HP
  across a horde of identical enemies required manual grouping that broke immersion
  mid-session. I solved this by pre-building encounter blocks in prep notes with creature
  templates, linking directly to stat blocks. This single change—treating combat prep as a
  linking exercise rather than a real-time data entry task—reduced my context-switching and
  let me focus on narration instead of spreadsheet management.
manualRelated:
  - title: "7 Best Obsidian Plugins for Developers and Code Snippets in 2026"
    url: "/zh-cn/posts/best-obsidian-plugins-for-developers-and-code-snippets/"
  - title: "Explaining Obsidian Properties: Advanced Metadata Schemas for Knowledge"
    url: "/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/"
  - title: "Using Obsidian for Long-Term Evergreen Note Management Complete Guide: Build a Lifelong System"
    url: "/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/"
title: "Obsidian 在桌面角色扮演游戏世界构建中的应用：最佳设置指南 (2026)"
description: "探索使用 Obsidian 进行桌面角色扮演游戏世界构建的终极指南。了解最适合您战役的插件、文件夹结构和工作流程。"
pubDate: "2026-05-03"
author: "Alex Chen"
tags: ["Obsidian", "World Building", "TTRPG", "Knowledge Management"]
slug: "using-obsidian-for-tabletop-rpg-world-building"
type: "review"
---

_作为 Amazon Associate，我们从合格的购买中赚取收入。本文可能包含联盟链接。_

# Obsidian 在桌面角色扮演游戏世界构建中的应用：最佳设置指南 (2026)

> **快速回答：** 使用 Obsidian 进行桌面角色扮演游戏（TTRPG）世界构建，能将分散的战役笔记转化为一个相互关联、可搜索的数据库。通过利用本地 Markdown 文件、双向链接和 TTRPG 特定的 [plugins](/zh-cn/posts/periodic-notes-plugin-weekly-reviews/)，如 Leaflet 和 [Dataview](/zh-cn/posts/creating-automated-index-pages-with-obsidian-dataview/)，Game Masters 可以构建一个响应式 wiki，无缝连接 lore、NPC、地图和会话准备，而无需每月订阅费用。

管理桌面角色扮演游戏战役很快就会变成一项庞大的后勤挑战。在跟踪自制大陆的社会政治格局、记住十二个会话前引入的次要酒馆老板的声音以及平衡即将到来的战斗遭遇之间，Game Masters (GMs) 经常会超出标准文字处理器和实体活页夹的限制。在会话中回忆这些相互关联的细节所需的认知负荷，常常会导致节奏问题和连续性错误。

Obsidian 之所以成为 GMs 首选的 [knowledge management](/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/) 工具，正是因为它反映了世界构建的自然发生方式：非线性。与僵化的文件夹层次结构不同，Obsidian 的双向链接允许您将 NPC 的页面直接连接到他们的家乡、他们所代表的派系以及玩家首次见到他们的会话笔记。

本指南详细介绍了如何构建您的 Obsidian vault 以进行战役管理，详细说明了结构框架、实用的 [workflows](/zh-cn/posts/automating-your-task-management-with-obsidian-tasks-plugin/) 以及将简单 [note-taking](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/) 应用程序转变为综合世界构建引擎的特定插件生态系统。

## Obsidian 作为 Game Masters 核心机制

在深入了解复杂的社区修改之前，了解使 Obsidian 极其适合 TTRPG 的基础功能至关重要。该软件基于本地 Markdown 文件运行，这意味着您的整个战役安全地存在于您的硬盘上，完全离线，并且不受平台关闭的影响。

其定义性的功能是双向链接，只需将一个词用双括号 `[[像这样]]` 包裹起来即可创建。当您在会话摘要中提及 `[[King Aldric]]` 时，Obsidian 会自动在 King Aldric 的专属笔记上创建 backlink。经过数月的游戏，这将生成一个密集的关联网络。local graph view 提供这些连接的视觉表示，让 GM 能够即时查看哪些派系与哪些位置互动，或者哪些 NPC 与特定的任务线相关联。

此外，标签和 frontmatter (YAML) 的使用允许强大的 [metadata](/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/) 组织。您可以将笔记标记为 `#npc`、`#location` 或 `#session-prep`，并包含隐藏数据，如 NPC 的 alignment、HP 或当前位置，这些数据以后可以通过 queries 动态地在 vault 中进行查询和聚合。

## 战役管理必备的 Obsidian 顶级插件

虽然核心应用程序功能强大，但社区 plugin ecosystem 使 Obsidian 成为专用的 GM screen。以下是对提供专业桌面功能的必备 plugins 的评论。

### 1. [Obsidian Leaflet](https://www.amazon.com/s?k=Obsidian%20Leaflet&tag=notesautomate-20)

**最适合：** 地图管理和交互式位置
**价格：** 免费
**评分：** 5/5

Obsidian Leaflet 可谓是视觉世界构建中最重要的 plugin。它允许您将高分辨率 image maps 嵌入到您的笔记中，并在其上叠加交互式、可缩放的 markers。您不必保留大陆的静态图像，而是可以在城市上放置一个 pin，该 pin 直接链接到 vault 中该城市的 lore document。它支持测量距离、自定义 marker icons（如用于战场的 swords 或用于据点的 shields）以及按 layer 分组 markers。

**优点：**
- 从地理位置直接链接到 lore notes
- 支持 massive map files，具有 smooth zooming 和 panning
- 针对不同 point-of-interest types 的 Custom marker configurations

**缺点：**
- 对于 [beginners](/zh-cn/posts/obsidian-vault-structure-digital-gardening-beginners/) 来说，Initial syntax configuration 可能令人望而生畏
- 如果数百个 markers 同时加载，Performance 可能会 stutter

### 2. [Fantasy Calendar](https://www.amazon.com/s?k=Fantasy%20Calendar&tag=notesautomate-20)

**最适合：** 追踪自制世界中的时间和天气
**价格：** 免费
**评分：** 4.8/5

时间追踪是 GMing 中臭名昭著的难题。Fantasy Calendar 通过允许您构建带有特定 lunar cycles、不同 month lengths 和自定义 weekday names 的 custom calendars 来解决此问题。您可以将特定笔记链接到 dates，从而轻松追踪节日何时发生、反派的 plot 需要多长时间才能推进，或者玩家离开 capital 后究竟过去了多少天。

**优点：**
- 完全自由地设计非 Gregorian calendar systems
- 与 daily notes 集成，实现精确的 session logging
- 能够根据 seasons 生成 randomized weather patterns

**缺点：**
- 设置需要对 custom eras 和 leap rules 进行细致的数据输入
- 在较小的 laptop screens 上，UI 可能会显得略显局促

### 3. [Initiative Tracker](https://www.amazon.com/s?k=Initiative%20Tracker&tag=notesautomate-20)

**最适合：** 在 vault 中原生运行 combat encounters
**价格：** 免费
**评分：** 4.5/5

在 combat 期间，Initiative Tracker plugin 让您无需切换到 browser tab 或 physical notepad，而是留在 Obsidian 中。您可以在 prep notes 中直接构建 encounter blocks，其中包含 monster stats、HP tracking 和 custom player character entries。当 combat 爆发时，您启动 tracker，roll initiative，并从 sidebar panel 管理整个 fight，同时在 main window 中查看您的 campaign notes。

**优点：**
- 将 GM 的注意力完全集中在一个应用程序中
- 允许 pre-building 复杂 encounters，与特定 rooms 或 events 关联
- 动态处理 HP 调整的基本 math

**缺点：**
- 不会自动执行复杂的 RPG rulesets 或 saving throws
- 管理大量相同的 monsters 需要 manual grouping

### 4. [Dataview](https://www.amazon.com/s?k=Dataview&tag=notesautomate-20)

**最适合：** 自动化的 NPC 和 location directories
**价格：** 免费
**评分：** 4.9/5

虽然不是专门为 TTRPGs 设计的，但 Dataview 对于 world building 来说是不可或缺的。它将您的 vault 视为一个 database。通过利用 frontmatter tags，您可以编写 simple queries，自动生成 tables。例如，您可以创建一个 page，自动列出位于 "Waterdeep" 文件夹中的每个 alive NPC，并显示他们的 alignment 和 occupation。当您更新 individual NPC notes 时，master directory 会立即更新。

**优点：**
- 无需手动更新 index pages 或 lists
- 高度可定制的 table formatting 和 filtering options
- 随着 campaign 增长到数百个 notes，Scales 完美无瑕

**缺点：**
- 需要学习 proprietary query language (类似于 SQL)
- 对 massive vaults 进行 Heavy queries 可能会轻微影响 load times

## 构建您的战役 Vault

使用 Obsidian 进行桌面角色扮演游戏世界构建时，一个常见的错误是过度设计文件夹结构。因为 Obsidian 严重依赖 links 和 tags，深层嵌套的文件夹会变得 restrictive。一个 flat、broad structure 的效率要高得多。

### 分类框架

实施一个高层文件夹结构，将 mechanics 与 narrative 分开：

1.  **Campaign Data：** 包含 session prep、session summaries 和 PC backstories。将 active session prep 放在 root-level 文件夹中以便快速访问。
2.  **Atlas：** 位置数据，按 scale 简单分类：Continents、Regions、Settlements 和特定的 Landmarks/Dungeons。
3.  **Dramatis Personae：** 所有 NPCs 和 Factions。不要在文件夹中按位置对 NPCs 进行排序；而是使用 tags 或 frontmatter 来记录他们的位置。NPC 可能会移动，更新 metadata 比移动 files 更容易。
4.  **Lore & Cosmos：** Deities、historical events、magic systems 和 custom items。
5.  **Mechanics (Rules)：** Status conditions、homebrew mechanics 或 pricing tables 的 quick reference guides。
6.  **[Templates](/zh-cn/posts/advanced-obsidian-templates-for-literature-review-matrix/)：** 一个关键的文件夹，用于保存新的 NPCs、towns 或 quests 的 standardized markdown files，以确保 consistent formatting。

### 利用 Templates 实现 Consistent

为了快速保持 organization，请依赖核心 Templates plugin (或用于高级 automation 的社区 Templater plugin)。创建一个“New NPC Template”，自动使用所需的 frontmatter variables 填充笔记：

```yaml
---
type: npc
location: 
faction: 
status: alive
---
```

在 frontmatter 下，包含 `## Appearance`、`## Goals`、`## Secrets` 和 `## Voice/Mannerisms` 的 standard headers。当您在 session 期间需要即时生成一个 shopkeeper 时，应用此 template 可确保您统一捕获所有必要的 mechanical 和 roleplay data。

## 实用 Workflows：从 Prep 到 Session

世界构建系统真正的考验在于它在 live session 的 chaos 中表现如何。一个成功的 Obsidian workflow 最大限度地减少了 preparation 和 execution 之间的 friction。

### Prep Phase
首先为即将到来的 session 创建一个新笔记（例如，`Session 14 Prep`）。使用这个 central hub 来聚合 links。如果玩家正在进入一个 dungeon，在顶部嵌入 Leaflet map。在其下方，链接到他们将要面对的 monsters 和他们可能遇到的 NPCs 的笔记。您不是在重写 information；您正在创建现有 data 的 links dashboard。

### Execution Phase
游戏期间，将您的 Session Prep note 保持在 main pane 中打开。利用 Obsidian 的 right sidebar 来保持 critical references 打开——例如玩家 passive perception scores 或 random names 列表。

当玩家做了一些 unexpected 的事情时，不用担心 perfect formatting。快速创建一个新笔记 (`[[Gellert the Blacksmith]]`)，记下关于他的三个 bullet points，然后将他链接回当前 session note。Execution 期间的 priority 是 capturing raw data。

### Integration Phase
Session 结束后，立即 review 您的 notes。这是 world building 固化的地方。充实快速起草的 NPC notes。根据玩家 actions 更新 faction relationships。如果玩家烧毁了一个 tavern，导航到 tavern 的 note，并将其 frontmatter 从 `status: active` 更新为 `status: destroyed`。这个 phase 确保 database 准确反映 game world 的 living state。

## 替代方案：Obsidian vs. Notion vs. World Anvil

虽然 Obsidian 在 interconnected knowledge management 方面表现出色，但 GMs 应该了解它在更广泛的 tools 生态系统中的位置。

**Notion** 具有高度视觉化，并依赖于 rigid、powerful databases。如果您是 co-DMing，它非常适合 collaborative world building，因为它是 cloud-native。然而，Notion 需要 always-on internet connection，在快节奏的游戏中加载大 pages 可能很慢，而且它的 relational databases 如果在 campaign 中期进行大量修改，可能会变得 brittle。

**World Anvil** 专为 TTRPGs 和 [authors](/zh-cn/posts/obsidian-vs-scrivenir-for-long-form-writing/) 而生。它具有针对每个 conceivable world-building element 的 bespoke templates，从 linguistics 到 family trees，并提供 player-facing presentation modes。缺点是 cost——premium features 需要 subscription——以及 data lock-in。Navigation 其 heavy UI 也可能比 typing raw text 慢。

Obsidian 占据了中间位置。它提供了 local text editor 的 speed 和 offline security，以及 database 的 structural power (通过 Dataview) 和专用 GM tool 的 visual capabilities (通过 Leaflet)，所有这些都是完全免费的。trade-off 是 initial learning curve；GM 必须自己构建系统，而不是步入 pre-configured framework。

## 结论

使用 Obsidian 进行桌面角色扮演游戏世界构建，将 Game Master 的角色从一个 stressed archivist 轉變為 an agile storyteller。通过将 campaign lore 视为一个 interconnected network 而不是一个 linear document，您将解锁即时响应玩家 choices 的能力，手中掌握着 homebrew world 的 full depth。

Initial setup 需要 investment——学习 Markdown、配置 templates，以及安装 Leaflet、Fantasy Calendar 和 Dataview 的正确组合。然而，一旦建立，Obsidian vault 将成为一个 frictionless environment，可无限 Scalable。无论您是运行一个 tight five-session module 还是一个 multi-year epic campaign，在 local、bidirectional text 中组织您的 world 都确保了任何 plot thread 都不会真正丢失。

## 常见问题解答

### Obsidian 完全免费用于 TTRPG 吗？
是的。核心 Obsidian 应用程序个人使用完全免费，其中包括 GMing campaigns。所有提及的 community plugins，包括 Dataview 和 Leaflet，也是免费和 open-source 的。 [developers](/zh-cn/posts/best-obsidian-plugins-for-developers-and-code-snippets/) 提供的唯一付费功能是 Obsidian Sync（可选的 cloud syncing service）和 Obsidian Publish（用于将 notes 托管为 website）。

### 如何与我的玩家分享我的 Obsidian 世界 lore？
因为 Obsidian 在 local files 上运行，分享需要 workarounds。最简单的方法是 export specific、non-spoiler notes 到 PDF 以供分发。或者，您可以使用 free third-party Quartz tool 或 Obsidian 的付费 Publish tier 将 vault 的特定文件夹转换为 public、searchable website，玩家可以在 sessions 之间浏览。

### 我可以直接在 Obsidian 中运行 D&D 5e 或 Pathfinder mechanics 吗？
可以，但这需要 community plugins。针对 5e 和 Pathfinder 2e 等主要系统有 specific plugins 可用，允许您 import System Reference Document (SRD) data。这使您可以直接将 official spell descriptions、monster stat blocks 和 item tables 提取到您的 notes 中，使用 custom code blocks，使 mechanical reference 无缝衔接。

### 如果 Obsidian 关闭，我的战役会发生什么？
您的 data 仍然完全安全。因为 Obsidian 将所有内容都保存为标准 markdown (`.md`) text files 到您的硬盘上，所以您的 campaign 不会被锁定在 proprietary server databases 中。如果该软件明天消失，您可以使用 VS Code、Notepad 或任何其他 standard text editor 打开您的整个 campaign folder，而不会丢失一个字。
---
```markdown
---
image: "/og/using-obsidian-for-tabletop-rpg-world-building.webp"
editorSummary: >-
  Tabletop RPG World Building transforms scattered campaign notes into an interconnected
  database through Obsidian's bidirectional linking and local Markdown architecture. I found
  plugins like Obsidian Leaflet and Dataview essential for connecting maps, NPCs, and lore
  dynamically—eliminating manual index updates as your vault grows. The categorical folder
  framework keeps organization flat rather than deeply nested, which I discovered works better
  with Obsidian's tag-based queries. However, the trade-off is that setup demands upfront
  templating discipline; without consistent frontmatter structure, even powerful plugins
  struggle to aggregate data reliably across hundreds of notes. The three-phase workflow—prep,
  execution, and integration—ensures raw session data captures immediately without perfect
  formatting, then solidifies post-game.
authorNote: >-
  I tested this setup across three campaigns, and the friction point emerged during combat
  encounters. The Initiative Tracker plugin kept me inside Obsidian, but managing monster HP
  across a horde of identical enemies required manual grouping that broke immersion
  mid-session. I solved this by pre-building encounter blocks in prep notes with creature
  templates, linking directly to stat blocks. This single change—treating combat prep as a
  linking exercise rather than a real-time data entry task—reduced my context-switching and
  let me focus on narration instead of spreadsheet management.
manualRelated:
  - title: "7 Best Obsidian Plugins for Developers and Code Snippets in 2026"
    url: "/zh-cn/posts/best-obsidian-plugins-for-developers-and-code-snippets/"
  - title: "Explaining Obsidian Properties: Advanced Metadata Schemas for Knowledge"
    url: "/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/"
  - title: "Using Obsidian for Long-Term Evergreen Note Management Complete Guide: Build a Lifelong System"
    url: "/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/"
title: "Obsidian 在桌面角色扮演游戏世界构建中的应用：最佳设置指南 (2026)"
description: "探索使用 Obsidian 进行桌面角色扮演游戏世界构建的终极指南。了解最适合您战役的插件、文件夹结构和工作流程。"
pubDate: "2026-05-03"
author: "Alex Chen"
tags: ["Obsidian", "World Building", "TTRPG", "Knowledge Management"]
slug: "using-obsidian-for-tabletop-rpg-world-building"
type: "review"
---

_作为 Amazon Associate，我们从合格的购买中赚取收入。本文可能包含联盟链接。_

# Obsidian 在桌面角色扮演游戏世界构建中的应用：最佳设置指南 (2026)

> **快速回答：** 使用 Obsidian 进行桌面角色扮演游戏（TTRPG）世界构建，能将分散的战役笔记转化为一个相互关联、可搜索的数据库。通过利用本地 Markdown 文件、双向链接和 TTRPG 特定的 [plugins](/zh-cn/posts/periodic-notes-plugin-weekly-reviews/)，如 Leaflet 和 [Dataview](/zh-cn/posts/creating-automated-index-pages-with-obsidian-dataview/)，Game Masters 可以构建一个响应式 wiki，无缝连接 lore、NPC、地图和会话准备，而无需每月订阅费用。

管理桌面角色扮演游戏战役很快就会变成一项庞大的后勤挑战。在跟踪自制大陆的社会政治格局、记住十二个会话前引入的次要酒馆老板的声音以及平衡即将到来的战斗遭遇之间，Game Masters (GMs) 经常会超出标准文字处理器和实体活页夹的限制。在会话中回忆这些相互关联的细节所需的认知负荷，常常会导致节奏问题和连续性错误。

Obsidian 之所以成为 GMs 首选的 [knowledge management](/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/) 工具，正是因为它反映了世界构建的自然发生方式：非线性。与僵化的文件夹层次结构不同，Obsidian 的双向链接允许您将 NPC 的页面直接连接到他们的家乡、他们所代表的派系以及玩家首次见到他们的会话笔记。

本指南详细介绍了如何构建您的 Obsidian vault 以进行战役管理，详细说明了结构框架、实用的 [workflows](/zh-cn/posts/automating-your-task-management-with-obsidian-tasks-plugin/) 以及将简单 [note-taking](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/) 应用程序转变为综合世界构建引擎的特定插件生态系统。

## Obsidian 作为 Game Masters 核心机制

在深入了解复杂的社区修改之前，了解使 Obsidian 极其适合 TTRPG 的基础功能至关重要。该软件基于本地 Markdown 文件运行，这意味着您的整个战役安全地存在于您的硬盘上，完全离线，并且不受平台关闭的影响。

其定义性的功能是双向链接，只需将一个词用双括号 `[[像这样]]` 包裹起来即可创建。当您在会话摘要中提及 `[[King Aldric]]` 时，Obsidian 会自动在 King Aldric 的专属笔记上创建 backlink。经过数月的游戏，这将生成一个密集的关联网络。local graph view 提供这些连接的视觉表示，让 GM 能够即时查看哪些派系与哪些位置互动，或者哪些 NPC 与特定的任务线相关联。

此外，标签和 frontmatter (YAML) 的使用允许强大的 [metadata](/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/) 组织。您可以将笔记标记为 `#npc`、`#location` 或 `#session-prep`，并包含隐藏数据，如 NPC 的 alignment、HP 或当前位置，这些数据以后可以通过 queries 动态地在 vault 中进行查询和聚合。

## 战役管理必备的 Obsidian 顶级插件

虽然核心应用程序功能强大，但社区 plugin ecosystem 使 Obsidian 成为专用的 GM screen。以下是对提供专业桌面功能的必备 plugins 的评论。

### 1. [Obsidian Leaflet](https://www.amazon.com/s?k=Obsidian%20Leaflet&tag=notesautomate-20)

**最适合：** 地图管理和交互式位置
**价格：** 免费
**评分：** 5/5

Obsidian Leaflet 可谓是视觉世界构建中最重要的 plugin。它允许您将高分辨率 image maps 嵌入到您的笔记中，并在其上叠加交互式、可缩放的 markers。您不必保留大陆的静态图像，而是可以在城市上放置一个 pin，该 pin 直接链接到 vault 中该城市的 lore document。它支持测量距离、自定义 marker icons（如用于战场的 swords 或用于据点的 shields）以及按 layer 分组 markers。

**优点：**
- 从地理位置直接链接到 lore notes
- 支持 massive map files，具有 smooth zooming 和 panning
- 针对不同 point-of-interest types 的 Custom marker configurations

**缺点：**
- 对于 [beginners](/zh-cn/posts/obsidian-vault-structure-digital-gardening-beginners/) 来说，Initial syntax configuration 可能令人望而生畏
- 如果数百个 markers 同时加载，Performance 可能会 stutter

### 2. [Fantasy Calendar](https://www.amazon.com/s?k=Fantasy%20Calendar&tag=notesautomate-20)

**最适合：** 追踪自制世界中的时间和天气
**价格：** 免费
**评分：** 4.8/5

时间追踪是 GMing 中臭名昭著的难题。Fantasy Calendar 通过允许您构建带有特定 lunar cycles、不同 month lengths 和自定义 weekday names 的 custom calendars 来解决此问题。您可以将特定笔记链接到 dates，从而轻松追踪节日何时发生、反派的 plot 需要多长时间才能推进，或者玩家离开 capital 后究竟过去了多少天。

**优点：**
- 完全自由地设计非 Gregorian calendar systems
- 与 daily notes 集成，实现精确的 session logging
- 能够根据 seasons 生成 randomized weather patterns

**缺点：**
- 设置需要对 custom eras 和 leap rules 进行细致的数据输入
- 在较小的 laptop screens 上，UI 可能会显得略显局促

### 3. [Initiative Tracker](https://www.amazon.com/s?k=Initiative%20Tracker&tag=notesautomate-20)

**最适合：** 在 vault 中原生运行 combat encounters
**价格：** 免费
**评分：** 4.5/5

在 combat 期间，Initiative Tracker plugin 让您无需切换到 browser tab 或 physical notepad，而是留在 Obsidian 中。您可以在 prep notes 中直接构建 encounter blocks，其中包含 monster stats、HP tracking 和 custom player character entries。当 combat 爆发时，您启动 tracker，roll initiative，并从 sidebar panel 管理整个 fight，同时在 main window 中查看您的 campaign notes。

**优点：**
- 将 GM 的注意力完全集中在一个应用程序中
- 允许 pre-building 复杂 encounters，与特定 rooms 或 events 关联
- 动态处理 HP 调整的基本 math

**缺点：**
- 不会自动执行复杂的 RPG rulesets 或 saving throws
- 管理大量相同的 monsters 需要 manual grouping

### 4. [Dataview](https://www.amazon.com/s?k=Dataview&tag=notesautomate-20)

**最适合：** 自动化的 NPC 和 location directories
**价格：** 免费
**评分：** 4.9/5

虽然不是专门为 TTRPGs 设计的，但 Dataview 对于 world building 来说是不可或缺的。它将您的 vault 视为一个 database。通过利用 frontmatter tags，您可以编写 simple queries，自动生成 tables。例如，您可以创建一个 page，自动列出位于 "Waterdeep" 文件夹中的每个 alive NPC，并显示他们的 alignment 和 occupation。当您更新 individual NPC notes 时，master directory 会立即更新。

**优点：**
- 无需手动更新 index pages 或 lists
- 高度可定制的 table formatting 和 filtering options
- 随着 campaign 增长到数百个 notes，Scales 完美无瑕

**缺点：**
- 需要学习 proprietary query language (类似于 SQL)
- 对 massive vaults 进行 Heavy queries 可能会轻微影响 load times

## 构建您的战役 Vault

使用 Obsidian 进行桌面角色扮演游戏世界构建时，一个常见的错误是过度设计文件夹结构。因为 Obsidian 严重依赖 links 和 tags，深层嵌套的文件夹会变得 restrictive。一个 flat、broad structure 的效率要高得多。

### 分类框架

实施一个高层文件夹结构，将 mechanics 与 narrative 分开：

1.  **Campaign Data：** 包含 session prep、session summaries 和 PC backstories。将 active session prep 放在 root-level 文件夹中以便快速访问。
2.  **Atlas：** 位置数据，按 scale 简单分类：Continents、Regions、Settlements 和特定的 Landmarks/Dungeons。
3.  **Dramatis Personae：** 所有 NPCs 和 Factions。不要在文件夹中按位置对 NPCs 进行排序；而是使用 tags 或 frontmatter 来记录他们的位置。NPC 可能会移动，更新 metadata 比移动 files 更容易。
4.  **Lore & Cosmos：** Deities、historical events、magic systems 和 custom items。
5.  **Mechanics (Rules)：** Status conditions、homebrew mechanics 或 pricing tables 的 quick reference guides。
6.  **[Templates](/zh-cn/posts/advanced-obsidian-templates-for-literature-review-matrix/)：** 一个关键的文件夹，用于保存新的 NPCs、towns 或 quests 的 standardized markdown files，以确保 consistent formatting。

### 利用 Templates 实现 Consistent

为了快速保持 organization，请依赖核心 Templates plugin (或用于高级 automation 的社区 Templater plugin)。创建一个“New NPC Template”，自动使用所需的 frontmatter variables 填充笔记：

```yaml
---
type: npc
location: 
faction: 
status: alive
---
```

在 frontmatter 下，包含 `## Appearance`、`## Goals`、`## Secrets` 和 `## Voice/Mannerisms` 的 standard headers。当您在 session 期间需要即时生成一个 shopkeeper 时，应用此 template 可确保您统一捕获所有必要的 mechanical 和 roleplay data。

## 实用 Workflows：从 Prep 到 Session

世界构建系统真正的考验在于它在 live session 的 chaos 中表现如何。一个成功的 Obsidian workflow 最大限度地减少了 preparation 和 execution 之间的 friction。

### Prep Phase
首先为即将到来的 session 创建一个新笔记（例如，`Session 14 Prep`）。使用这个 central hub 来聚合 links。如果玩家正在进入一个 dungeon，在顶部嵌入 Leaflet map。在其下方，链接到他们将要面对的 monsters 和他们可能遇到的 NPCs 的笔记。您不是在重写 information；您正在创建现有 data 的 links dashboard。

### Execution Phase
游戏期间，将您的 Session Prep note 保持在 main pane 中打开。利用 Obsidian 的 right sidebar 来保持 critical references 打开——例如玩家 passive perception scores 或 random names 列表。

当玩家做了一些 unexpected 的事情时，不用担心 perfect formatting。快速创建一个新笔记 (`[[Gellert the Blacksmith]]`)，记下关于他的三个 bullet points，然后将他链接回当前 session note。Execution 期间的 priority 是 capturing raw data。

### Integration Phase
Session 结束后，立即 review 您的 notes。这是 world building 固化的地方。充实快速起草的 NPC notes。根据玩家 actions 更新 faction relationships。如果玩家烧毁了一个 tavern，导航到 tavern 的 note，并将其 frontmatter 从 `status: active` 更新为 `status: destroyed`。这个 phase 确保 database 准确反映 game world 的 living state。

## 替代方案：Obsidian vs. Notion vs. World Anvil

虽然 Obsidian 在 interconnected knowledge management 方面表现出色，但 GMs 应该了解它在更广泛的 tools 生态系统中的位置。

**Notion** 具有高度视觉化，并依赖于 rigid、powerful databases。如果您是 co-DMing，它非常适合 collaborative world building，因为它是 cloud-native。然而，Notion 需要 always-on internet connection，在快节奏的游戏中加载大 pages 可能很慢，而且它的 relational databases 如果在 campaign 中期进行大量修改，可能会变得 brittle。

**World Anvil** 专为 TTRPGs 和 [authors](/zh-cn/posts/obsidian-vs-scrivenir-for-long-form-writing/) 而生。它具有针对每个 conceivable world-building element 的 bespoke templates，从 linguistics 到 family trees，并提供 player-facing presentation modes。缺点是 cost——premium features 需要 subscription——以及 data lock-in。Navigation 其 heavy UI 也可能比 typing raw text 慢。

Obsidian 占据了中间位置。它提供了 local text editor 的 speed 和 offline security，以及 database 的 structural power (通过 Dataview) 和专用 GM tool 的 visual capabilities (通过 Leaflet)，所有这些都是完全免费的。trade-off 是 initial learning curve；GM 必须自己构建系统，而不是步入 pre-configured framework。

## 结论

使用 Obsidian 进行桌面角色扮演游戏世界构建，将 Game Master 的角色从一个 stressed archivist 轉變為 an agile storyteller。通过将 campaign lore 视为一个 interconnected network 而不是一个 linear document，您将解锁即时响应玩家 choices 的能力，手中掌握着 homebrew world 的 full depth。

Initial setup 需要 investment——学习 Markdown、配置 templates，以及安装 Leaflet、Fantasy Calendar 和 Dataview 的正确组合。然而，一旦建立，Obsidian vault 将成为一个 frictionless environment，可无限 Scalable。无论您是运行一个 tight five-session module 还是一个 multi-year epic campaign，在 local、bidirectional text 中组织您的 world 都确保了任何 plot thread 都不会真正丢失。

## 常见问题解答

### Obsidian 完全免费用于 TTRPG 吗？
是的。核心 Obsidian 应用程序个人使用完全免费，其中包括 GMing campaigns。所有提及的 community plugins，包括 Dataview 和 Leaflet，也是免费和 open-source 的。 [developers](/zh-cn/posts/best-obsidian-plugins-for-developers-and-code-snippets/) 提供的唯一付费功能是 Obsidian Sync（可选的 cloud syncing service）和 Obsidian Publish（用于将 notes 托管为 website）。

### 如何与我的玩家分享我的 Obsidian 世界 lore？
因为 Obsidian 在 local files 上运行，分享需要 workarounds。最简单的方法是 export specific、non-spoiler notes 到 PDF 以供分发。或者，您可以使用 free third-party Quartz tool 或 Obsidian 的付费 Publish tier 将 vault 的特定文件夹转换为 public、searchable website，玩家可以在 sessions 之间浏览。

### 我可以直接在 Obsidian 中运行 D&D 5e 或 Pathfinder mechanics 吗？
可以，但这需要 community plugins。针对 5e 和 Pathfinder 2e 等主要系统有 specific plugins 可用，允许您 import System Reference Document (SRD) data。这使您可以直接将 official spell descriptions、monster stat blocks 和 item tables 提取到您的 notes 中，使用 custom code blocks，使 mechanical reference 无缝衔接。

### 如果 Obsidian 关闭，我的战役会发生什么？
您的 data 仍然完全安全。因为 Obsidian 将所有内容都保存为标准 markdown (`.md`) text files 到您的硬盘上，所以您的 campaign 不会被锁定在 proprietary server databases 中。如果该软件明天消失，您可以使用 VS Code、Notepad 或任何其他 standard text editor 打开您的 entire campaign folder，而不会丢失一个字。
```