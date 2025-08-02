import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaSpotify, FaGithub } from "react-icons/fa";

const Icons: React.FC = () => {
  const [transformValue, setTransformValue] = useState(0);
  const [opacityValue, setOpacityValue] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = window.innerHeight;

      const newTransform = Math.min(scrollPosition / 2, 150);
      const newOpacity = Math.max(1 - scrollPosition / pageHeight, 0);

      setTransformValue(newTransform);
      setOpacityValue(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop */}
      <div
        className="hidden sm:flex space-x-[2.3vw] text-[4.2vw] fixed z-50"
        style={{
          bottom: '12.5vh',
          left: '100px',
          color: '#3E2B2B',
          opacity: opacityValue,
          transform: `translateX(-${transformValue}px)`,
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
        }}
      >
        <IconLinks />
      </div>

      {/* Mobile */}
      <div className="flex sm:hidden gap-6 text-[8vw] text-[#3E2B2B] absolute top-4 right-4 z-40">
        <IconLinks />
      </div>
    </>
  );
};


const IconLinks = () => (
  <>
    <a
      href="https://www.linkedin.com/in/liviemoon"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-transform transform hover:scale-110"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://open.spotify.com/user/liviemn"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-transform transform hover:scale-110"
    >
      <FaSpotify />
    </a>
    <a
      href="https://github.com/liviemn"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition-transform transform hover:scale-110"
    >
      <FaGithub />
    </a>
  </>
);

export default Icons;
