export default function BookingFormSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-[2rem] border border-earth-100 bg-gradient-to-br from-cream via-white to-saffron-50 p-8 shadow-xl">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
            <div>
              <p className="text-saffron-600 font-body font-medium tracking-widest uppercase text-sm mb-3">
                Quick booking request
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-900 mb-4">
                Ask for your custom itinerary in minutes
              </h2>
              <p className="font-body text-earth-600 text-lg leading-8">
                Share your destination, dates, and travel style and we’ll help you plan a comfortable trip across India.
              </p>
            </div>

            <form className="rounded-[1.5rem] border border-earth-100 bg-white p-6 shadow-md space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block font-body text-sm font-semibold text-earth-800">Full name</label>
                  <input className="w-full rounded-xl border border-earth-200 px-4 py-3 outline-none focus:border-saffron-500" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block font-body text-sm font-semibold text-earth-800">Phone</label>
                  <input className="w-full rounded-xl border border-earth-200 px-4 py-3 outline-none focus:border-saffron-500" placeholder="Your phone number" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block font-body text-sm font-semibold text-earth-800">Destination</label>
                  <input className="w-full rounded-xl border border-earth-200 px-4 py-3 outline-none focus:border-saffron-500" placeholder="Rajasthan, Kerala, Goa..." />
                </div>
                <div>
                  <label className="mb-2 block font-body text-sm font-semibold text-earth-800">Travel date</label>
                  <input type="date" className="w-full rounded-xl border border-earth-200 px-4 py-3 outline-none focus:border-saffron-500" />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-body text-sm font-semibold text-earth-800">Trip details</label>
                <textarea rows={4} className="w-full rounded-xl border border-earth-200 px-4 py-3 outline-none focus:border-saffron-500" placeholder="Tell us about your travel plans, group size, or special preferences." />
              </div>

              <button className="w-full rounded-xl bg-saffron-600 px-5 py-3 font-body font-semibold text-white transition hover:bg-saffron-700">
                Request itinerary
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
