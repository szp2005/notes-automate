---
image: "/og/obsidian-projects-plugin-review-and-setup.webp"
title: "Obsidian Projects Plugin Review: Complete Setup Guide"
author: "Alex Chen"
date: 2026-04-29
slug: obsidian-projects-plugin-review-and-setup
description: "Provide pre-built, copy-and-paste project templates for specific workflows like content creation, academic research, and GTD, which offers immediate practical value."
keywords: ["Obsidian project management", "Obsidian task management", "Obsidian Projects plugin tutorial", "how to use Obsidian Projects", "Obsidian Kanban board", "Obsidian Dataview vs Projects", "Obsidian gallery view", "Obsidian calendar view"]
draft: false
type: "informational"
tags: ["obsidian", "projects", "plugin", "obsidian projects plugin review and setup"]
---

_As an Amazon Associate we earn from qualifying purchases. This post may contain affiliate links._

# Obsidian Projects Plugin: The Ultimate Review, Setup Guide & Power-User Templates (2024)

> **TL;DR**
> - The Obsidian Projects plugin turns any folder of notes into a visual dashboard with Table, Board, Calendar, and Gallery views — no code required.
> - It's faster to set up than Dataview for visual project management, but less flexible for complex queries; the two tools complement each other well.
> - This guide includes three copy-paste project templates, a Templater + QuickAdd integration walkthrough, and a troubleshooting section for the most common setup failures.

---

## Table of Contents

