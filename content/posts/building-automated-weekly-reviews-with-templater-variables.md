---
image: "/og/building-automated-weekly-reviews-with-templater-variables.webp"
title: "Building Automated Weekly Reviews With Templater Variables"
description: "Master building automated weekly reviews with templater variables in Obsidian. Compare essential plugins and implement a frictionless productivity system."
pubDate: "2026-05-07"
author: "Alex Chen"
tags: ["obsidian", "templater", "weekly review", "productivity", "automation"]
slug: "building-automated-weekly-reviews-with-templater-variables"
type: "review"
---

_As an Amazon Associate we earn from qualifying purchases. This post may contain affiliate links._

# Building Automated Weekly Reviews With Templater Variables

> **Quick Answer:** Building automated weekly reviews with templater variables requires combining [Obsidian](/posts/obsidian-vs-reflect-for-fast-daily-journaling/)'s Templater plugin with dynamic date functions (like `<% tp.date.now() %>`) to auto-populate headers, fetch weekly metrics, and roll up daily notes. This eliminates manual data entry, reducing a typical 45-minute weekly review administrative setup to under 2 seconds.

The weekly review is the cornerstone of any reliable personal [knowledge management](/posts/using-obsidian-for-long-term-evergreen-note-management/) system. Yet, for many knowledge workers, the friction of setting up the review—gathering incomplete tasks, finding daily notes, formatting dates, and structuring headers—prevents the review from actually happening. When the administrative overhead of organizing your work takes as long as the reflection itself, the system inevitably breaks down under stress. 

By building automated weekly reviews with templater variables, you shift the burden of organization from your future self to a rigid, programmatic system. Obsidian, combined with the Templater plugin, allows you to execute JavaScript variables the moment a file is created. This means that pressing a single hotkey can generate a fully populated, context-rich review document tailored exactly to the current calendar week.

This guide will break down the exact architecture required to automate your reflection process, review the core tools necessary for the build, and provide practical implementation steps. By understanding how to leverage temporal variables, query injections, and static text generation, you can eliminate the friction of the blank page and focus entirely on the qualitative aspects of your weekly review.

## The Architecture of an Automated Review

An automated weekly review relies on separating static structure from dynamic data. The static structure includes your prompts, reflection questions, and section headers. The dynamic data includes the specific dates of the week, the tasks you completed, the habits you tracked, and the files you modified. 

Templater acts as the bridge between these two domains. When you trigger a weekly review template, the engine parses your Markdown file, identifies specific variables (denoted by the `<% %>` syntax), executes the underlying JavaScript functions, and prints the resulting text permanently into the document. 

Unlike query-based tools that render data visually without altering the underlying text file, Templater variables burn the data into the file. If you ask Templater to print the dates of the past seven days, those specific date strings become permanent text. This distinction is critical for archiving. A weekly review generated in 2026 should remain entirely legible and intact if you open it in 2035, even if the original plugins are no longer active. 

## Essential Plugins for the Weekly Review System

To execute this architecture flawlessly, you need a precise stack of Obsidian plugins. Here are the core tools evaluated specifically for their utility in a weekly review [workflow](/posts/streamlining-your-daily-note-workflow-for-better-productivity/).

### 1. [Templater Plugin](https://www.amazon.com/s?k=Templater%20Plugin&tag=notesautomate-20)

**Best for:** Core template automation and script execution
**Price:** Free
**Rating:** 5/5

Templater replaces Obsidian's native, simplistic template functionality with a robust execution engine. It allows you to run internal functions, execute system commands, and parse JavaScript variables the exact moment a file is created. For a weekly review, it dynamically generates the date ranges, fetches specific daily notes, and sets up your cursor position without any manual typing.

**Pros:**
- Executes complex JavaScript functions directly within notes
- Cursor placement variables save immediate formatting time
- Burns dynamic data into permanent, archival-safe plain text

**Cons:**
- Steep learning curve for users unfamiliar with coding syntax
- Requires strict folder structures to trigger folder [templates](/posts/advanced-obsidian-templates-for-literature-review-matrix/) properly

### 2. [Periodic Notes Plugin](https://www.amazon.com/s?k=Periodic%20Notes%20Plugin&tag=notesautomate-20)

**Best for:** Date-based file management and automated routing
**Price:** Free
**Rating:** 4.8/5

Periodic Notes handles the infrastructure and routing of your weekly review. It defines exactly where daily, weekly, and monthly notes live, and dictates the precise standard of when a "week" starts (e.g., Monday vs. Sunday). When paired with Templater, it provides the structural shell that the variables populate, ensuring your file names adhere to strict ISO standards (like `2026-W19`).

