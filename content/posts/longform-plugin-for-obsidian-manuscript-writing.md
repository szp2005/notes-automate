---
image: "/og/longform-plugin-obsidian-manuscript-writing.png"
title: "Longform Plugin for Obsidian: Complete Guide to Manuscript Writing"
description: "Master the Longform plugin for Obsidian. Learn how to organize scenes, manage drafts, and compile your manuscript seamlessly in this complete 2026 guide."
pubDate: "2026-05-01"
author: "Alex Chen"
tags: ["obsidian plugins", "manuscript writing", "pkm", "writing tools"]
slug: "longform-plugin-obsidian-manuscript-writing"
type: "informational"
---

# Longform Plugin for Obsidian: Complete Guide to Manuscript Writing

> **Quick Answer:** The Longform plugin transforms Obsidian from a standard note-taking environment into a structured manuscript editor resembling Scrivener. It allows writers to organize individual markdown files into ordered scenes and chapters, arrange them via a drag-and-drop sidebar, and compile them into a single, cohesive manuscript file without altering the core vault hierarchy.

Writing a book, dissertation, or lengthy essay in standard markdown applications often devolves into a disorganized folder of disjointed text files. While dedicated writing software like Scrivener or Ulysses handles complex document structures beautifully, many writers prefer the privacy, speed, and cross-linking capabilities of Obsidian. The friction occurs when attempting to sequence 80 different scene files into a linear narrative. 

The Longform plugin bridges this gap. It provides a non-destructive structural layer over your existing markdown files, allowing you to sequence, draft, and compile large-scale writing projects directly within your personal knowledge management system. 

By treating individual notes as modular scenes, Longform gives you the flexibility to move pieces of your narrative around without tedious copy-pasting. This guide breaks down how to configure the plugin, structure your vault, and utilize advanced workflows to manage complex manuscript writing in Obsidian.

## Core Concepts of the Longform Plugin

To use Longform effectively, you must understand how it interacts with Obsidian's file system. Unlike software that locks your writing into a proprietary database, Longform uses standard `.md` files.

The plugin operates on the concept of "Projects." A Longform Project is simply a designated folder within your Obsidian vault. Inside this folder, Longform tracks a specific set of notes—your scenes or sections—and remembers the order in which you have arranged them. This sequence is stored in a hidden `.obsidian/plugins/longform/data.json` file (or a localized index file depending on your version), meaning your actual files remain untouched. 

You can open a scene file on your mobile device, edit it, and the changes will reflect perfectly within your Longform project structure on your desktop. 

## Setting Up Longform for Your First Manuscript

Initializing a project requires a deliberate folder structure. Creating a dedicated space prevents your manuscript files from mixing with your daily journals or unlinked reference notes.

### Installation and Workspace Configuration

You can install Longform directly from the Obsidian Community Plugins directory. Search for "Longform" (developed by Kevin Kelly) and enable it. 

Once enabled, a new icon will appear in your left sidebar, resembling a stack of papers. Clicking this opens the Longform pane, which is the control center for your manuscript. For optimal writing, drag the Longform pane to the left sidebar alongside your standard File Explorer, and keep your right sidebar open for outline views or linked research notes.

### Creating a New Project

1. Create an empty folder in your Obsidian vault. Name it something distinct, such as `Manuscript - The Silent Orbit`.
2. Open the Longform sidebar pane.
3. Click **Create Project** and select the folder you just created.
4. Longform will prompt you to set an index file. This is an optional file where you can store project metadata, an outline, or a synopsis.

Once the project is active, any note you create via the Longform sidebar will automatically populate within that designated folder.

## Structuring Scenes and Chapters

The power of the Longform plugin lies in its drag-and-drop interface. In a standard Obsidian folder, notes are sorted alphabetically or by creation date. In Longform, they are sorted narratively.

### Modular Writing Workflows

When writing a long-form manuscript, avoid writing everything in a single, massive file. Instead, break your writing down into the smallest logical units. For fiction, this is typically a single scene. For non-fiction, this is a subsection or a specific argument.

Create a new note for each unit. Within the Longform sidebar, you can drag these notes up and down to change their sequence. If you realize Chapter 4 needs to happen before Chapter 2, you simply drag the cluster of Chapter 4 scenes higher in the list.

### Using Folders as Chapters

Longform supports folders within your project directory, treating them as organizational dividers or Chapters. You can drag scene files into these folders to group them. When it comes time to compile the manuscript, Longform can optionally insert chapter headings based on these folder names.

This modularity is crucial for editing. It allows you to isolate a 1,500-word scene and focus entirely on its pacing, without being distracted by the 80,000 words surrounding it.

## Drafts and Version Control

Writing requires rewriting. A major anxiety when revising a manuscript is losing previous versions of a scene. Longform incorporates a snapshot feature specifically for this issue.

### Managing Project Drafts

Before executing a major structural edit—such as cutting a character entirely or changing a chapter's perspective—you can take a snapshot of the entire Longform project. This captures the exact state, sequence, and content of all files in the project at that moment.

If the revision fails, you can revert the project to the previous draft state. This functions as a localized version control system, simpler than Git, and designed specifically for prose writers.

### Scene-Level History

If you are only revising a single scene, you can rely on Obsidian's native File Recovery core plugin, which works seamlessly alongside Longform. Ensure File Recovery is set to save snapshots every 5 minutes and keeps them for at least 30 days to protect your daily writing output.

## Practical Advice: Structuring Your Vault for Longform

Integrating a 90,000-word manuscript into a vault that also contains your grocery lists and meeting notes requires strict boundaries.

### The Parallel Folder System

