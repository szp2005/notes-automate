---
image: "/og/periodic-notes-plugin-weekly-reviews.webp"
title: "Periodic Notes Plugin Complete Guide: Mastering Weekly Reviews"
description: "Learn how to configure the Periodic Notes plugin for weekly reviews in Obsidian. Streamline your productivity system with templates and automated workflows."
pubDate: "2026-05-01"
author: "Alex Chen"
tags: ["obsidian", "weekly review", "productivity", "plugins"]
slug: "periodic-notes-plugin-weekly-reviews"
type: "review"
---

_As an Amazon Associate we earn from qualifying purchases. This post may contain affiliate links._

# Periodic Notes Plugin Complete Guide: Mastering Weekly Reviews

> **Quick Answer:** The Periodic Notes plugin for weekly reviews allows Obsidian users to automatically generate and link time-based notes beyond the core daily notes feature. By configuring custom templates and folder structures for weekly, monthly, and yearly intervals, you can create a frictionless system for reflecting on past accomplishments and planning future tasks.

Building a sustainable productivity system in Obsidian requires more than just taking disconnected notes. While the core Daily Notes feature is excellent for capturing fleeting thoughts and logging daily tasks, it lacks the macro-level perspective required for effective personal management. Without a dedicated space to zoom out, review progress, and course-correct, daily logs quickly become a graveyard of forgotten intentions.

The weekly review is the backbone of methodologies like Getting Things Done (GTD) and time-blocking. It is the designated time to process open loops, migrate unfinished tasks, and set priorities for the upcoming week. However, manually creating weekly review files, formatting dates, and linking them to corresponding daily notes adds unnecessary friction to a habit that already requires significant mental energy.

This is where the Obsidian plugin ecosystem shines. By integrating specific community plugins, you can automate the administrative overhead of the weekly review. In this guide, we evaluate the core tools necessary for this workflow, focusing primarily on how the Periodic Notes plugin for weekly reviews can transform your vault into a cohesive, time-aware productivity engine.

## Essential Plugins for Your Review Workflow

To build a robust weekly review system, you need a combination of plugins that handle file generation, calendar navigation, and task management. Here are the top tools that integrate to create a seamless workflow.

### 1. Periodic Notes Plugin

**Best for:** Knowledge workers and planners needing structured time-based reflection
**Price:** Free
**Rating:** 4.9/5

The Periodic Notes plugin is the undisputed champion for extending Obsidian's default time capabilities. While the core application only supports daily notes, this plugin introduces dedicated settings for weekly, monthly, quarterly, and yearly notes. It allows you to define independent templates and destination folders for each time horizon, effectively creating a nested hierarchy of chronological notes. For weekly reviews, it automatically calculates ISO week numbers, links to the correct days, and applies your custom review template with a single command or hotkey.

**Pros:**
- Automates complex date formatting and ISO week calculations
- Supports independent templates for different time scales
- Integrates flawlessly with the Calendar community plugin

**Cons:**
- Requires careful initial configuration of date formats
- Can create folder clutter if not properly organized

### 2. Calendar Plugin

**Best for:** Visual thinkers who prefer navigating their vault chronologically
**Price:** Free
**Rating:** 4.8/5

The Calendar plugin provides a visual interface for your time-based notes in the Obsidian right sidebar. When paired with Periodic Notes, it transforms from a simple daily navigation tool into a comprehensive timeline manager. It displays week numbers directly on the calendar interface. Clicking on a week number automatically triggers the Periodic Notes plugin to create or open your weekly review note. It also uses visual indicators (dots) to show how much content exists in each daily or weekly note.

**Pros:**
- Provides intuitive, one-click access to weekly notes
- Visually indicates the status and length of your chronological files
- Eliminates the need to use command palette for note creation

**Cons:**
- Takes up valuable sidebar real estate
- Relies on strict filename formatting to recognize existing notes

### 3. Templater Plugin

**Best for:** Power users wanting dynamic, auto-populating review templates
**Price:** Free
**Rating:** 4.9/5

