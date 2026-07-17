import type { Metadata } from 'next';
import './globals.css';
import { CONTACT_INFO } from '@/lib/config';

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: 'Devendra Travels - Best Tour Packages in India | Book Now',
  description: 'Discover amazing tour packages to Himalayas, Rajasthan, Kerala & more. Expert travel guides, affordable prices, best customer service. Book your adventure today!',
  keywords: 'tour packages India, travel agency, vacation booking, Himalayas tours, Rajasthan tours, Kerala tours, affordable travel',
  authors: [{ name: 'Devendra Travels' }],
  openGraph: {
    title: 'Devendra Travels - Best Tour Packages in India',
    description: 'Book your dream vacation with expert guides and affordable packages',
    type: 'website',
    url: 'https://yourdomain.com',
    images: [{
      url: 'https://yourdomain.com/og-image.jpg',
      width: 1200,
      height: 630,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devendra Travels - Tour Packages',
    description: 'Book your dream vacation today',
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  alternates: {
    canonical: '/',
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
        <link rel="canonical" href="https://yourdomain.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TravelAgency',
              name: 'Devendra Travels',
              image: 'https://yourdomain.com/logo.png',
              description: 'Best tour and travel packages in India',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Meerut',
                addressLocality: 'Meerut',
                addressRegion: 'Uttar Pradesh',
                postalCode: '250001',
                addressCountry: 'IN',
              },
              telephone: CONTACT_INFO.phone,
              email: CONTACT_INFO.email,
              url: 'https://yourdomain.com',
              sameAs: [
                'https://www.facebook.com/devendratravels',
                'https://www.instagram.com/devendratravels',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}