Do not store your research, character profiles, or world-building bibles inside your Longform Project folder. If you do, Longform will attempt to compile them into your final manuscript.

Instead, use a parallel folder structure:

*   `01 - Active Projects/`
    *   `The Silent Orbit/`
        *   `Manuscript/` *(This is your Longform Project folder)*
            *   `01 - Chapter One/`
                *   `Scene 1.md`
                *   `Scene 2.md`
        *   `Research/` *(Keep out of Longform)*
            *   `Orbital Mechanics.md`
        *   `Characters/` *(Keep out of Longform)*
            *   `Protagonist Profile.md`

This structure keeps all related material close together in your file explorer, but isolated from the Longform compiler. You can then use Obsidian's `[[wikilinks]]` to link from a manuscript scene directly to a character profile.

### Metadata and Status Tracking

Use YAML frontmatter in your individual scene files to track progress. A standard template for a Longform scene might look like this:

```yaml
---
status: first-draft
pov: Sarah
location: Main Deck
wordcount: 1250
---
```

While Longform manages the sequence, you can use the Dataview plugin to query this metadata. You can create a dashboard note outside of your manuscript folder that uses Dataview to list all scenes where `status: first-draft`, giving you a clear roadmap of what needs editing next.

## Compiling and Exporting Your Work

The final step of manuscript writing is getting the text out of Obsidian and into a format suitable for an editor, beta reader, or self-publishing platform.

### The Compilation Process

When you click the **Compile** button in the Longform sidebar, the plugin concatenates all the individual markdown files in your project into a single, continuous file. 

Longform provides several compilation settings:
*   **Scene Separators:** You can define a specific string of characters (like `***` or `#`) to be inserted automatically between individual files.
*   **Frontmatter Handling:** You can choose to strip the YAML frontmatter from the individual scenes during compilation, ensuring your final document doesn't contain your private tracking tags.
*   **Chapter Headings:** If you grouped scenes into folders, Longform can automatically generate markdown headers (e.g., `## Chapter One`) based on those folder names.

### Formatting the Final Output

The compilation process results in a single, large `.md` file. Because standard publishers require `.docx` or PDF formats, you will need to convert this compiled file.

The most robust workflow for this relies on the Obsidian Pandoc plugin. Once Longform generates the compiled markdown manuscript, open that file and use the Pandoc plugin command to export it to Word (`.docx`), ePub, or standard PDF. This pipeline allows you to write entirely in plain text, sequence it visually, and output a professionally formatted document ready for submission.

## Longform vs. Traditional Writing Software

Writers transitioning to Obsidian often compare it to Scrivener. While Longform replicates Scrivener's most crucial feature (the binder/modular writing approach), it differs in scope.

**Advantages of Longform:**
*   **Plain Text Portability:** Your files are just markdown. If Obsidian ceases to exist tomorrow, your manuscript is perfectly readable in any text editor. Scrivener `.scriv` files are complex database packages.
*   **Plugin Ecosystem:** You can combine Longform with plugins like Proximity for finding overused words, LanguageTool for grammar checking, or Dataview for project tracking.
*   **Cost:** Obsidian and Longform are free for personal use.

**Tradeoffs of Longform:**
*   **Export Complexity:** Scrivener's compiler is incredibly powerful, allowing you to format for Kindle, print, and paperback simultaneously. Longform only compiles to markdown; you must rely on third-party tools like Pandoc for advanced formatting.
*   **Split-Screen Limitations:** Scrivener allows you to view multiple sections of the same manuscript in a highly customized corkboard view. Obsidian's canvas and split panes are excellent, but require more manual configuration to mimic Scrivener's native layouts.

## Synthesizing the Manuscript Workflow

The Longform plugin effectively removes the primary barrier to writing long-form content in Obsidian. By providing a stable, drag-and-drop structural layer over a directory of markdown files, it allows writers to focus on individual scenes without losing sight of the broader narrative arc.

Coupled with a disciplined folder structure, metadata tracking, and a streamlined export process via Pandoc, Longform elevates Obsidian from a personal knowledge database to a professional-grade environment for drafting complex manuscripts, theses, and books.

## Frequently Asked Questions

### Can I use Longform for academic writing and thesis organization?
Yes. Longform is highly effective for academic writing. You can dedicate folders to specific chapters, introduction, methodology, and conclusion, while keeping individual arguments as discrete markdown files.

### Does the Longform plugin alter my original Obsidian markdown files?
No. Longform does not alter the content of your original files. It manages the sequence by reading the files and storing the structural order in a separate, hidden JSON file within your vault's plugin directory.

### How do I export my Longform project to Word or PDF?
First, use the compile feature within Longform to merge your individual scenes into one large markdown document. Then, use a community plugin like Obsidian Pandoc, or open the compiled markdown file in an external markdown editor like Typora, to export to DOCX or PDF.

### Is Longform compatible with Obsidian Sync?
Yes. Because Longform saves its project sequence data inside the `.obsidian/plugins/longform/` directory, as long as you have Obsidian Sync configured to synchronize plugin settings and data files, your project structure will sync seamlessly across desktop and mobile devices.

### Can I track my daily writing goals within the Longform plugin?
Longform provides basic word counts for individual scenes and the total project, but it does not have built-in daily goal tracking. For daily session tracking, you should pair it with the Obsidian Word Sprint plugin or the Better Word Count plugin.

---

## Related Reading

- [Obsidian Bases Native Update Review 2026: The Notion Killer?](/posts/obsidian-bases-native-update-review-2026/)
- [Tag Wrangler for Bulk Tag Management in Obsidian: Complete Guide](/posts/tag-wrangler-for-bulk-tag-management-obsidian/)
