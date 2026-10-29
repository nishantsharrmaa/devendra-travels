import { Metadata } from 'next';
import { CONTACT_INFO, SITE_URL } from '@/lib/config';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - Tour Booking & Taxi Enquiries',
  description: 'Get in touch with Devendra Travels. Book your dream tour, customize travel itineraries, or reserve verified taxi cabs across India. Call or WhatsApp 24/7.',
  keywords: 'contact travel agency, tour booking India, hire taxi Delhi NCR, Ghaziabad tour operator, holiday package enquiry',
  openGraph: {
    title: 'Contact Devendra Travels - Book Your Tour or Taxi',
    description: 'Reach out to plan your next adventure across India. 24/7 travel support and custom tour packages.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-earth-700 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 to-earth-700/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-saffron-400 font-body font-medium tracking-widest uppercase text-sm mb-3">
            We&apos;d Love to Hear From You
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="font-body text-earth-200 text-lg max-w-2xl mx-auto">
            Ready to plan your next adventure? Reach out and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="font-display text-4xl font-bold text-earth-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-12">
                {[
                  {
                    icon: "📍",
                    label: "Office Address",
                    value: CONTACT_INFO.address,
                  },
                  {
                    icon: "📞",
                    label: "Phone / WhatsApp",
                    value: CONTACT_INFO.phone,
                    href: `tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`,
                  },
                  {
                    icon: "📧",
                    label: "Email",
                    value: CONTACT_INFO.email,
                    href: `mailto:${CONTACT_INFO.email}`,
                  },
                  {
                    icon: "🕐",
                    label: "Working Hours",
                    value: CONTACT_INFO.hours,
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-saffron-100 flex items-center justify-center text-2xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-body font-semibold text-earth-900 text-sm uppercase tracking-wide mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="font-body text-earth-700 hover:text-saffron-600 transition-colors block">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body text-earth-700">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map container */}
              <div className="rounded-2xl overflow-hidden h-64 bg-earth-200 flex items-center justify-center shadow-md">
                <div className="text-center text-earth-500">
                  <div className="text-5xl mb-3">📍</div>
                  <p className="font-body font-medium">{CONTACT_INFO.address}</p>
                  <p className="font-body text-sm text-earth-400 mt-1">
                    Devendra Sharma Tour &amp; Travels, Muradnagar, Ghaziabad, UP
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Client Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
