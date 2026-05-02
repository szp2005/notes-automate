---
title: "Obsidian Interactive Maps: Spatial Note-Taking Guide"
author: "Alex Chen"
date: 2026-04-29
slug: how-to-create-interactive-maps-in-obsidian
description: "Provide downloadable templates for different use-cases, such as a world travel log, a fictional kingdom map, and a local project planner, allowing users."
keywords: ["Obsidian Leaflet plugin", "Obsidian map view", "geospatial notes", "visualize notes on a map", "Obsidian travel journal", "worldbuilding map Obsidian", "connect notes geographically", "Obsidian CSS for maps"]
draft: false
type: "informational"
tags: ["beyond", "backlinks", "power", "spatial"]
---

# How to Create Interactive Maps in Obsidian: The Complete Leaflet Plugin Guide

**TL;DR**
- The Obsidian Leaflet plugin turns any note into a fully interactive map using a simple code block—no GIS experience required.
- You can pull marker data directly from YAML frontmatter and automate map population using the Dataview plugin.
- This guide goes from installation to advanced use-cases with copy-paste templates for travelers, world-builders, and researchers.

---

## Table of Contents

1. [Why Go Beyond Backlinks? The Power of Spatial Note-Taking](#why-go-beyond-backlinks)
2. [Getting Started: Installing the Obsidian Leaflet Plugin](#getting-started-installing)
3. [Your First Interactive Map: A 5-Minute Tutorial](#your-first-interactive-map)
4. [Advanced Mapping: Custom Markers, Overlays, and Data](#advanced-mapping)
5. [Practical Use-Cases and Copy-Paste Templates](#practical-use-cases)
6. [Automate Your Maps with the Dataview Plugin](#automate-with-dataview)
7. [CSS Styling Guide for Maps and Markers](#css-styling-guide)
8. [Troubleshooting and FAQ](#troubleshooting-faq)
9. [Conclusion](#conclusion)

---

## Why Go Beyond Backlinks? The Power of Spatial Note-Taking {#why-go-beyond-backlinks}

Obsidian's graph view is excellent for showing *how* your notes connect conceptually. But there's a class of relationship it can't show at all: *where* things happen.

If you're a travel writer, every restaurant review and hotel note has a physical address. If you're writing a fantasy novel, your kingdoms, rivers, and battlefields occupy a map. If you're a historian, every primary source has a location. Backlinks alone can't surface those spatial patterns.

Spatial note-taking closes that gap. When you pin a note to a coordinate—real or fictional—you can immediately see clustering, proximity, and geography. A researcher mapping disease outbreaks spots a neighborhood pattern instantly. A D&D dungeon master sees that the dragon's lair sits three days' walk from the nearest city. A traveler reviews their Southeast Asia trip not as a list of notes but as a literal route.

The Obsidian Leaflet plugin makes all of that possible without leaving Obsidian, without a separate GIS application, and without touching a database.

---

## Getting Started: Installing the Obsidian Leaflet Plugin {#getting-started-installing}

**What is the Leaflet plugin?** It's a community plugin that embeds a [Leaflet.js](URL_PLACEHOLDER_1) powered map directly inside any Obsidian note. You define the map using a fenced code block. The plugin handles rendering, zooming, panning, and marker interaction.

**Installation steps:**

1. Open Obsidian and go to **Settings → Community Plugins**.
2. Toggle off **Safe Mode** if it's on (required for any community plugin).
3. Click **Browse**, then search for **Obsidian Leaflet**.
4. Click **Install**, then **Enable**.
5. Verify it's working: create a new note and paste this minimal block:

````markdown
```leaflet
id: test-map
lat: 48.8566
long: 2.3522
height: 300px
zoom: 5
```
````

You should see an interactive OpenStreetMap view centered on Paris. If you do, you're ready.

**Tip:** The `id` field is mandatory and must be unique across your entire vault. Leaflet uses it to persist marker positions and zoom state between sessions.

---

## Your First Interactive Map: A 5-Minute Tutorial {#your-first-interactive-map}

Every Leaflet map lives inside a fenced code block tagged with `leaflet`. Here's the anatomy:

````markdown
```leaflet
id: my-first-map
lat: 35.6762
long: 139.6503
height: 500px
zoom: 6
minZoom: 3
maxZoom: 18
defaultZoom: 6
unit: miles
scale: 1
marker: default, 35.6762, 139.6503, [[Tokyo Notes]]
```
````

**Breaking it down:**

| Parameter | What it does |
|---|---|
| `id` | Unique identifier (required) |
| `lat` / `long` | Center coordinates on load |
| `height` | Height of the rendered map in your note |
| `zoom` | Initial zoom level (1 = world, 18 = street) |
| `minZoom` / `maxZoom` | Restrict how far the user can zoom |
| `unit` | Distance units for the scale bar |
| `marker` | Adds a pin: `type, lat, long, [[linked note]]` |

**Adding markers:** Each `marker:` line drops a pin. The fourth argument is an Obsidian wikilink—click the pin in the map and the linked note opens. You can add as many marker lines as you need.

```
marker: default, 48.8566, 2.3522, [[Paris Research]]
marker: default, 51.5074, -0.1278, [[London Notes]]
marker: default, 52.5200, 13.4050, [[Berlin Field Work]]
```

That's your first working multi-marker map.

---

## Advanced Mapping: Custom Markers, Overlays, and Data {#advanced-mapping}

### Custom Marker Types

The plugin ships with a `default` marker type, but you can define your own in **Settings → Obsidian Leaflet → Marker Types**. Each custom type gets:
- A name
- An icon from the [Font Awesome 5 free set](URL_PLACEHOLDER_2)
- A hex color

Once defined, use the type name in your marker lines:

```
marker: restaurant, 48.8606, 2.3376, [[Le Marais Café]]
marker: museum, 48.8606, 2.3376, [[Pompidou Centre]]
```

### GeoJSON Overlays

For borders, routes, and regions, Leaflet accepts GeoJSON. Create a `.geojson` file in your vault and reference it:

```
geojson: [[regions/northern-kingdom.geojson]]
```

GeoJSON is the standard format for geographic shapes. Tools like [geojson.io](URL_PLACEHOLDER_3) let you draw polygons and export the file directly.

### Pulling Data from YAML Frontmatter

Instead of hardcoding coordinates in the map block, you can store them in the note itself. In each location note, add:

```yaml
---
location: [48.8566, 2.3522]
tags: [travel, france]
---
```

Then in your map block, reference those notes as a data source:

```leaflet
id: travel-master
lat: 20
long: 0
height: 600px
zoom: 2
markerFile: [[Paris Research]]
markerFile: [[Tokyo Notes]]
markerFile: [[Berlin Field Work]]
```

Each `markerFile` reference reads the `location` field from that note's frontmatter and places a marker automatically. The link from the marker back to the note is also set automatically.

---

## Practical Use-Cases and Copy-Paste Templates {#practical-use-cases}

### For the Traveler: World Travel Log

Store this template in a `Maps/` folder and update `markerFile` lines as you add new destination notes.

````markdown
```leaflet
id: world-travel-log
lat: 20
long: 0
height: 600px
zoom: 2
unit: kilometers
scale: 1
markerTag: travel
```
````

With `markerTag: travel`, the plugin automatically pins every note in your vault that has `tags: [travel]` *and* a `location:` field in frontmatter. Add a new trip note, tag it, set coordinates—it appears on the map instantly.

### For the World-Builder: Fictional Kingdom Map

First, create your map image (PNG or JPG). [Wonderdraft](URL_PLACEHOLDER_4) is the purpose-built tool for this—it produces print-quality fantasy maps and exports at whatever resolution you need. Once you have your image:

````markdown
```leaflet
id: kingdom-of-aldrath
image: [[maps/aldrath-continent.jpg]]
height: 700px
lat: 50
long: 50
zoom: 3
unit: leagues
scale: 0.5
marker: city, 60, 45, [[Stonehaven Capital]]
marker: dungeon, 30, 70, [[The Ashen Vault]]
marker: forest, 50, 55, [[Whispering Wood]]
```
````

For image-based maps, `lat`/`long` are percentages of the image dimensions (0–100), not real-world coordinates. Set `unit` to anything meaningful for your fiction. The [Dungeondraft](URL_PLACEHOLDER_5) companion app handles interior maps, taverns, and dungeons at the same level of quality.

### For the Researcher: Historical Events Map

````markdown
```leaflet
id: ww1-western-front
lat: 50.0
long: 3.5
height: 550px
zoom: 7
markerTag: ww1-event
geojson: [[research/western-front-line.geojson]]
```
````

Tag every battle note with `ww1-event`, add coordinates to frontmatter, and the map populates automatically. The GeoJSON overlay draws the front line as a polygon.

---

## Automate Your Maps with the Dataview Plugin {#automate-with-dataview}

[Dataview](URL_PLACEHOLDER_6) is a community plugin that lets you query your vault like a database. Combined with Leaflet's `markerTag` parameter, it creates self-updating maps.

**Setup:**

1. Install Dataview from Community Plugins.
2. In every location note, standardize your frontmatter:

```yaml
---
location: [lat, long]
tags: [research, paris]
visited: true
date: 2024-03-15
---
```

3. Use `markerTag` in your Leaflet block to filter:

```
markerTag: [research, visited]
```

This pins only notes that carry *all* listed tags. Add a new research note with both tags and coordinates—it appears on your master map on the next render without touching the map block.

**Advanced: Dataview table alongside the map**

Put a Dataview query in the same note as your map block to get a synchronized list view:

````markdown
```dataview
TABLE location, date, file.link AS "Note"
FROM #research
WHERE location != null
SORT date DESC
```
````

You now have the map above and a sortable table of every mapped location below. Clicking a row opens the note; clicking the pin does the same thing.

---

## CSS Styling Guide for Maps and Markers {#css-styling-guide}

Add these snippets to your vault's CSS snippets folder (**Settings → Appearance → CSS Snippets**).

**Make the map border rounded and add a subtle shadow:**

```css
.leaflet-container {
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  border: 1px solid var(--background-modifier-border);
}
```

**Style the marker popup window:**

```css
.leaflet-popup-content-wrapper {
  background: var(--background-primary);
  color: var(--text-normal);
  border-radius: 6px;
  font-size: 0.9em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.leaflet-popup-tip {
  background: var(--background-primary);
}
```

**Highlight custom marker types differently—example for `restaurant`:**

```css
.leaflet-marker-icon[data-marker-type="restaurant"] {
  filter: hue-rotate(120deg) saturate(1.5);
}
```

**Dark mode map tiles** (requires a tile layer that supports dark mode—Stadia Alidade Smooth Dark is a free option): In Leaflet plugin settings, replace the tile URL with:

```
https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png
```

For planning complex projects before you map them, a mind-mapping session with a tool from [Setapp](URL_PLACEHOLDER_7)—which bundles MindNode and dozens of other Mac productivity apps in one subscription—can help you figure out your node structure before committing it to coordinates.

---

## Troubleshooting and FAQ {#troubleshooting-faq}

**FAQ**

**Q1: My map is just a grey box. What's wrong?**
Check that your `id` is unique across the vault. Duplicate IDs cause the map to fail silently. Also confirm the plugin is enabled—go to Settings → Community Plugins and verify the toggle is on. If tiles aren't loading, check your internet connection; real-world maps require a tile server connection.

**Q2: How do I find the latitude and longitude for a location?**
Right-click any point on [Google Maps](URL_PLACEHOLDER_8) and the coordinates appear at the top of the context menu. Alternatively, search the location on maps.google.com and read the lat/long from the URL. For fictional maps, remember you're working in a 0–100 percentage system based on image dimensions.

**Q3: Can I use my own image as a map background?**
Yes. Drop a PNG or JPG anywhere in your vault, then reference it with `image: [[path/to/your-image.jpg]]`. Coordinates become percentages of the image's pixel dimensions, not geographic coordinates. Set `lat: 50` and `long: 50` to center on the image initially.

**Q4: Why are my `markerFile` markers not appearing?**
Confirm the referenced note has a `location:` field formatted exactly as `location: [lat, long]`—it must be an array, not a string. The brackets are required.

**Q5: Is the Leaflet plugin still maintained?**
The original repository by valentine195 has been forked and is actively maintained by the Obsidian community under [obsidian-leaflet](URL_PLACEHOLDER_9). Check the community plugins browser for the current version. As of 2024, it remains one of the most downloaded Obsidian plugins with regular updates.

---

## Conclusion {#conclusion}

Creating interactive maps in Obsidian is genuinely one of the most underused features in the entire ecosystem. The Leaflet plugin turns what is essentially a text editor into a spatial knowledge system—you can map your travel memories, build a living atlas for your fiction, or track a research project across geography, all without leaving your notes.

The path from zero to functional map takes about five minutes. The path from a basic map to a fully automated, Dataview-powered, custom-styled mapping system takes an afternoon. Neither requires programming knowledge—just an understanding of YAML and a willingness to experiment with the code block syntax.

If you're building a fictional world, invest in [Wonderdraft](URL_PLACEHOLDER_10) for your base map image—it's a one-time purchase that produces far better results than any web tool. If you want to go deeper on data visualization and make your maps genuinely analytical, a structured course on [Skillshare or Udemy](URL_PLACEHOLDER_11) covering data visualization principles will dramatically raise the ceiling of what you can build.

Start with the five-minute tutorial. Add your three most important locations. Then come back for the Dataview integration when you're ready to make it scale.

---

*Found this guide useful? Bookmark it for reference as you build out your vault, and share it with any Obsidian users who are still working in a purely text-based setup—they're missing half the picture.*

## Frequently Asked Questions

### What is the main benefit of Create Interactive Maps in Obsidian?

This guide explains how Obsidian users and note-taking power users can make a better decision about Create Interactive Maps in Obsidian. The real benefit is that it turns a vague problem into a clearer decision, workflow, or setup that Obsidian users and note-taking power users can act on immediately.

### Who is Create Interactive Maps in Obsidian best for?

Create Interactive Maps in Obsidian is best for Obsidian users and note-taking power users who want a practical Obsidian workflow improvement without adding unnecessary complexity. It is especially useful when you need repeatable results rather than another isolated tip.

### How should I get started with Create Interactive Maps in Obsidian?

Start by identifying the specific outcome you want, then apply the smallest useful version of the advice in this article. After that, review what worked and adjust the setup, tool, or process before expanding it.

### What mistakes should I avoid with Create Interactive Maps in Obsidian?

Avoid copying a complex system before you understand the problem you are solving. Keep the workflow simple, measure whether it improves your real work, and only add more tools or steps when they remove friction.

## Related Reading

- [The Power of Spaced Repetition in Your Second Brain](/posts/obsidian-anki-vs-spaced-repetition-plugin/)
- [Why Manage Projects in Obsidian? The Power of a Unified System](/posts/using-obsidian-tasks-plugin-for-project-management/)
- [Introduction: Beyond Default - Choosing Your Ideal Obsidian Interface](/posts/things-theme-vs-minimal-theme-obsidian/)
- [Why Your Theme is Your Most Important Writing Tool in Obsidian](/posts/best-obsidian-themes-for-writing-longform-content/)
