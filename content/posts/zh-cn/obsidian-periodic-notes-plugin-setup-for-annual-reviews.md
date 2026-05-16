---
image: "/og/obsidian-periodic-notes-plugin-setup-for-annual-reviews.webp"
editorSummary: >-
  年度回顾的插件设置需要结合三个社区工具——Periodic Notes、Templater和Dataview——将零散的每日记录转化为结构化的年度反思。我发现通过配置带有专属模板文件的年度笔记（Yearly Notes）开关，可以消除手动汇总的工作，让Dataview查询能够在十二个月跨度内自动汇总成就和指标。代价是在全年保持一致的元数据标签变得至关重要；否则，你的查询将返回不完整的数据。通过实施从每日到每月再到每年的层级汇总，你可以创建一个基于数据的回顾流程，呈现出有意义的趋势，而不是仅仅依赖记忆。
authorNote: >-
  我通过使用Templater语法创建一个年度模板来测试此设置，该模板自动链接到上一年和下一年的回顾，然后嵌入Dataview查询来拉取所有完成的项目和带有标签的日记记录。我遇到的关键陷阱是试图一次性回顾所有365篇每日笔记——这个系统只有在你全年都在建立每月摘要时才能发挥作用。将反思文档与规划目标分开，也防止了我为了获取设定新目标的快感而草草完成分析。
manualRelated:
  - title: "自动化 Obsidian Dataview 设置的索引页面：完整指南"
    url: "/zh-cn/posts/creating-automated-index-pages-with-obsidian-dataview/"
  - title: "Obsidian vs Reflect 用于快速每日记事：哪个更适合高级用户？"
    url: "/zh-cn/posts/obsidian-vs-reflect-for-fast-daily-journaling/"
  - title: "将 PARA 方法应用于 Obsidian Vault：完整指南"
    url: "/zh-cn/posts/applying-the-para-method-to-an-obsidian-vault/"
title: "用于年度回顾的 Obsidian Periodic Notes 插件设置：完整指南"
description: "通过为年度回顾量身定制的完美 Obsidian Periodic Notes 插件设置，掌握你的年度反思。我们评估了必备插件和逐步的工作流。"
pubDate: "2026-05-02"
author: "Alex Chen"
tags: ["obsidian", "productivity", "pkm", "periodic notes"]
slug: "obsidian-periodic-notes-plugin-setup-for-annual-reviews"
type: "review"
---

_作为 Amazon 联盟成员，我们通过符合条件的购买获得收益。这篇文章可能包含联盟链接。_

# 用于年度回顾的 Obsidian Periodic Notes 插件设置：完整指南

> **快速解答：** 针对年度回顾的最佳 Obsidian 插件设置需要将 Periodic Notes 插件与 [Templater](/zh-cn/posts/automating-obsidian-frontmatter-with-templater-scripts/) 和 [Dataview](/zh-cn/posts/creating-automated-index-pages-with-obsidian-dataview/) 结合使用。启用“Yearly Notes”开关，分配一个包含你反思提示词的专属模板文件，并配置文件夹目标，以自动将你的月度和季度汇总合并到一个单一的年终仪表板中。

进行年度回顾是个人成长中最高杠杆率的活动之一，然而许多[知识工作者](/zh-cn/posts/understanding-the-difference-between-folders-and-tags-obsidian/)都难以将十二个月零散的日记记录整合起来。当你的想法散落在各种笔记本、应用程序和文本文件中时，识别有意义的趋势变得几乎不可能。结果往往是肤浅的年度反思，无法为你来年的战略提供信息。

Obsidian 通过将你的笔记视为一个互连的数据库来解决这种碎片化问题。然而，基础软件开箱即用仅提供每日笔记。要进行结构化、以数据为依据的年度反思，你需要一个系统，将你的每日记录分层汇总为周、月、季度，最终汇总为年。

本指南详细介绍了具体的用于年度回顾的 Obsidian Periodic Notes 插件设置，评估了你所需的核心工具，并提供了一个将零散的每日想法转化为可执行的年度洞察的蓝图。

## 年度回顾的核心工具栈

为了构建一个自动化、无摩擦的年度回顾系统，你需要三个特定的社区[插件](/zh-cn/posts/periodic-notes-plugin-weekly-reviews/)协同工作。以下是对你的工具栈必备组件的评估。

