"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface WorkPieceProps {
  name: string;
  role: string;
  outcome: string;
}

function WorkPiece({ name, role, outcome }: WorkPieceProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group border-b border-neutral-800 py-8 hover:border-neutral-700 transition-colors duration-300"
    >
      {/* Placeholder Image Area */}
      <div className="mb-6 h-64 sm:h-80 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-lg overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-neutral-600 text-sm font-light tracking-wide mb-2">
              Project Image
            </div>
            <div className="w-16 h-16 rounded-full bg-neutral-700 mx-auto opacity-50" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif font-light text-neutral-50 mb-2">
            {name}
          </h3>
          <p className="text-neutral-500 text-sm font-light tracking-wide">
            {role}
          </p>
        </div>

        <p className="text-neutral-400 leading-relaxed font-light text-base">
          {outcome}
        </p>
      </div>
    </motion.div>
  );
}

export default function SelectedWork() {
  const workPieces: WorkPieceProps[] = [
    {
      name: "Nicole Zuraitis",
      role: "Photographer & Art Director",
      outcome:
        "Photographic direction and art direction for likely Grammy-nominated album. Established the visual identity across all promotional materials, merch design, and social content. The work became the gold standard for how she presents herself to the industry.",
    },
    {
      name: "Jazzmeia Horn",
      role: "Art Director & Visual Strategy",
      outcome:
        "Complete visual identity overhaul including album artwork, press kit design, and promotional photography. Created a cohesive visual language that strengthened her position in the jazz market.",
    },
    {
      name: "Becki Howard",
      role: "Photographer & Content Director",
      outcome:
        "Comprehensive photography and creative direction for brand positioning and social strategy. Developed an editorial voice that increased engagement and industry recognition.",
    },
    {
      name: "Lauren Desberg",
      role: "Art Director & Production Lead",
      outcome:
        "Full production and art direction for visual content series. Managed all creative decisions from concept through final delivery, building a distinctive visual brand.",
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-neutral-50 mb-16">
            Selected Work
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {workPieces.map((piece, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 0.1}>
              <WorkPiece
                name={piece.name}
                role={piece.role}
                outcome={piece.outcome}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
