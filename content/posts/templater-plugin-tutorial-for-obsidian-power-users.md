---
image: "/og/templater-plugin-tutorial-for-obsidian-power-users.webp"
title: "Templater Plugin Tutorial for Obsidian Power Users: Advanced Automation"
description: "Master the Templater plugin for Obsidian with this advanced tutorial. Learn to automate workflows, use Javascript snippets, and build complex note templates."
pubDate: "2026-05-01"
author: "Alex Chen"
tags: ["obsidian", "templater", "automation", "productivity"]
slug: "templater-plugin-tutorial-for-obsidian-power-users"
type: "informational"
---

_As an Amazon Associate we earn from qualifying purchases. This post may contain affiliate links._

# Templater Plugin Tutorial for Obsidian Power Users: Advanced Automation

> **Quick Answer:** The Templater plugin transforms Obsidian from a static text editor into an automated knowledge system. By leveraging its execution commands (`<%* %>`), system modules (`tp.file`, `tp.date`), and Javascript capabilities, power users can automate file routing, generate dynamic metadata, prompt for user inputs, and pull data from external APIs directly into their notes.

For most Obsidian users, the core Templates plugin serves as a gentle introduction to avoiding repetitive typing. It handles static text insertion and basic date stamping. However, as your personal knowledge management (PKM) system grows into thousands of notes, static templates become a bottleneck. You end up spending more time managing metadata, moving files to the correct folders, and formatting links than actually writing or thinking.

This is where the Templater plugin fundamentally changes how you interact with Obsidian. It is not just a text expander; it is a full-fledged automation engine operating within your vault.

This Templater plugin tutorial for Obsidian power users will skip the basic "how to insert a date" lessons. Instead, we will dive directly into advanced Javascript execution, dynamic file routing, complex logic, and building modular workflows that run autonomously the moment a note is created.

## Why Core Templates Aren't Enough for Power Users

The native Obsidian Templates plugin is limited to simple string replacement (`{{title}}`, `{{date}}`, `{{time}}`). It cannot evaluate logic, interact with the file system, or ask you questions during note creation.

As a power user, your workflow likely requires:
- Automatically moving a newly created "Meeting Note" into the `Meetings/2026/05` directory.
- Prompting you to select a "Project Status" from a dropdown menu when creating a project dashboard.
- Conditionally inserting text based on the day of the week or the folder the note resides in.
- Fetching live data, such as weather or calendar events, via external APIs.

Templater handles all of this through its robust API and Javascript execution context. It allows you to write actual code that executes at the exact moment the template is triggered, resulting in dynamic, context-aware notes that structure themselves.

## Setting Up Templater for Advanced Workflows

Before diving into complex scripts, you must configure Templater to allow maximum flexibility. A restrictive setup will cause execution scripts to fail silently.

### Enabling Javascript Execution

To unlock Templater's true potential, you must allow it to run Javascript.
1. Navigate to **Settings > Templater**.
2. Scroll down to the **User System Command Execution** and **Enable User System Command Execution** toggle. Turn this on.
3. If you plan to use custom scripts saved in your vault, configure the **Script files folder location**. Create a folder named `Scripts` or `Templater Scripts` in your vault and point this setting to it.

### Folder Templates and Automation

One of the most powerful features to enable is **Folder Templates**. This allows you to bind a specific template to a specific folder.
1. Toggle on **Trigger Templater on new file creation**.
2. Enable **Enable Folder Templates**.
3. Add a rule: For example, map the folder `Meetings` to the template `Templates/Meeting Note.md`.

Now, whenever you create a new blank note inside the `Meetings` folder (or if a script creates one there), Templater will instantly apply the `Meeting Note` template without any manual intervention. This eliminates the "Create Note -> Open Command Palette -> Insert Template" sequence entirely.

## Mastering Templater Syntax and Modules

Templater uses specific tags to distinguish between regular text and code to be executed. Understanding the difference between these tags is crucial.

