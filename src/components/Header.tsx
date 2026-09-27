"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, GraduationCap, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/admissions", label: "Admissions" },
  { href: "/academics", label: "Academics & Skills" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a1f44] shadow-lg border-b-4 border-[#c9a227]">
      {/* Top bar */}
      <div className="bg-[#c62828] text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="font-medium">Spire School & College | Spire Academy</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={12} />
              0304-5060323
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">0313-7722405</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-white rounded-full p-2 shadow-md">
            <GraduationCap size={32} className="text-[#0a1f44]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white leading-tight tracking-wide">
              SPIRE <span className="text-[#c9a227]">ACADEMY</span>
            </span>
            <span className="text-[10px] text-gray-300 uppercase tracking-widest">
              School & College
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#c9a227] text-[#0a1f44]"
                    : "text-white hover:bg-white/10 hover:text-[#c9a227]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <Link
          href="/admissions"
          className="hidden lg:inline-flex items-center gap-2 bg-[#c62828] hover:bg-[#a02020] text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Apply Online
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-[#0a1f44] border-t border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-4 py-3 rounded-md text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#c9a227] text-[#0a1f44]"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/admissions"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-[#c62828] text-white px-4 py-3 rounded-md font-semibold text-sm text-center"
              >
                Apply Online
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
