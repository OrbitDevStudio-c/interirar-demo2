import React from "react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer({ companyName = "AURA" }) {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0D0D0D] text-gray-400 pt-28 pb-12 border-t border-white/10 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-white/10 relative z-10">
        {/* Brand Column */}
        <div className="space-y-6">
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "#")}
            className="flex flex-col tracking-widest text-[#F5F5F5] select-none group"
            aria-label="Return to top of page"
          >
            <span className="text-3xl font-serif text-[#F5F5F5] group-hover:text-[#C5A880] transition-colors">
              {companyName}
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-mono">
              Interior Architecture Studio
            </span>
          </a>
          <p className="text-gray-400 text-xs font-light leading-relaxed">
            Aura Design Studio shapes ultra-luxury, bespoke spatial sanctuaries. We merge Italian natural materials with precision structural engineering.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-6">
          <h4 className="text-[#F5F5F5] font-serif text-lg tracking-wide border-l-2 border-[#C5A880] pl-3">
            Navigation Directory
          </h4>
          <ul className="space-y-3 text-xs font-mono uppercase tracking-widest">
            {[
              { name: "Editorial Profile", href: "#about" },
              { name: "Architectural Capabilities", href: "#services" },
              { name: "Selected Works", href: "#portfolio" },
              { name: "Execution Methodology", href: "#process" },
              { name: "Private Consultation", href: "#contact" }
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="hover:text-[#C5A880] transition-colors flex items-center gap-2 group"
                  aria-label={`Footer navigation link to ${link.name}`}
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Atelier Capabilities */}
        <div className="space-y-6">
          <h4 className="text-[#F5F5F5] font-serif text-lg tracking-wide border-l-2 border-[#C5A880] pl-3">
            Spatial Typologies
          </h4>
          <ul className="space-y-3 text-xs font-mono uppercase tracking-widest">
            {[
              "Penthouse Sanctuaries",
              "Architectural Villas",
              "Executive Director Suites",
              "Concealed Kitchen Tech",
              "Luminous Lighting Schemes"
            ].map((serv, idx) => (
              <li key={idx}>
                <a
                  href="#services"
                  onClick={(e) => handleScrollTo(e, "#services")}
                  className="hover:text-[#C5A880] transition-colors flex items-center gap-2 group"
                  aria-label={`View ${serv} service`}
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  <span>{serv}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Global Concierge */}
        <div className="space-y-6">
          <h4 className="text-[#F5F5F5] font-serif text-lg tracking-wide border-l-2 border-[#C5A880] pl-3">
            Atelier Concierge
          </h4>
          <ul className="space-y-4 text-xs font-light">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <span>Palais Royale, Level 42, Worli, Mumbai & Gotthardstrasse 26, Zürich</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
              <a href="mailto:inquire@auradesignstudio.com" className="hover:text-[#C5A880] transition-colors">
                inquire@auradesignstudio.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
              <a href="tel:+41442110000" className="hover:text-[#C5A880] transition-colors">
                +41 (44) 211-0000
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-mono gap-4">
        <div>
          &copy; {new Date().getFullYear()} Aura Design Studio. All Rights Reserved.
        </div>

        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2">
          <span>Vision by <strong className="text-[#C5A880] font-normal">Vansh</strong></span>
          <span className="text-gray-600">|</span>
          <span>Engineered by <strong className="text-[#C5A880] font-normal">Ridham</strong></span>
        </div>
      </div>
    </footer>
  );
}
