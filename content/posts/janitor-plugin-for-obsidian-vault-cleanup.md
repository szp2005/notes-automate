---
title: "Janitor Plugin for Obsidian Vault Cleanup: Complete 2026 Guide"
description: "Learn how to automate your knowledge base maintenance with the Janitor plugin for Obsidian vault cleanup. Remove orphans, fix empty files, and optimize speed."
pubDate: "2026-05-01"
author: "Alex Chen"
tags: ["obsidian plugins", "vault cleanup", "productivity", "knowledge management"]
slug: "janitor-plugin-for-obsidian-vault-cleanup"
type: "informational"
---

# Janitor Plugin for Obsidian Vault Cleanup: Complete 2026 Guide

> **Quick Answer:** The Janitor plugin for Obsidian vault cleanup automates the removal of orphaned files, empty notes, and unlinked attachments that accumulate over time. By scanning your local directory and identifying assets not referenced by any active markdown file, it allows you to bulk-delete digital clutter, significantly improving vault loading times and search performance.

Digital decay is an inevitable byproduct of active knowledge management. When you use Obsidian daily for drafting articles, clipping web content, or organizing research, your vault slowly accumulates residue. Images from deleted notes remain in your attachments folder. Placeholders you created but never filled sit empty. Files become disconnected from your graph, floating as orphans in your database. 

Over months or years, this accumulation degrades performance. Obsidian has to index these unnecessary files every time it opens, slowing down load times and cluttering search results. Mobile synchronization across devices takes longer, consuming unnecessary bandwidth and storage space on your smartphone or tablet.

The Janitor plugin was developed specifically to address this structural degradation. Rather than forcing you to manually audit hundreds of folders to find unlinked PDFs or unused PNGs, Janitor runs automated sweeps. It compares the actual files on your hard drive against the active links in your markdown files, highlighting discrepancies and giving you a centralized dashboard for remediation.

This guide details exactly how the Janitor plugin for Obsidian vault cleanup functions, the optimal settings to use without risking data loss, and workflows to integrate vault maintenance into your regular productivity system.

## The Problem: Digital Clutter in Local Knowledge Bases

Obsidian operates on local markdown files. This architecture provides complete data ownership and offline access, but it lacks the automatic garbage collection found in centralized, cloud-based databases like Notion or Evernote.

When you delete a note in Obsidian, the application removes that specific `.md` file. However, if that note contained three pasted images (saved in your designated attachments folder), those images are not automatically deleted. They remain on your hard drive, taking up space. If you rename a file and update links, occasionally external assets can lose their reference points.

The primary types of digital clutter in Obsidian include:

1. **Orphaned Attachments:** Images, PDFs, or audio files in your vault that are no longer linked inside any markdown document.
2. **Empty Files:** Notes created accidentally or acting as placeholders that contain zero bytes of content.
3. **Large Unused Assets:** High-resolution videos or images that were clipped but are no longer relevant to your active research.

When a vault crosses the 5,000 or 10,000 file threshold, these artifacts cause noticeable friction. The Quick Switcher (`Ctrl/Cmd + O`) becomes populated with irrelevant results. The Graph View becomes denser and harder to parse due to disconnected nodes. Most critically, syncing services like Obsidian Sync or third-party solutions (Syncthing, iCloud) waste time processing redundant data.

## Core Capabilities of the Janitor Plugin

The Janitor plugin is built around a scanning engine that reads your vault's metadata cache. It does not blindly delete files; instead, it generates a report of anomalies for you to review.

### Orphaned File Detection
The primary function of Janitor is identifying unlinked attachments. When you trigger a scan, Janitor reads the internal link graph maintained by Obsidian. It then iterates through your file system, checking every file in your defined attachment directories against this graph. If an image or PDF exists on the disk but is not referenced by `[[filename]]` or `[alt text](filename)` syntax anywhere in your active notes, Janitor flags it as an orphan.

### Empty Note Identification
Janitor scans for markdown files that have a file size of exactly 0 bytes, or files that contain only empty whitespace. This feature is particularly useful for users who rely on daily notes templates but occasionally generate a day's note without adding any text, or users who create internal links to non-existent pages and then click them, generating a blank file.

### Expired File Management
For users who utilize frontmatter dates, Janitor can be configured to flag notes that have "expired." If you use Obsidian for task management or transient project notes, you can set a metadata field like `expires: 2026-04-15`. Janitor can aggregate these expired notes, allowing you to archive or delete them in bulk, keeping your active folder clean.

### Batch Processing Interface
Instead of forcing you to navigate to each file individually in your operating system's file explorer, Janitor provides a modal window inside Obsidian. This window lists all flagged items by category. You can select individual files to inspect, select all, and execute bulk deletions directly from the interface. Files are moved to your system trash (or Obsidian's `.trash` folder, depending on your settings), providing a safety net in case of accidental deletion.

## Step-by-Step: Setting Up Janitor for Obsidian Vault Cleanup

Implementing the Janitor plugin requires careful configuration. Because the plugin handles file deletion, setting proper exclusions is critical to prevent the loss of files you intentionally keep unlinked.

### Installation and Initial Configuration
1. Open Obsidian **Settings** and navigate to **Community Plugins**.
2. Turn off Safe Mode if you haven't already, and click **Browse**.
3. Search for "Janitor" and click **Install**, then **Enable**.
4. Open the Janitor settings pane.

