"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IMAGES } from "@/lib/images";

const testimonials = [
  {
    quote: "Drew has an extraordinary ability to make you feel at ease — confident, supported, and beautifully directed.",
    detail: "I walked away with the best photos I've ever had of myself.",
    author: "Sophie M.",
    avatar: IMAGES.SOPHIE,
  },
  {
    quote: "The way Drew captures light, energy, and presence is unlike any experience I've had with another photographer.",
    detail: "From the first shoot, I knew I was in the right hands.",
    author: "Taylor Z.",
    avatar: IMAGES.TAYLOR,
  },
  {
    quote: "Drew creates an environment that feels relaxed, collaborative, and genuinely comfortable.",
    detail: "Even when I usually feel awkward on camera, I felt confident sharing ideas and being myself.",
    author: "Gracie T.",
    avatar: IMAGES.GRACIE,
  },
  {
    quote: "Drew is a kind soul with a sharp eye. The photography is handled with care, talent, and skill.",
    detail: "His direction and feedback make the time feel well spent and truly enjoyable.",
    author: "Alecia C.",
    avatar: IMAGES.ALECIA,
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
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-[--bg-elevated]">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Gold quotation mark */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-7xl sm:text-8xl text-[--accent-gold] leading-none mb-8 font-serif opacity-30"
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
                  <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic font-light leading-snug text-[--text-primary]">
                    {testimonials[currentIndex].quote}
                  </p>
                  <p className="text-lg sm:text-xl font-serif italic font-light leading-snug text-[--text-secondary] mt-4">
                    {testimonials[currentIndex].detail}
                  </p>
                </blockquote>

                <div className="flex items-center gap-4 pt-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="w-12 h-12 rounded-full object-cover border border-[--border]"
                    loading="lazy"
                  />
                  <p className="text-[--text-muted] font-light tracking-widest text-sm uppercase">
                    {testimonials[currentIndex].author}
                  </p>
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
                    ? "w-8 h-1.5 bg-[--accent-gold]"
                    : "w-4 h-1.5 bg-[--border] hover:bg-[--border-hover]"
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