import React from 'react';
import { PERSONAL_DATA } from '@/config/personal';

export default function AboutSection() {
    const skillCategories = [
        {
            cat: 'Languages',
            items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'Bash Shell Scripting'],
        },
        {
            cat: 'Frameworks & Web',
            items: ['Spring Boot', 'Next.js', 'React', 'Node.js', 'Express', 'Tailwind CSS'],
        },
        {
            cat: 'Systems & Infrastructure',
            items: ['Linux Administration', 'Docker', 'Proxmox VE', 'TrueNAS', 'Caddy', 'Tailscale VPN'],
        },
        {
            cat: 'Networking & Tools',
            items: ['Cisco Packet Tracer', 'Wireshark Packet Inspection', 'Nginx Proxy Manager', 'Git'],
        },
    ];

    return (
        <section className="space-y-6 font-mono pt-4 border-t border-emerald-900/40">
            <div className="flex justify-between items-center border-b border-emerald-900/60 pb-3">
                <h2 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                    <span>&gt; 01. SYSTEM_AUDIT</span>
                    <span className="text-zinc-500 font-normal text-xs">// Background & Technical Competencies</span>
                </h2>
            </div>

            <div className="bg-[#10131b] border border-emerald-900/70 rounded-lg p-6 space-y-4 shadow-md">
                <h3 className="text-xs font-bold text-emerald-400 tracking-wider uppercase">// SYSTEM LOGS & BIO</h3>
                <div className="space-y-2 text-xs text-zinc-300 leading-relaxed">
                    {PERSONAL_DATA.bio.map((line, idx) => (
                        <p key={idx} className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">&gt;</span>
                            <span>{line}</span>
                        </p>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillCategories.map((matrix, idx) => (
                    <div key={idx} className="border border-emerald-900/60 bg-[#10131b] p-5 rounded-lg">
                        <h4 className="text-xs font-bold text-emerald-400 mb-3 uppercase tracking-wider">
                            [{matrix.cat}]
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {matrix.items.map((item, iIdx) => (
                                <span
                                    key={iIdx}
                                    className="text-xs bg-emerald-950/70 text-emerald-200 px-2.5 py-1 rounded border border-emerald-800/80"
                                >
                  {item}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}