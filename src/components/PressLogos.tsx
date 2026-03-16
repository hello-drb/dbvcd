"use client";

import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";

const logos = [
  { src: IMAGES.VOGUE, alt: "Vogue" },
  { src: IMAGES.BILLBOARD, alt: "Billboard" },
  { src: IMAGES.DOWNBEAT, alt: "Downbeat" },
  { src: IMAGES.AMERICAN_SONGWRITER, alt: "American Songwriter" },
];

export default function PressLogos() {
  return (
    <section className="w-full py-16 px-6 sm:px-8 bg-[--bg-primary] border-y border-[--border]">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-[--text-muted] text-xs font-light tracking-widest uppercase mb-10"
        >
          Featured in
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-10 sm:gap-16 flex-wrap"
        >
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-5 sm:h-7 opacity-50 hover:opacity-80 transition-opacity duration-300 grayscale brightness-200"
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}