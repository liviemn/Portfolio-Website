import React, { useState } from 'react';
import File from '../assets/file.png';
import { FaGithub } from "react-icons/fa";
import pixelbg from '../assets/pixelbg.webp';
import { RectangleHorizontal, Minus, X } from "lucide-react";

const Tablet: React.FC = () => {
  const [selectedBox, setSelectedBox] = useState<string | null>(null);

  return (
    <div className="w-[90vw] sm:w-[75vw] aspect-[3/4] sm:aspect-[17.5/10] max-w-[370px] sm:max-w-[1200px] bg-white border-[0.3vw] border-brown rounded-[1.5vw] shadow-xl mt-[15vh] sm:mt-[30vh] mx-auto">
      
      {/* Top Bar */}
      <div className="w-full h-[5vh] sm:h-[9.5%] bg-[#3E2B2B] rounded-t-[1.2vw] flex items-center justify-end text-white font-pixel px-[1vw]">
        <div className="flex items-center divide-x divide-black text-white">
          <div className="px-[1.2vw]">
            <RectangleHorizontal className="w-[4vw] sm:w-[2vw] h-auto cursor-pointer hover:text-gray-300" />
          </div>
          <div className="px-[1.2vw]">
            <Minus className="w-[4vw] sm:w-[2vw] h-auto cursor-pointer hover:text-gray-300" />
          </div>
          <div className="px-[1.2vw]">
            <X className="w-[4vw] sm:w-[2vw] h-auto cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      {/* Inner Screen */}
      <div
        className="w-[92%] h-[80%] border-[0.3vw] border-brown shadow-xl flex justify-between items-start relative mt-[4vh] mx-auto rounded-[1.2vw] gap-[2vw]"
        style={{
          backgroundImage: `url(${pixelbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Title - My Coding Journey */}
        <div className="text-center sm:absolute sm:top-[2vh] sm:left-[5vw] text-[6vw] sm:text-5xl md:text-6xl lg:text-7xl text-white font-pixel">
          My Coding Journey
        </div>

        {/* Left side - Project list */}
        <div className="w-full sm:w-[45%] space-y-[2vh] text-white font-pixel pt-[18vh] pl-[5vw]">
          {[
            'Website',
            'Project Two',
            'Project Three',
          ].map((project, index) => (
            <div
              key={index}
              className="w-[90%] h-[7.5vh] bg-[#3E2B2B] rounded-[0.6vw] flex items-center border-[0.15vw] transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedBox(project)}
            >
              <div className="flex items-center gap-x-[1vw] ml-[1.7vw]">
                <img src={File} alt="file icon" className="w-[2vw] h-[2vw]" />
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl">{project}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Project Details */}
        <div className="w-[50%] pt-[17vh] pr-[4vw] text-white font-pixel">
          {selectedBox && (
            <div className="pt-[3vh] px-[2vw] pb-[2vw] bg-[#3E2B2B] rounded-[1vw] border-[0.3vw] border-white shadow-md text-white">
              <div className="flex items-center gap-[2.5vw] mb-[1vh]">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl break-words">{selectedBox}</h2>
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
              <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">
                {selectedBox === 'Website' ? (
                  <>
                    I created a website portfolio to showcase myself and my skills!
                    I had a fun time designing and creating this website.
                    <div className="flex flex-wrap gap-[0.8vw] mt-[2.2vh]">
                      {['React', 'Typescript', 'TailwindCSS', 'ThreeJS', 'HTML', 'CSS', 'Lanyard'].map((tech) => (
                        <div
                          key={tech}
                          className="bg-white text-[#3E2B2B] rounded-full px-[0.9vw] py-[0.5vh] text-xs sm:text-sm font-semibold"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <span>Coming Soon.</span>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tablet;
