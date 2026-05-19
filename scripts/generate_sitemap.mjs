import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const site = readSiteUrl();
const today = new Date().toISOString().slice(0, 10);
const contentDir = join(root, "content", "posts");
const outFile = join(root, "dist", "sitemap.xml");

function readSiteUrl() {
  const config = readFileSync(join(root, "astro.config.mjs"), "utf8");
  const match = config.match(/site:\s*["']([^"']+)["']/);
  if (!match) throw new Error("Missing site URL in astro.config.mjs");
  return match[1].replace(/\/$/, "");
}

function listMarkdown(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    const st = statSync(path);
    if (st.isDirectory()) {
      out.push(...listMarkdown(path));
    } else if (name.endsWith(".md")) {
      out.push(path);
    }
  }
  return out;
}

function parseFrontmatter(text) {
  if (!text.startsWith("---\n")) return {};
  const end = text.indexOf("\n---", 4);
  if (end === -1) return {};
  const block = text.slice(4, end);
  const data = {};
  for (const line of block.split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;
    data[match[1]] = stripQuotes(match[2].trim());
  }
  return data;
}

function stripQuotes(value) {
  return value.replace(/^["']|["']$/g, "");
}

function dateOnly(value, fallbackPath) {
  const raw = String(value ?? "").trim();
  if (raw) {
    const ymd = raw.match(/\d{4}-\d{2}-\d{2}/);
    if (ymd) return ymd[0];
    const parsed = new Date(raw);
    if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  }
  return statSync(fallbackPath).mtime.toISOString().slice(0, 10);
}

function xml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function routeFor(file, fm) {
  const rel = relative(contentDir, file);
  const isZh = rel.startsWith(`zh-cn/`);
  const filename = rel.split("/").pop().replace(/\.md$/, "");
  const slug = fm.slug || filename;
  return isZh ? `/zh-cn/posts/${slug}/` : `/posts/${slug}/`;
}

const posts = listMarkdown(contentDir).map((file) => {
  const text = readFileSync(file, "utf8");
  const fm = parseFrontmatter(text);
  const route = routeFor(file, fm);
  const slug = route.split("/").filter(Boolean).pop();
  const lang = route.startsWith("/zh-cn/") ? "zh-cn" : "en";
  const lastmod = dateOnly(fm.dateModified || fm.updatedAt || fm.publishedAt || fm.pubDate || fm.date, file);
  return { route, slug, lang, lastmod };
});

const byLangSlug = new Map(posts.map((post) => [`${post.lang}:${post.slug}`, post]));
const urls = [
  { route: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
  { route: "/posts/", lastmod: today, changefreq: "daily", priority: "0.9" },
  { route: "/about/", lastmod: today, changefreq: "monthly", priority: "0.5" },
  { route: "/author/", lastmod: today, changefreq: "monthly", priority: "0.5" },
  { route: "/tags/", lastmod: today, changefreq: "weekly", priority: "0.7" },
  { route: "/affiliate-disclosure/", lastmod: today, changefreq: "yearly", priority: "0.3" },
  { route: "/editorial-policy/", lastmod: today, changefreq: "yearly", priority: "0.3" },
  { route: "/privacy/", lastmod: today, changefreq: "yearly", priority: "0.3" },
  { route: "/contact/", lastmod: today, changefreq: "yearly", priority: "0.3" },
  { route: "/zh-cn/", lastmod: today, changefreq: "weekly", priority: "0.9" },
  { route: "/zh-cn/posts/", lastmod: today, changefreq: "daily", priority: "0.8" },
  { route: "/zh-cn/privacy/", lastmod: today, changefreq: "yearly", priority: "0.3" },
  ...posts.sort((a, b) => a.route.localeCompare(b.route)).map((post) => ({
    ...post,
    changefreq: "monthly",
    priority: "0.8",
  })),
];

const body = urls.map((entry) => {
  const loc = `${site}${entry.route}`;
  const alternates = [];
  if (entry.slug && entry.lang === "en") {
    const zh = byLangSlug.get(`zh-cn:${entry.slug}`);
    if (zh) {
      alternates.push(["en", `${site}${entry.route}`]);
      alternates.push(["zh-cn", `${site}${zh.route}`]);
      alternates.push(["x-default", `${site}${entry.route}`]);
    }
  } else if (entry.slug && entry.lang === "zh-cn") {
    const en = byLangSlug.get(`en:${entry.slug}`);
    if (en) {
      alternates.push(["en", `${site}${en.route}`]);
      alternates.push(["zh-cn", `${site}${entry.route}`]);
      alternates.push(["x-default", `${site}${en.route}`]);
    }
  }
  const altXml = alternates
    .map(([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${xml(href)}"/>`)
    .join("\n");
  return [
    "  <url>",
    `    <loc>${xml(loc)}</loc>`,
    `    <lastmod>${entry.lastmod}</lastmod>`,
    `    <changefreq>${entry.changefreq}</changefreq>`,
    `    <priority>${entry.priority}</priority>`,
    altXml,
    "  </url>",
  ].filter(Boolean).join("\n");
}).join("\n");

writeFileSync(outFile, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`);
console.log(`Generated ${outFile} with ${urls.length} URLs and ${posts.length} posts`);
