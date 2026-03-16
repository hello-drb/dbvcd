"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const cyclingPhrases = [
  "You wrote the song.",
  "You wrote the book.",
  "You started the company.",
  "You gave the talk.",
  "You got the gig.",
  "You launched the brand.",
  "You recorded the album.",
  "You opened the restaurant.",
  "You built the practice.",
  "You designed the collection.",
  "You booked the tour.",
  "You started the movement.",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cyclingPhrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-[--bg-primary]">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[--bg-primary] via-[--bg-elevated] to-[--bg-primary] opacity-40" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-8">
          {/* Left-aligned, dramatic cycling phrase */}
          <div className="space-y-4">
            <div className="h-24 sm:h-32 md:h-40 lg:h-48 flex items-start justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light leading-tight tracking-tight text-[--text-primary]"
                >
                  {cyclingPhrases[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Decorative accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="accent-divider"
            />
          </div>

          {/* Subtle constant line below */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed tracking-wide text-[--accent-gold] max-w-2xl"
          >
            Now let&apos;s build its world.
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-base sm:text-lg text-[--text-secondary] mt-16 font-light tracking-wide max-w-2xl"
        >
          Creative Direction for artists, brands, and the stories between.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-start pt-20"
        >
          <svg
            className="w-6 h-6 text-[--accent-gold]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
