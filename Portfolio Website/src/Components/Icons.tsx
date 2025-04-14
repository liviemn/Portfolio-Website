import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaSpotify, FaGithub } from "react-icons/fa";

const Icons: React.FC = () => {
  const [transformValue, setTransformValue] = useState(0);
  const [opacityValue, setOpacityValue] = useState(1);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = window.innerHeight;

      // Calculate how much to move the icons and fade them out based on scroll
      const newTransform = Math.min(scrollPosition / 2, 150); // Adjust divisor to control slide speed
      const newOpacity = Math.max(1 - scrollPosition / pageHeight, 0); // Fade out as you scroll down

      setTransformValue(newTransform); // Update translateX value
      setOpacityValue(newOpacity); // Update opacity
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
        opacity: opacityValue,
        transform: `translateX(-${transformValue}px)`, // Move to the left as scroll happens
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out', // Smooth transition for both transform and opacity
      }}
    >
      <a
        href="https://www.linkedin.com/in/liviemoon"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:!text-[#a0522d] transition-transform transform hover:scale-110"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://open.spotify.com/user/liviemn"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:!text-[#a0522d] transition-transform transform hover:scale-110"
      >
        <FaSpotify />
      </a>
      <a
        href="https://github.com/liviemn"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:!text-[#a0522d] transition-transform transform hover:scale-110"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Icons;