While Periodic Notes has native template support, Templater takes your weekly reviews to the next level. Templater allows you to inject dynamic variables into your weekly note at the moment of creation. You can automatically generate links to all seven daily notes for that specific week, pull in weather data, or calculate the exact dates for the upcoming Monday through Sunday. When used in conjunction with the Periodic Notes plugin for weekly reviews, it removes all manual linking and dating from your workflow.

**Pros:**
- Executes complex JavaScript functions within templates
- Automatically generates precise date ranges and backlinks
- Bypasses Obsidian's basic core template limitations

**Cons:**
- Syntax can be intimidating for users unfamiliar with coding
- Incorrect scripts can cause template execution failures

### 4. Obsidian Tasks

**Best for:** Users managing extensive project tasks within their markdown files
**Price:** Free
**Rating:** 4.7/5

Obsidian Tasks turns your vault into a full-fledged task management system. During a weekly review, the most critical step is migrating undone tasks and scheduling new ones. Tasks allows you to use Dataview-like queries to pull all unfinished checkboxes from your daily notes directly into your weekly review file. You can query tasks completed in the last 7 days to review accomplishments, and view all tasks scheduled for the upcoming week to assess your workload.

**Pros:**
- Powerful querying language specifically designed for checkboxes
- Allows inline scheduling, due dates, and recurring tasks
- Perfect for automatically pulling scattered daily tasks into one weekly view

**Cons:**
- Requires adhering to a specific markdown syntax for dates
- Queries can slow down vault performance if overused on large folders

## Configuring the Periodic Notes Plugin for Weekly Reviews

Setting up the Periodic Notes plugin requires precision. The most common point of failure is a mismatch between your folder structure, date formats, and template locations. Follow these exact steps to ensure a frictionless weekly review system.

### Step 1: Establish Your Folder Architecture
Before enabling the plugin, create dedicated folders in your Obsidian vault. Mixing daily, weekly, and monthly notes in a single directory quickly becomes unmanageable. A recommended structure looks like this:
- `Journals/Daily/`
- `Journals/Weekly/`
- `Journals/Monthly/`
- `Templates/Periodic/`

### Step 2: Enable and Configure Core Settings
Install Periodic Notes from the community plugins directory and enable it. Navigate to the plugin settings. You will see toggles for Weekly, Monthly, Quarterly, and Yearly notes. Enable "Weekly Notes".

In the Weekly Notes settings block, configure the following parameters:
- **Format:** `gggg-[W]ww` (This generates a filename like `2026-W18`. Using ISO week formats is crucial for standardizing your files and ensuring compatibility with the Calendar plugin).
- **Weekly Note Template:** Point this to your newly created `Templates/Periodic/Weekly-Review.md` file.
- **Weekly Note Folder:** Set this to `Journals/Weekly/`.

### Step 3: Align with the Calendar Plugin
If you are using the Calendar plugin (highly recommended), go to its settings and enable "Show week number". Ensure that the "Weekly Note Format" in the Calendar settings perfectly matches the `gggg-[W]ww` format you established in Periodic Notes. This ensures that clicking the week number in the calendar interface triggers the correct file generation.

## Designing the Perfect Weekly Review Template

The effectiveness of your weekly review depends entirely on the template you use. A blank page invites procrastination; a well-structured template guides you through the review process systematically.

When leveraging the Periodic Notes plugin for weekly reviews alongside Templater, your template should automate the context gathering so you can focus on reflection.

### Section 1: The Context Header
Your template should immediately ground you in the specific time period. Using Templater syntax, you can automatically generate links to the specific days encompassed by the week. This allows you to quickly click into your daily logs if you need to reference a specific meeting or event. Include navigation links to the previous week and the next week to maintain an unbroken chain of chronological notes.

### Section 2: The Brain Dump and Inbox Processing
The first active step of a weekly review is clearing your mind and your digital inboxes. Create a section dedicated to a rapid-fire brain dump. Below that, include a checklist of the inboxes you need to clear to "zero" before planning the next week. Common items include:
- Process physical mail and notebook scribbles
- Clear email inbox to zero
- Process Obsidian unlinked mentions and daily note scratchpads
- Empty computer downloads folder

