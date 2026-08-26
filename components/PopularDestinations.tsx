import Link from "next/link";

const destinations = [
  {
    title: "Golden Triangle",
    subtitle: "Delhi • Agra • Jaipur",
    description: "Heritage landmarks, royal forts, and iconic monuments in one journey.",
  },
  {
    title: "Himalayan Escape",
    subtitle: "Shimla • Manali • Kullu",
    description: "Cool mountain air, scenic roads, and peaceful valleys for a refreshing break.",
  },
  {
    title: "Rajasthan Royalty",
    subtitle: "Jodhpur • Udaipur • Jaisalmer",
    description: "Desert adventures, lakeside romance, and centuries-old cultural charm.",
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-saffron-600 font-body font-medium tracking-widest uppercase text-sm mb-3">
            Popular Destinations
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
            Travel themes our guests love most
          </h2>
          <p className="font-body text-earth-600 text-lg max-w-2xl mx-auto">
            A few of the most requested holiday styles, designed to make your next trip effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-earth-100 bg-cream p-7 shadow-sm"
            >
              <p className="text-saffron-600 font-body font-semibold text-sm uppercase tracking-[0.2em] mb-3">
                {item.subtitle}
              </p>
              <h3 className="font-display text-2xl font-bold text-earth-900 mb-3">
                {item.title}
              </h3>
              <p className="font-body text-earth-600 leading-7 mb-6">
                {item.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-body font-semibold text-saffron-700 hover:text-saffron-600"
              >
                Plan this trip →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
