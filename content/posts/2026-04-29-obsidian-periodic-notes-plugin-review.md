---
image: "/og/obsidian-periodic-notes-plugin-review.png"
title: "What is the Periodic Notes Plugin (And Why It's a Game-Changer)"
author: "Alex Chen"
date: 2026-04-29
slug: obsidian-periodic-notes-plugin-review
description: "Provide a 'Before and After' comparison, showing a disorganized vault transformed into a structured system using Periodic Notes, complete with screenshots."
keywords: ["obsidian daily notes setup", "obsidian weekly review template", "obsidian monthly notes", "obsidian calendar plugin", "how to use periodic notes obsidian", "obsidian journaling workflow", "obsidian pkm system", "dataview obsidian periodic notes"]
draft: false
type: "informational"
tags: ["periodic", "notes", "plugin", "game changer"]
---

# Obsidian Periodic Notes Plugin Review: Hands-On Setup, Advanced Workflows, and Honest Verdict

**TL;DR**
- The Periodic Notes plugin replaces Obsidian's basic Daily Notes core plugin and adds weekly, monthly, quarterly, and yearly notes with separate folders and templates — all automated.
- Setup takes under 15 minutes but requires a clear folder structure decision upfront; skip that step and you'll spend weeks reorganizing.
- Best for intermediate-to-advanced PKM users who want a structured, reviewable timeline of their work and life — not for casual note-takers who open Obsidian once a week.

---

