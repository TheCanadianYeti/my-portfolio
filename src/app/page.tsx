'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import TerminalHero from '@/components/TerminalHero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import TechnoBackground from '@/components/TechnoBackground';
import { RESUME_OPTIONS } from '@/config/personal';
import { playCyberBlip, playSuccessChime } from '@/lib/sound';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Synchronize URL on initial mount & handle browser back/forward buttons
  useEffect(() => {
    const path = window.location.pathname.replace(/^\//, '').toLowerCase();
    if (['about', 'projects', 'contact'].includes(path)) {
      setActiveTab(path);
    }

    const handlePopState = () => {
      const currentPath = window.location.pathname.replace(/^\//, '').toLowerCase();
      setActiveTab(['about', 'projects', 'contact'].includes(currentPath) ? currentPath : 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const targetUrl = tab === 'home' ? '/' : `/${tab}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({ tab }, '', targetUrl);
    }
  };

  // Close resume modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResumeModalOpen(false);
      }
    };
    if (isResumeModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isResumeModalOpen]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#050811] text-[#f1f5f9] font-mono antialiased selection:bg-[#00f0ff] selection:text-[#050811] relative">
      {/* Interactive Mouse-Reactive Techno Canvas Background */}
      <TechnoBackground />

      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        openResumeModal={() => {
          playSuccessChime();
          setIsResumeModalOpen(true);
        }}
      />

      <main className="flex-1 max-w-screen-2xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 relative z-10">
        {/* Render Home Landing View: ONLY TerminalHero and Executive Summary */}
        {activeTab === 'home' && (
          <div className="space-y-8">
            <TerminalHero
              setActiveTab={handleTabChange}
            />

            {/* High-Impact Executive Briefing in Candidate's First-Person Voice */}
            <div className="bg-[#0a1020]/90 border-2 border-[#1e2b4d] hover:border-[#00f0ff]/60 transition-all p-6 sm:p-8 space-y-6 shadow-2xl techno-cut backdrop-blur-md relative group">
              {/* Top ambient highlight line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-transparent" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1e2b4d] pb-3 pt-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#00f0ff] text-xs font-black">▶</span>
                  <h2 className="text-sm font-black text-[#00f0ff] uppercase tracking-wider">
                    {"// EXECUTIVE BRIEFING & CANDIDATE HIGHLIGHTS"}
                  </h2>
                </div>
              </div>

              {/* First-person narrative */}
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
                I am a student in the Software Development &amp; Network Engineering (SDNE) program at Sheridan College. I combine hands-on enterprise IT support contractor experience with low-level systems engineering (Proxmox, TrueNAS, Tailscale mesh) and full-stack software development (Java, Python, TypeScript, React, Next.js).
              </p>

              {/* 3 Interactive Discipline Pillar Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                <div
                  onClick={() => {
                    playCyberBlip(850);
                    handleTabChange('about');
                  }}
                  className="bg-[#050811]/90 p-4 border border-[#1e2b4d] hover:border-[#00f0ff] transition-all cursor-pointer techno-cut group/card shadow-lg flex h-full flex-col"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#00f0ff] font-black uppercase tracking-wider block">
                      01 // TECHNICAL PROGRAM &amp; LEADERSHIP
                    </span>
                    <span className="text-xs text-[#00f0ff] opacity-0 group-hover/card:opacity-100 transition-opacity">
                      &rarr;
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-xs text-zinc-300 leading-relaxed font-medium">
                    I bridge engineering depth with product delivery, technical trade-offs, and cross-functional team execution.
                  </p>
                  <span className="mt-auto pt-2 text-[10px] text-[#00f0ff] font-semibold underline block">
                    View Leadership Background &rarr;
                  </span>
                </div>

                <div
                  onClick={() => {
                    playCyberBlip(850);
                    handleTabChange('projects');
                  }}
                  className="bg-[#050811]/90 p-4 border border-[#1e2b4d] hover:border-[#38bdf8] transition-all cursor-pointer techno-cut group/card shadow-lg flex h-full flex-col"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#38bdf8] font-black uppercase tracking-wider block">
                      02 // SOFTWARE SYSTEMS ENGINEERING
                    </span>
                    <span className="text-xs text-[#38bdf8] opacity-0 group-hover/card:opacity-100 transition-opacity">
                      &rarr;
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-xs text-zinc-300 leading-relaxed font-medium">
                    Strong object-oriented architecture in Java, automated cryptography engines, Python desktop utilities, and production Next.js 14 web apps.
                  </p>
                  <span className="mt-auto pt-2 text-[10px] text-[#38bdf8] font-semibold underline block">
                    Explore Code Archives &rarr;
                  </span>
                </div>

                <div
                  onClick={() => {
                    playCyberBlip(850);
                    handleTabChange('about');
                  }}
                  className="bg-[#050811]/90 p-4 border border-[#1e2b4d] hover:border-[#00ffcc] transition-all cursor-pointer techno-cut group/card shadow-lg flex h-full flex-col"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-[#00ffcc] font-black uppercase tracking-wider block">
                      03 // ENTERPRISE NETWORKS &amp; CLOUD
                    </span>
                    <span className="text-xs text-[#00ffcc] opacity-0 group-hover/card:opacity-100 transition-opacity">
                      &rarr;
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-xs text-zinc-300 leading-relaxed font-medium">
                    Enterprise IT support contractor, Linux administration, Proxmox VE hypervisors, TrueNAS Core storage, Caddy proxy, and Wireshark inspection.
                  </p>
                  <span className="mt-auto pt-2 text-[10px] text-[#00ffcc] font-semibold underline block">
                    Audit Systems &amp; Skills &rarr;
                  </span>
                </div>
              </div>

              {/* Navigation CTAs */}
              <div className="flex flex-wrap gap-4 pt-2 border-t border-[#1e2b4d] text-xs">
                <button
                  type="button"
                  onClick={() => {
                    playCyberBlip(800);
                    handleTabChange('about');
                  }}
                  className="text-[#00f0ff] font-bold underline hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Audit Technical Skills &amp; Dossier</span>
                  <span>&rarr;</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playCyberBlip(800);
                    handleTabChange('projects');
                  }}
                  className="text-[#38bdf8] font-bold underline hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Explore Engineered Repositories</span>
                  <span>&rarr;</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    playCyberBlip(800);
                    handleTabChange('contact');
                  }}
                  className="text-white font-bold underline hover:text-[#00f0ff] transition-colors flex items-center gap-1.5"
                >
                  <span>Direct Comms Dispatch</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Dedicated Single-Section Views: Rendered strictly non-redundantly */}
        {activeTab === 'about' && <AboutSection />}
        {activeTab === 'projects' && <ProjectsSection />}
        {activeTab === 'contact' && <ContactSection />}
      </main>

      {/* Cyberpunk Footer (Pinned to bottom of viewport) */}
      <footer className="mt-auto w-full border-t-2 border-[#1e2b4d] py-6 px-4 sm:px-6 bg-[#050811]/95 text-xs text-zinc-400 font-mono relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p>© {new Date().getFullYear()} Marcus Podnar. Code licensed under MIT.</p>
          <p className="text-[#00f0ff] text-[11px] font-bold">
            Privacy Guarantee: Zero cookies, zero persistent trackers, transient in-memory dispatch.
          </p>
        </div>
      </footer>

      {/* 3-Track Resume Selector Modal (z-[100] with fully opaque backdrop) */}
      {isResumeModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsResumeModalOpen(false)}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#0a1020] border-2 border-[#00f0ff] p-6 sm:p-8 space-y-6 shadow-[0_0_40px_rgba(0,240,255,0.3)] techno-cut max-h-[90vh] overflow-y-auto"
          >
            {/* Header & Close Button */}
            <div className="flex items-start justify-between gap-4 pt-1 border-b border-[#1e2b4d] pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#00f0ff] text-xs font-black">▶</span>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                    TARGET SPECIALIZATION SELECTOR
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#00f0ff] uppercase tracking-wide">
                  SELECT RESUME TRACK
                </h3>
                <p className="text-xs text-zinc-300 mt-1 font-medium">
                  Select the specialized resume version tailored to your team&apos;s technical requirements:
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsResumeModalOpen(false)}
                className="text-[#050811] font-black text-xs bg-[#00f0ff] hover:bg-[#38bdf8] px-3.5 py-1.5 techno-cut transition-all shadow-cyber-cyan shrink-0 uppercase tracking-wider"
              >
                [ ✕ CLOSE ]
              </button>
            </div>

            {/* 3 Dedicated Track Cards */}
            <div className="space-y-4">
              {RESUME_OPTIONS.map((res) => (
                <div
                  key={res.id}
                  className="border-2 border-[#1e2b4d] bg-[#050811] p-5 techno-cut hover:border-[#00f0ff] transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 group shadow-md"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h4 className="text-base font-black text-white group-hover:text-[#00f0ff] transition-colors">
                        {res.title}
                      </h4>
                      <span className="text-[10px] bg-[#00f0ff]/10 text-[#00f0ff] px-2 py-0.5 border border-[#00f0ff]/40 font-extrabold techno-cut">
                        {res.badge}
                      </span>
                      <span className="text-[10px] text-zinc-500 font-bold">
                        {res.fileSize}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                      {res.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {res.skillsHighlight.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] bg-[#0a1020] text-zinc-300 px-2 py-0.5 border border-[#1e2b4d] font-semibold techno-cut"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={res.downloadUrl}
                    download={res.fileName}
                    onClick={() => {
                      playSuccessChime();
                      setIsResumeModalOpen(false);
                    }}
                    className="shrink-0 px-5 py-2.5 bg-[#00f0ff] text-[#050811] font-black text-xs techno-cut hover:bg-[#38bdf8] transition-all text-center shadow-cyber-cyan uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <span>Download PDF</span>
                    <span className="text-sm font-black">&rarr;</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}