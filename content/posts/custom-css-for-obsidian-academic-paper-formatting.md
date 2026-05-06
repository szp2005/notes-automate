---
title: "Custom CSS for Obsidian Academic Paper Formatting: A Complete Guide"
description: "Master custom CSS for Obsidian academic paper formatting. Tailor your notes, citations, and exports for professional research documents with this."
pubDate: "2026-05-06"
author: "Alex Chen"
tags: ["Obsidian CSS", "Academic Formatting", "Markdown Styling", "Research Workflow", "Students & Researchers"]
slug: "custom-css-for-obsidian-academic-paper-formatting"
type: "informational"
---

_As an Amazon Associate we earn from qualifying purchases. This post may contain affiliate links._

# Custom CSS for Obsidian Academic Paper Formatting: A Complete Guide

> **Quick Answer:** Custom CSS in Obsidian allows precise control over academic paper formatting elements like headings, paragraphs, blockquotes, and citation styles, ensuring consistency and professional presentation for research documents. It involves creating and enabling `.css` snippets within Obsidian's settings to override default styles, providing a tailored environment for academic writing and export.

For academics, researchers, and students, Obsidian has become an indispensable tool for knowledge management, note-taking, and even drafting research papers. Its powerful linking capabilities and local-first approach offer unparalleled flexibility. However, when it comes to the stringent formatting requirements of academic papers—think APA, MLA, Chicago, or specific journal styles—Obsidian's default appearance often falls short. While plugins can assist with citations, the visual presentation of your work within Obsidian, and critically, upon export, requires a more granular approach.

This is where custom CSS becomes not just an option, but a necessity. By leveraging custom CSS, you can transform Obsidian from a generic markdown editor into a highly specialized academic writing environment. This guide will walk you through the process of applying custom styles to ensure your headings, paragraphs, blockquotes, and even integrated citations meet the exacting standards of academic publishing, streamlining your workflow and enhancing the professional quality of your research output.

## Understanding Obsidian's Styling Architecture

Before diving into specific CSS rules, it's crucial to grasp how Obsidian applies styles. Obsidian uses a cascading stylesheet system, meaning styles are applied in a specific order, with later rules potentially overriding earlier ones based on their specificity. This understanding is fundamental to effectively implementing custom academic formatting.

Obsidian's styling hierarchy typically follows this order:
1.  **Obsidian's Base Styles:** The foundational CSS that defines the core look and feel of the application.
2.  **Active Theme:** The theme you've selected (e.g., default, Minimal, AnuPpuccin). Themes are essentially large CSS files that significantly alter Obsidian's appearance.
3.  **CSS Snippets:** User-defined `.css` files located in your vault's `.obsidian/snippets` folder. These are designed to allow small, targeted modifications without altering the entire theme.
4.  **Plugin-Specific Styles:** Some plugins inject their own CSS, which can sometimes be overridden by snippets if your snippet's rules are more specific.

For academic formatting, CSS snippets are generally the preferred method. They offer the flexibility to apply specific academic styles without committing to an entire theme that might not align with your preferences or introduce unwanted changes. Snippets are easy to manage, activate, and deactivate, making them ideal for project-specific formatting needs.

### Themes vs. CSS Snippets for Academic Work

While a well-chosen theme can provide a good starting point, relying solely on a theme for academic formatting can be problematic. Themes are often designed for general aesthetics or specific workflows, not necessarily for strict academic compliance. They might introduce visual elements or spacing that conflict with journal guidelines.

CSS snippets, on the other hand, allow for surgical precision. You can target specific elements like `h1`, `h2`, `p`, `blockquote`, or even custom classes added by plugins (e.g., for citations) and apply exact formatting rules. This modularity means you can have multiple snippets for different academic styles (APA, MLA, Chicago) and activate them as needed, ensuring your Obsidian environment adapts to your current project's requirements. For example, one snippet could enforce APA heading levels, while another could adjust line spacing for MLA.

### Identifying Elements with Developer Tools

