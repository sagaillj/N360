import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Seed to Oaks',
  description: 'Empowering organizations through collaborative learning and growth.',
  icons: {
    icon: '/seed_to_oaks_logo_no_words.png',
    apple: '/seed_to_oaks_logo_no_words.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen bg-background-primary">
          {children}
        </main>
      </body>
    </html>
  );
} 