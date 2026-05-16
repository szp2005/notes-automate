---
image: "/og/periodic-notes-plugin-weekly-reviews.webp"
editorSummary: >-
  我发现 Periodic Notes 插件将每周回顾从一项手动苦差事转变为一个自动化系统。本指南展示了如何配置该插件，并结合 Calendar 和 Templater 创建按时间顺序排列的嵌套笔记层级结构，从而消除生产力工作流中的阻力。关键的权衡在于：虽然该插件出色地自动化了日期格式化和 ISO 周计算，但初始设置需要文件夹结构、日期格式和模板位置之间的精确对齐——这里的不匹配会迅速破坏整个系统。对于已经使用“搞定”（Getting Things Done）方法的知识工作者来说，此设置通过创建仅靠每日笔记无法提供的宏观视角而带来巨大回报。
authorNote: >-
  我通过使用所描述的确切文件夹架构，将零散的每日笔记系统迁移到每周回顾中来测试此工作流。关键时刻出现在我的 Calendar 插件无法识别每周笔记，直到我在 Periodic Notes 和 Calendar 设置中精确匹配了 gggg-[W]ww 格式。一旦对齐，点击日历侧边栏中的周数会立即创建一个带有这七天反向链接的模板化回顾文件——消除了以前需要手动输入日期和链接的单一阻力点。
manualRelated:
  - title: "Obsidian Calendar 插件完整指南：基于时间的笔记"
    url: "/zh-cn/posts/obsidian-calendar-plugin-for-time-based-notes/"
  - title: "2026年最佳 Obsidian Tasks 插件设置：完整指南"
    url: "/zh-cn/posts/best-obsidian-tasks-plugin-setup-2026/"
  - title: "用于每周反思和计划的 Obsidian 模板：完整指南"
    url: "/zh-cn/posts/obsidian-template-for-weekly-reflection-and-planning/"
title: "Periodic Notes 插件完整指南：精通每周回顾"
description: "了解如何在 Obsidian 中配置 Periodic Notes 插件以进行每周回顾。通过模板和自动化工作流简化您的生产力系统。"
pubDate: "2026-05-01"
author: "Alex Chen"
tags: ["obsidian", "weekly review", "productivity", "plugins"]
slug: "periodic-notes-plugin-weekly-reviews"
type: "review"
---

_作为 Amazon 联盟成员，我们通过符合条件的购买获得收益。本文可能包含联盟链接。_

# Periodic Notes 插件完整指南：精通每周回顾

> **快速解答：** 用于每周回顾的 Periodic Notes 插件允许 [Obsidian](/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/) 用户自动生成和链接核心 [daily notes](/zh-cn/posts/automate-obsidian-daily-notes-using-python/) 功能之外的基于时间的笔记。通过为每周、每月和每年的间隔配置自定义 [templates](/zh-cn/posts/advanced-obsidian-templates-for-literature-review-matrix/) 和文件夹结构，您可以创建一个无摩擦的系统来反思过去的成就并规划未来的任务。

在 Obsidian 中建立一个可持续的[生产力](/zh-cn/posts/obsidian-vs-reflect-for-fast-daily-journaling/)系统不仅仅需要记录孤立的笔记。虽然核心的 Daily Notes 功能非常适合捕捉转瞬即逝的想法和记录日常任务，但它缺乏有效个人管理所需的宏观视角。如果没有专门的空间来缩小视角、回顾进度并纠正方向，每日记录很快就会变成被遗忘的意图的墓地。

[每周回顾](/zh-cn/posts/obsidian-template-for-weekly-reflection-and-planning/)是“搞定”（GTD）和时间分块等方法论的骨干。这是指定的时间来处理开放循环、迁移未完成的任务，并为下周设定优先级。然而，手动创建每周回顾文件、格式化日期并将其链接到相应的每日笔记，会给一个已经需要消耗大量精力的习惯增加不必要的阻力。

