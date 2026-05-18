---
publishedAt: 2026-05-16T14:58:13+08:00
image: "/og/obsidian-template-for-weekly-reflection-and-planning.webp"
editorSummary: >-
  我非常看重能够消除每周复盘阻力的模板，而这个Obsidian模板正是通过Dataview自动汇总数据，并将反思与计划分为两个独立的阶段来实现这一点。该模板使用Templater变量自动计算日期，从日记中提取未完成的任务，并在一个视图中呈现习惯指标——节省了手动整合的时间。然而，关键的权衡在于，它的成功完全取决于坚持每天记笔记的纪律；如果你在一周内没有记录数据，自动查询将返回不完整的信息，从而破坏整个复盘过程。
authorNote: >-
  在多个应用之间零散地进行每周复盘让我备受困扰，之后我测试了这个模板。最初设置Periodic Notes、Templater和Dataview感觉有些复杂，但一旦配置完成，创建新的每周笔记就变成了自动的。当我尝试“三大优先级”限制时，真正的阻力点出现了——我的第一周列出了十二个任务。强迫自己只选择三个任务，暴露出我对实际的优先事项有多么不清晰，而这正是该模板旨在揭示的问题。
manualRelated:
  - title: "Periodic Notes插件完整指南：掌握每周复盘"
    url: "/zh-cn/posts/periodic-notes-plugin-weekly-reviews/"
  - title: "使用Python自动化Obsidian日记：完整指南"
    url: "/zh-cn/posts/automate-obsidian-daily-notes-using-python/"
  - title: "用于年度复盘的Obsidian Periodic Notes插件设置：完整指南"
    url: "/zh-cn/posts/obsidian-periodic-notes-plugin-setup-for-annual-reviews/"
title: "Obsidian每周反思与计划模板：完整指南"
description: "下载用于每周反思与计划的终极Obsidian模板。简化你的复盘流程，追踪习惯，并在几分钟内设定可执行的目标。"
pubDate: "2026-05-03"
author: "Alex Chen"
tags: ["obsidian", "productivity", "weekly review", "templates"]
slug: "obsidian-template-for-weekly-reflection-and-planning"
type: "informational"
---

# Obsidian每周反思与计划模板：完整指南

> **快速解答：** 理想的Obsidian每周反思与计划模板结合了自动数据汇总（通过Dataview）、对过去成就的结构化复盘，以及专门用于未来优先事项的板块。通过将反思与计划分离开来，你可以确保对过去的一周在情感上画上句号，并为接下来的一周提供清晰、可执行的重点。

[每周复盘](/zh-cn/posts/periodic-notes-plugin-weekly-reviews/)是任何可持续[生产力](/zh-cn/posts/obsidian-vs-reflect-for-fast-daily-journaling/)系统的基石。没有它，任务就会堆积如山，优先事项变得模糊，你也会失去对目标整体发展轨迹的掌控。虽然纸质日记本和死板的任务管理器也提供解决方案，但Obsidian为这一实践提供了无与伦比的环境。其基于本地的纯文本基础，加上强大的[社区](/zh-cn/posts/how-to-install-community-plugins-in-obsidian-mobile/)插件，使你能够构建一个完全反映你思维模型的系统。

然而，每个星期天都面对一张白纸开始写，注定会产生阻力。一个设计良好的Obsidian每周反思与计划模板能消除这种阻力。它会向你提出正确的问题，自动从你的[日记](/zh-cn/posts/automate-obsidian-daily-notes-using-python/)中提取数据，并提供一个清晰的结构供你遵循。

本指南提供了一个全面的框架和一个开箱即用的模板，在内省与可执行的计划之间取得了平衡，确保你花更少的时间去排版笔记，而把更多的时间用于执行你的优先事项。

## 每周复盘的核心机制

在应用模板代码之前，理解成功进行每周复盘的架构至关重要。一个稳健的流程不仅仅是一份清单；它被划分为三个不同的阶段：收集、反思和计划。

