import React, { useEffect, useState, useRef } from 'react';
import SpotifyActivity from '../Components/Lanyard';
import AboutBoxes from '../Components/AboutBoxes';
import coffeecup from '../assets/coffeecup.png';
import sleeping from '../assets/sleeping.gif'

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
      <div className="absolute top-35 left-16 rotate-[-6deg]">
        <div className="px-10 py-4 rounded-2x1 bg-[#3E2B2B] backdrop-blur-md shadow-lg text-4xl font-poetsen text-white drop-shadow-lg">
          About Me
        </div>
      </div>

        <AboutBoxes />

      <div className={`${visible ? 'animate-slide-in' : 'animate-slide-out'} flex items-center gap-8 translate-y-20`}>
        <img
          src={sleeping}
          alt="Sleeping"
          className="absolute left-45 bottom-[-10px] w-40 h-40 z-10"
          style={{ transform: 'translateX(-60%) rotate(-8deg)' }}
        />
        <img src={coffeecup} alt="Coffee Cup" className="w-80 h-80 translate-y-36 translate-x-18" />
        <SpotifyActivity userId="348153501148381184" />
      </div>
    </div>
  );
}

export default About;
