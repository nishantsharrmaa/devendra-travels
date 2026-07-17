import Link from "next/link";

const tours = [
  {
    emoji: "🏯",
    title: "Golden Triangle",
    subtitle: "Delhi • Agra • Jaipur",
    duration: "6 Days",
    price: "₹18,999",
    tag: "Most Popular",
    bg: "from-amber-700 to-earth-800",
  },
  {
    emoji: "🏔️",
    title: "Himachal Paradise",
    subtitle: "Shimla • Manali • Kullu",
    duration: "8 Days",
    price: "₹24,499",
    tag: "Best Seller",
    bg: "from-forest-700 to-earth-800",
  },
  {
    emoji: "🐪",
    title: "Rajasthan Royale",
    subtitle: "Jaipur • Jodhpur • Udaipur",
    duration: "10 Days",
    price: "₹32,999",
    tag: "Premium",
    bg: "from-saffron-700 to-earth-800",
  },
];

export default function FeaturedTours() {
  return (
    <section className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-saffron-600 font-body font-medium tracking-widest uppercase text-sm mb-3">
            Handpicked Destinations
          </p>
          <h2 className="font-display text-5xl font-bold text-earth-900 mb-4">
            Popular Tour Packages
          </h2>
          <p className="font-body text-earth-600 text-lg max-w-2xl mx-auto">
            Our most loved itineraries, crafted with care and packed with extraordinary experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tours.map((tour) => (
            <div
              key={tour.title}
              className="rounded-3xl overflow-hidden shadow-lg card-hover group"
            >
              {/* Top Visual */}
              <div className={`bg-gradient-to-br ${tour.bg} p-10 text-white relative`}>
                <span className="absolute top-4 right-4 bg-saffron-500 text-white text-xs font-body font-bold px-3 py-1 rounded-full">
                  {tour.tag}
                </span>
                <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tour.emoji}
                </div>
                <h3 className="font-display text-2xl font-bold">{tour.title}</h3>
                <p className="font-body text-white/70 text-sm mt-1">{tour.subtitle}</p>
              </div>

              {/* Bottom Info */}
              <div className="bg-white p-6 flex items-center justify-between">
                <div>
                  <div className="font-body text-earth-500 text-sm">🗓️ {tour.duration}</div>
                </div>
                <Link
                  href="/tours"
                  className="bg-earth-800 hover:bg-saffron-600 text-white font-body font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* See All */}
        <div className="text-center">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 border-2 border-earth-800 text-earth-800 hover:bg-earth-800 hover:text-white font-body font-semibold px-10 py-4 rounded-xl transition-all duration-300"
          >
            View All Packages →
          </Link>
        </div>
      </div>
    </section>
  );
}
