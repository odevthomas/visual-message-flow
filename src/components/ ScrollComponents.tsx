import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

// Scroll Progress Indicator Component
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 rounded-full z-50"
      style={{
        scaleX,
        background: "linear-gradient(135deg, hsl(210 85% 45%), hsl(210 90% 65%), hsl(210 80% 35%))",
        transformOrigin: "left"
      }}
    />
  );
};

// Floating Action Button Component
export const FloatingActionButton: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const scale = useTransform(scrollY, [0, 300], [0.8, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center z-40 backdrop-blur-sm border border-white/20 shadow-glow text-white cursor-pointer transition-all duration-300"
      style={{
        opacity,
        scale,
        background: "linear-gradient(135deg, hsl(210 85% 45%), hsl(210 90% 65%))",
        boxShadow: "0 0 20px hsl(210 90% 65% / 0.4)"
      }}
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8 }}
      whileHover={{
        scale: 1.1,
        translateY: -2,
        boxShadow: "0 0 32px hsl(210 90% 65% / 0.6)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <ArrowUp className="w-6 h-6 stroke-foreground" style={{ filter: "drop-shadow(0 0 4px hsl(210 90% 65% / 0.8))" }} />
    </motion.button>
  );
};
