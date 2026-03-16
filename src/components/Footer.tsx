"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full py-16 px-6 sm:px-8 border-t border-neutral-800 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Ecosystem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-light tracking-widest uppercase text-neutral-500 mb-4">
              Ecosystem
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://drewimages.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300 font-light text-sm"
                >
                  DrewImages.Studio
                </a>
              </li>
              <li>
                <a
                  href="https://silverrushmedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300 font-light text-sm"
                >
                  SilverRushMedia.com
                </a>
              </li>
              <li>
                <a
                  href="https://suddenflightrecords.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300 font-light text-sm"
                >
                  SuddenFlightRecords.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-light tracking-widest uppercase text-neutral-500 mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/drewimages"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300 font-light text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/drewbordeaux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300 font-light text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://signaltonoise.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-100 transition-colors duration-300 font-light text-sm"
                >
                  Signal to Noise (Substack)
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-sm font-light tracking-widest uppercase text-neutral-500 mb-4">
              Info
            </h3>
            <p className="text-neutral-400 font-light text-sm leading-relaxed">
              © {currentYear} Silver Rush Productions LLC
            </p>
          </motion.div>
        </div>

        {/* Bottom Border & Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-neutral-800 pt-8"
        >
          <p className="text-neutral-500 text-xs font-light tracking-widest text-center">
            Crafted with intention. Built to last.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
