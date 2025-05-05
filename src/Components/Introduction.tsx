import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-[35vh] py-[8vh]">
      <div className="max-w-[45vw] font-poetsen text-[#3E2B2B] text-left text-[4.2vw] ml-[1vw]">
        <Typewriter
          words={["Hello!", "My name is Olivia :)"]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </div>

      <p className="text-base xl:text-base 2xl:text-lg font-poetsen !text-[#3E2B2B] mt-[2vh] mb-[3vh] max-w-[33vw] ml-[1vw] leading-[2.3vw]">
        I'm a computer science major at George Mason University. Years of experience in customer service
        and proficient in Java, Python, HTML & CSS, and C. Actively looking for internships or
        other opportunities!
      </p>
    </div>
  );
};

export default Introduction;
