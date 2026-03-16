"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-neutral-950">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal direction="up">
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-neutral-50 text-center">
              Let's build something.
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="mailto:drew@drewbordeaux.com"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg border border-neutral-700 hover:border-neutral-600 transition-all duration-300 overflow-hidden"
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="relative text-neutral-50 font-light tracking-wide group-hover:text-neutral-100 transition-colors duration-300">
                  Get in touch
                </span>
              </a>

              <a
                href="https://instagram.com/drewimages"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg border border-neutral-700 hover:border-neutral-600 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="relative text-neutral-50 font-light tracking-wide group-hover:text-neutral-100 transition-colors duration-300">
                  Instagram
                </span>
              </a>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
