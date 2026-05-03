---
image: "/og/obsidian-template-for-weekly-reflection-and-planning.webp"
title: "Obsidian Template for Weekly Reflection and Planning: Complete Guide"
description: "Download the ultimate Obsidian template for weekly reflection and planning. Streamline your review process, track habits, and set actionable goals in minutes."
pubDate: "2026-05-03"
author: "Alex Chen"
tags: ["obsidian", "productivity", "weekly review", "templates"]
slug: "obsidian-template-for-weekly-reflection-and-planning"
type: "informational"
---

_As an Amazon Associate we earn from qualifying purchases. This post may contain affiliate links._

# Obsidian Template for Weekly Reflection and Planning: Complete Guide

> **Quick Answer:** The ideal Obsidian template for weekly reflection and planning combines automated data aggregation (via Dataview), a structured review of past accomplishments, and dedicated sections for upcoming priorities. By separating reflection from planning, you ensure both emotional closure for the past week and clear, actionable focus for the next.

A weekly review is the cornerstone of any sustainable [productivity](/posts/obsidian-vs-reflect-for-fast-daily-journaling/) system. Without it, tasks pile up, priorities blur, and you lose track of the broader trajectory of your goals. While analog journals and rigid task managers offer solutions, Obsidian provides an unparalleled environment for this practice. Its local, plain-text foundation combined with powerful community plugins allows you to build a system that reflects your exact mental model.

However, starting from a blank page every Sunday is a recipe for friction. A well-designed Obsidian template for weekly reflection and planning removes that friction. It prompts you with the right questions, automatically pulls in data from your daily notes, and provides a clear structure to follow. 

This guide provides a comprehensive framework and a ready-to-use template that balances introspection with actionable planning, ensuring you spend less time formatting notes and more time executing your priorities.

## The Core Mechanics of a Weekly Review

Before implementing the template code, it is critical to understand the architecture of a successful weekly review. A robust process is not merely a checklist; it is divided into three distinct phases: gathering, reflection, and planning.

### The Gathering Phase

The gathering phase is about consolidation. Throughout the week, open loops accumulate. These include hastily written notes, unread articles, untriaged tasks, and scattered ideas. The template must provide a dedicated space to process these items. 

In Obsidian, this often involves checking your daily notes for incomplete tasks. Instead of manually copying and pasting, modern Obsidian workflows use queries to automatically aggregate uncompleted tasks from the past seven days. This ensures nothing falls through the cracks and saves significant manual effort.

### The Reflection Phase

Reflection requires looking backward with objectivity. This section of the template focuses on qualitative assessment. It asks targeted questions about what went well, what failed, and what friction points occurred. 

Effective reflection templates avoid generic questions like "How was my week?" Instead, they use specific prompts:
* What gave me energy this week?
* What drained my energy?
* Which goal did I neglect, and why?

This phase is crucial for behavioral correction. By identifying patterns of friction, you can adjust your environment or [workflow](/posts/streamlining-your-daily-note-workflow-for-better-productivity/) for the upcoming week.

### The Planning Phase

Planning is the forward-looking component. It shifts the focus from analysis to execution. A strong planning section forces prioritization. Rather than creating a massive to-do list, the template should limit you to identifying a small number of core objectives. 

Using techniques like the "Top 3" method—where you commit to only three primary outcomes for the week—creates constraint and focus. The planning phase also involves scheduling these priorities into specific blocks of time, transitioning intentions into calendar events.

## Setting Up the Obsidian Infrastructure

To maximize the effectiveness of the weekly template, specific core and community plugins must be configured. While the text of the template is static, the functionality relies on Obsidian's ecosystem.

### Required Community Plugins

For this template to function automatically, install and enable the following plugins:

1. **[Periodic Notes](/posts/obsidian-periodic-notes-plugin-setup-for-annual-reviews/):** This is the engine for time-based notes. It replaces the core Daily Notes plugin and adds native support for Weekly, Monthly, and Yearly notes. You will configure it to point to your designated `Templates` folder and set the output destination to a `Periodic/Weekly` folder.
2. **Templater:** The core Templates plugin is insufficient for advanced workflows. Templater allows you to use dynamic variables (like automatically calculating the dates of the current week) and execute internal scripts when the note is created.
3. **Dataview:** This plugin turns your Obsidian vault into a database. It allows the template to automatically query and display tasks, habits, and notes linked to the current week.
4. **Calendar:** While optional, the Calendar plugin provides a visual interface in your sidebar to easily create and navigate between weekly notes by clicking on the week number.

