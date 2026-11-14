#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const CONTENT_DIR = path.resolve(process.cwd(), "content");
const MAX_POSTS_PER_RUN = Number(process.env.MAX_POSTS_PER_RUN || "1");

const RSS_FEEDS = [
  {
    name: "TechCrunch AI",
    url: "https://techcrunch.com/category/artificial-intelligence/feed/",
  },
  {
    name: "Hugging Face Blog",
    url: "https://huggingface.co/blog/feed.xml",
  },
  {
    name: "Hacker News AI",
    url: "https://hnrss.org/newest?q=AI+OR+LLM+OR+OpenAI+OR+Claude+OR+Gemini&points=120",
  },
  {
    name: "OpenAI News",
    url: "https://openai.com/news/rss.xml",
  },
];

function decodeHtml(str = "") {
  return str
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseRssItems(xml, sourceName) {
  const items = [];
  const itemMatches = xml.matchAll(/<(?:item|entry)\b[^>]*>([\s\S]*?)<\/(?:item|entry)>/gi);
  for (const match of itemMatches) {
    const block = match[1];
    const title = decodeHtml(block.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "");
    const linkAtom = block.match(/<link[^>]*href=["']([^"']+)["'][^>]*\/?>/i)?.[1];
    const linkRss = block.match(/<link[^>]*>([\s\S]*?)<\/link>/i)?.[1];
    const link = decodeHtml(linkAtom || linkRss || "");
    const description = decodeHtml(
      block.match(/<(?:description|summary|content:encoded)[^>]*>([\s\S]*?)<\/(?:description|summary|content:encoded)>/i)?.[1] || ""
    );
    const pubDate = decodeHtml(
      block.match(/<(?:pubDate|published|updated)[^>]*>([\s\S]*?)<\/(?:pubDate|published|updated)>/i)?.[1] || ""
    );

    if (title && link) {
      items.push({
        sourceName,
        title,
        link,
        description: description.slice(0, 1500),
        pubDate,
      });
    }
  }
  return items;
}

function getExistingSourcesAndSlugs() {
  if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  const slugs = new Set(files.map((f) => f.replace(/\.mdx$/, "")));
  const sourceUrls = new Set();

  for (const file of files) {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const match = raw.match(/^sourceUrl:\s*["']?([^"'\n]+)["']?/m);
    if (match?.[1]) sourceUrls.add(match[1].trim());
  }
  return { slugs, sourceUrls };
}

function slugify(text) {
  const trMap = {
    ç: "c", Ç: "c", ğ: "g", Ğ: "g", ı: "i", İ: "i",
    ö: "o", Ö: "o", ş: "s", Ş: "s", ü: "u", Ü: "u",
  };
  return text
    .split("")
    .map((c) => trMap[c] || c)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

function buildPrompt(article) {
  return `Sen Türkiye'nin önde gelen Full Stack & AI yazılım geliştiricilerinden İhsan Baki Doğan'ın (ibidi.dev) teknik blogu için yazan kıdemli bir teknoloji editörü ve SEO uzmanısın.

Aşağıdaki güncel yapay zeka haberini / makalesini incele ve bunu Türkçe olarak, Google SEO kurallarına tam uyumlu, organik trafik çekecek, akıcı ve geliştirici odaklı bir blog yazısına dönüştür.

KAYNAK HABER:
- Kaynak: ${article.sourceName}
- Başlık: ${article.title}
- URL: ${article.link}
- Tarih: ${article.pubDate}
- Özet/İçerik: ${article.description}

KURALLAR:
1. Birebir çeviri yapma; haberi Türkçe teknik blog okuyucusu için anlaşılır, derinlikli ve özgün şekilde yeniden yaz.
2. Başlık (title): 50-65 karakter arası, merak uyandıran ve anahtar kelime içeren SEO uyumlu Türkçe başlık.
3. Özet (summary): 135-160 karakter arası, meta description için ideal Türkçe özet.
4. Etiketler (tags): 4-6 adet arama hacmi yüksek Türkçe/İngilizce anahtar kelime dizisi.
5. İçerik yapısı (MDX uyumlu Markdown):
   - Kısa, güçlü bir giriş paragrafı (anahtar kelime ilk paragrafta geçsin).
   - "## Neler Değişti?" veya konuyla ilgili açıklayıcı H2 başlıklar.
   - "## Yazılım Geliştiriciler İçin Ne Anlama Geliyor?" bölümü (pratik çıkarımlar).
   - "## Sıkça Sorulan Sorular (SSS)" bölümü (2-3 kısa soru-cevap, Google Featured Snippet için).
   - Sonunda kısa bir kaynak atfı: \`Kaynak: [${article.sourceName}](${article.link})\`.
6. MDX güvenliği: Metin içinde HTML tagları (<br>, <div> vb.) veya süslü parantez ({...}) KULLANMA (kod blokları hariç).

Çıktıyı SADECE aşağıdaki JSON formatında ver (başka hiçbir açıklama veya markdown fence ekleme):
{
  "title": "...",
  "slug": "seo-uyumlu-turkce-slug",
  "summary": "...",
  "category": "Yapay Zeka",
  "tags": ["yapay zeka", "..."],
  "content": "..."
}`;
}

async function generateWithGemini(prompt, apiKey) {
  const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
        responseMimeType: "application/json",
      },
    }),
  });
  if (!res.ok) {
    throw new Error(`Gemini API error ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Empty response from Gemini");
  return JSON.parse(text);
}

async function generateWithOpenAI(prompt, apiKey) {
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.7,
      response_format: { type: "json_object" },
      messages: [{ role: "user", content: prompt }],
    }),
  });
  if (!res.ok) {
    throw new Error(`OpenAI API error ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  const text = data.choices?.[0]?.message?.content;
  if (!text) throw new Error("Empty response from OpenAI");
  return JSON.parse(text);
}

function sanitizeMdxBody(body) {
  // Escape stray '<' outside fenced code blocks to avoid MDX JSX parse errors
  const parts = body.split(/(```[\s\S]*?```)/g);
  return parts
    .map((part, idx) => {
      if (idx % 2 === 1) return part;
      return part.replace(/<(?!\/?(?:a|code|strong|em)\b)/g, "&lt;");
    })
    .join("");
}

function toMdxFile(generated, article) {
  const today = new Date().toISOString().slice(0, 10);
  const safeTitle = generated.title.replace(/"/g, '\\"');
  const safeSummary = generated.summary.replace(/"/g, '\\"');
  const tagsYaml = (generated.tags || ["yapay zeka", "ai"])
    .map((t) => `  - "${String(t).replace(/"/g, '\\"')}"`)
    .join("\n");

  return `---
title: "${safeTitle}"
publishedAt: "${today}"
author: "İhsan Baki Doğan"
summary: "${safeSummary}"
category: "${generated.category || "Yapay Zeka"}"
tags:
${tagsYaml}
sourceUrl: "${article.link}"
---

${sanitizeMdxBody(generated.content.trim())}
`;
}

async function main() {
  const geminiKey = process.env.GEMINI_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  if (!geminiKey && !openaiKey) {
    console.error("Missing GEMINI_API_KEY or OPENAI_API_KEY environment variable.");
    process.exit(1);
  }

  const { slugs, sourceUrls } = getExistingSourcesAndSlugs();
  const allItems = [];

  for (const feed of RSS_FEEDS) {
    try {
      const res = await fetch(feed.url, {
        headers: { "User-Agent": "ibidi.dev-ai-news-bot/1.0" },
      });
      if (!res.ok) {
        console.warn(`Feed failed (${feed.name}): ${res.status}`);
        continue;
      }
      const xml = await res.text();
      allItems.push(...parseRssItems(xml, feed.name));
    } catch (err) {
      console.warn(`Feed error (${feed.name}):`, err.message);
    }
  }

  const candidates = allItems.filter((item) => !sourceUrls.has(item.link));
  if (candidates.length === 0) {
    console.log("No new AI news articles found.");
    return;
  }

  let created = 0;
  for (const article of candidates.slice(0, MAX_POSTS_PER_RUN)) {
    console.log(`Generating Turkish SEO post for: ${article.title} (${article.sourceName})`);
    const prompt = buildPrompt(article);
    const generated = geminiKey
      ? await generateWithGemini(prompt, geminiKey)
      : await generateWithOpenAI(prompt, openaiKey);

    let slug = slugify(generated.slug || generated.title);
    if (!slug) slug = `ai-haber-${Date.now()}`;
    if (slugs.has(slug)) slug = `${slug}-${Date.now().toString().slice(-4)}`;

    const mdxContent = toMdxFile(generated, article);
    const outPath = path.join(CONTENT_DIR, `${slug}.mdx`);
    fs.writeFileSync(outPath, mdxContent, "utf8");
    slugs.add(slug);
    sourceUrls.add(article.link);
    created++;
    console.log(`Created: content/${slug}.mdx`);
  }

  console.log(`Done. Generated ${created} post(s).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
