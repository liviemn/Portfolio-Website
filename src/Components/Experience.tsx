import React from "react";
import { BsClock } from "react-icons/bs";
import { motion } from "framer-motion";
import { useSpringInView } from "../Components/Animation";

type Experience = {
  date: string;
  title: string;
  description: string;
};

const experiences: Experience[] = [
  {
    date: "2025 — Present",
    title: "AI Agent Builder Intern",
    description:
      "Built and deployed a fully functional AI agent simulating complex enterprise workflows at NeuralSeek. Developed logic flows, API integrations, and decision frameworks for autonomous agent behavior.",
  },
  {
    date: "2024 — 2026 (Expected)",
    title: "B.S. Computer Science",
    description:
      "Studying at George Mason University. Focused on Software Engineering and Cybersecurity. Overall GPA: 3.8",
  },
  {
    date: "2022 - 2024",
    title: "A.S Computer Science",
    description:
      "Completed an Associate of Science in Computer Science at Northern Virginia Community College. Graduated with a 3.9 GPA.",
  },
];

const CafeTimelineList: React.FC = () => {
  const { ref, controls, initial } = useSpringInView(0.2, 0.3);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={controls}
      className="bg-white/30 rounded-3xl p-3.5 sm:p-6 shadow-xl border border-white/20 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mt-10 sm:mt-9 mx-auto space-y-6"
    >
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-white/50 rounded-2xl p-2 sm:p-4 shadow-md border border-[#ecdccd] hover:scale-[1.02] transition-all duration-300"
        >
          <div className="flex items-center text-[#7a5230] font-medium text-[0.65rem] sm:text-sm mb-1">
            <BsClock className="mr-2" />
            {exp.date}
          </div>
          <h3 className="text-[0.70rem] sm:text-base font-bold text-[#4b2e1a] mb-1">
            {exp.title}
          </h3>
          <p className="text-[0.65rem] sm:text-sm text-[#6b4b35] leading-relaxed">
            {exp.description}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default CafeTimelineList;
