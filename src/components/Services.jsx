import React from "react";
import { motion } from "framer-motion";
import {
  Sofa,
  ChefHat,
  Bed,
  Briefcase,
  Building,
  Layers,
  Lightbulb,
  Palette,
  ArrowUpRight
} from "lucide-react";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Haute Living Sanctuaries",
      desc: "Architectural spatial curation that orchestrates custom Italian seating, sculptural acoustics, and grand fireplaces.",
      icon: Sofa
    },
    {
      number: "02",
      title: "Precision Culinary Engineering",
      desc: "German-engineered concealed kitchens featuring seamless bookmatched marble islands and integrated induction tech.",
      icon: ChefHat
    },
    {
      number: "03",
      title: "Private Master Suites",
      desc: "Tranquil sanctuaries crafted with custom acoustic headboards, automated silk drapery, and walk-in dressing rooms.",
      icon: Bed
    },
    {
      number: "04",
      title: "Executive Director Suites",
      desc: "High-octane corporate suites fusing biophilic glass partitions, leather-clad desks, and discreet video technology.",
      icon: Briefcase
    },
    {
      number: "05",
      title: "Boutique Commercial Real Estate",
      desc: "Immersive luxury environments for private banks, haute horlogerie lounges, and Michelin-starred hospitality concepts.",
      icon: Building
    },
    {
      number: "06",
      title: "Bespoke Atelier Furniture",
      desc: "Artisanal furniture limited-editions forged from smoked European oak, cast champagne brass, and rare alabaster stone.",
      icon: Palette
    },
    {
      number: "07",
      title: "Architectural Ceilings & Acoustics",
      desc: "Floating multi-tier ceiling volumes integrating concealed indirect perimeter cove lighting and sound absorption panels.",
      icon: Layers
    },
    {
      number: "08",
      title: "Luminous Lighting Architecture",
      desc: "Circadian lighting networks designed to accentuate architectural geometries and transition seamlessly from day to night.",
      icon: Lightbulb
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="services" className="py-28 md:py-36 bg-[#0D0D0D] relative overflow-hidden text-[#F5F5F5]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C5A880] mb-3 block">
              Architectural Capabilities
            </span>
            <h2 className="text-clamp-title font-serif font-light text-[#F5F5F5] tracking-tight leading-tight">
              Bespoke Services <br className="hidden md:block" />
              <span className="italic text-gold-gradient font-normal">& Comprehensive Atelier Craft</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 font-sans font-light max-w-sm leading-relaxed">
            From initial concept schematics to turn-key turnkey handovers, every detail is executed with uncompromising standard.
          </p>
        </div>

        {/* Services Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glassmorphism-editorial p-8 flex flex-col justify-between border border-white/10 hover:border-[#C5A880]/50 transition-all duration-500 group cursor-pointer relative overflow-hidden"
                data-cursor="DISCOVER"
              >
                {/* Background shimmer on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C5A880]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-[#C5A880] tracking-widest">{service.number}</span>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-[#C5A880] group-hover:text-[#121212] transition-all duration-300">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#F5F5F5] mb-3 group-hover:text-[#C5A880] transition-colors duration-300 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-gray-400 font-sans font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-8 flex items-center justify-between border-t border-white/5 mt-8">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500 group-hover:text-[#C5A880] transition-colors">
                    Learn More
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-[#C5A880] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
