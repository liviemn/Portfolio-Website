import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const AboutBoxes = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
      threshold: 0.2,
      triggerOnce: true,
    });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 2.3,
          type: 'spring',
          bounce: 0.5,
        },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      className="absolute left-1/2 sm:left-[30%] top-[33.5%] transform -translate-x-1/2"
    >
      <div className="flex flex-col space-y-[4vh]">
        <div className="flex space-x-[1.5vw]">

          {/* INTERESTS Box */}
          <div className="relative w-[40vw] sm:w-[14vw] aspect-[5/4] bg-white text-[#3E2B2B] rounded-[1vw] shadow-md p-[1vw] flex border-[0.4vw] sm:border-[0.2vw] border-[#3E2B2B]">
            <div className="absolute top-[-1.5vh] sm:top-[-2.5vh] left-[1vw] w-[16vw] sm:w-[7vw] aspect-[9.5/4] bg-[#3E2B2B] rounded-full flex items-center justify-center">
              <span className="text-[2.5vw] sm:text-[1vw] text-white font-poetsen">INTERESTS</span>
            </div>
            <ul className="list-disc pl-[5vw] sm:pl-[2vw] pt-[2vh] text-[2.3vw] sm:text-[1vw] space-y-[0.2vh]">
              <li>MBTI</li>
              <li>Gaming</li>
              <li>Baking</li>
              <li>Skincare</li>
              <li>Web Design</li>
              <li>Software Design</li>
            </ul>
          </div>

          {/* GAMES Box */}
          <div className="relative w-[40vw] sm:w-[14vw] aspect-[5/4] bg-white text-[#3E2B2B] rounded-[1vw] shadow-md p-[1vw] flex border-[0.4vw] sm:border-[0.2vw] border-[#3E2B2B]">
            <div className="absolute top-[-1.5vh] sm:top-[-2.5vh] left-[1vw] w-[16vw] sm:w-[7vw] aspect-[9.5/4] bg-[#3E2B2B] rounded-full flex items-center justify-center">
              <span className="text-[2.5vw] sm:text-[1vw] text-white font-poetsen">GAMES</span>
            </div>
            <ul className="list-disc pl-[5vw] sm:pl-[2vw] pt-[2vh] text-[2.3vw] sm:text-[1vw] space-y-[0.2vh]">
              <li>Animal Crossing</li>
              <li>Valorant</li>
              <li>Minecraft</li>
              <li>Stardew Valley</li>
              <li>Elden Ring</li>
            </ul>
          </div>

        </div>

        {/* HOBBIES Box */}
        <div className="relative w-[81vw] sm:w-[29.5vw] aspect-[12/4] bg-white text-[#3E2B2B] rounded-[1vw] shadow-md p-[1.2vw] flex justify-center border-[0.4vw] sm:border-[0.2vw] border-[#3E2B2B]">
          <div className="absolute top-[-1.5vh] sm:top-[-2.5vh] left-[1vw] w-[16vw] sm:w-[7vw] aspect-[9.5/4] bg-[#3E2B2B] rounded-full flex items-center justify-center">
            <span className="text-[2.5vw] sm:text-[1vw] text-white font-poetsen">HOBBIES</span>
          </div>
          <div className="pt-[2vh] grid grid-cols-2 gap-x-[3vw] text-[2.3vw] sm:text-[1vw]">
            <ul className="list-disc pl-[4vw] sm:pl-[2vw] space-y-[0.5vh] sm:space-y-[0.3vh]">
              <li>Shopping</li>
              <li>Studying at Cafes</li>
              <li>Notetaking</li>
            </ul>
            <ul className="list-disc pl-[6vw] sm:pl-[1vw] space-y-[0.5vh] sm:space-y-[0.3vh]">
              <li>Photography</li>
              <li>Traveling</li>
              <li>Eating</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutBoxes;
