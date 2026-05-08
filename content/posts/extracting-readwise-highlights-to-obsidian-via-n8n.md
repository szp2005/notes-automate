---
image: "/og/extracting-readwise-highlights-to-obsidian-via-n8n.webp"
title: "Extracting Readwise Highlights to Obsidian via n8n: Complete 5-Step Guide"
description: "Master the technical workflow for extracting Readwise highlights to Obsidian via n8n. Learn to parse JSON payloads, format Markdown, and automate your PKM system."
pubDate: "2026-05-07"
author: "Alex Chen"
tags: ["obsidian", "readwise", "automation", "n8n"]
slug: "extracting-readwise-highlights-to-obsidian-via-n8n"
type: "informational"
---

_As an Amazon Associate we earn from qualifying purchases. This post may contain affiliate links._

# Extracting Readwise Highlights to Obsidian via n8n: Complete 5-Step Guide

> **Quick Answer:** Extracting Readwise highlights to Obsidian via n8n involves using an n8n HTTP Request node to poll the Readwise Export API, splitting the JSON response with an Item Lists node, formatting the highlight data into Markdown using a Code node, and finally sending the formatted text to your Obsidian vault using the Obsidian Local REST API or a synced cloud folder.

Personal knowledge management relies heavily on the frictionless movement of data. Readwise excels at aggregating highlights from Kindle, web clippers, and podcasts, while Obsidian provides an unparalleled environment for connecting those thoughts. While Readwise offers an official Obsidian plugin, power users often find its formatting constraints and sync triggers limiting. Building a custom automation pipeline gives you absolute control over how your annotations enter your vault.

Extracting Readwise highlights to Obsidian via n8n provides a robust, visual programming approach to knowledge routing. By intercepting the raw data from the Readwise API before it reaches your vault, you can inject conditional logic, append AI-generated summaries, restructure metadata, or route specific tags to distinct folders. This guide breaks down the exact technical workflow required to bridge these two applications using n8n.

## Why Build a Custom n8n Workflow Over Native Plugins?

The official Readwise to Obsidian plugin works well for standard use cases, but it operates as a black box. You configure a template, and it runs quietly in the background when Obsidian is open. Moving this process to an external automation platform like n8n introduces several distinct advantages for complex personal knowledge management systems.

First, an n8n workflow operates independently of your Obsidian application state. The official plugin requires Obsidian to be open and active on your device to trigger a sync. An n8n pipeline can run on a cron schedule on a server, processing highlights and pushing them to your repository (via Git or cloud sync) 24/7. When you open your vault, the notes are already there.

Second, the structural control is absolute. If you want highlights tagged with "architecture" to be formatted as tasks, while highlights tagged with "quote" get appended to a daily note, n8n handles this routing effortlessly. You can utilize conditional Switch nodes to evaluate the source type (e.g., book vs. article) and apply entirely different Markdown templates to each.

Finally, integrating n8n allows for data enrichment. Before the highlight ever touches your Obsidian vault, your n8n workflow can pass the text through a local LLM or the OpenAI API to generate a one-sentence summary, extract key entities, or translate the text. This transforms a basic sync into an active processing pipeline.

## Prerequisites for the Automation Pipeline

Before constructing the workflow, you must prepare the endpoints. This integration requires access tokens and an established method for n8n to write files into your local or cloud-hosted Obsidian vault.

You will need:
1. **Readwise Access Token:** Available from the Readwise developer dashboard. This token grants read access to your entire library of highlights.
2. **n8n Instance:** This can be n8n Cloud or a self-hosted instance via Docker. Ensure your instance is updated to support the latest Core nodes.
3. **Obsidian Write Access:** You need a way for n8n to deliver the Markdown files. There are two primary methods:
   - **Obsidian Local REST API Plugin:** This is ideal if n8n runs locally on the same network as your desktop. It exposes your vault to local HTTP PUT and POST requests.
   - **Git or Cloud Sync:** If using cloud n8n, you can write the output to a GitHub repository that syncs with Obsidian (via the Obsidian Git plugin), or use n8n nodes to push files directly to Dropbox or Google Drive where your vault resides.

For the purpose of this guide, we will focus on using the HTTP Request node to interact with the Readwise API and format the output, preparing it for your preferred delivery method.

## Step 1: Polling the Readwise Export API

The workflow begins by requesting your latest data. Readwise provides a dedicated `/v2/export/` endpoint specifically designed for integrations that need to sync new highlights incrementally.

In your n8n canvas, add a **Schedule Trigger** node. Set this to run at your preferred interval, such as every hour or once daily at midnight. Be mindful of rate limits; running it every five minutes is unnecessary for reading highlights and may result in API throttling.

Next, attach an **HTTP Request** node. This is the engine of the extraction process. Configure it with the following parameters:
- **Method:** GET
- **URL:** `https://readwise.io/api/v2/export/`
- **Authentication:** Generic Credential Type (or Header Auth).
- **Headers:** Name: `Authorization`, Value: `Token YOUR_READWISE_TOKEN`.