### 1. [Periodic Notes 插件](https://www.amazon.com/s?k=Periodic%20Notes%20Plugin&tag=notesautomate-20)

**最适合：** 基于时间的 vault 组织和宏观层面的回顾
**价格：** 免费
**评分：** 5/5

Liam Cain 开发的 Periodic Notes 插件是这个[工作流](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)的结构基础。它通过引入每周、每月、每季度和每年笔记的专用框架，直接扩展了 Obsidian 原生的每日笔记功能。对于年度回顾，它处理最终回顾文档的路由、创建和格式化，确保它恰好位于你的 vault 层级结构中的适当位置。

**优点：**
- 创建从日到年的无缝层级结构
- 允许为不同的时间尺度使用不同的[模板](/zh-cn/posts/advanced-obsidian-templates-for-literature-review-matrix/)
- 文件夹结构具有可预测的日期数学逻辑

**缺点：**
- 基础设置需要理解格式化令牌
- 如果没有其他插件，无法自动提取数据

### 2. [Templater 插件](https://www.amazon.com/s?k=Templater%20Plugin&tag=notesautomate-20)

**最适合：** 动态文本插入和自动化回顾提示
**价格：** 免费
**评分：** 4.8/5

虽然 Periodic Notes 处理你年度回顾文件的创建，但 Templater 决定了里面的内容。Templater 使用强大的 JavaScript 变量来自动插入确切的日期、计算上一年，并动态生成指向你 12 个月度笔记的链接。这消除了每年 12 月从头开始手动构建回顾文档的摩擦。

**优点：**
- 在日期计算方面具有无与伦比的[自动化](/zh-cn/posts/templater-plugin-tutorial-for-obsidian-power-users/)能力
- 支持复杂的 JavaScript 函数
- 完全取代了标准的 Obsidian 模板

**缺点：**
- 语法对于[初学者](/zh-cn/posts/obsidian-vault-structure-digital-gardening-beginners/)来说可能难以掌握
- 过度自动化可能导致笔记臃肿

### 3. [Dataview 插件](https://www.amazon.com/s?k=Dataview%20Plugin&tag=notesautomate-20)

**最适合：** 汇总成就和指标
**价格：** 免费
**评分：** 4.9/5

有效的年度回顾需要证据，而不仅仅是记忆。Dataview 充当你的 Obsidian vault 的查询引擎。通过将 Dataview 查询嵌入到你的年度回顾模板中，你可以自动调取过去 365 天内阅读的每一本书、完成的每一个项目以及追踪的每一个习惯，作为你主观反思的客观数据层。

**优点：**
- 即时呈现全年中相关的笔记
- 类似 SQL 的语法具有高度可定制性
- 减少了手动搜索的认知负担

**缺点：**
- 查询仅在阅读或实时预览模式下渲染
- 需要全年保持一致的[元数据](/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/)标签

## 逐步配置指南

安装好工具后，用于年度回顾的 Obsidian Periodic Notes 插件设置的执行依赖于严格的配置。哪怕是一个错位的日期令牌都会破坏你的工作流。

### 配置 Periodic Notes 设置

导航到 Obsidian 设置 > Periodic Notes。你将看到每个时间范围的部分。向下滚动到 **Yearly Notes** 部分并将其开启。

1. **Format:** 这决定了你文件的标题。使用 `YYYY` 生成一个干净的四位数字年份（例如，2026）。
2. **Yearly Template:** 将其指向你的 vault 中包含年度回顾提示词的特定 markdown 文件（例如，`Templates/Yearly Review Template.md`）。
3. **Yearly Folder:** 定义这些回顾文档的存放位置。像 `Reviews/Yearly` 这样的专用文件夹可以让你的 vault 保持整洁，并使 Dataview 查询更干净。

### 设计年度模板

你的模板是回顾的引擎。在你的模板文件夹中创建一个新文件。使用 Templater 语法，你可以自动向后链接到上一年并向前链接到下一年。

在你的文件顶部，包含以下 frontmatter 和导航：

```yaml
---
aliases: ["<% tp.date.now("YYYY") %> Annual Review"]
tags: ["review/annual"]
---
[[<% tp.date.now("YYYY", "P-1Y") %>]] <== **<% tp.date.now("YYYY") %>** ==> [[<% tp.date.now("YYYY", "P+1Y") %>]]
```

