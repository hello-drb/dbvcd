"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function MidCTA() {
  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-[var(--bg-elevated)]">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent-gold)]/3 via-transparent to-[var(--accent-gold)]/3 opacity-60" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal direction="up">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-tight text-[var(--text-primary)] mb-8"
          >
            Ready to start your next project?
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-[var(--accent-copper)] text-white font-light tracking-wide transition-all duration-300 hover:opacity-90 hover:shadow-lg"
            >
              Get in touch
            </a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
