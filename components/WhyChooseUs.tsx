const reasons = [
  {
    icon: "🚪",
    title: "Door-to-Door Service",
    desc: "Your vacation begins at your doorstep. We pick you up from your home and drop you back safely after the trip.",
  },
  {
    icon: "⏱️",
    title: "Total Flexibility",
    desc: "Want to stop for a photo? Hungry for local food? Need a restroom break? You are in complete control of the schedule.",
  },
  {
    icon: "🤝",
    title: "Your Personal Guide",
    desc: "More than just a driver, you get a trusted, experienced local companion who knows the best routes and hidden gems.",
  },
  {
    icon: "🛡️",
    title: "Safe & Reliable",
    desc: "Over two decades of accident-free driving experience in challenging terrains like the Himalayas.",
  },
  {
    icon: "💰",
    title: "Local Expertise",
    desc: "Deep local knowledge and trusted partners — we craft routes and experiences only locals know about.",
  },
  {
    icon: "🚘",
    title: "Comfortable Ride",
    desc: "Travel in a well-maintained, spacious, and air-conditioned vehicle with ample room for your family and luggage.",
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
