---
title: "Copilot for Obsidian Complete Guide: Chat With Your Notes"
description: "Discover how to use Copilot for Obsidian to chat with your notes natively. Learn setup, local LLM integration, and workflows for efficient knowledge retrieval."
pubDate: "2026-05-01"
author: "Alex Chen"
tags: ["obsidian", "ai tools", "knowledge management", "productivity"]
slug: "copilot-for-obsidian-chat-with-your-notes"
type: "informational"
---

# Copilot for Obsidian Complete Guide: Chat With Your Notes

> **Quick Answer:** Copilot for Obsidian is a community plugin that integrates large language models (LLMs) directly into your Obsidian vault. It allows you to chat with your existing markdown notes, summarize long documents, and generate text using either cloud-based APIs like OpenAI and Anthropic, or privacy-focused local models via Ollama and LM Studio.

Managing a growing Obsidian vault eventually presents a scaling problem. As your collection of daily notes, research clips, and meeting minutes expands from hundreds to thousands of markdown files, standard search functions become insufficient. You remember writing down a specific insight about a project three months ago, but keyword searches only bring up fragmented context.

This is the exact problem space where bringing an AI layer directly into your personal knowledge management (PKM) system creates measurable value. Instead of copy-pasting your notes into a separate browser window running ChatGPT or Claude, you can interact with an AI that already has context on your active workspace.

Copilot for Obsidian bridges this gap. It operates as a flexible conversational interface residing in your sidebar, capable of reading your active notes, searching your vault, and helping you synthesize information without breaking your focus. This guide examines how to set up the plugin, configure it for both cloud and local models, and build effective workflows for interacting with your personal knowledge base.

## Understanding the Architecture of Copilot for Obsidian

Before diving into configuration, it is helpful to understand how the plugin interacts with your data and external models. Copilot for Obsidian does not train an AI on your vault. Instead, it uses a technique similar to Retrieval-Augmented Generation (RAG), combined with active-window context.

### Context Window and Active Notes
When you open a chat session, Copilot primarily looks at the note you currently have active. It uses the text of this note as the "context" for the prompt it sends to the language model. If you are reading a 3,000-word research paper and ask, "What are the main arguments?", the plugin packages those 3,000 words alongside your question and sends them to the configured LLM.

### Vault Indexing and Search
More advanced interactions involve querying the entire vault. Copilot can utilize Obsidian's search capabilities to find relevant notes based on your query, pull snippets from those notes, and feed them to the LLM to formulate an answer. This requires careful management of the context window limits inherent to whichever model you choose to use.

### The API Abstraction Layer
The plugin acts as a client. It formats your requests and sends them to a standard API endpoint. This means it is entirely agnostic to the backend model. As long as the service provides an OpenAI-compatible API structure (which is the current industry standard), Copilot can connect to it. This abstraction is what allows you to switch seamlessly between GPT-4o for complex reasoning and a local Llama 3 model for private, offline work.

## Choosing Your Language Model Backend

The most critical decision when setting up Copilot is selecting the model backend. Your choice dictates the speed, intelligence, and privacy level of your interactions. 

### Cloud APIs: Maximum Capability
Using cloud providers offers the highest level of reasoning capability and the largest context windows, essential for synthesizing large amounts of text.

*   **OpenAI (GPT-4o / GPT-4o-mini):** The standard choice. It requires an OpenAI developer account and an API key. You pay per token (word fragment) processed. GPT-4o offers a 128,000-token context window, allowing you to easily dump entire book summaries or weeks of daily notes into the chat.
*   **Anthropic (Claude 3.5 Sonnet / Haiku):** Many users prefer Claude for working with text, as its tone is often more natural and its coding capabilities are exceptional. Claude 3.5 Sonnet provides a 200,000-token window, which is ideal for massive document synthesis.
*   **Google (Gemini 1.5 Pro / Flash):** Gemini models offer massive context windows (up to 2 million tokens), making them unmatched for analyzing entirely vault-wide datasets, though the plugin integration can sometimes require additional configuration depending on the exact API gateway used.

### Local LLMs: Absolute Privacy
If your vault contains sensitive client data, journals, or proprietary research, sending your text to a cloud provider may be a non-starter. You can run models entirely on your local hardware.

*   **Ollama:** The easiest way to run local models on macOS, Linux, and Windows. Once Ollama is installed and running a model like `llama3` or `mistral`, you simply point Copilot to `http://localhost:11434` and select the local model.
*   **LM Studio:** Provides a graphical interface for downloading and running quantized models from Hugging Face. It features a built-in local inference server that mimics the OpenAI API perfectly, operating on port 1234 by default.

Running local models requires substantial hardware. For smooth performance, an Apple Silicon Mac (M1/M2/M3 with 16GB+ RAM) or a PC with a dedicated Nvidia GPU (minimum 8GB VRAM) is highly recommended.

## Step-by-Step Installation and Configuration

Setting up Copilot for Obsidian is straightforward, but correctly configuring the API connection is where users frequently encounter errors.

### 1. Install the Community Plugin
1. Open Obsidian Settings.
2. Navigate to **Community plugins** and ensure **Safe mode** is turned off.
3. Click **Browse** and search for "Copilot".
4. Look for the plugin created by *logancyang*. Click **Install** and then **Enable**.

### 2. Configure a Cloud API (OpenAI Example)
1. Go to the Copilot settings pane in Obsidian.
2. In the **Default Model** section, select `gpt-4o` or `gpt-4o-mini`.
3. Locate the **OpenAI API Key** field.
4. Generate an API key from the OpenAI developer dashboard (`platform.openai.com`). Note that this requires a funded developer account, which is separate from a ChatGPT Plus subscription.
5. Paste the key into the settings. The plugin will save it securely.

