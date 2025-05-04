import React from 'react';
import { motion } from 'framer-motion';
import StackIcon from "tech-stack-icons";
import Wood from "../assets/darkwood.jpeg";

const techsLeft = [
  { name: "reactjs", label: "React" },
  { name: "html5", label: "HTML" },
  { name: "nodejs", label: "Node.js" },
];

const techsMiddle = [
  { name: "typescript", label: "TypeScript" },
  { name: "css3", label: "CSS" },
  { name: "java", label: "Java" },
  { name: "threejs", label: "Three.js" },
];

const techsRight = [
  { name: "python", label: "Python" },
  { name: "vitejs", label: "Vite" },
  { name: "tailwindcss", label: "TailwindCSS" },
];

// Helper to assign delay based on "how far from center"
const getDelay = (column: number, row: number) => {
  return (Math.abs(column - 1) + Math.abs(row - 1)) * 0.2; 
};

const Tech: React.FC = () => {
  return (
    <div className="absolute left-8 right-8 bg-transparent p-10 max-w-7xl mx-auto mt-28 z-10">
      <div className="flex justify-start items-center gap-12">
        {/* Left Column */}
        <div className="flex flex-col justify-center gap-6">
          {techsLeft.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} column={0} row={index} />
          ))}
        </div>

        {/* Middle Column */}
        <div className="flex flex-col justify-center gap-6">
          {techsMiddle.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} column={1} row={index} />
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center gap-6">
          {techsRight.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} column={2} row={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TechCard: React.FC<{ tech: { name: string; label: string }, column: number, row: number }> = ({ tech, column, row }) => {
    const delay = getDelay(column, row);
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2.2, delay }}
        viewport={{ once: true, amount: 0.3 }} // 👈 critical: amount controls how much of the card must be visible
        className="rounded-2xl bg-gradient-to-r from-[#D6B98C] via-[#C8A370] to-[#B58A56] p-[3px] hover:scale-105 transition-transform duration-300 shadow-md"
      >
        <div
          className="flex flex-col items-center justify-center w-32 h-24 bg-cover bg-center rounded-2xl backdrop-blur-md"
          style={{
            backgroundImage: `url(${Wood})`,
          }}
        >
          <StackIcon 
            name={tech.name} 
            className="w-12 h-12 mb-2"
          />
          <p className="text-sm text-center font-semibold text-white">{tech.label}</p>
        </div>
      </motion.div>
    );
  };
  

export default Tech;
