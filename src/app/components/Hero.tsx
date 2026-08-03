import { motion } from 'motion/react';
import heroBg from 'figma:asset/f87a07df8827e23dba6492bb11aa7487235a03f1.webp';

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Above the fold: load eagerly and at high priority, never lazily. */}
        <img
          src={heroBg}
          alt="Workshop Background"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay for readability */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-white/90 text-sm md:text-base font-medium tracking-[0.2em] mb-4 uppercase">
            Engineer & Designer
          </p>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2">
            ASHER STRAUS
          </h1>
          <p className="text-white/80 max-w-lg mx-auto text-lg md:text-xl font-light mt-6">
            Building creative, hands-on solutions for unique challenges.
          </p>
        </motion.div>
      </div>
    </section>
  );
}