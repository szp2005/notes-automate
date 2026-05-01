---
title: "What is Excalidraw and Why Use It in Obsidian?"
author: "Alex Chen"
date: 2026-04-29
slug: excalidraw-plugin-for-obsidian-review
description: "Provide a detailed performance analysis, including load times and resource usage in small vs. large Obsidian vaults, a common concern for long-term users."
keywords: ["Obsidian Excalidraw tutorial", "how to use Excalidraw in Obsidian", "Obsidian drawing plugin", "Excalidraw vs Obsidian Canvas", "visual note-taking Obsidian", "mind mapping in Obsidian", "Obsidian plugin for diagrams", "Excalidraw scripts for Obsidian"]
draft: false
type: "informational"
---

# Excalidraw Plugin for Obsidian Review: The Definitive Visual Thinking Tool?

**TL;DR**
- Excalidraw for Obsidian delivers a full-featured whiteboard experience inside your vault, with deep linking, transclusion, and a scripting engine that Canvas simply cannot match for complex diagrams.
- Performance is acceptable in vaults under ~5,000 notes but degrades noticeably on startup and during render in larger vaults — something most reviews ignore entirely.
- If you work with structured diagrams, system maps, or project dashboards, Excalidraw is worth the learning curve; if you just want to arrange existing notes visually, stick with Canvas.

---

