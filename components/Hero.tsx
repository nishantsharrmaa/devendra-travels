import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-earth-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth-900 via-earth-800 to-saffron-900/40" />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-saffron-500/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-earth-600/20 blur-2xl" />

      {/* Texture */}
      <div className="absolute inset-0 bg-texture opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center translate-y-10 md:translate-y-14">
        {/* Badge removed to avoid covering logo */}

        {/* Headline — SEO: H1 contains primary keyword + location modifier */}
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Private Taxi & Tours{" "}
          <span className="text-gradient">from Ghaziabad & Delhi NCR</span>
        </h1>

        <p className="font-body text-earth-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Devendra Sharma — your trusted personal chauffeur & tour guide for 20+ years. Door-to-door pickup from Muradnagar, Ghaziabad, Noida & Delhi. Explore India in comfort, safety, and style.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/tours"
            className="bg-gradient-to-r from-saffron-500 to-saffron-700 hover:from-saffron-400 hover:to-saffron-600 text-white font-body font-semibold px-10 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-saffron-500/40 text-base"
          >
            Explore Tour Packages
          </Link>
          <Link
            href="/contact"
            className="bg-white/10 border border-white/30 hover:bg-white/20 text-white font-body font-semibold px-10 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 text-base"
          >
            Plan My Trip
          </Link>
        </div>

        {/* Destinations Strip — popular tour destinations = keyword signals */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {["🏯 Rajasthan", "🏔️ Himachal", "🌴 Kerala", "🕌 Agra", "🏖️ Goa", "🕉️ Uttarakhand", "⛰️ Kedarnath", "🕌 Varanasi"].map(
            (dest) => (
              <span
                key={dest}
                className="bg-white/10 border border-white/15 text-white/80 font-body text-sm px-4 py-2 rounded-full backdrop-blur-sm"
              >
                {dest}
              </span>
            )
          )}
        </div>

        {/* Local pickup areas — Local SEO keyword signals */}
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {["📍 Muradnagar", "📍 Ghaziabad", "📍 Noida", "📍 Delhi", "📍 Faridabad"].map((item) => (
            <span key={item} className="rounded-full border border-saffron-500/40 bg-saffron-500/10 px-4 py-2 text-sm text-saffron-200 backdrop-blur-sm">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {["✓ Door-to-door pickup", "✓ Custom itinerary", "✓ Flexible dates", "✓ 20+ years experience"].map((item) => (
            <span key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf7f2] to-transparent" />
    </section>
  );
}
