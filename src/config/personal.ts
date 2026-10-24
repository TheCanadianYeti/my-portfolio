export const PERSONAL_DATA = {
  name: 'Marcus Podnar',
  preferredName: 'Yeti',
  title: 'Software Developer, Network Systems Engineer & Incoming TPM Intern',
  incomingRole: 'Technical Product Manager (TPM) Intern @ Scotiabank (Winter 2027)',
  handle: 'TheCanadianYeti',
  location: 'Ontario, Canada',
  timezone: 'Eastern Time (EST)',
  email: 'podnar.dev@gmail.com',
  github: 'https://github.com/TheCanadianYeti',
  linkedin: 'https://www.linkedin.com/in/marcus-podnar/',
  status: 'Incoming TPM Intern @ Scotiabank // Winter 2027',
  bio: [
    'Incoming Technical Product Manager (TPM) Intern at Scotiabank for the Winter 2027 term.',
    'Student in the Software Development & Network Engineering (SDNE) program at Sheridan College.',
    'Enterprise IT Support Contractor managing workstation diagnostics, hardware deployment, and system uptime.',
    'Systems builder operating self-hosted homelab infrastructure (Proxmox VE, TrueNAS Core, Docker, Tailscale WireGuard mesh).',
    'Proficient across object-oriented programming (Java, Python, TypeScript), SQL databases, and packet-level network analysis (Wireshark).',
  ],
};

export interface ResumeOption {
  id: 'softdev' | 'it' | 'cybersec';
  track: string;
  title: string;
  badge: string;
  description: string;
  skillsHighlight: string[];
  fileName: string;
  downloadUrl: string;
  fileSize: string;
}

export const RESUME_OPTIONS: ResumeOption[] = [
  {
    id: 'softdev',
    track: 'softdev',
    title: 'Software Engineering',
    badge: 'DEV // FULL-STACK',
    description: 'Specialized for Java backend, Spring Boot, Python, TypeScript, React, Next.js, and object-oriented systems design.',
    skillsHighlight: ['Java & OOP', 'TypeScript & React', 'Next.js 14', 'Python', 'SQL & APIs'],
    fileName: 'resume-marcuspodnar.pdf',
    downloadUrl: '/resumes/softdev/resume-marcuspodnar.pdf',
    fileSize: '95 KB',
  },
  {
    id: 'it',
    track: 'it',
    title: 'IT Support & Systems',
    badge: 'IT // SYSADMIN',
    description: 'Highlights enterprise workstation diagnostics, Proxmox VE hypervisors, TrueNAS, Linux administration, Docker, and hardware deployment.',
    skillsHighlight: ['Linux Admin', 'Proxmox VE', 'TrueNAS / ZFS', 'Docker', 'Hardware Diagnostics'],
    fileName: 'resume-marcuspodnar.pdf',
    downloadUrl: '/resumes/it/resume-marcuspodnar.pdf',
    fileSize: '95 KB',
  },
  {
    id: 'cybersec',
    track: 'cybersec',
    title: 'Cybersecurity & Networks',
    badge: 'SEC // NETWORKING',
    description: 'Focuses on deep packet inspection (Wireshark), cipher analysis engines, Cisco Packet Tracer, WireGuard mesh, and network routing.',
    skillsHighlight: ['Wireshark', 'Cisco Packet Tracer', 'WireGuard / Tailscale', 'Cipher Analysis', 'Firewalls'],
    fileName: 'resume-marcuspodnar.pdf',
    downloadUrl: '/resumes/cybersec/resume-marcuspodnar.pdf',
    fileSize: '93 KB',
  },
];