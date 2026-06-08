import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-saffron-700 flex items-center justify-center text-white font-display font-bold text-lg">
                DS
              </div>
              <div>
                <div className="font-display font-bold text-white">Devendra Sharma</div>
                <div className="font-body text-xs text-saffron-400 tracking-wider uppercase">
                  Tour & Travels
                </div>
              </div>
            </div>
            <p className="font-body text-earth-300 text-sm leading-relaxed max-w-xs mb-6">
              Crafting unforgettable journeys across India's most breathtaking destinations
              since 2005. Your trusted travel partner.
            </p>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-saffron-500 flex items-center justify-center text-xs font-body font-semibold transition-colors duration-300"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/tours", label: "Tour Packages" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-body text-earth-300 hover:text-saffron-400 text-sm transition-colors"
                  >
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-saffron-400 mt-0.5">📍</span>
                <span className="font-body text-earth-300 text-sm">
                  Meerut, Uttar Pradesh, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-saffron-400">📞</span>
                <a href="tel:+919876543210" className="font-body text-earth-300 hover:text-saffron-400 text-sm transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-saffron-400">✉️</span>
                <a href="mailto:info@devendratravels.com" className="font-body text-earth-300 hover:text-saffron-400 text-sm transition-colors">
                  info@devendratravels.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-saffron-400">🕐</span>
                <span className="font-body text-earth-300 text-sm">
                  Mon–Sat: 9AM – 7PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-earth-400 text-sm">
            © {new Date().getFullYear()} Devendra Sharma Tour & Travels. All rights reserved.
          </p>
          <p className="font-body text-earth-500 text-xs">
            Made with ❤️ for travellers across India
          </p>
        </div>
      </div>
    </footer>
  );
}