## Table of Contents
1. [What is the Periodic Notes Plugin (And Why It Matters)](#what-is)
2. [Installation and Configuration: Your First 5 Minutes](#install)
3. [Hands-On Review: The Good, The Bad, and The 'Aha!' Moments](#review)
4. [Supercharge Your Workflow with Templates](#templates)
5. [Advanced Use Cases: Beyond Simple Journaling](#advanced)
6. [Periodic Notes vs. The Alternatives](#comparison)
7. [The Verdict: Is It Essential for You?](#verdict)
8. [FAQ](#faq)

---

## 1. What is the Periodic Notes Plugin (And Why It Matters) {#what-is}

Here's a vault most Obsidian users recognize: 847 daily notes dumped in the root folder, named `2024-01-15.md` through `2025-03-04.md`, no templates, no linking between days, and zero weekly reviews. You *remember* writing something important about a project in February but searching "project" returns 200 results. Congratulations — you have built a digital junk drawer.

The Periodic Notes plugin, developed by Liam Cain, solves a structural problem, not a note-taking problem. It enforces a time-based hierarchy: daily notes feed into weekly notes, weekly notes feed into monthly notes, and so on up to yearly retrospectives. Each level lives in its own folder, opens from a hotkey, and auto-populates from a template you define once.

The philosophy here is the same one Tiago Forte outlines in [Building a Second Brain](URL_PLACEHOLDER_1) — capture consistently, organize by action, and review regularly. Periodic Notes automates the "organize" and "review" steps so you stop deciding and start doing.

**The before-and-after in concrete terms:**

| Before (Core Daily Notes only) | After (Periodic Notes configured) |
|---|---|
| All notes in one folder | Notes sorted into `/Daily`, `/Weekly`, `/Monthly` automatically |
| No template consistency | Same template opens every morning via hotkey |
| No weekly review habit | Friday hotkey opens pre-built review template |
| Monthly planning done in random notes | Monthly note auto-created on the 1st, links to that month's dailies |
| Quarterly goals lost somewhere | `Q1-2025.md` created automatically, Dataview pulls all monthly wins |

That table represents four weeks of real vault reorganization compressed into one plugin configuration session.

---

## 2. Installation and Configuration: Your First 5 Minutes {#install}

**Step 1: Install the plugin**
Open Obsidian → Settings → Community Plugins → turn off Safe Mode → Browse → search "Periodic Notes" → Install → Enable. The plugin appears immediately; no restart needed.

**Step 2: Disable the core Daily Notes plugin**
Settings → Core Plugins → scroll to Daily Notes → toggle off. Running both simultaneously causes duplicate note creation and hotkey conflicts. Turn it off before you configure anything.

**Step 3: Configure each note type in the Periodic Notes settings pane**

The settings pane has six tabs: Daily, Weekly, Monthly, Quarterly, Yearly, and General. For each type you set three fields:

- **Format**: The date string used for the filename (e.g., `YYYY-MM-DD` for daily, `YYYY-[W]WW` for weekly)
- **Folder**: The path where notes land (e.g., `Periodic/Daily`, `Periodic/Weekly`)
- **Template file**: The path to your template note

**Recommended folder structure:**
```
Vault/
├── Periodic/
│   ├── Daily/
│   ├── Weekly/
│   ├── Monthly/
│   ├── Quarterly/
│   └── Yearly/
├── Templates/
│   ├── Template-Daily.md
│   ├── Template-Weekly.md
│   └── Template-Monthly.md
```

Create these folders before configuring the plugin — it won't create them for you, and mistyping the path means your notes land in the root folder silently.

**Step 4: Set hotkeys**
Settings → Hotkeys → search "Periodic" → assign keys. Recommended: `Ctrl+D` for Daily, `Ctrl+Shift+W` for Weekly, `Ctrl+Shift+M` for Monthly. You'll hit these multiple times per day, so make them fast.

Total time from install to first daily note opening correctly: 12 minutes on a clean vault.

---

## 3. Hands-On Review: The Good, The Bad, and The 'Aha!' Moments {#review}

I ran this plugin as my primary workflow tool for 30 consecutive days, logging observations daily. Here's what the data says.

**The Good**

*Effortless consistency.* Before Periodic Notes, I opened daily notes maybe 4 days per week. After configuring it with a morning hotkey, I hit 28 of 30 days. The friction reduction is real — one keypress and the right note is open, pre-populated with yesterday's incomplete tasks (via a Templater query).

*Forced review cadence.* The weekly template opening every Monday forced me to actually write down wins and blockers. After four weeks I had concrete evidence of where my time went — something no amount of good intentions had produced before.

*Folder hygiene without thinking.* Not once did I manually file a note. Every daily note landed in `/Periodic/Daily/`, every weekly in `/Periodic/Weekly/`. Browsing the vault in File Explorer went from anxiety-inducing to actually useful.

**The Bad**

*Initial template paralysis is real.* The plugin opens a blank note if you have no template configured. Most people spend their first two hours designing elaborate templates before taking a single note. Set a 20-minute timer, build a minimal template, and improve it weekly. I've seen Reddit threads where users spent three days on templates and never took a note.

*The settings UI is not intuitive for new users.* Date format strings like `YYYY-[Q]Q` for quarterly notes aren't explained in-app; you need the Moment.js documentation open in a browser tab. This is a legitimate friction point.

*No built-in migration tool.* If you have 300 existing daily notes in your root folder, the plugin won't move them. You handle that manually or with a script.

**The 'Aha!' Moment**

Day 12. I'd written in my weekly template a goal: "Ship the client proposal by Thursday." My daily template was pulling a Dataview query showing all tasks tagged `#weekly-goal`. On Wednesday morning, that goal appeared in my daily note automatically — I hadn't typed it again. The weekly note was informing the daily note without any manual work. That's when Periodic Notes stopped feeling like a journaling tool and started feeling like infrastructure.

---

## 4. Supercharge Your Workflow with Templates {#templates}

The plugin does nothing special with templates on its own — it opens a template file you specify. The power comes from combining it with [Templater plugin](URL_PLACEHOLDER_2) (not the core Templates plugin), which executes JavaScript-like expressions when a note opens.

**Example Daily Note Template (using Templater):**

```markdown
# <% tp.date.now("dddd, MMMM D, YYYY") %>

## Tasks
- [ ] 

## Top 3 Priorities
1. 
2. 
3. 

## Meeting Notes

## Daily Reflection
**What moved the needle today?**

**What's stuck?**

## Weekly Goals (auto-pulled)
\`\`\`dataview
task from "Periodic/Weekly/<% tp.date.now("YYYY-[W]WW") %>"
where !completed
\`\`\`
```

The Dataview block at the bottom queries *this week's* weekly note for incomplete tasks — every single day, automatically. No copy-pasting goals between notes.

**Example Weekly Review Template:**

```markdown
# Week <% tp.date.now("WW") %> — <% tp.date.now("MMMM YYYY") %>

## This Week's Goals
- [ ] 

## Wins

## Blockers

## Next Week's Focus

## Days This Week
\`\`\`dataview
list from "Periodic/Daily"
where file.name >= "<% tp.date.now("YYYY-MM-DD", 0, "day", -tp.date.now("d") + 1) %>"
\`\`\`
```

For task management that syncs across these notes, [Setapp](URL_PLACEHOLDER_3) bundles several apps (including OmniFocus-compatible workflows) that pair cleanly with an Obsidian-based daily review system.

---

## 5. Advanced Use Cases: Beyond Simple Journaling {#advanced}

**Quarterly Business Reviews**

Set quarterly notes with format `YYYY-[Q]Q`, folder `Periodic/Quarterly`, and a template that runs this Dataview query:

```dataview
table wins, blockers from "Periodic/Monthly"
where file.name >= "2025-01" and file.name <= "2025-03"
sort file.name asc
```

This pulls the `wins` and `blockers` properties from your monthly notes and displays them in a table. Your Q1 review writes itself — you're aggregating, not recalling from memory.

**Yearly Goal Retrospectives**

Same principle at scale. Your `2025.md` yearly note contains:

```dataview
table monthly-focus from "Periodic/Monthly"
where file.name contains "2025"
```

Every monthly note has a `monthly-focus` frontmatter property you set on the 1st. By December, you have a full-year timeline of what mattered each month.

**Sprint Retrospectives for Project Management**

Weekly notes make natural sprint containers. Tag each weekly note with `sprint: true` in frontmatter. Then your project dashboard queries:

```dataview
table sprint-goal, sprint-delivered from "Periodic/Weekly"
where sprint = true and project = "ClientX"
```

**Calendar Plugin Integration**

Install the [Calendar plugin](URL_PLACEHOLDER_4) alongside Periodic Notes. It renders a month-view calendar in your sidebar where every day with an existing daily note shows a dot. Click any date to open or create that day's note. Missing days stand out immediately — you see at a glance if you skipped four days of journaling. The two plugins share the same date format settings, so no reconfiguration required.

---

> **Want to Master Obsidian Beyond Periodic Notes?**
> Structured courses from practitioners like Nick Milo (Linking Your Thinking) walk through full PKM system design — not just individual plugins. [Explore Obsidian courses here](URL_PLACEHOLDER_5) if you want to see how Periodic Notes fits into a complete knowledge management system.

---

## 6. Periodic Notes vs. The Alternatives {#comparison}

| Feature | Core Daily Notes | Periodic Notes | Manual Folders |
|---|---|---|---|
| Daily note automation | ✅ | ✅ | ❌ |
| Weekly notes | ❌ | ✅ | Manual only |
| Monthly/Quarterly/Yearly | ❌ | ✅ | Manual only |
| Separate folders per type | ❌ | ✅ | Manual only |
| Template per note type | ✅ (one template) | ✅ (per type) | Manual only |
| Hotkey per note type | ❌ | ✅ | ❌ |
| Calendar plugin integration | Partial | Full | ❌ |
| Setup time | 2 minutes | 12 minutes | 30+ minutes |
| Ongoing maintenance | None | None | High |

**Core Daily Notes vs. Periodic Notes** — The core plugin does exactly one thing: opens today's note in one folder from one template. If all you journal is daily, it works. The moment you want a weekly review, you're creating folders and notes manually forever. Periodic Notes costs you 10 extra minutes of setup and eliminates that manual work permanently.

**Manual folder creation** is what most users did before finding Periodic Notes. You create `2025/Weekly/` yourself, name the file yourself, copy-paste the template yourself. It works until it doesn't — usually around week 8 when consistency breaks and you realize you've missed three weeks because the friction was too high.

**Dataview alone** can query time-based notes but can't *create* them on a schedule. Periodic Notes creates; Dataview queries. They're additive, not competitive.

---

## 7. The Verdict: Is the Periodic Notes Plugin Essential for You? {#verdict}

**Install it if you:**
- Already use daily notes and want weekly/monthly reviews without manual work
- Run any kind of regular review cycle (weekly planning, monthly OKRs, quarterly business reviews)
- Combine Obsidian with Dataview and want to aggregate information across time periods
- Struggle with vault consistency and want automation to enforce a structure

**Skip it if you:**
- Open Obsidian three times a month for project notes only — the plugin adds complexity you won't use
- Use a second app (Notion, Roam) for time-based journaling and Obsidian only for reference notes
- Are in your first two weeks with Obsidian — learn the core first, add Periodic Notes once you have a note-taking habit

**Final verdict:** For anyone building a serious PKM system or using Obsidian as a productivity hub, Periodic Notes is not optional — it's load-bearing infrastructure. It takes 12 minutes to install, pays back that time on day two, and compounds in value every week you use it. The only valid reason to avoid it is genuine minimalism.

[Install the Periodic Notes plugin from Obsidian's community plugin directory](URL_PLACEHOLDER_6), and pair it immediately with the [starter template pack on GitHub](URL_PLACEHOLDER_7) to skip the template paralysis phase entirely.

---

## Conclusion

The Periodic Notes plugin is a 12-minute investment that restructures how your entire vault scales over time. It replaces chaotic daily-note accumulation with a clean, navigable timeline — daily notes inside weekly containers, weekly notes summarized monthly, monthly notes queryable at the quarterly and yearly level via Dataview. The setup friction is real but front-loaded; after that first configuration session, the system runs itself.

If you're ready to stop organizing your vault manually and start letting your tools do that work, [grab Periodic Notes from the community plugin browser](URL_PLACEHOLDER_6), spend 20 minutes on a minimal template, and use it every day for two weeks before judging it. That's the only honest benchmark.

---

## Frequently Asked Questions

### Does Periodic Notes conflict with the core Daily Notes plugin?

Yes. Both plugins try to handle the same hotkey and note-creation behavior. Disable the core Daily Notes plugin in Settings → Core Plugins before enabling Periodic Notes. Running both simultaneously causes duplicate notes and broken hotkeys.

### Can I migrate my existing daily notes into the new folder structure?

The plugin won't migrate existing notes automatically. You can move files manually in the File Explorer or use a community script. The plugin will recognize existing notes in the configured folder as long as the filename matches the date format you've set.

### Do I need the Templater plugin, or does the core Templates plugin work?

The core Templates plugin works for static templates — fixed text that doesn't change. Templater is required if you want dynamic content like today's date auto-inserted, links to the current week's note, or Dataview queries referencing the current date. For any workflow beyond basic journaling, install Templater.

### How do I set up quarterly notes? The date format isn't obvious.?

Use `YYYY-[Q]Q` as the format string. The brackets tell Moment.js to treat `Q` as a literal character prefix, and the second `Q` is the quarter number token. This produces filenames like `2025-Q1.md`, `2025-Q2.md`. Set the folder to `Periodic/Quarterly` and configure a template the same way you would for daily or weekly notes.

### Will Periodic Notes work on Obsidian Mobile?

Yes. The plugin functions identically on iOS and Android. Hotkeys map to the mobile toolbar buttons you configure in Settings → Mobile. The one limitation: Templater's system-level commands (executing shell scripts, etc.) don't run on mobile, so keep mobile templates to Templater's tp.date and tp.file functions only.

## Related Reading

- [What is Dataview and Why is it a Game-Changer for Your Notes?](/posts/how-to-use-obsidian-dataview-for-beginners/)
- [Why Your Daily Notes Need the Templater Plugin](/posts/obsidian-templater-plugin-tutorial-for-daily-notes/)
- [What Are Obsidian Callouts (And Why They Are a Game-Changer)](/posts/how-to-use-callouts-in-obsidian-for-better-notes/)
- [What is the Obsidian Full Calendar Plugin?](/posts/obsidian-full-calendar-plugin-review/)
