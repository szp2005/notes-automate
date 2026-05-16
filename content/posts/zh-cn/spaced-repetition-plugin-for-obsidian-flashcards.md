---
image: "/og/spaced-repetition-plugin-for-obsidian-flashcards.webp"
editorSummary: >-
  Obsidian 的 Spaced Repetition 插件解决了困扰 Anki 等传统学习工具的上下文切换问题，它将抽认卡（flashcards）和源材料保存在一个统一的环境中。我发现该插件的内联语法——使用 :: 表示基础卡片，使用 == 表示 cloze deletions——让你无需离开你的 vault 就能创建和复习卡片。代价是调度元数据作为 HTML 注释附加在你的 markdown 文件中，这需要你为了便携性而接受纯文本的一些杂乱。通过掌握层级标签并选择合适的 SM-2 算法设置，你可以构建一个可扩展的牌组（deck）系统，它与你的知识库共同成长，同时保持你真正学习所需的上下文。
authorNote: >-
  我在不同文件夹中管理生物和编程牌组（decks）时测试了这个设置。当我需要在考试前针对特定主题进行强化训练，同时又要复习更广泛的材料时，层级标签功能（#cs/networking/tcpip）被证明是必不可少的。我早期遇到的一个陷阱：将默认的 base ease 保持在 250 会导致卡片再次出现的频率过低，所以我把它降到了 220。真正的优势在于直接在上下文中复习卡片——当我忘记答案时，周围的段落已经可见，这让我可以立即完善卡片的措辞，而不是在两个应用程序之间来回切换。
manualRelated:
  - title: "在 Obsidian 中使用 Mermaid 图表进行可视化笔记：完整指南"
    url: "/zh-cn/posts/using-mermaid-diagrams-for-visual-note-taking-obsidian/"
  - title: "使用 Obsidian 进行长期常青笔记管理的完整指南：构建终身系统"
    url: "/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/"
  - title: "Periodic Notes 插件完整指南：掌握每周回顾"
    url: "/zh-cn/posts/periodic-notes-plugin-weekly-reviews/"
title: "Obsidian 抽认卡 Spaced Repetition 插件：完整设置指南"
description: "掌握主动回忆并将 Obsidian 的 Spaced Repetition 插件集成到你的工作流中。学习语法、最佳算法和牌组管理。"
pubDate: "2026-05-01"
author: "Alex Chen"
tags: ["obsidian", "spaced repetition", "flashcards", "study tools"]
slug: "spaced-repetition-plugin-for-obsidian-flashcards"
type: "informational"
---

# Obsidian 抽认卡 Spaced Repetition 插件：完整设置指南

> **快速解答：** Obsidian 抽认卡（flashcards）的 Spaced Repetition 插件将主动回忆直接集成到你的 markdown 笔记中。通过使用特定语法（如 `::` 或 `==`）内联创建抽认卡，你可以在算法确定的时间间隔内复习概念，而无需离开你的 vault，从而确保知识的长期保留。

当管理不断增长的笔记库时，获取信息只完成了成功的一半。随着时间的推移，记住并保留这些知识需要主动参与。对于使用 Obsidian 的[学生](/zh-cn/posts/organizing-complex-academic-projects-in-an-obsidian-vault/)、[研究人员](/zh-cn/posts/obsidian-vs-heptabase-for-visual-research-workflows/)和终身学习者来说，依赖被动阅读通常会导致记忆的自然衰退——即遗忘曲线——在写下有价值的见解几周后就将其遗忘殆尽。

将主动回忆集成到你的个人[知识管理](/zh-cn/posts/using-obsidian-for-long-term-evergreen-note-management/)（PKM）系统中对于防止这种知识流失至关重要。虽然像 Anki 或 SuperMemo 这样的专用应用程序几十年来一直主导着抽认卡领域，但它们迫使你导出笔记，并切断了你的原始想法与学习材料之间的联系。

Obsidian 的 Spaced Repetition 插件将任何标准的 markdown 笔记转变为互动的学习会话。它允许你在现有的 vault 中无缝地创建、管理和复习抽认卡。通过将你的学习材料和原始上下文保存在完全相同的环境中，你消除了上下文切换的摩擦，并确保你的记忆提示始终扎根于你更广泛的研究中。本指南涵盖了完全在 Obsidian 内部构建强大学习系统所需的安装、语法、算法配置和实用工作流。

## Markdown 中间隔重复的机制

