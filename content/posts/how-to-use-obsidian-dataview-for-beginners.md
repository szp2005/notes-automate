---
title: "How to use Obsidian Dataview for beginners: Complete Guide"
description: "Learn how to use Obsidian Dataview for beginners. This complete guide shows you how to turn static markdown notes into dynamic, automated dashboards."
pubDate: "2026-05-02"
author: "Alex Chen"
tags: ["obsidian", "dataview", "productivity", "note-taking"]
slug: "how-to-use-obsidian-dataview-for-beginners"
type: "informational"
---

# How to use Obsidian Dataview for beginners: Complete Guide

> **Quick Answer:** To use Obsidian Dataview, install the plugin from community plugins, add structured metadata (like YAML frontmatter) to your notes, and write queries using the Dataview Query Language (DQL). A basic query looks like ````dataview LIST FROM "folder"````, which automatically generates a list of all notes within that specific folder. 

When you first start using Obsidian, the freedom of plain-text markdown files is liberating. You create folders, drop links between notes, and watch your local graph grow. However, as your vault expands from a few dozen notes to hundreds or thousands, manually updating index pages and tracking down specific types of information becomes a tedious, error-prone chore. You find yourself spending more time managing your vault than actually writing or thinking.

This is the exact pain point Obsidian Dataview solves. It bridges the gap between unstructured text and structured databases. By treating your vault as a database, Dataview allows you to query, filter, and display your notes dynamically without ever changing the underlying markdown files. 

Learning Dataview can feel intimidating if you do not have a programming background. The documentation is thorough but often assumes prior knowledge of database logic. This guide is designed specifically for non-programmers. We will break down exactly how to use Obsidian Dataview for beginners, starting with the core concepts of metadata and building up to constructing your own automated vault dashboards.

## Understanding the Core Concept: Metadata

Before you can query data, you need data to query. Dataview cannot read your mind; it reads metadata. Metadata is simply "data about data." In the context of Obsidian, metadata is structured information attached to your note, such as the date it was created, its status, or a rating.

There are two primary ways to add metadata to your Obsidian notes so that Dataview can read them: YAML frontmatter and inline fields.

### YAML Frontmatter

YAML frontmatter is a block of text at the very top of your markdown file enclosed by three dashes (`---`). This is the standard, most robust way to store metadata. It is invisible in Obsidian's Reading view and plays nicely with other plugins.

Here is an example of frontmatter for a book review note:

```yaml
---
author: James Clear
genre: Productivity
rating: 5
date_read: 2026-01-15
status: finished
---
```

When you add this block to the top of your note, Dataview automatically registers these variables (`author`, `genre`, `rating`, `date_read`, `status`) and their corresponding values. You can name these variables anything you want, provided you use lowercase letters and underscores instead of spaces.

### Inline Fields

Sometimes you want to assign metadata in the middle of a sentence without scrolling to the top of your file. Dataview allows for inline fields using a double colon (`::`). 

For example, if you are writing meeting notes, you might type:

`Action Item:: Email the design team about the new layout.`

Dataview will recognize `Action Item` as the variable and the rest of the sentence as the value. While convenient, rely primarily on YAML frontmatter for document-level properties (like status or author) and use inline fields for specific, granular items (like tasks or expenses logged within a daily note).

## Your First Dataview Query: The LIST Command

Once your notes have metadata, you can start writing queries to retrieve them. Dataview queries are written inside specific code blocks. To tell Obsidian to render a Dataview block, you use three backticks followed by the word `dataview`.

The simplest and most common query is the `LIST` command. It returns a bulleted list of notes that match your criteria. 

### The Basic Structure

Every Dataview query requires at least two things: what format you want the output in, and where to look.

```text
LIST
FROM "Books"
```

If you place that code block in an Obsidian note, it will render a list of every single file located inside the folder named "Books". It is completely automatic. If you create a new note in the "Books" folder, it immediately appears on this list.

