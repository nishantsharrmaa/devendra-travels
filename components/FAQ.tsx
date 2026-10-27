"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq-data";

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
          <p className="font-body text-earth-300 text-lg">
            Everything you need to know about our personal tour and taxi services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                >
                  <span className="font-display font-semibold text-lg text-white">
                    {faq.q}
                  </span>
                  <span
                    className={`text-saffron-400 text-2xl font-light transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-8 pb-6 text-earth-300 font-body leading-relaxed text-base border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