To effectively write custom CSS, you need to know which HTML elements and CSS classes Obsidian uses for its various components. Obsidian, being an Electron app, includes a Chromium-based developer console. You can access it by pressing `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (macOS).

Once open, use the "Elements" tab and the "Select an element in the page to inspect it" tool (usually an arrow icon) to click on any part of your Obsidian note. This will highlight the corresponding HTML structure and its applied CSS rules. For instance, clicking on a heading will show you if it's an `h1`, `h2`, etc., and any classes applied to it. Clicking on a paragraph will reveal its `p` tag. This is invaluable for identifying the exact selectors you need to target with your custom CSS. Pay close attention to classes like `.markdown-preview-view` or `.cm-editor` (for editing view) and their children, as these often contain the elements you wish to style.

## Core Academic Formatting Elements to Customize

Academic papers adhere to strict guidelines regarding typography, spacing, and the presentation of structural elements. Custom CSS allows you to enforce these rules directly within Obsidian, providing a visual representation that closely mirrors the final published output.

### Headings (APA, MLA, Chicago Levels)

Academic style guides dictate specific formatting for headings, including font size, weight, capitalization, and indentation. Obsidian's default markdown headings (`#`, `##`, `###`, etc.) translate to `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` HTML tags.

*   **APA Style Example:**
    *   Level 1 (`h1`): Centered, Bold, Title Case Heading
    *   Level 2 (`h2`): Flush Left, Bold, Title Case Heading
    *   Level 3 (`h3`): Flush Left, Bold Italic, Title Case Heading
    *   Level 4 (`h4`): Indented, Bold, Title Case Heading, ending with a period. Text begins on the same line.
    *   Level 5 (`h5`): Indented, Bold Italic, Title Case Heading, ending with a period. Text begins on the same line.

To implement this, you would target each heading level:

```css
/* APA Level 1 */
.markdown-preview-view h1 {
    text-align: center;
    font-weight: bold;
    font-size: 1.8em; /* Adjust as needed */
    text-transform: capitalize; /* Or specific title case rules */
    margin-top: 1.5em;
    margin-bottom: 1em;
}

/* APA Level 2 */
.markdown-preview-view h2 {
    text-align: left;
    font-weight: bold;
    font-size: 1.5em;
    text-transform: capitalize;
    margin-top: 1.2em;
    margin-bottom: 0.8em;
}

/* APA Level 3 */
.markdown-preview-view h3 {
    text-align: left;
    font-weight: bold;
    font-style: italic;
    font-size: 1.2em;
    text-transform: capitalize;
    margin-top: 1em;
    margin-bottom: 0.6em;
}

/* APA Level 4 (requires more advanced CSS for inline text) */
/* This is a simplified visual representation. Full inline text requires specific plugin integration or careful manual formatting. */
.markdown-preview-view h4 {
    text-indent: 2em; /* Example for indentation */
    font-weight: bold;
    font-size: 1em;
    text-transform: capitalize;
    display: inline; /* To allow text on same line */
    margin-right: 0.5em; /* Space before text */
}
.markdown-preview-view h4 + p {
    display: inline;
}
```
*Note: APA Level 4 and 5, where text continues on the same line, can be challenging to perfectly replicate with pure CSS on standard markdown headings without additional HTML structure or a specialized plugin. The example above provides a visual approximation.*

### Paragraphs (Indentation, Line Spacing)

Most academic papers require specific line spacing (e.g., double-spaced) and first-line indentation for paragraphs.

```css
.markdown-preview-view p {
    line-height: 2.0; /* Double spacing */
    margin-bottom: 0.5em; /* Space between paragraphs */
    text-indent: 2em; /* First line indent (e.g., 0.5 inches) */
    /* Remove text-indent for the first paragraph after a heading */
    & + p {
        text-indent: 2em;
    }
    &:first-child { /* This targets the very first paragraph in a note */
        text-indent: 0;
    }
    /* More specific: remove indent for paragraphs immediately following headings */
    h1 + p, h2 + p, h3 + p, h4 + p, h5 + p, h6 + p {
        text-indent: 0;
    }
}
```

### Blockquotes (Long Quotes, Research Excerpts)

Long quotations (typically 40 words or more in APA) are formatted as blockquotes, indented from the left margin without quotation marks.

```css
.markdown-preview-view blockquote {
    margin-left: 4em; /* Indent from left (e.g., 1 inch) */
    margin-right: 2em; /* Optional: indent from right */
    padding-left: 0; /* Remove default padding if present */
    border-left: none; /* Remove default border if present */
    line-height: 2.0; /* Double spacing */
    font-size: 0.95em; /* Slightly smaller font for blockquotes */
    margin-top: 1em;
    margin-bottom: 1em;
}
```

