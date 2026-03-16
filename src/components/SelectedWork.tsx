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
      className="group border-b border-[--border] py-12 hover:border-[--border-hover] transition-colors duration-300"
    >
      {/* Placeholder Image Area with warm overlay */}
      <div className="mb-8 h-64 sm:h-80 bg-gradient-to-br from-[--bg-elevated] via-[--bg-card] to-[--bg-elevated] rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[--accent-copper]/20 to-[--accent-gold]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-[--text-muted] text-sm font-light tracking-wide mb-2">
              Project Image
            </div>
            <div className="w-16 h-16 rounded-full bg-[--border] mx-auto opacity-50" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif font-light text-[--text-primary] mb-2">
            {name}
          </h3>
          <p className="text-[--text-muted] text-sm font-light tracking-widest uppercase">
            {role}
          </p>
        </div>

        <p className="text-[--text-secondary] leading-relaxed font-light text-base">
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
        "Photography and art direction for Grammy Award\u2013winning vocalist and composer. Established the visual identity across album artwork, promotional materials, and social content\u2014the work that set the standard for how she presents herself to the industry.",
    },
    {
      name: "Jessie Wagner",
      role: "Creative Director & Photographer",
      outcome:
        "Full creative direction and photography for Wicked Cool Records recording artist and songwriter. Album and single art, press kit, social content, and tour imagery\u2014building a cohesive visual world around her music.",
    },
    {
      name: "Romina Garber",
      role: "Photographer & Visual Identity",
      outcome:
        "Portrait and editorial photography for New York Times bestselling author. Created a visual identity that matched the depth and reach of her literary work\u2014images built for press, social, and publisher needs.",
    },
    {
      name: "Talea Ensemble",
      role: "Visual Identity & Group Portraits",
      outcome:
        "Visual identity system for classical chamber ensemble. Cohesive group portraits and individual member photography designed to elevate their presence across concert programs, press, and digital platforms.",
    },
    {
      name: "Casey Baltes",
      role: "Founder Portraits & Personal Branding",
      outcome:
        "Executive portraiture and personal branding for the VP of Games & Immersive at Tribeca Festival. Images built for clarity and confidence\u2014designed to live across speaking engagements, press, and leadership profiles.",
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-8 bg-[--bg-primary]">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="up">
          <div className="mb-16">
            <div className="section-number">(03) Selected Work</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light tracking-tight text-[--text-primary] mb-6">
              Selected Work
            </h2>
            <div className="accent-divider" />
          </div>
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