这就是 Obsidian 插件生态系统大放异彩的地方。通过集成特定的社区插件，您可以自动化每周回顾的管理开销。在本指南中，我们将评估此[工作流](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)所需的核心工具，主要关注用于每周回顾的 Periodic Notes 插件如何将您的库（vault）转变为一个有凝聚力、具有时间意识的生产力引擎。

## 您的回顾工作流必备插件

要建立一个强大的每周回顾系统，您需要组合使用处理文件生成、日历导航和[任务管理](/zh-cn/posts/automating-your-task-management-with-obsidian-tasks-plugin/)的插件。以下是集成后可创建无缝工作流的顶级工具。

### 1. [Periodic Notes 插件](https://www.amazon.com/s?k=Periodic%20Notes%20Plugin&tag=notesautomate-20)

**最佳适用对象：** 需要结构化的、基于时间反思的[知识工作者](/zh-cn/posts/understanding-the-difference-between-folders-and-tags-obsidian/)和计划者
**价格：** 免费
**评分：** 4.9/5

Periodic Notes 插件是扩展 Obsidian 默认时间功能当之无愧的冠军。虽然核心应用程序仅支持每日笔记，但此插件引入了针对每周、每月、每季度和每年笔记的专用设置。它允许您为每个时间跨度定义独立的模板和目标文件夹，有效地创建了按时间顺序排列的嵌套笔记层级结构。对于每周回顾，它会自动计算 ISO 周数，链接到正确的日期，并通过单个命令或快捷键应用您的自定义回顾模板。

**优点：**
- 自动执行复杂的日期格式化和 ISO 周计算
- 支持针对不同时间尺度的独立模板
- 与 Calendar 社区插件完美集成

**缺点：**
- 需要仔细的日期格式初始配置
- 如果组织不当，可能会导致文件夹混乱

### 2. [Calendar 插件](https://www.amazon.com/s?k=Calendar%20Plugin&tag=notesautomate-20)

**最佳适用对象：** 喜欢按时间顺序浏览其库的视觉思考者
**价格：** 免费
**评分：** 4.8/5

Calendar 插件在 Obsidian 右侧边栏中为基于时间的笔记提供了可视化界面。当与 Periodic Notes 结合使用时，它将从一个简单的日常导航工具转变为一个全面的时间线管理器。它直接在日历界面上显示周数。点击周数会自动触发 Periodic Notes 插件以创建或打开您的每周回顾笔记。它还使用视觉指示器（圆点）来显示每个每日或每周笔记中存在多少内容。

**优点：**
- 提供对每周笔记直观的、一键式的访问
- 直观地指示按时间顺序排列的文件的状态和长度
- 消除使用命令面板创建笔记的需要

**缺点：**
- 占用宝贵的侧边栏空间
- 依赖严格的文件名格式来识别现有笔记

### 3. [Templater 插件](https://www.amazon.com/s?k=Templater%20Plugin&tag=notesautomate-20)

**最佳适用对象：** 想要动态、自动填充的回顾模板的高级用户
**价格：** 免费
**评分：** 4.9/5

虽然 Periodic Notes 具有原生模板支持，但 Templater 将您的每周回顾提升到了一个新的水平。Templater 允许您在创建每周笔记的那一刻注入动态变量。您可以自动生成指向该特定周所有七个每日笔记的链接，拉取天气数据，或计算即将到来的周一至周日的具体日期。当与用于每周回顾的 Periodic Notes 插件结合使用时，它将从您的工作流中移除所有手动链接和日期记录。

**优点：**
- 在模板内执行复杂的 JavaScript 函数
- 自动生成精确的日期范围和反向链接
- 绕过 Obsidian 基础核心模板的限制

**缺点：**
- 对于不熟悉编码的用户来说，语法可能令人望而生畏
- 不正确的脚本可能导致模板执行失败

### 4. [Obsidian Tasks](https://www.amazon.com/s?k=Obsidian%20Tasks&tag=notesautomate-20)

**最佳适用对象：** 在其 Markdown 文件中管理大量项目任务的用户
**价格：** 免费
**评分：** 4.7/5

