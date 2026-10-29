import type { Metadata } from 'next';
import './globals.css';
import { SITE_URL, CONTACT_INFO } from '@/lib/config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Devendra Travels | Tours & Taxi in Muradnagar, Ghaziabad',
    template: '%s | Devendra Travels',
  },
  description: 'Book private taxi services and India tour packages from Muradnagar, Ghaziabad. Plan Agra, Delhi, Uttarakhand, Rajasthan, and more with an experienced local driver.',
  keywords: 'Muradnagar travel agency, Ghaziabad taxi service, tours from Ghaziabad, private taxi Muradnagar, India tour packages, Delhi NCR tours, Agra day trip',
  authors: [{ name: 'Devendra Travels' }],
  openGraph: {
    title: 'Devendra Travels | Tours & Taxi in Muradnagar, Ghaziabad',
    description: 'Book private taxi services and India tour packages from Muradnagar, Ghaziabad.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Devendra Travels',
    images: [{
      url: `${SITE_URL}/car-photo.jpg`,
      width: 1200,
      height: 630,
      alt: 'Devendra Travels Tour Vehicles and Packages',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devendra Travels | Tours & Taxi in Ghaziabad',
    description: 'Plan India tours and book a private taxi from Muradnagar, Ghaziabad.',
    images: [`${SITE_URL}/car-photo.jpg`],
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
  alternates: {
    canonical: './',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TravelAgency',
              name: 'Devendra Travels',
              image: `${SITE_URL}/car-photo.jpg`,
              description: 'Best tour and travel packages in India',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Muradnagar, Ghaziabad',
                addressRegion: 'Uttar Pradesh',
                addressCountry: 'IN',
              },
              telephone: CONTACT_INFO.phone,
              email: CONTACT_INFO.email,
              url: SITE_URL,
              priceRange: '₹₹',
              sameAs: [
                CONTACT_INFO.facebook,
                CONTACT_INFO.instagram,
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <WhatsAppButton />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
