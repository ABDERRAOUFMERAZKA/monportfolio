import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Technical Lead Front-End | React & Flutter Expert',
  description:
    '10+ years experience building scalable web and mobile applications. Specialized in React ecosystems, design systems, performance optimization and Flutter mobile development.',
  keywords: [
    'Technical Lead',
    'Front-End Developer',
    'React',
    'Next.js',
    'Flutter',
    'TypeScript',
    'GraphQL',
    'Design Systems',
    'Performance',
    'Accessibility',
  ],
  authors: [{ name: 'Technical Lead Front-End' }],
  openGraph: {
    title: 'Technical Lead Front-End | React & Flutter Expert',
    description:
      '10+ years experience building scalable web and mobile applications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Lead Front-End | React & Flutter Expert',
    description:
      '10+ years experience building scalable web and mobile applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
