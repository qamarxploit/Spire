import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/admissions", label: "Admissions" },
  { href: "/academics", label: "Academics & Skills" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a1f44] text-white border-t-4 border-[#c9a227]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="bg-white rounded-full p-2 shadow-md">
                <GraduationCap size={28} className="text-[#0a1f44]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  SPIRE <span className="text-[#c9a227]">ACADEMY</span>
                </span>
                <span className="text-[10px] text-gray-300 uppercase tracking-widest">
                  School & College
                </span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Inspiring Excellence — Where Excellence Meets Success! Operating as Spire School & College in the morning and Spire Academy in the evening.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#c9a227] font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#c9a227] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#c9a227] font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin size={18} className="text-[#c9a227] shrink-0 mt-0.5" />
                <span>Opposite Al-Faisal Mall, Near U-Bank, GT Road, Wah Cantt</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Phone size={18} className="text-[#c9a227] shrink-0" />
                <span>0304-5060323</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Phone size={18} className="text-[#c9a227] shrink-0" />
                <span>0313-7722405</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail size={18} className="text-[#c9a227] shrink-0" />
                <span>info@spireacademy.edu.pk</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[#c9a227] font-bold text-lg mb-4">Follow Us</h3>
            <p className="text-gray-300 text-sm mb-4">
              Stay connected with us on social media for the latest updates and events.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/14oLkFbahnj/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#c9a227] p-2.5 rounded-md transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/zahid.iqbal.359?stkn=MXZ5amttNjYxMG9qcA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#c9a227] p-2.5 rounded-md transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://m.youtube.com/results?sp=mAEA&search_query=Spire+College+"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#c9a227] p-2.5 rounded-md transition-colors"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#05122a] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2026 Spire Academy. All Rights Reserved. | Designed & Developed by{" "}
            <a
              href="https://qamarorakzai.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a227] hover:underline font-semibold"
            >
              Qamar Orakzai (qamarxploit)
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
