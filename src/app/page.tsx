'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import TerminalHero from '@/components/TerminalHero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { RESUME_OPTIONS } from '@/config/personal';

export default function Home() {
    const [activeTab, setActiveTab] = useState('home');
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

    return (
        <main className="min-h-screen bg-[#090b10] text-zinc-100 font-mono antialiased selection:bg-emerald-500 selection:text-black">
            <Header
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                openResumeModal={() => setIsResumeModalOpen(true)}
            />

            <div className="max-w-6xl mx-auto px-4 py-8 space-y-10">
                <TerminalHero
                    setActiveTab={setActiveTab}
                    openResumeModal={() => setIsResumeModalOpen(true)}
                />

                {(activeTab === 'home' || activeTab === 'about') && <AboutSection />}
                {(activeTab === 'home' || activeTab === 'projects') && <ProjectsSection />}
                {(activeTab === 'home' || activeTab === 'contact') && <ContactSection />}
            </div>

            <footer className="w-full border-t border-emerald-900/50 py-6 px-4 bg-black/90 text-xs text-zinc-400 text-center font-mono mt-12">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
                    <p>© {new Date().getFullYear()} Marcus Podnar. Code provided "AS IS" under MIT License.</p>
                    <p className="text-emerald-400 text-[11px]">
                        Privacy Notice: Zero cookies, zero analytics, zero data retention.
                    </p>
                </div>
            </footer>

            {/* Resume Selection Popup Modal */}
            {isResumeModalOpen && (
                <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-[#0e1117] border border-emerald-500 rounded-lg max-w-xl w-full p-6 space-y-5 relative shadow-2xl">
                        <button
                            onClick={() => setIsResumeModalOpen(false)}
                            className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xs font-bold bg-zinc-900 border border-zinc-700 px-2 py-1 rounded"
                        >
                            [ CLOSE X ]
                        </button>

                        <div>
                            <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
                                <span>SELECT RESUME TRACK</span>
                            </h3>
                            <p className="text-xs text-zinc-400 mt-1">
                                Choose the specialized resume version tailored to your specific role requirements:
                            </p>
                        </div>

                        <div className="space-y-3">
                            {RESUME_OPTIONS.map((res) => (
                                <div
                                    key={res.id}
                                    className="border border-emerald-900/80 bg-[#141822] p-4 rounded-lg hover:border-emerald-500 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3 group"
                                >
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <h4 className="text-xs font-bold text-white group-hover:text-emerald-300">
                                                {res.title}
                                            </h4>
                                            <span className="text-[9px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800 font-semibold">
                        {res.badge}
                      </span>
                                        </div>
                                        <p className="text-[11px] text-zinc-400 leading-normal">
                                            {res.description}
                                        </p>
                                    </div>

                                    <a
                                        href={res.downloadUrl}
                                        download={res.fileName}
                                        onClick={() => setIsResumeModalOpen(false)}
                                        className="shrink-0 px-3 py-1.5 bg-emerald-500 text-black font-bold text-xs rounded hover:bg-emerald-400 transition-colors text-center"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}