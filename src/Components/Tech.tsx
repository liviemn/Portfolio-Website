import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiCss3, SiThreedotjs, SiVite, SiTailwindcss } from 'react-icons/si';
import Wood from "../assets/darkwood.jpeg";

// Left, Middle, Right Columns
const techsLeft = [
  { icon: <FaReact className="w-12 h-12 mb-2 text-white" />, label: "React" },
  { icon: <FaHtml5 className="w-12 h-12 mb-2 text-white" />, label: "HTML" },
  { icon: <FaNodeJs className="w-12 h-12 mb-2 text-white" />, label: "Node.js" },
];

const techsMiddle = [
  { icon: <SiTypescript className="w-12 h-12 mb-2 text-white" />, label: "TypeScript" },
  { icon: <SiCss3 className="w-12 h-12 mb-2 text-white" />, label: "CSS" },
  { icon: <FaJava className="w-12 h-12 mb-2 text-white" />, label: "Java" },
  { icon: <SiThreedotjs className="w-12 h-12 mb-2 text-white" />, label: "Three.js" },
];

const techsRight = [
  { icon: <FaPython className="w-12 h-12 mb-2 text-white" />, label: "Python" },
  { icon: <SiVite className="w-12 h-12 mb-2 text-white" />, label: "Vite" },
  { icon: <SiTailwindcss className="w-12 h-12 mb-2 text-white" />, label: "TailwindCSS" },
];

// Helper to assign delay based on "how far from center"
const getDelay = (column: number, row: number) => {
  return (Math.abs(column - 1) + Math.abs(row - 1)) * 0.2; 
};

const Tech: React.FC = () => {
  return (
    <div className="absolute left-[5vw] right-[5vw] bg-transparent p-[3vw] max-w-[88vw] mx-auto mt-[13vh] z-10">
      <div className="flex justify-start items-center gap-[3.2vw]">
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

const TechCard: React.FC<{ tech: { icon: React.ReactElement; label: string }, column: number, row: number }> = ({ tech, column, row }) => {
    const delay = getDelay(column, row);
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.2, delay }}
        viewport={{ once: true, amount: 0.3 }}
        className="rounded-[1.2vw] bg-gradient-to-r from-[#D6B98C] via-[#C8A370] to-[#B58A56] p-[0.2vw] hover:scale-105 transition-transform duration-300 shadow-md"
      >
        <div
          className="flex flex-col items-center justify-center w-[9vw] h-[11.5vh] bg-cover bg-center rounded-[1.2vw] backdrop-blur-md"
          style={{
            backgroundImage: `url(${Wood})`,
          }}
        >
          {/* Icon with responsive size */}
          <div className="text-white mb-[0vh] w-[3.3vw] h-[3.75vw]">
            {tech.icon}
          </div>
          {/* Label with responsive size */}
          <p className="text-[1vw] text-center font-semibold text-white flex items-center justify-center">
            {tech.label}
          </p>
        </div>
      </motion.div>
    );
};

  

export default Tech;
