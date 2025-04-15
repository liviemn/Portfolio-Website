import React from 'react';
import Icons from '../Components/Icons';
import CafeSign from '../Components/CafeSign';
import Bean from '../assets/bean.png'; // Home
import Coffee from '../assets/coffee.png'; // About
import Latte from '../assets/latte.png'; // Skills
import Milkshake from '../assets/milkshake.png'; // Projects

const Navigation: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Blurred Navigation Bar */}
      <div className="w-[75%] mx-auto mt-0 px-6 py-9 rounded-b-full bg-white/70 backdrop-blur-md shadow-lg flex items-center justify-between relative overflow-visible">
        {/* Cafe Sign inside the nav bar */}
        <div className="w-[120px] h-[120px] absolute -top-10 left-6">
          <CafeSign />
        </div>

        {/* Centered Oval Buttons */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-20">
          {['Home', 'About', 'Skills', 'Projects'].map((item) => (
            <div
              key={item}
              onClick={() => {
                const section = document.getElementById(item);
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="h-[40px] px-9 py-2 bg-white text-gray-800 rounded-full shadow text-sm font-poetsen hover:bg-neutral-200 transition-all cursor-pointer flex items-center gap-2 relative"
            >
              {/* Icon Images */}
              {item === 'Home' && (
                <img
                  src={Bean}
                  alt="Bean"
                  className="absolute bottom-[-15px] left-[-8px] w-10 h-10 pointer-events-none"
                />
              )}
              {item === 'About' && (
                <img
                  src={Coffee}
                  alt="Coffee"
                  className="absolute bottom-[-15px] left-[-8px] w-10 h-10 pointer-events-none"
                />
              )}
              {item === 'Skills' && (
                <img
                  src={Latte}
                  alt="Latte"
                  className="absolute bottom-[-15px] left-[-8px] w-10 h-10 pointer-events-none"
                />
              )}
              {item === 'Projects' && (
                <img
                  src={Milkshake}
                  alt="Milkshake"
                  className="absolute bottom-[-15px] left-[-8px] w-10 h-10 pointer-events-none"
                />
              )}

              {/* Text for each button */}
              {item}
            </div>
          ))}
        </div>

        {/* Icons on the right */}
        <Icons />
      </div>
    </div>
  );
};

export default Navigation;
