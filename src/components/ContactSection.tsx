'use client';

import React, { useState } from 'react';
import { PERSONAL_DATA } from '@/config/personal';

export default function ContactSection() {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      });

      if (res.ok) {
        setContactStatus('success');
        setContactForm({ name: '', email: '', message: '' });
      } else {
        setContactStatus('error');
      }
    } catch {
      setContactStatus('error');
    }
  };

  return (
    <section className="space-y-6 font-mono relative z-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#1e2b4d] pb-3 gap-2">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-6 bg-[#00f0ff] techno-cut" />
          <h2 className="text-xl font-black text-[#00f0ff] tracking-wider">
            {"// 03. CONTACT_DISPATCH"}
          </h2>
        </div>
        <span className="text-xs text-zinc-400 font-semibold">
          {"// Transient Memory Buffer & Direct Channels"}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Transient Contact Form (lg:col-span-7) */}
        <form
          onSubmit={handleContactSubmit}
          className="lg:col-span-7 space-y-4 bg-[#0a1020]/90 p-6 sm:p-8 border-2 border-[#1e2b4d] hover:border-[#00f0ff]/60 transition-colors techno-cut shadow-xl backdrop-blur-md relative flex flex-col justify-between"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-1 pt-1 border-b border-[#1e2b4d] pb-2">
              <span className="text-xs text-[#00f0ff] font-black uppercase tracking-wider">
                {"// TRANSMISSION FORM"}
              </span>
              <span className="text-[10px] bg-[#00ffcc]/10 text-[#00ffcc] px-2 py-0.5 border border-[#00ffcc]/40 font-bold techno-cut">
                ZERO RETENTION BUFFER
              </span>
            </div>

            <div>
              <label className="block text-xs text-zinc-300 font-bold mb-1.5">$ SENDER_NAME:</label>
              <input
                type="text"
                required
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full bg-[#050811] border border-[#1e2b4d] text-white p-3 text-xs font-mono focus:border-[#00f0ff] focus:outline-none techno-cut transition-colors font-medium placeholder-zinc-600"
                placeholder="e.g. Technical Recruiter / Engineering Manager"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-300 font-bold mb-1.5">$ SENDER_EMAIL:</label>
              <input
                type="email"
                required
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full bg-[#050811] border border-[#1e2b4d] text-white p-3 text-xs font-mono focus:border-[#00f0ff] focus:outline-none techno-cut transition-colors font-medium placeholder-zinc-600"
                placeholder="e.g. recruiter@company.com"
              />
            </div>

            <div>
              <label className="block text-xs text-zinc-300 font-bold mb-1.5">$ TRANSMISSION_PAYLOAD:</label>
              <textarea
                required
                rows={4}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full bg-[#050811] border border-[#1e2b4d] text-white p-3 text-xs font-mono focus:border-[#00f0ff] focus:outline-none techno-cut transition-colors font-medium placeholder-zinc-600"
                placeholder="Enter inquiry, interview details, or message payload..."
              />
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <button
              type="submit"
              disabled={contactStatus === 'sending'}
              className="w-full py-3 bg-[#00f0ff] text-[#050811] font-black text-xs hover:bg-[#38bdf8] transition-all shadow-cyber-cyan techno-cut disabled:opacity-50 uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>{contactStatus === 'sending' ? 'TRANSMITTING VIA MEMORY BUFFER...' : '[ TRANSMIT MESSAGE ]'}</span>
              <span className="text-sm font-black">&rarr;</span>
            </button>

            {contactStatus === 'success' && (
              <div className="text-xs text-[#00ffcc] bg-[#00ffcc]/10 p-3.5 border border-[#00ffcc]/50 techno-cut space-y-1">
                <p className="font-extrabold">✔ Transmission routed directly to {PERSONAL_DATA.email}</p>
                <p className="text-zinc-300 text-[11px]">
                  Server memory buffer flushed. Zero message logs or telemetry retained.
                </p>
              </div>
            )}

            {contactStatus === 'error' && (
              <div className="text-xs text-[#f87171] bg-red-950/40 p-3.5 border border-red-800 techno-cut space-y-1">
                <p className="font-extrabold">✖ Transmission failed to dispatch.</p>
                <p className="text-zinc-300 text-[11px]">
                  Please contact Marcus directly at {PERSONAL_DATA.email}.
                </p>
              </div>
            )}
          </div>
        </form>

        {/* Direct Channels & Logistics (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
          {/* Direct Comms Card */}
          <div className="bg-[#0a1020]/90 border-2 border-[#38bdf8]/60 hover:border-[#38bdf8] transition-colors p-6 techno-cut space-y-4 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-[#1e2b4d] pb-2">
              <span className="text-xs text-[#38bdf8] font-black uppercase tracking-wider">
                {"// DIRECT CHANNELS"}
              </span>
              <span className="text-[10px] text-zinc-400 font-bold">24H RESPONSE</span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <span className="text-zinc-500 block text-[11px] font-bold">PRIMARY INBOX:</span>
                <a
                  href={`mailto:${PERSONAL_DATA.email}`}
                  className="text-white hover:text-[#00f0ff] underline font-extrabold text-sm transition-colors"
                >
                  {PERSONAL_DATA.email}
                </a>
              </div>

              <div>
                <span className="text-zinc-500 block text-[11px] font-bold">LINKEDIN PROFILE:</span>
                <a
                  href={PERSONAL_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#38bdf8] hover:text-[#00f0ff] underline font-extrabold text-sm flex items-center gap-1.5 transition-colors"
                >
                  <span>linkedin.com/in/marcus-podnar</span>
                  <span className="text-xs font-black">&rarr;</span>
                </a>
              </div>

              <div>
                <span className="text-zinc-500 block text-[11px] font-bold">GITHUB REPOSITORIES:</span>
                <a
                  href={PERSONAL_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00f0ff] hover:text-white underline font-extrabold text-sm flex items-center gap-1.5 transition-colors"
                >
                  <span>github.com/TheCanadianYeti</span>
                  <span className="text-xs font-black">&rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* Candidate Logistics Card */}
          <div className="bg-[#0a1020]/90 border-2 border-[#1e2b4d] p-6 techno-cut space-y-3.5 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-[#1e2b4d] pb-2">
              <span className="text-xs text-white font-black uppercase tracking-wider">
                {"// CAREER & LOGISTICS"}
              </span>
              <span className="text-[10px] bg-[#00ffcc]/10 text-[#00ffcc] border border-[#00ffcc]/40 px-2 py-0.5 font-bold techno-cut">
                CONFIRMED
              </span>
            </div>

            <div className="space-y-2 text-xs text-zinc-300">
              <div className="flex justify-between items-center py-1 border-b border-[#161c2d]">
                <span className="text-zinc-400 font-semibold">UPCOMING ROLE:</span>
                <span className="text-[#00ffcc] font-bold">TPM Intern @ Scotiabank</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#161c2d]">
                <span className="text-zinc-400 font-semibold">START TERM:</span>
                <span className="text-white font-bold">Winter 2027</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#161c2d]">
                <span className="text-zinc-400 font-semibold">CAMPUS:</span>
                <span className="text-[#38bdf8] font-bold">Sheridan College (SDNE)</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-zinc-400 font-semibold">LOCATION:</span>
                <span className="text-white font-bold">Ontario, Canada (EST)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}