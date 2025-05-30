import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const useSpringInView = (delay = 0, threshold = 0.3) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
          duration: isMobile ? 1 : 1.5,
          type: isMobile ? 'tween' : 'spring',
          bounce: 0.4,
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
      y: isMobile ? 50 : 100,
      scale: 0.95,
      rotate: isMobile ? 0 : -3, 
    },
  };
};
