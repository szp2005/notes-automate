---
title: "Explanation of Obsidian Vault Structure for Backups (Full Guide)"
description: "A complete explanation of obsidian vault structure for backups. Learn how to secure your notes, understand hidden .obsidian folders, and prevent data loss."
pubDate: "2026-05-02"
author: "Alex Chen"
tags: ["obsidian", "backups", "pkm", "data security"]
slug: "explanation-of-obsidian-vault-structure-for-backups"
type: "informational"
---

# Explanation of Obsidian Vault Structure for Backups (Full Guide)

> **Quick Answer:** A complete explanation of obsidian vault structure for backups starts with recognizing that your vault is simply a standard local folder on your computer. To fully back up your workspace, you must secure both your visible Markdown files (your notes) and the hidden `.obsidian` directory, which houses your plugins, themes, hotkeys, and core configurations, ensuring you can restore the exact environment without losing any customizations.

The greatest advantage of Obsidian is its local-first philosophy. Instead of locking your personal knowledge management system behind a proprietary cloud database, Obsidian stores everything as plain text files directly on your hard drive. This means you have ultimate control over your data, unparalleled privacy, and the ability to access your notes offline. However, this local-first approach also places the burden of responsibility squarely on your shoulders: if your hard drive fails and you have no backup, your entire knowledge base is gone. 

Understanding exactly what resides within your Obsidian vault is the crucial first step to ensuring your data is permanently safe. Many users mistakenly believe that backing up their visible text files is enough, only to suffer a catastrophic hard drive failure and realize they lost weeks of work spent configuring plugins, custom CSS, and complex folder architectures. 

This comprehensive guide provides a deep-dive explanation of Obsidian vault structure for backups. By understanding the anatomy of your vault—from the standard Markdown files to the complex system files hidden beneath the surface—you can design a foolproof, automated backup strategy that protects both your knowledge and your carefully tailored workspace environment.

## The Anatomy of an Obsidian Vault

At its core, an Obsidian vault is just a folder. You can open this folder using macOS Finder, Windows File Explorer, or any command-line interface. Because there is no database running in the background, you can physically see every component of your knowledge system. Broadly speaking, the structure is divided into two distinct categories: visible assets and hidden configuration files.

### Visible Files: Markdown and Media

The most obvious part of your vault consists of the files you create and interact with daily. Obsidian relies on standard formats, ensuring that even if the software were to disappear tomorrow, you could still read your notes using any basic text editor like Notepad or TextEdit.

- **Markdown Files (.md):** These are the lifeblood of your vault. Every note you type, every link you create, and every tag you assign is stored as plain text using the Markdown syntax. They consume very little storage space. A vault with 10,000 detailed notes might only occupy 50 to 100 megabytes of disk space.
- **Attachments and Media:** When you drag an image, PDF, audio clip, or video into an Obsidian note, the software copies that file into your vault. Depending on your settings, these might be stored in the root directory, alongside the note, or routed to a dedicated "Attachments" folder. Unlike Markdown files, media files can grow your vault size exponentially. A vault heavy on high-resolution PDFs and images can easily reach several gigabytes.
- **Canvas Files (.canvas):** If you use Obsidian's infinite canvas feature for visual brainstorming, these files are saved in the open JSON format with a `.canvas` extension. 

From a backup perspective, these visible files represent your actual data. Losing them means losing your thoughts, research, and records. 

### The Hidden Engine: The `.obsidian` Folder

While the visible files contain your knowledge, the hidden `.obsidian` folder dictates how you interact with that knowledge. By default, operating systems like macOS and Linux hide folders that begin with a period (`.`). Windows may also hide it depending on your view settings. 

The `.obsidian` folder is the brain of your specific vault. It turns a static directory of text files into a dynamic, interlinked, and customized personal knowledge management environment. A full explanation of Obsidian vault structure for backups must heavily emphasize this hidden directory. If you only back up your Markdown files, restoring your vault on a new computer will result in a completely vanilla Obsidian setup: default theme, no plugins, no custom hotkeys, and no saved workspaces.

## Why the `.obsidian` Folder Matters for Backups

To truly appreciate what needs backing up, we need to dissect the `.obsidian` directory. Understanding its sub-components allows you to make informed decisions about what to include or exclude in your backup routines, especially if you are dealing with strict storage limits or complex version control systems.

### Core Settings and Workspaces

Directly inside the `.obsidian` folder, you will find several critical JSON files that track your preferences. 

- **`app.json`:** Stores core application settings, such as your preferences for spellcheck, attachment folder locations, and default viewing modes.
- **`appearance.json`:** Tracks your current theme, accent colors, and font settings.
- **`hotkeys.json`:** If you have spent hours binding custom keyboard shortcuts to specific actions, this file is the only place those preferences are stored. 
- **`core-plugins.json`:** Records which native Obsidian features (like Outline, Tag Pane, or Canvas) are toggled on or off.
- **`workspace.json` (and `workspace-mobile.json`):** These files are constantly updated. They remember exactly which panes were open, their split configurations, and what file you were looking at last. When you launch Obsidian and it resumes exactly where you left off, it is reading from these files.

