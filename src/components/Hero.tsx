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
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900 opacity-60" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Cycling phrase + constant line */}
        <div className="mb-12 flex flex-col items-center justify-center">
          <div className="h-20 sm:h-24 md:h-28 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-tight tracking-tight text-neutral-50"
              >
                {cyclingPhrases[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-tight tracking-tight text-neutral-300"
          >
            Now let&apos;s build its world.
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-lg sm:text-xl text-neutral-400 mb-12 font-light tracking-wide max-w-2xl mx-auto"
        >
          Creative Direction for artists, brands, and the stories between.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center pt-12"
        >
          <svg
            className="w-6 h-6 text-neutral-400"
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
