import React, { useState } from 'react';
import File from '../assets/file.png';
import Pochacco from '../assets/pochacco.gif';
import { FaGithub } from "react-icons/fa";
import pixelbg from '../assets/pixelbg.webp';
import { RectangleHorizontal, Minus, X } from "lucide-react";

const Tablet: React.FC = () => {
  const [selectedBox, setSelectedBox] = useState<string | null>(null);

  const handleBoxClick = (boxName: string) => {
    setSelectedBox(boxName);
  };

  return (
    <div className="w-4/5 h-3/4 bg-white border-4 border-brown rounded-3xl shadow-xl mt-25">
      {/* Top Bar */}
      <div className="w-full h-15 bg-[#3E2B2B] rounded-t-2xl flex items-center justify-end text-white font-pixel text-3xl px-4">
        <div className="flex items-center divide-x divide-black">
          <div className="px-4">
            <RectangleHorizontal className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </div>
          <div className="px-4">
            <Minus className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </div>
          <div className="px-4">
            <X className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className="w-65/70 h-40/50 border-4 border-brown shadow-xl flex justify-center items-center relative mt-8 mx-auto rounded-xl"
        style={{
          backgroundImage: `url(${pixelbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Title */}
        <div className="absolute top-8 left-20 text-7xl text-white font-pixel">
          <h1>My Coding Journey</h1>
        </div>

        {/* Left side (Projects List) */}
        <div className="space-y-4 items-start absolute left-20 top-40 text-white font-pixel max-h-[300px] overflow-y-auto">
          {['Website', 'Project Two', 'Project Three', 'Project Four', 'Project Five'].map((project, index) => (
            <div
              key={project}
              className="w-90 h-15 bg-[#3E2B2B] rounded-lg flex items-center border-2 transition-transform duration-300 hover:scale-105 cursor-pointer relative overflow-hidden"
              onClick={() => handleBoxClick(project)}
            >
              <div className="flex items-center gap-x-3 ml-6">
                <img src={File} alt="file icon" className="w-6 h-6" loading="lazy" />
                <span className="text-2xl">{project}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right side (Details Panel) */}
        <div className="absolute right-20 top-35 text-white font-pixel" style={{ maxWidth: '430px' }}>
          {selectedBox ? (
            <div className="p-6 bg-[#3E2B2B] rounded-xl border-4 border-white shadow-md text-white">
              <div className="flex items-center gap-8 mb-4">
                <h2 className="text-5xl break-words">{selectedBox}</h2>
                <a
                  href={(() => {
                    switch (selectedBox) {
                      case 'Website':
                        return 'https://github.com/liviemn/Portfolio-Website';
                      default:
                        return 'https://github.com/your-username/project-two-repo';
                    }
                  })()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 text-5xl"
                >
                  <FaGithub />
                </a>
              </div>
              <p className="text-lg leading-relaxed break-words">
                {selectedBox === 'Website' && (
                  <>
                    I created a website portfolio to showcase myself and my skills! I had a fun time designing and creating this website.
                    <div className="flex flex-wrap gap-3 mt-6">
                      {['React', 'Typescript', 'TailwindCSS', 'ThreeJS', 'HTML', 'CSS', 'Lanyard'].map((tech) => (
                        <div key={tech} className="bg-white text-[#3E2B2B] rounded-full px-3 py-1 text-sm font-semibold">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {selectedBox !== 'Website' && <span>Coming Soon.</span>}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src={Pochacco}
                alt="Pochacco"
                className="w-64 h-auto rounded-lg"
                loading="lazy"
              />
              <p className="text-xl font-light">Tap a box on the left to see what's inside ✨</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tablet;
