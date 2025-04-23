import React, { useState } from 'react';
import File from '../assets/file.png';
import Pochacco from '../assets/pochacco.gif'
import { FaGithub } from "react-icons/fa";


const Tablet: React.FC = () => {
  // State to keep track of the selected box
  const [selectedBox, setSelectedBox] = useState<string | null>(null);

  // Function to handle box click
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
    <div className="w-4/5 h-3/4 bg-white border-4 border-brown rounded-3xl shadow-xl flex justify-center items-center mt-25">
      <div className="w-69/70 h-49/50 gradient-inner border-4 border-brown shadow-xl rounded-2xl flex justify-center items-center relative">
        
        <div className="absolute top-8 left-20 text-7xl text-white font-londrina">
          <h1>My Coding Journey</h1>
        </div>

        {/* Left side container with a list of boxes */}
        <div className="space-y-4 items-start absolute left-20 top-40 text-white font-fredoka max-h-[300px] overflow-y-auto">
          {/* Box 1 */}
          <div
            className="w-90 h-15 bg-[#3E2B2B] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer relative overflow-hidden"
            onClick={(e) => handleBoxClick('Website', e)}
          >
            <div className="flex items-center gap-x-3">
              <img src={File} alt="file icon" className="w-6 h-6 ml-6" />
              <span className="text-2xl">Project One</span>
            </div>
          </div>
          {/* Box 2 */}
          <div
            className="w-90 h-15 bg-[#3E2B2B] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer relative overflow-hidden"
            onClick={(e) => handleBoxClick('Project Two', e)}
          >
            <div className="flex gap-x-3">
              <img src={File} alt="file icon" className="w-6 h-6 ml-6" />
              <span className="text-2xl">Project Two</span>
            </div>
          </div>
          {/* Box 3 */}
          <div
            className="w-90 h-15 bg-[#3E2B2B] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer relative overflow-hidden"
            onClick={(e) => handleBoxClick('Project Three', e)}
          >
            <div className="flex items-center gap-x-3">
              <img src={File} alt="file icon" className="w-6 h-6 ml-6" />
              <span className="text-2xl">Project Three</span>
            </div>
          </div>
          {/* Box 4 */}
          <div
            className="w-90 h-15 bg-[#3E2B2B] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer relative overflow-hidden"
            onClick={(e) => handleBoxClick('Project Four', e)}
          >
            <div className="flex items-center gap-x-3 ml-6">
              <img src={File} alt="file icon" className="w-6 h-6" />
              <span className="text-2xl">Project Four</span>
            </div>
          </div>
          {/* Box 5 */}
          <div
            className="w-90 h-15 bg-[#3E2B2B] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer relative overflow-hidden"
            onClick={(e) => handleBoxClick('Project Five', e)}
          >
            <div className="flex items-center gap-x-3 ml-6">
              <img src={File} alt="file icon" className="w-6 h-6" />
              <span className="text-2xl">Project Five</span>
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div 
          className="absolute right-20 top-40 text-white font-fredoka"
          style={{ maxWidth: '400px'}}
        >
          {selectedBox ? (
            <div>
              <div className="flex items-center gap-8 mb-4">
                <h2 className="text-5xl break-words">{selectedBox}</h2>
                <a
                  href={(() => {
                    switch (selectedBox) {
                      case 'Website':
                        return 'https://github.com/liviemn/Portfolio-Website';
                      case 'Project Two':
                        return 'https://github.com/your-username/project-two-repo';
                      case 'Project Three':
                        return 'https://github.com/your-username/project-two-repo';
                      case 'Project Four':
                        return 'https://github.com/your-username/project-two-repo';
                      case 'Project Five':
                        return 'https://github.com/your-username/project-two-repo';
                      default:
                        return '#';
                    }
                  })()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3E2B2B] hover:text-white text-5xl"
                >
                  <FaGithub />
                </a>
              </div>
              <p className="text-lg leading-relaxed break-words">
                {/* Render different content based on selected box */}
                {selectedBox === 'Website' && (
                  <span>
                    I created a website portfolio to showcase myself and my skills!
                    I had a fun time designing and creating this website.
                    <div className="flex flex-wrap gap-3 mt-6">
                      <div className="w-25 h-auto bg-[#3E2B2B] rounded-full flex justify-center items-center text-sm text-white px-2 py-1">React</div>
                      <div className="w-25 h-auto bg-[#3E2B2B] rounded-full flex justify-center items-center text-sm text-white px-2 py-1">Typescript</div>
                      <div className="w-25 h-auto bg-[#3E2B2B] rounded-full flex justify-center items-center text-sm text-white px-2 py-1">TailwindCSS</div>
                      <div className="w-25 h-auto bg-[#3E2B2B] rounded-full flex justify-center items-center text-sm text-white px-2 py-1">ThreeJS</div>
                      <div className="w-25 h-auto bg-[#3E2B2B] rounded-full flex justify-center items-center text-sm text-white px-2 py-1">HTML</div>
                      <div className="w-25 h-auto bg-[#3E2B2B] rounded-full flex justify-center items-center text-sm text-white px-2 py-1">CSS</div>
                      <div className="w-25 h-auto bg-[#3E2B2B] rounded-full flex justify-center items-center text-sm text-white px-2 py-1">Lanyard</div>
                    </div>
                  </span>
                  
                )}
                {selectedBox === 'Project Two' && <span>Coming Soon.</span>}
                {selectedBox === 'Project Three' && <span>Coming Soon.</span>}
                {selectedBox === 'Project Four' && <span>Coming Soon.</span>}
                {selectedBox === 'Project Five' && <span>Coming Soon.</span>}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src={Pochacco}
                alt='Pochacco'
                className="w-64 h-auto rounded-lg"
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
