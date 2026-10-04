import { useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import { AnimatePresence, MotionConfig, motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './Navbar';

export function Layout() {
  const { pathname } = useLocation();
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const [showTop, setShowTop] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => setShowTop(y > 700));

  return (
    // reducedMotion="user" turns transform animations off for visitors who ask their OS for less motion
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F7F3ED] font-sans text-gray-900 scroll-smooth">
        {/* Scroll progress */}
        <motion.div
          style={{ scaleX: progress }}
          className="fixed top-0 left-0 right-0 h-[3px] bg-[#3B5998] origin-left z-[55] pointer-events-none"
        />

        <Navbar />

        {/* Fade between pages (opacity only, so fixed-position modals keep working) */}
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
        >
          <Outlet />
        </motion.div>

        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#1B2D5B] text-white shadow-lg hover:bg-[#3B5998] transition-colors"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
