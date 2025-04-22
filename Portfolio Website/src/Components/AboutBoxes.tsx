import React from "react";

const AboutBoxes = () => {
    return (
        <div className="absolute left-1/4 top-1/3 transform -translate-x-1/2">
        <div className="flex flex-col space-y-8">
          <div className="flex space-x-4">

            <div className="relative w-48 h-53 bg-white text-[#3E2B2B] rounded-xl shadow-md p-4 flex border-2 border-[#3E2B2B]">
              <div className="absolute top-[-20px] left-3 w-25 h-10 bg-[#3E2B2B] rounded-full flex items-center justify-center">
                <span className="text-sm text-white font-poetsen">INTERESTS</span>
              </div>
              <ul className="list-disc pl-6 pt-4 text-sm space-y-1">
                <li>MBTI</li>
                <li>Gaming</li>
                <li>Baking</li>
                <li>Skincare</li>
                <li>Web Design</li>
                <li>Software Design</li>
              </ul>
            </div>

            <div className="relative w-48 h-53 bg-white text-[#3E2B2B] rounded-xl shadow-md p-4 flex border-2 border-[#3E2B2B]">
              <div className="absolute top-[-20px] left-3 w-25 h-10 bg-[#3E2B2B] rounded-full flex items-center justify-center">
                  <span className="text-sm text-white font-poetsen">GAMES</span>
              </div>
              <ul className="list-disc pl-6 pt-4 text-sm space-y-1">
                <li>Animal Crossing</li>
                <li>Valorant</li>
                <li>Minecraft</li>
                <li>Stardew Valley</li>
                <li>Elden Ring</li>
              </ul>
            </div>
          </div>

          <div className="relative w-100 h-38 bg-white text-[#3E2B2B] rounded-xl shadow-md p-4 flex justify-center border-2 border-[#3E2B2B]">
            <div className="absolute top-[-20px] left-3 w-25 h-10 bg-[#3E2B2B] rounded-full flex items-center justify-center">
              <span className="text-sm text-white font-poetsen">HOBBIES</span>
            </div>
            <div className="pt-4 grid grid-cols-2 gap-x-8 text-sm">
                <ul className="list-disc pl-5 space-y-1">
                <li>Shopping</li>
                <li>Studying at Cafes</li>
                <li>Notetaking</li>
                </ul>
                <ul className="list-disc pl-5 space-y-1">
                <li>Photography</li>
                <li>Traveling</li>
                <li>Eating</li>
                </ul>
            </div>
          </div>
        </div>
      </div>

    );
};
export default AboutBoxes;