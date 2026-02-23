import { Silk, ProfileCard, PostCard } from "@/components";
import { ArrowLeft, BookOpen, Search, Sparkles } from "lucide-react";
import Link from 'next/link';
import { getAllPosts } from "@/lib/blog";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blog | İhsan Baki Doğan",
    description: "Yazılım, teknoloji ve kişisel deneyimlerim üzerine yazdığım güncel blog yazıları.",
};

const sidebarProjects = [
    {
        title: "Proje 1",
        description: "Blog tarafinda da gostermek istedigin proje kisa aciklamasi.",
        year: 2026,
        link: "https://github.com/ibidi",
    },
    {
        title: "Proje 2",
        description: "Sol alanda profil altinda gorunecek ikinci proje karti.",
        year: 2025,
        link: "https://github.com/ibidi",
    },
];

export default async function BlogListPage() {
    const posts = await getAllPosts();

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
                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        <ProfileCard
                            name="İhsan Baki Doğan"
                            title="Full Stack Web Developer"
                            bio="Full Stack Web Developer - in ❤️ with Node.js, TypeScript, React.js and Vue.js - TR"
                            showLastFm={false}
                            sidebarProjects={sidebarProjects}
                        />

                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                            <Link
                                href="/"
                                className="premium-card flex h-full min-h-[92px] items-center gap-2 px-4 sm:px-5 py-3 text-neutral-400 hover:text-white hover:border-white/15 transition-all uppercase text-[11px] font-bold tracking-widest whitespace-nowrap"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Anasayfaya Dön
                            </Link>
    
                            {/* Newsletter or Search Mockup */}
                            <div className="premium-card h-full min-h-[92px] p-4 sm:p-5 space-y-3">
                                <h3 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                    <Search className="w-3.5 h-3.5 text-blue-400" />
                                    Yazılarda Ara
                                </h3>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Hangi konuyu merak ediyorsun?"
                                        className="w-full bg-neutral-900 border border-white/5 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500/50 transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <header className="space-y-4">
                            <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-[0.2em]">
                                <Sparkles className="w-4 h-4" />
                                Personal Archive
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                Blog Yazıları
                            </h1>
                            <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
                                Teknoloji, yazılım mimarisi ve kişisel deneyimlerim üzerine yazdığım tüm içerikler burada.
                                Sürekli güncellenen bir bilgi kütüphanesi.
                            </p>
                        </header>

                        <div className="w-full h-px bg-gradient-to-r from-blue-500/50 via-white/5 to-transparent" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {posts.map((post: any) => (
                                <PostCard
                                    key={post.slug}
                                    title={post.title}
                                    description={post.description}
                                    category={post.category}
                                    slug={post.slug}
                                    date={post.date}
                                />
                            ))}

                            {posts.length === 0 && (
                                <div className="col-span-full py-20 text-center space-y-4 premium-card">
                                    <BookOpen className="w-12 h-12 text-neutral-700 mx-auto" />
                                    <p className="text-neutral-500 italic">Henüz bir yazı paylaşılmamış.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
