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
      className={`group relative border border-[--border] rounded-lg p-8 sm:p-10 backdrop-blur-sm transition-all duration-300 warm-glow ${
        isLeading ? "col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-r from-[--bg-card] to-[--bg-elevated]" : "bg-[--bg-card]"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[--accent-gold]/0 via-[--accent-gold]/0 to-[--accent-gold]/0 group-hover:from-[--accent-gold]/10 group-hover:via-[--accent-gold]/5 group-hover:to-[--accent-gold]/10 rounded-lg transition-all duration-500" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
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
        "Strategic and visual identity work that defines your next chapter. Through structured sessions, I build the creative framework\u2014mood boards, visual direction, positioning, art direction\u2014that makes everything downstream more intentional. For artists releasing music, authors launching books, and brands in transition. Offerings range from a focused strategy session to a full creative partnership through your release.",
      number: "01",
      isLeading: true,
    },
    {
      title: "Photography",
      description:
        "Portraits, editorial, product, and lifestyle imagery that tells the story you\u2019re building. Whether it\u2019s a natural light session in Westchester or a full studio production in the city, every image is designed to serve your brand for years\u2014not just a post.",
      number: "02",
    },
    {
      title: "Music Production",
      description:
        "Full album production, singles, and sonic identity development. From demo to master, with the ear of a lifelong multi-instrumentalist and the strategic mind of a creative director. Recent work: produced Becki Davis\u2019s Lost and Found\u2014Folk radio play, Top 30 year-end lists.",
      number: "03",
    },
    {
      title: "Hybrid Filmmaking",
      description:
        "The space between stills and motion. Short-form films, music videos, behind-the-scenes content, and cinematic reels that move the work forward. Recent work includes directing You See Me, a 22-minute episodic pilot with a cast and crew of 14, and The Good Ones, a short film currently in production exploring race and technology.",
      number: "04",
    },
  ];

  return (
    <section id="services" className="relative w-full py-28 sm:py-40 px-6 sm:px-8 bg-[--bg-primary]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <div className="mb-20">
            <div className="section-number">(02) Services</div>
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