### Listing Specific Variables

You can also list the value of a specific variable alongside the file name. If you want to list your books and show their ratings, you modify the first line:

```text
LIST rating
FROM "Books"
```

This returns a list where each item looks like: `Atomic Habits: 5`. It is a simple but powerful way to get a bird's-eye view of your data.

## Organizing Information: The TABLE Command

While lists are useful for quick overviews, the `TABLE` command is where Dataview truly transforms your vault. Tables allow you to view multiple metadata fields simultaneously in a clean, organized spreadsheet format.

### Building a Basic Table

To build a table, you replace `LIST` with `TABLE`, followed by the names of the metadata fields you want to display as columns, separated by commas.

```text
TABLE author, genre, rating
FROM "Books"
```

This query will generate a table with four columns. The first column is automatically the File Name (which is a clickable link to the note itself). The next three columns will be Author, Genre, and Rating.

### Renaming Columns for Clarity

If your YAML keys are formatted with underscores (like `date_read`), you might want them to look cleaner in your table. Dataview allows you to rename columns in the query output using the `AS` command.

```text
TABLE author AS "Author", date_read AS "Date Completed"
FROM "Books"
```

The underlying metadata in your files remains `date_read`, but your dashboard table will display a polished column header reading "Date Completed".

## Filtering Your Data: The WHERE Clause

Listing everything in a folder is rarely enough. The power of a database lies in querying specific subsets of information. You achieve this in Dataview using the `WHERE` clause. 

The `WHERE` clause acts as a filter. Dataview looks at every file specified in your `FROM` clause and evaluates the `WHERE` statement. If the statement is true, the file is included; if it is false, the file is hidden.

### Filtering by Exact Match

If you only want to see books you have finished, you filter based on the `status` variable in your metadata.

```text
TABLE author, rating
FROM "Books"
WHERE status = "finished"
```

Note the use of quotation marks around the word "finished". This tells Dataview you are looking for that exact text string.

### Filtering by Numbers

When filtering numbers, you do not use quotation marks, and you can use mathematical operators like greater than (`>`) or less than (`<`).

```text
TABLE author, rating
FROM "Books"
WHERE rating >= 4
```

This table will exclusively display books in your vault that you have rated 4 or 5. 

### Combining Filters

You can chain multiple conditions together using `AND` and `OR`. 

```text
TABLE author, rating
FROM "Books"
WHERE status = "finished" AND rating >= 4
```

This specific query acts as a highly refined filter, returning only completed books that you also highly recommended. Building these specific combinations is how you create functional, distinct dashboards in Obsidian.

## Sorting Your Results: The SORT Clause

By default, Dataview outputs results in alphabetical order by file name. For a large table, this is often unhelpful. You use the `SORT` clause to arrange your data logically, adding `ASC` (ascending: A-Z, 1-10) or `DESC` (descending: Z-A, 10-1).

### Sorting by Text

To organize your book list by author:

```text
TABLE author, rating
FROM "Books"
SORT author ASC
```

### Sorting by Dates and Numbers

Sorting is particularly crucial for chronological data or numerical rankings. To see your most recently read books first:

```text
TABLE author, date_read
FROM "Books"
SORT date_read DESC
```

You can also sort by multiple criteria. For instance, you could sort by rating first, and then alphabetically by author for books that share the same rating. 

```text
TABLE author, rating
FROM "Books"
SORT rating DESC, author ASC
```

## Practical Dashboard Examples for Beginners

Understanding the syntax is one thing, but applying it is where the value lies. Here are three common ways beginners can use Dataview to automate their workflows today.

### 1. The Active Projects Dashboard

Instead of losing track of current projects, create a central dashboard note. Ensure every project note in your vault has a `status` field in its YAML frontmatter.

```text
TABLE due_date AS "Deadline", priority AS "Priority"
FROM "Projects"
WHERE status = "active"
SORT due_date ASC
```