1. [What is the Obsidian Projects Plugin (And Who is it For?)](#what-is-it)
2. [Step-by-Step: Installing and Your First Project Setup](#installation)
3. [Mastering the Views: Table, Board, Calendar, and Gallery](#views)
4. [3 Ready-to-Use Project Templates for Your Vault](#templates)
5. [Advanced Workflow: Combining Projects with Templater and QuickAdd](#advanced)
6. [Troubleshooting Common Issues](#troubleshooting)
7. [Final Verdict: Is the Projects Plugin Right for You?](#verdict)
8. [FAQ](#faq)

---

## 1. What is the Obsidian Projects Plugin (And Who is it For?) {#what-is-it}

The [Obsidian Projects plugin](URL_PLACEHOLDER_1), built by Marcus Olsson, does one thing with real precision: it reads a collection of notes — defined by a folder path, a tag, or a Dataview query — and renders the YAML frontmatter in those notes as a structured, interactive dashboard.

Think of it as a lightweight Airtable living inside your vault. Every note becomes a row. Every frontmatter field becomes a column. You can then switch between four view types depending on what you need to see.

**How does this compare to manual methods?** Without this plugin, tracking 30 article drafts across different stages means either relying on memory, building a hand-maintained index note, or writing Dataview queries. All three options have friction.

**How does it compare to Dataview?** This is the most common question in the community, and the [Reddit thread comparing the two](URL_PLACEHOLDER_2) is worth reading. Here is the practical breakdown:

| Feature | Projects Plugin | Dataview |
|---|---|---|
| Setup difficulty | Low — point at a folder and go | Medium — requires DQL or JS |
| Visual views (Board, Gallery, Calendar) | ✅ Built-in | ❌ Not native |
| Query flexibility | Limited to filters | Extremely high |
| Inline editing of frontmatter | ✅ Yes | ❌ Read-only |
| Learning curve | 15 minutes | Several hours |
| Best for | Visual project [dashboards](/posts/advanced-dataview-js-scripts-for-custom-obsidian-dashboards/) | Complex, cross-vault queries |

The verdict: they are not competitors, they are complements. Use Projects for your active workflow views. Use Dataview for cross-vault reporting and aggregation.

**Ideal user:** You already understand YAML frontmatter. You manage recurring workflows — content pipelines, research queues, task lists — and you are tired of navigating folders blindly. You want to *see* your work without learning a query language.

---

## 2. Step-by-Step: Installing and Your First Project Setup {#installation}

### Installation

1. Open Obsidian and go to **Settings → Community Plugins**.
2. Disable Safe Mode if prompted.
3. Click **Browse**, search for `Projects`, and install the plugin by Marcus Olsson.
4. Enable it. A new compass-style icon appears in your left ribbon.

### Initial Configuration

Before creating your first project, spend two minutes in the plugin settings (**Settings → Projects**):

- **Default view:** Set to Table if you want a database feel from the start.
- **Date format:** Match this to the format you use in your frontmatter (e.g., `YYYY-MM-DD`). A mismatch here is the single most common cause of Calendar view breaking.
- **Exclude paths:** Add your templates folder. Otherwise, template files show up as phantom notes in every project.

If you use [Obsidian Sync](URL_PLACEHOLDER_3) to work across a desktop and mobile device, your Projects configuration travels with the vault automatically — no extra steps required. This is the cleanest way to keep your project dashboards consistent across devices.

### Creating Your First Project

1. Click the Projects icon in the ribbon → **New Project**.
2. Give the project a name (e.g., `Article Pipeline`).
3. Under **Data Source**, choose:
   - **Folder** — simplest option; all notes inside that folder appear.
   - **Tag** — useful when your notes are spread across the vault.
   - **Dataview query** — for power users who want precise filtering.
4. Choose **Folder**, point it at an existing folder with at least three or four notes.
5. Click **Create**. You will immediately see a Table view populated with your notes.

At this point, any frontmatter key that appears in those notes becomes a column. If a note has `status: draft` in its YAML, a `status` column appears. Editing that cell updates the note's frontmatter directly.

---

## 3. Mastering the Views: Table, Board, Calendar, and Gallery {#views}

### Table View

The Table view is your default database interface. Each row is a note. Each column is a frontmatter field.

**Key actions:**
- Click any cell to edit the value inline.
- Click the column header to sort.
- Use the **Filter** button to narrow rows by field value (e.g., show only notes where `status = "draft"`).
- Use the **+** button in the column header area to add new fields — this writes a new frontmatter key to every note in the project.

For content creators and [researchers](/posts/obsidian-vs-heptabase-for-visual-research-workflows/), Table view alone replaces a Notion database for most daily tracking needs.

### Board View (Kanban)

The Board view requires one specific frontmatter field to function: a field with a finite set of string values. Typically this is `status`.

Set it up:
1. Switch to Board view using the view toggle at the top.
2. Click **Configure** → select the field to group by (e.g., `status`).
3. Your defined values become columns. Drag a card between columns to update the frontmatter value in the underlying note instantly.

This is a genuine Kanban board. It is simpler than the dedicated [Obsidian Kanban plugin](URL_PLACEHOLDER_4) but has the advantage of being unified with your other views.

### Calendar View

Calendar view requires a date field in your frontmatter — most commonly `due`, `publish-date`, or `created`.

1. Switch to Calendar view.
2. Click **Configure** → select your date field.
3. Notes appear as events on the calendar on their respective dates.

This is where the date format setting in plugin preferences matters. If your frontmatter says `due: 2024-03-15` but the plugin is set to `MM/DD/YYYY`, the date will not parse and notes will not appear on the calendar.

### Gallery View

Gallery view treats each note as a card. It is most useful when your notes contain an `image` field or a cover image path.

Configure it by selecting a field to display as the card subtitle (e.g., `tags` or `summary`). If you manage a mood board, a reading list with book covers, or a portfolio of visual references, Gallery view has a practical place in your workflow.

---

## 4. Three Ready-to-Use Project Templates for Your Vault {#templates}

Create a folder for each project, add notes with the frontmatter below, then point a new Project at that folder.

### Template 1: Content Creation Pipeline

```yaml
---
title: "Article Title Here"
author: "Alex Chen"
status: "idea"
publish-date: 
tags: [content]
word-count: 0
url: ""
---
```

**Status values for your Board:** `idea`, `outline`, `draft`, `review`, `published`

Point your Project at your `Content/` folder. Use Board view grouped by `status`. Use Calendar view on `publish-date` to manage your editorial calendar.

### Template 2: Academic Research Tracker

```yaml
---
title: "Paper or Book Title"
author: "Alex Chen"
authors: ""
status: "to-read"
added-date: 2024-01-01
topic: ""
key-insight: ""
---
```

**Status values for your Board:** `to-read`, `reading`, `synthesized`, `archived`

Use Table view to sort by `topic` and find clusters. Use the `key-insight` field to force yourself to write one-line takeaways before marking a source as `synthesized`.

### Template 3: Simple GTD Dashboard

```yaml
---
title: "Task or Project Name"
author: "Alex Chen"
status: "inbox"
context: ""
energy: "medium"
due: 
project: ""
---
```

**Status values for your Board:** `inbox`, `next-action`, `waiting`, `someday`, `done`

This maps directly to standard GTD stages. Filter the Board to hide `done` items to keep the view clean. Use Calendar view on `due` for time-sensitive commitments.

---

## 5. Advanced Workflow: Combining Projects with Templater and QuickAdd {#advanced}

This is where Obsidian project management moves from useful to genuinely powerful.

### Using Templater to Pre-Fill Frontmatter

Install the Templater plugin(URL_PLACEHOLDER_5) and create a template file for each project type. Example for the content pipeline:

```
---
title: <% tp.file.title %>
author: "Alex Chen"
status: "idea"
publish-date: <% tp.date.now("YYYY-MM-DD") %>
tags: [content]
word-count: 0
url: ""
---
```

When you create a new note in your `Content/` folder using this template, the frontmatter is already correct. The note appears in your Projects dashboard immediately with no manual editing.

### Using QuickAdd to Capture Into the Right Folder

QuickAdd lets you trigger a capture command from anywhere in your vault — or from a hotkey — and route the new note directly into a specific folder with a specific template applied.

Setup steps:
1. Install [QuickAdd](URL_PLACEHOLDER_6).
2. Create a new Macro called `New Article Idea`.
3. Add a **Capture** step, set the file path to `Content/{{VALUE}}.md`, and assign your Templater content template.
4. Assign a hotkey (e.g., `Ctrl+Shift+A`).

Now, from anywhere in your vault, press the hotkey, type the article title, and a new note lands in `Content/` with complete frontmatter, ready to appear in your Projects Board as an `idea`.

If you are on a Mac and want to extend this capture workflow to system-wide clipboard management or text expansion across apps, [Setapp](URL_PLACEHOLDER_7) is worth looking at — it includes tools like Raycast extensions, clipboard managers, and text expanders that pair directly with this kind of rapid-capture workflow, all under a single subscription.

### Embedding Dataview Inside Project Notes

For a running summary inside a project note itself, add a Dataview block at the bottom:

```dataview
TABLE status, publish-date FROM "Content"
WHERE status != "published"
SORT publish-date ASC
```

This gives you a dynamic list of everything still in progress, embedded directly in your project hub note. Projects handles your visual views; Dataview handles the reporting layer.

---

## 6. Troubleshooting Common Issues {#troubleshooting}

### "My notes are not appearing in the project"

Check these in order:
1. **Folder path is wrong.** The path is case-sensitive and must match the exact folder name in your vault. `content` and `Content` are different.
2. **Filters are hiding them.** Click the Filter button and confirm no active filters exclude your notes.
3. **Template files are included.** Add your templates folder to the excluded paths in plugin settings.
4. **Notes have no frontmatter.** A note with zero frontmatter still appears, but notes inside subfolders do not unless you enable recursive folder scanning in project settings.

### "Dates are showing incorrectly or not at all"

The plugin's date format setting and your YAML values must match exactly.
- If your notes use `due: 2024-03-15`, set the plugin format to `YYYY-MM-DD`.
- Avoid natural language dates like `March 15` — the parser does not handle them reliably.
- Dates must be quoted as strings or plain ISO format. `due: "2024-03-15"` and `due: 2024-03-15` both work. `due: March 15, 2024` does not.

### "Filters are not returning the right results"

Filter logic is AND-based — all conditions must be true. If you add two filters expecting OR behavior (show items where status is `draft` OR `review`), you will get zero results. Workaround: Use Board view and hide columns instead, or run a Dataview query for OR logic.

### "Performance is slow on a large vault"

If your Projects folder contains more than 500 notes, switch to a Dataview query as the data source instead of a folder path. Dataview's indexing is more efficient for large sets. Also, close unused view tabs — each active view rerenders on file save events.

---

## 7. Final Verdict: Is the Projects Plugin Right for You? {#verdict}

**Pros:**
- Visual project management with zero query syntax.
- Inline frontmatter editing saves constant file-open-edit-close cycles.
- Four genuinely different view types covering most workflow needs.
- Active maintenance and a clear, focused scope.

**Cons:**
- Less flexible than Dataview for anything involving cross-folder aggregation or calculated fields.
- Board view columns are limited to a single grouping field — you cannot group by two dimensions simultaneously.
- Gallery view is underpowered compared to purpose-built tools.

**Final recommendation by user type:**

| User Type | Recommendation |
|---|---|
| Content creator | Strong yes — pipeline management is its sweet spot |
| Academic researcher | Yes — especially with the research tracker template above |
| Developer tracking tasks | Yes for personal use; less so for team projects |
| GTD practitioner | Yes for basic GTD; use alongside Dataview for weekly reviews |
| Pure Dataview power user | Optional — only add it if you want visual views |

The Projects plugin earns its place in any intermediate-to-advanced Obsidian vault. It solves the specific problem of visual, editable project tracking without requiring you to become a query language expert.

> 📘 **Want to go deeper?** If this plugin has sparked an interest in building a complete personal [knowledge management](/posts/using-obsidian-for-long-term-evergreen-note-management/) system — not just project tracking but the whole thinking infrastructure — [Nick Milo's Linking Your Thinking course](URL_PLACEHOLDER_8) is the most structured and practical path I have seen for Obsidian users who want to invest in that seriously.

---

## Conclusion

The Obsidian Projects plugin is one of the few community plugins that genuinely changes how you interact with your vault on a daily basis. It does not try to do everything — it turns folders of notes into visual, editable dashboards and does that one job very well. Pair it with Templater and QuickAdd, apply one of the templates above, and you will have a functional project management system running in under an hour.

Start with the content pipeline or GTD template, spend fifteen minutes getting your frontmatter consistent, and the rest follows naturally. The plugin rewards users who invest in clean, consistent note structure — which is a good habit to build regardless.

---
*Disclosure: Some links in this article are affiliate links. If you purchase through them, this site earns a commission at no additional cost to you.*

---

## Frequently Asked Questions

### Does the Obsidian Projects plugin work on mobile?

Yes. The plugin runs on Obsidian mobile. Views render correctly, and inline editing works on touch. Sync your vault with [Obsidian Sync](URL_PLACEHOLDER_3) to keep project configurations identical across devices.

### Can I use the Projects plugin without any YAML frontmatter?

Partially. Notes without frontmatter still appear in the project as rows, but you will have no columns to work with beyond the note title. The plugin becomes useful proportionally to how consistently you use frontmatter.

### Is the Projects plugin a replacement for Notion or Airtable?

For solo use within your vault, it replaces a significant portion of what people use Notion databases for — especially content pipelines and research trackers. It has no collaboration features, no API, and no external sharing, so it is not a Notion replacement for teams.

### Can I have multiple projects pointing at the same folder?

Yes, and this is genuinely useful. You can have one project using Table view to edit fields and a second project pointing at the same folder using Calendar view to track deadlines. Both read and write to the same notes.

### How does the Projects plugin handle notes that belong to multiple projects?

If you use folder-based projects, a note can only belong to one project (the folder it lives in). If you use tag-based projects, a single note can appear in multiple projects by carrying multiple tags. This is the main practical reason to choose tags over folders as your data source.

## Related Reading

- [What is the Obsidian Full Calendar Plugin?](/posts/obsidian-full-calendar-plugin-review/)
- [What is the Obsidian Git Plugin? (A Simple Explanation)](/posts/what-is-the-obsidian-git-plugin-for/)
- [Why Manage Projects in Obsidian? The Power of a Unified System](/posts/using-obsidian-tasks-plugin-for-project-management/)
- [What is Excalidraw and Why Use It in Obsidian?](/posts/excalidraw-plugin-for-obsidian-review/)
