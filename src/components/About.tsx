"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { IMAGES } from "@/lib/images";

export default function About() {
  return (
    <section id="about" className="relative w-full py-28 sm:py-40 px-6 sm:px-8 bg-[--bg-primary]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="space-y-16">
            <div>
              <div className="section-number">(04) About</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-[--text-primary] mb-6">
                About
              </h2>
              <div className="accent-divider" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Portrait */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="rounded-lg overflow-hidden aspect-[4/5]">
                  <img
                    src={IMAGES.ABOUT_PORTRAIT}
                    alt="Drew Bordeaux"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Bio + Credentials */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="lg:col-span-3 space-y-10"
              >
                <div className="space-y-6 text-[--text-secondary] text-lg leading-relaxed font-light">
                  <p>
                    I studied how people construct identity&mdash;first in a social psychology research lab,
                    then through a decade building marketing systems before most people knew what a CRM was.
                    I&apos;ve played thousands of shows, produced albums that landed on year-end lists, art
                    directed packaging for a Grammy Award&ndash;winning album, and directed a pilot with a
                    cast of fourteen.
                  </p>

                  <p className="text-[--text-primary] text-xl sm:text-2xl font-serif italic leading-snug">
                    The world told me to pick one. I picked all of them.
                  </p>

                  <p>
                    And it turns out that&apos;s exactly what artists and brands need&mdash;someone who
                    understands how sound, image, strategy, and systems work together, because they&apos;ve
                    built at the intersection their entire life.
                  </p>

                  <p>
                    I&apos;m a Recording Academy member, the founder of Silver Rush Productions, and I write
                    about creativity, technology, and the generalist life on{" "}
                    <a
                      href="https://drewbordeaux.substack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--accent-gold] hover:text-[--accent-copper] underline underline-offset-2 transition-colors duration-300"
                    >
                      Signal to Noise
                    </a>.
                  </p>
                </div>

                {/* Credentials - compact */}
                <div className="border border-[--border] rounded-lg p-6 bg-[--bg-card] warm-glow">
                  <h3 className="text-sm font-light tracking-widest uppercase text-[--accent-gold] mb-5">
                    Music
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[--text-secondary] text-sm leading-relaxed font-light">
                    <div>
                      <p className="text-[--text-primary] mb-1">Recording Academy</p>
                      <p>Voting member. The creative instincts that come from making music for 38 years inform everything I build for clients.</p>
                    </div>

                    <div>
                      <p className="text-[--text-primary] mb-1">1,000+ Performances</p>
                      <p>Opened for Daughtry, KT Tunstall, Gin Blossoms, Boz Scaggs.</p>
                    </div>

                    <div>
                      <p className="text-[--text-primary] mb-1">Releases</p>
                      <p><em>Impulse/Instinct</em> (2021). Produced Becki Davis&apos;s <em>Lost and Found</em>.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
