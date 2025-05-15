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
      const currentScrollY = window.scrollY;

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Navigation />

      <div className="relative pt-[8vh] min-h-screen px-[4vw]">
        <div className="absolute right-[0] top-[5vh] z-0">
          <GLBModelLoader />
        </div>

        <Icons />

        <section id="Home" className="scroll-mt-[8vh]">
          <div className="absolute top-[10vh] left-[3vw] w-[53vw] h-[49vh] bg-white/40 backdrop-blur-lg border border-white/30 rounded-[2vw] p-[3vw] shadow-lg mt-[13.5vh] z-10">
            <img 
              src={Ribbon}
              alt="Ribbon"
              className="absolute -top-[3vh] -left-[2vw] w-[9vw] h-[9vw] pointer-events-none"
            />

            <Introduction />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
