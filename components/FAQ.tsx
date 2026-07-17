"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Do you pick us up from our home?",
    a: "Yes! That's exactly what makes us different. We come to your doorstep, pick you up, travel the entire trip with you, and drop you safely back home at the end.",
  },
  {
    q: "Are toll taxes and fuel included in the price?",
    a: "Our package prices include the driver's fuel and daily allowance. Toll taxes, state entry permits, and parking fees are charged at actual cost and billed transparently — we always inform you in advance.",
  },
  {
    q: "Can we customize the itinerary?",
    a: "Absolutely! Every trip is custom-planned. Want to add an extra stop, skip a place, or change the order? Just tell Devendra ji and he'll adjust the plan to suit you.",
  },
  {
    q: "Can we stop anywhere during the journey?",
    a: "Yes — that's the biggest advantage of a private car. Need a dhaba break? Want to stop for photos? See a beautiful viewpoint? Just say the word. There's no rigid schedule.",
  },
  {
    q: "What vehicle do you use?",
    a: "We use a well-maintained, spacious Maruti Suzuki Ertiga (7-seater AC SUV). It's comfortable for families, has ample boot space for luggage, and is ideal for both plains and hill roads.",
  },
  {
    q: "What if I need to cancel my booking?",
    a: "We understand plans can change. Please inform us at least 48 hours in advance and we'll work out a fair solution. Devendra ji believes in treating every customer like family.",
  },
  {
    q: "Do you travel at night?",
    a: "We generally prefer daytime travel for safety, especially in hilly regions. For very long routes, night driving may be required — this is discussed and agreed upon before booking.",
  },
  {
    q: "How do I confirm a booking?",
    a: "Simply fill our enquiry form or WhatsApp/call us directly. Devendra ji will personally call you back, finalize the itinerary and price, and confirm your booking. No advance payment apps — just a simple phone conversation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-earth-800 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-saffron-400 font-body font-medium tracking-widest uppercase text-sm mb-3">
            Got Questions?
          </p>
          <h2 className="font-display text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-earth-300 text-lg max-w-xl mx-auto">
            Everything you need to know before booking your private tour.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-saffron-500/40 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-7 py-5 flex items-center justify-between gap-4"
              >
                <span className="font-body font-semibold text-white text-base leading-snug">
                  {faq.q}
                </span>
                <span
                  className={`text-saffron-400 text-xl flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {openIndex === i && (
                <div className="px-7 pb-6">
                  <p className="font-body text-earth-300 leading-relaxed text-sm">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
