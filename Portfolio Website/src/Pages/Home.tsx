import React from 'react';
import Typewriter from 'typewriter-effect';

const Home: React.FC = () => {
  return (
    <div className="text-3xl text-white font-bold text-center mt-10">
      <Typewriter
        options={{
          strings: ["Nice to meet you!", "I'm Olivia!"],
          autoStart: true,
          loop: true,
          delay: 70,
        }}
      />
    </div>
  );
};

export default Home;
