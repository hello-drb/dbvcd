"use client";

import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";

const clients = [
  { src: IMAGES.NICOLE_ZURAITIS, alt: "Nicole Zuraitis — Grammy-winning vocalist, art directed by Drew Bordeaux" },
  { src: IMAGES.CYRILLE, alt: "Cyrille Aimée — jazz artist portrait by Drew Bordeaux" },
  { src: IMAGES.JAZZMEIA_HORN, alt: "Jazzmeia Horn — Grammy-nominated album cover photography" },
  { src: IMAGES.KATIE_JACOBY, alt: "Katie Jacoby — musician portrait and creative direction" },
  { src: IMAGES.ROMINA_GARBER, alt: "Romina Garber — NYT bestselling author portrait" },
  { src: IMAGES.MONIFAH, alt: "Monifah — artist portrait and visual identity" },
];

export default function ProofStrip() {
  return (
    <section className="relative w-full py-16 sm:py-20 px-6 sm:px-8 bg-[var(--bg-primary)] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Client image strip */}
        <div className="flex gap-3 sm:gap-4 justify-center items-center">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-[var(--border)] flex-shrink-0"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Subtle credential line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-[var(--text-muted)] text-sm font-light tracking-wide mt-8"
        >
          Grammy-winning artists &middot; NYT bestselling authors &middot; Tribeca Festival &middot; Fortune 500 leaders
        </motion.p>
      </motion.div>
    </section>
  );
}
