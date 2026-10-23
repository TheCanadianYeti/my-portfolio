'use client';

import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '@/config/projects';

export default function ProjectsSection() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

    const filteredProjects =
        selectedCategory === 'All'
            ? PROJECTS_DATA
            : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

    return (
        <section className="space-y-6 font-mono pt-4 border-t border-emerald-900/40">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-900/60 pb-3">
                <h2 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                    <span>&gt; 02. FEATURED_PROJECTS</span>
                    <span className="text-zinc-500 font-normal text-xs">// Config Driven Array</span>
                </h2>

                <div className="flex flex-wrap gap-1.5 text-xs">
                    {['All', 'Full-Stack', 'Systems', 'CLI/Tools', 'AI/ML'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3 py-1 rounded border transition-colors ${
                                selectedCategory === cat
                                    ? 'bg-emerald-500 text-black border-emerald-500 font-bold'
                                    : 'bg-[#10131b] border-emerald-900 text-emerald-300 hover:border-emerald-600'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => setActiveProjectModal(project)}
                        className="border border-emerald-900/60 bg-[#10131b] p-5 rounded-lg hover:border-emerald-500 transition-all cursor-pointer flex flex-col justify-between group shadow-md"
                    >
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-white font-bold text-sm group-hover:text-emerald-300 transition-colors">
                                    {project.title}
                                </h3>
                                <span className="text-[10px] px-2 py-0.5 border border-emerald-800 text-emerald-400 rounded bg-emerald-950/60 font-semibold">
                  {project.status}
                </span>
                            </div>
                            <p className="text-xs text-zinc-300 mb-4 leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div>
                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {project.tags.map((tag, tIdx) => (
                                    <span
                                        key={tIdx}
                                        className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-900"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                            <span className="text-xs text-emerald-400 underline group-hover:text-emerald-200">
                View details &rarr;
              </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Project Modal */}
            {activeProjectModal && (
                <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-[#0e1117] border border-emerald-500 rounded-lg max-w-lg w-full p-6 space-y-4 relative shadow-2xl">
                        <button
                            onClick={() => setActiveProjectModal(null)}
                            className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xs font-bold bg-zinc-900 border border-zinc-700 px-2 py-1 rounded"
                        >
                            [ CLOSE X ]
                        </button>

                        <div>
              <span className="text-[10px] px-2 py-0.5 border border-emerald-800 text-emerald-400 rounded bg-emerald-950/60 font-semibold inline-block mb-2">
                {activeProjectModal.category} • {activeProjectModal.status}
              </span>
                            <h3 className="text-lg font-bold text-white">{activeProjectModal.title}</h3>
                        </div>

                        <p className="text-xs text-zinc-300 leading-relaxed">
                            {activeProjectModal.longDescription}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                            {activeProjectModal.tags.map((tag, idx) => (
                                <span key={idx} className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-900">
                  {tag}
                </span>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-emerald-900/60 flex justify-between items-center text-xs">
                            {activeProjectModal.githubUrl && (
                                <a
                                    href={activeProjectModal.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1.5 bg-emerald-500 text-black font-bold rounded hover:bg-emerald-400 transition-colors"
                                >
                                    GitHub Repository &rarr;
                                </a>
                            )}
                            {activeProjectModal.liveUrl && (
                                <a
                                    href={activeProjectModal.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1.5 border border-emerald-600 text-emerald-300 rounded hover:bg-emerald-950"
                                >
                                    Live Web App &rarr;
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}