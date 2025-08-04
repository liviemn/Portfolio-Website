import Tech from '../Components/Tech';
import Wave from '../Components/Wave';
import AWS from '../Components/AWS';
import { motion } from 'framer-motion';
import { useSpringInView } from '../Components/Animation';
import Experience from '../Components/Experience';

function Skills() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const { ref, controls, initial } = useSpringInView();

  return (
    <div
      id="Skills"
      className="relative min-h-screen flex flex-col items-center px-[5vw]"
    >
      <div
        className="text-[#3E2B2B] text-[8vw] sm:text-[4.5vw] font-poetsen font-[800] z-20 
                  mt-[7vh] sm:mt-[-5vh] 
                  sm:absolute sm:top-[15vh] sm:right-[5vw]"
      >
        {isMobile ? (
          <motion.div
            ref={ref}
            initial={initial}
            animate={controls}
          >
            /skills & tools
          </motion.div>
        ) : (
          <Wave text={'/skills & experiences'} />
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-6 w-full mt-[6vh] sm:mt-[20vh]">
        <div className="sm:w-1/2 flex">
          <Tech />
          <AWS />
        </div>
        <div className="sm:w-1/2 flex justify-center items-center">
          <Experience />
        </div>
      </div>
    </div>
  );
}

export default Skills;
