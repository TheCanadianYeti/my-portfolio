'use client';

import React, { useState, useEffect } from 'react';
import { PROJECTS_DATA, Project } from '@/config/projects';
import { PERSONAL_DATA } from '@/config/personal';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Systems', 'CLI/Tools', 'AI/ML'];

  // Count projects per category
  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return PROJECTS_DATA.length;
    return PROJECTS_DATA.filter((p) => p.category === cat).length;
  };

  // Filter projects by category and tag
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesTag = !selectedTag || project.tags.includes(selectedTag);
    return matchesCategory && matchesTag;
  });

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProjectModal(null);
      }
    };
    if (activeProjectModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeProjectModal]);

  return (
    <section className="space-y-6 font-mono relative z-10">
      {/* Section Header & Category Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-[#1e2b4d] pb-3">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-6 bg-[#00f0ff] techno-cut" />
          <h2 className="text-xl font-black text-[#00f0ff] tracking-wider">
            {"// 02. NODE_ARCHIVES"}
          </h2>
        </div>

        <label className="relative block w-full md:hidden">
          <span className="sr-only">Filter projects by type</span>
          <select
            value={selectedCategory}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
              setSelectedTag(null);
            }}
            className="w-full appearance-none border border-[#00f0ff]/60 bg-[#0a1020] px-3 py-2.5 pr-10 text-xs font-bold text-[#00f0ff] focus:border-[#00f0ff] focus:outline-none techno-cut"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat} ({getCategoryCount(cat)})
              </option>
            ))}
          </select>
          <span aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#00f0ff]">
            ▾
          </span>
        </label>

        {/* Filter Categories Styled as Interactive Techno Chips */}
        <div className="hidden md:flex flex-wrap gap-2 text-xs">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = getCategoryCount(cat);
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedTag(null);
                }}
                className={`px-3 py-1.5 font-bold transition-all techno-cut flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#00f0ff] text-[#050811] border-2 border-[#00f0ff] shadow-cyber-cyan'
                    : 'bg-[#0a1020] border border-[#1e2b4d] text-zinc-300 hover:border-[#00f0ff] hover:text-[#00f0ff]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded ${isSelected ? 'bg-[#050811] text-[#00f0ff]' : 'bg-[#050811] text-zinc-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-black text-white tracking-wide"><b>My Top Projects</b></h3>
        <a
          href={PERSONAL_DATA.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#00f0ff] font-bold underline underline-offset-4 hover:text-white transition-colors"
        >
          Visit my GitHub profile ↗
        </a>
      </div>

      {/* Active Filter Indicators */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-400">
        <p className="font-medium">
          {"// Pinned software architecture archives & production deployments. Click any module to inspect technical specifications."}
        </p>
        {selectedTag && (
          <div className="flex items-center gap-2 bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-[#00f0ff] px-2.5 py-1 techno-cut text-[11px] font-bold">
            <span>FILTERED BY TAG: {selectedTag}</span>
            <button
              type="button"
              onClick={() => setSelectedTag(null)}
              className="hover:text-white ml-1 font-black"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="border-2 border-[#1e2b4d] bg-[#0a1020]/90 p-6 techno-cut hover:border-[#00f0ff] transition-all flex flex-col justify-between group shadow-xl hover:shadow-[0_0_24px_rgba(0,240,255,0.18)] relative backdrop-blur-md"
          >
            <div>
              <div className="flex justify-between items-start gap-2 mb-2.5">
                <div
                  onClick={() => setActiveProjectModal(project)}
                  className="cursor-pointer"
                >
                  <h3 className="text-white font-black text-base group-hover:text-[#00f0ff] transition-colors flex items-center gap-2">
                    <span className="text-[#00f0ff] text-xs font-black">&gt;</span>
                    <span>{project.title}</span>
                  </h3>
                </div>
                <span
                  className={`text-[10px] px-2.5 py-0.5 border font-extrabold shrink-0 techno-cut ${
                    project.status === 'Deployed'
                      ? 'border-[#00ffcc]/50 text-[#00ffcc] bg-[#00ffcc]/10'
                      : 'border-[#38bdf8]/50 text-[#38bdf8] bg-[#38bdf8]/10'
                  }`}
                >
                  {project.status.toUpperCase()}
                </span>
              </div>

              <p className="text-xs text-zinc-300 mb-5 leading-relaxed font-medium">
                {project.description}
              </p>
            </div>

            <div className="space-y-3.5 pt-3 border-t border-[#1e2b4d]">
              {/* Interactive Tag Chips */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, tIdx) => {
                  const isTagActive = selectedTag === tag;
                  return (
                    <button
                      key={tIdx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTag(isTagActive ? null : tag);
                      }}
                      className={`text-[10px] font-semibold px-2 py-0.5 border techno-cut transition-colors ${
                        isTagActive
                          ? 'bg-[#00f0ff] text-[#050811] border-[#00f0ff]'
                          : 'bg-[#050811] text-zinc-300 border-[#1e2b4d] hover:border-[#00f0ff] hover:text-[#00f0ff]'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>

              {/* Direct Card Action Links */}
              <div className="flex flex-wrap items-center justify-between pt-1 text-xs gap-2">
                <button
                  type="button"
                  onClick={() => setActiveProjectModal(project)}
                  className="text-[#38bdf8] font-bold underline hover:text-[#00f0ff] transition-colors flex items-center gap-1"
                >
                  <span>Inspect Spec</span>
                  <span>&rarr;</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] bg-[#050811] hover:bg-[#00f0ff] text-zinc-300 hover:text-[#050811] border border-[#1e2b4d] hover:border-[#00f0ff] px-2.5 py-1 font-bold techno-cut transition-all"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] bg-[#00f0ff]/10 hover:bg-[#00f0ff] text-[#00f0ff] hover:text-[#050811] border border-[#00f0ff]/50 px-2.5 py-1 font-bold techno-cut transition-all shadow-cyber-cyan"
                    >
                      {project.id === 'my-portfolio' ? 'Your On It ↗' : 'Live Demo ↗'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Project Deep Dive Modal (z-[100] with fully opaque backdrop) */}
      {activeProjectModal && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveProjectModal(null)}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#0a1020] border-2 border-[#00f0ff] p-6 md:p-8 space-y-6 shadow-[0_0_40px_rgba(0,240,255,0.3)] techno-cut max-h-[90vh] overflow-y-auto"
          >
            {/* Header / Close button */}
            <div className="flex items-start justify-between gap-4 pt-1 border-b border-[#1e2b4d] pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] px-2.5 py-0.5 border border-[#00f0ff]/50 text-[#00f0ff] bg-[#00f0ff]/10 font-extrabold techno-cut">
                    {activeProjectModal.category.toUpperCase()}
                  </span>
                  <span
                    className={`text-[10px] px-2.5 py-0.5 border font-extrabold techno-cut ${
                      activeProjectModal.status === 'Deployed'
                        ? 'border-[#00ffcc]/50 text-[#00ffcc] bg-[#00ffcc]/10'
                        : 'border-[#38bdf8]/50 text-[#38bdf8] bg-[#38bdf8]/10'
                    }`}
                  >
                    {activeProjectModal.status.toUpperCase()}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white flex items-center gap-2 tracking-wide">
                  <span className="text-[#00f0ff]">&gt;</span>
                  <span>{activeProjectModal.title}</span>
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="text-[#050811] font-black text-xs bg-[#00f0ff] hover:bg-[#38bdf8] px-3.5 py-1.5 techno-cut transition-all shadow-cyber-cyan shrink-0 uppercase tracking-wider"
              >
                [ ✕ CLOSE ]
              </button>
            </div>

            {/* Architecture Details */}
            <div className="bg-[#050811] p-5 border border-[#1e2b4d] techno-cut space-y-2">
              <span className="text-[10px] text-[#00f0ff] font-black block uppercase tracking-wider">
                {"// ARCHITECTURE & TECHNICAL SPECIFICATION"}
              </span>
              <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                {activeProjectModal.longDescription}
              </p>
            </div>

            {/* Stack Tags */}
            <div className="space-y-2">
              <span className="text-[10px] text-zinc-400 font-extrabold block uppercase tracking-wider">
                {"// TECHNOLOGIES & TOOLS DEPLOYED"}
              </span>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#050811] text-[#38bdf8] font-semibold px-3 py-1 border border-[#1e2b4d] techno-cut"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-4 border-t border-[#1e2b4d] flex flex-wrap gap-3 items-center justify-between text-xs">
              {activeProjectModal.githubUrl && (
                <a
                  href={activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#00f0ff] text-[#050811] font-extrabold hover:bg-[#38bdf8] transition-all techno-cut shadow-cyber-cyan flex items-center gap-2 uppercase tracking-wider"
                >
                  <span>GitHub Repository</span>
                  <span className="text-sm font-black">&rarr;</span>
                </a>
              )}
              {activeProjectModal.liveUrl && (
                <a
                  href={activeProjectModal.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#38bdf8] text-[#050811] font-extrabold hover:bg-[#00f0ff] transition-all techno-cut shadow-cyber-blue flex items-center gap-2 uppercase tracking-wider"
                >
                  <span>{activeProjectModal.id === 'my-portfolio' ? 'View This Project' : 'Launch Live Web App'}</span>
                  <span className="text-sm font-black">&rarr;</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}