---
title: "Obsidian Periodic Notes Plugin Setup for Annual Reviews: Complete Guide"
description: "Master your yearly reflection with the perfect Obsidian periodic notes plugin setup for annual reviews. We review the essential plugins and step-by-step workflow."
pubDate: "2026-05-02"
author: "Alex Chen"
tags: ["obsidian", "productivity", "pkm", "periodic notes"]
slug: "obsidian-periodic-notes-plugin-setup-for-annual-reviews"
type: "review"
---

# Obsidian Periodic Notes Plugin Setup for Annual Reviews: Complete Guide

> **Quick Answer:** The optimal Obsidian periodic notes plugin setup for annual reviews requires combining the Periodic Notes plugin with Templater and Dataview. Enable the "Yearly Notes" toggle, assign a dedicated template file containing your reflection prompts, and configure the folder destination to automatically aggregate your monthly and quarterly rollups into a single end-of-year dashboard.

Conducting an annual review is one of the highest-leverage activities for personal growth, yet many knowledge workers struggle to synthesize twelve months of disconnected journal entries. When your thoughts are scattered across various notebooks, apps, and text files, identifying meaningful trends becomes nearly impossible. The result is often a superficial yearly reflection that fails to inform your strategy for the year ahead.

Obsidian solves this fragmentation by treating your notes as an interconnected database. However, the base software only provides daily notes out of the box. To conduct a structured, data-informed yearly reflection, you need a system that hierarchically rolls up your daily entries into weeks, months, quarters, and finally, years. 

This guide details the exact Obsidian periodic notes plugin setup for annual reviews, reviewing the core tools you need and providing a blueprint for turning scattered daily thoughts into actionable yearly insights.

## The Core Tool Stack for Yearly Reviews

To build an automated, friction-free annual review system, you need three specific community plugins working in tandem. Here is a review of the essential components for your stack.

### 1. Periodic Notes Plugin

**Best for:** Time-based vault organization and macro-level reviews
**Price:** Free
**Rating:** 5/5

The Periodic Notes plugin by Liam Cain is the structural foundation of this workflow. It directly extends Obsidian's native daily notes functionality by introducing dedicated frameworks for weekly, monthly, quarterly, and yearly notes. For annual reviews, it handles the routing, creation, and formatting of your ultimate review document, ensuring it lives exactly where it belongs in your vault hierarchy.

**Pros:**
- Creates a seamless hierarchy from days to years
- Allows distinct templates for different time scales
- Predictable date-math logic for folder structures

**Cons:**
- Base setup requires understanding formatting tokens
- Does not automatically pull data without other plugins

### 2. Templater Plugin

**Best for:** Dynamic text insertion and automated review prompts
**Price:** Free
**Rating:** 4.8/5

While Periodic Notes handles the creation of your yearly review file, Templater dictates what goes inside it. Templater uses powerful JavaScript variables to automatically insert exact dates, calculate the previous year, and dynamically generate links to your 12 monthly notes. This eliminates the friction of manually building your review document from scratch every December.

**Pros:**
- Unmatched automation for date calculations
- Supports complex JavaScript functions
- Replaces standard Obsidian templates entirely

**Cons:**
- Syntax syntax can be punishing for beginners
- Excessive automation can lead to bloated notes

### 3. Dataview Plugin

**Best for:** Aggregating accomplishments and metrics
**Price:** Free
**Rating:** 4.9/5

An effective annual review requires evidence, not just memory. Dataview acts as a query engine for your Obsidian vault. By embedding Dataview queries into your yearly review template, you can automatically pull in every book you read, every project completed, and every habit tracked over the past 365 days, serving as the objective data layer for your subjective reflection.

**Pros:**
- Instantly surfaces relevant notes across the entire year
- SQL-like syntax is highly customizable
- Reduces the cognitive load of manual searching

**Cons:**
- Queries only render in reading or live preview mode
- Requires consistent metadata tagging throughout the year

## Step-by-Step Configuration Guide

With your tools installed, the execution of your Obsidian periodic notes plugin setup for annual reviews relies on strict configuration. A single misaligned date token will break your workflow. 

### Configuring the Periodic Notes Settings

Navigate to Obsidian Settings > Periodic Notes. You will see sections for each time horizon. Scroll down to the **Yearly Notes** section and toggle it on.

