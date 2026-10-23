'use client';

import React from 'react';
import Image from 'next/image';

interface HeaderProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    openResumeModal: () => void;
}

export default function Header({ activeTab, setActiveTab, openResumeModal }: HeaderProps) {
    const navItems = [
        { id: 'home', label: '// 01. HOME' },
        { id: 'about', label: '// 02. ABOUT' },
        { id: 'projects', label: '// 03. PROJECTS' },
        { id: 'contact', label: '// 04. CONTACT' },
    ];

    return (
        <header className="w-full border-b border-emerald-900/60 bg-black/90 px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 z-40 backdrop-blur-md">
            <div onClick={() => setActiveTab('home')} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-9 h-9 relative flex items-center justify-center border border-emerald-500/50 bg-emerald-950/40 rounded p-1 group-hover:border-emerald-400 transition-colors">
                    <Image
                        src="/logo.png"
                        alt="Marcus Podnar Logo"
                        width={28}
                        height={28}
                        className="object-contain filter drop-shadow-[0_0_4px_rgba(0,255,102,0.6)]"
                    />
                </div>
                <div>
                    <h1 className="text-white font-bold text-sm tracking-wider flex items-center gap-1.5 font-mono">
                        <span className="text-emerald-400 font-bold">&gt;_</span> Marcus Podnar
                    </h1>
                    <p className="text-[11px] text-emerald-400 font-medium font-mono">Software Dev & Network Engineer</p>
                </div>
            </div>

            <nav className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`px-3 py-1.5 rounded transition-all ${
                            activeTab === item.id
                                ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20'
                                : 'bg-emerald-950/30 text-emerald-300 border border-emerald-900/60 hover:border-emerald-500 hover:text-white'
                        }`}
                    >
                        {item.label}
                    </button>
                ))}
                <button
                    onClick={openResumeModal}
                    className="px-3 py-1.5 rounded bg-emerald-400 text-black font-bold hover:bg-emerald-300 transition-colors"
                >
                    [ GET RESUME ]
                </button>
            </nav>
        </header>
    );
}