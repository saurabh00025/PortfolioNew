import React from "react";
import { SiPostman, SiVercel, SiGithub, SiFigma } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function Toolstack() {
  return (
    <div className="grid grid-cols-4 gap-2 flex flex-wrap justify-center">
      {/* VS Code Card */}
      <div className="md:w-60 md:h-44 flex items-center justify-center p-2 md:p-6 bg-white border-2 border-gray-200 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
        <div className="text-5xl md:text-7xl text-blue-500">
          <VscVscode />
        </div>
      </div>

      {/* Postman Card */}
      <div className="md:w-60 md:h-44 flex items-center justify-center p-2 md:p-6 bg-white border-2 border-gray-200 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
        <div className="text-5xl md:text-7xl text-red-500">
          <SiPostman />
        </div>
      </div>

      {/* Github Card */}
      <div className="md:w-60 md:h-44 flex items-center justify-center p-2 md:p-6 bg-white border-2 border-gray-200 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
        <div className="text-5xl md:text-7xl text-black">
          <SiGithub />
        </div>
      </div>

      {/* Vercel Card */}
      <div className="md:w-60 md:h-44 flex items-center justify-center p-2 md:p-6 bg-white border-2 border-gray-200 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
        <div className="text-5xl md:text-7xl text-black">
          <SiVercel />
        </div>
      </div>

    </div>
  );
}

export default Toolstack;