1. **Format:** This dictates the title of your file. Use `YYYY` to generate a clean, four-digit year (e.g., 2026).
2. **Yearly Template:** Point this to the specific markdown file in your vault that contains your annual review prompts (e.g., `Templates/Yearly Review Template.md`).
3. **Yearly Folder:** Define where these reviews live. A dedicated folder like `Reviews/Yearly` keeps your vault organized and makes Dataview queries cleaner.

### Designing the Yearly Template

Your template is the engine of the review. Create a new file in your templates folder. Using Templater syntax, you can automatically link back to the previous year and forward to the next.

At the top of your file, include the following frontmatter and navigation:

```yaml
---
aliases: ["<% tp.date.now("YYYY") %> Annual Review"]
tags: ["review/annual"]
---
[[<% tp.date.now("YYYY", "P-1Y") %>]] <== **<% tp.date.now("YYYY") %>** ==> [[<% tp.date.now("YYYY", "P+1Y") %>]]
```

This snippet ensures that when you generate your 2026 review, it automatically links back to 2025 and forward to 2027.

### Integrating Dataview for Evidence Gathering

A purely qualitative review often falls victim to recency bias—you only remember what happened in November and December. Embed Dataview queries within your yearly template to pull data from your daily and monthly notes.

Create a section in your template called "Data & Metrics." Add a query to pull all major projects completed during the year. Assuming you tag project notes with `#project` and include a `completed:` date property, the query looks like this:

```sql
TABLE completed AS "Date Finished", outcome AS "Result"
FROM #project
WHERE completed >= date(<% tp.date.now("YYYY") %>-01-01) 
AND completed <= date(<% tp.date.now("YYYY") %>-12-31)
SORT completed ASC
```

When you trigger the Yearly Note creation, Templater will evaluate the exact year, and Dataview will populate the table with your actual accomplishments.

## Practical Advice for Your Annual Review Workflow

The mechanics of the Obsidian periodic notes plugin setup for annual reviews only matter if you actually execute the review. 

First, rely on the concept of "rollups." Do not attempt to read 365 daily notes during your annual review. Instead, your daily notes should inform your weekly reviews. Your weekly reviews inform your monthly summaries. When December arrives, you should only be reviewing 12 monthly synthesis notes, plus your four quarterly planning documents.

Second, limit your prompts. It is tempting to download a 50-question yearly review template from a productivity guru. In practice, long templates lead to fatigue. Stick to high-leverage prompts:
- What energized me the most this year?
- What drained my energy, and how can I structurally remove it next year?
- What did I change my mind about?
- If I repeated this exact year again, would I be happy with where I end up in five years?

Finally, separate the reflection from the planning. Use the Periodic Notes yearly note for looking backward. Create a separate document—perhaps linked at the bottom of your yearly review—for setting the next year's strategy. Mixing the two often results in rushing the reflection phase to get to the dopamine hit of planning new goals.

## Synthesizing the System

Building an annual review system in Obsidian transforms reflection from a vague, memory-dependent exercise into a rigorous, data-backed process. By combining the routing capabilities of Periodic Notes, the automation of Templater, and the retrieval power of Dataview, your vault does the heavy lifting of gathering your year. This leaves your mind free to do the actual work: analyzing your trajectory and course-correcting for the future.

## Frequently Asked Questions

### What happens if I miss a few monthly reviews during the year?
Your yearly review will simply pull less aggregated data. Dataview queries targeting specific tags or project files will still function perfectly, allowing you to bypass missing monthly summaries and look directly at completed tasks or journal entries.

### Can I use the core Daily Notes plugin instead of Periodic Notes?
You can use the core plugin for daily notes, but you strictly need the community Periodic Notes plugin to generate the Weekly, Monthly, Quarterly, and Yearly files automatically. The core plugin does not support macro-level time horizons.

### How do I fix broken date links when crossing into a new year?
Broken date links usually stem from using standard Obsidian templates instead of Templater. Ensure you are using `<% tp.date.now("YYYY") %>` syntax and that Templater is configured to "Trigger Templater on new file creation" in its settings.

### Is Dataview required for this setup to work?
No. Dataview is highly recommended for automatically aggregating data like books read or projects finished, but the Periodic Notes plugin will generate your yearly review document perfectly fine relying only on manual text entry.
