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
      className="relative h-screen flex justify-end items-end pr-[5vw] pb-[20vh]"
    >
      {/* About Me*/}
      <div className="absolute top-[17vh] left-[5vw] rotate-[-6deg]">
        <div className="px-[2.5vw] py-[1vh] rounded-[1vw] bg-[#3E2B2B] backdrop-blur-md shadow-lg text-[2.6vw] font-poetsen text-white drop-shadow-lg">
          About Me
        </div>
      </div>

      {/* Info Boxes */}
      <AboutBoxes />

      {/* Bottom Row (sleeping gif + coffee cup + Spotify) */}
      <div className={`${visible ? 'animate-slide-in' : 'animate-slide-out'} flex items-center gap-[2vw] translate-y-[8vh] relative`}>
        
        {/* Sleeping GIF */}
        <img
          src={sleeping}
          alt="Sleeping"
          className="absolute left-[11vw] bottom-[-2vh] w-[11vw] h-[11vw] z-10"
          style={{ transform: 'translateX(-60%) rotate(-8deg)' }}
        />

        {/* Coffee Cup */}
        <img
          src={coffeecup}
          alt="Coffee Cup"
          className="w-[22vw] h-[22vw] translate-y-[18vh] translate-x-[4vw]"
        />

        {/* Spotify */}
        <SpotifyActivity userId="348153501148381184" />
      </div>
    </div>
  );
}

export default About;
