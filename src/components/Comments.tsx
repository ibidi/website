'use client';

import { DiscussionEmbed } from 'disqus-react';
import { usePathname } from 'next/navigation';

interface CommentsProps {
    title?: string;
    id?: string;
}

export default function Comments({ title, id }: CommentsProps) {
    const pathname = usePathname();

    const disqusShortname = 'mygear-1';
    const disqusConfig = {
        url: `https://ihsanbakidogan.com${pathname}`,
        identifier: id || pathname,
        title: title || 'Blog Post',
        language: 'tr'
    };

    return (
        <div className="mt-20 pt-16 border-t border-white/10">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-8 bg-blue-500 rounded-full" />
                <h3 className="text-2xl font-bold text-white tracking-tight">Topluluk Yorumları</h3>
            </div>

            <div className="premium-card p-4 md:p-8 bg-white/[0.02] rounded-3xl border border-white/5">
                <DiscussionEmbed
                    shortname={disqusShortname}
                    config={disqusConfig}
                />
            </div>

            <div className="mt-8 text-center text-neutral-500 text-xs italic">
                Yorum yaparak teknik tartışmalara katılabilir veya sorularınızı iletebilirsiniz.
                <br />
                <span className="text-neutral-600 mt-2 block">Powered by Disqus & Optimized by Suparank</span>
            </div>
        </div>
    );
}
