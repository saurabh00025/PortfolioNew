import React from 'react'
import Techstack from "./techStack.jsx";
import Toolstack from "./toolStack.jsx";

const skill = () => {
  return (
    <div className="w-full bg-purple-50 text-white py-2 md:py-4 px-2 md:px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl md:text-4xl font-semibold text-center text-black mt-6 md:mt-0 mb-6">
            Professional <span className="text-purple-500">Skillset</span>
        </h1>
        <Techstack />
        <h1 className="text-xl md:text-4xl font-semibold text-center text-black mt-6 md:mt-8 mb-6">
            <span className="text-purple-600">Tools</span> I use
        </h1>
        <Toolstack />
    </div>
    </div>
  )
}

export default skill
