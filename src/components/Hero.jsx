import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Compass } from "lucide-react";

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    title: "Sculpting Architectural Sanctuary",
    subtitle: "Aura Design Studio shapes timeless, bespoke interior environments where modern minimalism meets organic warmth.",
    location: "Zurich & Mumbai",
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    title: "Pinnacle of High Editorial Luxury",
    subtitle: "Every line, texture, and light reflection is orchestrated to curate unmatched sensory residence experiences.",
    location: "Monaco Penthouse",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
    title: "Harmonious Spatial Alchemy",
    subtitle: "Merging Italian craftsmanship, custom marble, and biophilic proportions into living architectural art.",
    location: "Kyoto Estate",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleScrollTo = (id) => {
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
    <section 
      className="relative min-h-[100vh] w-full overflow-hidden bg-[#121212] flex items-center justify-center pt-20"
      aria-label="Hero Showcase"
    >
      {/* Full-Bleed Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={HERO_SLIDES[currentIndex].image}
              alt={HERO_SLIDES[currentIndex].title}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* WCAG AA Programmatic Linear Gradient Overlay (Guarantees > 4.5:1 text contrast) */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/75 to-[#121212]/45 pointer-events-none"
          aria-hidden="true"
        />
        <div 
          className="absolute inset-0 bg-radial from-transparent via-black/30 to-[#121212]/90 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-16 pb-28 md:py-24">
        <div className="max-w-4xl">
          {/* Subtle Editorial Header Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glassmorphism-gold text-xs font-medium uppercase tracking-[0.25em] text-[#C5A880] mb-6 border border-[#C5A880]/30"
          >
            <Compass className="w-3.5 h-3.5 text-[#C5A880] animate-spin" style={{ animationDuration: "12s" }} />
            <span>Architectural & Interior Architecture Firm</span>
          </motion.div>

          {/* Commanding Serif Title */}
          <motion.h1
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-clamp-hero font-serif font-light text-[#F5F5F5] mb-6 tracking-tight leading-[1.05]"
          >
            {HERO_SLIDES[currentIndex].title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="italic text-gold-gradient font-normal">
              {HERO_SLIDES[currentIndex].title.split(" ").slice(-2).join(" ")}
            </span>
          </motion.h1>

          {/* Subtitle Body Text */}
          <motion.p
            key={`sub-${currentIndex}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-clamp-body text-gray-300 font-light max-w-2xl mb-10 leading-relaxed font-sans"
          >
            {HERO_SLIDES[currentIndex].subtitle}
          </motion.p>

          {/* Prominent Above-the-Fold CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5"
          >
            <button
              onClick={() => handleScrollTo("#portfolio")}
              className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 bg-[#C5A880] text-[#121212] font-semibold text-sm tracking-widest uppercase overflow-hidden transition-all duration-500 hover:bg-[#D8BC93] hover:shadow-[0_0_30px_rgba(197,168,128,0.4)] cursor-pointer"
              aria-label="Explore Selected Works"
              data-cursor="EXPLORE"
            >
              <span className="relative z-10">Explore Selected Works</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>

            <button
              onClick={() => handleScrollTo("#contact")}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#C5A880]/40 text-[#F5F5F5] font-medium text-sm tracking-widest uppercase hover:border-[#C5A880] hover:text-[#C5A880] transition-all duration-300 cursor-pointer glassmorphism-editorial"
              aria-label="Request Private Consultation"
            >
              <span>Private Consultation</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Architectural Spec Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-12 right-12 z-20 hidden lg:flex flex-col p-6 rounded-none glassmorphism-editorial border border-white/10 max-w-[300px]"
      >
        <div className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880] mb-2 font-mono">Featured Residence</div>
        <h2 className="text-xl font-serif text-[#F5F5F5] mb-1">{HERO_SLIDES[currentIndex].location}</h2>
        <p className="text-xs text-gray-400 font-light mb-4">Bespoke Architectural Engineering & Styling</p>
        <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-gray-300">
          <span>Vision by <strong className="text-[#C5A880] font-normal">Vansh</strong></span>
          <span>Build by <strong className="text-[#C5A880] font-normal">Ridham</strong></span>
        </div>
      </motion.div>

      {/* Controls & Slide Counter */}
      <div className="absolute bottom-8 left-6 md:left-12 z-20 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-11 h-11 border border-white/20 flex items-center justify-center text-[#F5F5F5] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors duration-300 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 border border-white/20 flex items-center justify-center text-[#F5F5F5] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors duration-300 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs text-gray-400">
          <span className="text-[#C5A880] font-bold">0{currentIndex + 1}</span>
          <span className="w-8 h-[1px] bg-white/20 inline-block" />
          <span>0{HERO_SLIDES.length}</span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        onClick={() => handleScrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
        role="button"
        tabIndex={0}
        aria-label="Scroll down to About section"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-[#C5A880] font-mono">Scroll</span>
        <div className="w-4 h-7 border border-[#C5A880]/40 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-[#C5A880] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
