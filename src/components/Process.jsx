import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText, Layers, Hammer, Key } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Private Atelier Consultation",
      desc: "An in-depth spatial dialogue with principal designer Rachel. We articulate your lifestyle rhythms, material preferences, and architectural vision.",
      icon: MessageSquare,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=70",
    },
    {
      num: "02",
      title: "Architectural Schematics & Budgeting",
      desc: "Drafting precision floor plans, spatial circulation studies, material specifications, and fixed-investment financial forecasting.",
      icon: FileText,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=70",
    },
    {
      num: "03",
      title: "Photorealistic 3D Spatial Modeling",
      desc: "Creating immersive 8K hyper-realistic 3D visualizations, enabling you to experience lighting reflections and material textures before groundbreaking.",
      icon: Layers,
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=70",
    },
    {
      num: "04",
      title: "Artisanal Execution & Engineering",
      desc: "Directed on-site by lead engineer Anit. Master artisans install custom millwork, bookmatched stone, and automated environmental tech.",
      icon: Hammer,
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=70",
    },
    {
      num: "05",
      title: "Curated Styling & White-Glove Handover",
      desc: "Final architectural inspection, haute-couture textile styling, acoustic calibration, and turnkey key delivery to your brand-new sanctuary.",
      icon: Key,
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=70",
    }
  ];

  return (
    <section id="process" className="py-28 md:py-36 bg-[#121212] relative overflow-hidden text-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C5A880] mb-3 block">
              Execution Methodology
            </span>
            <h2 className="text-clamp-title font-serif font-light text-[#F5F5F5] tracking-tight leading-tight">
              The 5-Phase Journey <br className="hidden md:block" />
              <span className="italic text-gold-gradient font-normal">To Architectural Perfection</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 font-sans font-light max-w-sm leading-relaxed">
            A disciplined, transparent design methodology engineered for total piece of mind.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-16 relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center`}
              >
                {/* Content side */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-1 lg:text-right" : "lg:order-2 lg:text-left"}`}>
                  <div className={`inline-flex items-center gap-3 mb-4 ${isEven ? "lg:flex-row-reverse" : "flex-row"}`}>
                    <div className="w-8 h-8 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs text-[#C5A880] tracking-widest uppercase">Phase {step.num}</span>
                    <span className="w-8 h-[1px] bg-[#C5A880]/40 inline-block" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#F5F5F5] mb-4">{step.title}</h3>
                  <p className="text-sm text-gray-400 font-sans font-light leading-relaxed max-w-lg inline-block">
                    {step.desc}
                  </p>
                </div>

                {/* Image side */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="cinematic-img-box border border-white/10 glassmorphism-editorial p-2 aspect-[16/9]">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
