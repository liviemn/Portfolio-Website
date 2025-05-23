import React from 'react';
import Icons from '../Components/Icons';
import CafeSign from '../Components/CafeSign';
import Bean from '../assets/bean.png';
import Coffee from '../assets/coffee.png';
import Latte from '../assets/latte.png';
import Milkshake from '../assets/milkshake.png';

const navItems = [
  { label: 'Home', icon: Bean },
  { label: 'About', icon: Coffee },
  { label: 'Skills', icon: Latte },
  { label: 'Projects', icon: Milkshake },
];

const Navigation: React.FC = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden sm:block fixed left-0 right-0 z-50 top-0">
        <div className="w-[75vw] mx-auto mt-0 px-[3vw] py-[4.4vh] rounded-b-full bg-white/70 backdrop-blur-md shadow-lg flex items-center justify-between relative overflow-visible transition-all duration-500">
          {/* Cafe Sign */}
          <div className="w-[8.3vw] max-w-[140px] absolute -top-[5vh] left-[1.8vw]">
            <CafeSign />
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-[5.5vw]">
            {navItems.map(({ label, icon }) => (
              <div
                key={label}
                onClick={() => {
                  const section = document.getElementById(label);
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="h-[5vh] px-[2.5vw] py-[1vh] bg-white text-gray-800 rounded-full shadow text-[1vw] max-text-[18px] font-poetsen hover:bg-neutral-200 transition-all cursor-pointer flex items-center relative"
              >
                <img
                  src={icon}
                  alt={label}
                  className="absolute bottom-[-1.8vh] left-[-0.4vw] w-[2.8vw] h-[2.8vw] max-w-[48px] max-h-[48px] pointer-events-none"
                />
                {label}
              </div>
            ))}
          </div>

          {/* Icons */}
          <Icons />
        </div>
      </div>

      {/* Mobile Navigation*/}
      <div className="block sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-t border-neutral-300 rounded-t-2xl">
        <div className="flex justify-around items-center px-4 py-3">
          {navItems.map(({ label, icon }) => (
            <button
              key={label}
              onClick={() => {
              const section = document.getElementById(label);
              section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex flex-col items-center justify-center"
            >
            <div className="w-[14vw] h-[14vw] max-w-[64px] max-h-[64px] bg-[#F2D7B6] rounded-full shadow-inner flex items-center justify-center mb-[0.5vh] border-[3px] border-white">
              <img
                src={icon}
                alt={label}
                className="w-[6vw] h-[6vw] max-w-[32px] max-h-[32px]"
              />
            </div>
          <span className="text-[3.5vw] font-poetsen text-gray-800">{label}</span>
        </button>
        ))}
    </div>
    </div>

    </>
  );
};

export default Navigation;
