import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Marcus Podnar | Software Developer, Network Systems & Incoming TPM @ Scotiabank',
  description:
    'Portfolio for Marcus Podnar (Yeti) — Incoming Technical Product Manager Intern at Scotiabank (Winter 2027), Sheridan College SDNE student, and software & systems engineer.',
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
    <html lang="en" className={geistMono.variable}>
      <body className="bg-[#050811] text-[#f1f5f9] font-mono min-h-screen antialiased selection:bg-[#00f0ff] selection:text-[#050811] relative">
        <div className="pointer-events-none fixed inset-0 z-30 crt-scanlines opacity-10" />
        {children}
      </body>
    </html>
  );
}