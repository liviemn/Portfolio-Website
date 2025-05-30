import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navigation from '../Components/Navigation';
import Introduction from '../Components/Introduction';
import Icons from '../Components/Icons';
import Ribbon from '../assets/ribbon.webp';

const GLBModelLoader = lazy(() => import('../Components/ThreeJS'));

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return isMobile;
};

const Home: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();

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
        <section id="Home" className="scroll-mt-[22vh]">
          <div className="relative top-[2vh] left-[-1vw] w-full sm:w-[53vw] sm:h-[49vh] bg-white/40 backdrop-blur-lg border border-white/30 rounded-[2vw] p-6 sm:p-[3vw] shadow-lg sm:mt-[13.5vh] z-10">
            <img
              src={Ribbon}
              alt="Ribbon"
              className="absolute -top-6 -left-4 sm:-top-[3vh] sm:-left-[2vw] w-[20vw] sm:w-[9vw] h-auto pointer-events-none"
            />
            <Introduction />
          </div>

          <Suspense fallback={<div className="text-white">Loading 3D model...</div>}>
            {isMobile ? (
              <div className="absolute mt-[-5vh] flex left-[-3vh] w-[80vw] h-[60vw]">
                <GLBModelLoader />
              </div>
            ) : (
              <div className="absolute right-[-15vh] top-[18vh]">
                <GLBModelLoader />
              </div>
            )}
          </Suspense>

          <Icons />
        </section>
      </div>
    </>
  );
};

export default Home;
