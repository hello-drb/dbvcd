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
                Photography built my eye. Twenty years behind the camera taught me how light, composition, and
                timing create emotion. But I realized early: the best visual work isn't about the shot—it's about
                the world around it.
              </p>

              <p>
                As a Creative Director, I build those worlds. I work with artists, labels, and brands who are ready
                to stop making noise and start building something memorable. I handle the full scope: visual identity,
                art direction, production design, and the hybrid filmmaking that lives between photos and motion.
              </p>

              <p>
                I think like a filmmaker, see like a photographer, and build like someone who understands that
                everything—the shoot, the edit, the layout—serves the story.
              </p>

              <p>
                If you've got something that deserves to be unforgettable, let's build it.
              </p>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
