const destinations = [
  {
    title: "Delhi",
    description: "Historic landmarks, markets, and food trails.",
  },
  {
    title: "Jaipur",
    description: "Royal palaces, forts, and colorful bazaars.",
  },
  {
    title: "Shimla",
    description: "Cool hill stations, pine forests, and scenic views.",
  },
  {
    title: "Udaipur",
    description: "Lakeside romance and elegant heritage stays.",
  },
  {
    title: "Goa",
    description: "Sun, beaches, nightlife, and relaxed coastal charm.",
  },
];

export default function IndiaMapSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <p className="text-saffron-600 font-body font-medium tracking-widest uppercase text-sm mb-3">
              Discover India
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 mb-4">
              Explore the best of India with curated routes
            </h2>
            <p className="font-body text-earth-600 text-lg leading-8 mb-8">
              From the golden deserts of Rajasthan to the misty hills of Himachal, our journeys cover the most iconic landscapes and cultural highlights across the country.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {destinations.map((place) => (
                <div
                  key={place.title}
                  className="rounded-2xl border border-earth-100 bg-cream p-4 shadow-sm"
                >
                  <h3 className="font-display text-xl font-semibold text-earth-900 mb-2">
                    {place.title}
                  </h3>
                  <p className="font-body text-sm text-earth-600">{place.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-earth-100 bg-gradient-to-br from-cream via-white to-saffron-50 p-6 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-saffron-600">
                  India Highlights
                </p>
                <h3 className="font-display text-2xl font-bold text-earth-900">
                  Popular Travel Zones
                </h3>
              </div>
              <div className="rounded-full bg-saffron-500/10 px-3 py-1 text-sm font-body font-semibold text-saffron-700">
                12+ routes
              </div>
            </div>

            <svg viewBox="0 0 600 720" className="w-full h-auto" role="img" aria-label="Stylized India map with highlighted travel destinations">
              <rect x="30" y="30" width="540" height="660" rx="28" fill="#fffdf9" />
              <path
                d="M188 157c-23 4-44 25-49 47-6 27 6 50 24 72 16 20 22 45 22 70 0 21-3 42-14 59-10 16-24 29-40 40-11 8-22 20-17 35 4 11 15 18 26 22 10 4 21 8 31 13 10 5 20 13 29 8 9-4 12-16 17-25 8-14 18-27 33-34 15-7 32-7 46-14 13-6 24-19 33-30 11-14 20-30 31-43 15-17 36-29 45-49 9-20 5-44-7-63-12-20-29-36-47-49-14-10-30-19-46-24-17-6-35-7-52-4-10 2-19 6-28 11-10 5-19 12-29 17-12 6-24 11-36 16z"
                fill="#f7e7c8"
                stroke="#2d6a4f"
                strokeWidth="8"
              />
              <path
                d="M248 274c26-8 55-5 81 4 20 6 39 17 56 30 15 11 27 26 38 41 8 11 17 24 29 31 17 10 36 10 54 4"
                fill="none"
                stroke="#2d6a4f"
                strokeWidth="6"
                strokeLinecap="round"
              />

              <circle cx="220" cy="220" r="14" fill="#ff8106" />
              <circle cx="320" cy="360" r="14" fill="#ff8106" />
              <circle cx="390" cy="250" r="14" fill="#ff8106" />
              <circle cx="440" cy="470" r="14" fill="#ff8106" />
              <circle cx="280" cy="560" r="14" fill="#ff8106" />

              <circle cx="220" cy="220" r="28" fill="none" stroke="#ff8106" strokeOpacity="0.25" strokeWidth="10" />
              <circle cx="320" cy="360" r="28" fill="none" stroke="#ff8106" strokeOpacity="0.25" strokeWidth="10" />
              <circle cx="390" cy="250" r="28" fill="none" stroke="#ff8106" strokeOpacity="0.25" strokeWidth="10" />
              <circle cx="440" cy="470" r="28" fill="none" stroke="#ff8106" strokeOpacity="0.25" strokeWidth="10" />
              <circle cx="280" cy="560" r="28" fill="none" stroke="#ff8106" strokeOpacity="0.25" strokeWidth="10" />

              <text x="205" y="195" fontSize="20" fontFamily="DM Sans, sans-serif" fill="#ac7a4a" fontWeight="700">Delhi</text>
              <text x="305" y="335" fontSize="20" fontFamily="DM Sans, sans-serif" fill="#ac7a4a" fontWeight="700">Jaipur</text>
              <text x="370" y="225" fontSize="20" fontFamily="DM Sans, sans-serif" fill="#ac7a4a" fontWeight="700">Shimla</text>
              <text x="424" y="445" fontSize="20" fontFamily="DM Sans, sans-serif" fill="#ac7a4a" fontWeight="700">Udaipur</text>
              <text x="255" y="585" fontSize="20" fontFamily="DM Sans, sans-serif" fill="#ac7a4a" fontWeight="700">Goa</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
