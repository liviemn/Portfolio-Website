import GLBModelLoader from '../Components/ThreeJS'

function Skills() {
  return (
    <div
      id="Skills"
      className="relative h-screen flex justify-end items-end pr-16 pb-40"
    >
      {/* Skills Label */}
      <div className="absolute top-35 left-16 rotate-[-6deg]">
        <div className="px-10 py-4 rounded-2xl bg-[#3E2B2B] backdrop-blur-md shadow-lg text-4xl font-poetsen text-white drop-shadow-lg">
          Skills
        </div>
      </div>
    </div>
  )
}

export default Skills
