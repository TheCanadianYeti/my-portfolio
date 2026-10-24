'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PERSONAL_DATA } from '@/config/personal';
import { playCyberBlip, playGlitchChirp, playSuccessChime } from '@/lib/sound';

interface TerminalHeroProps {
  setActiveTab: (tab: string) => void;
  openResumeModal: () => void;
}

const CIPHER_MESSAGES = [
  'SCOTIABANK TPM INTERN // WINTER 2027 CONFIRMED',
  'RUBIX ENGINE: MULTI-LAYER CIPHER CRACKED [100%]',
  'TERLATRO: BALATRO JOKER SYNERGY MULTIPLIER x4',
  'HOMELAB NODE: PROXMOX + TRUENAS ZFS NOMINAL',
  'SDNE ARCHITECT: DUAL SOFTWARE + NETWORK DEPTH',
];

export default function TerminalHero({ setActiveTab, openResumeModal }: TerminalHeroProps) {
  const [ping, setPing] = useState(18);
  const [isProbing, setIsProbing] = useState(false);
  const [probeLog, setProbeLog] = useState<string | null>(null);
  const [activeMetricDetail, setActiveMetricDetail] = useState<string | null>(null);

  // Rubix Cipher Mini-Game state
  const [cipherIndex, setCipherIndex] = useState(0);
  const [cipherText, setCipherText] = useState(CIPHER_MESSAGES[0]);
  const [isDecrypting, setIsDecrypting] = useState(false);

  // Background telemetry ping fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(15 + Math.random() * 8));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleProbeGateway = () => {
    playCyberBlip(1100);
    setIsProbing(true);
    setProbeLog('Dispatching ICMP packet burst to secure mesh gateway...');
    setTimeout(() => {
      const probeResult = Math.floor(14 + Math.random() * 5);
      setPing(probeResult);
      setProbeLog(`64 bytes from mesh gateway: RTT=${probeResult}.2ms | Jitter=0.4ms | Loss=0.00% (Optimal)`);
      setIsProbing(false);
      playSuccessChime();
    }, 700);
  };

  // Fun matrix glyph decrypt animation inspired by Rubix
  const handleDecryptStream = () => {
    if (isDecrypting) return;
    playGlitchChirp();
    setIsDecrypting(true);
    const nextIndex = (cipherIndex + 1) % CIPHER_MESSAGES.length;
    setCipherIndex(nextIndex);
    const target = CIPHER_MESSAGES[nextIndex];
    const glyphs = '01#@$%&*<>~/[]+=XYZ';

    let iteration = 0;
    const interval = setInterval(() => {
      setCipherText(
        target
          .split('')
          .map((char, index) => {
            if (char === ' ' || char === '/' || char === ':') return char;
            if (index < iteration) return target[index];
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join('')
      );

      if (iteration >= target.length) {
        clearInterval(interval);
        setIsDecrypting(false);
        playSuccessChime();
      }
      iteration += 2;
    }, 30);
  };

  return (
    <div className="space-y-6 font-mono">
      {/* Top Techno Status Ticker with Live Beacon */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 bg-[#0a1020]/90 border border-[#1e2b4d] hover:border-[#00f0ff]/50 transition-colors techno-cut backdrop-blur-md shadow-[0_0_24px_rgba(0,240,255,0.08)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent animate-pulse" />

        <div className="flex items-center gap-3 text-xs font-semibold">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffcc] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ffcc]" />
          </span>
          <span className="text-[#00f0ff] font-extrabold tracking-wider">OFFICIAL ANNOUNCEMENT //</span>
          <span className="text-white font-extrabold tracking-wide">
            Incoming Technical Product Manager (TPM) Intern @ Scotiabank (Winter 2027)
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-medium">
          <span className="text-[#38bdf8] font-bold">SHERIDAN COLLEGE SDNE</span>
          <span className="text-zinc-600">|</span>
          <span>ONTARIO, CANADA</span>
        </div>
      </div>

      {/* Main Hero Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Hero Narrative & Interactive Controls (lg:col-span-7) */}
        <div className="lg:col-span-7 bg-[#0a1020]/85 border-2 border-[#1e2b4d] hover:border-[#00f0ff]/60 transition-all p-6 sm:p-8 techno-cut backdrop-blur-md shadow-2xl flex flex-col justify-between space-y-6 relative group">
          <div className="absolute top-2 right-2 text-[10px] text-[#1e2b4d] group-hover:text-[#00f0ff] transition-colors font-bold select-none">
            [SYS://NODE_01]
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 border border-[#00f0ff]/30 techno-cut shadow-cyber-cyan">
              <span className="animate-pulse">●</span>
              <span className="tracking-wider">TECHNICAL LEADER &amp; SYSTEMS ARCHITECT</span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1.5">
                <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {PERSONAL_DATA.name}
                </h1>
                <span className="text-xs bg-[#00f0ff] text-[#050811] font-black px-2.5 py-0.5 techno-cut shadow-cyber-cyan">
                  {PERSONAL_DATA.preferredName}
                </span>
              </div>
              <p className="text-sm sm:text-base text-[#38bdf8] font-extrabold tracking-wide">
                Software Developer • Network Systems Engineer • Incoming TPM Intern
              </p>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
              I am an incoming Technical Product/Program Manager (TPM) intern at Scotiabank for Winter 2027 and a student in Sheridan College&apos;s SDNE program. I specialize in bridging low-level systems engineering (Java OOP engines, Linux administration, virtualization hypervisors, Wireshark packet capture) with high-level technical program execution and cross-functional delivery.
            </p>

            {/* Quick-Scan Pillar Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="bg-[#050811]/90 p-3 border border-[#1e2b4d] hover:border-[#00f0ff]/50 transition-colors techno-cut">
                <span className="text-[10px] text-[#00f0ff] font-extrabold block uppercase tracking-wider">
                  SCOTIABANK
                </span>
                <span className="text-xs text-white font-extrabold">
                  Incoming TPM Intern
                </span>
              </div>
              <div className="bg-[#050811]/90 p-3 border border-[#1e2b4d] hover:border-[#38bdf8]/50 transition-colors techno-cut">
                <span className="text-[10px] text-[#38bdf8] font-extrabold block uppercase tracking-wider">
                  ENTERPRISE IT
                </span>
                <span className="text-xs text-white font-extrabold">
                  Support Contractor
                </span>
              </div>
              <div className="bg-[#050811]/90 p-3 border border-[#1e2b4d] hover:border-[#00ffcc]/50 transition-colors techno-cut">
                <span className="text-[10px] text-[#00ffcc] font-extrabold block uppercase tracking-wider">
                  SHERIDAN SDNE
                </span>
                <span className="text-xs text-white font-extrabold">
                  Software &amp; Networks
                </span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-[#1e2b4d] flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                playSuccessChime();
                openResumeModal();
              }}
              className="px-5 py-3 bg-[#00f0ff] text-[#050811] font-black text-xs techno-cut hover:bg-[#38bdf8] transition-all shadow-cyber-cyan flex items-center gap-2 uppercase tracking-wider"
            >
              <span>[ VIEW RESUME (3 TRACKS) ]</span>
              <span className="text-sm font-black">&rarr;</span>
            </button>
            <button
              type="button"
              onClick={() => {
                playCyberBlip(800);
                setActiveTab('projects');
              }}
              className="px-4 py-3 bg-[#050811] text-[#38bdf8] border-2 border-[#38bdf8]/60 font-bold text-xs techno-cut hover:bg-[#38bdf8]/15 hover:text-white transition-all uppercase tracking-wider"
            >
              [ EXPLORE PROJECTS ]
            </button>
            <button
              type="button"
              onClick={() => {
                playCyberBlip(750);
                setActiveTab('contact');
              }}
              className="px-4 py-3 bg-[#050811] text-zinc-300 border border-[#1e2b4d] font-bold text-xs techno-cut hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all uppercase tracking-wider"
            >
              [ CONTACT MARCUS ]
            </button>
          </div>
        </div>

        {/* Right Column: Techno Profile, Interactive Cipher & Telemetry Simulator (lg:col-span-5) */}
        <div className="lg:col-span-5 bg-[#0a1020]/85 border-2 border-[#1e2b4d] hover:border-[#00f0ff]/60 transition-all p-6 sm:p-7 techno-cut backdrop-blur-md shadow-2xl flex flex-col justify-between space-y-4">
          {/* Top Telemetry Header Bar */}
          <div className="flex items-center justify-between border-b border-[#1e2b4d] pb-3">
            <div className="flex items-center gap-2 text-xs text-[#00f0ff] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
              <span>SYSTEM_TELEMETRY // RELIC_HUD</span>
            </div>
            <button
              type="button"
              onClick={handleProbeGateway}
              disabled={isProbing}
              className="text-[10px] bg-[#00f0ff]/10 hover:bg-[#00f0ff] text-[#00f0ff] hover:text-[#050811] border border-[#00f0ff]/40 px-2.5 py-1 font-bold techno-cut transition-all flex items-center gap-1.5 disabled:opacity-50"
            >
              <span className={isProbing ? 'animate-spin' : ''}>⚙</span>
              <span>{isProbing ? 'PROBING...' : '[ PROBE GATEWAY ]'}</span>
            </button>
          </div>

          {/* Profile Card Header with Avatar */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 sm:w-22 sm:h-22 relative p-1 shrink-0">
              <div className="absolute inset-0 border-2 border-[#00f0ff] techno-cut shadow-cyber-cyan" />
              <div className="w-full h-full relative overflow-hidden bg-[#050811] techno-cut">
                <Image
                  src="/headshot.jpg"
                  alt="Marcus Podnar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-0.5">
              <span className="text-[10px] text-zinc-400 font-bold block">CALLSIGN:</span>
              <p className="text-white font-black text-base sm:text-lg tracking-wide">{PERSONAL_DATA.handle}</p>
              <span className="text-xs text-[#00f0ff] font-extrabold block">
                Sheridan College (SDNE)
              </span>
              <p className="text-[11px] text-zinc-400 font-medium">Ontario, Canada</p>
            </div>
          </div>

          {/* FUN INTERACTIVE FEATURE: Rubix Cipher Mini-Engine */}
          <div className="bg-[#050811] p-3 border border-[#00f0ff]/40 techno-cut space-y-1.5 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-[#00f0ff] font-extrabold flex items-center gap-1">
                <span>⚡</span>
                <span>RUBIX_CIPHER_ENGINE // LIVE DECRYPTOR</span>
              </span>
              <button
                type="button"
                onClick={handleDecryptStream}
                disabled={isDecrypting}
                className="text-[9px] bg-[#00f0ff] text-[#050811] font-black px-2 py-0.5 techno-cut hover:bg-[#38bdf8] transition-colors"
              >
                {isDecrypting ? 'CRACKING...' : '[ 🎲 DECRYPT NEXT ]'}
              </button>
            </div>
            <div className="p-2 bg-[#0a1020] border border-[#1e2b4d] font-mono text-[11px] text-[#00ffcc] font-extrabold tracking-wide break-all select-all">
              &gt; {cipherText}
            </div>
          </div>

          {/* Real-Time Interactive Telemetry Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div
              onClick={() => {
                playCyberBlip(1000);
                setActiveMetricDetail('latency');
              }}
              className="bg-[#050811]/90 p-2.5 border border-[#1e2b4d] hover:border-[#00f0ff] transition-all cursor-pointer techno-cut group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-400 font-bold">LATENCY / PING</span>
                <span className="text-[9px] text-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity">ℹ</span>
              </div>
              <span className="text-[#00f0ff] font-extrabold text-sm">{ping} ms</span>
              <span className="text-[9px] text-zinc-500 block">Jitter &lt; 0.6 ms</span>
            </div>

            <div
              onClick={() => {
                playCyberBlip(1000);
                setActiveMetricDetail('packet_loss');
              }}
              className="bg-[#050811]/90 p-2.5 border border-[#1e2b4d] hover:border-[#00ffcc] transition-all cursor-pointer techno-cut group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-400 font-bold">PACKET LOSS</span>
                <span className="text-[9px] text-[#00ffcc] opacity-0 group-hover:opacity-100 transition-opacity">ℹ</span>
              </div>
              <span className="text-[#00ffcc] font-extrabold text-sm">0.00%</span>
              <span className="text-[9px] text-zinc-500 block">Zero drop rate</span>
            </div>

            <div
              onClick={() => {
                playCyberBlip(1000);
                setActiveMetricDetail('tunnel');
              }}
              className="bg-[#050811]/90 p-2.5 border border-[#1e2b4d] hover:border-[#38bdf8] transition-all cursor-pointer techno-cut group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-400 font-bold">MESH ROUTING</span>
                <span className="text-[9px] text-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity">ℹ</span>
              </div>
              <span className="text-white font-extrabold text-xs">Tailscale WireGuard</span>
              <span className="text-[9px] text-zinc-500 block">Encrypted tunnel</span>
            </div>

            <div
              onClick={() => {
                playCyberBlip(1000);
                setActiveMetricDetail('platform');
              }}
              className="bg-[#050811]/90 p-2.5 border border-[#1e2b4d] hover:border-[#00f0ff] transition-all cursor-pointer techno-cut group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-zinc-400 font-bold">HOMELAB STACK</span>
                <span className="text-[9px] text-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity">ℹ</span>
              </div>
              <span className="text-[#38bdf8] font-extrabold text-xs">Proxmox + TrueNAS</span>
              <span className="text-[9px] text-zinc-500 block">ZFS &amp; Caddy nodes</span>
            </div>
          </div>

          {/* Metric Detail Popup if active */}
          {activeMetricDetail && (
            <div className="bg-[#050811] p-3 border border-[#00f0ff] techno-cut text-xs space-y-1 animate-fadeIn">
              <div className="flex items-center justify-between text-[10px] text-[#00f0ff] font-bold">
                <span>{"// METRIC_AUDIT_INFO"}</span>
                <button
                  type="button"
                  onClick={() => setActiveMetricDetail(null)}
                  className="text-zinc-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <p className="text-[11px] text-zinc-300">
                {activeMetricDetail === 'latency' && 'Simulated round-trip latency to edge gateway via zero-trust WireGuard mesh tunnel.'}
                {activeMetricDetail === 'packet_loss' && 'Continuous health beacon verifying 100% transmission success with 0 packet degradation.'}
                {activeMetricDetail === 'tunnel' && 'Mesh overlay connecting self-hosted TrueNAS, Proxmox hypervisor, and edge nodes.'}
                {activeMetricDetail === 'platform' && 'Bare-metal virtualization cluster hosting private container workloads, Caddy reverse proxy, and DNS.'}
              </p>
            </div>
          )}

          {/* Bottom Diagnostic Probe Stream / Status */}
          <div className="bg-[#050811] p-2 border border-[#1e2b4d] techno-cut text-[10px] text-zinc-300 flex items-center justify-between">
            <span className="truncate">
              {probeLog ? (
                <span className="text-[#00ffcc] font-bold">&gt; {probeLog}</span>
              ) : (
                <span className="text-zinc-400">&gt; Node telemetry active. Click probe to simulate packets.</span>
              )}
            </span>
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest shrink-0 ml-2">TLS 1.3</span>
          </div>
        </div>
      </div>
    </div>
  );
}