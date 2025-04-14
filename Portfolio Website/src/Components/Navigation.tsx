import React, { useState, useEffect } from 'react';
import Icons from '../Components/Icons';
import CafeSign from '../Components/CafeSign';

const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollTop = 0;

  const SCROLL_THRESHOLD = 15;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (Math.abs(currentScrollTop - lastScrollTop) > SCROLL_THRESHOLD) {
        if (currentScrollTop > lastScrollTop) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 px-6 z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex items-center justify-between w-full">
        {/* Cafe Sign at the top-left corner */}
        <div className="absolute top-[-25px] left-10 w-[200px] h-[200px]">
          <CafeSign />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