**Pros:**
- Standardizes ISO week formats across your entire vault
- Creates missing chronological notes retroactively with simple hotkeys
- Seamless integration with calendar and timeline visualization tools

**Cons:**
- Development cycle and feature updates have historically been slow
- Can conflict with core Obsidian daily notes if both are left active

### 3. [Dataview Plugin](https://www.amazon.com/s?k=Dataview%20Plugin&tag=notesautomate-20)

**Best for:** Querying tasks and logs for review aggregation
**Price:** Free
**Rating:** 4.9/5

While Templater builds the static structure of the review note, Dataview pulls in the dynamic data over the course of the week. A weekly review requires data; Dataview queries pull uncompleted tasks, new notes created in the last 7 days, and daily journal highlights directly into your template. Because Dataview updates in real-time, it acts as a dashboard within your review note.

**Pros:**
- SQL-like syntax makes complex queries highly reliable and scalable
- Renders tables and task lists without duplicating the underlying text
- Massive community support and pre-built query libraries available

**Cons:**
- Data is rendered dynamically, meaning it isn't statically saved in the file
- Extremely heavy queries across large vaults can cause temporary UI lag

### 4. [Tracker Plugin](https://www.amazon.com/s?k=Tracker%20Plugin&tag=notesautomate-20)

**Best for:** Habit tracking and quantitative metric visualization
**Price:** Free
**Rating:** 4.5/5

Tracker turns your daily note metadata into visual graphs within your weekly review. If your review involves assessing how many times you exercised, meditated, or completed deep work sessions, Tracker parses the YAML frontmatter of your daily notes and renders a weekly trend line or bar chart directly alongside your written reflections.

**Pros:**
- Highly customizable graph aesthetics and data axes
- Pulls strictly from YAML frontmatter, enforcing good overall data hygiene
- Supports multiple datasets and trend lines on a single graph overlay

**Cons:**
- Syntax is highly sensitive to minor indentation and formatting errors
- Documentation lacks advanced troubleshooting examples for edge cases

## Structuring Your Templater Variables

When building automated weekly reviews with templater variables, understanding the temporal commands is your first priority. A weekly review is inherently tied to time. You need the template to know what week it is, what the previous week was, and what the dates of Monday through Sunday are.

The primary object you will use is `tp.date`. This function allows you to format time dynamically.

For your file header, you want to establish the exact range of the week. Instead of typing "May 4th to May 10th", you insert the following variables:

```markdown
# Weekly Review: <% tp.date.weekday("YYYY-MM-DD", 0) %> to <% tp.date.weekday("YYYY-MM-DD", 6) %>
```

When the template executes, this string evaluates the current week, finds the first day (index 0, Monday), and the seventh day (index 6, Sunday), and prints them permanently. 

To link back to your previous weekly review, ensuring a continuous chain of documentation, you use offset variables:

```markdown
**Previous Week:** [[<% tp.date.now("gggg-[W]ww", -7) %>]]
**Next Week:** [[<% tp.date.now("gggg-[W]ww", 7) %>]]
```

These variables calculate the ISO string for exactly seven days ago and seven days in the future, automatically wrapping them in Obsidian's bidirectional link brackets. This creates an unbroken sequence of review files that you can navigate with a single click, completely eliminating orphaned notes.

## Step-by-Step Implementation

Transitioning from theory to a working system requires a methodical setup phase. Follow these steps to ensure your variables execute correctly.

### Step 1: Configure Folder Templates
Do not rely on manually triggering your templates. Open Templater's settings and navigate to the "Folder Templates" section. Assign your `Weekly_Review_Template.md` to your designated `Reviews/Weekly` folder. By doing this, any time you create a new file in that specific folder, Templater will instantly execute the variables before you even see the blank page.

### Step 2: Establish the Daily Note Rollup
A thorough weekly review requires reading your daily notes. Instead of opening seven different files, use Templater to generate links to all seven days of the current week automatically. Embed this list into your template:

```markdown
### Daily Logs
- [[<% tp.date.weekday("YYYY-MM-DD", 0) %>]] (Monday)
- [[<% tp.date.weekday("YYYY-MM-DD", 1) %>]] (Tuesday)
- [[<% tp.date.weekday("YYYY-MM-DD", 2) %>]] (Wednesday)
- [[<% tp.date.weekday("YYYY-MM-DD", 3) %>]] (Thursday)
- [[<% tp.date.weekday("YYYY-MM-DD", 4) %>]] (Friday)
- [[<% tp.date.weekday("YYYY-MM-DD", 5) %>]] (Saturday)
- [[<% tp.date.weekday("YYYY-MM-DD", 6) %>]] (Sunday)
```

