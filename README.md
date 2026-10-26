# my-portfolio

A personal portfolio built to showcase software projects, technical experience, and skills across software development, IT systems, and networking.

Features a responsive cyberpunk interface with interactive project browsing and downloadable role-specific resumes.

---

## Features

### Interactive portfolio views
Navigation across Home, About, Projects, and Contact routes with deep-linking support.

### Project archive
Search and filter projects by domain categories and technology stack tags.

### Role-specific resumes
Downloadable PDF resumes tailored for Software Engineering, IT Systems, and Security tracks.

### Terminal interface aesthetic
Dark HUD styling using JetBrains Mono, Framer Motion animations, and custom canvas particle effects.

### Audio interactivity
Optional, toggleable web audio sound effects for UI interactions.

### Client-side contact form
Pre-fills mailto actions directly without processing or storing user data on external servers.

### Containerized deployment
Multi-stage Docker build optimized with Next.js standalone output.

---

## Tech Stack

**Frontend**
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- JetBrains Mono
- Framer Motion
- Lucide React

**Runtime & Infrastructure**
- Node.js 20
- Docker
- Caddy

---

## Getting Started

```bash
git clone https://github.com/TheCanadianYeti/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Open http://localhost:3000.

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start Next.js development server with hot reloading |
| `npm run build` | Generate optimized production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint check across source files |

---

## Docker Deployment

Build and run using the multi-stage Dockerfile:

```bash
docker build -t my-portfolio .
docker run -d -p 3000:3000 --name portfolio my-portfolio
```

Access the application at http://localhost:3000.

---

## Project Structure

```text
src/
  app/         Next.js App Router layout, routing, and global styles
  components/  Modular UI components and animated sections
  config/      Personal profiles, project data, and site configurations
  lib/         Utility functions and audio handlers
public/
  resumes/     Static PDF assets for career tracks
```

---

## Author

[Marcus Podnar](https://marcus.podnar.ca) · [GitHub](https://github.com/TheCanadianYeti) · [LinkedIn](https://www.linkedin.com/in/marcus-podnar)