- `<% %>` — **Interpolation:** Evaluates the code inside and outputs the result as text. Used for dates, titles, and basic module outputs.
- `<%* %>` — **Execution:** Runs Javascript logic but does *not* output text directly. Used for variable declaration, `if/else` statements, API calls, and file system operations.
- `<%+ %>` — **Dynamic:** Updates dynamically every time you switch to Reading mode. (Use sparingly, as it can slow down rendering on large notes).

### Dynamic Metadata with tp.date and tp.file

Generating metadata is the most common use case, but we can push it further than basic dates.

To get the title of the file, completely sanitized of illegal characters:
`<% tp.file.title.replace(/[\\/#^[\]|:]/g, '') %>`

To calculate future or past dates dynamically (e.g., setting a review date 7 days from creation):
`Review Date: <% tp.date.now("YYYY-MM-DD", 7) %>`

To get the date of the previous Monday, useful for weekly review templates:
`<% tp.date.weekday("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>`

### User Input and Prompts with tp.system

Hardcoding values into templates limits their reusability. The `tp.system` module allows you to interact with the template as it runs.

**Using `tp.system.prompt` for text input:**
```javascript
<%*
let clientName = await tp.system.prompt("Client Name?");
let projectScope = await tp.system.prompt("Project Scope?");
%>
# <% clientName %> - Project Charter
**Scope:** <% projectScope %>
```

**Using `tp.system.suggester` for dropdown menus:**
This is essential for maintaining consistent metadata (like status tags) without typos.

```javascript
<%*
const statuses = ["Backlog", "In Progress", "Review", "Completed"];
const selectedStatus = await tp.system.suggester(statuses, statuses);
%>
---
status: <% selectedStatus %>
---
```
When this template runs, a command-palette-style window will appear, forcing you to choose one of the predefined statuses.

## Execution Commands: The Power of <% %>

Execution commands are where Obsidian transforms into an IDE. Because you are writing standard Javascript, you can utilize conditional logic, loops, and asynchronous operations.

### Conditional Logic in Templates

You may want a single daily note template that behaves differently on weekends versus weekdays. Instead of maintaining two separate templates, you can use Javascript `if/else` statements.

```javascript
<%* 
const dayOfWeek = tp.date.now("dddd"); 
let focusText = "";

if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
    focusText = "Weekend! Time to disconnect and recharge.";
} else {
    focusText = "Workday. Check your task manager and prioritize top 3 items.";
}
%>
### Daily Focus
<% focusText %>
```

### Moving Files Automatically on Creation

One of the most frustrating aspects of PKM is folder hygiene. If you create a note via a quick-add shortcut, it often lands in the root directory. Templater can automatically move the file to the correct directory based on its title or properties the moment it is created.

Use the `tp.file.move` function within an execution block. 

```javascript
<%*
// Prompt for the project name
let projectName = await tp.system.prompt("Enter Project Name");

// Rename the file to include the project name
await tp.file.rename(projectName + " - Planning");

// Move the file to the active projects directory
await tp.file.move("Projects/Active/" + projectName + " - Planning");
%>
```

When you trigger this template on a new, untitled note in your vault root, it will prompt you for a name, rename the file, and instantly teleport it into your `Projects/Active` folder.

## Building a Complex Daily Note Template

Let's combine these concepts into a power-user daily note template. This template will:
1. Dynamically generate links to yesterday and tomorrow.
2. Prompt you for a "Daily Intention".
3. Check if it's a Monday and automatically generate a "Weekly Review" section if so.
4. Move the file into a year/month folder structure automatically, creating the folders if they don't exist.

```javascript
<%*
// 1. Setup Variables and Folder Structure
const year = tp.date.now("YYYY");
const month = tp.date.now("MM-MMMM");
const targetFolder = `Journal/${year}/${month}`;

// Move file to the correct year/month folder
await tp.file.move(`${targetFolder}/${tp.file.title}`);

// 2. User Input
const intention = await tp.system.prompt("What is your main intention for today?");

// 3. Conditional Weekly Review
const dayOfWeek = tp.date.now("dddd");
let weeklyReviewSection = "";
if (dayOfWeek === "Monday") {
    weeklyReviewSection = `
