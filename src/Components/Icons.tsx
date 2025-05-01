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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="flex space-x-8 text-6xl fixed z-50"
      style={{
        bottom: '100px',
        left: '100px',
        color: '#3E2B2B',
        opacity: opacityValue,
        transform: `translateX(-${transformValue}px)`,
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
      }}
    >
      <a
        href="https://www.linkedin.com/in/liviemoon"
        target="_blank"
        rel="noopener noreferrer"
        className="!text-[#3E2B2B] hover:!text-white transition-transform transform hover:scale-110"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://open.spotify.com/user/liviemn"
        target="_blank"
        rel="noopener noreferrer"
        className="!text-[#3E2B2B] hover:!text-white transition-transform transform hover:scale-110"
      >
        <FaSpotify />
      </a>
      <a
        href="https://github.com/liviemn"
        target="_blank"
        rel="noopener noreferrer"
        className="!text-[#3E2B2B] hover:!text-white transition-transform transform hover:scale-110"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Icons;
