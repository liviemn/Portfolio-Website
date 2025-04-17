import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-full py-16">
      <div className="max-w-3xl font-poetsen text-[#3E2B2B] text-left text-6xl ml-4">
        <Typewriter
          words={["Moon Cafe Open!", "Hi, I'm Olivia!"]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </div>

      <p className="text-base font-poetsen !text-[#3E2B2B] mt-8 mb-6 max-w-md ml-4 leading-8">
        I'm a computer science major at George Mason University. Years of experience in customer service
        and proficient in Java, Python, HTML & CSS, and C. Actively looking for internships or
        other opportunities!
      </p>
    </div>
  );
};

export default Introduction;
