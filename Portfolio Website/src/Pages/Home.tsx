import React, { useState, useEffect } from 'react';
import Navigation from '../Components/Navigation'; // Import the Navigation component
import ThreeModel from '../Components/ThreeModel';
import Introduction from '../Components/Introduction';

const Home: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Include Navigation Component */}
      <Navigation />

      {/* Main Section */}
      <div className="relative pt-16 min-h-screen px-8">
        <div className="absolute top-40 right-60 w-[400px] h-[400px]">
          <ThreeModel />
        </div>

        <div className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-3xl p-10 shadow-lg max-w-3xl mt-28">
          <Introduction />
        </div>
      </div>
    </>
  );
};

export default Home;