### 收集阶段

收集阶段的核心是整合。在整个星期里，未闭环的事项会不断积累。这些包括匆忙写下的笔记、未读的文章、未分类的任务以及零散的想法。模板必须提供一个专门的空间来处理这些项目。

在Obsidian中，这通常涉及检查日记中未完成的任务。现代的Obsidian[工作流](/zh-cn/posts/automating-your-task-management-with-obsidian-tasks-plugin/)没有使用手动复制粘贴，而是使用查询来自动汇总过去七天中未完成的任务。这确保了没有遗漏，并节省了大量的手动劳动。

### 反思阶段

反思需要客观地回顾过去。模板的这一部分侧重于定性评估。它会针对哪些进展顺利、哪些失败了以及出现了哪些摩擦点提出针对性的问题。

有效的反思[模板](/zh-cn/posts/advanced-obsidian-templates-for-literature-review-matrix/)避免使用诸如“我这周过得怎么样？”这样宽泛的问题。相反，它们使用具体的提示词：
* 本周什么让我充满能量？
* 什么消耗了我的能量？
* 我忽视了哪个目标，为什么？

这个阶段对于行为纠正至关重要。通过识别摩擦模式，你可以为下周调整你的环境或[工作流](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)。

### 计划阶段

计划是具有前瞻性的部分。它将重点从分析转移到执行。一个强大的计划部分会迫使你分清主次。与其创建一个庞大的待办事项列表，该模板限制你只能确定少数核心目标。

使用“Top 3”等方法——你承诺本周只实现三个主要结果——可以创造约束并集中注意力。计划阶段还涉及将这些优先事项安排到特定的时间块中，将意图转化为[日历](/zh-cn/posts/obsidian-full-calendar-plugin-review/)事件。

## 设置Obsidian基础设施

为了最大限度地发挥每周模板的效果，必须配置特定的核心插件和社区插件。虽然模板的文本是静态的，但其功能依赖于Obsidian的生态系统。

### 必需的社区插件

为了让此模板自动运行，请安装并启用以下插件：

1. **[Periodic Notes](/zh-cn/posts/obsidian-periodic-notes-plugin-setup-for-annual-reviews/)：** 这是基于时间的笔记的引擎。它取代了核心的Daily Notes插件，并添加了对每周、每月和每年笔记的原生支持。你需要将其配置为指向你指定的`Templates`文件夹，并将输出目标设置为`Periodic/Weekly`文件夹。
2. **[Templater](/zh-cn/posts/templater-plugin-tutorial-for-obsidian-power-users/)：** 核心的Templates插件不足以支持高级工作流。Templater允许你使用动态变量（例如自动计算当前周的日期）并在创建笔记时执行内部脚本。
3. **Dataview：** 该插件将你的Obsidian库转变为一个[数据库](/zh-cn/posts/obsidian-bases-native-update-review-2026/)。它允许模板自动查询并显示与当前周相关的任务、习惯和笔记。
4. **Calendar：** 虽然是可选的，但Calendar插件在侧边栏中提供了一个可视化界面，通过点击周数即可轻松创建和在每周笔记之间导航。

### 配置Templater变量

Templater对于在创建每周笔记时生成正确的日期至关重要。确保Templater设置为在创建新文件时触发。模板将使用类似`<% tp.date.now("YYYY-[W]ww") %>`的Templater标签来自动为笔记添加标题，并计算本周的开始和结束日期，而无需手动输入数据。

## 完整的每周反思与计划模板

以下是最佳每周模板的原始Markdown代码。复制此代码块并将其作为新文件保存在你指定的Templates文件夹中（例如，`Template - Weekly Note.md`）。

