"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function ContactV2() {
  return (
    <section id="contact" className="relative w-full py-32 sm:py-48 px-6 sm:px-8 bg-[var(--bg-primary)]">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal direction="up">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight text-[var(--text-primary)]"
            >
              Let&apos;s start with a conversation.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-[var(--text-secondary)] font-light"
            >
              Tell me where you are and what you&apos;re building.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-5 justify-center pt-6"
            >
              <a
                href="mailto:drew@drewbordeaux.com"
                className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-[var(--accent-copper)] text-white font-light tracking-wide transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              >
                Get in touch
              </a>

              <a
                href="https://instagram.com/drewimages"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 rounded-lg border border-[var(--accent-gold)] text-[var(--accent-gold)] font-light tracking-wide transition-all duration-300 hover:bg-[var(--accent-gold)]/10"
              >
                Instagram
              </a>

              <a
                href="https://linkedin.com/in/drewbordeaux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-4 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] font-light tracking-wide transition-all duration-300 hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
