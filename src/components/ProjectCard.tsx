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
      className="group block p-6 rounded-xl premium-surface card-hover"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-neutral-200 transition-colors">
          {title}
        </h3>
        <span className="text-base text-neutral-500">{year}</span>
      </div>
      <p className="text-neutral-400 text-base leading-relaxed mb-5">{description}</p>
      <div className="flex items-center text-neutral-500 group-hover:text-white transition-colors">
        <ArrowUpRight className="w-5 h-5" />
      </div>
    </a>
  );
}
