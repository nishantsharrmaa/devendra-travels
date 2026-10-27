"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tour: "",
    pickupLocation: "",
    passengers: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          tour: "",
          pickupLocation: "",
          passengers: "",
          message: "",
        });
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Error submitting enquiry");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-10 text-center py-16">
        <div className="text-7xl mb-6">🎉</div>
        <h3 className="font-display text-3xl font-bold text-earth-900 mb-3">
          Thank You!
        </h3>
        <p className="font-body text-earth-600 text-lg">
          We&apos;ve received your enquiry. Our team will contact you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 px-6 py-2 bg-saffron-500 text-white rounded-lg hover:bg-saffron-600 transition"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-10">
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

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-body text-sm font-semibold text-earth-800 mb-1 block">
              Pickup City / Address *
            </label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
              placeholder="e.g. New Delhi"
              className="w-full border border-earth-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 transition"
            />
          </div>
          <div>
            <label className="font-body text-sm font-semibold text-earth-800 mb-1 block">
              Passengers *
            </label>
            <input
              type="number"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              required
              min="1"
              placeholder="Number of people"
              className="w-full border border-earth-200 rounded-xl px-4 py-3 font-body text-sm focus:outline-none focus:ring-2 focus:ring-saffron-400 transition"
            />
          </div>
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
          disabled={loading}
          className="w-full bg-gradient-to-r from-saffron-500 to-saffron-700 hover:from-saffron-600 hover:to-saffron-800 text-white font-body font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg text-base mt-2 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Enquiry 🚀"}
        </button>
      </form>
    </div>
  );
}
