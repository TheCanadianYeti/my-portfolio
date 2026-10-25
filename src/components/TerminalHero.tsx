'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PERSONAL_DATA } from '@/config/personal';
import { playCyberBlip, playSuccessChime } from '@/lib/sound';

interface TerminalHeroProps {
  setActiveTab: (tab: string) => void;
}

export default function TerminalHero({ setActiveTab }: TerminalHeroProps) {
  const [ping, setPing] = useState(18);
  const [isProbing, setIsProbing] = useState(false);
  const [probeLog, setProbeLog] = useState<string | null>(null);
  const [activeMetricDetail, setActiveMetricDetail] = useState<string | null>(null);

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
    setProbeLog('Sending test packets to the gateway...');
    setTimeout(() => {
      const probeResult = Math.floor(14 + Math.random() * 5);
      setPing(probeResult);
      setProbeLog(`Gateway: ${probeResult} ms RTT | 0.4 ms jitter | 0% loss`);
      setIsProbing(false);
      playSuccessChime();
    }, 700);
  };

  return (
    <div className="space-y-6 font-mono">
      {/* Top Techno Status Ticker with Live Beacon */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3.5 bg-[#0a1020]/90 border border-[#1e2b4d] hover:border-[#00f0ff]/50 transition-colors techno-cut backdrop-blur-md shadow-[0_0_24px_rgba(0,240,255,0.08)] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent animate-pulse" />

        <div className="flex min-w-0 items-start gap-3 text-xs font-semibold">
          <span className="relative mt-1 flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ffcc] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ffcc]" />
          </span>
          <div className="min-w-0">
            <span className="block text-[#00f0ff] font-extrabold tracking-wider">OFFICIAL ANNOUNCEMENT //</span>
            <span className="block text-white font-extrabold tracking-wide">
            Incoming Technical Product Manager (TPM) Intern @ Scotiabank (Winter 2027)
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-zinc-400 font-medium sm:shrink-0">
          <span className="text-[#38bdf8] font-bold whitespace-nowrap">SHERIDAN COLLEGE SDNE</span>
          <span className="text-zinc-600">|</span>
          <span className="whitespace-nowrap">ONTARIO, CANADA</span>
        </div>
      </div>

      {/* Main Hero Card Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Hero Narrative & Interactive Controls */}
        <div className="order-2 w-full xl:order-1 xl:col-span-5 bg-[#0a1020]/85 border-2 border-[#1e2b4d] hover:border-[#00f0ff]/60 transition-all p-5 sm:p-7 xl:p-8 techno-cut backdrop-blur-md shadow-2xl flex flex-col justify-between space-y-6 relative group">
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
                Software Developer • Network Systems Engineer • Technical Program Delivery
              </p>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
              <strong className="font-black text-white">Student at Sheridan College</strong> studying Software Development and Network Engineering (SDNE). I transform curiosity into code, breaking systems to understand them and building solutions that matter.
              <br />
              <br />
              My approach? Dive deep, experiment endlessly, and create meaningful projects that push boundaries and accelerate growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-[#1e2b4d] pt-4">
            <button
              type="button"
              onClick={() => {
                playCyberBlip(800);
                setActiveTab('projects');
              }}
              className="w-full px-4 py-3 bg-[#050811] text-[#38bdf8] border-2 border-[#38bdf8]/60 font-bold text-xs techno-cut hover:bg-[#38bdf8]/15 hover:text-white transition-all uppercase tracking-wider text-center"
            >
              [ EXPLORE PROJECTS ]
            </button>
            <button
              type="button"
              onClick={() => {
                playCyberBlip(750);
                setActiveTab('contact');
              }}
              className="w-full px-4 py-3 bg-[#050811] text-zinc-300 border border-[#1e2b4d] font-bold text-xs techno-cut hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all uppercase tracking-wider text-center"
            >
              [ CONTACT ME ]
            </button>
          </div>
        </div>

        {/* Right Column: Techno Profile & Telemetry Simulator */}
        <div className="order-1 w-full xl:order-2 xl:col-span-7 bg-[#0a1020]/85 border-2 border-[#1e2b4d] hover:border-[#00f0ff]/60 transition-all p-5 sm:p-7 techno-cut backdrop-blur-md shadow-2xl flex flex-col justify-between space-y-4">
          {/* Top Telemetry Header Bar */}
          <div className="flex flex-col gap-3 border-b border-[#1e2b4d] pb-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-xs text-[#00f0ff] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
              <span>SYSTEM_TELEMETRY // RELIC_HUD</span>
            </div>
            <button
              type="button"
              onClick={handleProbeGateway}
              disabled={isProbing}
              className="w-full whitespace-nowrap text-[10px] bg-[#00f0ff]/10 hover:bg-[#00f0ff] text-[#00f0ff] hover:text-[#050811] border border-[#00f0ff]/40 px-2.5 py-1 font-bold techno-cut transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 sm:w-auto sm:shrink-0"
            >
              <span className={isProbing ? 'animate-spin' : ''}>⚙</span>
              <span>{isProbing ? 'PROBING...' : '[ PROBE GATEWAY ]'}</span>
            </button>
          </div>

          {/* Profile Card Header with Avatar */}
          <div className="flex w-full items-center justify-between gap-3 sm:gap-6 text-center">
            <div className="relative h-32 w-32 shrink-0 border-2 border-[#00f0ff] p-1 shadow-cyber-cyan techno-cut sm:h-40 sm:w-40 xl:h-48 xl:w-48">
              <div className="relative h-full w-full overflow-hidden bg-[#050811] techno-cut">
                <Image
                  src="/headshot.jpg"
                  alt="Marcus Podnar"
                  width={192}
                  height={192}
                  sizes="(max-width: 640px) 128px, (max-width: 1280px) 160px, 192px"
                  className="block h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="flex-1 space-y-1">
              <span className="text-[10px] text-zinc-400 font-bold block">CALLSIGN:</span>
              <p className="text-white font-black text-base sm:text-lg tracking-wide">{PERSONAL_DATA.handle}</p>
              <span className="text-xs text-[#00f0ff] font-extrabold block">
                Sheridan College (SDNE)
              </span>
              <p className="text-[11px] text-zinc-400 font-medium">Ontario, Canada</p>
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
          <div className="bg-[#050811] p-3 border border-[#1e2b4d] techno-cut text-[10px] text-zinc-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 min-h-[56px]">
            <span className="min-w-0 flex-1 break-words leading-relaxed">
              {probeLog ? (
                <span className="text-[#00ffcc] font-bold">&gt; {probeLog}</span>
              ) : (
                <span className="text-zinc-400">&gt; Node telemetry active. Click probe to simulate packets.</span>
              )}
            </span>
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest shrink-0 sm:ml-2 self-end sm:self-auto">TLS 1.3</span>
          </div>
        </div>
      </div>

    </div>
  );
}