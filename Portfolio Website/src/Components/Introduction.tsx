import React from 'react';
import Typewriter from 'typewriter-effect';

const Introduction: React.FC = () => {
  return (
    <div className="mt-45"> {/* Added margin-top to move the content down */}
      {/* Text content on the left */}
      <div className="max-w-3xl font-bold text-gray-600 text-left text-6xl ml-4">
        <Typewriter
          options={{
            strings: ["Nice to meet you!", "I'm Olivia!"],
            autoStart: true,
            loop: true,
            delay: 80,
          }}
        />
      </div>

      {/* Paragraph below text */}
      <p className="text-base font-bold text-gray-700 mt-8 max-w-md ml-4">
        I'm a computer science major at George Mason University. Years of experience in customer service
        and proficient in Java, Python, HTML & CSS, and C. Actively looking for internships or
        other opportunities!
      </p>
    </div>
  );
};

export default Introduction;
