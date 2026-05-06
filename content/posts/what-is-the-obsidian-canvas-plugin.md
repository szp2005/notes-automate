---
image: "/og/what-is-the-obsidian-canvas-plugin.webp"
title: "Obsidian Canvas Plugin Guide: Infinite Visual Whiteboard"
author: "Alex Chen"
date: 2026-04-29
slug: what-is-the-obsidian-canvas-plugin
description: "Provide a gallery of inspirational, real-world canvas examples (e.g., project dashboards, storyboards, research maps) that go beyond simple mind maps."
keywords: ["obsidian canvas tutorial", "obsidian canvas examples", "how to use obsidian canvas", "obsidian mind map", "obsidian infinite canvas", "obsidian visual notes", "obsidian canvas vs excalidraw", "obsidian canvas workflow"]
draft: false
type: "informational"
tags: ["obsidian", "canvas", "infinite", "whiteboard"]
---

_As an Amazon Associate we earn from qualifying purchases. This post may contain affiliate links._

# What Is the Obsidian Canvas Plugin? A Practical Guide for Visual Thinkers

**Keyword focus:** what is the obsidian canvas plugin

---

## TL;DR

- **Obsidian Canvas is a free, built-in infinite whiteboard** that lets you spatially arrange notes, images, PDFs, and web content inside your existing vault — no subscription, no third-party app.
- Unlike Miro or Heptabase, every card on your canvas is directly linked to your real notes, so your visual maps stay in sync with your actual knowledge base.
- This guide walks through setup, five concrete workflows, advanced integrations with Dataview and backlinks, and honest troubleshooting tips for when things get slow or messy.

---

## Table of Contents

