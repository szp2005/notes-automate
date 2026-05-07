---
image: "/og/automated-meeting-note-generation-with-n8n-obsidian.webp"
title: "Automated Meeting Note Generation With n8n Obsidian: 5-Step Guide"
description: "Learn how to build an automated meeting note generation workflow using n8n and Obsidian. Capture transcripts, summarize via LLM, and sync directly to your vault."
pubDate: "2026-05-07"
author: "Alex Chen"
tags: ["n8n", "Obsidian", "productivity automation", "knowledge management"]
slug: "automated-meeting-note-generation-with-n8n-obsidian"
type: "informational"
---

_As an Amazon Associate we earn from qualifying purchases. This post may contain affiliate links._

# Automated Meeting Note Generation With n8n Obsidian: 5-Step Guide

> **Quick Answer:** Building an automated meeting note generation workflow with n8n and Obsidian involves capturing raw audio or text transcripts via a webhook, processing them through an LLM node in n8n for structured summarization, and writing the formatted markdown file directly into your local Obsidian vault. This architecture eliminates manual data entry, standardizes formatting, and ensures consistent knowledge retention across your local files.

Professionals spend hours each week synthesizing meeting discussions into actionable notes. While transcription services have become commoditized, raw transcripts are notoriously difficult to read. They contain filler words, off-topic tangents, and unstructured dialogue that offer poor signal-to-noise ratios when reviewed weeks later. The manual process of formatting these transcripts into useful documentation creates significant administrative overhead.

Bridging the gap between raw conversational data and structured personal knowledge management requires an integration pipeline. Using n8n—a node-based workflow automation tool—you can intercept meeting data, transform it programmatically, and route it to your local system. By combining this with Obsidian, a highly customizable local markdown knowledge base, you establish a frictionless pipeline.

Implementing automated meeting note generation with n8n Obsidian ensures that every call you take is systematically parsed, tagged, and stored on your local drive without requiring manual intervention. This guide outlines the exact architecture, node configuration, and API connections required to build this system from the ground up.

## The Architecture of an n8n to Obsidian Pipeline

To build a reliable system, it is necessary to understand the data flow. This pipeline operates on an Extract, Transform, and Load (ETL) architecture adapted for personal knowledge management. 

### Extraction via Webhooks
The trigger for this automation is typically a webhook. Meeting assistants like Fireflies, Fathom, or Mac Whisper can send POST requests containing the final transcript and metadata (attendees, duration, date) the moment a meeting concludes. n8n catches this payload using a Webhook node, acting as the entry point for your data.

### Transformation via LLMs
Raw transcripts must be compressed and formatted. Inside n8n, the data passes through an Advanced AI node or a standard HTTP Request node pointing to an LLM provider (OpenAI, Anthropic, or a local instance like Ollama). By supplying a rigid system prompt, the LLM processes the unstructured text into distinct, defined sections: executive summary, decisions made, and action items.

### Loading into Obsidian
Obsidian is fundamentally a local directory of markdown files. Loading data into it requires either writing directly to the file system (if n8n is hosted on the same machine) or communicating over a local network via an API. The most robust method utilizes the Obsidian Local REST API plugin, which allows n8n to send an HTTP POST request that creates a fully formatted `.md` file directly inside your vault.

## Prerequisites for Your Automation Environment

Before assembling the workflow, ensure you have the necessary infrastructure properly configured.

1. **An n8n Instance:** You can use n8n Cloud or a self-hosted instance via Docker. If you are self-hosting, ensure your n8n server has network access to the machine running Obsidian.
2. **Obsidian:** Installed on your primary machine.
3. **Obsidian Local REST API Plugin:** This community plugin must be installed and enabled within your Obsidian vault. Once enabled, copy the Bearer Token and note the port number (default is 27123).
4. **An LLM API Key:** An active API key for OpenAI, Anthropic, or a connection to a local Ollama server for processing the text.
5. **A Transcription Source:** A service capable of sending webhooks containing meeting transcripts.

## Step 1: Ingesting Transcripts into n8n

