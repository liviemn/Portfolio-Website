
import Tablet from '../Components/Tablet'

function Projects() {
  return (
    <div
      id="Projects"
      className="relative h-screen flex justify-center items-center"
      >
        <Tablet />

      <div className="absolute top-[17vh] left-[5vw] rotate-[-6deg]">
        <div className="px-[2.5vw] py-[1vh] rounded-[1vw] bg-[#3E2B2B] backdrop-blur-md shadow-lg text-[2.6vw] font-poetsen text-white drop-shadow-lg">
          Projects
        </div>
      </div>
    </div>
  );
}

export default Projects;
