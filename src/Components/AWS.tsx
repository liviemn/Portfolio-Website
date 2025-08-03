import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import awsLogo from "../assets/aws-certified-cloud-practitioner.png";


const AWS: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { type: "spring", duration: 1.2, bounce: 0.4},
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="w-full flex justify-center mt-86 sm:mt-120"
    >
      <div
        onClick={() => setFlipped(!flipped)}
        className="w-[70%] sm:w-[45%] max-w-xl h-[100px] sm:h-[130px] perspective cursor-pointer"
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 12 }}
          className="relative w-full h-full transform-style-preserve-3d"
        >
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden bg-white/50 backdrop-blur-md rounded-2xl shadow-xl border border-[#ecdccd] p-4 flex flex-col items-center justify-center text-center">
            <img
              src={awsLogo}
              alt="AWS Certified Badge"
              className="w-11 h-11 sm:w-16 sm:h-16 object-contain mb-1 sm:mb-2"
            />
            <h2 className="text-xs sm:text-sm font-semibold text-[#4b2e1a]">
              AWS Certified Cloud Practitioner
            </h2>
            <p className="text-[0.65rem] sm:text-xs text-[#6b4b35] mt-1">
              Click to view Credential ID
            </p>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white/50 backdrop-blur-md rounded-2xl shadow-xl border border-[#ecdccd] p-3 sm:p-4 flex flex-col items-center justify-center text-center">
            <h2 className="text-xs sm:text-sm font-semibold text-[#4b2e1a] mb-1">
              Credential ID
            </h2>
            <p className="text-[0.65rem] sm:text-xs font-mono text-[#6b4b35]">67b9b0c8354e47bc800e51bca8482aec</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AWS;
