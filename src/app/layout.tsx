import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Marcus Podnar | Software Developer & Network Engineer',
    description:
        'Sleek dark terminal aesthetic personal portfolio showcasing software engineering projects, system tools, and network engineering background.',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-[#090b10] text-zinc-100 font-mono min-h-screen antialiased selection:bg-emerald-500 selection:text-black">
        {children}
        </body>
        </html>
    );
}