1. [What is Obsidian Canvas? The Infinite Whiteboard in Your Vault](#what-is)
2. [Getting Started: Your First 5 Minutes with Canvas](#getting-started)
3. [The Building Blocks: Understanding Canvas Cards](#building-blocks)
4. [Making Connections: How to Link and Organize Your Ideas](#connections)
5. [5 Practical Use Cases to Inspire You](#use-cases)
6. [Advanced Canvas Techniques and Integrations](#advanced)
7. [Obsidian Canvas vs. The Alternatives](#alternatives)
8. [Troubleshooting & Tips](#troubleshooting)
9. [Comparison Table](#comparison)
10. [FAQ](#faq)
11. [Conclusion](#conclusion)

---

## What Is Obsidian Canvas? The Infinite Whiteboard in Your Vault {#what-is}

Obsidian Canvas is a **core plugin** — meaning it ships with Obsidian and requires zero installation — that gives you an infinite, zoomable 2D workspace. You drag notes, images, PDFs, videos, and web pages onto a blank canvas, then draw lines between them to show how the ideas connect.

The file itself is saved as a `.canvas` file (JSON under the hood) directly in your vault. Open it in a text editor and you'll see coordinates, node IDs, and edge data — it's plain text, portable, and yours.

**Why does this matter against standard linear notes?** A note list forces you to choose a single hierarchy. A canvas doesn't. You can put a half-baked idea in the top-left corner, a finished argument in the centre, and a pile of raw sources on the right — and draw arrows between all of them without touching any of the original files.

This is closer to how people actually think during complex projects: spatially, relationally, non-linearly. Tools like Roam Research and Logseq gave us backlinks to simulate that. Canvas gives you the literal visual layer on top.

---

## Getting Started: Your First 5 Minutes with Canvas {#getting-started}

**Enable the plugin first.** Go to *Settings → Core Plugins → Canvas* and toggle it on. Done.

**Create a new canvas** three ways:
- Command palette (`Ctrl/Cmd + P`) → type "New Canvas"
- Right-click any folder in the file explorer → *New Canvas*
- Click the canvas icon in the ribbon (left sidebar)

**Navigation basics:**
- **Pan:** Hold `Space` and drag, or middle-click drag
- **Zoom:** Scroll wheel, or pinch on a trackpad
- **Fit to screen:** Press `Shift + 1` to see everything at once
- **Select all:** `Ctrl/Cmd + A`

The toolbar at the bottom has five buttons: select, text card, note card, media card, and link card. That's your entire starting toolkit. You can also double-click blank space to drop a text card immediately, which is the fastest entry point during a brainstorm.

---

## The Building Blocks: Understanding Canvas Cards {#building-blocks}

Canvas has four card types, each doing a specific job:

**1. Text cards** — Standalone markdown text. Write directly on the canvas without creating a note file. Use these for quick labels, questions, or short annotations you don't need to reference elsewhere.

**2. Note cards** — These embed an *existing* note from your vault. Critically, edits made on the canvas update the source file in real time. This is what separates Canvas from a whiteboard app: you're not copying content, you're surfacing it.

**3. Media cards** — Drop in images (PNG, JPG, SVG), PDFs, audio files, or videos. PDFs render page-by-page inline, which makes Canvas genuinely useful for annotating research papers alongside your own notes.

**4. Link/web cards** — Paste a URL and Canvas embeds a live webpage. Useful for pinning a competitor's site next to your analysis note, or keeping a data dashboard visible during a planning session.

**Resize any card** by dragging the corner handles. Cards can be made large enough to read fully without clicking in, which matters a lot when you're using Canvas as a dashboard you glance at rather than edit.

---

## Making Connections: How to Link and Organize Your Ideas {#connections}

Hover over the edge of any card until you see a small circle appear. Drag from that circle to another card to draw a connection line.

**Line options:**
- **Direction:** Lines can be bidirectional, one-way, or unconnected (just a line with no arrows)
- **Label:** Double-click any line to add a label — e.g., "causes," "contradicts," "leads to"
- **Color:** Right-click the line to pick a color. Color-coding relationship types (red = conflict, green = supports) is one of the most underused Canvas features

**Groups** are rectangular containers you draw around related cards. Right-click blank space → *Create group*. Label the group and give it a background color. Groups don't enforce any logic — they're purely visual — but they're excellent for separating phases of a project or thematic clusters in a research map.

**Color coding cards:** Right-click any card → *Color* to pick from six preset colors. Use this consistently across canvases (e.g., yellow = source, blue = my idea, red = unresolved question) and your canvases become readable at a glance.

---

## 5 Practical Use Cases to Inspire You {#use-cases}

### Use Case 1: Mind Mapping and Brainstorming

Put a single central question in the middle of a blank canvas as a text card. Branch outward with note cards for each sub-topic. Draw labeled edges like "example of" or "challenges." This is the classic obsidian mind map setup. The advantage over a dedicated mind map tool: every branch can link to a real note with 500 words of supporting detail.

For the theory behind why spatial brainstorming works, [The Back of the Napkin by Dan Roam](URL_PLACEHOLDER_1) is worth reading — it's the clearest book-length argument for visual thinking as a problem-solving method.

### Use Case 2: Project Dashboard

Create one canvas per project. Top row: the goal note + key deadline as a text card. Middle row: note cards for each task or deliverable (these link to your actual task notes). Bottom row: reference materials — PDFs, relevant notes, a web card linking to the client brief. At a glance, you see everything the project contains without a single folder-click.

If you have the Tasks plugin running, your task note cards show live checkbox states on the canvas. Complete a task in the note, and the canvas card updates automatically.

### Use Case 3: Storyboarding a Narrative or Presentation

Writers and content creators: put each scene or section as a note card, arranged left-to-right in sequence. Add a text card above each with a one-line summary. Draw arrows showing story flow. When you rearrange sections by dragging cards, the arrows follow. This beats a spreadsheet or sticky-note wall because the actual draft content is inside each card.

### Use Case 4: Visualizing a Research Topic

Drop your source PDFs as media cards on the left. Your literature-review notes in the centre. Your emerging argument notes on the right. Draw edges from specific sources to the claims they support. This is a zettelkasten visualization [workflow](/posts/streamlining-your-daily-note-workflow-for-better-[productivity](/posts/understanding-the-obsidian-internal-link-syntax-variations/)/) — you can see at a glance which arguments have two sources behind them and which are hanging in the air unsupported.

### Use Case 5: Building a Vault Homepage

Many Obsidian users create a "Home" canvas that sits at the top of their vault. It contains: a daily note card (embedding today's date-titled note), a projects group (cards linking to each active project's main note), a reading list card, and a goals card. Open Obsidian, open this canvas, and you have your entire context in one screen.

To dive deeper into PKM workflows like these, [this Obsidian Skillshare course](URL_PLACEHOLDER_2) covers the full system from daily notes to Canvas [dashboards](/posts/advanced-dataview-js-scripts-for-custom-obsidian-dashboards/) in structured video lessons.

---

## Advanced Canvas Techniques and Integrations {#advanced}

**Embedding a canvas inside a note:** Use the standard Obsidian embed syntax: `![[my-canvas.canvas]]`. The canvas renders inline as a small interactive preview. Useful for embedding a project canvas inside a project overview note.

**Graph view interaction:** Every note card on a canvas creates a backlink from the `.canvas` file to that note. Open your graph view and you'll see your canvas file as a hub node with spokes to every note it references. This means Canvas activity is reflected in your graph without any extra tagging.

**Dataview integration:** Dataview queries don't run inside Canvas text cards directly. The workaround: create a dedicated note with your Dataview query, then embed *that note* as a card on your canvas. You get a live, auto-updating data table inside your canvas dashboard. This is particularly powerful for surfacing notes by tag, status, or date.

**Custom CSS for Canvas:** Obsidian's `.canvas-node` CSS class controls card appearance. A small CSS snippet in your vault's `snippets` folder can change card border radius, background color defaults, or font size. The Obsidian forum's CSS section has ready-made Canvas snippets — search "canvas CSS snippet" there directly.

**Alignment tools:** Select multiple cards with `Shift + click`, then right-click for alignment options: align left edges, distribute horizontally, match widths. These tools transform a chaotic brainstorm dump into a readable structure in about two minutes.

---

## Obsidian Canvas vs. The Alternatives {#alternatives}

See the full comparison table in the next section. The short version:

**Canvas beats Miro and Heptabase** on one dimension specifically: your notes don't live in the canvas tool. They live in your vault. When you embed a note card, you're looking at the actual file. Change it anywhere and the canvas reflects it. No export, no sync, no version mismatch.

**Miro wins** when you need real-time multi-user collaboration, pre-built templates for team workshops, or integration with Jira and Confluence. Miro is a team communication tool. Canvas is a personal thinking tool.

**Heptabase** is the closest competitor philosophically — it's also built around linking visual cards to notes — but it's a subscription SaaS app. Your data lives on their servers under their pricing model. Canvas is local-first and free.

**Excalidraw** (a popular Obsidian community plugin, not a core plugin) beats Canvas for freehand drawing, custom shapes, and presentation-ready diagrams. If you need to draw arrows with custom styles or sketch rough wireframes, Excalidraw is the right tool. If you need to surface and connect actual vault content visually, Canvas is better. Many power users run both.

---

## Obsidian Canvas vs. The Alternatives: Comparison Table {#comparison}

| Feature | Obsidian Canvas | Miro | Heptabase | Excalidraw (plugin) |
|---|---|---|---|---|
| **Price** | Free (core plugin) | Free tier / $8–16/mo | $8.99/mo | Free (community plugin) |
| **Data location** | Local vault (your files) | Miro cloud servers | Heptabase cloud | Local vault |
| **Embeds real notes** | Yes (live) | No | Yes | Limited |
| **Real-time collaboration** | No | Yes | No | No |
| **Freehand drawing** | No | Yes | Limited | Yes |
| **Graph view integration** | Yes | N/A | N/A | Yes |
| **Works offline** | Yes | No | No | Yes |
| **Custom shapes/templates** | No | Yes (extensive) | Limited | Yes |
| **PDF embedding** | Yes | Limited | Yes | No |

---

## Troubleshooting & Tips {#troubleshooting}

**Canvas feels slow with 50+ cards:** Canvas renders everything in the viewport. Zoom out and Obsidian loads more nodes, which taxes memory. Practical fix: break large canvases into smaller sub-canvases and embed them as cards in a master canvas. Each sub-canvas opens on click.

**Cards keep jumping when I resize:** This is usually caused by a canvas zoom level that's not 100%. Zoom to fit (`Shift + 1`), then resize. Cards snap more predictably at standard zoom levels.

**My embedded note card doesn't show the latest content:** Click anywhere outside the card, then click back. Canvas caches the render briefly. If it persists, close and reopen the canvas file.

**I can't scroll inside a note card:** Click *once* on the card to select it. Click *again* to enter edit/scroll mode. This two-click behavior catches a lot of beginners.

**Canvas file is getting large (slow to load):** Check the JSON — very large images embedded directly balloon the file size. Reference images stored in your vault's attachment folder instead of dropping them from external sources; Canvas stores external images as base64 in the JSON, which gets heavy fast.

---

## Conclusion {#conclusion}

Obsidian Canvas is one of the most practical additions to Obsidian in years precisely because it doesn't ask you to change your workflow. Your notes stay notes. Canvas just gives them a spatial home where relationships become visible instead of buried in link lists.

Start small: build a single project dashboard or a homepage canvas this week. Once you've seen a task note update live inside a canvas card, or watched Dataview results render inline on a whiteboard, the use cases multiply on their own.

For structured guidance on building a complete PKM system around Canvas and Obsidian, [this Udemy course on Obsidian for Personal Knowledge Management](URL_PLACEHOLDER_3) is one of the most comprehensive paid resources available — it covers daily notes, Canvas dashboards, and plugin integrations in a single learning path. And if you want the conceptual foundations of visual thinking that make Canvas genuinely useful, [The Back of the Napkin](URL_PLACEHOLDER_1) by Dan Roam remains the clearest book on the subject.

Your vault already has the raw material. Canvas gives you the workspace to see what it all means.

---

## Frequently Asked Questions

### Is Obsidian Canvas completely free?

Yes. Canvas is a core plugin included with every Obsidian installation. You don't need Obsidian Sync or Obsidian Publish to use it. The `.canvas` files sync fine with any third-party sync solution (iCloud, Dropbox, Syncthing).

### Does Canvas work on mobile?

Yes, but with limitations. The Obsidian mobile app supports Canvas. Panning and zooming work via touch gestures. Creating and editing cards works. However, performance on complex canvases with many embedded notes is noticeably slower on phones than on desktop.

### Can I share a Canvas with someone else?

You can copy the `.canvas` file and send it. The recipient needs Obsidian and the same notes (with matching filenames) in their vault for note cards to resolve. If you use Obsidian Publish, canvases are not currently publishable. For sharing visual boards externally, take a screenshot or export to PDF.

### What's the difference between Canvas and the Graph View?

Graph view is auto-generated based on your existing links — you can't manually position nodes or add arbitrary connections. Canvas is entirely manual and intentional. Think of graph view as *discovering* structure in your existing notes, and Canvas as *building* new structure for a specific purpose.

### Should I use Canvas or Excalidraw?

Use Canvas when your primary need is surfacing and connecting existing vault notes visually. Use Excalidraw when you need freehand drawing, custom shapes, or presentation-quality diagrams. They solve different problems and both can coexist in the same vault without conflict.

## Related Reading

- [Obsidian Canvas vs. Excalidraw: Which Visual Tool Wins?](/posts/obsidian-canvas-vs-excalidraw-for-mind-mapping/)

- [Why Turn Your Obsidian Vault into a Public Blog?](/posts/how-to-publish-obsidian-notes-to-a-blog/)
- [Obsidian Canvas vs. Excalidraw: Which Visual Tool Wins?](/posts/obsidian-canvas-vs-excalidraw-for-mind-mapping/)
- [What is Excalidraw and Why Use It in Obsidian?](/posts/excalidraw-plugin-for-obsidian-review/)
- [Why Build a Zettelkasten in Obsidian?](/posts/setting-up-a-zettelkasten-in-obsidian-with-plugins/)
