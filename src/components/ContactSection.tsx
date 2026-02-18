"use client";

import { Mail, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="p-8 premium-card flex flex-col items-center text-center">
      <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
        Aklında bir proje mi var? Fikirlerini hayata geçirmek için birlikte çalışalım.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="mailto:ihsanbakidogann@gmail.com"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all active:scale-95"
        >
          E-posta Gönder
          <Mail className="w-4 h-4 ml-1" />
        </a>
        <span className="text-neutral-500 text-sm font-medium">veya</span>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-all active:scale-95"
        >
          Görüşme Planla
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
}