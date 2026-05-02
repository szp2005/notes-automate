---
title: "Building a Second Brain Using Obsidian and Readwise: Complete Guide"
description: "Learn exactly how building a second brain using Obsidian and Readwise transforms scattered highlights into a connected, actionable knowledge management system."
pubDate: "2026-05-02"
author: "Alex Chen"
tags: ["Obsidian", "Readwise", "Knowledge Management", "Productivity"]
slug: "building-a-second-brain-using-obsidian-and-readwise"
type: "informational"
---

# Building a Second Brain Using Obsidian and Readwise: Complete Guide

> **Quick Answer:** Building a second brain using Obsidian and Readwise requires connecting Readwise's automated highlight capture directly into Obsidian's local markdown vault via the official plugin. By piping your Kindle, web, and podcast annotations into a centralized inbox, you can progressively summarize and link those notes to create a resilient, interconnected personal knowledge base.

The modern knowledge worker consumes a staggering amount of information daily—articles, books, podcasts, and newsletters. Yet, without a reliable system to capture and connect this information, most of those insights evaporate within hours. The concept of a "Second Brain," popularized by Tiago Forte, offers a framework for externalizing your memory. However, the software you choose dictates the friction of maintaining that framework. 

Many note-taking ecosystems trap your data in proprietary formats or require manual data entry that quickly becomes unsustainable. The combination of Obsidian and Readwise solves both the data sovereignty problem and the capture friction problem. Obsidian provides a future-proof, local-first markdown environment for thinking and linking, while Readwise acts as the universal aggregator, pulling highlights from almost any reading platform automatically.

This comprehensive guide breaks down exactly how to architect this system. We will cover the mechanics of connecting the two tools, the structural design of your Obsidian vault to handle incoming highlights, and the daily workflows required to turn passive consumption into active knowledge creation.

## The Architecture of a Frictionless Knowledge System

To understand why this specific software pairing works so effectively, it helps to look at the different stages of the knowledge management pipeline: Capture, Organize, Distill, and Express (CODE). 

### Readwise as the Universal Capture Engine

Readwise eliminates the most significant bottleneck in personal knowledge management: the manual extraction of highlights. Whether you are reading on a Kindle, highlighting articles in Instapaper or Matter, or saving Twitter threads, Readwise aggregates these annotations into a single database. This aggregation happens quietly in the background via API integrations. 

By removing the manual labor of copying and pasting text, you ensure that every resonant idea you encounter actually makes it into your system. Readwise also supports podcast snipping via tools like Snipd, and physical book scanning using its mobile app's OCR capabilities.

### Obsidian as the Distillation and Linking Hub

If Readwise is the funnel, Obsidian is the processing plant. Obsidian operates entirely on plain text markdown files stored locally on your hard drive. This guarantees that your notes will remain accessible decades from now, independent of any company's server status or subscription model. 

Obsidian's core strength lies in its bidirectional linking. When Readwise exports your highlights into Obsidian, those highlights are no longer isolated fragments; they become nodes in a graph. You can link a quote from a psychology book to an article about behavioral economics, surfacing connections that you would never have made organically.

## Setting Up the Readwise Official Plugin in Obsidian

The bridge between these two tools is the Readwise Official plugin for Obsidian. Configuring this integration correctly is crucial to prevent your vault from becoming a chaotic dumping ground of unformatted text.

### Installation and Authentication

First, ensure you have an active Readwise subscription (the full tier is required for the Obsidian export feature). Inside Obsidian, navigate to the Community Plugins settings, turn off Safe Mode if you haven't already, and search for "Readwise Official." Install and enable the plugin.

Upon clicking "Connect," you will be prompted to authenticate your Readwise account in your browser. Once authorized, the plugin will establish a direct API connection to pull your highlights.

### Configuring the Export Directory

By default, Readwise might dump your files into the root of your vault. This creates immediate clutter. In the plugin settings, designate a specific folder for incoming highlights. A common convention is naming this folder `Inbox/Readwise` or `Sources/Readwise`. 

Keeping these raw highlights segregated from your processed, permanent notes (often called "Evergreen" or "Zettelkasten" notes) is a fundamental principle of maintaining a clean second brain. The Readwise folder acts as a staging area.

## Customizing the Markdown Formatting

Readwise allows you to customize exactly how your highlights are formatted when they arrive in Obsidian using the Jinja2 templating language. Taking the time to configure this template transforms raw text into highly structured metadata.

### The Page Title and YAML Frontmatter

In the Readwise export settings on their website, you can dictate the structure of the exported file. Start by setting the file name to something clean, like `{{title}}`. 

Next, utilize YAML frontmatter. This allows you to tag the document automatically based on its source type and capture the author and URL. A standard frontmatter block might look like this:

```yaml
tags: [source/{{category}}]
author: [[{{author}}]]
title: "{{title}}"
url: {{url}}
```

Wrapping the author name in double brackets `[[{{author}}]]` automatically creates a bidirectional link to that author in Obsidian. If you import three books by the same author, Obsidian will instantly connect them.

### Highlight Formatting Rules

You can also format the highlights themselves. It is highly recommended to append the specific location or URL to each highlight. Furthermore, if you take notes alongside your highlights in your reading app, Readwise can export those too. 

