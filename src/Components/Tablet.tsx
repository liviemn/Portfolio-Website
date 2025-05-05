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
    <div className="w-[75vw] h-[75vh] bg-white border-[0.3vw] border-brown rounded-[1.5vw] shadow-xl mt-[11vh] mx-auto">
      
      {/* Top Bar */}
      <div className="w-full h-[7vh] bg-[#3E2B2B] rounded-t-[1.2vw] flex items-center justify-end text-white font-pixel px-[1vw]">
        <div className="flex items-center divide-x divide-black text-white">
          <div className="px-[1.2vw]">
            <RectangleHorizontal className="w-[2vw] h-[1.7vw] cursor-pointer hover:text-gray-300" />
          </div>
          <div className="px-[1.2vw]">
            <Minus className="w-[2vw] h-[1.7vw] cursor-pointer hover:text-gray-300" />
          </div>
          <div className="px-[1.2vw]">
            <X className="w-[2vw] h-[1.7vw] cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Inner Screen */}
      <div
        className="w-[92%] h-[80%] border-[0.3vw] border-brown shadow-xl flex justify-center items-start relative mt-[4vh] mx-auto rounded-[1.2vw]"
        style={{
          backgroundImage: `url(${pixelbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Title - My Coding Journey */}
        <div className="absolute top-[2vh] left-[5vw] text-[5vw] text-white font-pixel">
          My Coding Journey
        </div>

        {/* Left side - Project list */}
        <div className="space-y-[2vh] items-start absolute left-[5vw] top-[18vh] text-white font-pixel max-h-[36vh] overflow-y-auto">
          {[
            'Website',
            'Project Two',
            'Project Three',
            'Project Four',
            'Project Five'
          ].map((project, index) => (
            <div
              key={index}
              className="w-[24vw] h-[7.5vh] bg-[#3E2B2B] rounded-[0.6vw] flex items-center border-[0.15vw] transition-all duration-300 hover:h-[9vh] cursor-pointer relative overflow-hidden"
              onClick={(e) => handleBoxClick(project, e)}
            >
              <div className="flex items-center gap-x-[1vw] ml-[1.7vw]">
                <img src={File} alt="file icon" className="w-[2vw] h-[2vw]" />
                <span className="text-[1.7vw]">{project}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Project Details or Pochacco */}
        <div className="absolute right-[5vw] top-[17vh] text-white font-pixel max-w-[30vw]">
          {selectedBox ? (
            <div className="pt-[1vh] px-[2vw] pb-[2vw] bg-[#3E2B2B] rounded-[1vw] border-[0.3vw] border-white shadow-md text-white">
              <div className="flex items-center gap-[2.5vw] mb-[-0.2vh]">
                <h2 className="text-[3.5vw] break-words">{selectedBox}</h2>
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
                  className="text-white hover:text-gray-300 text-[3.5vw]"
                >
                  <FaGithub />
                </a>
              </div>
              <p className="text-[1.2vw] leading-relaxed break-words">
                {selectedBox === 'Website' && (
                  <>
                    I created a website portfolio to showcase myself and my skills!
                    I had a fun time designing and creating this website.
                    <div className="flex flex-wrap gap-[0.8vw] mt-[2.2vh]">
                      {['React', 'Typescript', 'TailwindCSS', 'ThreeJS', 'HTML', 'CSS', 'Lanyard'].map((tech) => (
                        <div key={tech} className="bg-white text-[#3E2B2B] rounded-full px-[0.9vw] py-[0.5vh] text-[0.9vw] font-semibold">
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
            <div className="flex flex-col items-center text-center space-y-[2vh]">
              <img src={Pochacco} alt="Pochacco" className="w-[18vw] h-auto rounded-lg" />
              <p className="text-[1.4vw] font-light">Tap a box on the left to see what's inside ✨</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Tablet;
