"use client";

import { ArrowRight, Calendar, Tag } from "lucide-react";

interface PostCardProps {
  title: string;
  description: string;
  category: string;
  slug: string;
  date?: string;
}

export default function PostCard({ title, description, category, slug, date }: PostCardProps) {
  return (
    <a
      href={`/blog/${slug}`}
      className="group block p-6 premium-card card-hover h-full"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[10px] text-blue-400 font-bold bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20 uppercase tracking-widest">
          {category}
        </span>
        {date && (
          <span className="text-[10px] text-neutral-500 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
        )}
      </div>

      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors line-clamp-2">
        {title}
      </h3>

      <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-2">
        {description}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <span className="text-xs text-neutral-500 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
          Devamını oku <ArrowRight className="w-3 h-3" />
        </span>
        <div className="w-8 h-8 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-500 group-hover:text-white group-hover:bg-blue-600/20 group-hover:border-blue-500/20 transition-all">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </a>
  );
}
