import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Siyanda Dhlamini | Portfolio',
  description:
    "Siyanda Dhlamini's professional online portfolio showcasing skills, experiences, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          roboto.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
