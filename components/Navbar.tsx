"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tours", label: "Tours" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-saffron-700 flex items-center justify-center text-white font-display font-bold text-lg shadow-md">
            DS
          </div>
          <div>
            <div
              className={`font-display font-bold text-base leading-tight transition-colors ${
                scrolled ? "text-earth-900" : "text-white"
              }`}
            >
              Devendra Sharma
            </div>
            <div
              className={`font-body text-xs tracking-wider uppercase transition-colors ${
                scrolled ? "text-saffron-600" : "text-saffron-300"
              }`}
            >
              Tour & Travels
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link font-body font-medium text-sm transition-colors ${
                pathname === link.href
                  ? "text-saffron-500"
                  : scrolled
                  ? "text-earth-800 hover:text-saffron-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-saffron-500 hover:bg-saffron-600 text-white font-body font-semibold text-sm px-6 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-earth-800" : "bg-white"
              } ${
                menuOpen
                  ? i === 0
                    ? "rotate-45 translate-y-2"
                    : i === 1
                    ? "opacity-0"
                    : "-rotate-45 -translate-y-2"
                  : ""
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-earth-100 px-6 py-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block font-body font-medium py-3 border-b border-earth-50 text-sm ${
                pathname === link.href ? "text-saffron-600" : "text-earth-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center bg-saffron-500 text-white font-body font-semibold py-3 rounded-xl"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
