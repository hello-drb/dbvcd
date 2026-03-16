"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface ServiceProps {
  title: string;
  description: string;
  isLeading?: boolean;
}

function ServiceCard({ title, description, isLeading = false }: ServiceProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative border border-neutral-800 rounded-lg p-8 backdrop-blur-sm hover:border-neutral-700 transition-all duration-300 ${
        isLeading ? "col-span-1 md:col-span-2 lg:col-span-3" : ""
      }`}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/0 via-neutral-800/0 to-neutral-900/0 group-hover:from-neutral-900/20 group-hover:via-neutral-800/10 group-hover:to-neutral-900/20 rounded-lg transition-all duration-500" />

      <div className="relative z-10">
        <motion.h3
          className={`font-serif font-light tracking-tight mb-4 text-neutral-50 ${
            isLeading ? "text-3xl sm:text-4xl" : "text-2xl"
          }`}
        >
          {title}
        </motion.h3>

        <p className="text-neutral-400 leading-relaxed font-light">
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
        "The umbrella that holds everything together. I guide the visual and conceptual strategy across all your projects—from album rollouts to brand launches. Art direction, conceptualization, and the decision-making that makes everything work in concert.",
      isLeading: true,
    },
    {
      title: "Photography",
      description:
        "Portraits, editorial, product, and lifestyle imagery that doesn't just look good—it tells the story you're building. Technical precision meets emotional depth.",
    },
    {
      title: "Production",
      description:
        "Overseeing the full production ecosystem. Locations, budgets, crew, logistics—the orchestration that lets creative vision become reality on set and beyond.",
    },
    {
      title: "Hybrid Filmmaking",
      description:
        "The space between stills and motion. Short-form films, music videos, behind-the-scenes content, and cinematic reels that move the work forward.",
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-neutral-50 mb-16">
            What I Build
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <ServiceCard
                title={service.title}
                description={service.description}
                isLeading={service.isLeading}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