### Configuring Templater Variables

Templater is essential for generating the correct dates when you create your weekly note. Ensure Templater is set to trigger on new file creation. The template will use Templater tags like `<% tp.date.now("YYYY-[W]ww") %>` to automatically title the note and calculate the start and end dates of the week without manual data entry.

## The Complete Weekly Reflection and Planning Template

Below is the raw Markdown code for the optimal weekly template. Copy this code block and save it as a new file in your designated Templates folder (e.g., `Template - Weekly Note.md`).

```markdown
---
type: weekly-note
week: <% tp.date.now("gggg-[W]ww") %>
start_date: <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "gggg-[W]ww") %>
end_date: <% tp.date.now("YYYY-MM-DD", 6, tp.file.title, "gggg-[W]ww") %>
tags: [review/weekly]
---

# Week <% tp.date.now("ww, gggg") %>

[[<% tp.date.now("gggg-[W]ww", -7, tp.file.title, "gggg-[W]ww") %>|← Last Week]] | [[<% tp.date.now("gggg-[W]ww", 7, tp.file.title, "gggg-[W]ww") %>|Next Week →]]

## 📥 1. Gather & Process
*Clear the mental workspace before reflecting.*

- [ ] Process physical inbox and notebook
- [ ] Triage Obsidian Inbox folder
- [ ] Process email to zero
- [ ] Review calendar from past week
- [ ] Review upcoming calendar for next two weeks

## 🪞 2. Reflection
*Look back at the week objectively.*

### Metrics & Habits
```dataview
TABLE sleep as "Sleep", workout as "Workout", reading as "Reading"
FROM "Periodic/Daily"
WHERE file.day >= date(<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "gggg-[W]ww") %>) AND file.day <= date(<% tp.date.now("YYYY-MM-DD", 6, tp.file.title, "gggg-[W]ww") %>)
SORT file.day ASC
```

### The Breakdown
**Wins (What went well?)**
- 

**Friction (What was difficult or distracting?)**
- 

**Learnings (What did I discover?)**
- 

## 📋 3. Task Triage
*Review unfinished business.*

### Uncompleted Tasks from this Week
```dataview
TASK
FROM "Periodic/Daily"
WHERE file.day >= date(<% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "gggg-[W]ww") %>) AND file.day <= date(<% tp.date.now("YYYY-MM-DD", 6, tp.file.title, "gggg-[W]ww") %>)
AND !completed
```
*(Action: Complete them now, schedule them, or delete them.)*

## 🎯 4. Planning
*Define the focus for the upcoming week.*

### Top 3 Priorities
1. [ ] 
2. [ ] 
3. [ ] 

### Secondary Tasks
- [ ] 
- [ ] 

## 📝 Notes & Brainstorming
*Any loose thoughts for the week.*
- 

```

## Breakdown of the Template Features

The template provided above uses several advanced features to minimize friction. Understanding how these components work allows you to modify them effectively.

### YAML Frontmatter and Templater Logic

The top section enclosed in `---` is the frontmatter. It stores metadata about the note. The Templater syntax (`<% ... %>`) calculates the exact start and end dates based on the week number. 

For example, `start_date: <% tp.date.now("YYYY-MM-DD", 0, tp.file.title, "gggg-[W]ww") %>` determines the Monday of the current week. This metadata is critical because Dataview uses these exact dates to pull in the correct daily notes.

### Automated Navigation

The links at the top (`← Last Week | Next Week →`) use Templater to automatically generate links to the previous and subsequent weekly notes. This creates an unbroken chain of reviews, allowing you to easily browse your history without searching through folders.

### Dataview Habit Tracking Integration

The "Metrics & Habits" section utilizes a Dataview query. It assumes you are tracking variables in the frontmatter of your daily notes (e.g., `sleep: 7`, `workout: true`, `reading: 30`). 

The query looks at your daily notes folder (`FROM "Periodic/Daily"`), filters for notes created within the start and end dates of this specific week, and renders a clean table of your habits. This visual representation provides immediate feedback during the reflection phase without requiring you to manually calculate averages.