Configure the template to distinguish between the author's words (perhaps formatted as a blockquote `> {{highlight_text}}`) and your own commentary (`- **My Note:** {{note}}`). This visual distinction is vital when you return to the note months later.

## Workflow: From Raw Highlight to Permanent Knowledge

Having an automated pipeline is only half the battle. Building a second brain using Obsidian and Readwise requires a deliberate routine to process the incoming information. Without a processing workflow, you are simply hoarding text.

### The Triage Process

Set aside dedicated time—perhaps 15 minutes at the end of the day or an hour on Sunday mornings—to review the new files in your `Inbox/Readwise` folder. 

During this triage, read through the highlights. You will often find that a quote that seemed profound in the moment lacks context a week later. Delete highlights that no longer resonate. For the ones that do, bold the core concepts or rewrite them in your own words. This is called "Progressive Summarization."

### Creating Evergreen Notes

The ultimate goal is to extract the core ideas from your sources and translate them into standalone, atomic notes—often referred to as Evergreen notes or Zettels. 

When a Readwise highlight sparks an idea, create a new note in your main vault. Write out the concept in your own words, entirely independent of the original source text. Then, at the bottom of this new note, create a link back to the Readwise source file as a citation. 

This process shifts your vault from being an archive of other people's thoughts into a lattice of your own synthesized ideas.

## Advanced Techniques for Obsidian and Readwise Integration

Once the basic pipeline is flowing smoothly, you can leverage Obsidian's extensible ecosystem to enhance the utility of your Readwise imports.

### Utilizing Dataview for Dashboards

The Dataview plugin for Obsidian allows you to query your markdown files as if they were a database. Because you configured your Readwise template to include specific YAML frontmatter (like `tags: [source/book]`), you can create dynamic dashboards.

You can write a simple Dataview query that automatically lists all the books you've read this year, sorted by date, or pulls all articles authored by a specific writer. This transforms your Readwise folder from a static directory into a dynamic library.

### Spaced Repetition Integration

Readwise originally launched as a spaced repetition tool, surfacing past highlights via a daily email. While you can continue to use the Readwise app for this, you can also bring this functionality directly into Obsidian.

Using plugins like Obsidian Spaced Repetition, you can format specific highlights or the atomic notes you derive from them as flashcards. This is particularly useful if you are using your second brain for academic study or learning a new technical skill, ensuring active recall of the most critical information.

## Practical Advice: Structuring and Tradeoffs

When building a second brain using Obsidian and Readwise, you will encounter structural decisions that impact the system's long-term viability. Here are concrete recommendations to avoid common pitfalls.

**Vault Structure Dimensions:**
Keep your folder hierarchy extremely shallow. A complex nested folder structure will inevitably break down because ideas rarely fit perfectly into one category. Rely on bidirectional links and tags instead of folders. A proven structure is simply:
- `01_Inbox` (where your Readwise folder lives)
- `02_Atlas` (Maps of Content, index notes)
- `03_Notes` (Your permanent, atomic notes)
- `04_Sources` (Other non-Readwise reference materials)

**The Tradeoff of Automation:**
The primary tradeoff of the Readwise to Obsidian pipeline is the illusion of productivity. Because the capture is entirely automated, it feels like you are doing work just by reading. You are not. Automated capture is a prerequisite for a second brain, not the entirety of it. You must enforce strict discipline regarding the "Distill" and "Express" phases of the CODE framework. If you find yourself with 500 unprocessed source files, pause your reading and focus on distillation.

**Handling Updates:**
When you add new highlights to a book you are currently reading, Readwise will update the existing file in Obsidian. Ensure your template is set to "Append new highlights" rather than overwriting the entire file, otherwise any manual notes or formatting you added to that file in Obsidian will be destroyed upon syncing.

## Conclusion

Building a second brain using Obsidian and Readwise provides an optimal balance between low-friction capture and high-agency organization. By offloading the mechanical task of gathering highlights to Readwise, you reserve your cognitive energy for what actually matters: connecting ideas, recognizing patterns, and generating original output. While the initial setup requires attention to detail—particularly in configuring your templates and frontmatter—the resulting system is a resilient, locally-owned knowledge base that compounds in value over your entire lifetime.

## Frequently Asked Questions

### Do I need the paid version of Readwise to use this system?
Yes, the ability to export highlights to Obsidian requires the Readwise Full subscription tier. The lower tier only provides the daily highlight review feature.

### Will Readwise delete my highlights in Obsidian if I cancel my subscription?
No. Because Obsidian stores your notes as local markdown files on your hard drive, any highlights that Readwise has already exported are permanently yours, regardless of your subscription status.

### How does Readwise handle highlights from physical books?
Readwise offers an OCR (Optical Character Recognition) scanner within its mobile app. You can take a photo of a physical page, highlight the text on your screen, and the app will transcribe it and sync it directly into your Obsidian vault alongside your digital highlights.

### What happens if I rename the Readwise file in Obsidian?
If you change the filename of a Readwise export in Obsidian, the Readwise plugin will not recognize it during the next sync and will create a duplicate file with the original name. It is best to leave the filenames as they are generated and use aliases or links to navigate.

### Can I sync my Obsidian vault across devices if I use Readwise?
Yes. Readwise simply deposits text files into your vault. You can then use Obsidian Sync, iCloud Drive, Dropbox, or any other standard file synchronization method to access those files on your mobile devices or secondary computers.