```markdown
---
type: weekly-note
week: <% tp.date.now("gggg-[W]ww") %>
start_date: <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "gggg-[W]ww") %>
end_date: <% tp.date.now("YYYY-MM-DD", 6, tp.file.title, "gggg-[W]ww") %>
tags: [review/weekly]
---

# 第 <% tp.date.now("ww, gggg") %> 周

[[<% tp.date.now("gggg-[W]ww", -7, tp.file.title, "gggg-[W]ww") %>|← 上一周]] | [[<% tp.date.now("gggg-[W]ww", 7, tp.file.title, "gggg-[W]ww") %>|下一周 →]]

## 📥 1. 收集与处理
*在反思前清空大脑工作区。*

- [ ] 处理实体收件箱和笔记本
- [ ] 整理Obsidian Inbox文件夹
- [ ] 将收件箱处理至零
- [ ] 回顾上周日历
- [ ] 查看未来两周日程

## 🪞 2. 反思
*客观地回顾这一周。*

### 指标与习惯
```dataview
TABLE sleep as "Sleep", workout as "Workout", reading as "Reading"
FROM "Periodic/Daily"
WHERE file.day >= date(<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "gggg-[W]ww") %>) AND file.day <= date(<% tp.date.now("YYYY-MM-DD", 6, tp.file.title, "gggg-[W]ww") %>)
SORT file.day ASC
```

### 拆解分析
**胜利（什么进展顺利？）**
- 

**阻力（什么很困难或让人分心？）**
- 

**学习（我发现了什么？）**
- 

## 📋 3. 任务分类
*审查未完成的事务。*

### 本周未完成任务
```dataview
TASK
FROM "Periodic/Daily"
WHERE file.day >= date(<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "gggg-[W]ww") %>) AND file.day <= date(<% tp.date.now("YYYY-MM-DD", 6, tp.file.title, "gggg-[W]ww") %>)
AND !completed
```
*（行动：立即完成它们，安排日程，或将它们删除。）*

## 🎯 4. 计划
*明确下周的重点。*

### 三大优先级
1. [ ] 
2. [ ] 
3. [ ] 

### 次要任务
- [ ] 
- [ ] 

## 📝 笔记与头脑风暴
*本周任何零散的想法。*
- 

```

## 模板功能拆解

上面提供的模板使用了多项高级功能以最小化阻力。了解这些组件的工作原理能让你更有效地修改它们。

### YAML Frontmatter 与 Templater 逻辑

被 `---` 包围的顶部部分是 frontmatter（前言）。它存储了关于笔记的[元数据](/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/)。Templater语法（`<% ... %>`）根据周数计算准确的开始和结束日期。

例如，`start_date: <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "gggg-[W]ww") %>` 确定了当前周的星期一。这个元数据至关重要，因为Dataview会使用这些确切的日期来提取正确的日记。

### 自动导航

顶部的链接（`← 上一周 | 下一周 →`）使用Templater自动生成指向上一周和下一周笔记的链接。这创造了一条不间断的复盘链，让你无需在文件夹中搜索即可轻松浏览你的历史记录。

### Dataview 习惯追踪集成

“指标与习惯”部分利用了Dataview查询。它假设你正在日记的frontmatter中追踪变量（例如，`sleep: 7`, `workout: true`, `reading: 30`）。

该查询会查找你的日记文件夹（`FROM "Periodic/Daily"`），过滤出在特定星期的开始和结束日期内创建的笔记，并呈现一个整洁的习惯表格。这种可视化呈现能在反思阶段提供即时反馈，而无需你手动计算平均值。

### 未完成任务汇总

“任务分类”部分使用Dataview任务查询来查找本周在日记中创建的所有未完成任务（`!completed`）。这是最终的安全网。与其打开七篇不同的日记去看看遗漏了什么，查询将它们全部呈现在同一个地方。在复盘期间，你可以做出决定：立即执行任务，将其迁移到项目笔记中，或者彻底删除它。

## 每周计划中的常见陷阱

实施Obsidian每周反思与计划模板仅仅是第一步。保持这个习惯需要避免常见的失败点。

### 过度计划本周

