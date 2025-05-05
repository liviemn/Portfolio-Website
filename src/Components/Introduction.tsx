import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-full py-16 xl:py-16 2xl:py-20">
      <div className="max-w-3xl xl:max-w-3xl 2xl:max-w-5xl font-poetsen text-[#3E2B2B] text-left text-6xl xl:text-6xl 2xl:text-7xl ml-4 xl:ml-4 2xl:ml-6">
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

      <p className="text-base xl:text-base 2xl:text-lg font-poetsen !text-[#3E2B2B] mt-8 mb-6 max-w-md xl:max-w-md 2xl:max-w-lg ml-4 xl:ml-4 2xl:ml-6 leading-8 xl:leading-8 2xl:leading-9">
        I'm a computer science major at George Mason University. Years of experience in customer service
        and proficient in Java, Python, HTML & CSS, and C. Actively looking for internships or
        other opportunities!
      </p>
    </div>
  );
};

export default Introduction;
