import React, { useState, useEffect } from 'react';
import Navigation from '../Components/Navigation';
import Introduction from '../Components/Introduction';
import CafeMenu from '../assets/CafeMenu.png';
import Icons from '../Components/Icons';
import Ribbon from '../assets/ribbon.png';

const Home: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuTransform, setMenuTransform] = useState(0); // For translating the menu

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Calculate how much to scroll out the menu based on scroll position
      const newTransform = Math.min(currentScrollY / 2, 150); // Adjust divisor to control scroll speed

      setMenuTransform(newTransform); // Update the translateY value

      // Scroll down
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } 
      // Scroll up
      else {
        setShowNavbar(true); // Show navbar when scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Navigation />

      <div className="relative pt-16 min-h-screen px-8">
        {/* Cafe Menu image with translateY transformation */}
        <img 
          src={CafeMenu} 
          alt="Cafe Menu" 
          className={`absolute top-5 right-0 w-full max-w-4xl h-auto transition-transform duration-500 ease-in-out hover:-rotate-1 hover:scale-105`}
          style={{ transform: `translateY(-${menuTransform}px)` }} // Apply dynamic translateY here
        />

        <Icons />

        {/* Sections with ids for smooth scrolling */}
        <section id="Home" className="scroll-mt-32">
          <div className="absolute top-20 left-8 w-400 h-100 bg-white/40 backdrop-blur-lg border border-white/30 rounded-3xl p-10 shadow-lg max-w-3xl mt-28 z-10">
            {/* Ribbon */}
            <img 
              src={Ribbon}
              alt="Ribbon"
              className="absolute -top-6 -left-6 w-30 h-30 pointer-events-none"
            />

            <Introduction />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
