import Tech from '../Components/Tech';
import Wave from '../Components/Wave';

function Skills() {
  return (
    <div
      id="Skills"
      className="relative min-h-screen flex flex-col items-center px-[5vw]"
    >
      {/* Title — absolutely positioned on desktop, static on mobile */}
      <div className="text-[#3E2B2B] text-[8vw] sm:text-[4.5vw] text-outline font-poetsen font-[800] z-20 
                      mt-[10vh] sm:mt-0 
                      sm:absolute sm:top-[15vh] sm:right-[15vw]">
        <Wave text={'Skills & Tools'} />
      </div>

      {/* Tech Stack (margin added on mobile to push below title) */}
      <div className="mt-[-6vh] sm:mt-0 w-full">
        <Tech />
      </div>
    </div>
  );
}

export default Skills;
