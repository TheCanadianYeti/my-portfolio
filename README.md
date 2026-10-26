# Marcus Podnar
### Software Developer & Network Systems Engineer

A personal portfolio built to showcase Marcus Podnar's software projects, technical experience, and skills across software development, IT systems, and networking. The site pairs a responsive cyberpunk-inspired interface with interactive project browsing and downloadable, role-specific resumes.

---

## Features

- **Interactive portfolio sections:** Navigate Home, About, Projects, and Contact views, with matching routes such as `/projects` and `/contact`.
- **Project archive:** Browse projects by category, filter by technology tags, and open project details and links.
- **Three resume tracks:** Choose and download a PDF tailored to software engineering, IT support and systems, or cybersecurity and networks.
- **Responsive techno interface:** Dark HUD styling, local Geist Mono font, and an animated Canvas background with mouse-reactive particles and click effects.
- **Optional sound effects:** Enable or disable interface sounds from the navigation.
- **Privacy-conscious contact form:** Compose a prefilled email in your device's email app. The form does not submit data to a server.
- **Standalone Docker deployment:** Build and run the production app in a Node.js container.

## Tech Stack

- Next.js 14 App Router and React 18
- TypeScript
- Tailwind CSS
- Framer Motion and Lucide React
- Node.js 20 for the included Docker image

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Installation

Clone the repository and install its dependencies:

```powershell
git clone https://github.com/TheCanadianYeti/my-portfolio.git
cd my-portfolio
npm install
```

Start the development server:

```powershell
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run the configured Next.js lint command |

## Docker

The Dockerfile uses a multi-stage build and Next.js standalone output to create a production image:

```powershell
docker build -t my-portfolio .
docker run --rm -p 3000:3000 my-portfolio
```

Then visit [http://localhost:3000](http://localhost:3000).

## Project Structure

```text
src/
  app/          Next.js routes, global styles, and metadata
  components/   Portfolio sections and interactive UI
  config/       Personal profile, resume, and project data
  lib/          Shared utilities such as sound effects
public/
  resumes/      Downloadable PDF resumes by career track
```

## Contact

- **GitHub:** [TheCanadianYeti](https://github.com/TheCanadianYeti)
- **LinkedIn:** [Marcus Podnar](https://www.linkedin.com/in/marcus-podnar/)
- **Email:** [podnar.dev@gmail.com](mailto:podnar.dev@gmail.com)
