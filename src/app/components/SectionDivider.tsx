import { motion } from 'motion/react';

// A thin navy line that draws itself across the page on the seam between two sections,
// so the change in background reads as a deliberate divider.
export function SectionDivider() {
  return (
    <div className="relative z-10 px-6 md:px-12">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto h-[2px] bg-[#1B2D5B]/50 origin-left"
      />
    </div>
  );
}
