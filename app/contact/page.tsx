"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tour: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="relative bg-earth-700 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-earth-900/60 to-earth-700/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-saffron-400 font-body font-medium tracking-widest uppercase text-sm mb-3">
            We'd Love to Hear From You
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="font-body text-earth-200 text-lg max-w-2xl mx-auto">
            Ready to plan your next adventure? Reach out and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="font-display text-4xl font-bold text-earth-900 mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-12">
                {[
                  {
                    icon: "📍",
                    label: "Office Address",
                    value: "Devendra Sharma Tour & Travels, Muradnagar, Uttar Pradesh, India",
                  },
                  {
                    icon: "📞",
                    label: "Phone / WhatsApp",
                    value: "+91 9897788965",
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "devendrasharma227@gmail.com",
                  },
                  {
                    icon: "🕐",
                    label: "Working Hours",
                    value: "Mon – Sat: 9:00 AM – 7:00 PM",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-saffron-100 flex items-center justify-center text-2xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-body font-semibold text-earth-900 text-sm uppercase tracking-wide mb-1">
                        {item.label}
                      </p>
                      <p className="font-body text-earth-700">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden h-64 bg-earth-200 flex items-center justify-center shadow-md">
                <div className="text-center text-earth-500">
                  <div className="text-5xl mb-3">📍</div>
                  <p className="font-body font-medium">Meerut, Uttar Pradesh</p>
                  <p className="font-body text-sm text-earth-400 mt-1">
                    Embed Google Maps here
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl shadow-xl p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="text-7xl mb-6">🎉</div>
                  <h3 className="font-display text-3xl font-bold text-earth-900 mb-3">
                    Thank You!
                  </h3>
                  <p className="font-body text-earth-600 text-lg">
                    We've received your enquiry. Our team will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-3xl font-bold text-earth-900 mb-8">
                    Send an Enquiry
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-body text-sm font-semibold text-earth-800 mb-1 block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full border border-earth-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 transition"
                        />
                      </div>
                      <div>
                        <label className="font-body text-sm font-semibold text-earth-800 mb-1 block">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full border border-earth-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-body text-sm font-semibold text-earth-800 mb-1 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-earth-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 transition"
                      />
                    </div>

                    <div>
                      <label className="font-body text-sm font-semibold text-earth-800 mb-1 block">
                        Interested Tour Package
                      </label>
                      <select
                        name="tour"
                        value={formData.tour}
                        onChange={handleChange}
                        className="w-full border border-earth-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 transition bg-white"
                      >
                        <option value="">Select a package (optional)</option>
                        <option>Golden Triangle</option>
                        <option>Himachal Paradise</option>
                        <option>Rajasthan Royale</option>
                        <option>Kerala Backwaters</option>
                        <option>Uttarakhand Pilgrimage</option>
                        <option>Goa Beaches</option>
                        <option>Custom Tour</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-body text-sm font-semibold text-earth-800 mb-1 block">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us your travel dates, group size, budget, or anything else..."
                        className="w-full border border-earth-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-saffron-500 to-saffron-700 hover:from-saffron-600 hover:to-saffron-800 text-white font-body font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg text-base mt-2"
                    >
                      Send Enquiry 🚀
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