To ensure you only extract new highlights rather than downloading your entire library every time, you must utilize the `updatedAfter` query parameter. In n8n, you can manage this by reading the timestamp of the last successful run from a local file, a database, or utilizing n8n's static data feature to persist the timestamp between executions. Pass this ISO 8601 formatted date string into the query parameters of the HTTP Request node.

## Step 2: Parsing the Readwise JSON Response

The Readwise Export API returns a deeply nested JSON object. The root level contains a `results` array. Each item in this array represents a source (a book, article, or tweet thread). Inside each source object, there is a `highlights` array containing the individual annotations.

To process these effectively in n8n, you need to flatten the data structure. You cannot easily map a nested array directly into individual Markdown files without splitting it.

Add an **Item Lists** node (previously known as the Split In Batches or Item Lists split functionality). Configure the node to:
- **Operation:** Split Out Items
- **Field To Split Out:** `results`

This converts the single API response into multiple n8n items, one for each book or article. If your goal is to create one Obsidian note per book (which is the standard PKM approach), you can proceed to format the data at this level.

If your goal is to create an individual atomic note for every single highlight, you will need a second **Item Lists** node. Set the field to `highlights` to further split the data down to the granular annotation level.

## Step 3: Formatting the Output for Obsidian Markdown

With the data isolated, you must transform the JSON properties into Obsidian-flavored Markdown. The n8n **Code** node (using JavaScript) provides the most robust environment for this, handling complex string manipulation and template literals far better than standard expression fields.

Connect a Code node to your Item Lists node. For a workflow designed to create one note per book, your JavaScript will iterate through the nested highlights and construct the note body.

A standard script approach involves extracting the book metadata for the YAML frontmatter, then mapping the highlights array into formatted blockquotes:

```javascript
for (const item of $input.all()) {
  const source = item.json;
  
  let markdown = `---\n`;
  markdown += `title: "${source.title}"\n`;
  markdown += `author: "${source.author}"\n`;
  markdown += `category: "${source.category}"\n`;
  markdown += `readwise_id: ${source.user_book_id}\n`;
  markdown += `---\n\n`;
  
  markdown += `# ${source.title}\n\n`;
  markdown += `![Cover Image](${source.cover_image_url})\n\n`;
  
  if (source.highlights && source.highlights.length > 0) {
    markdown += `## Highlights\n\n`;
    source.highlights.forEach(hl => {
      markdown += `> ${hl.text}\n`;
      if (hl.note) {
        markdown += `\n**Note:** ${hl.note}\n`;
      }
      markdown += `\n*Location: ${hl.location} | [Open in Readwise](${hl.readwise_url})*\n`;
      markdown += `---\n`;
    });
  }
  
  item.json.formatted_markdown = markdown;
  item.json.safe_filename = source.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.md';
}
return $input.all();
```

This script ensures your YAML frontmatter is pristine and handles the presence or absence of personal notes appended to highlights. It also generates a sanitized filename, which is critical for the next step, as Obsidian (and underlying file systems) will reject file paths containing colons or slashes.

## Step 4: Delivering the Data to Obsidian

The final phase of extracting Readwise highlights to Obsidian via n8n is writing the generated Markdown to your vault. The method depends heavily on your hosting architecture.

### Method A: Using the Local REST API (Self-Hosted Network)
If your n8n instance and your Obsidian vault reside on the same local network, the Obsidian Local REST API plugin is the fastest route.

Add another **HTTP Request** node.
- **Method:** POST (or PUT if you are appending/overwriting)
- **URL:** `http://192.168.X.X:27123/vault/Readwise/${{ $json.safe_filename }}`
- **Headers:** `Authorization: Bearer YOUR_OBSIDIAN_API_KEY`, `Content-Type: text/markdown`
- **Body:** Use an expression to pass `{{ $json.formatted_markdown }}`.

### Method B: Using GitHub (Cloud Architecture)
If you run n8n on a cloud VPS and sync Obsidian across devices via GitHub, route the data through the Git protocol.

You can use the **GitHub** node in n8n.
- **Operation:** Create or Update File
- **Repository:** Your vault repository.
- **File Path:** `Readwise/{{ $json.safe_filename }}`
- **File Content:** `{{ $json.formatted_markdown }}`

This approach provides version control for your highlights and ensures the data syncs seamlessly to your desktop or mobile Obsidian app upon your next pull.

## Step 5: Handling Updates and Appending Highlights

One of the most complex challenges in PKM automation is handling incremental updates. When you read a book over several weeks, you will pull highlights for the same book multiple times. If your workflow simply overwrites the existing file, you lose any manual edits or bidirectional links you established in Obsidian.

To solve this, your n8n workflow must check if the note already exists before writing. 

