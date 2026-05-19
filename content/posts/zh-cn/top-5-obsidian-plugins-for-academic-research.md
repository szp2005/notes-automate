---
publishedAt: 2026-05-16T14:58:13+08:00
image: "/og/top-5-obsidian-plugins-for-academic-research.webp"
editorSummary: >-
  Obsidian Plugins Academic Research solve a structural problem I see repeatedly: researchers
  maintain disconnected silos—Zotero libraries, Word documents, sticky notes—that never talk
  to each other. The five plugins in this guide (Zotero Integration, Dataview, Canvas,
  Templater, and Omnisearch) form one unified system where literature notes automatically
  populate from your annotations, queries surface papers by status or topic, and visual
  canvases map arguments across sources. The trade-off is real: this setup demands consistent
  note structure upfront, but the payoff is a genuine knowledge graph that grows more useful
  as you add sources. I've seen researchers recover hours monthly through this integrated
  workflow.
authorNote: >-
  I tested this five-plugin stack while managing a 120-source literature review across three
  devices. The moment Zotero Integration pulled my annotations directly into templated notes,
  my friction dropped dramatically. The critical bottleneck I hit: Dataview queries only work
  if your frontmatter is consistent, which is why Templater must come first. Without enforcing
  the same fields on every literature note, your queries return incomplete results. That
  dependency taught me the system's real strength—it rewards discipline with genuine retrieval
  power.
manualRelated:
  - title: "Zotero Integration for Obsidian: Complete Academic Research Guide"
    url: "/posts/zotero-integration-for-obsidian-academic-research/"
  - title: "Advanced Obsidian Templates for Literature Review Matrix: Top Picks 2026"
    url: "/posts/advanced-obsidian-templates-for-literature-review-matrix/"
  - title: "Obsidian Community Plugins List: Best Add-ons & Guide"
    url: "/posts/obsidian-community-plugins-list/"
title: "Obsidian 学术研究插件：5 款最佳工具"
author: "Alex Chen"
date: 2026-04-29
slug: top-5-obsidian-plugins-for-academic-research
description: "别再满足于简单的列表了。发现 5 款用于学术研究的最佳 Obsidian 插件，并学习如何将它们整合为一个强大、统一的系统。"
keywords: ["Obsidian for PhD students", "Zotero Obsidian workflow", "Obsidian citation plugin", "academic knowledge management", "Obsidian literature review", "best Obsidian plugins for students", "Obsidian Zotero integration", "Dataview plugin for research"]
draft: false
type: "informational"
tags: ["obsidian", "academic research", "plugins", "research workflow"]
---

# 学术研究的 5 款最佳 Obsidian 插件（以及它们如何协同工作）

*构建一个完整的[文献综述](/zh-cn/posts/advanced-obsidian-templates-for-literature-review-matrix/)、[笔记记录](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)和综合系统——而不仅仅是一份插件列表。*

---

## 太长不看 (TL;DR)

- **五款插件构成一个系统：** [Zotero](/zh-cn/posts/zotero-integration-for-obsidian-academic-research/) Integration、[Dataview](/zh-cn/posts/creating-automated-index-pages-with-obsidian-dataview/)、Canvas、[Templater](/zh-cn/posts/templater-plugin-tutorial-for-obsidian-power-users/) 和 Omnisearch 各自解决了一个特定的研究瓶颈，当它们组合使用时，其威力远超单独使用。
- **工作流是线性的：** 通过 Zotero Integration 导入论文 → 使用 Templater 结构化笔记 → 使用 Dataview 查询你的文献库 → 在 Canvas 上映射论点 → 使用 Omnisearch 检索任何内容。
- **这套配置取代了四到五个独立的工具**（文献管理器的导出功能、Excel 阅读清单、思维导图应用和基于文件夹的搜索），将其整合为一个由你完全掌控的、本地存储的知识库。

---

## 目录

