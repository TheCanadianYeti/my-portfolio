export const PERSONAL_DATA = {
    name: 'Marcus Podnar',
    title: 'Software Developer & Network Engineer',
    handle: 'TheCanadianYeti',
    location: 'Brampton, Ontario, Canada',
    email: 'podnar.dev@gmail.com',
    github: 'https://github.com/TheCanadianYeti',
    linkedin: 'https://linkedin.com/in/marcus-podnar',
    status: 'ONLINE - Available for Winter 2027 Opportunities',
    bio: [
        '[SYSTEM LOG]: Enrolled in Software Development & Network Engineering (SDNE) program at Sheridan College.',
        '[SYSTEM LOG]: IT Support Contractor for Campbell Bros. Movers & TransferEASE Relocation.',
        '[SYSTEM LOG]: Maintained self-hosted enterprise homelab (Proxmox VE, TrueNAS, Caddy, Tailscale, Docker).',
        '[SYSTEM LOG]: Proficient in Java, Python, TypeScript, SQL, Linux administration, and network packet capture.',
    ],
    pgpKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: OpenPGP.js v4.10.10
Comment: https://openpgpjs.org

mQENBF/SampleKeyBlockForMarcusPodnarPortfolio...
=abc1
-----END PGP PUBLIC KEY BLOCK-----`,
};

export interface ResumeOption {
    id: string;
    title: string;
    badge: string;
    description: string;
    fileName: string;
    downloadUrl: string;
}

export const RESUME_OPTIONS: ResumeOption[] = [
    {
        id: 'software-dev',
        title: 'Software Development Resume',
        badge: 'DEV / FULL-STACK',
        description: 'Focused on Java, Spring Boot, Python, TypeScript, React, Next.js, and object-oriented architecture.',
        fileName: 'resume-marcuspodnar.pdf',
        downloadUrl: '/resumes/softdev/resume-marcuspodnar.pdf',
    },
    {
        id: 'it-systems',
        title: 'IT Support & Systems Engineering Resume',
        badge: 'IT / SYSADMIN',
        description: 'Highlights workstation diagnostics, Proxmox VE, TrueNAS, Linux administration, Docker, and hardware configuration.',
        fileName: 'resume-marcuspodnar.pdf',
        downloadUrl: '/resumes/it/resume-marcuspodnar.pdf',
    },
    {
        id: 'cybersec',
        title: 'Cybersecurity & Network Engineering Resume',
        badge: 'SEC / NETWORKING',
        description: 'Focuses on packet inspection (Wireshark), cryptography engines, Cisco Packet Tracer, Tailscale VPN, and cipher analysis.',
        fileName: 'resume-marcuspodnar.pdf',
        downloadUrl: '/resumes/cybersec/resume-marcuspodnar.pdf',
    },
];