The automation begins by creating a new workflow in n8n and adding a **Webhook** trigger node. 

Configure the Webhook node to listen for HTTP POST requests. Set the path to something specific, such as `incoming-meeting-transcript`. n8n will generate a test URL. You must map this URL into your meeting transcription software's webhook settings.

When your transcription software fires, the payload will arrive in n8n. A standard payload typically looks like this:

```json
{
  "meeting_title": "Q3 Marketing Sync",
  "date": "2026-05-07T14:30:00Z",
  "attendees": ["Alex", "Sarah", "John"],
  "transcript": "Okay, let's get started... [full text]"
}
```

Add a **Set** node (or an **Edit Fields** node in newer n8n versions) immediately after the Webhook. Map these incoming variables to standardized names so they are easier to reference in subsequent steps.

## Step 2: Processing and Summarizing via LLM Node

The core of automated meeting note generation with n8n Obsidian lies in the transformation phase. Raw text is useless without structure.

Add an **OpenAI** node (or your preferred LLM provider) to the canvas. Set the operation to "Chat" or "Complete". You will feed the transcript variable from the previous step into the user prompt, but the system prompt is where you dictate the formatting rules.

Use a strict, role-based system prompt to ensure the output requires zero manual cleanup:

```text
You are an expert executive assistant. Read the following raw meeting transcript and generate a highly structured summary. 
You must output ONLY standard markdown. Do not include introductory text.

Structure the output exactly as follows:
## Executive Summary
[A 3-4 sentence paragraph summarizing the core purpose and outcome of the meeting]

## Decisions Made
- [Decision 1]
- [Decision 2]

## Action Items
- [ ] [Task] (@[Person Responsible])
- [ ] [Task] (@[Person Responsible])

## Key Discussion Points
- [Point 1]
- [Point 2]
```

By enforcing this structure, you guarantee that every generated note matches your vault's internal formatting conventions, allowing Obsidian's task management plugins (like Tasks or Dataview) to read the action items natively.

## Step 3: Formatting the Markdown Payload

Obsidian relies heavily on YAML frontmatter for metadata tracking. Before sending the LLM's output to Obsidian, you must wrap it in this metadata.

Add a **Code** node in n8n to stitch together the metadata from Step 1 and the summarized markdown body from Step 2. 

Write a simple JavaScript snippet inside the Code node:

```javascript
const title = $input.item.json.meeting_title;
const date = $input.item.json.date.split('T')[0];
const attendees = $input.item.json.attendees.join(', ');
const summaryBody = $input.item.json.llm_output;

const markdownContent = `---
title: "${title}"
date: ${date}
attendees: [${attendees}]
tags: [meeting, automated]
---

# ${title}

${summaryBody}
`;

return {
  json: {
    filename: `${date} - ${title}.md`,
    content: markdownContent
  }
};
```

This node formats the exact string that will become your Obsidian file. The YAML frontmatter ensures that your notes can be queried using Obsidian Dataview later, filtering meetings by date or attendee.

## Step 4: Connecting n8n to Your Obsidian Vault

With the exact filename and markdown content prepared, the final step is writing the file to your hard drive. 

Add an **HTTP Request** node to your n8n workflow. This node will interact with the Obsidian Local REST API plugin running on your machine.

Configure the HTTP Request node as follows:
* **Method:** POST
* **URL:** `http://[YOUR_IP_ADDRESS]:27123/vault/Inbox/{{$json.filename}}`
* **Authentication:** Header Auth
* **Name:** `Authorization`
* **Value:** `Bearer [YOUR_OBSIDIAN_API_TOKEN]`
* **Body Content Type:** `text/markdown`
* **Body Parameters:** Map this directly to the `content` variable generated in Step 3.

*Note on targeting paths:* In the URL above, `/vault/Inbox/` forces the API to place the new markdown file inside a folder named "Inbox" at the root of your vault. It is highly recommended to route automated files to a designated folder rather than mixing them directly with your manually curated notes.

## Step 5: Testing and Refining the Workflow

