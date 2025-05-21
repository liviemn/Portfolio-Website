import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col justify-center px-3 py-8 sm:h-[40vh]">
      <div className="font-poetsen text-[#3E2B2B] text-left text-3xl sm:text-[3vw] lg:text-[4.2vw] max-w-full sm:max-w-[45vw] mb-4 sm:ml-[1vw]">
        <Typewriter
          words={["Hello!", "My name is Olivia!"]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </div>

      <p className="text-sm sm:text-base xl:text-base 2xl:text-lg font-poetsen text-[#3E2B2B] leading-relaxed sm:leading-[2.3vw] max-w-full sm:max-w-[33vw] sm:ml-[1vw]">
        I'm a computer science major at George Mason University. Years of experience in customer service
        and proficient in Java, Python, HTML & CSS, and C. Actively looking for internships or
        other opportunities!
      </p>
    </div>
  );
};

export default Introduction;
