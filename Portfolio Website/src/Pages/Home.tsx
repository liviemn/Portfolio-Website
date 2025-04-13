import React from 'react';
import Typewriter from 'typewriter-effect';
import { FaLinkedin, FaSpotify } from "react-icons/fa";
import ThreeModel from '../Components/ThreeModel';

const Home: React.FC = () => {
  return (
    <>
      {/* Floating Icons on top-right of header */}
      <div className="absolute top-4 right-6 z-50 flex space-x-4">
        <a
          href="https://www.linkedin.com/in/liviemoon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 text-3xl transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://open.spotify.com/user/liviemn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 text-3xl transition-colors"
        >
          <FaSpotify />
        </a>
      </div>

      {/* Main Section */}
      <div className="relative pt-16 min-h-screen px-8">
        {/* Pin the 3D model to the right */}
        <div className="absolute top-24 right-80 w-[400px] h-[400px]">
          <ThreeModel />
        </div>

        {/* Text content on the left */}
        <div className="max-w-3xl font-mono text-gray-600 text-left text-6xl ml-4">
          <Typewriter
            options={{
              strings: ["Nice to meet you!", "I'm Olivia!"],
              autoStart: true,
              loop: true,
              delay: 80,
            }}
          />
        </div>

        {/* Paragraph below text */}
        <p className="text-base font-mono text-gray-700 mt-8 max-w-md ml-4">
          I'm a computer science major in George Mason University. Years of experience in customer service
          and proficient in Java, Python, HTML & CSS, and C. Actively looking for internships or 
          other opportunities!
        </p>
      </div>
    </>
  );
};

export default Home;