### Lists (Numbered, Bulleted for Methodology, Results)

Lists in academic papers often require specific indentation and spacing.

```css
.markdown-preview-view ul,
.markdown-preview-view ol {
    margin-left: 3em; /* Indent lists */
    line-height: 1.8; /* Slightly less than double spacing for readability */
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}

.markdown-preview-view ul li,
.markdown-preview-view ol li {
    margin-bottom: 0.2em; /* Space between list items */
}
```

### Typography Choices for Readability

Selecting appropriate fonts is crucial for academic readability. Serif fonts are traditionally preferred for body text (e.g., Times New Roman, Georgia), while sans-serif fonts can be used for headings or figures (e.g., Arial, Calibri). Ensure the fonts you choose are widely available or embedded if you plan to share the CSS.

```css
body { /* Applies to the entire document */
    font-family: "Times New Roman", Times, serif;
    font-size: 12pt; /* Standard academic font size */
}

.markdown-preview-view h1,
.markdown-preview-view h2,
.markdown-preview-view h3,
.markdown-preview-view h4,
.markdown-preview-view h5,
.markdown-preview-view h6 {
    font-family: "Arial", sans-serif; /* Example for headings */
}
```

### Margins and Page Layout Considerations

While Obsidian's preview pane doesn't strictly adhere to "page" margins in the same way a word processor does, you can simulate this for print exports using `@media print` rules. For the general viewing experience, you can adjust the content width.

```css
/* For general viewing within Obsidian */
.markdown-preview-view {
    max-width: 8.5in; /* Simulate a page width for better visual consistency */
    margin-left: auto;
    margin-right: auto;
    padding: 1in; /* Simulate top/bottom/side margins */
    box-sizing: border-box; /* Include padding in the width */
}

/* For print output */
@media print {
    body {
        margin: 1in; /* Standard 1-inch margins for print */
        width: auto; /* Let browser handle width */
    }
    .markdown-preview-view {
        max-width: none; /* Remove max-width for print */
        padding: 0; /* Remove padding as margin handles it */
    }
}
```

## Integrating Citations and Bibliographies with Custom CSS

Citations and bibliographies are cornerstones of academic writing. While Obsidian itself doesn't have native citation management, it integrates well with external tools like Zotero or Mendeley, often via plugins or Pandoc exports. Custom CSS can significantly enhance the presentation of these elements.

Many Obsidian users leverage plugins like "Citations" or "Better BibTeX" (via Zotero integration) to insert citation keys. These plugins often render citations in a specific HTML structure, which you can then target with CSS. For example, a citation might appear as `{{cite key}}` in edit mode and render as `(Author, Year)` in preview mode, potentially wrapped in a `<span>` with a specific class.

### Styling Citation Callouts

If your citation plugin wraps citations in a specific HTML element or class, you can style it. For instance, if a plugin renders `(Author, Year)` inside a `<span>` with the class `citation-callout`:

```css
.markdown-preview-view .citation-callout {
    font-style: italic; /* Example: make citations italic */
    color: #555; /* Slightly muted color */
    font-size: 0.95em; /* Slightly smaller */
}
```
If you're using a system where citations are simply rendered as plain text within a paragraph, you might need to rely on Pandoc for final formatting, or use a more advanced plugin that provides CSS hooks.

### Formatting Bibliography Sections

For bibliographies, many academics generate them using Zotero/Mendeley and then paste them into Obsidian, or use plugins like Dataview to dynamically pull references. A common requirement is a "hanging indent" where the first line of each entry is flush left, and subsequent lines are indented.

Assuming your bibliography entries are within a `div` or `ul` with a specific class (e.g., `.bibliography` or `.references`), and each entry is a `p` or `li` element:

```css
.markdown-preview-view .bibliography {
    list-style: none; /* Remove default list bullets/numbers if using ul/li */
    padding-left: 0;
    margin-left: 0;
    line-height: 1.8; /* Consistent line spacing */
}

.markdown-preview-view .bibliography p,
.markdown-preview-view .bibliography li {
    text-indent: -2em; /* Negative indent for hanging effect */
    margin-left: 2em; /* Compensate with positive margin */
    margin-bottom: 0.5em; /* Space between entries */
}
```
*Note: The exact selectors for citations and bibliographies will depend heavily on the specific plugin you use or how you structure your bibliography in Markdown.*

