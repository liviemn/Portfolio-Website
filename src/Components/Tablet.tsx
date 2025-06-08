import React, { useState } from 'react';
import File from '../assets/file.png';
import { FaGithub } from "react-icons/fa";
import pixelbg from '../assets/pixelbg.webp';
import { RectangleHorizontal, Minus, X, ArrowRight } from "lucide-react";

const Tablet: React.FC = () => {
  const [selectedBox, setSelectedBox] = useState<string | null>(null);

  const projects = [
    {
      name: 'Website',
      link: 'https://github.com/liviemn/Portfolio-Website',
      description:
        'I created a website portfolio to showcase myself and my skills! I had a fun time designing and creating this website.',
      tags: ['React', 'Typescript', 'TailwindCSS', 'ThreeJS', 'HTML', 'CSS', 'Lanyard'],
    },
    {
      name: 'Discord Music Bot',
      link: 'https://github.com/liviemn/discord-music-bot',
      description: 'Created my own music bot called MoonCloud. Most bots dont work due to change of TOS but I made mine through multiple sources. Testing Mode!',
      tags: ['Javascript', 'Discord.js', 'Discord API'],
    },
    {
      name: 'Spotify Wrapped',
      link: '#',
      description: 'Currently Working On :)',
      tags: [],
    },
  ];

  return (
    <div className="w-[90vw] sm:w-[75vw] aspect-[3/4] sm:aspect-[17.5/10] max-w-[370px] sm:max-w-[1200px] bg-white border-[0.3vw] border-brown rounded-[2vw] sm:rounded-[1.5vw] shadow-xl mx-auto sm:mt-[-8vh]">
      
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

      <div
        className="w-[95%] sm:w-[92%] h-[85%] sm:h-[80%] border-[0.3vw] border-brown shadow-xl flex flex-col sm:flex-row justify-between items-start relative mt-[2vh] sm:mt-[4vh] mx-auto rounded-[2vw] sm:rounded-[1.2vw] gap-[2vw]"
        style={{
          backgroundImage: `url(${pixelbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center w-full sm:text-left sm:absolute sm:top-[2vh] sm:left-[5vw] text-[6vw] sm:text-5xl md:text-6xl lg:text-7xl text-white font-pixel">
          My Coding Journey
        </div>

        {/* Mobile */}
        <div className="sm:hidden w-full h-full mt-[5vh] px-[4vw] pb-[4vh] overflow-x-auto snap-x snap-mandatory">
          <div className="flex gap-5 pr-[4vw] font-pixel">
            {projects.map((project, idx) => (
            <div
                key={idx}
                className="snap-center min-w-[80vw] bg-[#3E2B2B] text-white border-white border-[0.3vw] rounded-[1.5vw] px-[5vw] py-[3vh] shadow-lg flex flex-col justify-between"
            >
                <div className="flex items-center justify-between mb-3">
                <h2 className="text-[5vw] font-pixel">{project.name}</h2>
                {project.link !== '#' && (
                    <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 text-[6vw]"
                    >
                    <FaGithub />
                    </a>
                )}
                </div>

                <p className="text-[3.2vw] leading-snug break-words mb-3">
                {project.description}
                </p>

                {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-[1vw] mt-auto">
                    {project.tags.map((tech) => (
                    <div
                        key={tech}
                        className="bg-white text-[#3E2B2B] rounded-full px-[2.5vw] py-[0.8vh] text-[2.8vw] font-semibold"
                    >
                        {tech}
                    </div>
                    ))}
                </div>
                )}
            </div>
            ))}
          </div>
          <div className="flex justify-end mt-3 text-white font-pixel text-[3.5vw]">
            <span>Swipe Right</span>
            <ArrowRight className="ml-2 w-[5vw] h-[5vw]" />
          </div>
        </div>
        

        {/* Desktop */}
        <div className="hidden sm:flex w-full">
          {/* Project list */}
          <div className="w-[45%] space-y-[2vh] text-white font-pixel pt-[18vh] pl-[5vw]">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-[90%] h-[7.5vh] bg-[#3E2B2B] rounded-[0.6vw] flex items-center border-[0.15vw] transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedBox(project.name)}
              >
                <div className="flex items-center gap-x-[1vw] ml-[1.7vw]">
                  <img src={File} alt="file icon" className="w-[2vw] h-[2vw]" />
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl">{project.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Project Details */}
          <div className="w-[50%] pt-[17vh] pr-[4vw] ml-[3.5vw] text-white font-pixel">
            {selectedBox && (() => {
              const selected = projects.find(p => p.name === selectedBox);
              if (!selected) return null;
              return (
                <div className="pt-[3vh] px-[2vw] pb-[2vw] bg-[#3E2B2B] rounded-[1vw] border-[0.3vw] border-white shadow-md text-white">
                  <div className="flex items-center gap-[2.5vw] mb-[1vh]">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl break-words">{selected.name}</h2>
                    {selected.link !== '#' && (
                      <a
                        href={selected.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 text-[3.5vw]"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed break-words">{selected.description}</p>
                  {selected.tags.length > 0 && (
                    <div className="flex flex-wrap gap-[0.8vw] mt-[2.2vh]">
                      {selected.tags.map((tech) => (
                        <div
                          key={tech}
                          className="bg-white text-[#3E2B2B] rounded-full px-[0.9vw] py-[0.5vh] text-xs sm:text-sm font-semibold"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tablet;
