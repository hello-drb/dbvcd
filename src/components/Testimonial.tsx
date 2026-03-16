"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Drew doesn't just take photos \u2014 he builds worlds. Working with him transformed how we present ourselves to the industry.",
    author: "Music Industry Director",
  },
  {
    quote:
      "The difference between what we did before and after Drew's direction was night and day. He elevated everything.",
    author: "Artist Manager",
  },
  {
    quote:
      "He thinks in systems. Every creative decision serves the larger vision. That's rare.",
    author: "Creative Collaborator",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-[--bg-primary]">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Warm gold quotation mark */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-7xl sm:text-8xl text-[--accent-gold] leading-none mb-8 font-serif opacity-40"
          >
            \u201C
          </motion.div>

          <div className="h-48 sm:h-64 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="space-y-6"
              >
                <blockquote>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic font-light leading-tight text-[--text-primary]">
                    {testimonials[currentIndex].quote}
                  </p>
                </blockquote>

                <p className="text-[--text-muted] font-light tracking-widest text-sm uppercase">
                  \u2014 {testimonials[currentIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex gap-2 justify-center mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 h-1 bg-[--accent-gold]"
                    : "w-4 h-1 bg-[--border]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