### Styling Callouts for Research Notes

Obsidian's native callouts (`[!NOTE]`, `[!INFO]`, etc.) can be useful for organizing research notes within your academic drafts. You can customize their appearance to better suit an academic context, perhaps making them less visually distracting or aligning them with specific research categories.

```css
/* General academic callout styling */
.callout {
    border-left: 4px solid var(--callout-color); /* Use theme's callout color */
    background-color: var(--callout-color-bg);
    padding: 0.8em 1em;
    border-radius: 4px;
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 0.9em; /* Slightly smaller text */
}

/* Specific callout for "Research Question" */
.callout[data-callout="question"] {
    --callout-color: #0056b3; /* Darker blue */
    --callout-color-bg: #e6f0fa; /* Light blue background */
    font-weight: bold;
}

/* Specific callout for "Methodology Note" */
.callout[data-callout="method"] {
    --callout-color: #28a745; /* Green */
    --callout-color-bg: #e9f7eb; /* Light green background */
    font-style: italic;
}
```

### Ensuring Print-Ready Citation Appearance

When exporting to PDF or printing directly from Obsidian, the `@media print` CSS rules become critical. These rules only apply when the document is being printed. This allows you to define specific styles for print that might differ from your on-screen view, such as removing interactive elements, adjusting margins, or ensuring citations break correctly across pages.

```css
@media print {
    /* Ensure no page breaks inside citation blocks if possible */
    .markdown-preview-view .bibliography p,
    .markdown-preview-view .bibliography li {
        page-break-inside: avoid;
    }

    /* Adjust font sizes for print if needed */
    body {
        font-size: 12pt; /* Ensure 12pt for print */
    }
    .markdown-preview-view h1 {
        font-size: 24pt;
    }
    /* ... other print-specific adjustments ... */
}
```

## Practical Steps to Implement Custom CSS Snippets

Implementing custom CSS in Obsidian is a straightforward process once you understand the file structure and settings.

1.  **Create a New `.css` File:**
    Navigate to your Obsidian vault folder on your computer. Inside, you'll find a hidden folder named `.obsidian`. Within `.obsidian`, there should be a `snippets` folder. If `snippets` doesn't exist, create it.
    Inside the `snippets` folder, create a new text file and save it with a `.css` extension, for example, `academic-apa.css` or `my-research-styles.css`.

2.  **Add Your CSS Rules:**
    Open the newly created `.css` file in any text editor (e.g., VS Code, Notepad++, Sublime Text). Paste your custom CSS rules into this file. Start with a few rules and test them incrementally.

    ```css
    /* academic-apa.css */

    /* Basic Body Font and Size */
    body {
        font-family: "Times New Roman", Times, serif;
        font-size: 12pt;
    }

    /* Paragraph Formatting */
    .markdown-preview-view p {
        line-height: 2.0; /* Double spacing */
        margin-bottom: 0.5em;
        text-indent: 2em; /* First line indent */
    }
    .markdown-preview-view h1 + p,
    .markdown-preview-view h2 + p,
    .markdown-preview-view h3 + p,
    .markdown-preview-view h4 + p,
    .markdown-preview-view h5 + p,
    .markdown-preview-view h6 + p {
        text-indent: 0; /* No indent after headings */
    }

    /* Blockquote Formatting */
    .markdown-preview-view blockquote {
        margin-left: 4em;
        margin-right: 2em;
        padding-left: 0;
        border-left: none;
        line-height: 2.0;
        font-size: 0.95em;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    /* APA Level 1 Heading */
    .markdown-preview-view h1 {
        text-align: center;
        font-weight: bold;
        font-size: 1.8em;
        text-transform: capitalize;
        margin-top: 1.5em;
        margin-bottom: 1em;
    }
    /* ... add more rules for other headings, lists, etc. ... */
    ```

3.  **Enable the Snippet in Obsidian Settings:**
    Open Obsidian. Go to `Settings` (gear icon) -> `Appearance`. Scroll down to the `CSS snippets` section. You should see your newly created `.css` file listed there. Toggle the switch next to its name to enable it.

