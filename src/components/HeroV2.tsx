"use client";

import { motion } from "framer-motion";

export default function HeroV2() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-elevated)] via-[var(--bg-primary)] to-[var(--bg-primary)]" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-6"
        >
          <p className="text-[var(--accent-gold)] text-sm font-light tracking-widest uppercase">
            Drew Bordeaux
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-tight tracking-tight text-[var(--text-primary)]">
            Your work has{" "}
            <span className="text-[var(--accent-gold)]">outgrown</span>{" "}
            how the world sees it.
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto leading-relaxed"
          >
            You&apos;ve put in the work. The expertise, the clients, the reputation. Now it&apos;s time for the world to see it clearly.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="pt-24"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-5 h-5 text-[var(--accent-gold)] opacity-60 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
