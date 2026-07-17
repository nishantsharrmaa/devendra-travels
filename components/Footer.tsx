import Link from "next/link";
import { CONTACT_INFO } from "@/lib/config";

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
              {/* SOCIAL LINKS — replace # with your actual URLs */}
              <a
                href="https://facebook.com/YOUR_PAGE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-colors duration-300"
              >
                {/* Facebook icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/YOUR_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-[#f09433] hover:to-[#bc1888] flex items-center justify-center transition-colors duration-300"
              >
                {/* Instagram icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors duration-300"
              >
                {/* WhatsApp icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
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
                <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`} className="font-body text-earth-300 hover:text-saffron-400 text-sm transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-saffron-400">✉️</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="font-body text-earth-300 hover:text-saffron-400 text-sm transition-colors">
                  {CONTACT_INFO.email}
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
