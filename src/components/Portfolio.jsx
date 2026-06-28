import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Eye
} from "lucide-react";

const GALLERY = {
  obsidian: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1400",
  villa: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400",
  kitchen: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1400",
  bedroom: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400",
  lounge: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1400",
  loft: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1400",
  chandelier: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400",
};

const PROJECTS = [
  {
    id: 1,
    name: "The Obsidian Penthouse",
    category: "Apartment",
    images: [GALLERY.obsidian, GALLERY.loft, GALLERY.bedroom, GALLERY.lounge],
    video: "/obsidian-penthouse.mp4",
    desc: "A bold, dark-themed penthouse balancing charcoal gray marble with gold-inlay profile lines and rich velvet textures.",
    location: "Mumbai",
    bhk: "4 BHK",
    area: "4,200 Sq. Ft.",
    year: "2025",
    startDate: "Jan 2025",
    endDate: "Jun 2025",
    span: "lg:col-span-8 lg:row-span-2 min-h-[420px]",
  },
  {
    id: 2,
    name: "Villa Lumina Estate",
    category: "Villa",
    images: [GALLERY.villa, GALLERY.chandelier, GALLERY.lounge, GALLERY.bedroom],
    video: "/obsidian-penthouse.mp4",
    desc: "An expansive minimalist villa using double-height glass facades, natural stone walls, and ambient cove lighting.",
    location: "Alibaug",
    bhk: "5 BHK",
    area: "7,500 Sq. Ft.",
    year: "2024",
    startDate: "Mar 2024",
    endDate: "Nov 2024",
    span: "lg:col-span-4 min-h-[320px]",
  },
  {
    id: 3,
    name: "Synergy Corporate HQ",
    category: "Office",
    images: [GALLERY.office, GALLERY.loft, GALLERY.obsidian, GALLERY.kitchen],
    video: "/obsidian-penthouse.mp4",
    desc: "A premium corporate office featuring green partition walls, biophilic integrations, and customizable acoustic ceilings.",
    location: "Bangalore",
    bhk: "Open Plan",
    area: "12,000 Sq. Ft.",
    year: "2025",
    startDate: "Feb 2025",
    endDate: "Aug 2025",
    span: "lg:col-span-4 min-h-[320px]",
  },
  {
    id: 4,
    name: "The Culinary Hearth",
    category: "Kitchen",
    images: [GALLERY.kitchen, GALLERY.lounge, GALLERY.villa, GALLERY.bedroom],
    video: "/obsidian-penthouse.mp4",
    desc: "A sleek German-engineered kitchen matching high-gloss handleless cabinets, built-in cooktops, and a marble island.",
    location: "Delhi NCR",
    bhk: "Modular Kitchen",
    area: "650 Sq. Ft.",
    year: "2025",
    startDate: "Apr 2025",
    endDate: "Jun 2025",
    span: "lg:col-span-4 min-h-[320px]",
  },
  {
    id: 5,
    name: "Sanctuary Master Suite",
    category: "Bedroom",
    images: [GALLERY.bedroom, GALLERY.obsidian, GALLERY.loft, GALLERY.chandelier],
    video: "/obsidian-penthouse.mp4",
    desc: "A warm, neutral master bedroom featuring a fluted wood accent wall, gold light sconces, and an integrated dressing room.",
    location: "Pune",
    bhk: "1 BHK",
    area: "800 Sq. Ft.",
    year: "2024",
    startDate: "Jun 2024",
    endDate: "Sep 2024",
    span: "lg:col-span-8 min-h-[360px]",
  },
  {
    id: 6,
    name: "The Marble Lounge",
    category: "Living Room",
    images: [GALLERY.lounge, GALLERY.villa, GALLERY.chandelier, GALLERY.office],
    video: "/obsidian-penthouse.mp4",
    desc: "A luxury social living space centered around a backlit bookmatched Italian marble wall and custom modular sofas.",
    location: "Hyderabad",
    bhk: "Open Layout",
    area: "1,200 Sq. Ft.",
    year: "2025",
    startDate: "Jan 2025",
    endDate: "May 2025",
    span: "lg:col-span-4 min-h-[320px]",
  },
];

const CATEGORIES = ["All", "Apartment", "Villa", "Office", "Kitchen", "Bedroom", "Living Room"];

