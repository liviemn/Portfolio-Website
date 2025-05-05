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
    <div className="absolute left-8 right-8 bg-transparent p-10 max-w-7xl mx-auto mt-28 z-10">
      <div className="flex justify-start items-center gap-12 2xl:ml-28">
        {/* Left Column */}
        <div className="flex flex-col justify-center gap-6">
          {techsLeft.map((tech, index) => (
            <TechCard key={index} tech={tech} column={0} row={index} />
          ))}
        </div>

        {/* Middle Column */}
        <div className="flex flex-col justify-center gap-6">
          {techsMiddle.map((tech, index) => (
            <TechCard key={index} tech={tech} column={1} row={index} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center gap-6">
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
        className="rounded-2xl bg-gradient-to-r from-[#D6B98C] via-[#C8A370] to-[#B58A56] p-[3px] hover:scale-105 transition-transform duration-300 shadow-md"
      >
        <div
          className="flex flex-col items-center justify-center w-32 xl:w-32 2xl:w-40 h-24 xl:h-24 2xl:h-32 bg-cover bg-center rounded-2xl backdrop-blur-md"
          style={{
            backgroundImage: `url(${Wood})`,
          }}
        >
          {/* Icon with responsive size */}
          <div className="text-white mb-2 w-12 h-12 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16">
            {tech.icon}
          </div>
          {/* Label with responsive size */}
          <p className="text-sm xl:text-sm 2xl:text-base text-center font-semibold text-white">
            {tech.label}
          </p>
        </div>
      </motion.div>
    );
};

  

export default Tech;
