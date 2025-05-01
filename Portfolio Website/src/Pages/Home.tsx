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

      <div className="relative pt-16 min-h-screen px-8">
        <div className="absolute right-[-100px] top-[-300px] transform -translate-y-1/2 z-0">
          <GLBModelLoader />
        </div>

        <Icons />

        <section id="Home" className="scroll-mt-32">
          <div className="absolute top-20 left-8 w-400 h-100 bg-white/40 backdrop-blur-lg border border-white/30 rounded-3xl p-10 shadow-lg max-w-3xl mt-28 z-10">
            <img 
              src={Ribbon}
              alt="Ribbon"
              className="absolute -top-6 -left-6 w-30 h-30 pointer-events-none"
            />

            <Introduction />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
