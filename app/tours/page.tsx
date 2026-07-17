import { Metadata } from 'next';
import CallToAction from "@/components/CallToAction";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Tour Packages - Himalayas, Rajasthan, Kerala & More | Devendra Travels',
  description: 'Explore our exclusive tour packages. Golden Triangle, Himalayas, Rajasthan, Kerala, Goa & custom tours. Affordable prices, expert guides, unforgettable experiences.',
  keywords: 'tour packages, golden triangle tour, himalayas tour, rajasthan tour, kerala tour, goa beaches',
};

const tours = [
  // ── Day Trips ─────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Agra Day Trip",
    locations: "Taj Mahal • Agra Fort • Fatehpur Sikri",
    duration: "1 Day",
    price: "₹3,499",
    emoji: "🕌",
    tag: "Day Trip",
    tagColor: "bg-amber-500",
    category: "Day Trips",
    desc: "Visit the world's most iconic monument — the Taj Mahal — along with Agra Fort and Fatehpur Sikri. A perfect getaway from Meerut in a single day.",
    highlights: ["Taj Mahal at sunrise", "Agra Fort heritage walk", "Fatehpur Sikri UNESCO site"],
  },
  {
    id: 2,
    title: "Mathura & Vrindavan",
    locations: "Mathura • Vrindavan • Govardhan",
    duration: "1 Day",
    price: "₹2,999",
    emoji: "🪔",
    tag: "Spiritual",
    tagColor: "bg-saffron-500",
    category: "Day Trips",
    desc: "The birthplace of Lord Krishna awaits. Walk through the sacred ghats of Mathura and the colourful temples of Vrindavan in one soul-stirring day.",
    highlights: ["Krishna Janmabhoomi Temple", "Banke Bihari Temple", "Evening Aarti at Yamuna Ghat"],
  },
  {
    id: 3,
    title: "Delhi Sightseeing",
    locations: "Red Fort • India Gate • Qutub Minar • Lotus Temple",
    duration: "1 Day",
    price: "₹2,499",
    emoji: "🏛️",
    tag: "Day Trip",
    tagColor: "bg-earth-600",
    category: "Day Trips",
    desc: "Explore India's magnificent capital in a single comfortable day — from Mughal monuments to modern marvels, all with your own private car.",
    highlights: ["Red Fort & Chandni Chowk", "India Gate & Rajpath", "Qutub Minar & Humayun's Tomb"],
  },
  // ── Weekend Getaways ───────────────────────────────────────────────────────
  {
    id: 4,
    title: "Haridwar & Rishikesh",
    locations: "Haridwar • Rishikesh • Mussoorie",
    duration: "3 Days / 2 Nights",
    price: "₹7,499",
    emoji: "🕉️",
    tag: "Spiritual",
    tagColor: "bg-saffron-600",
    category: "Weekend Getaways",
    desc: "Feel the divine energy of the Ganga at Haridwar, find inner peace at yoga capital Rishikesh, and enjoy the fresh mountain air of Mussoorie.",
    highlights: ["Ganga Aarti at Har Ki Pauri", "Laxman Jhula & Ram Jhula", "Kempty Falls, Mussoorie"],
  },
  {
    id: 5,
    title: "Shimla Weekend",
    locations: "Shimla • Kufri • Chail",
    duration: "3 Days / 2 Nights",
    price: "₹9,999",
    emoji: "🏔️",
    tag: "Popular",
    tagColor: "bg-forest-600",
    category: "Weekend Getaways",
    desc: "Escape to the Queen of Hills! Walk the famous Mall Road, enjoy panoramic views from Jakhu Temple, and play in snow at Kufri (in season).",
    highlights: ["Mall Road & Ridge promenade", "Jakhu Temple trek", "Snow play at Kufri"],
  },
  {
    id: 6,
    title: "Mussoorie & Chakrata",
    locations: "Mussoorie • Kempty Falls • Chakrata",
    duration: "3 Days / 2 Nights",
    price: "₹8,499",
    emoji: "🌄",
    tag: "Scenic",
    tagColor: "bg-forest-700",
    category: "Weekend Getaways",
    desc: "The Queen of Hills at your leisure — Kempty Falls, Gun Hill, Landour — followed by the pristine forest charm of offbeat Chakrata.",
    highlights: ["Kempty Falls swim", "Gun Hill ropeway", "Tiger Fall, Chakrata"],
  },
  {
    id: 7,
    title: "Ayodhya & Lucknow",
    locations: "Ayodhya • Ram Mandir • Lucknow",
    duration: "2 Days / 1 Night",
    price: "₹6,999",
    emoji: "🛕",
    tag: "Spiritual",
    tagColor: "bg-saffron-500",
    category: "Weekend Getaways",
    desc: "Visit the newly built Ram Mandir in Ayodhya, seek blessings at sacred ghats, and explore the Nawabi culture and cuisine of Lucknow.",
    highlights: ["Ram Mandir darshan", "Hanuman Garhi Temple", "Lucknow Nawabi cuisine & Bara Imambara"],
  },
  {
    id: 8,
    title: "Nainital & Jim Corbett",
    locations: "Nainital • Jim Corbett • Bhimtal",
    duration: "4 Days / 3 Nights",
    price: "₹9,999",
    emoji: "🦁",
    tag: "Nature",
    tagColor: "bg-forest-600",
    category: "Weekend Getaways",
    desc: "A perfect blend of natural beauty and wildlife thrill — the emerald Naini Lake, enchanting forest walks, and the legendary Jim Corbett tiger reserve.",
    highlights: ["Naini Lake boat ride", "Jim Corbett jeep safari", "Bhimtal & Sat Tal lakes"],
  },
  // ── Multi-Day Tours ────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Golden Triangle",
    locations: "Delhi • Agra • Jaipur",
    duration: "6 Days / 5 Nights",
    price: "₹18,999",
    emoji: "🏯",
    tag: "Most Popular",
    tagColor: "bg-saffron-500",
    category: "Multi-Day Tours",
    desc: "India's most iconic circuit — the grandeur of Mughal history, the opulence of Rajput palaces, and the vibrant energy of Delhi's streets.",
    highlights: ["Taj Mahal sunrise visit", "Amber Fort, Jaipur", "Old Delhi heritage walk"],
  },
  {
    id: 10,
    title: "Himachal Paradise",
    locations: "Shimla • Manali • Kullu • Rohtang",
    duration: "8 Days / 7 Nights",
    price: "₹24,999",
    emoji: "🏔️",
    tag: "Best Seller",
    tagColor: "bg-forest-600",
    category: "Multi-Day Tours",
    desc: "Escape to the misty valleys and snow-draped peaks of Himachal Pradesh — nature's own masterpiece, experienced entirely from the comfort of your private car.",
    highlights: ["Rohtang Pass snow adventure", "Hadimba Temple, Manali", "Solang Valley & Beas River"],
  },
  {
    id: 11,
    title: "Amritsar & Wagah Border",
    locations: "Amritsar • Golden Temple • Wagah Border",
    duration: "3 Days / 2 Nights",
    price: "₹11,999",
    emoji: "🙏",
    tag: "Spiritual",
    tagColor: "bg-saffron-600",
    category: "Multi-Day Tours",
    desc: "Experience the sublime serenity of the Golden Temple and the spine-tingling patriotism of the Wagah Border flag-lowering ceremony.",
    highlights: ["Golden Temple seva & langar", "Wagah Border ceremony", "Jallianwala Bagh memorial"],
  },
  {
    id: 12,
    title: "Varanasi & Prayagraj",
    locations: "Varanasi • Sarnath • Ganga Ghats • Prayagraj",
    duration: "4 Days / 3 Nights",
    price: "₹13,499",
    emoji: "🪔",
    tag: "Spiritual",
    tagColor: "bg-amber-600",
    category: "Multi-Day Tours",
    desc: "Journey to the spiritual heart of India — witness the ancient rituals of the Ganga ghats, the sacred Sarnath, and the holy Triveni Sangam.",
    highlights: ["Ganga Aarti & boat ride", "Sarnath Buddhist site", "Triveni Sangam, Prayagraj"],
  },
  {
    id: 13,
    title: "Kedarnath & Badrinath",
    locations: "Haridwar • Kedarnath • Badrinath",
    duration: "5 Days / 4 Nights",
    price: "₹14,999",
    emoji: "🏔️",
    tag: "Pilgrimage",
    tagColor: "bg-saffron-700",
    category: "Multi-Day Tours",
    desc: "A divine journey to two of the holiest Char Dham shrines, nestled in the mighty Himalayas. Pure, peaceful, and profoundly spiritual.",
    highlights: ["Kedarnath temple darshan", "Badrinath temple darshan", "Haridwar Ganga Aarti"],
  },
  {
    id: 14,
    title: "Dharamshala & McLeodGanj",
    locations: "Dharamshala • McLeodGanj • Dalhousie",
    duration: "5 Days / 4 Nights",
    price: "₹15,999",
    emoji: "🏔️",
    tag: "Offbeat",
    tagColor: "bg-forest-700",
    category: "Multi-Day Tours",
    desc: "Home to the Dalai Lama, Dharamshala offers a unique blend of Tibetan culture, Himalayan beauty, and the charming colonial hill station of Dalhousie.",
    highlights: ["Tsuglagkhang Complex (Dalai Lama Temple)", "Triund trek, McLeodGanj", "Khajjiar — the 'Mini Switzerland of India'"],
  },
  {
    id: 15,
    title: "Rajasthan Royale",
    locations: "Jaipur • Jodhpur • Udaipur • Jaisalmer",
    duration: "10 Days / 9 Nights",
    price: "₹32,999",
    emoji: "🐪",
    tag: "Premium",
    tagColor: "bg-earth-600",
    category: "Multi-Day Tours",
    desc: "Journey through the land of kings — majestic forts, shimmering desert dunes, royal lake palaces, and a vibrant culture that colours every corner.",
    highlights: ["Camel safari in Jaisalmer", "Lake Pichola boat ride, Udaipur", "Mehrangarh Fort, Jodhpur"],
  },
  {
    id: 16,
    title: "Char Dham Yatra",
    locations: "Yamunotri • Gangotri • Kedarnath • Badrinath",
    duration: "12 Days / 11 Nights",
    price: "₹38,999",
    emoji: "🕉️",
    tag: "Sacred",
    tagColor: "bg-saffron-700",
    category: "Multi-Day Tours",
    desc: "The most sacred pilgrimage of Hinduism — complete the divine circuit of all four Char Dham shrines in one blessed journey through the Himalayas.",
    highlights: ["Yamunotri & Gangotri shrines", "Kedarnath temple by helicopter or trek", "Badrinath darshan at dawn"],
  },
  {
    id: 17,
    title: "Spiti Valley Adventure",
    locations: "Shimla • Spiti • Kaza • Key Monastery",
    duration: "7 Days / 6 Nights",
    price: "₹22,999",
    emoji: "🏔️",
    tag: "Adventure",
    tagColor: "bg-earth-700",
    category: "Multi-Day Tours",
    desc: "An offbeat journey into the cold desert of Spiti — ancient monasteries perched on clifftops, surreal moonscapes, and the raw beauty of the Himalayas.",
    highlights: ["Key Monastery at 4,166 m", "Chandratal Lake", "Kaza village & local culture"],
  },
  {
    id: 18,
    title: "Goa & Kerala",
    locations: "Goa Beaches • Kerala Backwaters • Munnar",
    duration: "Custom",
    price: "Contact for Price",
    emoji: "🌴",
    tag: "Long Distance",
    tagColor: "bg-forest-600",
    category: "Multi-Day Tours",
    desc: "These beautiful destinations are far from Meerut but we can plan the perfect trip — drive to airport or arrange a full-trip plan with local transfers.",
    highlights: ["Goa beaches & water sports", "Alleppey houseboat stay", "Munnar tea gardens"],
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
