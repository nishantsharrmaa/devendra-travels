const testimonials = [
  {
    name: "Rahul & Priya Gupta",
    city: "Delhi",
    tour: "Golden Triangle",
    rating: 5,
    text: "We were absolutely blown away by the level of service. Every hotel, every transport, every guide was top-notch. The Taj Mahal at sunrise was a moment we'll never forget. Highly recommend Devendra ji!",
    initials: "RG",
  },
  {
    name: "Sunita Agarwal",
    city: "Lucknow",
    tour: "Himachal Paradise",
    rating: 5,
    text: "Travelling with family used to stress me out, but this trip was perfectly organised. From the Rohtang Pass snow to the cosy hotel in Shimla — everything was seamless. The kids are already asking for the next trip!",
    initials: "SA",
  },
  {
    name: "Mohit Sharma",
    city: "Meerut",
    tour: "Rajasthan Royale",
    rating: 5,
    text: "The camel safari in Jaisalmer was the highlight of our honeymoon! Devendra sir personally helped us plan every detail. Very professional, very caring. We felt like VIPs throughout the trip.",
    initials: "MS",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-saffron-600 font-body font-medium tracking-widest uppercase text-sm mb-3">
            Real Experiences
          </p>
          <h2 className="font-display text-5xl font-bold text-earth-900 mb-4">
            What Our Travellers Say
          </h2>
          <p className="font-body text-earth-600 text-lg max-w-xl mx-auto">
            Don't just take our word for it — hear from the people who've journeyed with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-earth-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-saffron-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-earth-700 leading-relaxed mb-6 text-sm italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron-400 to-earth-600 flex items-center justify-center text-white font-display font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-body font-semibold text-earth-900 text-sm">{t.name}</div>
                  <div className="font-body text-earth-500 text-xs">
                    {t.city} · {t.tour}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