1. [为什么你旧的研究工作流已经失效](#broken-workflow)
2. [插件 1：Zotero Integration — 你的引用超能力](#zotero-integration)
3. [插件 2：Dataview — 查询与组织你的知识](#dataview)
4. [插件 3：Canvas — 视觉化综合你的想法](#canvas)
5. [插件 4：Templater — 自动化你的笔记流程](#templater)
6. [插件 5：Omnisearch — 瞬间找到任何内容](#omnisearch)
7. [插件对比表](#comparison-table)
8. [融会贯通：一个学术工作流示例](#workflow)
9. [常见问题 (FAQ)](#faq)
10. [结语](#conclusion)

---

## 为什么你旧的研究工作流已经失效 {#broken-workflow}

如果你是一名研究生或博士后，你当前的研究工作流可能看起来是这样的：一个 Zotero 文献库，里面有 400 篇你标注过但无法交叉引用的 PDF；一个装满 Word 文档的文件夹，里面的笔记无法被高效搜索；写着半成型想法却从未被写进论文的便利贴；以及一种日益增长的焦虑——你明明已经读过能解答当前问题的论文，却怎么也找不到它。

这不是纪律问题，而是工具问题。标准的学术工具栈——Zotero、Word、Google Docs，也许还有某个思维导图应用——在设计之初就没有考虑过如何将不同来源的想法连接起来。每个工具都是一座信息孤岛。你从 Zotero 导出一份参考文献列表，粘贴到 Word 中，参考文献与你思考之间的联系便在此中断。

**Obsidian 在结构层面上修复了这个问题。** 每一条笔记都是一个存储在你本地电脑上的纯文本 Markdown 文件。笔记之间可以使用 `[[wikilinks]]` 相互链接，因此一篇论文的文献笔记中提到的某个概念，可以直接指向另一篇论文的笔记、一个理论框架或是一段草稿。最终的结果是一个真正的知识图谱——[生产力](/zh-cn/posts/obsidian-vs-reflect-for-fast-daily-journaling/)圈子称之为“第二大脑”——你添加的内容越多，它就越有用。

但 Obsidian 的核心应用被刻意设计得极为精简。它真正的力量存在于其插件生态系统中，而这也正是大多数指南浅尝辄止的地方：它们扔给你一份列表然后就结束了。本文采取了不同的方法。以下介绍的每一款插件都解决了学术研究中一个具体且明确的问题，最后一部分将展示这五款插件如何连接成一个你当天就能开始使用的工作流。

在深入之前的一个实用建议：如果你需要在笔记本电脑、办公室台式机和平板电脑之间无缝切换，订阅 Obsidian Sync 是值得的。它能确保你整个知识库（Vault）——笔记、附件、插件设置——在不同设备间保持一致，并提供端到端[加密](/zh-cn/posts/configuring-obsidian-for-end-to-end-encrypted-sync/)。对于研究数据而言，这种安全细节至关重要。

---

## 插件 1：Zotero Integration — 你的引用超能力 {#zotero-integration}

**它解决的问题：** 你花了两个小时在 Zotero 中阅读并批注了一篇 PDF。现在你想在 Obsidian 中撰写关于它的内容。如果没有一座桥梁，你只能手动将作者、标题、年份、期刊、DOI 以及你的高亮文本复制到一篇新笔记中。这既繁琐又容易出错，这也是人们放弃结构化记笔记的原因之一。

**插件的功能：** Zotero Integration（由 mgmeyers 开发，可在 Obsidian 社区插件目录中获取）在你的 Zotero 文献库和 Obsidian 知识库之间建立了一条直接的管道。当你触发它时，它会提取 Zotero 条目的[元数据](/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/)和你的批注，并自动填充到一篇新的 Obsidian 笔记中。

**只需三步即可完成设置：**

1. 在你的浏览器和 Zotero 桌面应用中安装 Better BibTeX for Zotero 扩展。它会为每篇参考文献分配一个稳定的引用键（例如 `smith2019`），这是确保该集成可靠运行的必要条件。
2. 在 Obsidian 中，进入设置 → 社区插件，搜索 "Zotero Integration" 并安装。在插件设置中，将其指向你的 Zotero 数据库文件（通常位于 `~/Zotero/zotero.sqlite`）。
3. 创建一个导入模板（关于这点在下文的 Templater 部分有更多介绍），并在插件设置的 "Import Formats" 下链接它。

设置完成后，你只需按下快捷键，输入作者姓名或标题，从模糊搜索列表中选择论文，Obsidian 就会在不到五秒钟的时间内创建一篇完整的文献笔记。该笔记包含了标题、作者、年份、摘要、期刊、作为可点击链接的 DOI，以及你在 Zotero 中做的每一个高亮和批注（均标有页码）。

**为什么这对于文献综述很重要：** 你的文献笔记成为了你对这篇论文所有认知的规范归宿。当你需要一个细节时，你不再需要每次都翻回 PDF，而是阅读笔记，如果需要全文就点击 DOI 链接，然后继续工作。在包含 200 篇文献的综述中，这种时间节省是巨大的。

**Zotero 存储建议：** 当你的 PDF 直接通过 Zotero 存储和同步时，该集成效果最好。Zotero 的免费计划提供 300 MB 的云存储空间——对于一个规模不大的文献库来说已经足够，但大多数活跃的[研究人员](/zh-cn/posts/obsidian-vs-heptabase-for-visual-research-workflows/)很快就会超出这个限制。将你的 Zotero 存储空间升级到 2 GB 或无限容量计划，可以让你在不同机器上访问 PDF 文献库，而不会破坏插件的文件路径引用。

---

## 插件 2：Dataview — 查询与组织你的知识 {#dataview}

**它解决的问题：** 经过三个月的积极记录，你拥有了 80 篇文献笔记。你想要回答这样的问题：“哪些论文我已经读过但还没有总结？”或者“向我展示所有带有 `#methodology` 标签的来源，并按年份排序。”如果没有 Dataview，你要么手动完成这些工作，要么干脆放弃。

**插件的功能：** Dataview 将你的 Obsidian 知识库视为一个数据库。它读取你笔记中的 YAML frontmatter 和内联字段，并允许你直接在任何笔记中使用类似 SQL 的语言编写查询。输出结果是一个实时、自动更新的表格、列表或日历。

**一个具体的例子 — 阅读仪表板：**

如果你的每一篇文献笔记都有类似这样的 frontmatter 字段：

```yaml
---
title: "Mechanisms of Social Trust Formation"
author: "Alex Chen"
authors: "Chen, Liu"
year: 2021
status: "read"
tags: [social-capital, methodology]
---
```

那么在一个名为 `Reading Dashboard` 的笔记中，你可以这样写：

````
```dataview
TABLE authors, year, status
FROM "Literature Notes"
WHERE status = "to-read"
SORT year DESC
```
````

这将生成一个包含你知识库中所有未读论文的实时表格，按出版年份排序，并且当你更改单篇笔记中的 `status` 字段时，它会自动更新。不需要电子表格。不需要手动更新。

**其他对研究人员高价值的查询：**

- **要在第二章引用的论文：** 给笔记打上 `chapter2` 标签，并查询 `FROM "Literature Notes" WHERE contains(tags, "chapter2")`
- **作者参考文献：** 查询 `authors` 中包含特定姓氏的所有笔记
- **概念频率：** 列出所有带有特定理论框架标签的笔记，以便在动笔前了解你掌握的覆盖面有多广

Dataview 奖励一致性。你的笔记结构越统一，你的查询就越强大。这正是 Dataview 和 Templater（插件 4）密不可分的原因——Templater 保证了 Dataview 所依赖的统一的 frontmatter。

---

## 插件 3：Canvas — 视觉化综合你的想法 {#canvas}

**它解决的问题：** 你阅读了关于某个主题的 40 篇论文。你单独理解了每一篇。但你还无法看清你想要提出的论点，或者理论框架之间是如何相互关联的。线性的笔记无法展示结构——它们只是在堆砌。

**插件的功能：** Canvas 实际上是 Obsidian 第一方的内置功能（不是社区插件），但它的运作方式就像一个插件，而且大多数研究人员都不知道它的存在。它为你提供了一块无限白板，你可以在上面放置笔记、文本卡片、图片和网络链接，并在它们之间画连接线。关键的是，你可以将你*实际的文献笔记*直接嵌入到画布上——不是副本，而是实时链接。如果你更新了笔记，画布上也会同步反映出来。

**学者们如何使用它：**

*论点映射：* 将你打算在章节中提出的每一个主要主张作为一个文本卡片放在中心位置。拖入支持每个主张的文献笔记。画线将证据与主张连接起来。你可以立刻看出哪些论点有充分的支持，而哪些只有一个来源。

*理论框架可视化：* 如果你所在领域的工作要求你将自己的研究定位在现有的思想流派之间，Canvas 允许你对理论进行空间排列，并画线表示关系（延伸、挑战、综合）。这种视觉化思考在 Word 中几乎是不可能完成的。

*章节大纲：* 为每一章创建一个画布。将小节标题作为文本卡片放置，把相关的文献笔记拖到每个小节下方，并添加写有你自己过渡性论点的小卡片。你正在使用真实的文献构建章节结构——这比列表大纲有用得多。

核心的洞察是，Canvas 并没有取代你的笔记，它是在*读取*它们。当你在画布上嵌入一篇文献笔记时，你看到的是它的实际内容。笔记和画布保持着连接。将一篇论文移动到不同的小节？笔记本身不会改变——改变的只有你的视觉组织方式。

---

## 插件 4：Templater — 自动化你的笔记流程 {#templater}

**它解决的问题：** 一致性。如果你的文献笔记结构各异——有时你包含了摘要，有时没有，有时 frontmatter 使用 `author`，有时使用 `authors`——你的 Dataview 查询就会失效，你的笔记也会变得难以快速浏览。每次新建笔记时手动重建结构非常缓慢，而且不一致性依然会悄悄潜入。

**插件的功能：** Templater 是一个社区插件，它允许你创建带有动态占位符的笔记模板。与 Obsidian 内置的模板功能不同，Templater 可以运行 JavaScript，自动插入当前日期，在创建笔记时提示你输入内容，甚至调用 Zotero Integration 插件来自动填充字段。

**一个实用的文献笔记模板看起来像这样：**

```markdown
---
title: "{{VALUE:Title}}"
author: "Alex Chen"
authors: "{{VALUE:Authors}}"
year: {{VALUE:Year}}
journal: "{{VALUE:Journal}}"
doi: "{{VALUE:DOI}}"
status: to-read
tags: []
date-added: <% tp.date.now("YYYY-MM-DD") %>
---

## Summary
<!-- 3-5 sentence summary in your own words -->

## Key Arguments
-

## Methodology Notes
-

## Quotes Worth Keeping
-

[## Connection to My Research
-

## Citation
{{VALUE:Authors}} ({{VALUE:Year}}). {{VALUE:Title}}. *{{VALUE:Journal}}*.
```

当与 Zotero Integration 结合使用时，Templater 会根据 Zotero 的元数据自动填充 frontmatter。当你打开一篇新笔记时，它已经具备了完整的结构，只剩下需要你思考的部分等待填写。

**建立一个会议笔记模板**同样非常有用。论文导师、委员会成员、客座讲者——每次会议都有一份结构一致的笔记：日期、参会者、做出的决定、行动项。然后 Dataview 可以查询所有 `type: meeting` 的笔记，为你提供一份完整的指导历史记录，这对于撰写致谢部分或重建时间线非常实用。

在 Templater 上的投资很快就会得到回报。设置三个模板（文献笔记、会议笔记、项目笔记）大约需要 90 分钟。得到的回报是，在接下来的三到五年的博士生涯中，你创建的每一篇笔记都是结构一致、可查询且完整的。

---

## 插件 5：Omnisearch — 瞬间找到任何内容 {#omnisearch}

**它解决的问题：** Obsidian 的内置搜索功能非常适合在 Markdown 笔记中查找文本。但它不会索引存储在知识库中的 PDF 文件内容。如果你添加了 150 份 PDF，并且你想找到每一份提到“农村社区的社会资本形成 (social capital formation in rural communities)”的文件，原生搜索将一无所获。

**插件的功能：** Omnisearch 是一个社区插件，它能够在你的整个知识库（包括 PDF 附件中的文本）内建立全文搜索索引。它使用的是基于相关性评分的搜索算法，而不是简单的字符串匹配，因此搜索结果是根据可能的关联度排序的，而不仅仅是词语是否存在。

**这在实践中意味着什么：**

你正在写关于测量效度的一节。你在 Omnisearch 中输入“建构效度 (construct validity)”。两秒钟之内，你就能看到一个排序列表，列出了你知识库中所有包含该短语的笔记和 PDF——你自己的笔记、带批注的 PDF、导入的文献笔记，甚至是一年半前你添加却早已遗忘的方法论教科书。点击任何一个结果，你就能直接跳转到相关段落。

这彻底改变了你的搜索方式。你不再需要费力回想是哪篇论文说了什么，或者花二十分钟扫视一个装满 PDF 的文件夹，你只需几秒钟就能检索到出处，然后继续写作。

**关于设置的一点说明：** Omnisearch 的 PDF 索引要求你的 PDF 必须是基于文本的（即原生数字版或经过正确 OCR 处理的）。未经过 OCR 处理的扫描版 PDF 将不会被索引。如果你有大量扫描版的老论文，在导入知识库之前，请先用 OCR 工具（如 Adobe Acrobat 或免费的 ABBYY FineReader 网页版工具）处理一下。

---

## 插件对比表 {#comparison-table}

| 插件 | 类型 | 解决的问题 | 最佳搭配 | 学习曲线 |
|---|---|---|---|---|
| **Zotero Integration** | 社区 | 从 Zotero 导入参考文献和批注 | Templater, Better BibTeX | 低–中 |
| **Dataview** | 社区 | 将笔记作为数据库进行查询和组织 | Templater（为了统一的 frontmatter） | 中 |
| **Canvas** | 核心 (内置) | 视觉化综合和论点映射 | 来自 Zotero Integration 的文献笔记 | 低 |
| **Templater** | 社区 | 自动化维持一致的笔记结构 | Zotero Integration, Dataview | 中 |
| **Omnisearch** | 社区 | 包含 PDF 附件的全文搜索 | 所有插件（通用检索） | 极低 |

---

## 融会贯通：一个学术工作流示例 {#workflow}

以下是单个早晨的研究工作如何在不切换工具的情况下流畅地使用这五款插件。

**第一步 — 你找到了一篇值得阅读的新论文。**
你在 Chrome 浏览器中，点击 Zotero 浏览器插件，论文就保存到了你的 Zotero 文献库中。你在 Zotero 内置的阅读器中对 PDF 进行批注，高亮关键段落并添加简短的笔记。

**第二步 — 你将它导入 Obsidian。**
回到 Obsidian，你使用快捷键（常见的设置为 `Ctrl+Shift+Z`）触发 Zotero Integration。你搜索这篇论文并选中它，Obsidian 便会使用你的 Templater 文献笔记模板创建一篇新笔记。Frontmatter 已经预先填好了标题、作者、年份和 DOI。你的 Zotero 高亮内容会出现在“值得保留的引文 (Quotes Worth Keeping)”下方，且每一条都附有页码。你只需填写摘要、关键论点以及与我研究的联系部分——在结构已经准备好的情况下，每篇论文只需花费 10–15 分钟。

**第三步 — 你的 Dataview 仪表板自动更新。**
你在一个分屏窗口中打开了一篇名为 `Research Dashboard` 的笔记。因为你刚刚添加了一篇 `status: to-read` 的笔记，所以它会出现在你的“待读” Dataview 表格中。当你阅读完毕并将状态更改为 `read` 时，它就会移动到一个独立的“已完成”表格中。无需手动维护清单。

**第四步 — 你在 Canvas 上连接想法。**
你正在处理一个名为 `第三章 — 理论框架` 的第 3 章画布。你将新的文献笔记拖到画布上，并画一条线将其与现有的标记为“社会资本理论”的节点连接起来。你添加了一张小文本卡片来记录它们的关系：“Chen (2021) 对 Putnam 的结合型资本的操作化定义有所不同——需要检查方法论部分中的这一冲突。”这个批注保存在画布上，而不是笔记里，因此你的文献笔记依然保持整洁。

**第五步 — 三周后，你需要一句特定的引文。**
你正在起草一个段落，你记得读过关于“低收入网络中的信任形成”的内容，但想不起来是哪篇论文了。你打开 Omnisearch，输入这句话，几秒钟内你就能看到一个包含两篇文献笔记和一份 PDF 附件的排序列表。你点击进入，确认了引文，复制引用键，满怀信心地将其粘贴到你的草稿中。

这套系统会随着时间的推移产生复利效应。六个月后，你的知识库不再仅仅是存储信息——它会主动向你展示你未曾意识到的联系。一个 Dataview 查询揭示了你有 9 个来源共享同一个你尚未写过的方法论标签。一次 Canvas 会话让你意识到，你原本以为相互独立的两名理论家实际上存在直接的分歧。Omnisearch 帮你找到了一篇你只有模糊印象，却对你的论点至关重要的论文。

这就是一份插件列表和一个研究系统之间的区别。

---

## 结语 {#conclusion}

本文涵盖的五款插件——Zotero Integration、Dataview、Canvas、Templater 和 Omnisearch——并不是你强行拼凑在 Obsidian 上的五个独立工具。它们是一个系统。Zotero Integration 负责引入原材料。Templater 确保其结构一致。Dataview 将这种结构转化为可查询的情报。Canvas 将线性的笔记转化为可见的论点。Omnisearch 让整个档案库能够被瞬间检索。

设置好这套系统的研究人员都描述了一个特定的拐点：大概在第四或第五个月的时候，知识库开始生成洞见，而不仅仅是存储信息。你打开一个 Canvas 白板，意识到你的论点其实比你想象的更强大。一个 Dataview 查询在你的导师指出之前，就向你展示了文献覆盖的空白。Omnisearch 将你原本在脑海中归为不同类别的两篇论文联系在了一起。

这就是一个构建良好的[知识管理](/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/)系统的作用——它与你并肩思考，而不仅仅是跟在你身后记录。

**准备好深入了解了吗？** 如果你更喜欢通过视频学习，并且希望得到从一个空白的知识库到完全运作的学术研究系统的引导式设置，Udemy 上的“Obsidian for Academics”课程通过循序渐进的录屏涵盖了本文中的所有内容，包括专门为文献综述和论文写作构建的更高级的 Dataview 查询和 Templater 脚本。

如果你在构建 Obsidian 知识库的同时仍在扩充你的 Zotero 文献库，请检查一下你当前的 Zotero 存储计划是否能容纳你所有的 PDF 档案——在项目进行到一半时空间耗尽，是一种完全可以避免的麻烦。

从一个插件开始。这周安装 Templater，构建一个单一的文献笔记模板，并创建三篇笔记。整个系统将以此为基础逐步成长。

---

*披露：本文中的部分链接为联盟链接。如果你通过这些链接购买，我们可能会赚取佣金，且不会对你产生额外费用。所有的插件推荐均基于实际的研究使用经验——没有一个是赞助内容。*

---

## 常见问题 (FAQ)

### 问：我需要付费才能在 Obsidian 中使用这些插件吗？

Obsidian 个人使用是免费的，本文介绍的五款插件在免费版本上均可运行。唯一值得研究人员考虑的付费 Obsidian 产品是 Obsidian Sync，它提供跨设备的加密知识库同步。它的价格为每月 10 美元，但如果你在多台机器上工作，替代方案（手动设置 Dropbox 同步）存在可能会损坏知识库的边缘情况。

### 问：Zotero Integration 和 Citations 插件是一样的吗？

不一样。Citations 插件是一个较老的社区插件，它已在很大程度上被 Zotero Integration（前身为 "Obsidian Zotero Desktop Connector"）所取代。Zotero Integration 仍在积极维护中，支持实时批注导入，并且通过 Templater 拥有更好的模板支持。如果你是从头开始设置，请使用 Zotero Integration。

### 问：如果我不是博士生——例如，我是一名本科生——我可以使用这些插件吗？

可以的，尽管根据你管理的文献数量的不同，有些插件会显得更加立竿见影。无论知识库大小，Templater 和 Omnisearch 从第一天起就能带来价值。当你拥有 30–40 篇结构一致的笔记时，Dataview 就变得非常实用了。如果你正在撰写任何级别的毕业论文或重要的研究论文，这五款插件都值得安装。

### 问：这些插件如何处理英语以外的语言？

Markdown 与语言无关，且 Obsidian 能正确渲染 Unicode，因此使用阿拉伯语、中文、德语或任何其他语言的笔记都能正常工作。对于原生数字版的 PDF，Omnisearch 的 PDF 索引在处理多语言文本方面也表现得相当不错。Templater 的模板可以用任何语言编写。唯一的限制是 Dataview 查询使用英语语法（查询语言本身是英语），但你的笔记*内容*可以是任何语言。

### 问：备份用于研究的 Obsidian 知识库的最佳方法是什么？

你的知识库就是包含纯文本文件和附件的一个文件夹。任何能同步文件夹的备份方案都行：Mac 上的 Time Machine、Windows 上的 File History，或是像 Backblaze 这样的云存储。如果你使用 Obsidian Sync，它会保留 12 个月的版本历史记录，这已经挽救了不少不小心删除掉长篇笔记的研究人员。对待你的知识库要像对待你的论文草稿一样：至少要有三个不同的备份位置。

## 相关阅读

- [什么是 Excalidraw，为什么要把它用在 Obsidian 中？](/zh-cn/posts/excalidraw-plugin-for-obsidian-review/)
- [为什么要在 Obsidian 中构建 Zettelkasten（卡片盒笔记法）？](/zh-cn/posts/setting-up-a-zettelkasten-in-obsidian-with-plugins/)
- [为什么要在 2024 年使用 Obsidian 进行习惯追踪？](/zh-cn/posts/best-obsidian-plugins-for-habit-tracking-2024/)
- [什么是 Obsidian 社区插件？](/zh-cn/posts/obsidian-community-plugins-list/)