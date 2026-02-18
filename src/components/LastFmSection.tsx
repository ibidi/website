"use client";

import React, { useEffect, useState } from "react";
import { Music, Play, User, Calendar, ExternalLink } from "lucide-react";

interface LastFmData {
    user: any;
    recent: any[];
    topArtists: any[];
}

export default function LastFmSection() {
    const [data, setData] = useState<LastFmData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/lastfm")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="premium-card p-8 flex items-center justify-center min-h-[200px]">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-2 border-white/10 border-t-white rounded-full animate-spin" />
                    <p className="text-neutral-500 text-sm animate-pulse">Müzik verileri yükleniyor...</p>
                </div>
            </div>
        );
    }

    if (error || !data) {
        return null; // Don't show anything if there's an error (likely missing API key)
    }

    const { user, recent, topArtists } = data;
    const nowPlaying = recent.find((track) => track["@attr"]?.nowplaying === "true");

    return (
        <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-white font-semibold text-xs flex items-center gap-2 uppercase tracking-wider opacity-50">
                    <Music className="w-3 h-3" />
                    Müzik Kutusu
                </h2>
                <a
                    href={user?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-neutral-500 hover:text-white transition-colors"
                >
                    Last.fm <ExternalLink className="w-3 h-3 inline ml-0.5" />
                </a>
            </div>

            {/* Now Playing / Latest Card - Compact for Sidebar */}
            <div className="premium-card p-4 relative overflow-hidden group">
                {nowPlaying && (
                    <div className="absolute top-2 right-2">
                        <span className="flex items-center gap-1 text-[8px] text-green-400 font-bold bg-green-500/10 px-1.5 py-0.5 rounded-full border border-green-500/20">
                            <span className="w-1 h-1 bg-green-400 rounded-full animate-pulse" />
                            LIVE
                        </span>
                    </div>
                )}

                <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-lg overflow-hidden border border-white/5 shrink-0 relative">
                        <img
                            src={recent[0]?.image?.[2]?.["#text"] || "/music-placeholder.png"}
                            alt="Album Art"
                            className="w-full h-full object-cover"
                        />
                        {!nowPlaying && (
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <Play className="w-4 h-4 text-white/50" />
                            </div>
                        )}
                    </div>
                    <div className="min-w-0">
                        <p className="text-neutral-500 text-[9px] uppercase tracking-widest mb-0.5 truncate">
                            {nowPlaying ? "Dinleniyor" : "Son Dinlenen"}
                        </p>
                        <h3 className="text-white font-bold text-sm truncate leading-tight group-hover:text-blue-400 transition-colors">
                            <a href={recent[0]?.url} target="_blank" rel="noopener noreferrer">
                                {recent[0]?.name}
                            </a>
                        </h3>
                        <p className="text-neutral-400 text-xs truncate">{recent[0]?.artist?.["#text"]}</p>
                    </div>
                </div>
            </div>

            {/* History Grid - 3 small square cards */}
            <div className="grid grid-cols-3 gap-2">
                {recent.slice(1, 4).map((track, i) => (
                    <a
                        key={i}
                        href={track.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="premium-card p-1.5 flex flex-col gap-1.5 group hover:bg-white/5 transition-all"
                    >
                        <div className="aspect-square rounded-md overflow-hidden border border-white/5 shrink-0">
                            <img
                                src={track.image?.[2]?.["#text"] || "/music-placeholder.png"}
                                alt={track.name}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100"
                            />
                        </div>
                        <div className="min-w-0">
                            <h4 className="text-white text-[8px] font-bold truncate leading-tight">{track.name}</h4>
                            <p className="text-neutral-500 text-[7px] truncate leading-none">{track.artist["#text"]}</p>
                        </div>
                    </a>
                ))}
            </div>

            {/* Top Artists - Small Circles */}
            <div className="flex items-center gap-2 overflow-hidden pt-1">
                {topArtists.slice(0, 5).map((artist, i) => (
                    <a
                        key={i}
                        href={artist.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`${artist.name} (${artist.playcount} plays)`}
                        className="w-8 h-8 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-500 hover:border-white/20 hover:text-white transition-all overflow-hidden shrink-0"
                    >
                        <span className="text-[10px] font-bold">{artist.name.substring(0, 1)}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

function formatCount(count: number): string {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
}
