# my-portfolio

> Personal portfolio and web presence for [marcus.podnar.ca](https://marcus.podnar.ca), built with Next.js, React, TypeScript, and Tailwind CSS.

---

## Overview

`my-portfolio` is a full-featured, responsive personal web application designed to showcase software development projects, technical experience, and systems expertise. It replaces the legacy vanilla HTML/CSS implementation with a modern frontend architecture featuring dark HUD cyberpunk aesthetics, interactive project filtering, role-tailored PDF resumes, and optional sound effects.

Live site: [marcus.podnar.ca](https://marcus.podnar.ca)

---

## Tech Stack

| Domain | Technology / Tool | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js 14 (App Router) | Application structure, routing, and server-side optimizations |
| **Library** | React 18 | Declarative component UI development |
| **Language** | TypeScript | Type safety and structured data handling |
| **Styling** | Tailwind CSS | Utility-first responsive styling and layout design |
| **Typography** | JetBrains Mono | Developer/HUD terminal interface aesthetic |
| **Animations** | Framer Motion | Smooth component transitions and UI entrance animations |
| **Icons** | Lucide React | Modular SVG UI icons |
| **Runtime** | Node.js 20 | JavaScript runtime execution |
| **Deployment** | Docker & Caddy | Multi-stage containerized build and self-hosted reverse proxy |

---

## Pages / Routes

| Route | Description |
| :--- | :--- |
| `/` (Home) | Terminal-inspired hero section featuring dynamic UI elements and quick navigation |
| `/about` | Technical background, skills overview, personal background, and career focus |
| `/projects` | Filterable project archive supporting search, technology tags, and deep-linking |
| `/contact` | Direct contact hub featuring pre-filled client-side mailto action trigger |

---

## Features

### Interface & Design
- **Terminal Aesthetics:** Dark HUD styling utilizing JetBrains Mono typography, custom canvas particle effects, and high-tech accents.
- **Micro-Interactions:** Custom animations powered by Framer Motion and an optional toggleable Web Audio API sound effect system.
- **Responsive Layout:** Adaptive design tailored for fluid presentation across desktop, tablet, and mobile devices.

### Functionality & Experience
- **Interactive Project Filtering:** Query and sort technical projects by category domains and technology stack tags.
- **Role-Specific Resumes:** Downloadable PDF resumes tailored specifically for Software Engineering, IT Systems, and Security paths.
- **Privacy-First Contact Form:** Client-side mailto handler pre-fills user email clients without storing personal data on external servers.

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Local Development

```bash
# Clone the repository
git clone https://github.com/TheCanadianYeti/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start Next.js development server with hot reloading |
| `npm run build` | Generate optimized production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint checks across source files |

---

## Infrastructure and Deployment

The application utilizes a multi-stage Docker build utilizing Next.js `standalone` output mode to produce an optimized, low-footprint deployment container.

### Docker Commands

```bash
# Build production image
docker build -t my-portfolio .

# Run container locally
docker run -d -p 3000:3000 --name portfolio my-portfolio
```

Production builds are served via a self-hosted homelab environment routed behind Caddy, handling automatic TLS certificate provisioning and HTTPS termination.

---

## Project Structure

```text
src/
├── app/         # Next.js App Router layout, page routes, and global styling
├── components/  # Modular React components, animations, and particle effects
├── config/      # Personal profiles, project archive data, and site settings
└── lib/         # Utility functions and Web Audio API audio handlers
public/
└── resumes/     # Downloadable static PDF assets for distinct career tracks
```

---

## What I Learned

- Designing full-scale web applications leveraging Next.js 14 App Router and TypeScript.
- Creating performant, modular animations using Framer Motion combined with custom HTML5 Canvas particle systems.
- Utilizing Next.js `standalone` build targets to minimize container footprints during multi-stage Docker builds.
- Implementing Web Audio API hooks within React state boundaries to create interactive UI audio feedback loops.

---

## Status

Live and actively maintained: [marcus.podnar.ca](https://marcus.podnar.ca)

---

## Author

[Marcus Podnar](https://marcus.podnar.ca) · [GitHub](https://github.com/TheCanadianYeti) · [LinkedIn](https://www.linkedin.com/in/marcus-podnar)
