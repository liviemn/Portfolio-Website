import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const useSpringInView = (delay = 0, threshold = 0.3) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
          duration: 1.5,      // Slightly faster
          type: 'spring',
          bounce: 0.4,        // Single soft bounce
          delay,
        },
      });
    }
  }, [inView, controls, delay]);

  return {
    ref,
    controls,
    initial: {
      opacity: 0,
      y: 100,       // Start lower
      scale: 0.95,  // Slight zoom
      rotate: -3,   // Optional tilt
    },
  };
};
