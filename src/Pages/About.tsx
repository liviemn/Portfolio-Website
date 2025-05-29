import { useEffect, useState, useRef } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SpotifyActivity from '../Components/Lanyard';
import AboutBoxes from '../Components/AboutBoxes';
import coffeecup from '../assets/coffeecup.png';
import sleeping from '../assets/sleeping.gif';
import Wave from '../Components/Wave'; // Re-enable Wave import

function About() {
  const [, setVisible] = useState(true);
  const aboutRef = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  const { ref: bottomRowRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: isMobile ? 1.1 : 2.3,
          type: isMobile ? 'tween' : 'spring',
          bounce: isMobile ? 0.1 : 0.5,
        },
      });
    }
  }, [inView, controls, isMobile]);

  return (
    <div
      id="About"
      ref={aboutRef}
      className="relative h-screen flex justify-center sm:justify-end items-end pr-[5vw] pb-[20vh]"
    >
      {/* Title - Wave on desktop, simple fade on mobile */}
      <div className="absolute top-[5vh] sm:top-[15vh] left-[15vw] text-[#3E2B2B] text-outline text-[8vw] sm:text-[4.5vw] font-poetsen font-[800]">
        {isMobile ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Get to Know Me
          </motion.div>
        ) : (
          <Wave text="Get to Know Me" />
        )}
      </div>

      {/* Info Boxes */}
      <AboutBoxes />

      {/* Bottom Row (GIF + Cup + Spotify) */}
      <motion.div
        ref={bottomRowRef}
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        className="flex flex-col sm:flex-row items-center gap-[4vh] sm:gap-[2vw] translate-y-[22vh] sm:translate-y-[8vh] relative"
      >
        {/* Sleeping GIF */}
        <img
          src={sleeping}
          alt="Sleeping"
          className="absolute left-[0vw] sm:left-[11vw] bottom-[-2vh] sm:bottom-[-2vh] w-[25vw] sm:w-[11vw] aspect-[1/1] z-10"
          style={{ transform: 'translateX(-60%) rotate(-8deg)' }}
        />

        {/* Coffee Cup */}
        <img
          src={coffeecup}
          alt="Coffee Cup"
          className="w-[40vw] sm:w-[22vw] aspect-[1/1] translate-y-[48vh] sm:translate-y-[18vh] translate-x-[-15vw] sm:translate-x-[4vw]"
        />

        {/* Spotify */}
        <div className="translate-x-[20vw] sm:translate-x-0">
          <SpotifyActivity userId="348153501148381184" />
        </div>
      </motion.div>
    </div>
  );
}

export default About;
