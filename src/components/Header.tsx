'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { playCyberBlip, playSuccessChime, setSoundEnabled, getSoundEnabled } from '@/lib/sound';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openResumeModal: () => void;
}

export default function Header({ activeTab, setActiveTab, openResumeModal }: HeaderProps) {
  const [sfxOn, setSfxOn] = useState(false);

  useEffect(() => {
    setSfxOn(getSoundEnabled());
  }, []);

  const toggleSound = () => {
    const nextState = !sfxOn;
    setSfxOn(nextState);
    setSoundEnabled(nextState);
    if (nextState) {
      playSuccessChime();
    }
  };

  const navItems = [
    { id: 'home', label: '// 01. HOME' },
    { id: 'about', label: '// 02. ABOUT' },
    { id: 'projects', label: '// 03. PROJECTS' },
    { id: 'contact', label: '// 04. CONTACT' },
  ];

  const handleNavClick = (tabId: string) => {
    playCyberBlip(920);
    setActiveTab(tabId);
  };

  const handleResumeClick = () => {
    playSuccessChime();
    openResumeModal();
  };

  return (
    <header className="w-full border-b-2 border-[#1e2b4d] bg-[#050811]/95 sticky top-0 z-40 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
      {/* Top Techno Blue Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#2563eb]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Brand Identity */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 cursor-pointer group text-left focus:outline-none"
        >
          <div className="w-10 h-10 relative flex items-center justify-center border-2 border-[#00f0ff] bg-[#0a1020] p-1 group-hover:border-[#38bdf8] transition-all techno-cut shadow-cyber-cyan">
            <Image
              src="/logo.png"
              alt="Marcus Podnar Logo"
              width={26}
              height={26}
              className="object-contain filter drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]"
              priority
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-black text-sm tracking-wide font-mono">
                MARCUS PODNAR
              </span>
              <span className="text-[10px] bg-[#00f0ff] text-[#050811] px-1.5 py-0.2 font-black techno-cut">
                YETI
              </span>
            </div>
            <p className="text-[11px] text-[#38bdf8] font-semibold font-mono tracking-tight">
              Software Dev • Networks • TPM Intern @ Scotiabank
            </p>
          </div>
        </button>

        {/* Navigation Tabs, Audio SFX toggle & Resume CTA */}
        <nav className="flex flex-wrap items-center gap-2 text-xs font-mono">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 font-extrabold transition-all techno-cut ${
                  isActive
                    ? 'bg-[#00f0ff] text-[#050811] border-2 border-[#00f0ff] shadow-cyber-cyan'
                    : 'bg-[#0a1020] text-zinc-300 border border-[#1e2b4d] hover:border-[#00f0ff] hover:text-[#00f0ff]'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {/* Sound FX Toggle Button */}
          <button
            type="button"
            onClick={toggleSound}
            title={sfxOn ? 'Disable Cyber Sound Effects' : 'Enable Cyber Sound Effects'}
            className={`px-2.5 py-1.5 border text-[11px] font-bold techno-cut transition-all flex items-center gap-1 ${
              sfxOn
                ? 'bg-[#00ffcc]/15 border-[#00ffcc] text-[#00ffcc] shadow-[0_0_10px_rgba(0,255,204,0.3)]'
                : 'bg-[#0a1020] border-[#1e2b4d] text-zinc-400 hover:text-white hover:border-zinc-500'
            }`}
          >
            <span>{sfxOn ? '🔊' : '🔈'}</span>
            <span className="hidden md:inline">{sfxOn ? 'SFX ON' : 'SFX OFF'}</span>
          </button>

          <button
            type="button"
            onClick={handleResumeClick}
            className="px-3.5 py-1.5 bg-[#38bdf8] text-[#050811] font-black hover:bg-[#00f0ff] transition-all shadow-cyber-blue flex items-center gap-1.5 techno-cut border border-[#38bdf8]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#050811] animate-ping" />
            <span>[ GET RESUME ]</span>
          </button>
        </nav>
      </div>
    </header>
  );
}