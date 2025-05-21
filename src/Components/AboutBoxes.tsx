import FadeIn from '../Components/FadeIn'

const AboutBoxes = () => {
    return (
        <div className="absolute left-[30%] top-[33.5%] transform -translate-x-1/2 max-w-[90vw] px-4">
            <FadeIn>
                <div className="flex flex-col space-y-8 sm:space-y-10">
                    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0">

                        {/* INTERESTS Box */}
                        <div className="relative w-full sm:w-1/2 max-w-[400px] bg-white text-[#3E2B2B] rounded-xl shadow-md p-4 border-3 border-[#3E2B2B]">
                            <div className="absolute -top-5 left-4 w-[50%] h-[5vh] bg-[#3E2B2B] rounded-full flex items-center justify-center">
                                <span className="text-sm sm:text-base text-white font-poetsen">INTERESTS</span>
                            </div>
                            <ul className="list-disc pl-6 pt-4.5 text-xs sm:text-sm space-y-1.5">
                                <li>MBTI</li>
                                <li>Gaming</li>
                                <li>Baking</li>
                                <li>Skincare</li>
                                <li>Web Design</li>
                                <li>Software Design</li>
                            </ul>
                        </div>

                        {/* GAMES Box */}
                        <div className="relative w-full sm:w-1/2 max-w-[400px] bg-white text-[#3E2B2B] rounded-xl shadow-md p-4 border-3 border-[#3E2B2B]">
                            <div className="absolute -top-5 left-4 w-[50%] h-[5vh] bg-[#3E2B2B] rounded-full flex items-center justify-center">
                                <span className="text-sm sm:text-base text-white font-poetsen">GAMES</span>
                            </div>
                            <ul className="list-disc pl-6 pt-4.5 text-xs sm:text-sm space-y-1.5">
                                <li>Animal Crossing</li>
                                <li>Valorant</li>
                                <li>Minecraft</li>
                                <li>Stardew Valley</li>
                                <li>Elden Ring</li>
                            </ul>
                        </div>

                    </div>

                    {/* HOBBIES Box */}
                    <div className="relative w-[29.5vw] h-[18vh] bg-white text-[#3E2B2B] rounded-[1vw] shadow-md p-[1.2vw] flex justify-center border-[0.2vw] border-[#3E2B2B]">
                        <div className="absolute top-[-2.5vh] left-[1vw] w-[7vw] h-[5vh] bg-[#3E2B2B] rounded-full flex items-center justify-center">
                            <span className="text-[1vw] text-white font-poetsen">HOBBIES</span>
                        </div>
                        <div className="pt-[2vh] grid grid-cols-2 gap-x-[3vw] text-[1vw]">
                            <ul className="list-disc pl-[2vw] space-y-[0.3vh]">
                                <li>Shopping</li>
                                <li>Studying at Cafes</li>
                                <li>Notetaking</li>
                            </ul>
                            <ul className="list-disc pl-[1vw] space-y-[0.3vh]">
                                <li>Photography</li>
                                <li>Traveling</li>
                                <li>Eating</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </FadeIn>
        </div>
    );
};

export default AboutBoxes;
