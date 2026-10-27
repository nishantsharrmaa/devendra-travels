import type { Metadata } from 'next';
import './globals.css';
import { SITE_URL, CONTACT_INFO } from '@/lib/config';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Devendra Travels - Best Tour Packages in India | Book Now',
    template: '%s | Devendra Travels',
  },
  description: 'Discover amazing tour packages to Himalayas, Rajasthan, Kerala & more. Expert travel guides, affordable prices, best customer service. Book your adventure today!',
  keywords: 'tour packages India, travel agency, vacation booking, Himalayas tours, Rajasthan tours, Kerala tours, affordable travel, Delhi NCR tours, Ghaziabad travel agency',
  authors: [{ name: 'Devendra Travels' }],
  openGraph: {
    title: 'Devendra Travels - Best Tour Packages in India',
    description: 'Book your dream vacation with expert guides and affordable packages',
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
    title: 'Devendra Travels - Tour Packages',
    description: 'Book your dream vacation today with experienced guides and affordable rates.',
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
                streetAddress: CONTACT_INFO.address,
                addressLocality: 'Ghaziabad',
                addressRegion: 'Uttar Pradesh',
                postalCode: '201001',
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
