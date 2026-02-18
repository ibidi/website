"use client";

import { Clock, CreditCard, ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  duration: string;
  price: number;
  link: string;
}

export default function ServiceCard({
  title,
  description,
  duration,
  price,
  link,
}: ServiceCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 premium-card card-hover"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-white group-hover:text-neutral-200 transition-colors">
          {title}
        </h3>
        <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
      </div>
      <p className="text-neutral-400 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-neutral-500">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{duration}</span>
        </div>
        <div className="flex items-center gap-1.5 text-neutral-500">
          <CreditCard className="w-4 h-4" />
          <span className="text-sm">${price}</span>
        </div>
      </div>
    </a>
  );
}