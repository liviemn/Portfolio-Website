import { useEffect, useState, useRef } from 'react';
import SpotifyActivity from '../Components/Lanyard';
import AboutBoxes from '../Components/AboutBoxes';
import coffeecup from '../assets/coffeecup.png';
import sleeping from '../assets/sleeping.gif';
import Wave from '../Components/Wave'

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
      className="relative h-screen flex justify-center sm:justify-end items-end pr-[5vw] pb-[20vh]"
    >
      {/* About Me*/}
      <div className="absolute top-[5vh] sm:top-[15vh] left-[15vw] text-[#3E2B2B] text-[4.5vw] font-sans-serif font-poetsen">
          <Wave text={'Get To Know Me'} />
      </div>

      {/* Info Boxes */}
      <AboutBoxes />

      {/* Bottom Row (sleeping gif + coffee cup + Spotify) */}
      <div className={`${visible ? 'animate-slide-in' : 'animate-slide-out'} flex flex-col sm:flex-row items-center gap-[4vh] sm:gap-[2vw] translate-y-[17vh] sm:translate-y-[8vh] relative`}>
        
        {/* Sleeping GIF */}
        <img
          src={sleeping}
          alt="Sleeping"
          className="absolute left-[0vw] sm:left-[11vw] bottom-[-2vh] sm:bottom-[-2vh] w-[25vw] sm:w-[11vw] sm:h-[11vw] z-10"
          style={{ transform: 'translateX(-60%) rotate(-8deg)' }}
        />

        {/* Coffee Cup */}
        <img
          src={coffeecup}
          alt="Coffee Cup"
          className="w-[40vw] sm:w-[22vw] sm:h-[22vw] translate-y-[48vh] sm:translate-y-[18vh] translate-x-[-15vw] sm:translate-x-[4vw]"
        />

        {/* Spotify */}
        <div className="translate-x-[20vw] sm:translate-x-0">
          <SpotifyActivity userId="348153501148381184" />
        </div>
      </div>
    </div>
  );
}

export default About;
