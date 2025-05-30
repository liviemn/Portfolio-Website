import Tech from '../Components/Tech';
import Wave from '../Components/Wave';
import { motion } from 'framer-motion';
import { useSpringInView } from '../Components/Animation'; // adjust path if needed

function Skills() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const { ref, controls, initial } = useSpringInView();

  return (
    <div
      id="Skills"
      className="relative min-h-screen flex flex-col items-center px-[5vw]"
    >
      {/* Title: Wave on desktop, simple animation on mobile */}
      <div
        className="text-[#3E2B2B] text-[8vw] sm:text-[4.5vw] text-outline font-poetsen font-[800] z-20 
                  mt-[7vh] sm:mt-0 
                  sm:absolute sm:top-[15vh] sm:right-[15vw]"
      >
        {isMobile ? (
          <motion.div
            ref={ref}
            initial={initial}
            animate={controls}
          >
            Skills & Tools
          </motion.div>
        ) : (
          <Wave text={'Skills & Tools'} />
        )}
      </div>

      {/* Tech Stack */}
      <div className="mt-[-8vh] sm:mt-0 w-full">
        <Tech />
      </div>
    </div>
  );
}

export default Skills;
