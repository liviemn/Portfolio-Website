import React, { useEffect, useState, useRef } from 'react';
import SpotifyActivity from '../Components/Lanyard';

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
      {/* Oval Header */}
      <div className="absolute top-35 left-16 rotate-[-6deg]">
        <div className="px-10 py-4 rounded-2x1 bg-[#3E2B2B] backdrop-blur-md shadow-md text-4xl font-poetsen text-white">
          About Me
        </div>
      </div>

      {/* Body Boxes */}
      <div className="absolute left-1/4 top-1/3 transform -translate-x-1/2">
        <div className="flex flex-col space-y-8">
          <div className="flex space-x-4">
            {/* First Box */}
            <div className="relative w-48 h-53 bg-white text-[#3E2B2B] rounded-xl shadow-md p-4 flex items-center justify-center border-2 border-[#3E2B2B]">
              <div className="absolute top-[-20px] left-3 w-25 h-10 bg-[#3E2B2B] rounded-full flex items-center justify-center">
                <span className="text-sm text-white font-poetsen">LIKES</span>
              </div>
              Box 1
            </div>
            {/* Second Box */}
            <div className="relative w-48 h-53 bg-white text-[#3E2B2B] rounded-xl shadow-md p-4 flex items-center justify-center border-2 border-[#3E2B2B]">
              <div className="absolute top-[-20px] left-3 w-25 h-10 bg-[#3E2B2B] rounded-full flex items-center justify-center">
                  <span className="text-sm text-white font-poetsen">DISLIKES</span>
              </div>
              Box 2
            </div>
          </div>

          {/* Third Box */}
          <div className="relative w-100 h-38 bg-white text-[#3E2B2B] rounded-xl shadow-md p-4 flex items-center justify-center border-2 border-[#3E2B2B]">
            <div className="absolute top-[-20px] left-3 w-25 h-10 bg-[#3E2B2B] rounded-full flex items-center justify-center">
              <span className="text-sm text-white font-poetsen">HOBBIES</span>
            </div>
            Box 3
          </div>
        </div>
      </div>

      {/* Spotify Activity */}
      <div className={`${visible ? 'animate-slide-in' : 'animate-slide-out'}`}>
        <SpotifyActivity userId="348153501148381184" />
      </div>
    </div>
  );
}

export default About;
