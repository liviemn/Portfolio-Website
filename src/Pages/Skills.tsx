import React, { Suspense } from 'react';
import Tech from '../Components/Tech';
import Wave from '../Components/Wave';
//import AWS from '../Components/AWS';
import { motion } from 'framer-motion';
import { useSpringInView } from '../Components/Animation';
const Experience = React.lazy(() => import('../Components/Experience'));

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
            Skills & Experiences
          </motion.div>
        ) : (
          <Wave text={'Skills & Experiences'} />
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-6 w-full mt-[6vh] sm:mt-[10vh]">
        <div className="sm:w-1/2 flex flex-col">
          <Tech />
          
        </div>
        <div className="sm:w-1/2 flex justify-center items-center">
          <Suspense fallback={<div>Loading...</div>}>
            <Experience />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Skills;
