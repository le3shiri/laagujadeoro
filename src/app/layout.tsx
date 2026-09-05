import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileCTA } from '@/components/layout/MobileCTA';
import { WhatsAppFloatButton } from '@/components/ui/WhatsAppFloatButton';
import { BUSINESS } from '@/lib/business';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: BUSINESS.seo.defaultTitle,
    template: '%s | La Aguja de Oro',
  },
  description: BUSINESS.seo.defaultDescription,
  metadataBase: new URL(BUSINESS.seo.siteUrl),
  keywords: [
    'arreglos de ropa Avilés',
    'modista Avilés',
    'sastre Avilés',
    'taller de costura Avilés',
    'arreglar bajos pantalón Avilés',
    'cambiar cremalleras Avilés',
    'ajustar vestidos Avilés',
    'arreglos de chaquetas y abrigos',
    'costura y confección Asturias',
    'reparación de ropa Avilés',
  ],
  authors: [{ name: BUSINESS.owner.name }],
  creator: BUSINESS.owner.name,
  publisher: BUSINESS.name,
  formatDetection: {
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/images/logo.png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: BUSINESS.seo.siteUrl,
    siteName: 'La Aguja de Oro',
    title: BUSINESS.seo.defaultTitle,
    description: BUSINESS.seo.defaultDescription,
    images: [
      {
        url: BUSINESS.seo.ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'La Aguja de Oro — Taller de Arreglos de Ropa en Avilés, Asturias',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: BUSINESS.seo.defaultTitle,
    description: BUSINESS.seo.defaultDescription,
    images: [BUSINESS.seo.ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'googled00373fa02fa5a12.html',
  },
  other: {
    'geo.region': 'ES-AS',
    'geo.placename': 'Avilés, Asturias',
    'geo.position': `${BUSINESS.location.lat};${BUSINESS.location.lng}`,
    'ICBM': `${BUSINESS.location.lat}, ${BUSINESS.location.lng}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="flex flex-col min-h-screen pb-mobile-cta">
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCTA />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