4.  **Test and Iterate:**
    As soon as you enable the snippet, Obsidian will apply the styles. Open a note with various academic elements (headings, paragraphs, blockquotes, lists) and observe the changes. If something isn't right, go back to your `.css` file, make adjustments, save the file, and Obsidian will usually refresh the styles automatically. If not, toggle the snippet off and on again in settings.

### Essential CSS Properties for Academic Layout

When crafting your custom CSS, focus on these key properties:

*   **`font-family`**: Specifies the font (e.g., `"Times New Roman", serif;`).
*   **`font-size`**: Sets the text size (e.g., `12pt`, `1em`, `1.2rem`).
*   **`line-height`**: Controls the spacing between lines (e.g., `1.5`, `2.0` for double spacing).
*   **`margin`**: Space outside an element (e.g., `margin-top`, `margin-bottom`, `margin-left`, `margin-right`). Crucial for spacing between paragraphs and headings.
*   **`padding`**: Space inside an element, between content and border.
*   **`text-align`**: Horizontal alignment (e.g., `left`, `center`, `justify`).
*   **`text-indent`**: Indents the first line of text (e.g., `2em` for paragraphs).
*   **`font-weight`**: Boldness of text (e.g., `normal`, `bold`, `700`).
*   **`font-style`**: Italicization (e.g., `normal`, `italic`).
*   **`text-transform`**: Changes capitalization (e.g., `uppercase`, `capitalize`).
*   **`display`**: How an element is rendered (e.g., `block`, `inline`, `flex`). Useful for advanced layouts.
*   **`page-break-inside`**: For print, prevents elements from breaking across pages (`avoid`).

### Debugging Your Custom Styles

Debugging is an essential part of the CSS customization process.

1.  **Use Developer Tools:** As mentioned, `Ctrl+Shift+I` (or `Cmd+Option+I`) is your best friend. In the "Elements" tab, select the problematic element. The "Styles" pane will show all applied CSS rules, including which file they come from and if they've been overridden.
2.  **Check Specificity:** If your rule isn't applying, it's likely a specificity issue. A more specific selector (e.g., `.markdown-preview-view p` is more specific than just `p`) will override a less specific one. Using `!important` is generally discouraged but can be a last resort for stubborn rules.
3.  **Comment Out Rules:** Temporarily comment out sections of your CSS to isolate the problem.
4.  **Validate CSS:** Use an online CSS validator to check for syntax errors. Even a small typo can prevent a rule from applying.

## Advanced Customizations and Workflow Enhancements

Beyond basic formatting, custom CSS can be integrated into more sophisticated academic workflows, especially when combined with other Obsidian features and external tools.

### Print-Specific CSS (`@media print`)

The `@media print` rule is invaluable for ensuring your academic documents look perfect when exported to PDF or physically printed. Styles defined within this block will only apply during the print process, allowing you to optimize for paper output without affecting your on-screen Obsidian experience.

Common uses for `@media print`:
*   **Page Margins:** Set precise 1-inch margins for the entire document.
*   **Font Sizes:** Ensure all text, especially body text, is 12pt. Headings might need specific point sizes.
*   **Page Breaks:** Use `page-break-before`, `page-break-after`, and `page-break-inside` to control where pages break, preventing awkward splits in figures, tables, or bibliography entries. For example, `h1 { page-break-before: always; }` would ensure each H1 starts on a new page.
*   **Remove UI Elements:** Hide Obsidian's UI elements (sidebars, scrollbars, etc.) that might appear in a screenshot-like print.
*   **Colors:** Convert background colors to white and text colors to black for optimal print contrast, if your theme uses dark mode.

```css
@media print {
    body {
        margin: 1in; /* Standard 1-inch margins */
        font-size: 12pt;
        color: black;
        background-color: white;
    }

    /* Hide Obsidian UI elements during print */
    .workspace-ribbon,
    .status-bar,
    .workspace-split.mod-left-split,
    .workspace-split.mod-right-split,
    .view-header {
        display: none !important;
    }

    /* Ensure headings start on a new page (e.g., for major sections) */
    .markdown-preview-view h1 {
        page-break-before: always;
        margin-top: 0; /* Reset top margin for new page */
    }

    /* Prevent blockquotes or list items from splitting across pages */
    .markdown-preview-view blockquote,
    .markdown-preview-view ul li,
    .markdown-preview-view ol li {
        page-break-inside: avoid;
    }
}
```

