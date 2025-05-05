import FadeIn from '../Components/FadeIn'

const AboutBoxes = () => {
    return (
        <div className="absolute left-[30%] top-[33.5%] transform -translate-x-1/2">
            <FadeIn>
                <div className="flex flex-col space-y-[4vh]">
                    <div className="flex space-x-[1.5vw]">

                        {/* INTERESTS Box */}
                        <div className="relative w-[14vw] h-[26vh] bg-white text-[#3E2B2B] rounded-[1vw] shadow-md p-[1vw] flex border-[0.2vw] border-[#3E2B2B]">
                            <div className="absolute top-[-2.5vh] left-[1vw] w-[7vw] h-[5vh] bg-[#3E2B2B] rounded-full flex items-center justify-center">
                                <span className="text-[1vw] text-white font-poetsen">INTERESTS</span>
                            </div>
                            <ul className="list-disc pl-[2vw] pt-[2vh] text-[1vw] space-y-[0.2vh]">
                                <li>MBTI</li>
                                <li>Gaming</li>
                                <li>Baking</li>
                                <li>Skincare</li>
                                <li>Web Design</li>
                                <li>Software Design</li>
                            </ul>
                        </div>

                        {/* GAMES Box */}
                        <div className="relative w-[14vw] h-[26vh] bg-white text-[#3E2B2B] rounded-[1vw] shadow-md p-[1vw] flex border-[0.2vw] border-[#3E2B2B]">
                            <div className="absolute top-[-2.5vh] left-[1vw] w-[7vw] h-[5vh] bg-[#3E2B2B] rounded-full flex items-center justify-center">
                                <span className="text-[1vw] text-white font-poetsen">GAMES</span>
                            </div>
                            <ul className="list-disc pl-[2vw] pt-[2vh] text-[1vw] space-y-[0.2vh]">
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
