import React, { useState } from 'react';
import File from '../assets/file.png';

const Tablet: React.FC = () => {
  // State to keep track of the selected box
  const [selectedBox, setSelectedBox] = useState<string | null>(null);

  // Function to handle box click
  const handleBoxClick = (boxName: string) => {
    setSelectedBox(boxName);
  };

  return (
    <div className="w-4/5 h-3/4 bg-white border-4 border-brown rounded-3xl shadow-xl flex justify-center items-center mt-25">
      <div className="w-69/70 h-49/50 gradient-inner border-4 border-brown shadow-xl rounded-2xl flex justify-center items-center relative">
        
        {/* Left side container with a list of boxes */}
        <div className="space-y-4 items-start absolute left-20 top-40 text-white font-fredoka max-h-[300px] overflow-y-auto">
          {/* Box 1 */}
          <div
            className="w-90 h-15 bg-[#4A7F7F] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer"
            onClick={() => handleBoxClick('Website')}
          >
            <div className="flex items-center gap-x-3">
              <img src={File} alt="file icon" className="w-6 h-6 ml-6" />
              <span className="text-2xl">Project One</span>
            </div>
          </div>
          {/* Box 2 */}
          <div
            className="w-90 h-15 bg-[#4A7F7F] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer"
            onClick={() => handleBoxClick('Box 1')}
          >
            <div className="flex gap-x-3">
              <img src={File} alt="file icon" className="w-6 h-6 ml-6" />
              <span className="text-2xl">Project Two</span>
            </div>
          </div>
          {/* Box 3 */}
          <div
            className="w-90 h-15 bg-[#4A7F7F] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer"
            onClick={() => handleBoxClick('Box 2')}
          >
            <div className="flex items-center gap-x-3">
              <img src={File} alt="file icon" className="w-6 h-6 ml-6" />
              <span className="text-2xl">Project Three</span>
            </div>
          </div>
          {/* Box 4 */}
          <div
            className="w-90 h-15 bg-[#4A7F7F] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer"
            onClick={() => handleBoxClick('Box 3')}
          >
            <div className="flex items-center gap-x-3 ml-6">
              <img src={File} alt="file icon" className="w-6 h-6" />
              <span className="text-2xl">Project Four</span>
            </div>
          </div>
          {/* Box 5 */}
          <div
            className="w-90 h-15 bg-[#4A7F7F] rounded-lg flex items-center border-2 transition-all duration-300 hover:h-20 cursor-pointer"
            onClick={() => handleBoxClick('Box 4')}
          >
            <div className="flex items-center gap-x-3 ml-6">
              <img src={File} alt="file icon" className="w-6 h-6" />
              <span className="text-2xl">Project Five</span>
            </div>
          </div>
        </div>

        {/* Right side content */}
        <div className="absolute right-70 top-40 text-white font-fredoka">
          {selectedBox ? (
            <div>
              <h2 className="text-5xl mb-4">{selectedBox}</h2>
              <p className="text-lg">
                {/* Render different content based on selected box */}
                {selectedBox === 'Website' && <span>This is the Website content!</span>}
                {selectedBox === 'Box 1' && <span>Coming Soon.</span>}
                {selectedBox === 'Box 2' && <span>Coming Soon.</span>}
                {selectedBox === 'Box 3' && <span>Coming Soon.</span>}
                {selectedBox === 'Box 4' && <span>Coming Soon.</span>}
              </p>
            </div>
          ) : (
            <p>Select a box to see its content.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tablet;