## 🔄 Weekly Kickoff
- [ ] Review last week's completed tasks
- [ ] Schedule deep work blocks
- [ ] Process inbox to zero
`;
}
%>
---
date: <% tp.date.now("YYYY-MM-DD") %>
type: daily
intention: "<% intention %>"
---

# <% tp.file.title %>

<< [[<% tp.date.now("YYYY-MM-DD", -1) %>|Yesterday]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>|Tomorrow]] >>

## 🎯 Daily Intention
> <% intention %>

<% weeklyReviewSection %>

## 📝 Notes & Observations
- 

## ✅ Tasks
- [ ] 
```

This single template replaces manual folder navigation, manual metadata entry, and multiple separate templates for different days of the week.

## Integrating External APIs via Templater User Scripts

For the absolute power user, Templater allows you to write your own custom Javascript functions in external `.js` files and call them within your templates. This is how you connect Obsidian to the outside world.

1. In your configured `Scripts` folder, create a file named `weather.js`.
2. Write a Node.js-compatible script to fetch data:

```javascript
async function getWeather(city) {
    try {
        const response = await fetch(`https://wttr.in/${city}?format=%C+%t`);
        const data = await response.text();
        return data.trim();
    } catch (error) {
        return "Weather unavailable";
    }
}
module.exports = getWeather;
```

3. In your Obsidian template, call this custom script using the `tp.user` module:

```markdown
### Morning Status
**Weather:** <% await tp.user.weather("London") %>
```

When the template runs, Templater executes the external script, reaches out to the API, and injects the live weather data directly into your markdown file. You can use this same methodology to pull calendar events from Google Calendar APIs, fetch latest read articles from Readwise, or sync tasks from Todoist.

## Conclusion

The native capabilities of Obsidian are highly capable, but mastering the Templater plugin bridges the gap between a passive text repository and an active operating system for your thoughts. By utilizing execution commands (`<%* %>`), conditional logic, system prompts, and custom user scripts, you can automate away the friction of file management and metadata formatting.

Start by implementing folder templates for your most common note types, then gradually introduce `tp.system.suggester` to standardize your tags. As your familiarity with Javascript grows, you will find that almost any workflow bottleneck in Obsidian can be solved with a well-crafted Templater script.

## Frequently Asked Questions

### Why is my Templater script showing up as raw code instead of executing?
This usually happens because you haven't enabled "Trigger Templater on new file creation" in the settings, or you are using the core Templates hotkey instead of the Templater hotkey. Ensure you are using `Templater: Open Insert Template modal` to trigger the execution.

### Can Templater modify existing text in a note?
Templater is primarily designed for insertion at the cursor location or upon file creation. While you can use the `tp.file.content` module to read the current file, modifying existing text programmatically is better suited for plugins like MetaEdit, Linter, or writing custom Obsidian scripts.

### What is the difference between `<% %>` and `<%* %>`?
The standard `<% %>` tag is for interpolation—it evaluates the code and prints the output into the note (like inserting a date). The `<%* %>` tag is for execution—it runs the Javascript logic in the background (like moving a file or defining variables) but prints nothing to the screen unless explicitly told to via `tR += "string"`.

### Does Templater work on Obsidian Mobile?
Yes, Templater works on both iOS and Android. However, complex scripts that rely on specific Node.js modules or heavy file system operations might behave differently or execute slower due to the mobile operating system's sandbox restrictions. Stick to standard `tp` modules for maximum mobile compatibility.

### How do I debug a failing Templater script?
If a script fails, press `Ctrl + Shift + I` (or `Cmd + Option + I` on Mac) to open the Obsidian Developer Console. Templater will output detailed error messages there, pointing you to the exact line in your script or template that caused the Javascript execution to break.

---

## Related Reading

- [Obsidian Plugins for Academic Research: 5 Best Tools](/posts/top-5-obsidian-plugins-for-academic-research/)

- [Two Ways to Browse Obsidian Themes: In-App vs. Web](/posts/obsidian-theme-store-browser/)

- [Best Obsidian Tasks Plugin Setup 2026: Complete Guide](/posts/best-obsidian-tasks-plugin-setup-2026/)
- [Obsidian Calendar Plugin Complete Guide: Time-Based Notes](/posts/obsidian-calendar-plugin-for-time-based-notes/)
