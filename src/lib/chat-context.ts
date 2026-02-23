import { getAllPosts } from "@/lib/blog";

type PageContext = {
  pathname?: string;
  title?: string;
};

const SITE_OWNER_CONTEXT = [
  "Site sahibi: Ihsan Baki Dogan.",
  "Rol: Full Stack Web Developer.",
  "Odak alanlari: Node.js, TypeScript, React.js, Vue.js, full-stack web gelistirme.",
  "Site tipi: Kisisel portfolio + blog sitesi.",
  "Teknoloji stack: Next.js App Router, TypeScript, Tailwind CSS, Markdown tabanli blog.",
].join("\n");

const PROJECT_FOCUS_CONTEXT = [
  "Projelerde one cikan temalar:",
  "- API wrapper ve CLI araclari",
  "- Otomasyon botlari",
  "- Web uygulamalari ve full-stack mimari",
  "- AI araclari ve developer tooling",
  "- Randevu / bildirim / scraper otomasyonlari",
].join("\n");

const ASSISTANT_RULES = [
  "Cevaplari Turkce ver.",
  "Kisa, net ve yardimci ol.",
  "Proje/sahip hakkinda kesin bilgin olmayan konularda uydurma bilgi verme.",
  "Eger verilen baglamda yoksa bunu acikca belirt ve kullanicidan detay iste.",
  "Sitedeki blog yazilarina referans verirken mumkunse baslik bazli yonlendir.",
].join("\n");

function normalizePageContext(input: unknown): PageContext | null {
  if (!input || typeof input !== "object") return null;

  const candidate = input as Record<string, unknown>;
  const pathname = typeof candidate.pathname === "string" ? candidate.pathname.slice(0, 120) : "";
  const title = typeof candidate.title === "string" ? candidate.title.slice(0, 180) : "";

  if (!pathname && !title) return null;

  return { pathname, title };
}

function formatBlogContext(
  posts: Array<{
    slug: string;
    title: string;
    description: string;
    date: string;
    category: string;
  }>,
): string {
  if (!posts.length) {
    return "Blog baglami: Blog yazisi verisi bulunamadi.";
  }

  const lines = posts.slice(0, 8).map((post, index) => {
    const description = post.description?.trim().slice(0, 180) || "Aciklama yok";
    return `${index + 1}. ${post.title} | tarih: ${post.date || "bilinmiyor"} | kategori: ${post.category || "Genel"} | slug: ${post.slug} | ozet: ${description}`;
  });

  return `Son blog yazilari:\n${lines.join("\n")}`;
}

function formatPageContext(pageContext: PageContext | null): string {
  if (!pageContext) return "Sayfa baglami: iletilmedi.";

  const parts: string[] = [];
  if (pageContext.pathname) parts.push(`pathname=${pageContext.pathname}`);
  if (pageContext.title) parts.push(`title=${pageContext.title}`);

  return `Kullanici su an su sayfada olabilir: ${parts.join(" | ")}`;
}

export async function buildChatSystemPrompt(rawPageContext?: unknown) {
  const pageContext = normalizePageContext(rawPageContext);
  const posts = await getAllPosts();

  return [
    "Sen İhsan Baki Doğan'ın portfolio/blog sitesi icin yardimci bir sohbet asistanisin.",
    "",
    SITE_OWNER_CONTEXT,
    "",
    PROJECT_FOCUS_CONTEXT,
    "",
    formatBlogContext(posts),
    "",
    formatPageContext(pageContext),
    "",
    "Davranis kurallari:",
    ASSISTANT_RULES,
  ].join("\n");
}

