"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface ServiceProps {
  title: string;
  description: string;
  number: string;
  isLeading?: boolean;
}

function ServiceCard({ title, description, number, isLeading = false }: ServiceProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative border border-[--border] rounded-lg p-8 backdrop-blur-sm transition-all duration-300 warm-glow ${
        isLeading ? "col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[--bg-card] to-[--bg-elevated]" : "bg-[--bg-card]"
      }`}
    >
      {/* Warm glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-[--accent-gold]/0 via-[--accent-gold]/0 to-[--accent-gold]/0 group-hover:from-[--accent-gold]/10 group-hover:via-[--accent-gold]/5 group-hover:to-[--accent-gold]/10 rounded-lg transition-all duration-500" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <motion.h3
            className={`font-serif font-light tracking-tight text-[--text-primary] ${
              isLeading ? "text-3xl sm:text-4xl" : "text-2xl"
            }`}
          >
            {title}
          </motion.h3>
          <span className="text-[--accent-gold] text-sm font-light tracking-widest font-sans">
            {number}
          </span>
        </div>

        <p className="text-[--text-secondary] leading-relaxed font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Creative Direction",
      description:
        "The umbrella that holds everything together. I guide the visual and conceptual strategy across all your projects\u2014from album rollouts to brand launches. Art direction, conceptualization, and the decision-making that makes everything work in concert.",
      number: "01",
      isLeading: true,
    },
    {
      title: "Photography",
      description:
        "Portraits, editorial, product, and lifestyle imagery that doesn't just look good\u2014it tells the story you're building. Technical precision meets emotional depth.",
      number: "02",
    },
    {
      title: "Production",
      description:
        "Overseeing the full production ecosystem. Locations, budgets, crew, logistics\u2014the orchestration that lets creative vision become reality on set and beyond.",
      number: "03",
    },
    {
      title: "Hybrid Filmmaking",
      description:
        "The space between stills and motion. Short-form films, music videos, behind-the-scenes content, and cinematic reels that move the work forward.",
      number: "04",
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-[--bg-primary]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <div className="mb-16">
            <div className="section-number">(02) What I Build</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-[--text-primary] mb-6">
              What I Build
            </h2>
            <div className="accent-divider" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <ServiceCard
                title={service.title}
                description={service.description}
                number={service.number}
                isLeading={service.isLeading}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
