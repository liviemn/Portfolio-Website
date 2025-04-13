import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-full py-16">
      <div className="max-w-3xl font-bold text-black text-left text-6xl ml-4">
        <Typewriter
          words={["Nice to meet you!", "I'm Olivia!"]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={90}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </div>

      <p className="text-base font-bold text-gray-600 mt-8 mb-6 max-w-md ml-4 leading-8">
        I'm a computer science major at George Mason University. Years of experience in customer service
        and proficient in Java, Python, HTML & CSS, and C. Actively looking for internships or
        other opportunities!
      </p>
    </div>
  );
};

export default Introduction;
