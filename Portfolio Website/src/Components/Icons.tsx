import React from 'react';
import { FaLinkedin, FaSpotify, FaGithub } from "react-icons/fa";

const Icons: React.FC = () => {
  return (
    <div className="flex space-x-6 text-white text-3xl">
      <a
        href="https://www.linkedin.com/in/liviemoon"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://open.spotify.com/user/liviemn"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-green-400 transition-colors"
      >
        <FaSpotify />
      </a>
      <a
        href="https://github.com/liviemn"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default Icons;
