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
        id: 'terlatro',
        title: 'Terlatro',
        description: 'Terminal-based Balatro poker roguelike game developed in Java.',
        longDescription:
            'Features custom Card, PlayingCard, JokerCard, and Deck object-oriented structures with pure ASCII art rendering and dynamic shop generation.',
        tags: ['Java', 'CLI', 'OOP', 'ASCII Art'],
        category: 'CLI/Tools',
        githubUrl: 'https://github.com/TheCanadianYeti/Terlatro',
        featured: true,
        status: 'Active Development',
    },
    {
        id: 'rubix',
        title: 'Rubix Engine',
        description: 'Automated Java cipher detection & multi-layer decryption engine.',
        longDescription:
            'Utilizes Chi-Square frequency analysis, Index of Coincidence, dictionary verification, with Swing GUI and CLI operational modes.',
        tags: ['Java', 'Cryptography', 'Swing GUI', 'CLI'],
        category: 'Systems',
        githubUrl: 'https://github.com/TheCanadianYeti/Rubix',
        featured: true,
        status: 'Deployed',
    },
    {
        id: 'souschef',
        title: 'Souschef AI',
        description: 'Smart culinary assistant platform featuring hands-free voice navigation.',
        longDescription:
            'Co-created at BearHacks 2026. Built with Next.js, React, Express, PostgreSQL, Redis, Gemma API, and ElevenLabs API for step-by-step voice guidance.',
        tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Gemma API', 'ElevenLabs API'],
        category: 'AI/ML',
        githubUrl: 'https://github.com/TheCanadianYeti/Souschef',
        featured: true,
        status: 'Deployed',
    },
    {
        id: 'wine-web',
        title: 'WineWeb Catalog',
        description: 'Client-side wine cataloguing web application hosted at wine.podnar.ca.',
        longDescription:
            'Built with vanilla HTML, CSS, JavaScript, and PapaParse. Parses Google Sheets CSV feeds instantly on the client side without database overhead.',
        tags: ['JavaScript', 'HTML5', 'CSS3', 'PapaParse', 'Google Sheets API'],
        category: 'Full-Stack',
        githubUrl: 'https://github.com/TheCanadianYeti/WineWeb',
        liveUrl: 'https://wine.podnar.ca',
        featured: false,
        status: 'Deployed',
    },
    {
        id: 'heic-converter',
        title: 'Local HEIC Converter',
        description: 'Offline privacy-first HEIC to JPG desktop conversion tool.',
        longDescription:
            'Built in Python using Tkinter and Pillow, compiled into a standalone Windows executable with PyInstaller for zero-network local file processing.',
        tags: ['Python', 'Tkinter', 'Pillow', 'PyInstaller', 'Desktop App'],
        category: 'CLI/Tools',
        githubUrl: 'https://github.com/TheCanadianYeti/heicToJpg',
        featured: false,
        status: 'Deployed',
    },
];