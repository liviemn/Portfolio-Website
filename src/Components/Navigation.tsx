import React from 'react';
import Icons from '../Components/Icons';
import CafeSign from '../Components/CafeSign';
import Bean from '../assets/bean.png';
import Coffee from '../assets/coffee.png';
import Latte from '../assets/latte.png';
import Milkshake from '../assets/milkshake.png';

const Navigation: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 sm:top-0 sm:bottom-auto bottom-0 sm:bottom-auto">
      <div className="w-[75vw] mx-auto mt-0 px-[3vw] py-[4.4vh] rounded-b-full bg-white/70 backdrop-blur-md shadow-lg flex items-center justify-between relative overflow-visible transition-all duration-500">
        
        {/* Cafe Sign */}
        <div className="w-[8.3vw] max-w-[140px] absolute -top-[5vh] left-[1.8vw]">
          <CafeSign />
        </div>

        {/* Navigation Buttons */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-[5.5vw]">
          {['Home', 'About', 'Skills', 'Projects'].map((item) => (
            <div
              key={item}
              onClick={() => {
                const section = document.getElementById(item);
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="h-[5vh] px-[2.5vw] py-[1vh] bg-white text-gray-800 rounded-full shadow text-[1vw] max-text-[18px] font-poetsen hover:bg-neutral-200 transition-all cursor-pointer flex items-center relative"
            >
              {/* Icons under nav buttons */}
              {item === 'Home' && (
                <img
                  src={Bean}
                  alt="Bean"
                  className="absolute bottom-[-1.8vh] left-[-0.4vw] w-[2.8vw] h-[2.8vw] max-w-[48px] max-h-[48px] pointer-events-none"
                />
              )}
              {item === 'About' && (
                <img
                  src={Coffee}
                  alt="Coffee"
                  className="absolute bottom-[-1.8vh] left-[-0.4vw] w-[2.8vw] h-[2.8vw] max-w-[48px] max-h-[48px] pointer-events-none"
                />
              )}
              {item === 'Skills' && (
                <img
                  src={Latte}
                  alt="Latte"
                  className="absolute bottom-[-1.8vh] left-[-0.4vw] w-[2.8vw] h-[2.8vw] max-w-[48px] max-h-[48px] pointer-events-none"
                />
              )}
              {item === 'Projects' && (
                <img
                  src={Milkshake}
                  alt="Milkshake"
                  className="absolute bottom-[-1.8vh] left-[-0.4vw] w-[2.8vw] h-[2.8vw] max-w-[48px] max-h-[48px] pointer-events-none"
                />
              )}

              {item}
            </div>
          ))}
        </div>

        {/* Icons component */}
        <Icons />
      </div>
    </div>
  );
};

export default Navigation;
