import React from 'react';
import Icons from '../Components/Icons';
import CafeSign from '../Components/CafeSign';
import Bean from '../assets/bean.png';
import Coffee from '../assets/coffee.png';
import Latte from '../assets/latte.png';
import Milkshake from '../assets/milkshake.png';

const Navigation: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="w-[75%] xl:w-[75%] 2xl:w-[80%] mx-auto mt-0 px-6 xl:px-8 2xl:px-10 py-9 xl:py-10 2xl:py-12 rounded-b-full bg-white/70 backdrop-blur-md shadow-lg flex items-center justify-between relative overflow-visible transition-all duration-500">
        
        {/* Cafe Sign */}
        <div className="w-[120px] xl:w-[120px] 2xl:w-[140px] h-[120px] xl:h-[120px] 2xl:h-[140px] absolute -top-10 xl:-top-10 2xl:-top-12 left-6 xl:left-6 2xl:left-10">
          <CafeSign />
        </div>

        {/* Navigation Buttons */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-14 xl:gap-20 2xl:gap-24">
          {['Home', 'About', 'Skills', 'Projects'].map((item) => (
            <div
              key={item}
              onClick={() => {
                const section = document.getElementById(item);
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="h-[40px] xl:h-[40px] 2xl:h-[50px] px-9 xl:px-9 2xl:px-12 py-2 xl:py-2 2xl:py-3 bg-white text-gray-800 rounded-full shadow text-sm xl:text-sm 2xl:text-base font-poetsen hover:bg-neutral-200 transition-all cursor-pointer flex items-center gap-2 relative"
            >
              {/* Icons under nav buttons */}
              {item === 'Home' && (
                <img
                  src={Bean}
                  alt="Bean"
                  className="absolute bottom-[-15px] left-[-8px] w-10 xl:w-10 2xl:w-12 h-10 xl:h-10 2xl:h-12 pointer-events-none"
                />
              )}
              {item === 'About' && (
                <img
                  src={Coffee}
                  alt="Coffee"
                  className="absolute bottom-[-15px] left-[-8px] w-10 xl:w-10 2xl:w-12 h-10 xl:h-10 2xl:h-12 pointer-events-none"
                />
              )}
              {item === 'Skills' && (
                <img
                  src={Latte}
                  alt="Latte"
                  className="absolute bottom-[-15px] left-[-8px] w-10 xl:w-10 2xl:w-12 h-10 xl:h-10 2xl:h-12 pointer-events-none"
                />
              )}
              {item === 'Projects' && (
                <img
                  src={Milkshake}
                  alt="Milkshake"
                  className="absolute bottom-[-15px] left-[-8px] w-10 xl:w-10 2xl:w-12 h-10 xl:h-10 2xl:h-12 pointer-events-none"
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
