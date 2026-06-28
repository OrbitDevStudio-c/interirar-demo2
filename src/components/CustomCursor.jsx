import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setIsHovered(true);
        setHoverText(target.getAttribute("data-cursor") || "VIEW");
      } else if (e.target.closest("a, button, input, textarea")) {
        setIsHovered(true);
        setHoverText("");
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Main outer ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#C5A880]/60 pointer-events-none flex items-center justify-center text-[10px] uppercase font-mono tracking-widest text-[#121212] bg-[#C5A880]/90 font-bold shadow-xl"
        animate={{
          x: mousePosition.x - (isHovered ? 36 : 16),
          y: mousePosition.y - (isHovered ? 36 : 16),
          width: isHovered ? 72 : 32,
          height: isHovered ? 72 : 32,
          opacity: mousePosition.x === -100 ? 0 : 0.85,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 350, mass: 0.5 }}
      >
        {hoverText && <span className="animate-fade-in">{hoverText}</span>}
      </motion.div>
    </div>
  );
}
