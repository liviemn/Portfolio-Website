import FadeIn from '../Components/FadeIn'

const AboutBoxes = () => {
    return (
        <div className="absolute left-1/4 top-1/3 transform -translate-x-1/2">
            <FadeIn>
                <div className="flex flex-col space-y-8">
                    <div className="flex space-x-4">

                        {/* INTERESTS Box */}
                        <div className="relative w-48 lg:w-48 xl:w-56 h-53 lg:h-53 xl:h-60 bg-white text-[#3E2B2B] rounded-xl shadow-md p-4 lg:p-4 xl:p-6 flex border-2 border-[#3E2B2B]">
                            <div className="absolute top-[-20px] left-3 w-25 lg:w-25 xl:w-28 h-10 lg:h-10 xl:h-12 bg-[#3E2B2B] rounded-full flex items-center justify-center">
                                <span className="text-sm lg:text-sm xl:text-base text-white font-poetsen">INTERESTS</span>
                            </div>
                            <ul className="list-disc pl-6 pt-4 text-sm lg:text-sm xl:text-base space-y-1">
                                <li>MBTI</li>
                                <li>Gaming</li>
                                <li>Baking</li>
                                <li>Skincare</li>
                                <li>Web Design</li>
                                <li>Software Design</li>
                            </ul>
                        </div>

                        {/* GAMES Box */}
                        <div className="relative w-48 lg:w-48 xl:w-56 h-53 lg:h-53 xl:h-60 bg-white text-[#3E2B2B] rounded-xl shadow-md p-4 lg:p-4 xl:p-6 flex border-2 border-[#3E2B2B]">
                            <div className="absolute top-[-20px] left-3 w-25 lg:w-25 xl:w-28 h-10 lg:h-10 xl:h-12 bg-[#3E2B2B] rounded-full flex items-center justify-center">
                                <span className="text-sm lg:text-sm xl:text-base text-white font-poetsen">GAMES</span>
                            </div>
                            <ul className="list-disc pl-6 pt-4 text-sm lg:text-sm xl:text-base space-y-1">
                                <li>Animal Crossing</li>
                                <li>Valorant</li>
                                <li>Minecraft</li>
                                <li>Stardew Valley</li>
                                <li>Elden Ring</li>
                            </ul>
                        </div>

                    </div>

                    {/* HOBBIES Box */}
                    <div className="relative w-100 lg:w-100 xl:w-[28rem] h-38 lg:h-38 xl:h-44 bg-white text-[#3E2B2B] rounded-xl shadow-md p-4 lg:p-4 xl:p-6 flex justify-center border-2 border-[#3E2B2B]">
                        <div className="absolute top-[-20px] left-3 w-25 lg:w-25 xl:w-28 h-10 lg:h-10 xl:h-12 bg-[#3E2B2B] rounded-full flex items-center justify-center">
                            <span className="text-sm lg:text-sm xl:text-base text-white font-poetsen">HOBBIES</span>
                        </div>
                        <div className="pt-4 grid grid-cols-2 gap-x-8 text-sm lg:text-sm xl:text-base">
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
            </FadeIn>
        </div>
    );
};

export default AboutBoxes;
