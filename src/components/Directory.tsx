"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { IMAGES } from "@/lib/images";

const practices = [
  {
    name: "DrewImages.Studio",
    tagline: "Thoughtful visual work, made collaboratively.",
    description: "Creative direction and photography for artists, founders, and creative teams.",
    href: "https://drewimages.studio",
    image: IMAGES.NICOLE_ZURAITIS,
  },
  {
    name: "Silver Rush Media",
    tagline: "Step into the brand you\u2019ve been becoming.",
    description: "Brand strategy, visual identity, and websites for people ready to be seen clearly.",
    href: "https://silverrushmedia.com",
    image: IMAGES.MONIFAH,
  },
  {
    name: "Sudden Flight Records",
    tagline: "From demo to master.",
    description: "Music production, label services, and sonic identity for independent artists.",
    href: "https://suddenflightrecords.com",
    image: IMAGES.JAZZMEIA_HORN,
  },
];

export default function Directory() {
  return (
    <section className="relative w-full py-28 sm:py-40 px-6 sm:px-8 bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {practices.map((practice, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.15}>
              <a
                href={practice.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-card)] warm-glow"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={practice.image}
                      alt={practice.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/50 to-transparent" />
                  </div>

                  {/* Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-serif font-light text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors duration-300">
                      {practice.name}
                    </h3>
                    <p className="text-sm text-[var(--accent-gold)] font-light italic mb-1">
                      {practice.tagline}
                    </p>
                    <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed">
                      {practice.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[var(--accent-gold)] text-sm font-light tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Visit</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
