import React, { useState } from 'react';
import File from '../assets/file.png';
import Pochacco from '../assets/pochacco.gif';
import { FaGithub } from "react-icons/fa";
import pixelbg from '../assets/pixelbg.webp';
import { RectangleHorizontal, Minus, X } from "lucide-react";

const Tablet: React.FC = () => {
  const [selectedBox, setSelectedBox] = useState<string | null>(null);

  const handleBoxClick = (boxName: string, event: React.MouseEvent) => {
    const ripple = document.createElement('span');
    const button = event.currentTarget as HTMLElement;
    const size = Math.max(button.offsetWidth, button.offsetHeight);
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    button.appendChild(ripple);

    setSelectedBox(boxName);

    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <div className="w-4/5 xl:w-4/5 2xl:w-2/3 h-3/4 bg-white border-4 border-brown rounded-3xl shadow-xl mt-24">
      
      {/* Top Bar */}
      <div className="w-full h-15 bg-[#3E2B2B] rounded-t-2xl flex items-center justify-end text-white font-pixel text-3xl px-4">
        <div className="flex items-center divide-x divide-black text-white">
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

      {/* Inner Screen */}
      <div
        className="w-[92%] h-[80%] border-4 border-brown shadow-xl flex justify-center items-start relative mt-8 mx-auto rounded-xl"
        style={{
          backgroundImage: `url(${pixelbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Title - My Coding Journey */}
        <div className="absolute top-8 left-20 text-7xl text-white font-pixel">
          My Coding Journey
        </div>

        {/* Left side - Project list */}
        <div className="space-y-4 items-start absolute left-20 top-36 text-white font-pixel max-h-[300px] overflow-y-auto">
          {[
            'Website',
            'Project Two',
            'Project Three',
            'Project Four',
            'Project Five'
          ].map((project, index) => (
            <div
              key={index}
              className="w-90 h-15 bg-[#3E2B2B] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer relative overflow-hidden"
              onClick={(e) => handleBoxClick(project, e)}
            >
              <div className="flex items-center gap-x-3 ml-6">
                <img src={File} alt="file icon" className="w-6 h-6" />
                <span className="text-2xl">{project}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Project Details or Pochacco */}
        <div
          className="absolute right-20 top-36 text-white font-pixel"
          style={{ maxWidth: '430px' }}
        >
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
                        return '#';
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
                    I created a website portfolio to showcase myself and my skills!
                    I had a fun time designing and creating this website.
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
              <img src={Pochacco} alt="Pochacco" className="w-64 h-auto rounded-lg" />
              <p className="text-xl font-light">Tap a box on the left to see what's inside ✨</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Tablet;