### Community Plugins and Themes

The Obsidian community has developed thousands of third-opacity plugins that radically expand the software's functionality—from adding Dataview queries and Kanban boards to integrating artificial intelligence and advanced calendar tools.

- **`plugins/` Directory:** This folder contains a subfolder for every community plugin you have installed. Inside each subfolder, there is typically a `main.js` (the plugin code), a `manifest.json` (plugin metadata), and a `data.json` file. The `data.json` file is incredibly important; it stores the specific settings and parameters you have configured for that individual plugin.
- **`themes/` Directory:** Any community themes you have downloaded from the appearance menu are stored here as CSS files.

### Snippets and Custom CSS

If you are a power user who tweaks the interface using Custom CSS, your code is stored in the `.obsidian/snippets/` folder. Backing up this directory ensures that visual modifications—such as custom checkbox styles, adjusted heading sizes, or specific color highlights—survive a system crash or migration to a new device.

## Explanation of Obsidian Vault Structure for Backups: What to Include vs. Exclude

When designing your backup architecture, you must decide whether to back up absolutely everything or implement a selective approach. For the vast majority of users, the safest and simplest method is a complete copy: back up the entire vault folder, hidden files and all. However, as your vault scales, some nuance is required.

### Essential Directories to Back Up

Your backup script or software must explicitly include:
1. All `.md`, `.canvas`, and media files in the root and visible subfolders.
2. The entire `.obsidian` folder, specifically targeting the `plugins`, `themes`, and `snippets` subdirectories, along with all `.json` configuration files.

If you are using Obsidian Sync (the official paid synchronization service), it allows you to selectively toggle which configuration files are synchronized across devices. Even if you use Obsidian Sync, you should maintain a separate, external backup of your vault, as Sync is a synchronization tool, not a true historical backup solution. 

### Cache Files and Unnecessary Bloat

While backing up the `.obsidian` folder is critical, there are specific files inside it that can be safely excluded if you are using advanced backup tools like Git, Restic, or specific file exclusion rules in your backup software. 

- **`.obsidian/workspace.json`:** Because this file updates every single time you click a new note or resize a pane, it changes constantly. If you are using version control software like Git to back up your vault, tracking `workspace.json` will result in hundreds of meaningless commits. Excluding it simply means that if you restore from backup, your notes will open to the default view rather than your last-used layout.
- **`.trash/`:** If you have configured Obsidian to send deleted files to its own internal `.trash` folder rather than the system recycling bin, you probably do not need to back this up. Excluding the trash folder can save space and prevent obsolete files from cluttering your backup archives.
- **Large Cache Files:** Some complex plugins generate internal cache files or local databases (for indexing or specific rendering tasks) within their respective plugin folders. While usually small, occasionally a poorly optimized plugin can generate massive cache files. If a plugin folder seems unusually large, it may be generating cache data that can be safely excluded from daily backups.

## Choosing the Right Backup Strategy Based on Vault Structure

Now that you have a thorough explanation of Obsidian vault structure for backups, you must implement a strategy that captures this structure reliably. Because Obsidian files are standard system files, you are not locked into any single backup ecosystem. 

### Cloud Storage Syncing (Dropbox, Google Drive, iCloud)

The most common approach for general consumers is placing the entire Obsidian vault directory directly inside a cloud-synced folder like Dropbox, Google Drive, OneDrive, or iCloud Drive. 

**Pros:** 
- Completely frictionless and automatic.
- Excellent for syncing across multiple desktop computers.
- Provides rudimentary version history (most cloud providers allow you to restore older versions of files for 30 days).

**Cons:** 
- Mobile access can be tricky. Apple heavily restricts how apps interact with file systems, making iCloud the only highly reliable free option for syncing to an iPhone or iPad.
- Sync conflicts. If you leave Obsidian open on two different computers, the cloud provider might create duplicate files or corrupt the `workspace.json` file as it tries to reconcile simultaneous changes to the hidden `.obsidian` folder.

### Automated Local Backups (Time Machine, File History)

Using native operating system tools—Apple's Time Machine for macOS or File History for Windows—is an excellent secondary layer. These tools automatically copy your entire hard drive, including the hidden `.obsidian` folder, to an external drive every hour.

**Pros:** 
- Captures the exact vault structure perfectly, including all hidden and system files without requiring manual configuration.
- Allows you to scroll back in time and recover a specific deleted paragraph from three weeks ago.

**Cons:** 
- Requires an external hard drive to be physically plugged into the computer (or available on the local network).
- Does not protect against site-wide disasters like theft, fire, or severe flooding.