### 3. Configure a Local Model (Ollama Example)
1. Ensure Ollama is running on your machine and you have pulled a model (e.g., run `ollama run llama3` in your terminal).
2. In the Copilot settings, locate the **Ollama Settings** section.
3. Toggle on **Enable Ollama**.
4. Set the **Ollama Base URL** to `http://127.0.0.1:11434` (the default port).
5. In the **Ollama Models** field, type the exact name of the model you have downloaded (e.g., `llama3`).
6. Change your **Default Model** at the top of the settings to the local model you just specified.

## Core Workflows: How to Chat With Your Notes

Once configured, you can open the Copilot chat panel via the command palette (`Ctrl/Cmd + P` -> "Copilot: Open Copilot"). Here are the most effective ways to utilize the tool in daily work.

### Document Summarization and QA
The most reliable use case is asking questions about the active document. Open a long article you have saved or a complex meeting transcript. 

*   **Prompt:** "Summarize the key action items from this meeting, assigning each to the mentioned person."
*   **Prompt:** "What is the core argument of this paper, and what evidence does the author provide to support it?"

Copilot reads the markdown file currently in focus, appends your prompt, and returns the result in the sidebar. You can then use the built-in copy buttons to paste the summary back into your note.

### Vault Search and Synthesis
To ask questions across multiple notes, you need to ensure Copilot is utilizing your vault context. You can use the `@` command in the chat interface to explicitly reference other files or folders in your vault.

*   **Prompt:** "@folder:Meeting-Notes Based on the last four weeks of meetings, what are the recurring blockers preventing the completion of Project X?"
*   **Prompt:** "@note:2025-Q1-Goals @note:2025-Q2-Goals Compare these two planning documents and list the goals that were carried over."

*Note: Vault-wide queries consume significantly more tokens. Ensure you are using an API with a sufficient context limit and are monitoring your API usage costs if using cloud providers.*

### Writing and Editing Assistance
Copilot can act as a localized editor that understands your style.

*   **Prompt:** "Rewrite the selected text to be more formal and concise, suitable for a technical specification."
*   **Prompt:** "Generate a markdown table comparing the specifications of the three software tools I listed above."

You can highlight specific text within your note, and Copilot will use that selection as the primary context for its action, allowing for surgical editing without confusing the model with the entire document's contents.

## Managing Context Windows and Costs

A common pitfall when integrating LLMs into PKM is misunderstanding the context window. 

The context window is the maximum amount of text (measured in tokens, where 1 token ≈ 0.75 words) the model can hold in its "working memory" at one time. If you try to feed a folder containing 500,000 words into a model with a 128,000-token limit, the plugin will truncate the text, leading to hallucinations or incomplete answers.

Furthermore, when using paid APIs like OpenAI or Anthropic, every word sent to the model and every word generated costs money. 

### Cost Mitigation Strategies
1.  **Use Smaller Models for Simple Tasks:** Set your default model to `gpt-4o-mini` or `claude-3-haiku`. These are heavily optimized, very fast, and cost fractions of a cent per request. They are perfectly adequate for proofreading or summarizing short notes.
2.  **Reserve Heavy Models for Synthesis:** Only switch to `gpt-4o` or `claude-3.5-sonnet` when you need complex reasoning across multiple long documents.
3.  **Targeted Context:** Instead of asking Copilot to read your entire vault, use Obsidian's native search to find the 3-4 highly relevant notes, open them, or tag them specifically in your prompt. Narrowing the context improves AI accuracy and reduces cost simultaneously.

## Conclusion

Integrating an AI copilot into your Obsidian workflow transforms the application from a static filing cabinet into an active research assistant. By setting up Copilot for Obsidian, you gain the ability to rapidly interrogate your own thoughts, summarize dense material, and surface forgotten connections. Whether you choose the raw power of cloud APIs for massive context synthesis or rely on local models to maintain absolute data sovereignty, treating your notes as a conversational interface is a significant upgrade to personal knowledge management. The key to success lies in understanding the limitations of context windows and utilizing targeted prompts to extract precise value from your localized data.

## Frequently Asked Questions

### Is Copilot for Obsidian free to use?
The plugin itself is free and open-source. However, you will need to pay for the API usage if you connect it to commercial services like OpenAI or Anthropic. If you use local models via Ollama, the entire setup is 100% free.

### Does the plugin train AI models on my private notes?
No. Copilot for Obsidian only sends the specific text from your active note (or the notes you explicitly query) to the API endpoint you configure, and only when you initiate a chat prompt. API providers like OpenAI and Anthropic state in their terms of service that data submitted via their paid APIs is not used to train their foundational models.

### Why is the AI hallucinating or giving me wrong answers about my vault?
This usually occurs when you exceed the model's context window. If you ask a broad question about dozens of notes, the plugin must truncate the text to fit the model's limits. Without the full text, the AI attempts to guess the answer. Use specific `@` tags to narrow the context to a few highly relevant notes.

### Can I run this offline without an internet connection?
Yes, absolutely. If you configure Copilot to connect to a local server running Ollama or LM Studio, all data processing happens directly on your computer's CPU or GPU. This requires no internet connection and ensures maximum privacy.

---

## Related Reading

- [Canvas for Obsidian: Infinite Whiteboard Ideas for 2026](/posts/canvas-for-obsidian-infinite-whiteboard-ideas/)
- [HoverNotes for Timestamped Video Notes in Obsidian: Complete Guide](/posts/hovernotes-for-timestamped-video-notes-obsidian/)