这段代码片段确保当你生成 2026 年回顾时，它会自动向后链接到 2025 年，向前链接到 2027 年。

### 整合 Dataview 以收集证据

纯粹的定性回顾往往会成为近因效应的牺牲品——你只记得 11 月和 12 月发生的事情。将 Dataview 查询嵌入你的年度模板中，以从你的每日和每月笔记中提取数据。

在你的模板中创建一个名为“Data & Metrics”的部分。添加一个查询以提取这一年中完成的所有主要项目。假设你使用 `#project` 标记项目笔记并包含一个 `completed:` 日期属性，该查询如下所示：

```sql
TABLE completed AS "Date Finished", outcome AS "Result"
FROM #project
WHERE completed >= date(<% tp.date.now("YYYY") %>-01-01) 
AND completed <= date(<% tp.date.now("YYYY") %>-12-31)
SORT completed ASC
```

当你触发年度笔记的创建时，Templater 会评估确切的年份，而 Dataview 会用你实际的成就填充表格。

## 给你的年度回顾工作流的实用建议

如果你不实际执行回顾，那么用于年度回顾的 Obsidian Periodic Notes 插件设置的机制就毫无意义。

首先，依赖“汇总”的概念。不要试图在年度回顾期间阅读 365 篇每日笔记。相反，你的每日笔记应该为你的每周回顾提供信息。你的每周回顾为你的每月摘要提供信息。当 12 月到来时，你只需回顾 12 篇月度综合笔记，加上你的四份季度规划文档。

其次，限制你的提示词。从[生产力](/zh-cn/posts/obsidian-vs-reflect-for-fast-daily-journaling/)大师那里下载一个包含 50 个问题的年度回顾模板是很诱人的。在实践中，过长的模板会导致疲劳。坚持使用高杠杆率的提示词：
- 这一年什么最让我充满活力？
- 什么消耗了我的精力，明年我怎样才能在结构上消除它？
- 我改变了对什么事情的看法？
- 如果我再重复这完全相同的一年，我会对我五年后的境况感到满意吗？

最后，将反思与规划分开。使用 Periodic Notes 的年度笔记来向后看。创建一个单独的文档——也许链接在你的年度回顾的底部——用来设定下一年的战略。将两者混合在一起往往会导致匆匆完成反思阶段，以便获得规划新目标的快感。

## 综合系统

在 Obsidian 中构建年度回顾系统将反思从一种模糊的、依赖记忆的练习转变为一种严谨的、基于数据的过程。通过结合 Periodic Notes 的路由功能、Templater 的自动化以及 Dataview 的检索能力，你的 vault 承担了收集你这一年情况的繁重工作。这让你的大脑得以解放，去从事实际的工作：分析你的轨迹并为未来纠正航向。

## 常见问题解答

### 如果我在一年中错过了几次月度回顾怎么办？
你的年度回顾只会提取到较少的聚合数据。针对特定标签或项目文件的 Dataview 查询仍然会完美运行，允许你绕过丢失的月度摘要，直接查看已完成的任务或日记记录。

### 我可以使用核心的 Daily Notes 插件代替 Periodic Notes 吗？
你可以使用核心插件处理每日笔记，但你绝对需要社区的 Periodic Notes 插件来自动生成每周、每月、每季度和每年的文件。核心插件不支持宏观层面的时间范围。

### 跨入新的一年时如何修复断开的日期链接？
断开的日期链接通常是由于使用标准 Obsidian 模板而不是 Templater 造成的。确保你使用的是 `<% tp.date.now("YYYY") %>` 语法，并且 Templater 在其设置中配置为“Trigger Templater on new file creation”。

### 此设置需要 Dataview 才能工作吗？
不需要。强烈推荐使用 Dataview 来自动汇总诸如阅读的书籍或完成的项目等数据，但 Periodic Notes 插件完全可以依靠手动输入文本完美生成你的年度回顾文档。

---

## 相关阅读

- [关于备份的 Obsidian Vault 结构解释（完整指南）](/zh-cn/posts/explanation-of-obsidian-vault-structure-for-backups/)

- [将 PARA 方法应用于 Obsidian Vault：完整指南](/zh-cn/posts/applying-the-para-method-to-an-obsidian-vault/)
- [Obsidian 的 Canvas：2026 年无限白板创意](/zh-cn/posts/canvas-for-obsidian-infinite-whiteboard-ideas/)