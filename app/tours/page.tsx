import CallToAction from "@/components/CallToAction";
import Link from "next/link";

const tours = [
  {
    id: 1,
    title: "Golden Triangle",
    locations: "Delhi • Agra • Jaipur",
    duration: "6 Days / 5 Nights",
    price: "₹18,999",
    emoji: "🏯",
    tag: "Most Popular",
    tagColor: "bg-saffron-500",
    desc: "India's most iconic circuit — the grandeur of Mughal history, the opulence of Rajput palaces, and the bustle of Delhi's vibrant streets.",
    highlights: ["Taj Mahal sunrise visit", "Amber Fort elephant ride", "Old Delhi heritage walk"],
  },
  {
    id: 2,
    title: "Himachal Paradise",
    locations: "Shimla • Manali • Kullu",
    duration: "8 Days / 7 Nights",
    price: "₹24,499",
    emoji: "🏔️",
    tag: "Best Seller",
    tagColor: "bg-forest-600",
    desc: "Escape to the misty valleys and snow-draped peaks of Himachal Pradesh — nature's own masterpiece awaiting your footsteps.",
    highlights: ["Rohtang Pass snow experience", "Hadimba Temple", "Solang Valley adventure"],
  },
  {
    id: 3,
    title: "Rajasthan Royale",
    locations: "Jaipur • Jodhpur • Udaipur • Jaisalmer",
    duration: "10 Days / 9 Nights",
    price: "₹32,999",
    emoji: "🐪",
    tag: "Premium",
    tagColor: "bg-earth-600",
    desc: "Journey through the land of kings — majestic forts, shimmering desert dunes, royal palaces, and a vibrant culture that colours every corner.",
    highlights: ["Camel safari in Jaisalmer", "Lake Pichola boat ride", "Mehrangarh Fort"],
  },
  {
    id: 4,
    title: "Kerala Backwaters",
    locations: "Kochi • Alleppey • Munnar • Kovalam",
    duration: "7 Days / 6 Nights",
    price: "₹21,999",
    emoji: "🌴",
    tag: "Relaxing",
    tagColor: "bg-forest-700",
    desc: "Glide through emerald backwaters on a houseboat, breathe in the spice-scented air of Munnar's tea estates, and unwind on golden beaches.",
    highlights: ["Houseboat stay in Alleppey", "Munnar tea garden tour", "Kathakali performance"],
  },
  {
    id: 5,
    title: "Uttarakhand Pilgrimage",
    locations: "Haridwar • Rishikesh • Char Dham",
    duration: "12 Days / 11 Nights",
    price: "₹28,999",
    emoji: "🕉️",
    tag: "Spiritual",
    tagColor: "bg-saffron-600",
    desc: "Embark on a sacred journey to the holiest shrines of the Himalayas — find peace, seek blessings, and connect with India's ancient spiritual soul.",
    highlights: ["Ganga Aarti at Haridwar", "Char Dham darshan", "Yoga at Rishikesh"],
  },
  {
    id: 6,
    title: "Goa Beaches",
    locations: "North Goa • South Goa • Old Goa",
    duration: "5 Days / 4 Nights",
    price: "₹14,999",
    emoji: "🏖️",
    tag: "Fun & Sun",
    tagColor: "bg-saffron-500",
    desc: "Sun, sand, and sea — Goa's legendary beaches, Portuguese heritage, vibrant nightlife, and fresh seafood make for an irresistible escape.",
    highlights: ["Water sports at Baga", "Dudhsagar waterfall trip", "Old Goa churches"],
  },
];

export default function ToursPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-earth-700 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 to-earth-700/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-saffron-400 font-body font-medium tracking-widest uppercase text-sm mb-3">
            Handcrafted Itineraries
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Our Tour Packages
          </h1>
          <p className="font-body text-earth-200 text-lg max-w-2xl mx-auto">
            From the Himalayas to the backwaters, discover India's finest destinations
            with our expertly curated domestic tour packages.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md card-hover border border-earth-100"
              >
                {/* Card Top */}
                <div className="bg-gradient-to-br from-earth-700 to-earth-900 p-8 relative">
                  <span
                    className={`absolute top-4 right-4 ${tour.tagColor} text-white text-xs font-body font-semibold px-3 py-1 rounded-full`}
                  >
                    {tour.tag}
                  </span>
                  <div className="text-6xl mb-4">{tour.emoji}</div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">{tour.title}</h3>
                  <p className="text-earth-300 font-body text-sm">{tour.locations}</p>
                </div>

                {/* Card Body */}
                <div className="p-7">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-body text-earth-600 text-sm flex items-center gap-1">
                      🗓️ {tour.duration}
                    </span>
                    <span className="font-display text-2xl font-bold text-saffron-600">
                      {tour.price}
                    </span>
                  </div>

                  <p className="font-body text-earth-700 text-sm leading-relaxed mb-5">
                    {tour.desc}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {tour.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm font-body text-earth-800">
                        <span className="text-saffron-500 font-bold">✓</span> {h}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="block w-full text-center bg-gradient-to-r from-saffron-500 to-saffron-700 text-white font-body font-semibold py-3 rounded-xl hover:from-saffron-600 hover:to-saffron-800 transition-all duration-300 shadow-md"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tour Banner */}
      <section className="py-20 bg-earth-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-5xl mb-6">🗺️</div>
          <h2 className="font-display text-4xl font-bold mb-4">
            Don't See Your Dream Trip?
          </h2>
          <p className="font-body text-earth-200 text-lg mb-8 max-w-2xl mx-auto">
            We specialise in building fully custom itineraries tailored to your group size,
            budget, and travel dates. Just tell us your dream, and we'll make it happen.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-saffron-500 hover:bg-saffron-600 text-white font-body font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-saffron-500/30"
          >
            Plan a Custom Tour
          </Link>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
