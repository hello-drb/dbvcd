"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IMAGES } from "@/lib/images";

const testimonials = [
  {
    quote: "Drew didn\u2019t just build a website for me \u2014 he helped shape the visual identity and voice of my brand from the ground up.",
    detail: "He consistently encouraged me to stretch beyond my comfort zone and share my voice more boldly than I might have on my own.",
    author: "Pam Hervey",
    title: "Founder, Pamela Hervey Wellness",
    avatar: null,
  },
  {
    quote: "Drew has an extraordinary ability to make you feel at ease \u2014 confident, supported, and beautifully directed.",
    detail: "I walked away with the best photos I\u2019ve ever had of myself.",
    author: "Sophie M.",
    title: null,
    avatar: IMAGES.SOPHIE,
  },
  {
    quote: "Drew creates an environment that feels relaxed, collaborative, and genuinely comfortable.",
    detail: "Even when I usually feel awkward on camera, I felt confident sharing ideas and being myself.",
    author: "Gracie T.",
    title: null,
    avatar: IMAGES.GRACIE,
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
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-[var(--bg-elevated)]">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Gold quotation mark */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-7xl sm:text-8xl text-[var(--accent-gold)] leading-none mb-8 font-serif opacity-30"
          >
            &ldquo;
          </motion.div>

          <div className="min-h-[280px] sm:min-h-[320px] flex items-start">
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
                  <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic font-light leading-snug text-[var(--text-primary)]">
                    {testimonials[currentIndex].quote}
                  </p>
                  <p className="text-lg sm:text-xl font-serif italic font-light leading-snug text-[var(--text-secondary)] mt-4">
                    {testimonials[currentIndex].detail}
                  </p>
                </blockquote>

                <div className="flex items-center gap-4 pt-4">
                  {testimonials[currentIndex].avatar && (
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                      className="w-12 h-12 rounded-full object-cover border border-[var(--border)]"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <p className="text-[var(--text-muted)] font-light tracking-widest text-sm uppercase">
                      {testimonials[currentIndex].author}
                    </p>
                    {testimonials[currentIndex].title && (
                      <p className="text-[var(--text-muted)] font-light text-xs mt-1 opacity-70">
                        {testimonials[currentIndex].title}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex gap-2 justify-center mt-12">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-1.5 bg-[var(--accent-gold)]"
                    : "w-4 h-1.5 bg-[var(--border)] hover:bg-[var(--border-hover)]"
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
