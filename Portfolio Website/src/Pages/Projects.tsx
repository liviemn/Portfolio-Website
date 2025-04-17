import React from 'react';

function Projects() {
  return (
    <div
      id="Projects"
      className="relative h-screen flex justify-end items-end pr-16 pb-40"
    >
      {/* Oval Header */}
      <div className="absolute top-35 left-16 rotate-[-6deg]">
        <div className="px-10 py-4 rounded-2x1 bg-[#3E2B2B] backdrop-blur-md shadow-lg text-4xl font-poetsen text-white drop-shadow-lg">
          Projects
        </div>
      </div>
    </div>
  );
}

export default Projects;
