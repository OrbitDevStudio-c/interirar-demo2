import React from "react";
import { motion } from "framer-motion";
import { Check, Crown, Sparkles, Clock, ShieldCheck, Users, Gem } from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Rare Material Procurement",
      desc: "Direct access to Italian marble quarries, hand-dyed silk velvet, and FSC-certified smoked European oak.",
      icon: Crown
    },
    {
      title: "Haute Couture Architecture",
      desc: "Custom architectural schematics tailored precisely to your spatial lifestyle and acoustic preferences.",
      icon: Sparkles
    },
    {
      title: "Turnkey Timeline Precision",
      desc: "State-of-the-art construction management software guaranteeing zero delivery delays and transparent milestones.",
      icon: Clock
    },
    {
      title: "Transparent Asset Investment",
      desc: "Comprehensive fixed-budget proposals eliminating surprise add-ons while maximizing property valuation.",
      icon: ShieldCheck
    },
    {
      title: "Dual Mastery Team",
      desc: "Co-directed by principal designer Vansh and senior digital engineer Ridham for seamless execution.",
      icon: Users
    },
    {
      title: "Bespoke Artisanal Legacy",
      desc: "5+ years of sculpting award-winning penthouse sanctuaries and ultra-luxury estates globally.",
      icon: Gem
    }
  ];

  return (
    <section id="why-choose-us" className="py-28 md:py-36 bg-[#0D0D0D] relative overflow-hidden text-[#F5F5F5]">
      {/* Editorial Decorative Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#C5A880]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C5A880] mb-3 block">
              Design Philosophy
            </span>
            <h2 className="text-clamp-title font-serif font-light text-[#F5F5F5] tracking-tight leading-tight">
              Uncompromising Standards <br className="hidden md:block" />
              <span className="italic text-gold-gradient font-normal">& Architectural Rigor</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 font-sans font-light max-w-sm leading-relaxed">
            We merge old-world artisanal craftsmanship with cutting-edge spatial engineering.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                key={index}
                className="glassmorphism-editorial p-8 flex flex-col justify-between border border-white/10 hover:border-[#C5A880]/40 transition-all duration-500 group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#121212] transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center text-xs">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#F5F5F5] mb-3 group-hover:text-[#C5A880] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs text-gray-400 font-sans font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
