import React from 'react';
import { FaLinkedin, FaSpotify } from "react-icons/fa";
import ThreeModel from '../Components/ThreeModel';
import Introduction from '../Components/Introduction';

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
        <div className="absolute top-30 right-80 w-[400px] h-[400px]">
          <ThreeModel />
        </div>

        {/* Include the Introduction component */}
        <Introduction />
      </div>
    </>
  );
};

export default Home;
