import { allPosts } from "content-collections";
import { DATA } from "@/data/resume";

export async function GET() {
  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const items = sortedPosts
    .map((post) => {
      const slug = post._meta.path.replace(/\.mdx$/, "");
      const url = `${DATA.url}/blog/${slug}`;
      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.summary}]]></description>
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${DATA.name} | Blog]]></title>
    <link>${DATA.url}/blog</link>
    <description><![CDATA[${DATA.description}]]></description>
    <language>tr</language>
    <atom:link href="${DATA.url}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
