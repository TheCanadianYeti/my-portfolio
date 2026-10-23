'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PERSONAL_DATA } from '@/config/personal';

interface TerminalHeroProps {
    setActiveTab: (tab: string) => void;
    openResumeModal: () => void;
}

export default function TerminalHero({ setActiveTab, openResumeModal }: TerminalHeroProps) {
    const [terminalInput, setTerminalInput] = useState('');
    const [terminalHistory, setTerminalHistory] = useState<string[]>([
        'System initialized: Terminal OS v2.1.0',
        'Click quick actions below or type "help" to inspect system capabilities.',
    ]);

    const handleCommandSubmit = (e: React.FormEvent | string) => {
        if (typeof e !== 'string') e.preventDefault();
        const rawCmd = typeof e === 'string' ? e : terminalInput;
        const cmd = rawCmd.trim().toLowerCase();

        if (!cmd) return;

        let response = '';
        switch (cmd) {
            case 'help':
                response = 'Available commands: whoami, skills, projects, resume, contact, clear';
                break;
            case 'whoami':
                response = `${PERSONAL_DATA.name} | ${PERSONAL_DATA.title} (${PERSONAL_DATA.location})`;
                break;
            case 'skills':
                response = 'Languages: Java, Python, TypeScript, SQL, Bash\nSystems: Linux, Docker, Proxmox, TrueNAS, Caddy';
                break;
            case 'projects':
                response = 'Loaded Projects: Terlatro, Rubix Engine, Souschef AI, WineWeb, Local HEIC Converter.';
                setActiveTab('projects');
                break;
            case 'resume':
                openResumeModal();
                response = 'Opening Resume Selector Modal... Select target track.';
                break;
            case 'contact':
                setActiveTab('contact');
                response = `Direct Dispatch: ${PERSONAL_DATA.email} | LinkedIn: ${PERSONAL_DATA.linkedin}`;
                break;
            case 'clear':
                setTerminalHistory([]);
                setTerminalInput('');
                return;
            default:
                response = `Command not recognized: "${cmd}". Click a quick button or type "help".`;
        }

        setTerminalHistory((prev) => [...prev, `$ ${rawCmd}`, response].filter(Boolean));
        setTerminalInput('');
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono">
            {/* Profile Card */}
            <div className="md:col-span-1 border border-emerald-900/80 bg-[#10131b] rounded-lg p-6 flex flex-col items-center text-center justify-between shadow-lg">
                <div className="flex flex-col items-center">
                    <div className="w-36 h-36 relative rounded-full border-2 border-emerald-500/80 p-1 mb-4 shadow-lg shadow-emerald-500/20">
                        <div className="w-full h-full relative rounded-full overflow-hidden bg-emerald-950/50">
                            <Image
                                src="/headshot.jpg"
                                alt="Marcus Podnar"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                    <h2 className="text-white font-bold text-lg mb-1">{PERSONAL_DATA.name}</h2>
                    <p className="text-xs text-emerald-400 font-semibold mb-3">{PERSONAL_DATA.title}</p>

                    <div className="flex items-center gap-2 text-[10px] text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800 mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>Winter 2027 Co-Op Ready</span>
                    </div>
                </div>

                <div className="w-full space-y-2">
                    <button
                        onClick={openResumeModal}
                        className="w-full py-2.5 bg-emerald-500 text-black font-bold text-xs rounded hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20"
                    >
                        [ Download Resume ]
                    </button>
                    <button
                        onClick={() => setActiveTab('contact')}
                        className="w-full py-2 bg-emerald-950/60 border border-emerald-800 text-emerald-300 font-semibold text-xs rounded hover:bg-emerald-900 transition-colors"
                    >
                        Contact & Links
                    </button>
                </div>
            </div>

            {/* Interactive Terminal Window */}
            <div className="md:col-span-2 border border-emerald-500/50 bg-black/90 rounded-lg p-5 shadow-xl flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-900/60 text-xs">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                            <span className="ml-2 font-bold text-emerald-400">terminal@marcus-podnar:~</span>
                        </div>
                        <span className="text-[10px] text-emerald-600">CLI_EMULATOR_ACTIVE</span>
                    </div>

                    {/* Quick Buttons */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {['whoami', 'skills', 'projects', 'resume', 'contact', 'clear'].map((cmd) => (
                            <button
                                key={cmd}
                                onClick={() => handleCommandSubmit(cmd)}
                                className="text-[11px] bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 px-2.5 py-0.5 rounded hover:border-emerald-400 hover:text-white transition-colors"
                            >
                                ${cmd}
                            </button>
                        ))}
                    </div>

                    {/* Output Log */}
                    <div className="space-y-1.5 max-h-52 overflow-y-auto text-xs text-emerald-300 pr-2">
                        {terminalHistory.map((line, idx) => (
                            <p key={idx} className="leading-relaxed whitespace-pre-wrap">
                                {line}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Command Line Input */}
                <form onSubmit={handleCommandSubmit} className="flex items-center gap-2 pt-3 border-t border-emerald-900/50 text-xs mt-3">
                    <span className="text-emerald-400 font-bold">$</span>
                    <input
                        type="text"
                        value={terminalInput}
                        onChange={(e) => setTerminalInput(e.target.value)}
                        className="bg-transparent border-none outline-none text-emerald-200 w-full focus:ring-0 placeholder-emerald-800"
                        placeholder="type 'help' or click buttons above..."
                    />
                </form>
            </div>
        </div>
    );
}