在配置软件之前，了解 Obsidian 在结构上如何处理间隔重复会有所帮助。与将卡片存储在专有[数据库](/zh-cn/posts/obsidian-bases-native-update-review-2026/)中的 Anki 不同，Obsidian Spaced Repetition 插件使用纯文本解析。它读取你的 markdown 文件，寻找特定的字符触发器，并将周围的文本视为卡片的正面和背面。

当你复习一张卡片并对你的表现进行评分（Hard、Good 或 Easy）时，该插件会在你的 markdown 文件中的抽认卡文本正下方附加一个包含调度数据的不可见 HTML 注释。这意味着你的复习历史作为纯文本[元数据](/zh-cn/posts/explaining-obsidian-properties-for-advanced-metadata-schemas/)存储在你的笔记中，使你的 vault 保持完全的面向未来和便携性。

### 分离式工具的问题

许多用户在开始他们的 PKM 之旅时，会在 Obsidian 中撰写大量笔记，然后将基本事实复制到 Anki 中。这造成了一场维护噩梦。如果一个概念更新了，或者你对某个主题的理解加深了，你必须在两个不同的应用程序中编辑信息。此外，当在 Anki 中复习一张困难的卡片时，你缺乏周围的上下文——即在特定事实之前和之后的思考段落。

### 插件如何解决上下文切换

通过使用 Obsidian 抽认卡的 Spaced Repetition 插件，卡片和上下文是合二为一的。如果你忘记了提示的答案，你实际上已经在查看源文档。你可以立即阅读周围的段落，更新卡片的措辞以使其更清晰，并继续你的复习会话，而无需切换窗口。这种统一的[工作流](/zh-cn/posts/streamlining-your-daily-note-workflow-for-better-productivity/)大大减少了管理卡片所花费的时间，并增加了实际学习的时间。

## 安装和配置环境

设置系统需要安装[社区](/zh-cn/posts/how-to-install-community-plugins-in-obsidian-mobile/)插件并调整几个默认参数以符合你的学习习惯。

要安装该工具，请打开你的 Obsidian 设置，导航到 Community [Plugins](/zh-cn/posts/periodic-notes-plugin-weekly-reviews/)，如果你还没有禁用 Safe Mode 则将其禁用，并搜索 st3v3nmw 编写的“Spaced Repetition”。安装并启用该插件。激活后，你的左侧边栏（ribbon）中将出现一个新图标，并且将提供一个新的设置选项卡。

### 首先需要调整的核心设置

默认设置可以使用，但优化它们将显着改善你的体验。导航到插件设置并查看“Flashcards”部分。

首先，确定你的 **Tags**。该插件使用标签将抽认卡分组到牌组（decks）中。默认情况下，它会查找 `#flashcards`。如果你学习多个科目，你可能更喜欢特定标签，例如 `#biology`、`#history` 或 `#programming/python`。你可以在此处列出多个标签，用逗号或空格分隔。

接下来，检查 **Save scheduling comment on the same line** 选项。默认情况下，该插件会在你的抽认卡正下方的行上添加调度数据（HTML 注释）。如果你更喜欢更简洁的 markdown 外观，并且你的段落很短，你可以开启此选项，将数据附加到同一行的末尾。

### 选择你的间隔重复算法

决定你何时再次看到卡片的底层数学逻辑至关重要。该插件目前使用 SM-2 算法的变体（与 Anki 中默认使用的基础数学相同），并提供调整乘数的选项。

在 **Algorithm** 下的设置中，你会找到 base ease 和 interval modifiers 的选项。
- **Base ease（默认 250）：** 这决定了当你将卡片标记为“Good”时间隔增长的速度。250 的值意味着下一个间隔将是上一个间隔的 2.5 倍。如果你发现自己经常忘记卡片，请将其减少到 200 或 220。
- **Maximum interval：** 默认情况下，这可能设置为 36500 天。你可能希望将其限制为 3650 天（10 年）或更短，具体取决于你希望多频繁地强制复习根深蒂固的知识。

## 语法：内联创建抽认卡

这个插件的真正强大之处在于它的语法，它允许你有机地将抽认卡交织在你的写作中。你可以创建三种主要类型的卡片。

### 单面基础卡片

最常见的抽认卡格式是直接的问答。在 Obsidian 中，这是通过使用双冒号 `::` 分隔符来实现的。

```markdown
What is the powerhouse of the cell? :: Mitochondria
```

