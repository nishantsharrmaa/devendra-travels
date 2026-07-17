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
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-saffron-400 animate-pulse" />
          <span className="font-body text-sm text-saffron-300 tracking-wide">
            Trusted Domestic Tours Since 2005
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Your Private{" "}
          <span className="text-gradient">Chauffeur & Guide</span>
        </h1>

        <p className="font-body text-earth-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          We pick you up from your doorstep, drive you to your dream destination, and drop you safely back home. Experience India with ultimate comfort, safety, and flexibility.
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

        {/* Destinations Strip */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {["🏯 Rajasthan", "🏔️ Himachal", "🌴 Kerala", "🕌 Agra", "🏖️ Goa", "🕉️ Uttarakhand"].map(
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
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf7f2] to-transparent" />
    </section>
  );
}
