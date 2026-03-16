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
                  I studied social psychology at Harvard—how people construct identity, perception, and narrative
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
                    className="text-neutral-300 hover:text-neutral-100 underline underline-offset-2 transition-colors duration-300"
                  >
                    Signal to Noise
                  </a>
                  {" "}on Substack—essays on race, identity, and the systems that shape how we see each other.
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
                  <span className="text-neutral-300 font-light">Voting member of the Recording Academy.</span>{" "}
                  Singer, songwriter, multi-instrumentalist, and producer working across rock, Americana, and
                  soul—with over a thousand live performances across two decades, from venues like The Paramount
                  and Tarrytown Music Hall to opening for Daughtry, KT Tunstall, The Gin Blossoms, and Boz Scaggs.
                  Released Impulse/Instinct (2021) and produced Becki Davis&apos;s Lost and Found, which earned
                  national radio play and year-end list recognition. The creative instincts that come from a
                  lifetime of making music inform everything I build for clients.
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