"use client";

import React from "react";

export default function LanguageIcon({ language }: { language: string }) {
    const slugMap: Record<string, string> = {
        TypeScript: "typescript",
        JavaScript: "javascript",
        Python: "python",
        Java: "openjdk",
        Go: "go",
        Rust: "rust",
        "C++": "cplusplus",
        "C#": "dotnet",
        PHP: "php",
        Ruby: "ruby",
        Swift: "swift",
        Kotlin: "kotlin",
        Shell: "gnubash",
        HTML: "html5",
        CSS: "css3",
        Vue: "vuedotjs",
        React: "react",
        "Next.js": "nextdotjs",
        "Tailwind CSS": "tailwindcss",
        Docker: "docker",
        PostgreSQL: "postgresql",
        MongoDB: "mongodb",
        MySQL: "mysql",
        Redis: "redis",
        Node: "nodedotjs",
    };

    const slug = slugMap[language] || language?.toLowerCase();
    const iconUrl = `https://cdn.simpleicons.org/${slug}?color=fff`;

    return (
        <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center overflow-hidden shrink-0">
            <img
                src={iconUrl}
                alt={language}
                className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${language}&background=262626&color=fff&size=64&font-size=0.4&bold=true`;
                }}
            />
        </div>
    );
}
