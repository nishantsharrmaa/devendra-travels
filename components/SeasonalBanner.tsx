import Link from "next/link";

export default function SeasonalBanner() {
  return (
    <div className="bg-gradient-to-r from-saffron-600 via-saffron-500 to-earth-600 text-white py-3 px-4 text-center relative overflow-hidden">
      {/* Decorative shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
      <p className="relative font-body text-sm font-semibold tracking-wide">
        ☀️ <span className="font-bold">Summer Special:</span> Book your Himachal or Uttarakhand trip now and get a{" "}
        <span className="underline underline-offset-2">free itinerary consultation!</span>{" "}
        &nbsp;
        <Link
          href="/contact"
          className="bg-white/20 hover:bg-white/30 border border-white/40 rounded-full px-4 py-1 ml-2 text-xs font-bold transition-all duration-200 inline-block"
        >
          Book Now →
        </Link>
      </p>
    </div>
  );
}
