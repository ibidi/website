import {
  ProfileCard,
  ProjectCard,
  ToolCard,
  PostCard,
  ContactSection,
  ExperienceList,
  LanguageIcon,
  LastFmSection,
  Silk,
} from "@/components";
import { ArrowUpRight, Sparkles, Link2, Briefcase, GraduationCap } from "lucide-react";

// Format functions
function formatCount(count: number): string {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
}

// API'den veri çekme fonksiyonları
async function getBlogPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/blog`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

async function getGitHubRepos() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/github`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

async function getNPMPackages() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/npm`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

const quickLinks = [
  {
    icon: Sparkles,
    title: "Tüm BBL Esports oyunları tek bir sitede.",
    href: "https://bblife.tr",
  },
  {
    icon: Link2,
    title: "LinkedIn'de Paylaştığım Teknik Yazılar ve Haberler",
    href: "https://linkedin.com/in/ibidi",
  },
  {
    icon: Link2,
    title: "En İyi AI Tool Manus",
    href: "https://manus.im/invitation/ZCONB4PLFU6JN",
  },
];

const experiences = [
  {
    _id: "1",
    company: "Uğur Döküm",
    role: "IT Specialist",
    period: "2025-Present",
    logo: "/ugurdokum.jpeg",
    present: true,
  },
  {
    _id: "2",
    company: "EduDekor",
    role: "Full Stack Developer",
    period: "2022-Present",
    logo: "/edudekor.jpeg",
    present: true,
  },
  {
    _id: "3",
    company: "Hayati Kodla",
    role: "Full Stack Developer / Operation Manager",
    period: "2024-Present",
    logo: "/hayatikodla.png",
    present: true,
  },
  {
    _id: "4",
    company: "Demirayak Yazılım",
    role: "Full Stack Developer / Co-Founder",
    period: "2019-2025",
    logo: "/dy.png",
  },
  {
    _id: "5",
    company: "ASEDE",
    role: "Full Stack Developer",
    period: "2025-2025ana",
    logo: "/asede.png",
  },
  {
    _id: "6",
    company: "Oguzkaan Koleji",
    role: "Information Technology Teacher / IT Specialist",
    period: "2022-2024",
    logo: "/oguzkaan-koleji.png",
  },
];

const education = [
  {
    _id: "1",
    school: "Istanbul Gelisim University",
    degree: "Computer Programming",
    period: "2019-2021",
    logo: "/gelisim.png",
  },
  {
    _id: "2",
    school: "Anadolu University",
    degree: "Web Design and Development",
    period: "2023-2025",
    logo: "/anadolu.png",
  },
  {
    _id: "3",
    school: "Istanbul University",
    degree: "Medical Documentation and Secretarial Services",
    period: "2022-2024",
    logo: "/istanbul-university.png",
  },
];

const npmPackages = [
  {
    _id: "1",
    name: "borsa-api",
    description: "Turkish Stock Market (BIST) API wrapper with CLI support - Delayed data for educational use only",
    downloads: 24,
    version: "1.2.0",
  },
  {
    _id: "2",
    name: "schengen-randevu-checker",
    description: "Modern TypeScript library for checking Schengen visa appointment availability across 18+ countries",
    downloads: 10,
    version: "2.2.2",
  },
  {
    _id: "3",
    name: "quick-next",
    description: "Quick and customizable Next.js project scaffolding CLI tool with Turkish support",
    downloads: 4,
    version: "1.1.0",
  },
  {
    _id: "4",
    name: "nova-native-ui",
    description: "A modern, customizable, and accessible React Native UI component library",
    downloads: 0,
    version: "0.2.0",
  },
];

const githubProjects = [
  {
    _id: "1",
    name: "social-media-downloader",
    description: "X, YouTube ve Instagram'dan medya indirme eklentisi",
    stars: 1,
    forks: 1,
    language: "JavaScript",
  },
  {
    _id: "2",
    name: "borsa-api",
    description: "Türk Borsası (BIST) için API wrapper ve CLI aracı",
    stars: 10,
    forks: 1,
    language: "TypeScript",
  },
  {
    _id: "3",
    name: "schengen-visa-appointment-bot",
    description: "Schengen vize randevu sayfalarını otomatik olarak kontrol edip uygun slot açıldığında anında bildirim veren bot",
    stars: 28,
    forks: 5,
    language: "TypeScript",
  },
  {
    _id: "4",
    name: "instagram-manychat",
    description: "Instagram yorumlarını otomatik yanıtlayan ve DM gönderen Python botu",
    stars: 7,
    forks: 1,
    language: "Python",
  },
];

const defaultServices = [
  {
    _id: "1",
    title: "Vibecoding Nasıl Yapılır?",
    description: "\"Vibecoding tam olarak ne demek?\"",
    duration: "30m",
    price: 99,
    link: "#",
  },
  {
    _id: "2",
    title: "Benimle Birlikte Vibecode",
    description: "\"Projeni birlikte geliştirelim\"",
    duration: "120m",
    price: 199,
    link: "#",
  },
];

export default async function Home() {
  // Fetch dynamic data from our API routes
  const [githubRepos, npmPackagesData, blogPosts] = await Promise.all([
    getGitHubRepos(),
    getNPMPackages(),
    getBlogPosts(),
  ]);

  // GitHub repos: dynamic or fallback
  const dynamicProjects = Array.isArray(githubRepos) && githubRepos.length > 0 ? githubRepos : [];
  const allProjects = dynamicProjects.length > 0
    ? dynamicProjects.sort((a: any, b: any) => b.stars - a.stars)
    : githubProjects;

  // Projects to display (first 4)
  const visibleProjects = allProjects.slice(0, 4);
  const hasMoreProjects = allProjects.length > 4;

  // NPM packages: dynamic or fallback
  const dynamicPackages = Array.isArray(npmPackagesData) && npmPackagesData.length > 0 ? npmPackagesData : [];
  const packages = dynamicPackages.length > 0 ? dynamicPackages : npmPackages;

  return (
    <main className="min-h-screen bg-[#050505] relative">
      {/* Silk Background */}
      <div className="fixed inset-0 z-0" style={{ opacity: 0.6 }}>
        <Silk
          speed={1}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Mobil: ProfileCard üstte, masaüstü: solda */}
          <div className="lg:col-span-4 order-1 lg:order-1">
            <ProfileCard
              name="İhsan Baki Doğan"
              title="Full Stack Web Developer"
              bio="Full Stack Web Developer - in ❤️ with Node.js, TypeScript, React.js and Vue.js - TR"
            />
          </div>

          <div className="lg:col-span-8 space-y-16 order-2 lg:order-2">
            {/* Quick Links */}
            <section>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-center gap-3 p-4 premium-card card-hover"
                  >
                    <link.icon className="w-5 h-5 text-neutral-400" />
                    <span className="flex-1 text-white text-sm font-medium">
                      {link.title}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <ExperienceList experiences={experiences} />

                <div>
                  <div className="flex items-center justify-between mb-6 h-8">
                    <h2 className="section-title mb-0 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      Education
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {education.map((edu) => (
                      <div
                        key={edu._id}
                        className="flex items-start gap-4 p-4 premium-card"
                      >
                        <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center overflow-hidden shrink-0">
                          {edu.logo.startsWith("/") ? (
                            <img src={edu.logo} alt={edu.school} className="w-full h-full object-cover" />
                          ) : (
                            <span className="text-white font-bold text-sm">{edu.logo}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-medium text-sm sm:text-base leading-tight">{edu.school}</h3>
                          <p className="text-neutral-400 text-sm mt-1 leading-snug">{edu.degree}</p>
                          <p className="text-neutral-500 text-xs mt-1.5">{edu.period}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* NPM Packages */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="section-title mb-0">NPM Packages</h2>
                <a
                  href="https://www.npmjs.com/~ihsanbakidogan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#262626]"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.335v5.331h-2.67v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
                  </svg>
                  NPM Profile
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packages.map((pkg: any) => (
                  <a
                    key={pkg._id || pkg.name}
                    href={pkg.links?.npm || `https://www.npmjs.com/package/${pkg.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-5 premium-card card-hover"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center">
                        <span className="text-red-400 text-xs font-bold">N</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-neutral-200 transition-colors">
                        {pkg.name}
                      </h3>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {pkg.description}
                    </p>
                    <div className="flex items-center gap-4 text-neutral-500 text-xs">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {formatCount(pkg.downloads)}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        {pkg.version}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* Featured Projects */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="section-title mb-0">Featured Projects</h2>
                <a
                  href="https://github.com/ibidi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#262626]"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub Profile
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {visibleProjects.map((project: any) => (
                  <a
                    key={project._id || project.id}
                    href={project.html_url || `https://github.com/ibidi/${project.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-5 premium-card card-hover"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <LanguageIcon language={project.language} />
                      <h3 className="text-base font-semibold text-white group-hover:text-neutral-200 transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-neutral-500 text-xs">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          {formatCount(project.stars)}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                          </svg>
                          {formatCount(project.forks)}
                        </span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${project.language === "TypeScript"
                        ? "bg-blue-500/20 text-blue-400"
                        : project.language === "JavaScript"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : project.language === "Python"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-neutral-500/20 text-neutral-400"
                        }`}>
                        {project.language}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              {hasMoreProjects && (
                <div className="mt-6 text-center">
                  <a
                    href="https://github.com/ibidi?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/[0.03] border border-[#262626] text-sm text-neutral-400 hover:text-white hover:border-neutral-600 transition-all"
                  >
                    Show All ({allProjects.length} repos)
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </section>



            {/* Last.fm - Only on Mobile */}
            <div className="lg:hidden">
              <LastFmSection />
            </div>

            {/* Blog Posts */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="section-title mb-0">Son Yazılar</h2>
                <a
                  href="/blog"
                  className="text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1 px-4 py-1.5 rounded-full border border-white/5 bg-white/5"
                >
                  Tüm Yazıları Gör
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogPosts.slice(0, 4).map((post: any) => (
                  <PostCard
                    key={post.slug}
                    title={post.title}
                    description={post.description}
                    category={post.category}
                    slug={post.slug}
                    date={post.date}
                  />
                ))}
                {blogPosts.length === 0 && (
                  <div className="col-span-full p-8 premium-card text-center text-neutral-500 italic">
                    Henüz yazı bulunamadı.
                  </div>
                )}
              </div>
            </section>

            {/* Contact */}
            <section>
              <ContactSection />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