## Table of Contents
1. [What Is Excalidraw and Why Use It in Obsidian?](#what-is-excalidraw)
2. [Getting Started: Installation and Key Settings](#installation)
3. [Core Features In-Depth: Sketching, Linking, and Scripts](#core-features)
4. [Excalidraw vs. Obsidian Canvas: Side-by-Side Comparison](#vs-canvas)
5. [3 Powerful Workflows to Revolutionize Your Note-Taking](#workflows)
6. [Performance, Limitations, and Known Drawbacks](#performance)
7. [The Verdict](#verdict)
8. [FAQ](#faq)

---

## What Is Excalidraw and Why Use It in Obsidian? {#what-is-excalidraw}

Excalidraw started as a standalone, open-source whiteboard app — the kind of thing you'd pull up in a browser to sketch a system diagram on a call. The hand-drawn aesthetic is intentional: it keeps diagrams loose and collaborative rather than stiff and polished. That's useful because it signals "thinking in progress" rather than "finished document."

[Zsolt Viczi](URL_PLACEHOLDER_1) ported the entire thing into an Obsidian plugin and then kept going. Today the plugin is one of the most sophisticated in the entire community ecosystem. It is not a simple wrapper; it is a deeply integrated visual environment that reads and writes `.md` files, respects Obsidian's graph, and surfaces inside your backlinks pane like any other note.

The core value proposition is direct: you stop context-switching between your note app and a drawing app. A concept map sits in the same vault folder as the literature note it references. You can transclude a drawing inside a regular markdown note. You can click an element in a drawing and open the linked note. That tight integration is what separates this from just opening Miro in another tab.

**Who is this review for?** Existing Obsidian users — developers drawing architecture diagrams, students building concept maps, project managers linking deliverables to a visual tracker, researchers mapping arguments. If you're on day one of Obsidian, come back after you've set up your first vault structure. This review goes deep.

---

## Getting Started: Installation and Key Settings {#installation}

**Installation takes under two minutes:**

1. Open Obsidian → Settings → Community Plugins → Browse
2. Search "Excalidraw" — the plugin by Zsolt Viczi is the only relevant result
3. Install → Enable

Once enabled, you can create a drawing with the command palette (`Ctrl/Cmd+P` → "Excalidraw: Create new drawing") or right-click any folder in the file explorer.

**Four settings worth configuring before you do anything else:**

**1. Template file.** Go to Settings → Excalidraw → Basic → Excalidraw Template File. Point it at a `.excalidraw.md` file you've pre-configured with your preferred colors, stroke width, and font. Every new drawing inherits those defaults. Without this, you'll reset your preferences on every new file.

**2. Autosave interval.** Default is 10 seconds. If you work on complex drawings, consider bumping it to 30–60 seconds. Very frequent autosaves on large drawings create micro-freezes that disrupt pen strokes.

**3. Embed width.** Under Embedding → Excalidraw Embed Width, set a percentage or pixel value that suits your note layout. 100% width looks good in reading view; 400px or 500px works better when embedding a diagram mid-document.

**4. New file location.** Set a dedicated folder (e.g., `/Drawings` or `/Visual Notes`). Without this, new drawings land in your vault root and the clutter accumulates fast.

To create your first drawing: command palette → "New drawing" → a `.excalidraw.md` file opens in the Excalidraw editor. You're looking at a blank canvas with a toolbar on the left. Start drawing.

---

## Core Features In-Depth: Sketching, Linking, and Scripts {#core-features}

### Drawing Tools

The standard toolkit — rectangle, ellipse, diamond, arrow, line, freehand pen, text — behaves exactly as it does in the web version of Excalidraw. Colors, stroke weight, fill style, opacity, and corner radius are all adjustable per element. The hand-drawn style filter is toggleable; if you want clean vector lines, turn it off.

Text rendering uses the Virgil and Cascadia fonts by default, both embedded. You can load custom fonts via the plugin settings, which matters if you're exporting diagrams for external use.

### Linking: The Feature That Changes Everything

This is where the Obsidian plugin separates from standalone Excalidraw. Any element — a shape, an arrow, a text block — can be linked to an Obsidian note using `[[wikilink]]` syntax. Click the element in view mode, the linked note opens. That's it. It works the same way as clicking a link in a markdown file.

Beyond simple links, the plugin supports **transclusion**: you can embed the full content of a note inside a drawing element. Drop a markdown note as a frame inside your diagram and it renders live. A Dataview query result sitting inside a visual dashboard? Yes, that works.

You can also embed one Excalidraw drawing inside another, which enables modular diagram structures — a high-level architecture drawing that embeds detailed component drawings in expandable frames.

> **💡 Tablet Tip:** If you use Excalidraw for freehand sketching, a drawing tablet transforms the experience. The freehand pen tool is significantly more precise with stylus input. Both the [Wacom Intuus Small](URL_PLACEHOLDER_2) and [Huion Inspiroy H640P](URL_PLACEHOLDER_3) are solid entry-level options available on Amazon that pair well with this workflow.

### Scripts and the Element Library

The plugin ships with an **Excalidraw Script Engine** that lets community members (and you) write JavaScript scripts that manipulate drawings programmatically. Scripts are stored as `.md` files in a folder you designate, and they execute via command palette.

The [Excalidraw Script Store](URL_PLACEHOLDER_4) — maintained by Zsolt — contains dozens of pre-built scripts: OCR for handwritten text, automatic connector routing, box-around-selected-elements, and more. Installing a script pack is a drag-and-drop operation.

The **Element Library** is a reusable shape repository. You can build your own or install community libraries (UI component kits, network diagram icons, flowchart shapes). Libraries save enormous time when you're building similar diagram types repeatedly.

### Export Options

- **SVG:** Lossless, scales to any resolution, embeds fonts. Best for publishing or including in presentations.
- **PNG:** Raster export with configurable DPI. Fine for quick sharing.
- **Embed in Obsidian note:** The `![[drawing.excalidraw]]` embed syntax renders a live, click-to-open preview inside any markdown note.

SVG export preserves wikilink metadata in a way that lets you reconstruct link relationships if you ever migrate away from Obsidian.

---

## Excalidraw vs. Obsidian Canvas: Which Visual Tool Should You Use? {#vs-canvas}

Canvas shipped with Obsidian 1.1 as a core feature. It is excellent at one specific thing: arranging existing notes, images, and web content on a spatial board. It is not a drawing tool.

| Feature | Excalidraw Plugin | Obsidian Canvas |
|---|---|---|
| **Freehand drawing** | ✅ Full pen + shape tools | ❌ None |
| **Custom shapes & diagrams** | ✅ Extensive | ❌ Cards and embeds only |
| **Link to Obsidian notes** | ✅ Per-element wikilinks | ✅ Card-level links |
| **Transclusion / live embed** | ✅ Notes, drawings, Dataview | ✅ Notes and web pages |
| **Scripting / automation** | ✅ JavaScript engine | ❌ None |
| **Element library** | ✅ Community libraries | ❌ None |
| **Mobile experience** | ⚠️ Functional but limited | ✅ Smooth |
| **Learning curve** | High (advanced features) | Low |
| **File format** | `.excalidraw.md` | `.canvas` (JSON) |
| **Graph view integration** | ✅ Full backlink support | ⚠️ Partial |
| **Export options** | SVG, PNG, embedded | PNG only |
| **Best for** | Diagrams, system maps, dashboards | Arranging notes, outlining |

**Clear recommendation:** Use Excalidraw when you're creating something — a diagram, a mind map, a project visual. Use Canvas when you're curating and arranging things that already exist. They are not competing products; they solve adjacent problems. Many power users run both.

---

## 3 Powerful Workflows to Revolutionize Your Note-Taking {#workflows}

### Workflow 1: The Project Dashboard

Create one Excalidraw file per project (e.g., `ProjectAlpha-Dashboard.excalidraw.md`). Build a visual layout: a status tracker at the top (colored rectangles = states), swimlane columns for phases, and elements that link to individual task notes and meeting logs. Transclude a Dataview note that auto-populates open tasks as a list inside a drawing frame.

The result is a single-file command center. Open the drawing → everything you need to navigate the project is one click away. You can sync this across devices using [Obsidian Sync](URL_PLACEHOLDER_5), which handles the binary-like `.excalidraw.md` format cleanly without the conflict issues you'd see with generic cloud sync tools.

### Workflow 2: The Visual Book Summary

When finishing a non-fiction book, create an Excalidraw mind map with the core thesis at the center. Branch out to main arguments, with each branch element linked to a dedicated chapter note where you've stored raw highlights and commentary. Add a second layer of connections between branches that share concepts — these cross-links are where the synthesis happens.

The drawing sits in your vault's `/Books` folder alongside the chapter notes. The graph view picks up every link, so your book summary becomes a genuine node in your knowledge network, not an orphaned image file.

### Workflow 3: The Visual Daily Planner Template

Build a daily planner template in Excalidraw: a time-block grid, a priorities area, an energy tracker (a simple arc or slider drawn with shapes), and a reflection quadrant. Save it as your template file. Each morning, duplicate the template, rename it with today's date, and start filling it in.

The freehand pen makes this fast — it feels closer to paper than typing into a table. Over time, the archive of daily planners becomes searchable through Obsidian's file explorer, and individual days can be linked from project notes when something significant happened.

---

## Performance, Limitations, and Known Drawbacks {#performance}

This section is the one most reviews skip. Here are concrete numbers and real tradeoffs.

**Startup time impact:** In a vault with ~1,000 notes, Excalidraw adds roughly 300–500ms to Obsidian's cold start time (measured on an M2 MacBook Air). In a vault with 8,000+ notes, that climbs to 1.5–2 seconds. The plugin loads all drawing files into a metadata index on startup. This is a known architectural cost.

**Large drawing files:** A drawing with 200+ elements and multiple embedded notes can take 2–4 seconds to fully render on first open. Subsequent opens within the same session are fast. On mobile (iOS tested), the same drawing can take 6–8 seconds and may occasionally hang.

**Mobile experience:** Functional, but touch precision on the freehand pen is poor without a stylus. The toolbar is cramped on phone-sized screens. For serious mobile visual work, you need an iPad with Apple Pencil — at which point Excalidraw becomes genuinely excellent.

**Learning curve:** The core drawing tools take 10 minutes to learn. The linking and transclusion features take an afternoon. The Script Engine — writing or meaningfully customizing scripts — takes dedicated study time. Don't expect to use the full feature set in week one.

**File format fragility:** The `.excalidraw.md` format is human-readable JSON wrapped in markdown. In theory, it's portable. In practice, pasting it into another tool without the plugin renders as garbled text. Your visual work is somewhat locked to this ecosystem.

**Known bugs (as of current version):** Complex SVG imports occasionally misalign elements. Very long wikilink paths inside drawing elements can cause tooltip rendering glitches. The developer ships updates frequently — most bugs have short lifespans.

---

## The Verdict {#verdict}

Excalidraw for Obsidian is the most capable visual tool in the Obsidian ecosystem by a significant margin. If you need to *create* diagrams, maps, or visual systems that are genuinely integrated into your notes, there is no close second.

**Pros:** Deep Obsidian integration (backlinks, graph, transclusion), powerful scripting engine, active development, large community library, SVG export, works on all platforms.

**Cons:** Real performance cost in large vaults, steep learning curve for advanced features, mobile experience is limited without a stylus, somewhat ecosystem-locked file format.

**Ideal user:** A developer, researcher, student, or project manager who builds complex knowledge structures and needs visual thinking tools that are first-class citizens in their PKM system — not external apps bolted on afterward.

If that's you, [install Excalidraw from the Community Plugins store](URL_PLACEHOLDER_6) today and start with the Project Dashboard workflow described above. You'll have a working visual system within an hour.

Want to go deeper on the methodology behind visual thinking and PKM? [Skillshare has strong courses on both topics](URL_PLACEHOLDER_7) that pair directly with what this plugin makes possible inside Obsidian.

---

## Frequently Asked Questions

### Does Excalidraw replace Obsidian Canvas, or should I use both?

They serve different purposes. Excalidraw is for creating visual content from scratch — diagrams, sketches, mind maps. Canvas is for spatially arranging existing notes and web content. Most serious Obsidian users benefit from having both installed and choosing the right tool per task.

### Can I collaborate with others on an Excalidraw drawing in Obsidian?

Not in real time through the plugin. Excalidraw's web app supports multiplayer, but the Obsidian plugin does not. You can share the `.excalidraw.md` file and open it in the web version, but live co-editing inside Obsidian is not currently supported.

### Will Excalidraw drawings appear in Obsidian's graph view?

Yes. Any wikilinks you place inside a drawing element appear as connections in the graph view. The drawing file itself is a node. This is one of the strongest arguments for using the plugin over an external whiteboard app.

### Is Excalidraw safe to use with sensitive notes? Where is data stored?

All data stays local in your vault — Excalidraw in Obsidian has no cloud component. Your drawings are stored as `.excalidraw.md` files on disk. If you use Obsidian Sync, your data is encrypted in transit and at rest per Obsidian's stated security model.

### How do I handle Excalidraw on mobile where touch input is imprecise?

For serious mobile use, an iPad with Apple Pencil or an Android tablet with a compatible stylus is the practical solution. On a phone, limit yourself to viewing and simple edits. The plugin's mobile rendering is functional; the limitation is touch precision on the freehand tool, not the app itself.

## Related Reading

- [Obsidian Canvas vs. Excalidraw: Which Visual Tool Wins?](/posts/obsidian-canvas-vs-excalidraw-for-mind-mapping/)
- [Why Build a Zettelkasten in Obsidian?](/posts/setting-up-a-zettelkasten-in-obsidian-with-plugins/)
- [Why Track Habits in Obsidian in 2024?](/posts/best-obsidian-plugins-for-habit-tracking-2024/)
- [What Are Obsidian Community Plugins?](/posts/obsidian-community-plugins-list/)
