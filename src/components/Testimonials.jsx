import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Vikram & Shalini Malhotra",
    location: "Alibaug Coastal Estate",
    role: "Estate Principals",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80",
    rating: 5,
    review: "Collaborating with principal designer Rachel was an absolute masterclass in architectural elevation. He transformed our cliffside plot into an organic glass sanctuary. The execution by Anit's engineering team was flawless."
  },
  {
    name: "Rohan Sen",
    location: "Bangalore HQ",
    role: "CEO, Synergy Global",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
    rating: 5,
    review: "Our corporate suite required haute-couture prestige coupled with acoustic precision. Aura Design Studio orchestrated a workspace that routinely wows our international venture board."
  },
  {
    name: "Dr. Ananya Goel",
    location: "Mumbai Skyline",
    role: "Penthouse Owner",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80",
    rating: 5,
    review: "The Obsidian Penthouse exceeded every architectural expectation. The bookmatched Italian marble finishes and integrated cove lighting feel like an art gallery."
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-28 md:py-36 bg-[#0D0D0D] relative overflow-hidden text-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Editorial Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C5A880] mb-3 block">
            Patron Testimonials
          </span>
          <h2 className="text-clamp-title font-serif font-light text-[#F5F5F5] tracking-tight leading-tight">
            Resonating Endorsements <br />
            <span className="italic text-gold-gradient font-normal">& Client Stories</span>
          </h2>
        </div>

        {/* Testimonial Box */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="glassmorphism-editorial p-10 md:p-16 border border-white/10 relative"
            >
              <Quote className="w-16 h-16 text-[#C5A880]/20 absolute top-8 right-8 pointer-events-none" />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <img
                  src={TESTIMONIALS[activeIndex].photo}
                  alt={TESTIMONIALS[activeIndex].name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-[#C5A880] shrink-0"
                />

                <div className="space-y-4 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-1 text-[#C5A880]">
                    {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="font-serif text-xl md:text-2xl text-[#F5F5F5] font-light italic leading-relaxed">
                    "{TESTIMONIALS[activeIndex].review}"
                  </p>

                  <div>
                    <h3 className="font-serif text-xl text-[#F5F5F5]">{TESTIMONIALS[activeIndex].name}</h3>
                    <p className="text-xs font-mono text-[#C5A880] uppercase tracking-widest mt-1">
                      {TESTIMONIALS[activeIndex].role} • {TESTIMONIALS[activeIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-[#F5F5F5] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-[#F5F5F5] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
