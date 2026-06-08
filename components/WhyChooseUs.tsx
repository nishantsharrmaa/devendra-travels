const reasons = [
  {
    icon: "🛡️",
    title: "20+ Years of Trust",
    desc: "Two decades of experience means we know exactly what makes a great trip — and what doesn't.",
  },
  {
    icon: "💰",
    title: "Best Price Guarantee",
    desc: "We offer competitive, transparent pricing with zero hidden charges. What you see is what you pay.",
  },
  {
    icon: "🗺️",
    title: "Expert Local Knowledge",
    desc: "Our team has explored every corner of India, giving you insider tips and off-the-beaten-path gems.",
  },
  {
    icon: "🤝",
    title: "Personalised Itineraries",
    desc: "No two travellers are alike. We craft custom trips tailored to your group, budget, and interests.",
  },
  {
    icon: "📞",
    title: "24/7 Support",
    desc: "From booking to return, our team is always a call away to handle anything that comes up.",
  },
  {
    icon: "🚌",
    title: "Comfortable Transport",
    desc: "Well-maintained, air-conditioned vehicles with experienced drivers for safe, comfortable travel.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-earth-800 text-white bg-texture">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-saffron-400 font-body font-medium tracking-widest uppercase text-sm mb-3">
            The Devendra Sharma Difference
          </p>
          <h2 className="font-display text-5xl font-bold mb-4">
            Why Travellers Choose Us
          </h2>
          <p className="font-body text-earth-300 text-lg max-w-2xl mx-auto">
            We don't just plan trips — we create memories that last a lifetime.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-saffron-500/30 transition-all duration-300 group"
            >
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {r.icon}
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-saffron-300">
                {r.title}
              </h3>
              <p className="font-body text-earth-200 leading-relaxed text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