### Section 3: Review Past Week
This is where you analyze what happened. Use this space to list your major accomplishments. If you use the Obsidian Tasks plugin, you can include a query here that automatically pulls in all tasks completed in the last seven days. Include prompts for qualitative reflection:
- What went well this week?
- What caused unnecessary stress or bottlenecks?
- Did I align my daily actions with my broader monthly goals?

### Section 4: Plan Upcoming Week
Once the past is processed, shift focus to the future. Identify your top three priorities for the upcoming week. Limit this to three; if you have ten priorities, you have none. Below your priorities, outline the major project blocks you need to schedule, and process any tasks you are migrating from the previous week.

## Practical Advice for Maintaining Your Habit

Setting up the technical infrastructure using the Periodic Notes plugin for weekly reviews is only half the battle. The true challenge is returning to this system consistently every week.

**Schedule a Non-Negotiable Recurring Appointment**
Treat your weekly review like a meeting with your most important client: yourself. Block out 45 to 60 minutes on your calendar every Friday afternoon or Sunday evening. Friday afternoons are excellent because you are closing out the workweek while context is fresh, allowing you to fully disconnect over the weekend. Sunday evenings work well for users who prefer to use the review as a launchpad for Monday morning.

**Embrace the "Messy" Review**
There will be weeks where you only have 15 minutes. Do not skip the review because you cannot complete the entire template. A partial review is infinitely better than no review. On busy weeks, skip the deep reflection and focus strictly on clearing your inboxes and migrating urgent tasks. The goal is to keep the chain unbroken, even if the execution is imperfect.

**Iterate Your Template Relentlessly**
Your first weekly review template will likely be too ambitious. If you find yourself consistently skipping a specific prompt or section of your template month after month, delete it. Your template should create momentum, not friction. If a section feels like a chore rather than a helpful reflection, it is bloat that needs to be removed. 

**Use Workspaces for Focus**
Obsidian's core Workspaces feature allows you to save your exact window layout. Create a "Weekly Review" workspace that automatically opens your weekly note in the center pane, your calendar in the right sidebar, and perhaps your master project list in the left pane. Triggering this workspace creates an immediate psychological shift into planning mode.

## Frequently Asked Questions

### What is the best date format for weekly notes in Obsidian?
The industry standard and most robust format is `gggg-[W]ww`, which generates filenames like `2026-W18`. This ISO standard ensures perfect compatibility between the Periodic Notes plugin, the Calendar plugin, and background sorting algorithms.

### How do I link daily notes to my weekly review automatically?
You can achieve this using the Templater plugin within your weekly review template. By writing a short Templater script, the plugin can calculate the dates of the current week's Monday through Sunday and generate exact wikilinks to those daily notes upon creation.

### Does Periodic Notes work on Obsidian Mobile?
Yes, the Periodic Notes plugin is fully compatible with Obsidian Mobile. You can trigger your weekly review creation using the command palette or by tapping the week number in the Calendar plugin on your smartphone or tablet.

### How do I handle tasks that cross over multiple weeks?
The best approach is to use the Obsidian Tasks plugin. Instead of manually copying and pasting incomplete tasks from week to week, you can embed a query in your weekly template that automatically surfaces any undone task from your vault, ensuring nothing slips through the cracks.

### Can I have different templates for different days of the week?
While Periodic Notes handles the weekly, monthly, and yearly templates, you would use Templater's folder-based templates or script functions to dynamically apply different templates based on the specific day of the week if you are modifying your daily notes workflow.

---

## Related Reading

- [Obsidian Dataview for Project Tracking: Complete Setup Guide](/posts/obsidian-dataview-for-project-tracking/)

- [Best Obsidian Tasks Plugin Setup 2026: Complete Guide](/posts/best-obsidian-tasks-plugin-setup-2026/)
- [Obsidian Calendar Plugin Complete Guide: Time-Based Notes](/posts/obsidian-calendar-plugin-for-time-based-notes/)
