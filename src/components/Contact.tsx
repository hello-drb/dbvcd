"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section className="relative w-full py-32 sm:py-48 px-6 sm:px-8 bg-gradient-to-r from-[--bg-elevated] via-[--bg-primary] to-[--bg-elevated] overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[--accent-gold]/5 to-transparent opacity-50" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <ScrollReveal direction="up">
          <div className="space-y-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight text-[--text-primary]"
            >
              Let's build something.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-[--text-secondary] font-light"
            >
              Ready to start your next project? Let's talk about your vision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <a
                href="mailto:drew@drewbordeaux.com"
                className="group relative inline-flex items-center justify-center px-10 py-4 rounded-lg bg-[--accent-copper] text-white font-light tracking-wide transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              >
                Get in touch
              </a>

              <a
                href="https://instagram.com/drewimages"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-10 py-4 rounded-lg border border-[--accent-gold] text-[--accent-gold] font-light tracking-wide transition-all duration-300 hover:bg-[--accent-gold]/10"
              >
                Instagram
              </a>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