最常见的错误是将计划部分视为愿望清单。如果你在优先事项下划列了15个任务，这个系统就会失去价值。约束驱动执行。严格遵守“三大优先级”的限制。如果你在周三前完成了这三项任务，你可以从积压清单中提取任务，但不要在周日复盘时分散你的注意力。

### 跳过收集阶段

人们往往容易跳过处理收件箱，直接开始计划下一周。如果你不处理那些未闭环的事项，每周复盘就只是在一个混乱的基础上建立计划。由此产生的阻力最终会导致你放弃这个系统。在设定新目标之前，强迫自己清空Obsidian收件箱、电子邮件和实体笔记。

### 忽视数据分析

如果你的Dataview习惯表格一致显示你未能达到锻炼目标，反思阶段就必须解决这个问题。不要只是看看数据，要利用它。如果一个习惯连续三周失败，那么要么是目标不切实际，要么是开始的阻力太大。使用“阻力”部分记录该指标失败的*原因*，并相应地调整你的环境。

## 为你的工作流定制模板

Obsidian最大的优势在于模块化。一旦你理解了基础模板，你就应该对其进行修改，以适应你特定的职业或个人需求。

如果你是一名学生，你可能会添加一个Dataview查询，提取过去一周所有带有 `#lecture` 标签的笔记，以确保你已复习了所有的课程材料。如果你管理一个团队，你可能会添加一个部分来列出直接下属的阻碍因素，或者追踪特定的项目里程碑。

要追踪不同的习惯，只需更改Dataview表格查询中的变量即可。确保日记frontmatter中的键（例如，`meditation`, `water_intake`）与每周模板中 `TABLE` 命令定义的列相匹配。

## 将每周笔记与每月和每年复盘整合

每周模板并不是孤立存在的。它融入了更大层级的周期性笔记体系中。

当你进行每月复盘时，你不需要重新阅读每一篇日记。相反，你的每月模板应该查询并总结你的四篇每周笔记。通过在每周的层面上持续记录你的“胜利”、“阻力”和“学习”，你的每月和每年复盘将成为一种模式识别的练习，而不是繁重的数据录入工作。

通过实施这个Obsidian每周反思与计划模板，你可以将你的库从一个静态的笔记库转变为一个活跃的生活操作系统。它强制执行纪律，使复盘中繁琐的环节自动化，并使你的日常行动与长期目标保持一致。

## 常见问题解答

### 我如何自动化在Obsidian中创建每周笔记？
安装Periodic Notes和Templater社区插件。在Periodic Notes设置中，启用Weekly Notes（每周笔记），指定你的模板文件，并设置目标文件夹。将Templater配置为“Trigger Templater on new file creation”（在创建新文件时触发Templater），这样在生成笔记时日期变量就会自动计算。

### 进行每周反思的最佳日期是哪一天？
对于大多数专业人士来说，周日下午或晚上通常是最佳选择，因为它在周末和即将到来的工作周之间提供了一个清晰的界限。或者，如果你更喜欢在周末开始前结束工作任务，并将工作计划与个人计划分开，周五下午也是一个不错的选择。

### 我如何将日记链接到我的每周计划模板？
你不需要手动链接它们。通过使用标准的ISO日历格式（日记使用YYYY-MM-DD，每周笔记使用YYYY-[W]ww），每周模板内的Dataview查询可以自动过滤并显示日期属于该特定周的日记信息。

### 我可以在Obsidian移动端使用此模板吗？
可以。Templater和Dataview在Obsidian移动应用上均能正常运行。确保你的插件和模板文件夹通过Obsidian Sync、iCloud或其他同步服务进行了同步。你可以完全使用平板电脑或手机，通过相同的自动查询来运行你的每周复盘。

### 为什么我的Dataview任务查询显示零个结果？
请确保三件事：第一，你实际上在日记中创建了任务（使用 `- [ ]`）；第二，你的日记保存在查询指定的文件夹中（例如，`"Periodic/Daily"`）；第三，你日记标题中的日期格式必须严格匹配 `file.day` 变量所期望的 `YYYY-MM-DD` 格式。