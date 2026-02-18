"use client";

import { ArrowUpRight } from "lucide-react";

interface ToolCardProps {
  name: string;
  description: string;
  icon?: string;
  link: string;
}

export default function ToolCard({ name, description, icon, link }: ToolCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 p-4 rounded-xl bg-[#171717] border border-[#262626] card-hover"
    >
      <div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
        {icon ? (
          <img src={icon} alt={name} className="w-8 h-8 rounded" />
        ) : (
          <div className="w-8 h-8 rounded bg-gradient-to-br from-neutral-700 to-neutral-600" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-base font-medium text-white group-hover:text-neutral-200 transition-colors">
            {name}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
        </div>
        <p className="text-neutral-400 text-sm truncate">{description}</p>
      </div>
    </a>
  );
}