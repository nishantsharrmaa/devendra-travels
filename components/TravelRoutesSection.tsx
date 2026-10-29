import Link from "next/link";

const journeys = [
  {
    number: "01",
    category: "Heritage & culture",
    route: "Delhi - Agra - Jaipur",
    description: "See iconic monuments, historic forts, and the colors of Rajasthan.",
    duration: "A classic multi-day trip",
    accent: "from-saffron-500 to-saffron-700",
  },
  {
    number: "02",
    category: "Mountain escapes",
    route: "Shimla - Manali - Kullu",
    description: "Trade busy streets for pine forests, mountain views, and fresh air.",
    duration: "A relaxed hill holiday",
    accent: "from-forest-600 to-forest-800",
  },
  {
    number: "03",
    category: "Spiritual journeys",
    route: "Mathura - Vrindavan - Haridwar",
    description: "Visit revered temples and experience the evening Ganga aarti.",
    duration: "A meaningful short break",
    accent: "from-earth-600 to-earth-800",
  },
];

export default function TravelRoutesSection() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-saffron-600">
              Find your kind of journey
            </p>
            <h2 className="mb-4 text-4xl font-bold leading-tight text-earth-900 md:text-5xl">
              India is better explored at your own pace
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-earth-600">
              Choose a popular route or tell us what you have in mind. We plan
              private, comfortable trips around your dates and travel style.
            </p>
          </div>
          <Link
            href="/tours"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-earth-200 px-5 py-3 font-semibold text-earth-800 transition hover:border-saffron-500 hover:text-saffron-700"
          >
            Browse all tours <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {journeys.map((journey) => (
            <article
              key={journey.number}
              className="group overflow-hidden rounded-3xl border border-earth-100 bg-cream transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`h-2 bg-gradient-to-r ${journey.accent}`} />
              <div className="p-7 md:p-8">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-bold tracking-[0.18em] text-saffron-700">
                    JOURNEY {journey.number}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-earth-600">
                    {journey.duration}
                  </span>
                </div>

                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-earth-500">
                  {journey.category}
                </p>
                <h3 className="mb-4 text-2xl font-bold leading-snug text-earth-900">
                  {journey.route}
                </h3>
                <p className="min-h-14 leading-7 text-earth-600">
                  {journey.description}
                </p>

                <div className="mt-8 border-t border-earth-200 pt-5">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 font-semibold text-saffron-700 transition group-hover:gap-3"
                  >
                    Plan this journey <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-earth-900 px-6 py-6 text-white md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-start gap-4">
            <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-saffron-300" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                <circle cx="12" cy="9" r="2.25" />
              </svg>
            </span>
            <div>
              <p className="font-semibold">Starting from Muradnagar, Ghaziabad</p>
              <p className="mt-1 text-sm text-earth-200">
                Door-to-door pickup, a private vehicle, and a plan made for your group.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-saffron-500 px-5 py-3 font-semibold text-white transition hover:bg-saffron-600"
          >
            Request a custom trip
          </Link>
        </div>
      </div>
    </section>
  );
}
