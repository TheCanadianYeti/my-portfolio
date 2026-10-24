import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#00f0ff',
        'cyber-blue': '#38bdf8',
        'cyber-cobalt': '#2563eb',
        'cyber-emerald': '#00ffcc',
        'cyber-void': '#050811',
        'cyber-surface': '#0a1020',
        'cyber-card': '#0d152a',
        'cyber-card-hover': '#111b36',
        'cyber-border': '#1e2b4d',
        'cyber-border-bright': '#00f0ff',
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'cyber-cyan': '0 0 15px rgba(0, 240, 255, 0.35)',
        'cyber-blue': '0 0 15px rgba(56, 189, 248, 0.35)',
        'cyber-glow': '0 0 25px rgba(0, 240, 255, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
