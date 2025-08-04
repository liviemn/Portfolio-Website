import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiTypescript, SiCss3, SiThreedotjs, SiVite, SiTailwindcss } from 'react-icons/si';
import Wood from "../assets/darkwood.jpeg";

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


const Tech: React.FC = () => {
    return (
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ willChange: 'opacity, transform' }}
        className="absolute left-[7.5vw] right-[5vw] bg-transparent p-[3vw] max-w-[88vw] mx-auto mt-[-2vh] sm:mt-[-5vh] xlg:mt-[-20vh]"
      >
        <div className="flex justify-center sm:justify-start items-center gap-[3.2vw]">
          {/* Left Column */}
          <div className="flex flex-col justify-center gap-[3vh]">
            {techsLeft.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
  
          {/* Middle Column */}
          <div className="flex flex-col justify-center gap-[3vh]">
            {techsMiddle.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
  
          {/* Right Column */}
          <div className="flex flex-col justify-center gap-[3vh]">
            {techsRight.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </div>
      </motion.div>
    );
  };
  

const TechCard: React.FC<{
    tech: { icon: React.ReactElement; label: string };
  }> = ({ tech }) => {
    return (
      <div
        className="rounded-[1.2vw] bg-gradient-to-r from-[#D6B98C] via-[#C8A370] to-[#B58A56] p-[0.2vw] hover:scale-105 transition-transform duration-300 shadow-md"
      >
        <div
          className="flex flex-col items-center justify-center w-[20vw] sm:w-[8.5vw] aspect-[2.75/2] bg-cover bg-center rounded-[1.2vw] backdrop-blur-md"
          style={{ backgroundImage: `url(${Wood})` }}
        >
          <div className="text-white flex items-center justify-center w-[8vw] h-[8vw] sm:w-[3.3vw] sm:h-[3.3vw]">
            {tech.icon}
          </div>
          <p className="text-[2.2vw] sm:text-[1vw] text-center font-semibold text-white">
            {tech.label}
          </p>
        </div>
      </div>
    );
  };
  

export default Tech;
