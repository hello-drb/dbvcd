"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { IMAGES } from "@/lib/images";

export default function TheWork() {
  return (
    <section className="relative w-full py-28 sm:py-40 px-6 sm:px-8 bg-[var(--bg-primary)]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Text */}
            <div className="space-y-10">
              <div>
                <div className="section-number">(01) The Work</div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-[var(--text-primary)] mb-6">
                  Creative direction, brand strategy, and the
                  <span className="text-[var(--accent-gold)]"> visual world</span> around it.
                </h2>
                <div className="accent-divider" />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-5 text-[var(--text-secondary)] text-lg leading-relaxed font-light"
              >
                <p>
                  I&apos;m a creative director, musician, photographer, and producer based in New York. I work with
                  artists, authors, founders, and brands at a turning point&mdash;the moments when how you show up
                  needs to match what you&apos;ve become.
                </p>

                <p>
                  My background is unusual: social psychology research, a decade building marketing systems,
                  thousands of live performances, and a creative direction practice that spans album art,
                  photography, film, web, and brand strategy. The result is that I tend to see what people are
                  trying to become before they can fully articulate it&mdash;and I build the world around that vision.
                </p>

                <div className="flex flex-col gap-3 pt-4">
                  <a href="https://drewimages.studio" target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors group">
                    <span className="text-[var(--accent-gold)] mr-2">&rarr;</span>
                    DrewImages.Studio
                    <span className="text-[var(--text-muted)] ml-2 text-sm">Creative direction & photography</span>
                  </a>
                  <a href="https://silverrushmedia.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors group">
                    <span className="text-[var(--accent-gold)] mr-2">&rarr;</span>
                    Silver Rush Media
                    <span className="text-[var(--text-muted)] ml-2 text-sm">Brand strategy & websites</span>
                  </a>
                  <a href="https://suddenflightrecords.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors group">
                    <span className="text-[var(--accent-gold)] mr-2">&rarr;</span>
                    Sudden Flight Records
                    <span className="text-[var(--text-muted)] ml-2 text-sm">Music production & label services</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Image collage */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="rounded-lg overflow-hidden aspect-[3/4]">
                    <img src={IMAGES.CYRILLE} alt="Cyrille Aimée" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="rounded-lg overflow-hidden aspect-square">
                    <img src={IMAGES.SASHA_ONO} alt="Sasha Ono" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
                <div className="space-y-3 pt-8">
                  <div className="rounded-lg overflow-hidden aspect-square">
                    <img src={IMAGES.KATIE_JACOBY} alt="Katie Jacoby" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="rounded-lg overflow-hidden aspect-[3/4]">
                    <img src={IMAGES.MONIFAH} alt="Monifah" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