const optimized = (url, width, quality = 70) =>
  `${url.split("?")[0]}?auto=format&fit=crop&w=${width}&q=${quality}`;

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredProjects = useMemo(
    () => (activeFilter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeFilter)),
    [activeFilter]
  );

  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const closeProject = () => setSelectedProject(null);

  const showNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex(
      (prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length
    );
  };

  const handleInquireClick = () => {
    closeProject();
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeProject();
      if (!selectedProject) return;
      if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => (prev + 1) % selectedProject.images.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveImageIndex(
          (prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-28 md:py-36 bg-[#121212] relative text-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C5A880] mb-3 block">
              Portfolio Showcase
            </span>
            <h2 className="text-clamp-title font-serif font-light text-[#F5F5F5] tracking-tight leading-tight">
              Selected Works <br className="hidden md:block" />
              <span className="italic text-gold-gradient font-normal">& Curated Residences</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 font-sans font-light max-w-sm leading-relaxed">
            Discover our structured bento editorial gallery highlighting iconic spatial architectural triumphs.
          </p>
        </div>

        {/* Categories Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 font-mono text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#C5A880] text-[#121212] font-bold shadow-lg"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-[#F5F5F5] border border-white/10"
              }`}
              aria-label={`Filter projects by ${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Structured Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                className={`group relative overflow-hidden border border-white/10 bg-[#181818] cursor-pointer ${project.span}`}
                onClick={() => openProject(project)}
                data-cursor="VIEW"
              >
                {/* Responsive Image with Aspect Ratio & Cinematic Zoom */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={optimized(project.images[0], 1000, 75)}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* WCAG AA Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="inline-block px-3 py-1 bg-[#C5A880]/20 border border-[#C5A880]/40 text-[#C5A880] text-[10px] uppercase font-mono tracking-widest backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#F5F5F5] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      <Eye className="w-4 h-4 text-[#C5A880]" />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#F5F5F5] tracking-tight mb-2 group-hover:text-[#C5A880] transition-colors duration-300">
                      {project.name}
                    </h3>
                    <p className="text-xs text-gray-300 font-sans font-light line-clamp-2 max-w-lg mb-4">
                      {project.desc}
                    </p>
                    <div className="flex items-center gap-4 text-[11px] font-mono text-gray-400 border-t border-white/10 pt-3">
                      <span>{project.location}</span>
                      <span>•</span>
                      <span>{project.area}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Full Project Detail Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl overflow-y-auto"
            onClick={closeProject}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="min-h-screen w-full max-w-6xl mx-auto bg-[#121212] border-x border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Modal Header */}
              <div className="sticky top-0 z-30 flex items-center justify-between gap-4 px-8 py-6 bg-[#121212]/95 backdrop-blur-md border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono text-[#C5A880] uppercase tracking-widest block mb-1">
                    {selectedProject.category} • {selectedProject.location}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-[#F5F5F5]">
                    {selectedProject.name}
                  </h2>
                </div>
                <button
                  onClick={closeProject}
                  className="w-12 h-12 border border-white/20 flex items-center justify-center text-[#F5F5F5] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors cursor-pointer"
                  aria-label="Close project details modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Gallery Display */}
              <div className="relative h-[350px] sm:h-[500px] lg:h-[600px] bg-[#0D0D0D]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={optimized(selectedProject.images[activeImageIndex], 1400, 80)}
                    alt={`${selectedProject.name} photograph ${activeImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={showPrevImage}
                      className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 text-white flex items-center justify-center hover:bg-[#C5A880] hover:text-[#121212] transition-colors border border-white/20 cursor-pointer"
                      aria-label="Previous photograph"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={showNextImage}
                      className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 text-white flex items-center justify-center hover:bg-[#C5A880] hover:text-[#121212] transition-colors border border-white/20 cursor-pointer"
                      aria-label="Next photograph"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-6 right-6 px-4 py-1.5 bg-black/70 border border-white/10 text-white font-mono text-xs">
                      {activeImageIndex + 1} / {selectedProject.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="flex gap-4 px-8 py-6 overflow-x-auto bg-[#181818] border-b border-white/10">
                  {selectedProject.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`flex-shrink-0 w-24 h-20 overflow-hidden border transition-all cursor-pointer ${
                        i === activeImageIndex ? "border-[#C5A880] opacity-100" : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                      aria-label={`Select thumbnail ${i + 1}`}
                    >
                      <img src={optimized(img, 300, 40)} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Specifications & Narrative */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 px-8 py-12">
                <div className="lg:col-span-7 space-y-8">
                  <div>
                    <h3 className="font-serif text-2xl text-[#F5F5F5] mb-4">Architectural Narrative</h3>
                    <p className="text-gray-300 font-sans font-light text-sm leading-relaxed">
                      {selectedProject.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8">
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">Location</span>
                      <span className="text-sm text-[#F5F5F5] font-medium">{selectedProject.location}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">Scale</span>
                      <span className="text-sm text-[#F5F5F5] font-medium">{selectedProject.area}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">Typology</span>
                      <span className="text-sm text-[#F5F5F5] font-medium">{selectedProject.bhk}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">Completion</span>
                      <span className="text-sm text-[#F5F5F5] font-medium">{selectedProject.year}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-6">
                  <div className="p-6 glassmorphism-editorial border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                      <PlayCircle className="w-5 h-5 text-[#C5A880]" />
                      <h4 className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5]">Cinematic Walkthrough</h4>
                    </div>
                    <div className="aspect-video bg-black border border-white/10">
                      <video controls preload="none" poster={optimized(selectedProject.images[0], 800, 60)} className="w-full h-full object-cover">
                        <source src={selectedProject.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>

                  <button
                    onClick={handleInquireClick}
                    className="w-full py-4 bg-[#C5A880] text-[#121212] font-semibold text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#D8BC93] transition-all cursor-pointer"
                  >
                    <span>Commission Similar Estate</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}