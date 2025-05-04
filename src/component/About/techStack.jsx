import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiDatabase,
  DiBootstrap,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import { CgCPlusPlus } from "react-icons/cg";
import { SiExpress,SiSpringboot, SiMysql, SiTailwindcss } from "react-icons/si";
import { FaAngular } from "react-icons/fa";

function Techstack() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 md:pb-12 text-purple-600">
      <div className="p-2 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-6xl text-blue-600">
          <CgCPlusPlus />
        </div>
      </div>
      <div className="p-2 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-6xl text-black">
          <DiJavascript1 />
        </div>
      </div>
      <div className="p-2 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-8xl text-blue-300">
          <DiReact />
        </div>
      </div>
      <div className="p-2 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-8xl text-red-400">
          <FaAngular />
        </div>
      </div>
      <div className="p-2 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-8xl text-green-700">
          <DiNodejs />
        </div>
      </div>
      <div className="p-2 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-8xl text-black">
          <SiExpress />
        </div>
      </div>
      <div className="p-2 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-6xl text-green-500">
          <DiMongodb />
        </div>
      </div>
      <div className="p-2 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-6xl text-blue-500">
          <DiDatabase />
        </div>
      </div>

      <div className="p-2 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-8xl text-red-500">
          <DiGit />
        </div>
      </div>
      <div className="p-2 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-8xl text-yellow-500">
          <DiJava />
        </div>
      </div>
      <div className="p-2 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-6xl text-green-500">
          <SiSpringboot />
        </div>
      </div>
      <div className="p-2 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-8xl text-blue-800">
          <SiMysql />
        </div>
      </div>
      <div className="p-2 md:p-5 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-7xl text-red-500">
          <DiHtml5 />
        </div>
      </div>

      <div className="p-2 md:p-5 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-7xl text-blue-500">
          <DiCss3 />
        </div>
      </div>
      <div className="p-2 md:p-5 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-7xl text-purple-500">
          <DiBootstrap />
        </div>
      </div>
      <div className="p-2 md:p-5 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center transform hover:scale-105 cursor-pointer">
        <div className="text-3xl md:text-7xl text-blue-400">
          <SiTailwindcss />
        </div>
      </div>
    </div>
  );
}

export default Techstack;
