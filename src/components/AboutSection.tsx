import React from 'react';
import { PERSONAL_DATA } from '@/config/personal';

export default function AboutSection() {
  const skillCategories = [
    {
      cat: 'Programming Languages',
      badge: 'SYNTAX',
      borderAccent: 'border-[#00f0ff]',
      badgeStyle: 'bg-[#00f0ff]/10 text-[#00f0ff] border-[#00f0ff]/40',
      items: [
        'Java (OOP / Concurrency)',
        'Python',
        'TypeScript',
        'JavaScript (ES6+)',
        'SQL (PostgreSQL / SQLite)',
        'Bash Shell Scripting',
      ],
    },
    {
      cat: 'Frameworks & Web Engineering',
      badge: 'APP_LAYER',
      borderAccent: 'border-[#38bdf8]',
      badgeStyle: 'bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/40',
      items: [
        'Next.js 14 (App Router)',
        'React',
        'Spring Boot',
        'Node.js & Express',
        'Tailwind CSS',
        'RESTful APIs & Microservices',
      ],
    },
    {
      cat: 'Systems & Cloud Infrastructure',
      badge: 'SYS_ADMIN',
      borderAccent: 'border-[#2563eb]',
      badgeStyle: 'bg-[#2563eb]/10 text-[#38bdf8] border-[#2563eb]/40',
      items: [
        'Linux Administration (Debian/Ubuntu)',
        'Docker Containerization',
        'Proxmox Virtual Environment (PVE)',
        'TrueNAS Core & ZFS Storage',
        'Caddy Reverse Proxy',
        'Tailscale Zero-Trust WireGuard',
      ],
    },
    {
      cat: 'Networking & Security Tools',
      badge: 'NET_SEC',
      borderAccent: 'border-[#00ffcc]',
      badgeStyle: 'bg-[#00ffcc]/10 text-[#00ffcc] border-[#00ffcc]/40',
      items: [
        'Wireshark Packet Inspection',
        'Cisco Packet Tracer',
        'Cryptographic Cipher Engines',
        'TCP/IP & DNS Routing',
        'Nginx Proxy Manager',
        'Git & Version Control',
      ],
    },
  ];

  return (
    <section className="space-y-6 font-mono relative z-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#1e2b4d] pb-3 gap-2">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-6 bg-[#00f0ff] techno-cut" />
          <h2 className="text-xl font-black text-[#00f0ff] tracking-wider">
            {"// 01. SYSTEM_SPECS"}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400 font-semibold">
            {"// Candidate Dossier & Competency Matrix"}
          </span>
          <span className="text-[10px] bg-[#00ffcc]/10 border border-[#00ffcc]/40 text-[#00ffcc] px-2 py-0.5 font-bold techno-cut">
            TPM INTERN // SCOTIABANK 2027
          </span>
        </div>
      </div>

      {/* Candidate Dossier & Background */}
      <div className="bg-[#0a1020]/90 border-2 border-[#1e2b4d] hover:border-[#00f0ff]/60 p-6 sm:p-7 shadow-xl techno-cut backdrop-blur-md space-y-4">
        <div className="flex items-center justify-between border-b border-[#1e2b4d] pb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-[#00f0ff] text-xs font-black">▶</span>
            <h3 className="text-xs font-black text-white uppercase tracking-wider">
              {"// CANDIDATE PROFILE & VERIFIED LOGS"}
            </h3>
          </div>
          <span className="text-[10px] text-zinc-400 font-bold">
            SHERIDAN_SDNE // CLEARANCE: OPEN
          </span>
        </div>

        <div className="space-y-2.5 text-xs text-zinc-200 leading-relaxed font-medium">
          {PERSONAL_DATA.bio.map((line, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-[#050811]/90 p-3.5 border border-[#1e2b4d] techno-cut hover:border-[#00f0ff]/50 transition-colors"
            >
              <span className="text-[#00f0ff] font-black select-none text-sm">&gt;</span>
              <p className="text-zinc-200">{line}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4-Category Skills Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((matrix, idx) => (
          <div
            key={idx}
            className={`border-2 ${matrix.borderAccent} bg-[#0a1020]/90 p-5 shadow-lg techno-cut backdrop-blur-md transition-all hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-[#1e2b4d] pb-2.5">
                <h4 className="text-sm font-black text-white tracking-wide">
                  {matrix.cat}
                </h4>
                <span className={`text-[10px] px-2.5 py-0.5 border font-black techno-cut ${matrix.badgeStyle}`}>
                  {matrix.badge}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {matrix.items.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className="text-xs bg-[#050811] text-zinc-100 font-semibold px-3 py-1.5 border border-[#1e2b4d] techno-cut hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}