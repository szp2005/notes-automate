---
image: "/og/how-to-sync-obsidian-with-google-drive-using-a-plugin.webp"
title: "Sync Obsidian with Google Drive: Free Plugin Setup Guide"
author: "Alex Chen"
date: 2026-04-29
slug: how-to-sync-obsidian-with-google-drive-using-a-plugin
description: "Provide heavily annotated screenshots for every single click and configuration step to make the process foolproof, especially for non-technical users."
keywords: ["Obsidian Remotely Save plugin", "Obsidian Google Drive integration", "free Obsidian sync", "Obsidian cross-device sync", "Obsidian community plugins", "set up Remotely Save Obsidian", "Obsidian sync tutorial", "Obsidian vault backup Google Drive"]
draft: false
type: "informational"
tags: ["sync", "obsidian", "google", "drive"]
---

# How to Sync Obsidian with Google Drive Using a Plugin (Free, Step-by-Step Guide)

> **TL;DR**
> - The **Remotely Save** community plugin connects your Obsidian vault to Google Drive for free, replacing the need for a paid Obsidian Sync subscription.
> - Setup takes under 10 minutes: install the plugin, authenticate with Google, run your first sync, then repeat on every device.
> - Most common errors (401 auth failures, sync conflicts, missing mobile files) have simple one-step fixes covered in full below.

---

## Table of Contents

