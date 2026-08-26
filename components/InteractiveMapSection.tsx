import Link from "next/link";

const travelHighlights = [
  "Plan routes across Delhi, Jaipur, Goa, and Himachal",
  "View nearby attractions and travel zones instantly",
  "Quickly jump to full map view for deeper exploration",
];

const planningHints = [
  { label: "Best time", value: "October to March" },
  { label: "Trip length", value: "5–10 days" },
  { label: "Popular routes", value: "Golden Triangle, Kerala, Himachal" },
];

export default function InteractiveMapSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <div>
            <p className="text-saffron-600 font-body font-medium tracking-widest uppercase text-sm mb-3">
              Live travel map
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
              Help travelers explore India with a real, working map
            </h2>
            <p className="font-body text-earth-600 text-lg leading-8 mb-6">
              Visitors can now view a live map of the region, inspect key destinations, and open the full map for detailed planning without leaving the site.
            </p>

            <div className="space-y-3 mb-8">
              {travelHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-earth-100 bg-cream px-4 py-3"
                >
                  <span className="text-saffron-600 text-lg">✦</span>
                  <span className="font-body font-medium text-earth-800">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {planningHints.map((hint) => (
                <div key={hint.label} className="rounded-2xl border border-earth-100 bg-white p-3 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-saffron-600">
                    {hint.label}
                  </p>
                  <p className="mt-1 font-body text-sm font-medium text-earth-800">{hint.value}</p>
                </div>
              ))}
            </div>

            <Link
              href="https://www.openstreetmap.org/#map=5/28.614/77.209"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-saffron-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-saffron-700"
            >
              Open full map
            </Link>
          </div>

          <div className="rounded-[2rem] border border-earth-100 bg-gradient-to-br from-cream via-white to-saffron-50 p-4 shadow-xl">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=68.1%2C6.7%2C97.4%2C35.5&layer=mapnik"
              className="h-[420px] w-full rounded-[1.25rem] border-0"
              loading="lazy"
              title="Interactive India map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
