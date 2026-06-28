import React from "react";
import { Award, Compass, Users, Code, PenTool } from "lucide-react";

export default function About() {
  const stats = [
    { value: "250+", label: "Bespoke Residences", icon: Award },
    { value: "180+", label: "Private Clients", icon: Users },
    { value: "12+", label: "Global Design Awards", icon: Compass },
    { value: "100%", label: "Architectural Precision", icon: Users }
  ];

  return (
    <section id="about" className="py-28 md:py-36 bg-[#121212] relative overflow-hidden text-[#F5F5F5]">
      {/* Editorial Decorative Watermark */}
      <div className="absolute right-[-2vw] top-1/4 text-white/[0.02] font-serif font-light text-[18vw] tracking-tighter pointer-events-none select-none -z-0 leading-none">
        ARCHITECT
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Section Subtitle Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C5A880] mb-3 block">
              Editorial Studio Profile
            </span>
            <h2 className="text-clamp-title font-serif font-light text-[#F5F5F5] tracking-tight leading-tight">
              Crafting Architectural Sanctuary <br className="hidden md:block"/>
              <span className="italic text-gold-gradient font-normal">Through Spatial Harmonies</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 font-sans font-light max-w-sm leading-relaxed">
            Founded on the principle that luxury living is an intimate dialog between light, structural materials, and human emotion.
          </p>
        </div>

        {/* Asymmetric Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Visual Composition (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="cinematic-img-box border border-white/10 p-2 glassmorphism-editorial">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
                  alt="Aura Design Studio Interior Masterpiece"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-transparent to-transparent" />
                
                {/* Floating Glass Stamp */}
                <div className="absolute bottom-6 left-6 right-6 p-5 glassmorphism-editorial border border-white/15">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold-gradient flex items-center justify-center text-[#121212] font-serif font-bold text-2xl shadow-lg">
                      A
                    </div>
                    <div>
                      <h3 className="text-[#F5F5F5] font-serif text-lg leading-tight">Aura Heritage</h3>
                      <p className="text-gray-400 text-xs font-mono">Est. 2019 • Zurich & Mumbai</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Editorial Story & Curators (7 Cols) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <p className="text-clamp-body text-gray-300 font-light leading-relaxed font-sans">
                Aura Design Studio is an elite, multi-disciplinary interior architecture practice dedicated to shaping rare, ultra-luxury environments. We transcend decorative trends by anchoring our creations in architectural balance, tactile materiality, and quiet luxury.
              </p>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                From cliffside villas overlooking pristine coastlines to grand penthouses with panoramic skyline views, our work reflects meticulous spatial planning, bespoke furniture fabrication, and state-of-the-art environmental acoustics.
              </p>
            </div>

            {/* Meet the Visionaries - Bento-Style Cards */}
            <div className="border-t border-white/10 pt-10">
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A880] mb-8">
                Master Directors of Vision & Craft
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Designer Credit */}
                <div className="p-6 glassmorphism-editorial border border-white/10 hover:border-[#C5A880]/40 transition-all duration-500 group">
                  <div className="w-10 h-10 bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] mb-4 group-hover:bg-[#C5A880] group-hover:text-[#121212] transition-colors">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl text-[#F5F5F5] group-hover:text-[#C5A880] transition-colors">Vansh</h4>
                  <p className="text-[11px] font-mono text-[#C5A880] uppercase tracking-widest mt-1">Principal Interior Director</p>
                  <p className="text-xs text-gray-400 font-light leading-relaxed mt-3">
                    Architectural visionary shaping spatial narratives through haute-couture textures, sculptural lighting, and Italian natural stones.
                  </p>
                </div>

                {/* Developer Credit */}
                <div className="p-6 glassmorphism-editorial border border-white/10 hover:border-[#C5A880]/40 transition-all duration-500 group">
                  <div className="w-10 h-10 bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] mb-4 group-hover:bg-[#C5A880] group-hover:text-[#121212] transition-colors">
                    <Code className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl text-[#F5F5F5] group-hover:text-[#C5A880] transition-colors">Ridham</h4>
                  <p className="text-[11px] font-mono text-[#C5A880] uppercase tracking-widest mt-1">Chief Digital Engineer</p>
                  <p className="text-xs text-gray-400 font-light leading-relaxed mt-3">
                    Engineering digital editorial perfection, ensuring flawless responsiveness, zero layout shift (CLS), and fluid micro-interactions.
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Stats Showcase Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="p-5 glassmorphism-editorial border border-white/10 hover:border-[#C5A880]/30 transition-all">
                  <div className="text-2xl md:text-3xl font-serif text-[#F5F5F5] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
