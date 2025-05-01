
import Tablet from '../Components/Tablet'

function Projects() {
  return (
    <div
      id="Projects"
      className="relative h-screen flex justify-center items-center"
      >
        <Tablet />

      <div className="absolute top-8 left-16 rotate-[-6deg]">
        <div className="px-10 py-4 rounded-2xl bg-[#3E2B2B] backdrop-blur-md shadow-lg text-4xl font-poetsen text-white drop-shadow-lg">
          Projects
        </div>
      </div>
    </div>
  );
}

export default Projects;
