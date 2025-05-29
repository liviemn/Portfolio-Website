// src/Components/Tech.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiCss3, SiThreedotjs, SiVite, SiTailwindcss } from 'react-icons/si';
import Wood from "../assets/darkwood.jpeg";
import { useSpringInView } from '../Components/Animation'; // adjust path if needed

// Left, Middle, Right Columns
const techsLeft = [
  { icon: <FaReact className="text-white text-[7vw] sm:text-[3vw] mb-[1vh]" />, label: "React" },
  { icon: <FaHtml5 className="text-white text-[7vw] sm:text-[3vw] mb-[1vh]" />, label: "HTML" },
  { icon: <FaNodeJs className="text-white text-[7vw] sm:text-[3vw] mb-[1vh]" />, label: "Node.js" },
];

const techsMiddle = [
  { icon: <SiTypescript className="text-white text-[6.5vw] sm:text-[3vw] mb-[1vh]" />, label: "TypeScript" },
  { icon: <SiCss3 className="text-white text-[6.5vw] sm:text-[3vw] mb-[1vh]" />, label: "CSS" },
  { icon: <FaJava className="text-white text-[6.5vw] sm:text-[3vw] mb-[1vh]" />, label: "Java" },
  { icon: <SiThreedotjs className="text-white text-[6.5vw] sm:text-[3vw] mb-[1vh]" />, label: "Three.js" },
];

const techsRight = [
  { icon: <FaPython className="text-white text-[6.5vw] sm:text-[3vw] mb-[1vh]" />, label: "Python" },
  { icon: <SiVite className="text-white text-[6.5vw] sm:text-[3vw] mb-[1vh]" />, label: "Vite" },
  { icon: <SiTailwindcss className="text-white text-[6.5vw] sm:text-[3vw] mb-[1vh]" />, label: "TailwindCSS" },
];

// Delay helper
const getDelay = (column: number, row: number) => {
  return (Math.abs(column - 1) + Math.abs(row - 1)) * 0.15;
};

const Tech: React.FC = () => {
  return (
    <div className="absolute left-[5vw] right-[5vw] bg-transparent p-[3vw] max-w-[88vw] mx-auto mt-[13vh] z-10">
      <div className="flex justify-center sm:justify-start items-center gap-[3.2vw]">
        {/* Left Column */}
        <div className="flex flex-col justify-center gap-[3vh]">
          {techsLeft.map((tech, index) => (
            <TechCard key={index} tech={tech} column={0} row={index} />
          ))}
        </div>

        {/* Middle Column */}
        <div className="flex flex-col justify-center gap-[3vh]">
          {techsMiddle.map((tech, index) => (
            <TechCard key={index} tech={tech} column={1} row={index} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center gap-[3vh]">
          {techsRight.map((tech, index) => (
            <TechCard key={index} tech={tech} column={2} row={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TechCard: React.FC<{
  tech: { icon: React.ReactElement; label: string };
  column: number;
  row: number;
}> = ({ tech, column, row }) => {
  const delay = getDelay(column, row);
  const { ref, controls, initial } = useSpringInView(delay);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      className="flex flex-col items-center justify-center w-[20vw] sm:w-[9vw] aspect-[2.75/2] bg-cover bg-center rounded-[1.2vw] backdrop-blur-md"
      style={{ backgroundImage: `url(${Wood})` }}
    >
      <div className="text-white flex items-center justify-center w-[8vw] h-[8vw] sm:w-[3.3vw] sm:h-[3.3vw]">
        {tech.icon}
      </div>
      <p className="text-[2.2vw] sm:text-[1vw] text-center font-semibold text-white">
        {tech.label}
      </p>
    </motion.div>
  );
};

export default Tech;
