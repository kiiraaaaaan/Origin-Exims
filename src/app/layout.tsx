import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif-title',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.originexims.com'),
  title: {
    default: 'Origin Exims | Merchant Exporter of Agriculture & Coir Products',
    template: '%s | Origin Exims',
  },
  description:
    'Origin Exims is a premier Coimbatore-based merchant export company connecting quality Indian agricultural produce, coco peat, and coir products to global markets worldwide.',
  keywords: [
    'Origin Exims',
    'merchant exporter Coimbatore',
    'Indian agricultural export',
    'coco peat exporter India',
    'coir fibre exporter',
    'grow bags export',
    'small onion export',
    'big onion export',
    'red chilli export',
    'Tamil Nadu exporter',
  ],
  authors: [{ name: 'Origin Exims' }],
  creator: 'Origin Exims',
  publisher: 'Origin Exims',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.originexims.com',
    siteName: 'Origin Exims',
    title: 'Origin Exims | Merchant Exporter of Agriculture & Coir Products',
    description:
      'Connecting quality Indian agricultural produce, coco peat, and coir products to global markets across UAE, Europe, USA, and Asia.',
    images: [
      {
        url: '/images/products/coco-peat/main.png',
        width: 1200,
        height: 630,
        alt: 'Origin Exims Products',
      },
    ],
  },
  verification: {
    google: 'iVStKsv3xbFFGCt1X_gZa_z9RDVoGralviIAoq6EBaA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
