import { Metadata } from 'next';
import Image from 'next/image';
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: 'About Devendra Travels - Your Trusted Travel Partner Since 2010 | India Tours',
  description: 'Learn about Devendra Travels. 15+ years of expertise creating unforgettable journeys across India. Meet our team of expert travel guides and discover why thousands trust us.',
  keywords: 'about us, travel company, experienced guides, tour operator, travel agency, Meerut',
  openGraph: {
    title: 'About Devendra Travels - Trusted Travel Partner',
    description: 'Discover our journey and expertise in creating amazing travel experiences',
    type: 'website',
    url: 'https://yourdomain.com/about',
  },
};
export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-earth-700 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 to-earth-700/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-saffron-400 font-body font-medium tracking-widest uppercase text-sm mb-3">
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            About Us
          </h1>
          <p className="font-body text-earth-200 text-lg max-w-2xl mx-auto">
            Two decades of passion, dedication, and love for India's incredible landscapes.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-saffron-600 font-body font-medium tracking-widest uppercase text-sm mb-3">
                Who We Are
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-6 leading-tight">
                Trusted Travels Since <span className="text-gradient">2005</span>
              </h2>
              <p className="font-body text-earth-700 text-lg mb-5 leading-relaxed">
                Devendra Sharma Tour & Travels was founded with a single vision — to make
                exploring India accessible, comfortable, and truly unforgettable for every
                traveller. Based in Meerut, we've been crafting personalised domestic tour
                packages for over two decades.
              </p>
              <p className="font-body text-earth-700 text-lg mb-5 leading-relaxed">
                Our founder, Devendra Sharma, believes that every journey tells a story.
                With deep knowledge of Indian geography, culture, and hospitality, we
                design trips that go beyond just visiting places — we help you experience them.
              </p>
              <p className="font-body text-earth-700 text-lg leading-relaxed">
                From the snow-capped peaks of Himachal to the golden sands of Rajasthan,
                from the spiritual ghats of Varanasi to the serene backwaters of Kerala —
                we know India, and we love sharing it with you.
              </p>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-saffron-500 to-earth-600 rounded-3xl p-10 text-white shadow-2xl">
                <div className="text-7xl mb-6">🏔️</div>
                <h3 className="font-display text-3xl font-bold mb-3">Our Promise</h3>
                <p className="font-body text-saffron-100 text-lg leading-relaxed">
                  Every tour is crafted with care, every detail is planned with precision,
                  and every traveller is treated like family.
                </p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-earth-800 text-white rounded-2xl p-6 shadow-xl w-48">
                <div className="font-display text-4xl font-bold text-saffron-400">20+</div>
                <div className="font-body text-earth-200 text-sm mt-1">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-earth-800 text-white bg-texture">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-saffron-400 font-body font-medium tracking-widest uppercase text-sm mb-3">
              What Drives Us
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤝",
                title: "Trust & Transparency",
                desc: "No hidden charges, no surprises. We believe in honest pricing and clear communication from day one.",
              },
              {
                icon: "🌿",
                title: "Responsible Travel",
                desc: "We promote sustainable tourism that respects local communities, culture, and the natural environment.",
              },
              {
                icon: "❤️",
                title: "Traveller First",
                desc: "Your comfort, safety, and satisfaction are our top priorities on every single trip we organise.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-5xl mb-5">{v.icon}</div>
                <h3 className="font-display text-xl font-bold mb-3 text-saffron-300">{v.title}</h3>
                <p className="font-body text-earth-200 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-saffron-600 font-body font-medium tracking-widest uppercase text-sm mb-3">
            Meet Your Guide & Driver
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-16">
            The Man Behind the Wheel
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-10 text-left">
            <div className="w-36 h-36 rounded-full flex-shrink-0 shadow-lg overflow-hidden relative border-4 border-white">
              <Image
                src="/father-photo.jpg"
                alt="Devendra Sharma"
                width={144}
                height={144}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h3 className="font-display text-3xl font-bold text-earth-900 mb-1">Devendra Sharma</h3>
              <p className="text-saffron-600 font-body font-medium mb-4">Your Personal Chauffeur & Expert Local Guide</p>
              <p className="font-body text-earth-700 text-lg leading-relaxed mb-3">
                With over 20 years of accident-free driving experience across India's most challenging terrains (including the steep hills of Uttarakhand and Himachal), Devendra ji ensures your family is in the safest hands.
              </p>
              <p className="font-body text-earth-700 text-lg leading-relaxed">
                He doesn't just drive; he acts as your trusted companion. From finding the cleanest highway dhabas to taking you to breathtaking hidden viewpoints, his deep local knowledge transforms a simple road trip into an unforgettable journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle / Ride Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Visual card */}
            <div className="relative order-2 md:order-1">
              <Image
                src="/car-photo.jpg"
                alt="Our Maruti Suzuki Ertiga - Spacious and Comfortable"
                width={600}
                height={400}
                className="rounded-3xl object-cover h-80 w-full shadow-lg"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <p className="text-saffron-600 font-body font-medium tracking-widest uppercase text-sm mb-3">
                Comfort & Safety First
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-6 leading-tight">
                Your Ride for the Journey
              </h2>
              <p className="font-body text-earth-700 text-lg mb-6 leading-relaxed">
                You'll be traveling in a spacious, well-maintained AC vehicle (Sedan/SUV). We ensure the car is rigorously serviced and deeply sanitized before every single trip.
              </p>
              <ul className="space-y-4">
                {[
                  "Powerful Air Conditioning for hot summer days",
                  "Ample legroom and comfortable seating for long drives",
                  "Spacious boot for all your family's luggage",
                  "First-aid kit and emergency supplies always on board",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-saffron-500 mt-1">✓</span>
                    <span className="font-body text-earth-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
