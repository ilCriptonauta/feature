import type { Metadata, Viewport } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/i18n/LanguageContext';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'OOX Features | Le Funzionalità Esclusive di OOX',
  description: 'Scopri l’ecosistema di funzionalità OOX: Marketplace NFT, Web3 Identity, Creator Tools e Smart Contract Security su MultiversX.',
  metadataBase: new URL('https://ooxfeatures.art'),
  openGraph: {
    title: 'OOX Features - Piattaforma Web3 & Marketplace',
    description: 'Vetrina ufficiale delle funzionalità OOX su MultiversX.',
    url: 'https://ooxfeatures.art',
    siteName: 'OOX Features',
    images: [
      {
        url: '/og/og-home.png',
        width: 1200,
        height: 630,
        alt: 'OOX Features Overview',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OOX Features - Piattaforma Web3 & Marketplace',
    description: 'Vetrina ufficiale delle funzionalità OOX su MultiversX.',
    site: '@OOXart',
    creator: '@OOXart',
    images: ['/og/og-home.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('oox_theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-oox-bg-light dark:bg-oox-bg-dark text-slate-900 dark:text-slate-100 antialiased selection:bg-cyan-500 selection:text-black">
        <LanguageProvider>
          <Header />
          <main className="flex-1 w-full max-w-6xl mx-auto px-4 pt-6">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
