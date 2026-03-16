"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { IMAGES } from "@/lib/images";

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-[--bg-primary]">
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

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
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
                className="lg:col-span-3 space-y-8"
              >
                <div className="space-y-5 text-[--text-secondary] text-lg leading-relaxed font-light">
                  <p>
                    Social psychology at Harvard. Nearly a decade as COO at Growthink, overseeing two divisions
                    and advising 100+ companies. In 2016, I founded Silver Rush Productions and turned those instincts
                    toward creative work full time.
                  </p>

                  <p>
                    Clients range from Grammy-winning recording artists to hospitality startups to couture fashion
                    ateliers. Currently in production on <em>The Good Ones</em>, a short film exploring race and
                    well-meaning technology, and writing{" "}
                    <a
                      href="https://drewbordeaux.substack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[--accent-gold] hover:text-[--accent-copper] underline underline-offset-2 transition-colors duration-300"
                    >
                      Signal to Noise
                    </a>
                    {" "}on Substack.
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
                      <p>Voting member. Songwriter, multi-instrumentalist, producer.</p>
                    </div>

                    <div>
                      <p className="text-[--text-primary] mb-1">1,000+ Performances</p>
                      <p>Opened for Daughtry, KT Tunstall, Gin Blossoms, Boz Scaggs.</p>
                    </div>

                    <div>
                      <p className="text-[--text-primary] mb-1">Releases</p>
                      <p><em>Impulse/Instinct</em> (2021). Produced Becki Davis's <em>Lost and Found</em>.</p>
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