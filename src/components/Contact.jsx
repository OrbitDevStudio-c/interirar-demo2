import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Globe } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Penthouse Sanctuary",
    budget: "$100k - $250k",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const projectTypes = [
    "Penthouse Sanctuary",
    "Architectural Villa",
    "Executive HQ Suite",
    "Bespoke Kitchen & Bath",
    "Hospitality Concept"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      setError("Please state your full name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setError("Please provide a valid direct phone number.");
      return;
    }
    if (!formData.email.includes("@")) {
      setError("Please provide a valid electronic mail address.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#121212] relative overflow-hidden text-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#C5A880] mb-3 block">
              Private Commission
            </span>
            <h2 className="text-clamp-title font-serif font-light text-[#F5F5F5] tracking-tight leading-tight">
              Commence Your Legacy <br className="hidden md:block" />
              <span className="italic text-gold-gradient font-normal">& Request Consultation</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 font-sans font-light max-w-sm leading-relaxed">
            Our atelier directors review all private inquiries within 24 business hours.
          </p>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Studio Directory Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glassmorphism-editorial p-8 border border-white/10 space-y-8">
              <div>
                <span className="text-[10px] font-mono text-[#C5A880] uppercase tracking-widest block mb-2">
                  Atelier Offices
                </span>
                <h3 className="font-serif text-2xl text-[#F5F5F5]">Aura Design Studio Headquarters</h3>
              </div>

              <div className="space-y-6 pt-4 border-t border-white/10 text-sm font-light">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-0.5">Zurich Studio</span>
                    <p className="text-gray-200">Gotthardstrasse 26, 8002 Zürich, Switzerland</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] shrink-0 mt-0.5">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-0.5">Mumbai Studio</span>
                    <p className="text-gray-200">Level 42, Palais Royale, Worli, Mumbai 400018</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-0.5">Direct Line</span>
                    <a href="tel:+41442110000" className="text-[#C5A880] hover:underline">+41 (44) 211-0000</a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#C5A880]/10 border border-[#C5A880]/30 flex items-center justify-center text-[#C5A880] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-0.5">Atelier Concierge</span>
                    <a href="mailto:inquire@auradesignstudio.com" className="text-[#C5A880] hover:underline">inquire@auradesignstudio.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Private Commission Form */}
          <div className="lg:col-span-7">
            <div className="glassmorphism-editorial p-8 md:p-12 border border-white/10 relative">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 bg-[#C5A880]/20 border border-[#C5A880] text-[#C5A880] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-serif text-3xl text-[#F5F5F5]">Inquiry Received</h3>
                    <p className="text-sm font-sans font-light text-gray-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#C5A880] font-normal">{formData.name}</strong>. Our atelier concierge and principal designer Vansh will reach out shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3 bg-[#C5A880] text-[#121212] font-mono text-xs uppercase tracking-widest hover:bg-[#D8BC93] transition-all cursor-pointer mt-4"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-red-900/40 border border-red-500/50 text-red-200 text-xs flex items-center gap-3">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-2">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Lord / Lady / Mr. / Ms."
                          className="w-full px-4 py-3.5 bg-white/5 border border-white/15 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                          required
                          aria-label="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-2">
                          Direct Telephone *
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3.5 bg-white/5 border border-white/15 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                          required
                          aria-label="Your direct telephone number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-email" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-2">
                          Electronic Mail *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="client@domain.com"
                          className="w-full px-4 py-3.5 bg-white/5 border border-white/15 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                          required
                          aria-label="Your email address"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-typology" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-2">
                          Spatial Typology
                        </label>
                        <select
                          id="contact-typology"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3.5 bg-[#181818] border border-white/15 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                          aria-label="Select spatial typology"
                        >
                          {projectTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-2">
                        Project Vision Notes
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Detail your architectural aspirations, square footage, location..."
                        className="w-full px-4 py-3.5 bg-white/5 border border-white/15 text-[#F5F5F5] text-sm focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                        aria-label="Your project vision details"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-[#C5A880] text-[#121212] font-semibold font-mono text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#D8BC93] transition-all cursor-pointer"
                      aria-label="Submit Private Commission Request"
                    >
                      <span>Submit Private Commission</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
