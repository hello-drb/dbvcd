"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-[--bg-primary]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <div className="space-y-16">
            {/* Section Title */}
            <div>
              <div className="section-number">(04) About</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-[--text-primary] mb-6">
                About
              </h2>
              <div className="accent-divider" />
            </div>

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main text - wider column */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-2 space-y-6 text-[--text-secondary] text-lg leading-relaxed font-light"
              >
                <p>
                  I studied social psychology at Harvard\u2014how people construct identity, perception, and narrative
                  about themselves. That shapes everything I do now. Before going independent, I spent nearly a
                  decade as COO at Growthink, where I oversaw two divisions, launched a data analytics practice
                  serving over 100 companies, and traveled nationally advising business leaders.
                </p>

                <p>
                  In 2016 I founded Silver Rush Productions and turned those instincts toward creative work full
                  time. Projects have included album art and packaging, editorial and portrait photography, brand
                  identity systems, e-commerce launches, website design and builds, music video direction, and
                  creative strategy for capital raises. Clients range from Grammy-winning recording artists to
                  hospitality startups to couture fashion ateliers.
                </p>

                <p>
                  I&apos;m currently in production on The Good Ones, an AI-generated short film exploring race and
                  well-meaning technology, and I write{" "}
                  <a
                    href="https://drewbordeaux.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[--accent-gold] hover:text-[--accent-copper] underline underline-offset-2 transition-colors duration-300"
                  >
                    Signal to Noise
                  </a>
                  {" "}on Substack\u2014essays on race, identity, and the systems that shape how we see each other.
                </p>
              </motion.div>

              {/* Credentials Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="lg:col-span-1 border border-[--border] rounded-lg p-8 bg-[--bg-card] warm-glow h-fit"
              >
                <h3 className="text-lg font-serif font-light tracking-tight text-[--text-primary] mb-6">
                  Music & Credentials
                </h3>

                <div className="space-y-6 text-[--text-secondary] text-sm leading-relaxed font-light">
                  <div>
                    <p className="text-[--accent-gold] font-light mb-2">
                      Recording Academy
                    </p>
                    <p>
                      Voting member. Singer, songwriter, multi-instrumentalist, and producer working across rock, Americana, and soul.
                    </p>
                  </div>

                  <div className="border-t border-[--border] pt-4">
                    <p className="text-[--accent-gold] font-light mb-2">
                      Performance
                    </p>
                    <p>
                      1000+ live performances. Opened for Daughtry, KT Tunstall, The Gin Blossoms, and Boz Scaggs.
                    </p>
                  </div>

                  <div className="border-t border-[--border] pt-4">
                    <p className="text-[--accent-gold] font-light mb-2">
                      Releases
                    </p>
                    <p>
                      <em>Impulse/Instinct</em> (2021). Produced Becki Davis&apos;s <em>Lost and Found</em>.
                    </p>
                  </div>

                  <a
                    href="https://suddenflightrecords.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-t border-[--border] pt-4 text-[--accent-gold] hover:text-[--accent-copper] underline underline-offset-2 transition-colors duration-300"
                  >
                    Sudden Flight Records \u2192
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
