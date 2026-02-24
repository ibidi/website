"use client";

import { Play, Github, Star, GitFork, Music } from "lucide-react";
import { LanguageIcon } from "./index";

interface ProjectCardProps {
  name?: string;
  title?: string; // Backward compatibility
  description: string;
  language?: string;
  stars?: number;
  forks?: number;
  link?: string;
  githubUrl?: string;
  year?: number; // Backward compatibility
  variant?: "default" | "compact";
}

export default function ProjectCard({
  name,
  title,
  description,
  language = "Project",
  stars = 0,
  forks = 0,
  link = "#",
  githubUrl,
  year,
  variant = "default",
}: ProjectCardProps) {
  const displayTitle = name || title || "Untitled Project";
  const isCompact = variant === "compact";

  return (
    <div className={`group relative jukebox-card premium-card p-0 flex flex-col ${isCompact ? "md:flex-col" : "md:flex-row"} h-full overflow-hidden border-white/5 hover:border-accent/30 transition-all duration-500`}>
      {/* Track Info */}
      <div className={`flex-1 p-5 z-10 bg-gradient-to-r from-[#111] via-[#111]/90 to-transparent ${isCompact ? "min-h-[160px]" : ""}`}>
        <div className="flex items-center gap-2 mb-3">
          <Music className={`w-3.5 h-3.5 text-accent ${!isCompact ? "animate-pulse" : ""}`} />
          <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">
            {year ? `Release ${year}` : "Now Playing"}
          </span>
        </div>

        <h3 className={`${isCompact ? "text-lg" : "text-xl"} font-bold text-white mb-1 group-hover:text-accent transition-colors line-clamp-1`}>
          {displayTitle}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <LanguageIcon language={language} />
          <span className="text-xs text-neutral-400 font-medium">{language}</span>
        </div>

        <p className="text-neutral-500 text-xs leading-relaxed mb-5 line-clamp-2 italic">
          "{description}"
        </p>

        {/* Player Controls / Stats */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-black hover:scale-110 transition-transform shadow-[0_0_10px_rgba(34,197,94,0.3)]"
            title="Open Demo/Link"
          >
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </a>

          <a
            href={githubUrl || link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
            title="View Code"
          >
            <Github className="w-4 h-4" />
          </a>

          {!isCompact && (stars > 0 || forks > 0) && (
            <div className="flex items-center gap-3 ml-2 text-neutral-500 text-[10px] font-mono">
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3" />
                {stars}
              </span>
              <span className="flex items-center gap-1">
                <GitFork className="w-3 h-3" />
                {forks}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Vinyl Record (Desktop Only, and only if NOT compact or on hover for compact) */}
      {!isCompact && (
        <div className="hidden md:flex absolute right-[-40px] top-1/2 -translate-y-1/2 items-center justify-center w-48 h-48 group-hover:right-[-10px] transition-all duration-700 ease-in-out opacity-20 group-hover:opacity-100">
          <div className="vinyl-record w-full h-full rounded-full border-4 border-black shadow-2xl animate-spin-slow pause-animation group-hover:running flex items-center justify-center">
            <div className="w-1/3 h-1/3 rounded-full bg-[#050505] border-2 border-white/10 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-accent/20 flex items-center justify-center">
                <Music className="w-6 h-6 text-accent" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile/Compact Decor */}
      {(isCompact) && (
        <div className="absolute right-3 top-3 opacity-5">
          <Music className="w-8 h-8 text-white" />
        </div>
      )}
    </div>
  );
}