When executed, this generates a perfectly formatted, clickable list of the week's daily notes.

### Step 3: Inject Dynamic Task Queries
Next, combine Templater with Dataview. Write a Dataview query inside your template that looks for tasks modified within the specific date range of the week. Because you need the dates to be accurate to the week the file was created (not the week you are currently viewing it), use Templater to burn the exact dates into the Dataview query:

```markdown
```dataview
TASK
WHERE completed = true
AND completion >= date(<% tp.date.weekday("YYYY-MM-DD", 0) %>)
AND completion <= date(<% tp.date.weekday("YYYY-MM-DD", 6) %>)
```
```

This creates a hybrid block: Templater provides the static, permanent date constraints, and Dataview uses those constraints to fetch the tasks.

## Practical Advice: Ranges, Dimensions, and Tradeoffs

When building your automated review, restraint is critical. The most common failure state of a new automated system is over-engineering. If your template requires reviewing 40 different metrics and takes an hour to parse, you will abandon it within a month.

Keep the dimensions of your review tight. A highly effective weekly review should consist of no more than 3 to 4 core sections:

1.  **The Rollup:** A static list of the 7 daily notes for quick reference.
2.  **The Task Audit:** A Dataview query showing completed tasks, and a separate query showing tasks that are overdue. Limit the Dataview fetch limit to 50 items to prevent overwhelm.
3.  **The Metric Graph:** A single Tracker block monitoring no more than 3 core habits (e.g., deep work hours, exercise, reading).
4.  **Qualitative Reflection:** 3 simple, static text prompts (e.g., "What went well?", "What drained my energy?", "What is the primary focus for next week?").

**Tradeoffs in Archiving:** 
There is a distinct tradeoff between using Dataview (dynamic queries) and Templater (static generation). Dataview is fantastic for gathering tasks, but if you rename a file or delete a task six months from now, your historical weekly review will change retrospectively. If preserving a perfect historical snapshot of your week is vital for your workflow, avoid Dataview. Instead, use pure Templater JavaScript execution blocks to fetch tasks and print them as permanent plain text. While this requires advanced coding knowledge, it guarantees that your 2026 reviews will look exactly the same in 2030, completely independent of plugin support.

## Final System Architecture Synthesis

The value of building automated weekly reviews with templater variables lies in the psychological shift it creates. When you sit down on a Sunday evening to review your week, your cognitive load should be dedicated entirely to reflection, strategy, and prioritization. Every ounce of energy spent formatting dates, searching for lost notes, or typing out headers is energy stolen from actual planning.

By leveraging Templater's temporal variables, Periodic Notes' routing, and Dataview's aggregation, you create a zero-friction environment. You press a button, the infrastructure of your week materializes instantly, and you are immediately presented with the exact questions and data you need to make decisions. The system stops being a chore to maintain and becomes a resilient, invisible partner in your workflow.

## Frequently Asked Questions

### How do I handle missing daily notes in my weekly review?
If a daily note does not exist, the Templater variable will still generate the link string (e.g., `[[2026-05-06]]`). The link will simply appear as an unresolved (ghost) link in Obsidian, allowing you to click it and retroactively create the note if you choose.

### What happens if I generate the weekly review on the wrong day?
By default, `<% tp.date.weekday() %>` references the current week. If you generate your review on a Tuesday for the previous week, the variables will pull the wrong dates. You can fix this by using offset prompts (e.g., `<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-[W]ww") %>`), which forces Templater to use the file's title rather than the current system clock to calculate the dates.

### Can Templater pull data from outside Obsidian?
Yes. Templater supports System Command execution and advanced user scripts. You can write a JavaScript module to ping an external API (like Todoist or a weather service) and print that data directly into your weekly review when the template executes.

### Does Dataview replace the need for Templater variables?
No, they serve opposite functions. Dataview renders data dynamically on the screen without altering the text file; Templater burns data and text permanently into the file upon creation. A robust system uses Templater to build the permanent structure and Dataview to populate dynamic [dashboards](/posts/advanced-dataview-js-scripts-for-custom-obsidian-dashboards/) within that structure.

---

## Related Reading

- [Custom Templater Scripts for Obsidian Free Download (2026)](/posts/custom-templater-scripts-for-obsidian-free-download/)
