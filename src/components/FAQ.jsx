import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "What defines the Aura Design Studio architectural aesthetic?",
    answer: "We specialize in Haute Editorial Luxury — an interplay of bookmatched natural marble, bronze profile accents, concealed lighting, and acoustic organic textures. Principal designer Rachel crafts each residence as a custom legacy project."
  },
  {
    question: "What is the typical investment timeline for a bespoke penthouse or villa?",
    answer: "Turnkey penthouses typically span 90 to 120 days from schematic approval to handover. Grand architectural villas range between 150 and 240 days. Every phase is tracked via automated milestones managed by lead engineer Anit."
  },
  {
    question: "How do you handle global material procurement?",
    answer: "We maintain direct relationships with stone quarries in Carrara, Italy, artisanal timber mills in Germany, and silk drapery ateliers in France. Clients enjoy private viewing invitations to our partner galleries."
  },
  {
    question: "Are photorealistic 3D virtual walkthroughs included in the commission?",
    answer: "Yes. Step 03 of our atelier process delivers hyper-realistic 8K 3D renders and interactive spatial walkthroughs, ensuring absolute alignment prior to physical craftsmanship."
  },
  {
    question: "How do I initiate a private architectural consultation?",
    answer: "Simply submit an inquiry via our private contact module below or schedule a video conference with our atelier director. We offer initial spatial reviews globally."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 md:py-36 bg-[#0D0D0D] relative overflow-hidden text-[#F5F5F5]">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Editorial Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C5A880] mb-3 block">
            Curated Knowledge
          </span>
          <h2 className="text-clamp-title font-serif font-light text-[#F5F5F5] tracking-tight leading-tight">
            Frequently Addressed <br />
            <span className="italic text-gold-gradient font-normal">Private Inquiries</span>
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glassmorphism-editorial border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-label={faq.question}
                >
                  <span className="font-serif text-xl text-[#F5F5F5] font-light pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                    isOpen ? 'border-[#C5A880] bg-[#C5A880] text-[#121212]' : 'border-white/20 text-gray-400'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0 border-t border-white/5">
                        <p className="text-sm font-sans font-light text-gray-300 leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
