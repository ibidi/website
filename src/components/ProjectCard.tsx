"use client";

import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  year: number;
  link?: string;
}

export default function ProjectCard({ title, description, year, link }: ProjectCardProps) {
  return (
    <a
      href={link || "#"}
      className="group block p-5 rounded-xl bg-[#171717] border border-[#262626] card-hover"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-neutral-200 transition-colors">
          {title}
        </h3>
        <span className="text-sm text-neutral-500">{year}</span>
      </div>
      <p className="text-neutral-400 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex items-center text-neutral-500 group-hover:text-white transition-colors">
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </a>
  );
}