If using the Local REST API, perform a GET request to the file path first. 
- If it returns a 404 (Not Found), use a POST request to create the entire file including the YAML frontmatter.
- If it returns a 200 (OK), isolate just the *new* highlights from your JSON payload, format them as simple blockquotes without the YAML header, and use the API's specialized `PATCH` or append endpoint to inject the new text at the bottom of the existing file.

If using Git, you must retrieve the current file contents, append the new formatted string to the end of the text block in the Code node, and commit the updated aggregate file. Handling state accurately separates a fragile script from a production-grade automation.

## Advanced Customizations and Metadata Extraction

Once the basic pipeline for extracting Readwise highlights to Obsidian via n8n is functional, you can expand its capabilities far beyond what standard plugins offer.

**AI Auto-Tagging:** Route the highlight text through an OpenAI or Anthropic node before formatting. Prompt the LLM: "Analyze this highlight and return exactly three relevant organizational tags separated by commas." Append these dynamically generated tags to the Obsidian frontmatter, allowing your vault's graph view to cluster concepts automatically without manual sorting.

**Podcast Audio Timestamps:** Readwise frequently updates its integrations, recently capturing podcast highlights via apps like Snipd. You can use a Switch node in n8n to detect `source_type === 'podcast'`. Route these items to a separate formatting path that emphasizes the audio timestamp and link, formatting it natively for Obsidian plugins like Media Extended, allowing you to click the highlight in Obsidian and jump straight to the audio location.

**Flashcard Generation:** If you use Obsidian for spaced repetition (via the Spaced Repetition plugin or an Anki bridge), n8n can detect specific trigger words in your Readwise notes. If a Readwise note contains "?", n8n can parse the highlight as a question and the note as an answer, formatting the output string as `Question :: Answer` before pushing it to a dedicated flashcard folder in your vault.

## Troubleshooting Common Webhook and Sync Errors

Building custom data pipelines introduces distinct failure points. Monitoring n8n execution logs is critical during the first few weeks of deployment.

**Rate Limiting on Initial Sync:** The Readwise `/v2/export/` API is designed for incremental syncs. If you attempt to download a library of 10,000 highlights in a single run without handling pagination correctly, the HTTP request will time out or throw a 429 Too Many Requests error. Use n8n's pagination settings within the HTTP Request node to gracefully handle the `nextPageCursor` provided in the Readwise JSON response.

**Markdown Formatting Breakages:** JSON payloads frequently contain unescaped characters, line breaks, or invisible control characters (especially from web clippers). If these are passed directly into your YAML frontmatter without sanitization, Obsidian will fail to parse the frontmatter block. Always run title and author strings through a basic cleanup regex in your Code node to strip characters like colons or unescaped quotes before constructing the YAML string.

**Sync Conflicts:** If your n8n workflow pushes a file to GitHub at the exact moment you are editing that same file in Obsidian, you will create a Git merge conflict. To mitigate this, schedule your n8n pipeline to run during typical inactive hours, or append new highlights to a designated "Readwise Inbox" file rather than editing your core book notes directly.

## Frequently Asked Questions

### Can n8n pull older highlights that I made years ago?
Yes. If you omit the `updatedAfter` parameter in the HTTP Request node, the Readwise API will serve your entire history. You must ensure you configure n8n's pagination settings to handle the high volume of data across multiple API pages to prevent timeout errors.

### Is it secure to pass my Readwise token through n8n?
If you are self-hosting n8n on a secure server, your credentials remain under your control. Store your Readwise API token securely in n8n's built-in Credentials manager rather than hardcoding it directly into the HTTP Request node as plaintext.

### How do I stop n8n from creating duplicate notes in Obsidian?
Implement state management. You must record the ID of the last successfully processed highlight or use the `updatedAfter` parameter accurately. Additionally, configure your Obsidian delivery method (Git or REST API) to check for file existence and append new data rather than forcefully overwriting files on every execution.

### Does this method work with mobile Obsidian setups?
It works excellently with mobile if you use a cloud intermediary. Because mobile operating systems restrict background server processes, you cannot easily use the Local REST API plugin from a remote n8n server to a phone. Instead, have n8n push the Markdown files to your Git repository or Obsidian Sync folder; the mobile app will seamlessly pull the new files when opened. 

### Can I filter which highlights get sent to Obsidian?
Absolutely. This is the primary benefit of using an automation platform. Add an IF node or Filter node after your Item Lists node. You can configure rules such as "Only continue if `category` equals `books`" or "Only continue if the highlight contains a specific tag," ensuring your vault remains uncluttered by low-value web clippings.

---

## Related Reading

- [Obsidian Canvas vs. Excalidraw: Which Visual Tool Wins?](/posts/obsidian-canvas-vs-excalidraw-for-mind-mapping/)

- [Best Obsidian Themes for Writing Longform Content](/posts/best-obsidian-themes-for-writing-longform-content/)