This single block guarantees you never lose track of an active project. When you finish a project and change its frontmatter status to "completed", it automatically vanishes from this dashboard.

### 2. The Daily Journal Review

If you write daily notes and use inline fields to track your mood (e.g., `mood:: 8`), you can review your entire month at a glance.

```text
TABLE mood, sleep_hours AS "Sleep"
FROM "Daily Notes"
WHERE file.cday >= date(today) - dur(30 days)
SORT file.name DESC
```

This query introduces two built-in Dataview concepts: `file.cday` (creation date of the file) and `dur(30 days)` (a duration of 30 days). It dynamically looks back exactly one month from today, generating a table of your tracked metrics.

### 3. The Content Pipeline

If you write articles or create videos, managing your pipeline is essential.

```text
TABLE platform, publish_date AS "Date"
FROM "Content"
WHERE status = "drafting" OR status = "editing"
SORT publish_date ASC
```

This groups all your works-in-progress, separating them from idle ideas or already published content, keeping your focus strictly on what needs to be written right now.

## Practical Advice and Best Practices

As you implement Dataview, keep these concrete recommendations and tradeoffs in mind to maintain a healthy, fast Obsidian vault.

**Standardize your metadata immediately.** Dataview is entirely dependent on consistency. If you use `date_read` on one note, `read_date` on another, and `finished_on` on a third, your queries will fail. Decide on your property names early and write them down in a "Vault Standards" note. Use lowercase and underscores (`my_variable_name`) to prevent syntax errors.

**Avoid over-engineering your queries.** It is tempting to try and track 50 different metadata fields per note. Do not do this. Only track data you will actually query. Adding `weather_condition` to a book review note might be interesting, but if you never build a dashboard grouping books by weather, you are wasting time entering that data.

**Keep queries small and targeted.** Dataview runs dynamically. Every time you open a note with a Dataview table, the plugin searches your vault to render it. If you have a query searching 10,000 notes with five complex `WHERE` and `OR` clauses, that specific note will take a second or two to load. Restrict your `FROM` clauses to specific folders or tags rather than searching the entire vault.

**Understand the difference between Dataview and search.** Obsidian's core search function is for finding specific words inside paragraphs. Dataview is for manipulating structured metadata. Do not use Dataview to find a quote you vaguely remember; use the native search. Use Dataview to answer questions like "Which articles have I published this month?"

## Conclusion

Learning how to use Obsidian Dataview for beginners transforms your note-taking system from a passive filing cabinet into an active, automated assistant. By establishing clean metadata with YAML frontmatter and mastering the basic `LIST`, `TABLE`, `WHERE`, and `SORT` commands, you can build dashboards that surface exactly the information you need, exactly when you need it. Start small, standardize your property names, and focus on automating the tracking processes that currently consume your manual time.

## Frequently Asked Questions

### Does Dataview alter my original markdown files?
No, Dataview is strictly a read-only plugin. It scans your metadata and displays the output in a rendered code block, but it will never modify, delete, or rewrite the underlying text inside your markdown files. 

### Why is my Dataview table showing zero results?
The most common beginner error is a typo in the metadata key or the query syntax. Ensure your frontmatter uses exact spelling, that you have a space after the YAML colon (e.g., `status: active`, not `status:active`), and that your folder names in the `FROM` clause exactly match your vault structure, including capitalization.

### Can I export a Dataview table to a CSV or Excel file?
By default, Dataview renders dynamic HTML inside Obsidian. To export the data to a spreadsheet, you can highlight the rendered table in Obsidian's Reading view, copy it, and paste it directly into Excel or Google Sheets, which usually preserves the column formatting. 

### Does Dataview work on Obsidian mobile?
Yes, Dataview works seamlessly on both the iOS and Android versions of Obsidian. However, very complex queries on massive vaults may render slightly slower on mobile hardware compared to a desktop computer.