当解析器看到这个时，它会将 `::` 之前的文本视为卡片的正面，将之后的文本视为背面。你可以将它放在文档中的任何位置，只要文件中某处存在标签（例如 `#flashcards`）。

### 多行卡片

通常，一个概念需要不止一句话来解释。对于较长的答案，你在单独的行上使用 `?` 字符来分隔正面和背面。

```markdown
Explain the process of photosynthesis.
?
Photosynthesis is the process used by plants, algae, and certain bacteria to harness energy from sunlight and turn it into chemical energy.
It involves the absorption of light by chlorophyll, which drives the synthesis of organic compounds from carbon dioxide and water.
```

这种格式非常适合算法分解、短文或多步过程。

### 用于上下文学习的 Cloze Deletion

Cloze deletions 本质上是填空卡。它们在记忆语法、词汇或较大句子中的特定日期方面非常有效。该插件使用双等号 `==` 来表示空白区域。

```markdown
The Declaration of Independence was signed in the year ==1776==.
```

在复习期间，屏幕将显示 "The Declaration of Independence was signed in the year [...]"。当你揭示答案时，会出现 "1776"。你可以在单个文本块中拥有多个 cloze deletions；该插件将自动为每个空白生成一个单独的抽认卡，一次测试你一条信息。

## 管理牌组和架构

随着你的 vault 增长到数千条笔记，将所有内容都扔进一个庞大的复习队列中会变得效率低下。你需要一个隔离科目的系统。Obsidian 抽认卡的 Spaced Repetition 插件主要通过层级标签和文件夹结构来处理牌组（deck）管理。

### 使用层级标签进行组织

Obsidian 支持嵌套标签，该插件完美地读取了这些标签。如果你正在学习计算机科学，你可以像这样构建你的标签：

- `#cs`
- `#cs/algorithms`
- `#cs/networking`
- `#cs/networking/tcpip`

在插件设置中，如果你将 `#cs` 添加到你跟踪的标签中，复习面板将自动生成一个层级牌组结构。你可以点击总体的 `#cs` 牌组来复习所有计算机科学卡片，或者深入研究 `#cs/networking/tcpip` 来只为即将到来的考试学习协议。这种灵活性使你可以执行广泛的、交错的复习或高度专注的突击会话。

### 基于文件夹的牌组

如果你更喜欢严格的分类而不是标签，该插件还支持基于文件夹的抽认卡。在设置中，你可以定义特定目录（例如，`University/Semester1/Biology`）作为你的牌组。在这些文件夹中的 markdown 文件内找到的任何抽认卡语法都将被路由到该特定牌组，无论是否存在标签。如果你在 vault 结构中保持严格的划分，这尤其有用。

## 复习流程和工作流

设置卡片是基础工作；真正的学习发生在复习阶段。

点击 ribbon 中的 Spaced Repetition 图标会打开复习窗格。你会看到你的牌组列表，按照“New”（从未复习过）、“Learning”（处于记忆的早期阶段）和“To Review”（到期需要重复）的卡片进行分类。

### 执行每日复习程序

一致性是间隔重复中唯一重要的指标。错过几天会导致到期的卡片堆积，造成令人沮丧的积压。

当你点击一个牌组时，插件会显示第一张卡片的正面。按空格键或点击“Show Answer”以揭示背面。然后会为你提供三个评分选项：
- **Hard：** 你很难记住答案，或者只答对了一部分。该卡片很快就会再次出现（通常在同一天或第二天）。
- **Good：** 你用正常的努力记住了答案。间隔将正常增加。
- **Easy：** 答案显而易见。间隔将显著增加。

你可以使用键盘快捷键（1、2 和 3）快速对卡片进行评分。一个熟练的用户可以在不到 15 分钟内复习 100 到 150 张精心设计的卡片。

### 处理 Leeches（顽固卡片）和困难卡片

“leech” 是你一直失败的抽认卡。在传统的间隔重复系统中，leeches 会消耗你的时间并引起挫败感。

当你在 Obsidian 中识别出一个 leech 时，你拥有明显的优势。因为卡片嵌入在你的笔记中，只需停止复习会话，查看包含该卡片的 markdown 文件，然后重写它即可。失败很少是你的记忆问题；它几乎总是一张写得很差的卡片。将复杂的概念分解为三个更小的、原子的 cloze deletions，或添加一个图像链接（`![[diagram.png]]`）以提供视觉锚点。

