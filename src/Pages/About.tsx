import { useEffect, useState, useRef } from 'react';
import SpotifyActivity from '../Components/Lanyard';
import AboutBoxes from '../Components/AboutBoxes';
import coffeecup from '../assets/coffeecup.png';
import sleeping from '../assets/sleeping.gif';

function About() {
  const [visible, setVisible] = useState(true);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div
      id="About"
      ref={aboutRef}
      className="relative h-screen flex justify-end items-end pr-16 pb-40"
    >
      {/* About Me Ribbon */}
      <div className="absolute top-35 left-16 rotate-[-6deg]">
        <div className="px-10 py-4 rounded-2xl bg-[#3E2B2B] backdrop-blur-md shadow-lg text-4xl font-poetsen text-white drop-shadow-lg">
          About Me
        </div>
      </div>

      {/* Info Boxes */}
      <AboutBoxes />

      {/* Bottom Row (sleeping gif + coffee cup + Spotify) */}
      <div className={`${visible ? 'animate-slide-in' : 'animate-slide-out'} flex items-center gap-8 translate-y-20 relative`}>
        
        {/* Sleeping GIF */}
        <img
          src={sleeping}
          alt="Sleeping"
          className="absolute left-[25%] xl:left-[25%] 2xl:left-[30%] bottom-[-10px] w-40 xl:w-40 2xl:w-52 h-40 xl:h-40 2xl:h-52 z-10"
          style={{ transform: 'translateX(-60%) rotate(-8deg)' }}
        />

        {/* Coffee Cup */}
        <img
          src={coffeecup}
          alt="Coffee Cup"
          className="w-80 xl:w-80 2xl:w-96 h-80 xl:h-80 2xl:h-96 translate-y-36 translate-x-16 xl:translate-x-16 2xl:translate-x-20"
        />

        {/* Spotify */}
        <SpotifyActivity userId="348153501148381184" />
      </div>
    </div>
  );
}

export default About;
