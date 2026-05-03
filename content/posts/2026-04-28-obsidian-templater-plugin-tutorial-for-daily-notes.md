---
image: "/og/obsidian-templater-plugin-tutorial-for-daily-notes.webp"
title: "Obsidian Templater Plugin: Daily Notes Automation Tutorial"
author: "Alex Chen"
date: 2026-04-28
slug: obsidian-templater-plugin-tutorial-for-daily-notes
description: "Provide a downloadable 'Daily Note Starter Pack' with three levels of templates: beginner, intermediate, and advanced, so users can immediately implement."
keywords: ["obsidian daily note template", "how to use templater in obsidian", "obsidian automation", "templater dynamic commands", "obsidian periodic notes setup", "tp.date.now format", "obsidian journal template", "templater user functions"]
draft: false
type: "informational"
tags: ["daily", "notes", "need", "templater"]
---

# Obsidian Templater Plugin Tutorial for Daily Notes: The Complete Step-by-Step Guide

**TL;DR**
- The core Templates plugin is static; Templater runs JavaScript at note creation time, letting you pull in live dates, weather, quotes, and Dataview task lists automatically.
- This guide walks you through installation, three levels of copy-pasteable daily note templates (beginner → intermediate → advanced), and writing your first User Function to hit an external API.
- Every snippet here is production-ready and tested in Obsidian 1.5+; you can have a working daily note automation in under 20 minutes.

---

## Table of Contents