## 实用建议：设计有效的抽认卡

软件只会调度卡片；你学习的质量完全取决于你提示的质量。遵循这些原则，以确保你的 Obsidian 抽认卡真正提高你的保留率。

**保持完全原子化。** 
[初学者](/zh-cn/posts/obsidian-vault-structure-digital-gardening-beginners/)最常犯的错误是将整个段落放在卡片的背面。如果一张卡片询问历史事件的四个原因，而你只记得三个，你如何给它评分？Hard？Good？原子化设计规定一张卡片应该准确测试一个事实。与其问“面向对象编程的四个原则是什么？”，不如创建四张单独的卡片，或者为每个原则使用一个 cloze deletion。

**利用块引用和链接。**
你可以将 Obsidian 的内部链接 `[[Note Name]]` 直接放置在抽认卡的正面或背面。如果你忘记了一个概念，卡片的背面可以包含答案*以及*指向该主题的中心枢纽笔记的直接链接。这会将你的复习会话转化为一种导航和巩固你的 vault 结构的方法。

**避免上下文依赖。**
内联书写卡片时，很容易假设周围段落的上下文。例如，如果你在一个名为“Python Dictionaries”的笔记中，写下 `What is the syntax for adding a key? :: dict[key] = value` 是有道理的。然而，三个月后在复习时，你只会看到“What is the syntax for adding a key?”，你不会知道卡片问的是 Python 字典、[JavaScript](/zh-cn/posts/how-to-use-obsidian-templater-user-scripts/) 对象还是 C++ 映射（maps）。始终在提示中明确说明上下文：`In Python, what is the syntax for adding a key to a dictionary?`

**限制每日新卡片。**
在读完一本厚书后创建 200 张抽认卡并尝试在第二天全部学习它们是很诱人的。算法最终会安排同时复习所有这些卡片，造成巨大的复习高峰。将你每天每个牌组的新卡片摄入量限制在 15-30 张。这确保了每天 50-100 张总卡片的可管理、可持续的复习负荷。

## 常见问题

### 我可以在多个设备上同步我的 Spaced Repetition 进度吗？
是的。因为调度数据作为 HTML 注释直接写入你的 markdown 文件中，所以无论你使用什么服务来同步你的 Obsidian vault（Obsidian Sync、iCloud、Git 或第三方云盘），你的复习历史都会自动同步。

### 如何重置抽认卡的复习历史？
要重置卡片，请在你的 markdown 文件中找到它。在卡片下方，你会看到一个类似于 `<!--SR:!2026-05-10,4,250-->` 的 HTML 注释。只需删除整个 HTML 注释字符串即可。在你的下一次会话期间，插件会将该提示视为一张全新的、未复习的卡片。

### 该插件支持图像遮罩（image occlusion）吗？
基础的 Spaced Repetition 插件依赖于文本解析，并非原生支持 Anki 风格的图像遮罩（遮挡图像的某些部分）。要测试自己的图表，你必须依赖标准的 cloze deletions，这些 cloze deletions 指向你嵌入在笔记中图像的带标签的部分，或者使用 Obsidian 专用的图像遮罩插件。

### 如果我重命名或移动包含抽认卡的文件会发生什么？
当文件被移动时，Obsidian 会原生更新内部链接。因为 Spaced Repetition 插件依赖于标签和文件夹路径，将文件移动到不同的文件夹可能会改变该卡片所属的牌组（如果使用基于文件夹的牌组），但附加到卡片本身的调度数据保持完美无缺。

### 如果我改变主意，稍后可以将这些卡片导出到 Anki 吗？
Spaced Repetition 插件本身并非原生支持直接导出。但是，由于你的卡片采用可预测的 markdown 语法（`::` 或 `==`）进行格式化，你可以轻松编写一个简单的 Python 脚本或使用社区构建的正则表达式解析器来提取文本并将其转换为 CSV 文件，然后可以直接将其导入 Anki。

---

## 相关阅读

- [在 Obsidian 中使用 Mermaid 图表进行可视化笔记：完整指南](/zh-cn/posts/using-mermaid-diagrams-for-visual-note-taking-obsidian/)
- [2024 年为什么要在 Obsidian 中追踪习惯？](/zh-cn/posts/best-obsidian-plugins-for-habit-tracking-2024/)
- [2026 年暗黑模式最佳 Obsidian 主题：首选推荐](/zh-cn/posts/best-obsidian-themes-for-dark-mode-2026/)