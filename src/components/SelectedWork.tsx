"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { IMAGES } from "@/lib/images";

interface WorkPieceProps {
  name: string;
  role: string;
  description: string;
  image: string;
  reversed?: boolean;
}

function WorkPiece({ name, role, description, image, reversed = false }: WorkPieceProps) {
  return (
    <motion.div
      className="group grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10 items-center"
    >
      {/* Image */}
      <div className={`relative overflow-hidden rounded-lg aspect-[4/5] ${reversed ? "md:order-2" : ""}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[--bg-primary]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className={`py-10 md:py-0 space-y-4 ${reversed ? "md:order-1 md:text-right" : ""}`}>
        <p className="text-[--accent-gold] text-sm font-light tracking-widest uppercase">
          {role}
        </p>
        <h3 className="text-3xl sm:text-4xl font-serif font-light text-[--text-primary]">
          {name}
        </h3>
        <p className="text-[--text-secondary] leading-relaxed font-light text-base max-w-md">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function SelectedWork() {
  const workPieces = [
    {
      name: "Nicole Zuraitis",
      role: "Art Direction & Photography",
      description: "Photography and art direction for Grammy Award\u2013winning vocalist\u2014including album packaging for her latest release. Art director and photographer credit on the project that set the standard for how she presents to the industry.",
      image: IMAGES.NICOLE_ZURAITIS,
    },
    {
      name: "Jazzmeia Horn",
      role: "Photography",
      description: "Album cover photography for Grammy-nominated vocalist. Images built to match the depth and ambition of one of jazz\u2019s most dynamic artists.",
      image: IMAGES.JAZZMEIA_HORN,
      reversed: true,
    },
    {
      name: "Becki Davis",
      role: "Album Production",
      description: "Produced Lost and Found\u2014an album that earned Folk radio play across the country and landed on Top 30 year-end lists. Full production from demo to master.",
      image: IMAGES.BECKI_DAVIS,
    },
    {
      name: "Jessie Wagner",
      role: "Creative Direction",
      description: "Full creative direction for Wicked Cool Records recording artist. Album art, press kit, social content, and tour imagery\u2014one cohesive visual world.",
      image: IMAGES.JESSIE_WAGNER,
      reversed: true,
    },
    {
      name: "Romina Garber",
      role: "Portrait & Editorial",
      description: "Portraits for New York Times bestselling author. Images built for press, social, and publisher needs that match the depth of her literary work.",
      image: IMAGES.ROMINA_GARBER,
    },
    {
      name: "Casey Baltes",
      role: "Executive Portraits",
      description: "Portraiture and personal branding for the VP of Games & Immersive at Tribeca Festival. Clarity and confidence for speaking engagements and leadership profiles.",
      image: IMAGES.CASEY_BALTES,
      reversed: true,
    },
  ];

  return (
    <section id="work" className="relative w-full py-28 sm:py-40 px-6 sm:px-8 bg-[--bg-primary]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="mb-24">
            <div className="section-number">(03) Selected Work</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-[--text-primary] mb-6">
              Selected Work
            </h2>
            <div className="accent-divider" />
          </div>
        </ScrollReveal>

        <div className="space-y-28 sm:space-y-40">
          {workPieces.map((piece, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1}>
              <WorkPiece
                name={piece.name}
                role={piece.role}
                description={piece.description}
                image={piece.image}
                reversed={piece.reversed}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
