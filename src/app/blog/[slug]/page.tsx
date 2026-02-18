import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { notFound } from 'next/navigation';
import { Silk, ProfileCard } from "@/components";
import { ArrowLeft, Calendar, Tag, Clock, Share2 } from "lucide-react";
import Link from 'next/link';

import { getAllPosts } from '@/lib/blog';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { slug } = await params;
    const posts = await getAllPosts();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: ['İhsan Baki Doğan'],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {

    const { slug } = await params;
    const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    const htmlContent = marked(content);

    return (
        <main className="min-h-screen bg-[#050505] relative">
            {/* Silk Background */}
            <div className="fixed inset-0 z-0" style={{ opacity: 0.3 }}>
                <Silk
                    speed={0.5}
                    scale={1.2}
                    color="#7B7481"
                    noiseIntensity={1}
                    rotation={0}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-12 space-y-8">
                            <ProfileCard
                                name="İhsan Baki Doğan"
                                title="Full Stack Web Developer"
                                bio="Full Stack Web Developer - in ❤️ with Node.js, TypeScript, React.js and Vue.js - TR"
                            />
                        </div>
                    </div>
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="mb-6">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-sm"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Tüm Kaynaklar
                            </Link>
                        </div>

                        <article className="premium-card p-8 md:p-12">
                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        "@context": "https://schema.org",
                                        "@type": "BlogPosting",
                                        "headline": data.title,
                                        "description": data.description,
                                        "author": {
                                            "@type": "Person",
                                            "name": "İhsan Baki Doğan",
                                            "url": "https://ihsanbakidogan.com"
                                        },
                                        "datePublished": data.date,
                                        "image": "/og-image.png",
                                    })
                                }}
                            />
                            <header className="mb-10">

                                <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                                    {data.title}
                                </h1>
                                {data.description && (
                                    <p className="text-lg text-neutral-400 leading-relaxed font-medium">
                                        {data.description}
                                    </p>
                                )}
                            </header>

                            {/* Content body */}
                            <div
                                className="prose prose-invert prose-neutral max-w-none 
                prose-headings:text-white prose-headings:font-bold prose-headings:mb-4
                prose-p:text-neutral-400 prose-p:leading-relaxed prose-p:text-base prose-p:mb-6
                prose-strong:text-white prose-strong:font-bold
                prose-ul:text-neutral-400 prose-ul:mb-6
                prose-li:mb-2
                prose-code:text-neutral-200 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-[#0d0d0d] prose-pre:border prose-pre:border-white/5 prose-pre:rounded-xl
                prose-blockquote:border-white/20 prose-blockquote:text-neutral-500
                "
                                dangerouslySetInnerHTML={{ __html: htmlContent }}
                            />
                        </article>
                    </div>
                </div>
            </div>
        </main>
    );
}
