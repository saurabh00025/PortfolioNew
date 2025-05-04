import React from "react";
// import Github from "./github.jsx";
import Techstack from "./techStack.jsx";
import Aboutcard from "./aboutCard";
import laptopImg from "../../assets/about.png";
import Toolstack from "./toolStack.jsx";

function About() {
  return (
    <div className="w-full bg-purple-50 text-white py-4 md:py-24 px-2 md:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center md:gap-8 py-8">
          <div className="w-full md:w-2/3 pt-8 md:pt-0">
            <h1 className="md:px-24 text-2xl md:text-4xl font-bold text-black md:mb-6">
              Know Who <span className="text-purple-500 ">I'M</span>
            </h1>
            <Aboutcard />
          </div>
          <div className="w-full md:w-1/3">
            <img src={laptopImg} alt="about" className="w-full h-auto object-contain" />
          </div>
        </div>

        <h1 className="text-xl md:text-4xl font-semibold text-center text-black md:mt-8 mb-6">
          Professional <span className="text-purple-500">Skillset</span>
        </h1>
         <Techstack />

        <h1 className="text-xl md:text-4xl font-semibold text-center text-black mt-6 md:mt-8 mb-6">
          <span className="text-purple-600">Tools</span> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </div>
    </div>
  );
}

export default About;
