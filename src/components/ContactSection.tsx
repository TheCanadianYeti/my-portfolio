'use client';

import React, { useState } from 'react';
import { PERSONAL_DATA } from '@/config/personal';

export default function ContactSection() {
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [copiedKey, setCopiedKey] = useState(false);

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

    const copyPgpKey = () => {
        navigator.clipboard.writeText(PERSONAL_DATA.pgpKey);
        setCopiedKey(true);
        setTimeout(() => setCopiedKey(false), 2000);
    };

    return (
        <section className="space-y-6 font-mono pt-4 border-t border-emerald-900/40">
            <div className="border-b border-emerald-900/60 pb-3">
                <h2 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                    <span>&gt; 03. CONTACT_DISPATCH</span>
                    <span className="text-zinc-500 font-normal text-xs">// Transient In-Memory Dispatch</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <form onSubmit={handleContactSubmit} className="space-y-4 bg-[#10131b] p-6 border border-emerald-900/80 rounded-lg shadow-md">
                    <div className="text-xs text-emerald-400 font-bold mb-1">// TRANSIENT CONTACT FORM</div>

                    <div>
                        <label className="block text-xs text-zinc-400 mb-1">$ SENDER_NAME:</label>
                        <input
                            type="text"
                            required
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            className="w-full bg-black/80 border border-emerald-900 text-zinc-200 p-2.5 text-xs font-mono focus:border-emerald-500 focus:outline-none rounded"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-zinc-400 mb-1">$ SENDER_EMAIL:</label>
                        <input
                            type="email"
                            required
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            className="w-full bg-black/80 border border-emerald-900 text-zinc-200 p-2.5 text-xs font-mono focus:border-emerald-500 focus:outline-none rounded"
                            placeholder="name@company.com"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-zinc-400 mb-1">$ MESSAGE_PAYLOAD:</label>
                        <textarea
                            required
                            rows={4}
                            value={contactForm.message}
                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                            className="w-full bg-black/80 border border-emerald-900 text-zinc-200 p-2.5 text-xs font-mono focus:border-emerald-500 focus:outline-none rounded"
                            placeholder="Write your message here..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={contactStatus === 'sending'}
                        className="w-full py-2.5 bg-emerald-500 text-black font-bold text-xs rounded hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/20"
                    >
                        {contactStatus === 'sending' ? 'DISPATCHING...' : '[ TRANSMIT MESSAGE ]'}
                    </button>

                    {contactStatus === 'success' && (
                        <p className="text-[11px] text-emerald-300 bg-emerald-950/80 p-2.5 border border-emerald-800 rounded">
                            ✔ Transmission routed to podnar.dev@gmail.com. Data cleared from server memory.
                        </p>
                    )}
                    {contactStatus === 'error' && (
                        <p className="text-[11px] text-red-300 bg-red-950/80 p-2.5 border border-red-800 rounded">
                            ✖ Failed to transmit message. Please send an email directly to podnar.dev@gmail.com.
                        </p>
                    )}
                </form>

                <div className="space-y-4">
                    <div className="bg-[#10131b] border border-emerald-900/80 p-6 rounded-lg space-y-4">
                        <div className="text-xs text-emerald-400 font-bold">// DIRECT REACHABILITY</div>

                        <div className="space-y-3 text-xs">
                            <div>
                                <span className="text-zinc-500 block text-[11px]">Primary Email:</span>
                                <a
                                    href={`mailto:${PERSONAL_DATA.email}`}
                                    className="text-emerald-300 hover:text-white underline font-semibold"
                                >
                                    {PERSONAL_DATA.email}
                                </a>
                            </div>

                            <div>
                                <span className="text-zinc-500 block text-[11px]">LinkedIn Profile:</span>
                                <a
                                    href={PERSONAL_DATA.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-300 hover:text-white underline font-semibold"
                                >
                                    {PERSONAL_DATA.linkedin}
                                </a>
                            </div>

                            <div>
                                <span className="text-zinc-500 block text-[11px]">GitHub Repositories:</span>
                                <a
                                    href={PERSONAL_DATA.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-300 hover:text-white underline font-semibold"
                                >
                                    {PERSONAL_DATA.github}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#10131b] border border-emerald-900/80 p-6 rounded-lg space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-emerald-400 font-bold">// PGP PUBLIC KEY BLOCK</span>
                            <button
                                onClick={copyPgpKey}
                                className="text-[10px] bg-emerald-950 border border-emerald-800 text-emerald-300 px-2 py-0.5 rounded hover:bg-emerald-900"
                            >
                                {copiedKey ? 'COPIED!' : '[ COPY KEY ]'}
                            </button>
                        </div>
                        <pre className="bg-black/90 border border-emerald-900/60 p-3 text-[10px] text-emerald-500/80 overflow-x-auto rounded font-mono">
              {PERSONAL_DATA.pgpKey}
            </pre>
                    </div>
                </div>
            </div>
        </section>
    );
}