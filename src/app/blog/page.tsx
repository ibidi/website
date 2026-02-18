import { Silk, ProfileCard, PostCard } from "@/components";
import { ArrowLeft, BookOpen, Search, Sparkles } from "lucide-react";
import Link from 'next/link';
import { getAllPosts } from "@/lib/blog";

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
                        />

                        <Link
                            href="/"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-all uppercase text-xs font-bold tracking-widest"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Anasayfaya Dön
                        </Link>

                        {/* Newsletter or Search Mockup */}
                        <div className="premium-card p-6 space-y-4">
                            <h3 className="text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                                <Search className="w-4 h-4 text-blue-400" />
                                Yazılarda Ara
                            </h3>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Hangi konuyu merak ediyorsun?"
                                    className="w-full bg-neutral-900 border border-white/5 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500/50 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-10">
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
