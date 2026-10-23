export type Theme = 'matrix' | 'cyberpunk' | 'amber' | 'mono';

export interface ThemeConfig {
    name: string;
    bg: string;
    text: string;
    border: string;
    accent: string;
}

export const THEMES: Record<Theme, ThemeConfig> = {
    matrix: {
        name: 'Matrix Green',
        bg: 'bg-[#0a0a0c]',
        text: 'text-emerald-400',
        border: 'border-emerald-800/60',
        accent: '#00ff66',
    },
    cyberpunk: {
        name: 'Cyberpunk Neon',
        bg: 'bg-[#090814]',
        text: 'text-cyan-400',
        border: 'border-cyan-800/60',
        accent: '#00f0ff',
    },
    amber: {
        name: 'Amber CRT',
        bg: 'bg-[#0d0a00]',
        text: 'text-amber-400',
        border: 'border-amber-800/60',
        accent: '#ffb000',
    },
    mono: {
        name: 'Sleek Mono',
        bg: 'bg-[#0a0a0a]',
        text: 'text-zinc-300',
        border: 'border-zinc-700/60',
        accent: '#ffffff',
    },
};