Execute the workflow manually in n8n using historical transcript data. Verify that the webhook receives the data, the LLM generates the correct markdown structure, and the HTTP request successfully creates the file in your Obsidian vault.

Open Obsidian and inspect the new file. Check the frontmatter for syntax errors—if the YAML is invalid, Obsidian will not parse the metadata correctly. Ensure the action items use the standard `- [ ]` syntax so that task aggregation plugins recognize them.

Add an **Error Trigger** workflow in n8n to catch failures. If the LLM times out or the Obsidian REST API is unreachable (for instance, if your computer is asleep), you should configure n8n to send a notification to your email or Slack, preserving the transcript payload so it can be retried later.

## Practical Advice for System Reliability and Privacy

When designing automated systems that handle internal company data or private discussions, specific architectural decisions dictate the long-term viability of the setup.

**Manage State via an Inbox Methodology:** Never write automated outputs directly into your permanent note directories. Route all n8n outputs to a `000_Inbox` folder in Obsidian. This forces you to review, verify, and manually move the file into its final resting place. AI hallucinations happen; an inbox acts as a quarantine zone, ensuring corrupt or hallucinated data does not pollute your knowledge graph.

**Prioritize Local LLMs for Confidentiality:** Sending transcripts of proprietary business meetings to external APIs (like OpenAI) poses security risks and may violate corporate compliance policies. If privacy is paramount, run a local LLM via Ollama on the same machine hosting n8n. Models like Llama 3 (8B) or Mistral are highly capable of structuring meeting transcripts and ensure your raw data never leaves your local network.

**Handle Asynchronous File Syncing:** If you cannot use the Obsidian Local REST API (e.g., you host n8n on a remote cloud server and your local machine is behind a strict NAT), alter Step 4. Instead of an HTTP Request directly to Obsidian, use an n8n node to save the markdown file to a cloud storage provider like Dropbox, Google Drive, or GitHub. Then, configure your local Obsidian vault to sync from that directory. The moment n8n writes the file to Dropbox, the Dropbox desktop client will sync it to your hard drive, and Obsidian will index it immediately.

## Synthesizing Your Automation Workflow

Implementing automated meeting note generation with n8n Obsidian replaces a tedious administrative chore with a silent, reliable background process. By leveraging webhooks for ingestion, LLMs for structural transformation, and direct API calls for local file generation, your system acts as a dedicated assistant. This architecture scales perfectly, ensuring that whether you have one meeting a week or forty, your knowledge base remains consistently updated, standardized, and immediately searchable.

## Frequently Asked Questions

### Can I run this workflow entirely locally for privacy?
Yes. You can host n8n using Docker on your local machine, use a local instance of Whisper for transcription, and run Ollama for the LLM processing. In this configuration, no meeting data ever leaves your personal network.

### Do I need a paid n8n subscription to integrate with Obsidian?
No. You can self-host the community edition of n8n for free. If you prefer not to manage servers, n8n Cloud offers paid tiers, but the functionality regarding HTTP requests and webhooks remains identical across both versions.

### How does n8n handle file attachments like audio recordings?
If your webhook receives an audio file (like an MP3) instead of a text transcript, you must add an audio transcription node before the LLM step. n8n supports OpenAI's Whisper API, which can process binary audio data and convert it into the text transcript needed for the rest of the workflow.

### What happens if Obsidian is closed when the webhook fires?
If Obsidian is closed, the Local REST API plugin is offline, and the HTTP Request node in n8n will fail. To prevent data loss, configure n8n to either retry the node automatically upon failure or use a cloud-sync workaround (saving the markdown file to an iCloud/Dropbox folder that Obsidian reads from when it opens).

---

## Related Reading

- [Managing Recurring Tasks in Obsidian with DataviewJS: Complete Guide](/posts/managing-recurring-tasks-in-obsidian-with-dataviewjs/)

- [Best Font Pairings for Obsidian Minimal Theme in 2026](/posts/best-font-pairings-obsidian-minimal-theme-2026/)
