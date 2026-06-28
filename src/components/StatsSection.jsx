import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ to, duration = 1.8 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px 0px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(to, 10);
    if (start === end) return;

    const totalMilliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMilliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMilliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function StatsSection() {
  const stats = [
    { value: 250, suffix: "+", label: "Luxury Estates Portfolio" },
    { value: 180, suffix: "+", label: "Private Client Commissions" },
    { value: 12, suffix: " Global", label: "Architectural Accolades" },
    { value: 100, suffix: "%", label: "Acoustic & Spatial Rigor" }
  ];

  return (
    <section className="relative py-24 bg-[#121212] border-y border-white/10 overflow-hidden text-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={idx}
              className="space-y-3"
            >
              <div className="font-serif text-4xl md:text-6xl font-light text-[#F5F5F5] tracking-tight">
                <span className="text-gold-gradient"><CountUp to={stat.value} /></span>
                <span className="text-sm font-mono text-[#C5A880] uppercase tracking-widest">{stat.suffix}</span>
              </div>
              <div className="w-8 h-[1px] bg-[#C5A880]/40 mx-auto" />
              <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
