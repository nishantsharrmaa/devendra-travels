import CallToAction from "@/components/CallToAction";

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
            Meet the Founder
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-16">
            The Man Behind the Journey
          </h2>
          <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col md:flex-row items-center gap-10 text-left">
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-saffron-400 to-earth-600 flex items-center justify-center text-6xl flex-shrink-0 shadow-lg">
              👨‍💼
            </div>
            <div>
              <h3 className="font-display text-3xl font-bold text-earth-900 mb-1">Devendra Sharma</h3>
              <p className="text-saffron-600 font-body font-medium mb-4">Founder & Lead Tour Consultant</p>
              <p className="font-body text-earth-700 text-lg leading-relaxed">
                With over 20 years in the travel industry, Devendra has personally curated
                hundreds of itineraries and led countless groups across India. His passion
                for the country's diverse landscapes, heritage, and culture is the heart
                of every tour we offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
