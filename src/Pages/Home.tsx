import React, { useState, useEffect } from 'react';
import Navigation from '../Components/Navigation';
import Introduction from '../Components/Introduction';
import GLBModelLoader from '../Components/ThreeJS';
import Icons from '../Components/Icons';
import Ribbon from '../assets/ribbon.png';

const Home: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Navigation />

      <div className="relative pt-[8vh] min-h-screen px-4 sm:px-[4vw]">
        {/* Desktop 3D Model (absolute position) */}
        <div className="hidden sm:block absolute right-[-15vh] top-[18vh]">
          <GLBModelLoader />
        </div>

        {/* Icons component (unchanged) */}
        <Icons />

        <section id="Home" className="scroll-mt-[8vh]">
          <div className="relative top-[2vh] left-[-1vw] w-full sm:w-[53vw] sm:h-[49vh] bg-white/40 backdrop-blur-lg border border-white/30 rounded-[2vw] p-6 sm:p-[3vw] shadow-lg sm:mt-[13.5vh] z-10">
            {/* Ribbon */}
            <img
              src={Ribbon}
              alt="Ribbon"
              className="absolute -top-6 -left-4 sm:-top-[3vh] sm:-left-[2vw] w-[20vw] sm:w-[9vw] h-auto pointer-events-none"
            />

            <Introduction />
          </div>

          {/* Mobile 3D Model below intro */}
          <div className="block sm:hidden mt-[6vh] flex justify-center">
            <div className="w-[80vw] h-[60vw]">
              <GLBModelLoader />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