1. [Why Sync Obsidian with Google Drive?](#why-sync)
2. [Prerequisites: What You'll Need](#prerequisites)
3. [Step 1: Install the Remotely Save Plugin](#step-1)
4. [Step 2: Configure Remotely Save with Google Drive](#step-2)
5. [Step 3: Run Your First Sync & Enable Auto-Sync](#step-3)
6. [Troubleshooting Common Sync Issues](#troubleshooting)
7. [Pro Tips: Encryption, Intervals, Ignoring Folders](#pro-tips)
8. [FAQ](#faq)
9. [Conclusion](#conclusion)

---

## Why Sync Obsidian with Google Drive? {#why-sync}

Obsidian's official **Obsidian Sync** service costs $4–$8/month. That's a reasonable price if you want a hands-off experience, but it caps your storage at 1–10 GB depending on tier and ties your notes to Obsidian's servers. For most users who already pay for Google storage, that recurring cost is unnecessary.

Here's a direct comparison:

| Feature | Obsidian Sync (Paid) | Google Drive + Remotely Save (Free) |
|---|---|---|
| Monthly cost | $4–$8/month | $0 (uses existing Drive storage) |
| Storage included | 1–10 GB | 15 GB free (up to 2 TB paid) |
| End-to-end encryption | Yes (built-in) | Optional (via plugin passphrase) |
| Syncs plugin settings | Yes | Yes (configurable) |
| Works on Android | Yes | Yes |
| Works on iOS | Yes | Yes |
| Version history | Yes (12 months) | Via Google Drive file versions |
| Setup complexity | Near-zero | ~10 minutes |

The [Remotely Save plugin](URL_PLACEHOLDER_1) is a community-built, open-source plugin that acts as the bridge. It handles the OAuth authentication handshake with Google, manages file diffing, and runs sync on a schedule you define. You are not rerouting files through any third-party server — your vault goes directly from your device to your Google Drive.

---

## Prerequisites: What You'll Need {#prerequisites}

Before touching any plugin settings, confirm you have the following in place:

- **A Google Account** with Drive access. Your free 15 GB is enough for most vaults; heavy attachment users may want to expand.
- **Obsidian installed on your primary computer** (Windows, macOS, or Linux). Download it from [obsidian.md](URL_PLACEHOLDER_2) if needed.
- **Obsidian installed on every secondary device** — Android phone, iPhone, iPad, second laptop, etc.
- **Community plugins enabled.** By default, Obsidian ships in "Restricted mode," which blocks all third-party plugins. Go to **Settings → Community plugins** and click **Turn on community plugins**. You'll see a one-time warning about third-party code — click **I understand** to proceed.

> 💼 **Power-user note:** If you manage notes for a team or small business and need more than 15 GB, [Google Workspace](URL_PLACEHOLDER_3) starts at around $6/user/month and gives each account a minimum of 30 GB pooled storage, along with shared drives and admin controls. Worth the upgrade if your vault contains project documentation, client files, or large media attachments.

---

## Step 1: Install the Remotely Save Community Plugin {#step-1}

1. Open Obsidian on your **desktop** (always configure on desktop first, then mirror to mobile).
2. Click the **gear icon** (⚙️) at the bottom-left to open **Settings**.
3. In the left sidebar, click **Community plugins**.
4. Click the **Browse** button. The community plugin browser opens.
5. In the search bar at the top, type **Remotely Save**.
6. The plugin by **fyears** appears at the top of results. Click it.
7. Click **Install**. Wait 3–5 seconds for the download to complete.
8. Click **Enable**. The toggle turns blue.

You'll now see **Remotely Save** listed under your installed plugins. A small cloud icon also appears in the left ribbon — that's your manual sync trigger.

> ⚠️ Do not confuse "Remotely Save" with older plugins like "Obsidian Git" or "Self-hosted LiveSync." They solve different problems. Remotely Save is the only one with native Google Drive OAuth support.

---

## Step 2: Configure Remotely Save with Your Google Drive Account {#step-2}

This is the most important step. Take it slowly.

1. In **Settings**, scroll down the left sidebar until you see **Remotely Save** under the "Plugin Options" section. Click it.
2. At the top of the plugin settings, find the **Remote Service** dropdown. It defaults to **Dropbox**. Click the dropdown and select **Google Drive (GDrive)**.
3. A new section titled **Google Drive** appears below the dropdown.
4. Click the **Auth** button (labeled something like **"Click to auth to Google Drive"**). Your default web browser opens and loads a Google OAuth consent screen.
5. **Sign in** to the Google Account where you want your vault stored.
6. Google will show a permissions screen listing what Remotely Save wants access to — specifically read/write access to files it creates in Drive. Click **Allow**.
7. The browser shows a short confirmation code or a success message. Copy the code if prompted.
8. Switch back to Obsidian. Paste the code into the confirmation field if asked, then click **Submit** or **Confirm**.
9. Back in plugin settings, you'll see a green indicator or a text note confirming the authentication is active.

**Choosing your vault folder in Drive:**

In the plugin settings, look for the field labeled **"Folder for Remotely Save"** or **"Remote Base Dir"**. By default this is set to the name of your vault. Leave it as-is unless you have a specific reason to rename it. This folder will appear inside a top-level folder called `remotely-save` in your Google Drive.

---

## Step 3: Run Your First Sync & Enable Auto-Sync {#step-3}

### Manual sync (do this first)

Click the **cloud icon** in the left ribbon, or open the Command Palette (**Ctrl/Cmd + P**) and search for **"Remotely Save: Start sync"**. Click it.

Watch the status bar at the bottom of the Obsidian window. You'll see a spinning indicator, then a completion message with a file count. For a 500-note vault, this first sync typically takes 30–90 seconds depending on your internet speed.

Open **Google Drive** in your browser and navigate to **My Drive → remotely-save → [your vault name]**. Your `.md` files should appear there immediately.

### Enabling automatic sync

Back in **Remotely Save settings**:

- **Auto run every X minutes:** Set this to `5` for near-real-time sync. Set it to `30` if you're on a metered connection or battery-sensitive mobile device.
- **Sync on save (after file modify):** Enable this toggle if you want each save to trigger a sync automatically. Convenient, but generates more Drive API calls throughout the day.
- **Sync on startup:** Enable this so the plugin pulls any changes made on other devices the moment you open Obsidian.

### Repeating on your other devices

Install Obsidian on your phone or second computer. Create a **new local vault** (don't open an existing one). Install **Remotely Save** using the same steps above. Authenticate with the **same Google Account**. In the **Remote Base Dir** field, type the **exact same folder name** you used on the first device. Run a manual sync. Your notes will populate.

---

## Troubleshooting Common Sync Issues {#troubleshooting}

### 401 Authentication Error

**Symptom:** Sync fails immediately with "401 Unauthorized" in the error log.

**Fix:** Go to Remotely Save settings, find the Google Drive section, and click **Revoke Auth**, then re-authenticate from scratch. This happens when Google invalidates the OAuth token — common after password changes or if the auth was done more than 6 months ago.

### Sync Conflicts / Duplicate Files

**Symptom:** You see files with names like `note (conflict 2024-01-15).md`.

**Fix:** Remotely Save creates a conflict copy rather than silently overwriting. Open both files, manually merge the content you want to keep, delete the conflict copy. To prevent this, enable **Sync on startup** so your device always pulls the latest version before you start writing.

### Files Not Appearing on Mobile

**Symptom:** Sync completes on desktop but your phone shows an empty vault or old files.

**Fix:** On mobile, open Remotely Save settings and verify the **Remote Base Dir** exactly matches your desktop setting — including capitalization. A mismatch of even one character creates a new empty folder in Drive instead of reading from the correct one.

### Large File Attachments Stall Sync

**Symptom:** Sync hangs when you add images, PDFs, or audio files to your vault.

**Fix:** In Remotely Save settings, find the **"Skip large files"** option and set a size limit (e.g., 5 MB). Store large attachments externally and link to them instead. Alternatively, create an `Attachments` subfolder and add it to the **Ignore Paths** list (see Pro Tips below).

---

## Pro Tips: Encryption, Intervals, Ignoring Folders {#pro-tips}

**Enable end-to-end encryption:** In Remotely Save settings, enter a passphrase in the **"Encryption Password"** field. Files are encrypted client-side before leaving your device. Google only stores ciphertext — even Google cannot read your notes. Write this passphrase down; losing it means losing access to the encrypted files permanently.

**Tune your sync interval:** The default is often set to 0 (manual only). Setting it to 5 minutes is the sweet spot for most users. On mobile with limited data, use 30 minutes.

**Ignore specific folders:** Add folder paths to the **"Ignore Paths"** field in settings. Useful for large attachment folders, template vaults, or plugin caches. Format: one folder name per line, no leading slash.

**Verify sync integrity:** After a major note dump or migration, open the Remotely Save log (accessible via the Command Palette → "Remotely Save: View log") and confirm every file shows a successful upload status rather than a skip or error.

**Don't use folder-based Google Drive desktop client simultaneously:** If you have the Google Drive desktop app running and pointing to the same vault folder, you risk double-syncing and creating conflicts. Let Remotely Save be the only sync mechanism for your vault folder.

---

## Conclusion {#conclusion}

Syncing Obsidian with Google Drive using Remotely Save is the most practical free sync solution available today. You get automatic cross-device sync, optional zero-knowledge encryption, and full control over your data — all without a monthly subscription.

The full process takes 10 minutes: install Remotely Save, authenticate with Google, set your auto-sync interval, then repeat on each device with the same Remote Base Dir name. If anything breaks, 90% of issues trace back to either a stale OAuth token (re-authenticate) or a mismatched folder name (check capitalization).

**Ready to go further?** Install [Remotely Save from the Obsidian community plugin browser](URL_PLACEHOLDER_5), pair it with a [Google Workspace account](URL_PLACEHOLDER_6) for expanded storage and team sharing, or explore [pCloud](URL_PLACEHOLDER_7) if you want a Google-free, end-to-end encrypted alternative. Your notes, your infrastructure, your rules.

---

## Frequently Asked Questions

### Is syncing Obsidian with Google Drive secure?

Your files travel over HTTPS to Google Drive and are stored with Google's standard encryption at rest. If you want zero-knowledge encryption — meaning even Google can't read your notes — enable the passphrase option in Remotely Save. With a strong passphrase set, your vault is as secure as your password manager.

### Does this work on both Android and iOS?

Yes. Remotely Save supports Android and iOS through the Obsidian mobile apps. The setup process is identical on both platforms. iOS users should note that background sync is limited by iOS app lifecycle rules — open the app to trigger a sync.

### Does Remotely Save sync plugin settings and themes?

By default, it syncs the entire vault including the `.obsidian` folder, which contains your plugin configurations, themes, and hotkeys. You can exclude it using the Ignore Paths setting if you prefer to manage settings separately per device.

### What happens if I run out of Google Drive storage?

Sync will fail with a storage quota error. Remotely Save will log the error rather than silently skip files. Free up Drive space, or upgrade your Google storage. If you prefer not to use Google's ecosystem at all, [pCloud](URL_PLACEHOLDER_4) is a strong privacy-focused alternative — it offers end-to-end encrypted storage out of the box with a lifetime plan option, and Remotely Save supports it as a WebDAV backend.

### Can I sync multiple vaults to the same Google Drive account?

Yes. Set a unique **Remote Base Dir** name for each vault. They'll appear as separate subfolders inside `remotely-save` in your Drive. No interference between them.

## Related Reading

- [The Core Question: What Problem Does Obsidian Sync Solve?](/posts/is-obsidian-sync-worth-it-review/)
- [What is Excalidraw and Why Use It in Obsidian?](/posts/excalidraw-plugin-for-obsidian-review/)
- [Why Build a Zettelkasten in Obsidian?](/posts/setting-up-a-zettelkasten-in-obsidian-with-plugins/)
- [Why Track Habits in Obsidian in 2024?](/posts/best-obsidian-plugins-for-habit-tracking-2024/)
