'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, Volume2, VolumeX, X } from 'lucide-react';
import { playCyberBlip, playSuccessChime, setSoundEnabled, getSoundEnabled } from '@/lib/sound';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openResumeModal: () => void;
}

export default function Header({ activeTab, setActiveTab, openResumeModal }: HeaderProps) {
  const [sfxOn, setSfxOn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const soundEnabled = getSoundEnabled();
    setSoundEnabled(soundEnabled);
    setSfxOn(soundEnabled);
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
    setIsMobileMenuOpen(false);
  };

  const handleResumeClick = () => {
    playSuccessChime();
    setIsMobileMenuOpen(false);
    openResumeModal();
  };

  return (
    <header className="w-full border-b-2 border-[#1e2b4d] bg-[#050811]/95 sticky top-0 z-40 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
      {/* Top Techno Blue Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#2563eb]" />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-3">
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
              Software Developer • Network Systems Engineer
            </p>
          </div>
        </button>

        {/* Navigation Tabs, Audio SFX toggle & Resume CTA */}
        <nav className="hidden lg:flex flex-wrap lg:flex-nowrap items-center justify-center gap-1.5 lg:gap-2 text-[10px] lg:text-xs font-mono">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`px-2 lg:px-3 py-1.5 font-extrabold transition-all techno-cut ${
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
            aria-label={sfxOn ? 'Disable sound effects' : 'Enable sound effects'}
            aria-pressed={sfxOn}
            className={`h-8 w-8 shrink-0 border flex items-center justify-center techno-cut transition-all ${
              sfxOn
                ? 'bg-[#00ffcc]/15 border-[#00ffcc] text-[#00ffcc] shadow-[0_0_10px_rgba(0,255,204,0.3)]'
                : 'bg-[#0a1020] border-[#1e2b4d] text-zinc-400 hover:text-white hover:border-zinc-500'
            }`}
          >
            {sfxOn ? <Volume2 size={15} aria-hidden="true" /> : <VolumeX size={15} aria-hidden="true" />}
          </button>

          <button
            type="button"
            onClick={handleResumeClick}
            className="px-2.5 lg:px-3.5 py-1.5 shrink-0 bg-[#38bdf8] text-[#050811] font-black hover:bg-[#00f0ff] transition-all shadow-cyber-blue flex items-center gap-1.5 techno-cut border border-[#38bdf8]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#050811] animate-ping" />
            <span>[ GET RESUME ]</span>
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          className={`group relative lg:hidden h-10 w-10 shrink-0 overflow-hidden border bg-[#0a1020] text-[#00f0ff] flex items-center justify-center techno-cut transition-all duration-300 hover:border-[#00f0ff] hover:shadow-cyber-cyan ${
            isMobileMenuOpen ? 'border-[#00f0ff] shadow-cyber-cyan' : 'border-[#1e2b4d]'
          }`}
        >
          <span
            aria-hidden="true"
            className={`absolute inset-0 bg-[#00f0ff]/10 transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'
            }`}
          />
          <span className="relative flex items-center justify-center">
            <Menu
              size={20}
              aria-hidden="true"
              className={`absolute transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
            />
            <X
              size={20}
              aria-hidden="true"
              className={`transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
              }`}
            />
          </span>
        </button>
        </div>

        {isMobileMenuOpen && (
          <nav
            id="mobile-navigation"
            className="animate-mobile-menu-in origin-top lg:hidden mt-3 grid grid-cols-1 gap-2 border-t border-[#1e2b4d] pt-3 text-xs font-mono motion-reduce:animate-none"
          >
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full px-3 py-2.5 text-left font-extrabold transition-all techno-cut ${
                    isActive
                      ? 'bg-[#00f0ff] text-[#050811] border-2 border-[#00f0ff] shadow-cyber-cyan'
                      : 'bg-[#0a1020] text-zinc-300 border border-[#1e2b4d] hover:border-[#00f0ff] hover:text-[#00f0ff]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <button
              type="button"
              onClick={toggleSound}
              aria-pressed={sfxOn}
              className="w-full px-3 py-2.5 text-left bg-[#0a1020] border border-[#1e2b4d] text-zinc-300 flex items-center gap-2 techno-cut hover:border-[#00f0ff] transition-colors"
            >
              {sfxOn ? <Volume2 size={16} aria-hidden="true" /> : <VolumeX size={16} aria-hidden="true" />}
              <span>{sfxOn ? 'Disable sound effects' : 'Enable sound effects'}</span>
            </button>

            <button
              type="button"
              onClick={handleResumeClick}
              className="w-full px-3 py-2.5 text-left bg-[#38bdf8] text-[#050811] font-black flex items-center gap-2 techno-cut border border-[#38bdf8]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#050811] animate-ping" />
              <span>[ GET RESUME ]</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}