### Uncompleted Task Aggregation

The "Task Triage" section uses a Dataview task query to find all incomplete tasks (`!completed`) created in daily notes during the week. This is the ultimate safety net. Instead of opening seven different daily notes to see what you missed, the query surfaces them all in one place. During your review, you make a decision: do the task immediately, migrate it to a project note, or delete it entirely.

## Common Pitfalls in Weekly Planning

Implementing an Obsidian template for weekly reflection and planning is only the first step. Maintaining the habit requires avoiding common failure points.

### Over-Planning the Week

The most frequent mistake is treating the planning section as a wishlist. If you list 15 tasks under your priorities, the system loses its value. Constraints drive execution. Stick rigidly to the "Top 3 Priorities" limit. If you finish those three by Wednesday, you can pull from a backlog, but do not dilute your focus during the Sunday review.

### Skipping the Gathering Phase

It is tempting to jump straight into planning the next week and skip processing your inboxes. If you do not triage your open loops, the weekly review simply builds a plan on top of a messy foundation. The friction will eventually cause you to abandon the system. Force yourself to clear your Obsidian inbox, email, and physical notes before setting new goals.

### Ignoring the Analytics

If your Dataview habit table consistently shows that you are missing your workout goals, the reflection phase must address it. Do not just look at the data; use it. If a habit fails three weeks in a row, the goal is either unrealistic or the friction to start is too high. Use the "Friction" section to document *why* the metric failed and adjust your environment accordingly.

## Customizing the Template for Your Workflow

Obsidian’s greatest strength is modularity. Once you understand the base template, you should modify it to fit your specific professional or personal needs.

If you are a student, you might add a Dataview query that pulls in all notes tagged with `#lecture` from the past week to ensure you have reviewed all course material. If you manage a team, you might add a section to list blockers for your direct reports or track specific project milestones.

To track different habits, simply change the variables in the Dataview table query. Ensure the keys in your Daily Note frontmatter (e.g., `meditation`, `water_intake`) match the columns defined in the `TABLE` command in the weekly template.

## Integrating Weekly Notes with Monthly and Yearly Reviews

A weekly template does not exist in isolation. It feeds into a larger hierarchy of periodic notes. 

When you conduct a monthly review, you should not need to re-read every daily note. Instead, your monthly template should query and summarize your four weekly notes. By capturing your "Wins," "Frictions," and "Learnings" consistently at the weekly level, your monthly and yearly reviews become exercises in pattern recognition rather than arduous data entry.

By implementing this Obsidian template for weekly reflection and planning, you transform your vault from a static repository of notes into an active operating system for your life. It enforces discipline, automates the tedious aspects of reviewing, and keeps your daily actions aligned with your long-term objectives.

## Frequently Asked Questions

### How do I automate the creation of weekly notes in Obsidian?
Install the Periodic Notes and Templater community plugins. In the Periodic Notes settings, enable Weekly Notes, specify your template file, and set the folder destination. Configure Templater to "Trigger Templater on new file creation" so the date variables calculate automatically when the note generates.

### What is the best day to do a weekly reflection?
Sunday afternoon or evening is generally optimal for most professionals, as it provides a clear boundary between the weekend and the upcoming work week. Alternatively, Friday afternoon works well if you prefer to close out professional tasks before the weekend begins and separate work planning from personal planning.

### How can I link daily notes to my weekly planning template?
You do not need to link them manually. By using the standard ISO calendar format (YYYY-MM-DD for daily notes, YYYY-[W]ww for weekly notes), Dataview queries within the weekly template can automatically filter and display information from daily notes whose dates fall within that specific week.

### Can I use this template on Obsidian Mobile?
Yes. Both Templater and Dataview function correctly on the Obsidian mobile app. Ensure your plugins and templates folder are synced via Obsidian Sync, iCloud, or another syncing service. You can run your weekly review entirely from a tablet or phone using the same automated queries.

### Why is my Dataview task query showing zero results?
Ensure three things: first, that you are actually creating tasks (using `- [ ]`) in your daily notes; second, that your daily notes are saved in the folder specified in the query (e.g., `"Periodic/Daily"`); and third, that the date format in your daily note titles strictly matches the `YYYY-MM-DD` format expected by the `file.day` variable.