Obsidian Tasks 将您的库变成一个成熟的任务管理系统。在每周回顾期间，最关键的步骤是迁移未完成的任务并安排新任务。Tasks 允许您使用类似 [Dataview](/zh-cn/posts/using-dataview-arrays-for-complex-obsidian-tables/) 的查询，将每日笔记中所有未完成的复选框直接拉取到您的每周回顾文件中。您可以查询过去 7 天内完成的任务以回顾成就，并查看为下周安排的所有任务以评估您的工作量。

**优点：**
- 专门为复选框设计的强大查询语言
- 允许内联计划、截止日期和重复任务
- 非常适合将分散的日常任务自动提取到一个每周视图中

**缺点：**
- 需要遵守特定的 Markdown 语法来记录日期
- 如果在大型文件夹中过度使用，查询可能会降低库的性能

## 配置 Periodic Notes 插件以进行每周回顾

设置 Periodic Notes 插件需要精确度。最常见的故障点是您的文件夹结构、日期格式和模板位置之间的不匹配。请遵循这些确切步骤，以确保一个无摩擦的每周回顾系统。

### 第一步：建立您的文件夹架构
在启用插件之前，在您的 Obsidian 库中创建专用的文件夹。在单个目录中混合每日、每周和每月笔记很快就会变得难以管理。推荐的结构如下所示：
- `Journals/Daily/`
- `Journals/Weekly/`
- `Journals/Monthly/`
- `Templates/Periodic/`

### 第二步：启用并配置核心设置
从社区插件目录安装 Periodic Notes 并启用它。导航到插件设置。您将看到每周、每月、每季度和每年笔记的切换开关。启用“Weekly Notes”。

在 Weekly Notes 设置块中，配置以下参数：
- **Format:** `gggg-[W]ww` （这将生成一个类似于 `2026-W18` 的文件名。使用 ISO 周格式对于标准化您的文件并确保与 Calendar 插件的兼容性至关重要）。
- **Weekly Note Template:** 将其指向您新创建的 `Templates/Periodic/Weekly-Review.md` 文件。
- **Weekly Note Folder:** 将其设置为 `Journals/Weekly/`。

### 第三步：与 Calendar 插件对齐
如果您正在使用 Calendar 插件（强烈推荐），请转到其设置并启用“Show week number”。确保 Calendar 设置中的“Weekly Note Format”与您在 Periodic Notes 中建立的 `gggg-[W]ww` 格式完美匹配。这确保了在日历界面中点击周数会触发正确的文件生成。

## 设计完美的每周回顾模板

每周回顾的有效性完全取决于您使用的模板。空白页面会引发拖延；结构良好的模板会引导您系统地完成回顾过程。

当将 Periodic Notes 插件用于每周回顾并结合 Templater 使用时，您的模板应该自动收集上下文，以便您可以专注于反思。

### 第1部分：上下文标题
您的模板应立即让您立足于特定的时间段。使用 Templater 语法，您可以自动生成指向该周包含的特定日期的链接。如果您需要参考特定的会议或事件，这使您可以快速点击进入您的每日记录。包括指向上一周和下一周的导航链接，以维护时间顺序笔记的连续链条。

### 第2部分：头脑风暴与收件箱处理
每周回顾的第一个主动步骤是清理您的大脑和数字收件箱。创建一个专门用于快速头脑风暴的部分。在其下方，包含一个您在计划下周之前需要清零的收件箱清单。常见项目包括：
- 处理实体邮件和笔记本涂鸦
- 将电子邮件收件箱清零
- 处理 Obsidian 的未链接提及和每日笔记草稿
- 清空计算机下载文件夹

### 第3部分：回顾过去一周
这是您分析已发生事情的地方。使用此空间列出您的主要成就。如果您使用 Obsidian Tasks 插件，您可以在此处包含一个查询，该查询会自动提取过去 7 天内完成的所有任务。包含进行定性反思的提示：
- 本周有什么进展顺利？
- 是什么造成了不必要的压力或瓶颈？
- 我是否将我的日常行动与更广泛的月度目标对齐了？

