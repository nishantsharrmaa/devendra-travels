const steps = [
  {
    number: "01",
    icon: "📋",
    title: "Enquire Online or Call",
    desc: "Fill our simple enquiry form or just call/WhatsApp us directly. Tell us your destination, travel dates, and group size.",
  },
  {
    number: "02",
    icon: "📞",
    title: "We Plan & Confirm",
    desc: "Devendra ji will personally call you back, discuss the itinerary, finalize the price, and confirm your booking — no hidden charges.",
  },
  {
    number: "03",
    icon: "🚗",
    title: "We Pick You Up!",
    desc: "On the day of travel, we arrive at your doorstep, load your luggage, and your adventure begins. Drop-off back home after the trip.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-saffron-600 font-body font-medium tracking-widest uppercase text-sm mb-3">
            Simple & Transparent
          </p>
          <h2 className="font-display text-5xl font-bold text-earth-900 mb-4">
            How It Works
          </h2>
          <p className="font-body text-earth-600 text-lg max-w-xl mx-auto">
            Booking a private tour with us is as easy as 1-2-3.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-saffron-200 via-saffron-400 to-saffron-200 z-0" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-earth-100 text-center z-10"
            >
              {/* Step number badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-saffron-500 to-saffron-700 text-white font-display font-bold text-xs flex items-center justify-center shadow-lg">
                {step.number}
              </div>
              <div className="text-5xl mb-5 mt-3">{step.icon}</div>
              <h3 className="font-display text-xl font-bold text-earth-900 mb-3">
                {step.title}
              </h3>
              <p className="font-body text-earth-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
