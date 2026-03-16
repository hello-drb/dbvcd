"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up">
          <div className="space-y-12">
            {/* Main About */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-neutral-50">
                About
              </h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 text-neutral-400 text-lg leading-relaxed font-light"
              >
                <p>
                  I studied identity at Harvard—not personal brands, but how people construct meaning, presence,
                  and narrative about themselves. It shaped everything. I learned that the most powerful work happens
                  when visual strategy, craft, and storytelling align.
                </p>

                <p>
                  That's what I do now. I help artists and brands build the worlds that reflect who they are and who
                  they're becoming.
                </p>
              </motion.div>
            </div>

            {/* Music / Credentials */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="border-t border-neutral-800 pt-12 space-y-6"
            >
              <h3 className="text-xl font-serif font-light tracking-tight text-neutral-50">
                Music & Credentials
              </h3>

              <div className="space-y-4 text-neutral-400 text-base leading-relaxed font-light">
                <p>
                  <span className="text-neutral-300 font-light">Recording Academy member.</span> I've been making
                  music for 38 years—violinist since age five, multi-instrumentalist, thousands of performances
                  alongside artists like Daughtry and The Gin Blossoms. The creative instincts that come from a
                  lifetime of music inform every visual decision I make.
                </p>

                <p className="pt-4">
                  <a
                    href="https://suddenflightrecords.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-300 hover:text-neutral-100 underline underline-offset-2 transition-colors duration-300"
                  >
                    Sudden Flight Records
                  </a>
                  {" "}is my music home. Check it out if you want to hear where the other half of my thinking comes from.
                </p>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
