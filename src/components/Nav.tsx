"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-[var(--text-primary)] text-sm font-light tracking-widest uppercase hover:text-[var(--accent-gold)] transition-colors duration-300">
          Drew Bordeaux
        </a>

        <div className="hidden sm:flex items-center gap-8">
          {[
            ["Work", "#work"],
            ["Services", "#services"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-light tracking-wide transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
