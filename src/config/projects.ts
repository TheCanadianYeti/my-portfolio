export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'Full-Stack' | 'Systems' | 'CLI/Tools' | 'AI/ML';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: 'Deployed' | 'Active Development' | 'Archived';
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'rubix',
    title: 'Rubix',
    description:
      'Automated Java tool to identify and break multi-layer ciphers and encodings using Chi-Square, Index of Coincidence, and dictionary attacks. Includes GUI and CLI.',
    longDescription:
      'Engineered with modular frequency analysis pipelines, automated cipher classification, and multithreaded brute-force decryption. Features dual Swing GUI and headless ANSI CLI operational modes with high-throughput dictionary verification.',
    tags: ['Java', 'Cryptography', 'Chi-Square Analysis', 'Swing GUI', 'CLI'],
    category: 'Systems',
    githubUrl: 'https://github.com/TheCanadianYeti/Rubix',
    featured: true,
    status: 'Deployed',
  },
  {
    id: 'souschef',
    title: 'Souschef',
    description:
      'A recipe app that captures, parses, and guides you through cooking using AI. Built with Next.js, React, Gemma API, ElevenLabs, and Pexels, with a PostgreSQL backend and deployed on Vercel.',
    longDescription:
      'Created at BearHacks 2026. Delivers hands-free voice-directed culinary workflows using Gemma API for recipe step decomposition and ElevenLabs API for natural voice narration, backed by PostgreSQL, Redis, and Express microservices.',
    tags: ['Next.js', 'React', 'Gemma API', 'ElevenLabs API', 'PostgreSQL', 'Vercel'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/TheCanadianYeti/Souschef',
    featured: true,
    status: 'Deployed',
  },
  {
    id: 'terlatro',
    title: 'Terlatro',
    description:
      'Terminal-based poker roguelike in Java inspired by Balatro. Features custom hand evaluation, Joker synergy multipliers, shop economy, and ANSI CLI rendering.',
    longDescription:
      'Architected from scratch in Java utilizing pure object-oriented design patterns. Features dynamic Deck, PlayingCard, and JokerCard synergy engines, procedural shop item generation, and high-performance ANSI terminal graphics rendering.',
    tags: ['Java', 'OOP', 'Roguelike', 'ANSI CLI', 'Game Dev'],
    category: 'CLI/Tools',
    githubUrl: 'https://github.com/TheCanadianYeti/Terlatro',
    featured: true,
    status: 'Active Development',
  },
  {
    id: 'heic-to-jpg',
    title: 'heicToJpg',
    description:
      'A lightweight, 100% offline HEIC to JPG desktop converter. Zero network requests, zero uploads, and no admin rights required. Your photos and EXIF data never leave your device.',
    longDescription:
      'Privacy-first desktop utility built in Python with Tkinter and Pillow, compiled into a standalone Windows binary via PyInstaller. Guarantees zero network outbound traffic with batch conversion and EXIF preservation.',
    tags: ['Python', 'Pillow', 'Tkinter', 'PyInstaller', 'Desktop App', 'Offline'],
    category: 'CLI/Tools',
    githubUrl: 'https://github.com/TheCanadianYeti/heicToJpg',
    featured: false,
    status: 'Deployed',
  },
  {
    id: 'my-portfolio',
    title: 'my-portfolio',
    description:
      'Modern techno-cyber modular portfolio built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Self-hosted on enterprise infrastructure via Caddy reverse proxy with zero-retention in-memory contact routing and a 3-track resume selector.',
    longDescription:
      'Architected with strict separation of concerns, 60fps Canvas particle constellation with mouse proximity reactivity, transient in-memory Nodemailer SMTP dispatch, and high-contrast techno-blue HUD styling. Deployed and self-hosted via Caddy reverse proxy on enterprise homelab infrastructure with automated TLS and zero external state tracking.',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Caddy', 'Canvas API', 'Nodemailer'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/TheCanadianYeti/my-portfolio',
    liveUrl: '/',
    featured: true,
    status: 'Deployed',
  },
  {
    id: 'wine-web',
    title: 'WineWeb',
    description:
      'Client-side wine cataloguing web app using Google Sheets and Forms as a serverless datastore, PapaParse for CSV ingestion, and Caddy on TrueNAS for deployment.',
    longDescription:
      'Serverless client-side web application built in vanilla modern JavaScript, HTML5, and CSS3. Directly consumes real-time Google Sheets feeds through client-side PapaParse CSV streaming with zero database overhead, deployed via Caddy reverse proxy on TrueNAS.',
    tags: ['JavaScript', 'HTML5/CSS3', 'PapaParse', 'Google Sheets API', 'Caddy'],
    category: 'Full-Stack',
    githubUrl: 'https://github.com/TheCanadianYeti/WineWeb',
    liveUrl: 'https://wine.podnar.ca',
    featured: false,
    status: 'Deployed',
  },
];