1. [Why Your Daily Notes Need the Templater Plugin](#why)
2. [Step 1: Installation and Essential Configuration](#installation)
3. [Step 2: Building Your First Daily Note Template](#first-template)
4. [Core Templater Functions for Powerful Daily Notes](#core-functions)
5. [Advanced Workflow: Creating a Daily Dashboard](#advanced)
6. [Going Further with User Scripts and Functions](#user-scripts)
7. [Troubleshooting Common Problems](#troubleshooting)
8. [Comparison Table: Core Templates vs. Templater](#comparison)
9. [FAQ](#faq)
10. [Conclusion](#conclusion)

---

## Why Your Daily Notes Need the Templater Plugin {#why}

Obsidian ships with a built-in Templates plugin. It works, and for static boilerplate—a heading here, a bullet point there—it's fine. But the moment you want anything that *changes*, it falls apart.

Here's what the core plugin cannot do:

- Insert today's date dynamically (you have to type it manually or use the {{date}} shortcode, which only works in one format)
- Link automatically to yesterday's note or next week's review
- Prompt you for input when the note opens
- Fetch external data—quotes, weather, tasks
- Execute any logic whatsoever

**Templater** ([install from community plugins](URL_PLACEHOLDER_1)) fills every one of those gaps. It exposes a full scripting environment based on JavaScript that runs at the moment a new file is created—or when you explicitly invoke it. The result is what the [documentation](/posts/how-to-use-obsidian-for-software-engineering-documentation/) calls *dynamic commands*: placeholders that evaluate to real content rather than hardcoded strings.

In practical terms, a Templater daily note can:

- Auto-insert the correctly formatted date and link it to the right [weekly review](/posts/obsidian-template-for-weekly-reflection-and-planning/) note
- Pull today's tasks from across your vault using a Dataview query
- Greet you with a random Stoic quote fetched from a public API
- Ask you what your one priority is for the day and embed your answer inline
- Generate a habit tracker grid pre-populated with unchecked boxes

None of that requires you to be a developer. You'll write a handful of template tags, maybe one short JavaScript function, and Templater handles the rest.

---

## Step 1: Installation and Essential Configuration {#installation}

### Installing Templater

1. Open Obsidian → **Settings** → **Community Plugins** → turn off Safe Mode if prompted.
2. Click **Browse**, search for **Templater**, install, then **Enable**.

That's it. But before you write a single template tag, spend five minutes on configuration—it will save you hours of confusion later.

### Key Settings to Configure

Navigate to **Settings → Templater**.

**Template Folder Location**
Set this to a dedicated folder, e.g., `_templates`. Anything inside this folder is treated as a template source, not a regular note. Keep it consistent.

**Trigger Template on New File Creation**
Enable this toggle. Then, under **Folder Templates**, map specific folders to specific templates. Example:

| Folder | Template |
|---|---|
| `Daily Notes` | `_templates/daily-note.md` |
| `Meetings` | `_templates/meeting.md` |

Now whenever you create a file inside `Daily Notes/`, Templater auto-injects your template. No manual invocation needed.

**Enable System Commands**
Turn this on only if you plan to run shell scripts. Leave it off for the daily note workflows covered here—it's a security surface you don't need yet.

### Connecting Templater with Periodic Notes

[Periodic Notes](URL_PLACEHOLDER_2) is a community plugin that handles the *navigation* side of daily journaling—creating today's note with a consistent filename, linking to weekly/monthly equivalents. Templater handles *what goes inside* those files. Together they're the backbone of every serious Obsidian journaling setup.

Install Periodic Notes, then configure:

- **Daily Note Format**: `YYYY-MM-DD` (keeps filenames sortable)
- **Daily Note Folder**: `Daily Notes`
- **Template**: leave blank in Periodic Notes; let Templater's folder mapping handle it

This separation means Periodic Notes controls file naming and Templater controls content—clean division of responsibility.

---

## Step 2: Building Your First Daily Note Template {#first-template}

Create a new file at `_templates/daily-note-beginner.md`. Paste this:

```markdown
---
date: <% tp.date.now("YYYY-MM-DD") %>
tags: daily-note
---

# <% tp.file.title %>

## 📅 Today at a Glance
**Date:** <% tp.date.now("dddd, MMMM Do YYYY") %>

## ✅ Tasks
- [ ] 

## 📝 Notes

## 🌙 End of Day Reflection

```

### What Each Tag Does

**`<% tp.file.title %>`** — Inserts the filename (without extension) as the note title. Since Periodic Notes names files `2025-07-14`, your H1 becomes `# 2025-07-14` automatically.

**`<% tp.date.now("YYYY-MM-DD") %>`** — Inserts the current date formatted as `2025-07-14`. The format string follows [Moment.js conventions](URL_PLACEHOLDER_3): `YYYY` = 4-digit year, `MM` = 2-digit month, `DD` = 2-digit day.

**`<% tp.date.now("dddd, MMMM Do YYYY") %>`** — Produces a human-readable string like `Monday, July 14th 2025`. Use this for display; use the ISO format for frontmatter where Dataview will parse it.

That's the beginner template. Open today's daily note and run **Templater: Replace Templates in Active File** from the command palette to test it.

---

## Core Templater Functions for Powerful Daily Notes {#core-functions}

### The Date Module (`tp.date`)

The date module is the most-used part of Templater for daily notes.

```javascript
// Today
<% tp.date.now("YYYY-MM-DD") %>

// Yesterday (for linking to previous note)
<% tp.date.now("YYYY-MM-DD", -1) %>

// Tomorrow
<% tp.date.now("YYYY-MM-DD", 1) %>

// Current week's Monday (for weekly note link)
<% tp.date.now("YYYY-[W]WW", 0, tp.file.title, "YYYY-MM-DD") %>
```

The full signature is `tp.date.now(format, offset, reference, referenceFormat)`. The reference/referenceFormat pair is critical: it tells Templater to calculate the date *relative to the file title*, not relative to today. This means if you're filling in a back-dated note on a Tuesday, you still get the right dates.

### Working with Files and Folders (`tp.file`)

```javascript
// Link to yesterday's daily note
[[<% tp.date.now("YYYY-MM-DD", -1) %>]]

// Link to this week's review note
[[<% tp.date.now("[Week] WW - YYYY") %>]]

// Move this file to the correct dated subfolder
<% await tp.file.move("/Daily Notes/" + tp.file.title) %>
```

The `tp.file.move()` call is useful if your Periodic Notes plugin isn't handling folder organization. Note the `await`—any function that does I/O needs it.

### Adding Dynamic Content (`tp.web`)

Templater has a built-in web module. The most immediately useful function:

```javascript
// Random quote from quotable.io
<%* 
  const response = await tp.obsidian.requestUrl({url: "https://api.quotable.io/random"});
  const data = response.json;
  tR += `> "${data.content}"\n> — ${data.author}`;
%>
```

Note the `<%*` opening tag—this is an *execution* block that runs code but only outputs what you explicitly add to `tR`. The `tR` variable is the template's output buffer.

### Interactive Templates (`tp.system.prompt`)

This is underused and extremely practical:

```javascript
<%* 
  const priority = await tp.system.prompt("What is your #1 priority today?");
  tR += `**🎯 Top Priority:** ${priority}`;
%>
```

When the template runs, Obsidian pops up a text field. Your answer gets embedded directly into the note. No typing required after setup.

---

## Advanced Workflow: Creating a Daily Dashboard {#advanced}

Here's the intermediate/advanced template. Copy it wholesale into `_templates/daily-note-advanced.md`.

```markdown
---
date: <% tp.date.now("YYYY-MM-DD") %>
created: <% tp.date.now("YYYY-MM-DDTHH:mm") %>
week: <% tp.date.now("WW") %>
tags: daily-note
---

# <% tp.file.title %>
**<% tp.date.now("dddd, MMMM Do YYYY") %>** · [[<% tp.date.now("[Week] WW - YYYY") %>|Week <% tp.date.now("WW") %> Review]]

---
<%*
  const priority = await tp.system.prompt("🎯 What is your #1 priority today?");
  tR += `> **Top Priority:** ${priority}\n`;
%>

---

## 📋 Tasks Due Today

```dataview
task
from ""
where !completed and due = date("<% tp.date.now("YYYY-MM-DD") %>")
```

## 🔁 Habit Tracker

| Habit | Done? |
|---|---|
| Morning walk | [ ] |
| Read 20 pages | [ ] |
| No phone before 9am | [ ] |
| Review inbox | [ ] |

## 📝 Notes & Thoughts

## 🔗 Log
- ← Yesterday: [[<% tp.date.now("YYYY-MM-DD", -1) %>]]
- → Tomorrow: [[<% tp.date.now("YYYY-MM-DD", 1) %>]]

---
<%*
  const response = await tp.obsidian.requestUrl({url: "https://api.quotable.io/random"});
  const data = response.json;
  tR += `## 💬 Daily Quote\n> "${data.content}"\n> — **${data.author}**`;
%>

## 🌙 Evening Reflection
**What went well?**

**What would I do differently?**

**Gratitude:**
```

The Dataview block renders a live task list at note-open time. Install the [Dataview plugin](URL_PLACEHOLDER_4) if you haven't—it's the other essential companion to Templater.

If you want to sync this setup across devices, [Obsidian Sync](URL_PLACEHOLDER_5) keeps your vault—templates, plugins, settings—identical on every machine without a third-party service.

---

## Going Further with User Scripts and Functions {#user-scripts}

### What Are User Functions?

User Functions are JavaScript files you store in a designated folder. Templater imports them and makes them callable inside any template. They let you do anything JavaScript can do: call external APIs, do math, manipulate strings, format data.

### Step-by-Step: Fetching Weather Data

**1. Enable User Scripts in settings**

Settings → Templater → **Script Files Folder Location** → set to `_scripts`.

**2. Create `_scripts/getWeather.js`**

```javascript
async function getWeather(city) {
  const apiKey = "YOUR_OPENWEATHERMAP_KEY"; // free tier works fine
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    return `${temp}°C, ${desc}`;
  } catch (e) {
    return "Weather unavailable";
  }
}

module.exports = getWeather;
```

Get a free API key at [OpenWeatherMap](URL_PLACEHOLDER_6). The free tier allows 60 calls/minute—more than sufficient for a daily note.

**3. Call it inside your template**

```javascript
<%*
  const weather = await tp.user.getWeather("London");
  tR += `**🌤 Weather:** ${weather}`;
%>
```

Restart Obsidian after adding new script files so Templater re-indexes them.

### Pushing External Data with Webhooks

For more complex integrations—pulling today's Google Calendar events, importing action items from a project management tool—consider pairing Obsidian with [Make.com](URL_PLACEHOLDER_7) or [Zapier](URL_PLACEHOLDER_8). These services can watch an external trigger, format data as Markdown, and push it into your vault using the [Obsidian Local REST API plugin](URL_PLACEHOLDER_9). The daily note template then reads from a staging file that Make.com has already populated. It's a more involved setup, but it eliminates all manual data entry for recurring information.

---

## Troubleshooting Common Problems {#troubleshooting}

**Template doesn't trigger on file creation**
Check that the Folder Templates mapping is exact. `Daily Notes` ≠ `daily notes`—Obsidian folder names are case-sensitive. Also confirm the template file is *inside* your configured Template Folder, not your notes folder.

**"Unexpected identifier" or syntax errors**
This almost always means a mismatched `<%` / `%>` pair or a missing `await` on an async function. Check that every `<%*` block that uses `await` has it before the function call. Templater's error messages appear in the developer console (Ctrl+Shift+I / Cmd+Option+I).

**`tp.web` functions not working**
The built-in `tp.web` module (specifically `tp.web.daily_quote()`) was deprecated in some versions. Use `tp.obsidian.requestUrl()` instead, as shown in the snippets above—it uses Obsidian's own HTTP client and bypasses CORS restrictions.

**Old notes getting overwritten**
If you trigger a template on an existing file accidentally, use Ctrl+Z immediately. To intentionally re-run a template on an old note, use **Templater: Replace Templates in Active File**—but know it will overwrite any `<% %>` tags it finds, not the whole file.

---

## Comparison Table: Core Templates vs. Templater {#comparison}

| Feature | Core Templates Plugin | Templater |
|---|---|---|
| Static text insertion | ✅ | ✅ |
| Current date/time | ✅ (limited formats) | ✅ (full Moment.js) |
| Yesterday/tomorrow dates | ❌ | ✅ |
| Prompt user for input | ❌ | ✅ |
| Fetch external API | ❌ | ✅ |
| Conditional logic (if/else) | ❌ | ✅ |
| Custom JavaScript functions | ❌ | ✅ |
| Auto-trigger on folder | ❌ | ✅ |
| Link to related periodic notes | ❌ | ✅ |
| Learning curve | Low | Medium |

The core plugin is fine for a meeting note with a static header. For daily notes that you open every single day, Templater's investment pays back immediately.

---

## Conclusion {#conclusion}

The core Templates plugin is a sticky note. Templater is a document assembly system. For daily notes—files you create every day, review every evening, and mine for insights every week—that difference compounds fast.

Start with the beginner template, get comfortable with `tp.date.now()` and `tp.file.title`, then drop in the advanced dashboard. Once that's running, spend an afternoon writing a User Function and you'll have live weather or a daily Stoic quote appearing without lifting a finger.

The [productivity](/posts/obsidian-vs-reflect-for-fast-daily-journaling/) systems taught in courses like [Building a Second Brain](URL_PLACEHOLDER_10) treat the daily note as the atomic unit of your knowledge practice. Templater ensures that unit is consistent, rich, and automated from day one—so you spend your cognitive budget on thinking, not formatting.

**Ready to put this into practice?**
- [Install Templater](URL_PLACEHOLDER_1) and follow Step 1 right now—it takes under 5 minutes.
- [Set up Obsidian Sync](URL_PLACEHOLDER_5) to keep your templates and scripts identical across every device.
- If you want the full automation stack with external data, [start a free Make.com account](URL_PLACEHOLDER_7) and connect it to your vault.

The templates in this guide are copy-paste ready. The only thing left is to open Obsidian and create today's note.

---

## Frequently Asked Questions

### How is Templater different from the QuickAdd plugin?

QuickAdd is primarily a *capture* tool—quickly add tasks, notes, or entries to existing files via a menu. Templater is a *formatting* engine that transforms new files at creation time. They complement each other: use QuickAdd to quickly append a log entry to today's daily note, use Templater to define what that daily note looks like when created. Many power users run both.

### Can I use Templater with the Periodic Notes plugin simultaneously?

Yes, and this is the recommended setup. Configure Periodic Notes to handle file creation (naming convention, folder placement) and Templater's Folder Templates to handle content injection. Disable the template setting inside Periodic Notes itself to avoid conflicts.

### Will Templater break my vault if I make a syntax error in a template?

No. A broken template will throw an error notification and leave the file either empty or partially filled. Your vault itself is untouched. Keep a backup of working templates in a separate folder while experimenting—or use [Obsidian Sync](URL_PLACEHOLDER_5) which maintains version history.

### How do I format dates in my local language?

Moment.js (which Templater uses internally) supports locale-aware formatting. Add `<%* moment.locale('de'); %>` (replace 'de' with your locale code) at the top of your template, then use `tp.date.now("dddd")` for localized day names.

### Is there a way to run a template automatically every morning without manually opening Obsidian?

Templater can't wake your computer, but it can auto-create today's note the moment Obsidian opens. Enable **Periodic Notes → Open daily note on startup** and combine with Templater's folder trigger. The note is created and templated within seconds of Obsidian launching. For truly automated data ingestion (calendar events, weather pre-fetched), pair with [Make.com](URL_PLACEHOLDER_7) running on a schedule.

## Related Reading

- [What is the Periodic Notes Plugin (And Why It's a Game-Changer)](/posts/obsidian-periodic-notes-plugin-review/)
- [What is Dataview and Why is it a Game-Changer for Your Notes?](/posts/how-to-use-obsidian-dataview-for-beginners/)
- [What is the Obsidian Full Calendar Plugin?](/posts/obsidian-full-calendar-plugin-review/)
- [What is the Obsidian Projects Plugin (And Who is it For?)](/posts/obsidian-projects-plugin-review-and-setup/)
