import React from 'react';
import cafeSign from '../assets/cafesign.png';

const CafeSign: React.FC = () => {
  return (
    <img
      src={cafeSign}
      alt="Moon Cafe sign"
      className="w-full max-w-[150px] drop-shadow-xl transition-transform duration-500 hover:scale-105"
    />
  );
};

export default CafeSign;
