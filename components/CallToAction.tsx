import Link from "next/link";
import { CONTACT_INFO } from "@/lib/config";

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-saffron-500 to-earth-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-texture opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="text-6xl mb-6">✈️</div>
        <h2 className="font-display text-5xl font-bold mb-5">
          Ready for Your Next Adventure?
        </h2>
        <p className="font-body text-white/85 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Let us take the stress out of planning. Share your dream destination and travel dates,
          and we'll create the perfect itinerary just for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-saffron-700 hover:bg-earth-50 font-body font-bold px-10 py-4 rounded-xl transition-all duration-300 shadow-xl text-base"
          >
            Start Planning Today
          </Link>
          <Link
            href="/tours"
            className="border-2 border-white/50 hover:border-white text-white font-body font-semibold px-10 py-4 rounded-xl transition-all duration-300 text-base"
          >
            Browse Packages
          </Link>
        </div>
        <p className="font-body text-white/60 text-sm mt-8">
          📞 Call us: {CONTACT_INFO.phone} &nbsp;|&nbsp; ✉️ {CONTACT_INFO.email}
        </p>
      </div>
    </section>
  );
}