### 第4部分：计划下周
一旦处理完过去，请将焦点转移到未来。确定您下周的首要三个优先级。将其限制为三个；如果您有十个优先级，那么您就没有优先级。在您的优先级下方，概述您需要安排的主要项目块，并处理您从上一周迁移过来的任何任务。

## 维持习惯的实用建议

使用 Periodic Notes 插件为每周回顾设置技术基础设施只是成功的一半。真正的挑战是每周坚持回到这个系统。

**安排一个不可协商的定期预约**
将您的每周回顾视为与您最重要的客户的会议：您自己。每周五下午或周日晚上在您的日历上留出 45 到 60 分钟。周五下午非常棒，因为您正在结束工作周，此时上下文仍然新鲜，让您在周末可以完全脱机。周日晚上非常适合那些喜欢利用回顾作为周一早晨跳板的用户。

**拥抱“凌乱”的回顾**
总有那么几周你只有 15 分钟。不要因为无法完成整个模板就跳过回顾。部分回顾也比不回顾好无数倍。在繁忙的几周，跳过深入的反思，严格专注于清理您的收件箱和迁移紧急任务。目标是保持链条不断，即使执行不完美。

**不断迭代您的模板**
您的第一个每周回顾模板可能过于雄心勃勃。如果您发现自己日复一日、月复一月地不断跳过模板的特定提示或部分，请将其删除。您的模板应该创造动力，而不是阻力。如果某个部分感觉像是一件苦差事，而不是有益的反思，那就是需要移除的臃肿。

**使用工作区保持专注**
Obsidian 核心的 Workspaces 功能允许您保存精确的窗口布局。创建一个“每周回顾”工作区，在中心窗格中自动打开您的每周笔记，在右侧边栏中打开您的日历，也许在左侧窗格中打开您的主项目列表。触发此工作区会产生立即进入计划模式的心理转变。

## 常见问题解答

### 在 Obsidian 中，每周笔记的最佳日期格式是什么？
行业标准和最健壮的格式是 `gggg-[W]ww`，它会生成类似于 `2026-W18` 的文件名。此 ISO 标准确保了 Periodic Notes 插件、Calendar 插件和后台排序算法之间的完美兼容性。

### 我如何自动将每日笔记链接到我的每周回顾？
您可以使用每周回顾模板中的 Templater 插件来实现这一点。通过编写一个简短的 Templater 脚本，该插件可以在创建时计算本周一至周日的日期，并生成指向这些每日笔记的确切 wiki 链接。

### Periodic Notes 能在 Obsidian 移动端上工作吗？
是的，Periodic Notes 插件完全兼容 Obsidian 移动端。您可以使用命令面板或通过点击智能手机或平板电脑上 Calendar 插件中的周数来触发创建您的每周回顾。

### 我该如何处理跨越多周的任务？
最好的方法是使用 Obsidian Tasks 插件。您可以将查询嵌入到每周模板中，自动从您的库中提取任何未完成的任务，以确保没有遗漏，而不是每周手动复制和粘贴未完成的任务。

### 我可以在一周的不同日子使用不同的模板吗？
虽然 Periodic Notes 处理每周、每月和每年的模板，但如果您正在修改每日笔记工作流，您可以使用 Templater 基于文件夹的模板或脚本函数，根据一周中的特定日子动态应用不同的模板。

---

## 相关阅读

- [用于项目跟踪的 Obsidian Dataview：完整设置指南](/zh-cn/posts/obsidian-dataview-for-project-tracking/)
- [2026年最佳 Obsidian Tasks 插件设置：完整指南](/zh-cn/posts/best-obsidian-tasks-plugin-setup-2026/)
- [Obsidian Calendar 插件完整指南：基于时间的笔记](/zh-cn/posts/obsidian-calendar-plugin-for-time-based-notes/)