### Defining Exclusion Rules
Before running your first scan, you must define which folders Janitor should ignore. 

* **Templates Folder:** If you have a folder containing template markdown files, these often do not have incoming links. Add your templates directory (e.g., `Meta/Templates`) to the exclusion list.
* **Scripts and CSS:** Exclude any folders containing `.js`, `.css`, or Dataview scripts that operate in the background.
* **Canvas Files:** If you use Obsidian Canvas heavily, ensure your canvas folder is excluded or that the plugin is updated to the latest version that properly reads links embedded within `.canvas` JSON structures.

### Configuring the Scanning Scope
In the settings, specify your primary attachment folder. If your Obsidian settings designate `Assets/Images` as the default location for pasted images, ensure Janitor is explicitly targeting this directory for its orphaned attachment scan. 

You can also set file size thresholds. For example, you can instruct Janitor to ignore any orphaned file smaller than 50KB, focusing only on large PDFs and high-resolution images that actually impact vault performance.

## Practical Advice: Safe Cleanup Workflows

Automated deletion tools require a disciplined workflow to ensure data integrity. Do not blindly click "Delete All" after running a scan. 

### The Pre-Scan Backup
Always ensure your vault is backed up before running a bulk cleanup operation. If you use Obsidian Sync, ensure your version history is active. If you use local backups, trigger a Git commit or run your backup utility before launching Janitor. This guarantees that if a necessary file is incorrectly identified as an orphan, you can restore the entire vault state.

### The Weekly Audit
Rather than waiting for your vault to become sluggish, integrate Janitor into a weekly review process. 
1. Open the command palette (`Ctrl/Cmd + P`) and execute `Janitor: Run Scan`.
2. Review the list of orphaned attachments. Because you are doing this weekly, there will likely only be a dozen items, making it easy to verify that these are indeed images from notes you deleted earlier in the week.
3. Review empty files. Determine if they are accidental clicks or placeholders you still intend to use.
4. Execute the deletion.

### Managing False Positives
The most common issue with vault cleanup tools involves false positives—files that are flagged as orphaned but are actually in use. This typically happens in two scenarios:

* **Dataview Queries:** If you use the Dataview plugin to dynamically generate images or links based on metadata, Janitor cannot read these dynamic queries. It only reads static markdown links. If you have an image dynamically pulled into a dashboard via a script, Janitor will view that image as orphaned. 
* **External Links:** If you link to an attachment using an absolute file path (`C:/Users/Name/Documents/Vault/image.png`) instead of an Obsidian internal link, the scanner may not recognize the connection.

To mitigate this, strictly utilize standard Obsidian internal linking syntax `![[image.png]]` for all vault assets, and place any dynamically called assets into an explicitly excluded folder (e.g., `Assets/System/DoNotScan`).

## Janitor vs. Manual Cleanup

The alternative to using a plugin like Janitor is manual file system maintenance. 

Manual maintenance involves opening your attachments folder, sorting by date, and trying to recall if an image titled `Screenshot 2026-03-12.png` is still relevant. For a vault with 50 attachments, this is viable. For a vault with 5,000 attachments, it is impossible.

Manual cleanup often results in "vault bankruptcy," where users become so overwhelmed by the digital clutter that they abandon their existing folder structure entirely and start a new vault.

Janitor shifts the maintenance burden from manual memory retrieval to systematic verification. It turns a chaotic folder of files into a structured checklist. By presenting only the files that have mathematically lost their connection to the main graph, it reduces the cognitive load of digital housekeeping to a minimal, recurring task.

## Conclusion

A knowledge management system is only as effective as its signal-to-noise ratio. When local folders become clogged with unlinked remnants of past projects, the friction of interacting with your notes increases. The Janitor plugin for Obsidian vault cleanup provides an essential utility for long-term Obsidian users, offering a localized, precise method for garbage collection. By configuring exclusions correctly and running routine, verified sweeps, you can maintain a lean, highly responsive vault regardless of how many files you process.

## Frequently Asked Questions

### Is the Janitor plugin safe to use with Obsidian Sync?
Yes, Janitor is fully compatible with Obsidian Sync. When Janitor deletes a file, it moves it to your system trash or the Obsidian `.trash` folder. Obsidian Sync detects this deletion and propagates it across your devices, saving sync bandwidth by removing the orphaned files from the cloud server.

### Will Janitor delete my template files?
Janitor will flag templates as orphaned if they contain no incoming links from other notes. To prevent this, you must add your templates folder to the exclusion list in the Janitor plugin settings before running your first scan.

### Can Janitor find large files taking up too much space?
Yes. While its primary function is finding orphaned files, Janitor can be configured to display file sizes in its scan results, allowing you to sort and identify massive PDFs or videos that are disconnected from your notes and consuming storage.

### What happens if Janitor deletes a file I actually needed?
By default, Obsidian and the Janitor plugin move deleted files to the system trash or the vault's internal `.trash` folder, rather than permanently destroying them immediately. If you realize a mistake, you can open the trash folder and restore the file to its original location.

### Does Janitor work on mobile devices?
Yes, community plugins like Janitor operate on the mobile versions of Obsidian (iOS and Android). However, because mobile operating systems handle file systems differently, scanning a massive vault on a phone may be slower than on a desktop computer. It is generally recommended to perform bulk cleanups on a desktop environment.
