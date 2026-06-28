import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowUpRight, Volume2, VolumeX } from "lucide-react";

export default function Header({ companyName = "AURA" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Editorial", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Selected Works", href: "#portfolio" },
    { name: "Philosophy", href: "#why-choose-us" },
    { name: "Process", href: "#process" },
    { name: "Client Stories", href: "#testimonials" },
    { name: "Inquire", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
    // Ambient luxury sound effect toggle simulation
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#121212]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl"
            : "bg-transparent py-6 md:py-8"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="flex flex-col tracking-widest text-[#F5F5F5] select-none group focus:outline-none"
            aria-label="Aura Design Studio Homepage"
          >
            <span className="text-2xl md:text-3xl font-serif tracking-tighter text-[#F5F5F5] group-hover:text-[#C5A880] transition-colors duration-300 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A880] inline-block" />
              {companyName}
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-mono pl-4">
              Interior Architecture
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-mono tracking-widest uppercase text-gray-300 hover:text-[#C5A880] transition-colors duration-300 relative py-1 hover-underline-gold"
                aria-label={`Navigate to ${link.name} section`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Audio Mood Toggle */}
            <button
              onClick={toggleAudio}
              className="flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-gray-400 hover:text-[#C5A880] transition-colors p-2"
              aria-label={isPlayingAudio ? "Mute ambient audio" : "Play ambient audio"}
              title="Ambient Soundscape"
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4 text-[#C5A880] animate-pulse" /> : <VolumeX className="w-4 h-4" />}
              <span>{isPlayingAudio ? "Sound On" : "Sound Off"}</span>
            </button>

            {/* Private Inquiry CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="px-6 py-2.5 border border-[#C5A880]/50 text-[#C5A880] font-mono text-xs tracking-widest uppercase flex items-center gap-2 hover:bg-[#C5A880] hover:text-[#121212] transition-all duration-300 glassmorphism-gold"
              aria-label="Book Private Consultation"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#F5F5F5] hover:text-[#C5A880] p-2 transition-colors focus:outline-none"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-md bg-[#121212] border-l border-white/10 p-8 md:p-12 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-20">
                <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5A880] mb-8 pb-3 border-b border-white/10">
                  Navigation Directory
                </div>
                <div className="flex flex-col space-y-6">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-2xl font-serif text-[#F5F5F5] hover:text-[#C5A880] transition-colors flex items-center justify-between group"
                      aria-label={`Go to ${link.name}`}
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#C5A880] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="space-y-6 border-t border-white/10 pt-6">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#C5A880] text-[#121212] font-semibold text-xs tracking-widest uppercase hover:bg-[#D8BC93] transition-colors"
                  aria-label="Book Free Consultation"
                >
                  <Phone className="w-4 h-4" />
                  <span>Request Private Consultation</span>
                </a>
                <p className="text-[11px] text-gray-500 font-mono text-center">
                  Curated by Vansh | Engineered by Ridham
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
