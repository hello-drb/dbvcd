"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { IMAGES } from "@/lib/images";

export default function TheWork() {
  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-[--bg-primary]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div className="space-y-8">
              <div>
                <div className="section-number">(01) The Work</div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-[--text-primary] mb-6">
                  Creative direction, brand strategy, and the
                  <span className="text-[--accent-gold]"> visual world</span> around it.
                </h2>
                <div className="accent-divider" />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-5 text-[--text-secondary] text-lg leading-relaxed font-light"
              >
                <p>
                  I work with artists, founders, and brands to make sure the world sees them as clearly as they
                  see themselves. That means photography, visual identity, websites, art direction, production&mdash;whatever
                  it takes to close the gap between who you are and how you show up.
                </p>

                <div className="flex flex-col gap-3 pt-2">
                  <a href="https://drewimages.studio" target="_blank" rel="noopener noreferrer" className="text-[--text-primary] hover:text-[--accent-gold] transition-colors group">
                    <span className="text-[--accent-gold] mr-2">&rarr;</span>
                    DrewImages.Studio
                    <span className="text-[--text-muted] ml-2 text-sm">Creative direction & photography</span>
                  </a>
                  <a href="https://silverrushmedia.com" target="_blank" rel="noopener noreferrer" className="text-[--text-primary] hover:text-[--accent-gold] transition-colors group">
                    <span className="text-[--accent-gold] mr-2">&rarr;</span>
                    Silver Rush Media
                    <span className="text-[--text-muted] ml-2 text-sm">Brand strategy & websites</span>
                  </a>
                  <a href="https://suddenflightrecords.com" target="_blank" rel="noopener noreferrer" className="text-[--text-primary] hover:text-[--accent-gold] transition-colors group">
                    <span className="text-[--accent-gold] mr-2">&rarr;</span>
                    Sudden Flight Records
                    <span className="text-[--text-muted] ml-2 text-sm">Music production & label services</span>
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
                    <img src={IMAGES.CYRILLE} alt="Cyrille Aim\u00E9e" className="w-full h-full object-cover" loading="lazy" />
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