### Version Control Using Git

For software developers, engineers, and technical users, Git is the gold standard for Obsidian backups. Using the community plugin *Obsidian Git*, you can automate the process of committing your vault changes and pushing them to a private repository on GitHub, GitLab, or Bitbucket.

**Pros:** 
- Creates a pristine, annotated historical record of exactly how your knowledge base has evolved.
- Incredibly space-efficient, as Git only tracks the specific lines of text that changed, rather than copying the entire file.
- Allows you to easily exclude rapidly changing files by adding `workspace.json` and `.trash` to your `.gitignore` file.

**Cons:** 
- Steep learning curve for non-technical users.
- Git is designed for text, not large media. If your vault relies heavily on 50MB PDF research papers, 4K video clips, or uncompressed audio files, your Git repository will quickly become bloated, slow, and may violate GitHub's file size limits.

## Practical Advice: Setting Up a Bulletproof Obsidian Backup System

To guarantee the safety of your vault structure, you must move beyond a single point of failure. Implementing a multi-tiered approach ensures that a failure in one system does not result in total data loss.

### The 3-2-1 Backup Rule

The industry standard for data security is the 3-2-1 rule, and it applies perfectly to the Obsidian vault structure.

- **3 Copies of your data:** You should have the primary working copy on your hard drive, plus two backup copies.
- **2 Different storage media:** Do not store both backups on the same external hard drive. Use a mix of media, such as one external hard drive and one cloud storage provider.
- **1 Copy offsite:** Ensure that at least one backup is located physically away from your computer. If a power surge destroys your laptop and the external drive plugged into it, your offsite cloud backup will save your vault.

A practical implementation of this rule for Obsidian looks like this:
1. **Primary Copy:** Resides locally on your laptop's SSD.
2. **Local Backup:** Handled by macOS Time Machine or Windows File History backing up to an external SSD on your desk.
3. **Offsite Backup:** The vault is located inside a Dropbox folder (syncing to the cloud automatically), or you are using the Obsidian Git plugin to push changes to a private GitHub repository every 30 minutes.

### Handling Cross-Platform Quirks

If you are using Obsidian across macOS, Windows, and an Android or iOS device, the hidden `.obsidian` folder can sometimes cause friction. Because operating systems render fonts and handle file paths differently, a configuration that works perfectly on Windows might look slightly off on a Mac.

To solve this, advanced users often utilize Obsidian's ability to specify different configuration folders. In the Obsidian settings (under About -> Override config folder), you can change the default `.obsidian` folder name. You could create `.obsidian-mac`, `.obsidian-windows`, and `.obsidian-mobile`. Your backup system will back up all three, but each device will read from its specific folder, preventing theme or hotkey sync conflicts while ensuring the core Markdown files remain unified and continuously backed up.

## Conclusion

A thorough explanation of Obsidian vault structure for backups reveals that securing your personal knowledge management system requires more than just copying text files. Your vault is a living, breathing ecosystem heavily dependent on the configurations, plugins, and stylesheets housed within the hidden `.obsidian` directory. By actively designing a backup strategy that captures both your visible notes and your hidden engine—and by applying robust frameworks like the 3-2-1 rule—you can guarantee that your digital brain remains safe, portable, and entirely under your control for decades to come.

## Frequently Asked Questions

### What happens if I backup my vault but exclude the .obsidian folder?
If you exclude the `.obsidian` folder from your backups and later need to restore your vault, you will recover all your written text, notes, and attachments perfectly. However, you will lose your installed themes, community plugins, custom hotkeys, and workspace layouts, forcing you to manually rebuild your user interface and toolset from scratch.

### Can I store my Obsidian vault directly on Google Drive?
Yes, you can store your entire Obsidian vault (including the hidden structure) directly in a local Google Drive folder that syncs to the cloud. This serves as an excellent, seamless offsite backup, though you must ensure the Drive application is set to keep files "available offline" to prevent Obsidian from freezing when attempting to read unloaded notes.

### How large does an average Obsidian vault get for backup purposes?
If you primarily write text and use standard plugins, an Obsidian vault rarely exceeds 100-200 megabytes, making it incredibly fast and cheap to back up. However, if your vault structure heavily incorporates embedded PDFs, high-resolution images, or audio recordings, the folder size can quickly scale into the tens of gigabytes, which may require upgrading your cloud storage tier.

### Do I need Obsidian Sync if I already use an external hard drive?
Obsidian Sync and external hard drives serve different purposes. Obsidian Sync is primarily a synchronization tool designed to seamlessly keep your workspace updated across your desktop, laptop, and mobile devices in real time with end-to-end encryption. An external hard drive provides historical, automated local backups; relying exclusively on Sync without a true backup puts you at risk if you accidentally delete files and the deletion synchronizes across all devices.
