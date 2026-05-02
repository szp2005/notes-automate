---
image: "/og/obsidian-community-plugins-list.webp"
title: "What Are Obsidian Community Plugins?"
author: "Alex Chen"
date: 2026-04-29
slug: obsidian-community-plugins-list
description: "Create a more user-friendly experience than the official docs by categorizing plugins by user persona and workflow (e.g., 'For Writers', 'For Students'."
keywords: ["best obsidian plugins", "how to install obsidian plugins", "obsidian dataview plugin", "obsidian templater plugin", "obsidian tasks plugin", "obsidian calendar plugin", "obsidian plugin directory", "obsidian core plugins"]
draft: false
type: "informational"
tags: ["obsidian", "community", "plugins", "obsidian community plugins list"]
---

# The Ultimate Obsidian Community Plugins List (2024): Categorized by User & Workflow

*Last updated: June 2024 · Reading time: ~12 minutes*

---

## TL;DR

- **Community plugins** transform Obsidian from a decent Markdown editor into a full personal knowledge management system—but you need to know which ones are worth installing.
- This guide categorizes the best plugins by **user type** (writers, students, power users), not just alphabetically or by download count.
- Every featured plugin includes a **practical use-case tip** so you can get value in under five minutes.

---

## Table of Contents

1. [What Are Obsidian Community Plugins?](#what-are-obsidian-community-plugins)
2. [How to Install Community Plugins](#how-to-install-community-plugins)
3. [The 10 Must-Have Plugins for Every User](#the-10-must-have-plugins-for-every-obsidian-user)
4. [Plugins for Organization & Productivity](#plugins-for-organization--productivity)
5. [Plugins for Writers & Content Creators](#plugins-for-writers--content-creators)
6. [Plugins for Visual Thinkers & Students](#plugins-for-visual-thinkers--students)
7. [New & Noteworthy Plugins](#new--noteworthy-plugins)
8. [Comparison Table: Top Plugins at a Glance](#comparison-table-top-plugins-at-a-glance)
9. [FAQ](#frequently-asked-questions)
10. [Conclusion](#conclusion)

---

## What Are Obsidian Community Plugins?

Obsidian ships with a solid set of **core plugins**—things like backlinks, tags, and the graph view. These are built and maintained by the Obsidian team, baked into the app, and turned on or off from Settings > Core Plugins.

**Community plugins** are a different animal. They are third-party extensions built by independent developers and distributed through Obsidian's plugin registry. At the time of writing, there are over 1,700 community plugins covering everything from spaced repetition flashcards to full calendar views, code execution, and database-style queries.

The key differences:

| Feature | Core Plugins | Community Plugins |
|---|---|---|
| Maintained by | Obsidian team | Independent devs |
| Count | ~25 | 1,700+ |
| Update cycle | With app releases | Varies per plugin |
| Security review | Full | Limited (code review by volunteers) |
| Risk level | None | Low–Medium |

### A Note on Safety

Obsidian's **Safe Mode** disables all community plugins. It exists because a community plugin runs arbitrary JavaScript inside your vault. The risk is real but low in practice—popular plugins with thousands of downloads have been reviewed by many eyes. Still, check the plugin's GitHub repository before installing anything obscure. Never install a plugin from outside the official plugin browser.

---

## How to Install Community Plugins

Getting your first plugin running takes about 90 seconds.

**Step 1 – Disable Safe Mode**
Go to **Settings → Community Plugins → Turn off Safe Mode**. Obsidian will show a warning. Read it, then click *Turn Off* if you're comfortable proceeding.

**Step 2 – Open the Plugin Browser**
Click **Browse** in the Community Plugins section. A searchable directory opens inside the app.

**Step 3 – Install and Enable**
Search for the plugin you want (e.g., "Templater"), click it, then click **Install**. Installation downloads the plugin files to your vault's `.obsidian/plugins/` folder. After installation, toggle the **Enable** switch—installing alone does nothing.

**Step 4 – Configure It**
Most plugins add an entry to your Settings sidebar after enabling. Spend two minutes there before using it—you'll avoid 80% of common frustrations.

**Step 5 – Keep Plugins Updated**
Go to **Settings → Community Plugins** and click **Check for Updates**. Updates are not automatic, so build this into a weekly habit.

> **Sync consideration:** If you use Obsidian across multiple devices, your plugin *files* sit inside the vault. A Git-based sync plugin can replicate them, but it requires setup time. [Obsidian Sync](URL_PLACEHOLDER_1) handles this automatically with end-to-end encryption and is the zero-friction option if you work on Mac, Windows, iOS, and Android simultaneously.

---

## The 10 Must-Have Plugins for Every Obsidian User

These are the plugins that consistently show up in power users' vaults and deliver immediate, tangible value for most workflows.

### 1. Templater
**What it does:** Lets you create reusable note templates with dynamic values—current date, prompt input, JavaScript functions. It replaces the basic core Templates plugin.
**Quick-start tip:** Create a `Daily Note` template that auto-fills the date and links to the previous day's note. Your morning setup drops from two minutes to three seconds.

### 2. Calendar
**What it does:** Adds a calendar panel in the sidebar. Click any day to open or create a daily note.
**Quick-start tip:** Pair it with Periodic Notes (also free) to manage weekly and monthly reviews from the same panel.

### 3. Tasks
**What it does:** Turns Obsidian into a capable task manager. Adds due dates, recurrence, priorities, and a global task query view across your entire vault.
**Quick-start tip:** Use the `Tasks: Create or edit task` command palette shortcut to add structured tasks without memorizing syntax.

### 4. Dataview
**What it does:** Queries your vault like a database. Write SQL-style queries in code blocks to pull notes by tag, date, field, or folder.
**Quick-start tip:** Start with `LIST FROM #project` before tackling TABLE queries. Complexity can wait.

### 5. Obsidian Git
**What it does:** Auto-commits and pushes your vault to a GitHub repository on a schedule you set.
**Quick-start tip:** Set auto-backup to every 10 minutes. You now have a full version history for every note without thinking about it.

### 6. QuickAdd
**What it does:** Creates macros to capture information fast—add a book to your reading list, log a meeting note, append to a daily note—without navigating there manually.
**Quick-start tip:** Set up one Capture macro tied to a hotkey. Use it for 48 hours and you'll set up five more.

### 7. Natural Language Dates
**What it does:** Type `@tomorrow` or `@next Friday` anywhere and it converts to a formatted date link.
**Quick-start tip:** Essential if you use Tasks or any date-heavy workflow.

### 8. Linter
**What it does:** Auto-formats your notes on save—consistent YAML frontmatter, heading levels, list spacing, line breaks.
**Quick-start tip:** Enable "Lint on save" immediately. It silently fixes bad formatting you didn't know you were creating.

### 9. Advanced Tables
**What it does:** Makes editing Markdown tables bearable. Tab to navigate cells, auto-formats columns, adds sort buttons.
**Quick-start tip:** If you've ever manually spaced Markdown table pipes, install this right now.

### 10. Editing Toolbar
**What it does:** Adds a formatting toolbar (bold, italic, code, callouts) for users who don't want to memorize every Markdown shortcut—especially useful on mobile.
**Quick-start tip:** Customize the toolbar to include only the six commands you actually use. Default toolbar has too much noise.

---

## Plugins for Organization & Productivity

### Dataview: Building a Project Dashboard

Dataview is the most powerful plugin in this list. Install it, then create a note called `Projects Dashboard` and paste:

```dataview
TABLE file.mtime AS "Last Modified", status AS "Status"
FROM #project
SORT file.mtime DESC
```

You now have a live table of every note tagged `#project`, sorted by last edit. Add a `status` field to each project note (e.g., `status: active`) and the dashboard updates automatically.

### Kanban
Adds a drag-and-drop kanban board backed by plain Markdown. Each card is a section under a column heading. Move a card and the underlying file updates. Ideal for sprint planning, content calendars, or any workflow with defined stages.

### Projects
A newer plugin (by Marcus Olsson) that builds structured views—tables, boards, calendars—from a specific folder. Think of it as Dataview with a polished GUI. Good for users who want database-style views without writing queries.

> 📚 **Take Your Workflow to the Next Level:** These organizational plugins work even better when you have a solid methodology behind them. Tiago Forte's [Building a Second Brain course](URL_PLACEHOLDER_2) teaches the PARA method that maps directly to how these tools structure your vault. Zettelkasten practitioners should look at the [Linking Your Thinking workshop](URL_PLACEHOLDER_3).

---

## Plugins for Writers & Content Creators

### Longform
Designed for long-form writing projects. Creates a manuscript structure where each scene or chapter is a separate note. The plugin stitches them together into a single compiled document. Useful for novelists, screenwriters, and anyone writing anything over 5,000 words.

**Use-case:** Create a new Longform project for your novel. Add scenes as individual notes. Reorder them by dragging in the Longform panel. Compile to a single document before sending to an editor—no copy-paste, no lost formatting.

### Readwise Official
[Readwise](URL_PLACEHOLDER_4) syncs all your Kindle highlights, web article annotations, podcast transcripts, and Twitter/X saves directly into your vault as structured notes. The plugin handles the sync automatically.

**Use-case:** Highlight a passage in a Kindle book, open Obsidian ten minutes later, and find that highlight linked to the book's note with your tags and metadata already applied.

### Paste URL Into Selection
Micro-plugin, massive quality-of-life improvement. Select text, paste a URL, and the selection becomes a Markdown link automatically. Eliminates manual `[text](url)` formatting.

### Omnivore
A free, open-source read-later service with an Obsidian plugin that imports saved articles, highlights, and notes. A solid free alternative to Readwise for basic article capture.

---

## Plugins for Visual Thinkers & Students

### Excalidraw
Excalidraw inside Obsidian is a whiteboard tool that embeds directly in your vault. Draw diagrams, wireframes, and concept maps. Crucially, you can embed Obsidian notes *inside* Excalidraw drawings and embed drawings inside notes—the links are bidirectional.

**Use-case:** Brainstorming a research paper. Open a new Excalidraw canvas. Drop your source notes as embedded cards. Draw arrows showing argument relationships. Save it. Now your graph view shows all those connections too.

### Mind Map
Renders any bulleted note as a mind map in real time. Open a note with nested bullets and toggle the Mind Map view—instant visual hierarchy with no redrawing required.

### Spaced Repetition
Turns your notes into a flashcard review system using the SM-2 algorithm (the same algorithm behind Anki). Add `#card` to a question/answer pair in any note. The plugin schedules reviews and tracks your memory retention.

**Use-case for students:** Take lecture notes normally. Add `#card` to key definitions. The plugin surfaces them for review at the right interval. No separate flashcard app needed.

---

## New & Noteworthy Plugins

*This section reflects plugins gaining traction in mid-2024.*

- **Canvas Mindmap** – Extends Obsidian's built-in Canvas with mindmap-specific keyboard shortcuts.
- **Bases** – Native-feeling property database views, still in early access.
- **Smart Connections** – Uses local AI to surface semantically related notes without a cloud service.
- **Surfing** – Embeds a full web browser inside Obsidian. Niche, but genuinely useful for research workflows.

---

## Comparison Table: Top Plugins at a Glance

| Plugin | Category | Complexity | Mobile Support | Best For |
|---|---|---|---|---|
| Templater | Productivity | Medium | Yes | Everyone |
| Dataview | Organization | High | Limited | Power users |
| Tasks | Task mgmt | Medium | Yes | Everyone |
| Obsidian Git | Backup | Medium | No | Desktop users |
| Longform | Writing | Low | Yes | Writers |
| Excalidraw | Visual | Low | Yes | Visual thinkers |
| Readwise Official | Import | Low | Yes | Avid readers |
| Spaced Repetition | Learning | Low | Yes | Students |
| Kanban | Project mgmt | Low | Yes | PMs, planners |
| QuickAdd | Capture | Medium | Yes | Power users |

---

## Conclusion

The Obsidian community plugins list is not a feature—it's an ecosystem. The plugins covered here can turn a blank vault into a writing studio, a student knowledge base, a project tracker, or a reading system depending on which ones you combine.

Start with three: **Templater**, **Tasks**, and **Calendar**. Get comfortable. Add **Dataview** when you're ready to query your notes. Layer in category-specific tools from there.

If you want your vault to sync seamlessly across every device without touching a Git repository, [Obsidian Sync](URL_PLACEHOLDER_1) is the cleanest path—it's built by the same team and keeps your plugin configurations in sync automatically.

And if you've assembled the tools but want a proven methodology to run on top of them, [Readwise](URL_PLACEHOLDER_4) is worth a look for anyone who reads heavily—the Obsidian integration alone pays for the subscription if you've ever lost a highlight you needed.

The best vault is the one you actually use. Pick the plugins that reduce friction for your specific workflow, and ignore the rest.

---

## Frequently Asked Questions

### Are community plugins safe to use?

Generally yes, for popular plugins. Obsidian's team does a basic security review, and high-download plugins have been scrutinized by the community. Check the plugin's GitHub for recent commits and open issues before installing anything with under 1,000 downloads. Never install a plugin shared outside the official browser.

### How many plugins are too many?

Obsidian loads all enabled plugins on startup. In practice, most users see no performance hit below 30–40 plugins. Above 50–60, startup time and UI lag become noticeable on older hardware. The rule of thumb: if you haven't used a plugin in 30 days, disable it.

### Do community plugins work on Obsidian Mobile?

Most do, with exceptions. Plugins relying on Node.js modules or system-level access (like Obsidian Git) do not work on iOS/Android. Always check the plugin's README for mobile compatibility notes before building a workflow around it on mobile. Editing Toolbar, Tasks, Templater, and Calendar all work reliably on mobile.

### What should I do if a plugin breaks after an update?

First, check the plugin's GitHub Issues page—someone else probably already reported it. Temporarily disable the plugin. If you need the functionality immediately, roll back via the [BRAT plugin](URL_PLACEHOLDER_5), which lets you install specific older versions directly from GitHub. Most breaking issues are fixed within days by active maintainers.

### What is the difference between Dataview and the native Properties feature?

Obsidian's native Properties (introduced in v1.4) lets you add structured YAML fields to notes with a GUI. Dataview reads those fields and lets you *query* across them. They complement each other: use Properties to add structured data, use Dataview to surface and display that data across your vault.

## Related Reading

- [Why Use Community Plugins on Obsidian Mobile?](/posts/how-to-install-community-plugins-in-obsidian-mobile/)
- [What is Excalidraw and Why Use It in Obsidian?](/posts/excalidraw-plugin-for-obsidian-review/)
- [Why Build a Zettelkasten in Obsidian?](/posts/setting-up-a-zettelkasten-in-obsidian-with-plugins/)
- [Why Track Habits in Obsidian in 2024?](/posts/best-obsidian-plugins-for-habit-tracking-2024/)
