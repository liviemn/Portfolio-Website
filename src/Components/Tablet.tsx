import React, { useState, memo, Suspense } from 'react';
import File from '../assets/file.png';
import pixelbg from '../assets/pixelbg.webp';
import { FaGithub } from 'react-icons/fa';
import { RectangleHorizontal, Minus, X } from 'lucide-react';

// Optional: lazy load the video to reduce initial load
const LazyPochacco = memo(() => (
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-64 h-auto rounded-lg"
    src="/pochacco.mp4" // make sure this path is correct and in /public
  />
));

const projects = [
  'Website',
  'Project Two',
  'Project Three',
  'Project Four',
  'Project Five',
];

const Tablet: React.FC = () => {
  const [selectedBox, setSelectedBox] = useState<string | null>(null);

  const getProjectLink = (project: string) => {
    switch (project) {
      case 'Website':
        return 'https://github.com/liviemn/Portfolio-Website';
      default:
        return '#';
    }
  };

  return (
    <div className="w-[75vw] h-[75vh] bg-white border-4 border-brown rounded-2xl shadow-xl mt-[30vh] mx-auto">
      {/* Top Bar */}
      <div className="w-full h-12 bg-[#3E2B2B] rounded-t-2xl flex items-center justify-end text-white font-pixel px-6">
        <div className="flex items-center divide-x divide-black">
          {[RectangleHorizontal, Minus, X].map((Icon, i) => (
            <div key={i} className="px-4">
              <Icon className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Inner Screen */}
      <div
        className="w-[92%] h-[80%] border-4 border-brown shadow-xl flex justify-center items-start relative mt-4 mx-auto rounded-xl"
        style={{
          backgroundImage: `url(${pixelbg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Title */}
        <div className="absolute top-4 left-10 text-4xl md:text-5xl lg:text-6xl text-white font-pixel">
          My Coding Journey
        </div>

        {/* Project List */}
        <div className="space-y-4 absolute left-10 top-32 text-white font-pixel max-h-[36vh] overflow-y-auto">
          {projects.map((project) => (
            <div
              key={project}
              onClick={() => setSelectedBox(project)}
              className="w-[24vw] h-14 bg-[#3E2B2B] rounded-md flex items-center border transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center gap-4 ml-6">
                <img src={File} alt="file icon" className="w-6 h-6" />
                <span className="text-lg md:text-xl">{project}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Details */}
        <div className="absolute right-10 top-28 text-white font-pixel max-w-[30vw]">
          {selectedBox ? (
            <div className="p-4 bg-[#3E2B2B] rounded-xl border-4 border-white shadow-md">
              <div className="flex items-center gap-4 mb-2">
                <h2 className="text-2xl md:text-3xl break-words">{selectedBox}</h2>
                <a
                  href={getProjectLink(selectedBox)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 text-2xl"
                >
                  <FaGithub />
                </a>
              </div>
              <p className="text-base leading-relaxed">
                {selectedBox === 'Website' ? (
                  <>
                    I created a website portfolio to showcase myself and my skills!
                    I had a fun time designing and creating this website.
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['React', 'Typescript', 'TailwindCSS', 'ThreeJS', 'HTML', 'CSS', 'Lanyard'].map((tech) => (
                        <span
                          key={tech}
                          className="bg-white text-[#3E2B2B] rounded-full px-3 py-1 text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  'Coming Soon.'
                )}
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center">
              <Suspense fallback={<div>Loading...</div>}>
                <LazyPochacco />
              </Suspense>
              <p className="text-lg mt-4 font-light">
                Tap a box on the left to see what's inside ✨
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Tablet);
