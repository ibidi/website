"use client";

import React, { useState } from "react";
import { Briefcase } from "lucide-react";

interface Experience {
    _id: string;
    company: string;
    role: string;
    period: string;
    logo: string;
    present?: boolean;
}

export default function ExperienceList({ experiences }: { experiences: Experience[] }) {
    const [showAll, setShowAll] = useState(false);

    const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

    return (
        <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-6 h-8">
                <h2 className="section-title mb-0 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Experience
                </h2>
                {experiences.length > 3 && (
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-[10px] text-neutral-400 hover:text-white transition-colors flex items-center gap-2 px-3 py-1 rounded-full border border-[#262626] bg-[#171717]"
                    >
                        {showAll ? "Show Less" : `Show All (${experiences.length})`}
                    </button>
                )}
            </div>
            <div className="space-y-4">
                {displayedExperiences.map((exp) => (
                    <div
                        key={exp._id}
                        className="flex items-start gap-4 p-4 premium-card card-hover"
                    >
                        <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center overflow-hidden shrink-0">
                            {exp.logo.startsWith("/") ? (
                                <img
                                    src={exp.logo}
                                    alt={exp.company}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-white font-bold text-sm">{exp.logo}</span>
                            )}
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between gap-2">
                                <h3 className="text-white font-medium leading-tight text-sm sm:text-base">
                                    {exp.company}
                                </h3>
                                {exp.present && (
                                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 font-medium shrink-0 border border-purple-500/20">
                                        PRESENT
                                    </span>
                                )}
                            </div>
                            <p className="text-neutral-400 text-xs sm:text-sm mt-1 leading-snug">{exp.role}</p>
                            <p className="text-neutral-500 text-[10px] sm:text-xs mt-1.5">{exp.period}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
