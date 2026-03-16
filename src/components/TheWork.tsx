"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function TheWork() {
  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up">
          <div className="space-y-12">
            {/* Section Title */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-neutral-50 mb-6">
                You know me for photos.
                <br />
                Here's the full picture.
              </h2>
            </div>

            {/* Identity Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 text-neutral-400 text-lg leading-relaxed"
            >
              <p>
                I help artists and brands figure out who they are creatively—and then build the world around it.
                For musicians, that means a full creative partnership across an album cycle: visual identity, art
                direction, photography, production, and video. For businesses and founders, it&apos;s brand strategy,
                positioning, photography, websites, and the digital presence that makes people take you seriously.
              </p>

              <p>
                The common thread is making sure what people see matches what you actually are. My work has been
                featured in Vogue, Billboard, and Downbeat Magazine—collaborating with Grammy-winning artists,
                independent musicians, authors, hospitality startups, and couture fashion ateliers alike.
              </p>

              <p>
                I run three practices under Silver Rush Productions: DrewImages.Studio for creative direction
                and photography, Silver Rush Media for brand strategy and websites, and Sudden Flight Records
                for music production and label services.
              </p>

              <p>
                If you&apos;re building something that deserves to be seen the right way, let&apos;s talk.
              </p>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}