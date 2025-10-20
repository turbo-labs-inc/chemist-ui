import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Providers } from '@/app/providers';

const inter = Inter({
  subsets: ['latin'],
});

const siteUrl = 'https://chemist-ui.dev';

export const metadata: Metadata = {
  title: 'Chemist UI · Multi-brand component lab',
  description:
    'Chemist UI delivers copy-paste ready components and theme contracts so teams can ship across Ant Design, shadcn/ui, and future design systems without rebuilding.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Chemist UI · Multi-brand component lab',
    description:
      'Copy-paste ready components, runtime theme switching, and pricing tiers for Studio, Lab, and Enterprise teams.',
    url: siteUrl,
    siteName: 'Chemist UI',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Chemist UI interface lab preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@chemistui',
    creator: '@chemistui',
    title: 'Chemist UI · Multi-brand component lab',
    description:
      'Design once and ship across design systems with Chemist UI. Copy-paste ready docs, theme adapters, and enterprise tiers.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/icon.svg',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>
          <Providers>{children}</Providers>
        </RootProvider>
      </body>
    </html>
  );
}