### Exporting to PDF/Word with Custom Styles (Pandoc Integration)

For the most robust academic exports, especially to `.docx` or highly formatted PDFs, integrating Obsidian with Pandoc is the gold standard. Pandoc is a universal document converter that can take your Markdown and apply a CSL (Citation Style Language) file for citations and a reference `.docx` file for styling.

While Pandoc handles much of the heavy lifting, your custom CSS in Obsidian primarily influences the *visual representation within Obsidian*. For Pandoc exports, you'll typically use:
*   **CSL files:** For citation and bibliography formatting (e.g., `apa.csl`).
*   **Reference DOCX:** A Word document styled exactly how you want your output to look (headings, paragraphs, etc.). Pandoc uses this as a template.

However, you can use your custom Obsidian CSS as a guide to create your reference DOCX, ensuring visual consistency between your Obsidian preview and your final Pandoc output. Some advanced Pandoc setups can also directly consume CSS, but this is less common for standard academic workflows which prefer CSL and reference DOCX.

### Using Dataview for Dynamic Bibliographies and Research Summaries

The Dataview plugin for Obsidian allows you to query your vault and display information dynamically. This can be incredibly powerful for managing research. You can use Dataview to:
*   **Generate a bibliography:** If you store your references as individual notes or use a plugin that adds metadata to your notes, Dataview can list them.
*   **Summarize research:** Pull all notes tagged with a specific topic or containing certain keywords.

While Dataview itself doesn't directly apply academic *styles* in the traditional sense, its output can be styled with custom CSS. For example, if Dataview generates a list of references, you can target the `div` or `ul` element that Dataview renders with your bibliography CSS rules (e.g., hanging indents).

```css
/* Example: Styling Dataview-generated lists */
.dataview.list-view ul {
    list-style: none;
    padding-left: 0;
    margin-left: 0;
}

.dataview.list-view li {
    text-indent: -2em;
    margin-left: 2em;
    margin-bottom: 0.5em;
    line-height: 1.8;
}
```
You'll need to inspect the HTML structure generated by Dataview using the developer tools to find the correct classes to target.

### Conditional Styling for Different Document Types

If you work on multiple academic projects with different formatting requirements (e.g., APA for one journal, MLA for another), you can create separate CSS snippets for each style.

*   `academic-apa.css`
*   `academic-mla.css`
*   `academic-chicago.css`

Then, simply activate the relevant snippet in Obsidian's Appearance settings for the project you are working on. This modular approach keeps your styles organized and prevents conflicts. For even more advanced control, some users employ plugins that allow per-note or per-folder CSS, though this adds complexity.

### Version Control for Your CSS Snippets

Treat your custom CSS snippets as code. Store them in a version control system like Git, especially if you're making complex changes or collaborating. This allows you to:
*   Track changes over time.
*   Revert to previous versions if a change breaks something.
*   Synchronize snippets across multiple devices or vaults.

Simply include your `.obsidian/snippets` folder in your Git repository. This ensures that your carefully crafted academic formatting is always backed up and manageable.

## Practical Advice for Academic CSS in Obsidian

*   **Start Simple:** Don't try to implement every single rule at once. Begin with core elements like paragraph spacing and heading styles.
*   **Inspect, Inspect, Inspect:** The developer console is your most powerful tool. Use it to identify the exact CSS classes and HTML elements Obsidian uses.
*   **Use

## Frequently Asked Questions

### What is the best first step for custom css for obsidian academic paper formatting?

Start by mapping the current manual process from trigger to final handoff. Once every step is visible, automate repeated data collection and notification steps before touching judgment-heavy decisions.

### Which tools are usually needed for custom css for obsidian academic paper formatting?

Most teams need an intake source, a workflow automation tool, a database or CRM, and a notification channel. The exact stack matters less than having clear field names, ownership, and error handling.

### How do you avoid automation mistakes?

Keep approvals on sensitive steps, log every run, and test with a small sample before enabling the workflow for all users. A short human review checkpoint is usually cheaper than debugging a silent bad handoff later.

### How do you measure whether custom css for obsidian academic paper formatting is working?

Track cycle time, skipped manual steps, error rate, and user follow-up questions. If the workflow saves time but creates confusion, simplify the handoff before adding more automation.
