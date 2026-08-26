const quickPlanItems = [
  { title: "Flexible Itineraries", description: "Choose from short weekend escapes to full custom journeys." },
  { title: "Comfort First", description: "Private chauffeur service with a smooth and safe travel experience." },
  { title: "Local Guidance", description: "Get insider recommendations for food, stays, and hidden gems." },
];

export default function TripPlannerSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[2rem] border border-earth-100 bg-white p-8 shadow-lg">
          <div className="grid lg:grid-cols-[1fr_0.95fr] gap-8 items-center">
            <div>
              <p className="text-saffron-600 font-body font-medium tracking-widest uppercase text-sm mb-3">
                Plan smarter
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-900 mb-4">
                Make your India trip easier with a simple travel checklist
              </h2>
              <p className="font-body text-earth-600 text-lg leading-8">
                From choosing the right region to booking comfort and pickups, we help you prepare every step with less hassle.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {quickPlanItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-earth-100 bg-cream p-4">
                  <h3 className="font-display text-lg font-semibold text-earth-900 mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-earth-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
