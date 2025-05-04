import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  // Stretch the fade-out to be slower
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [50, 0, -20, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y,
        scale,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
