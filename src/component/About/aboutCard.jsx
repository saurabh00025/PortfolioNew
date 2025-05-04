import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className=" text-black rounded-xl p-2 md:p-6">
      <blockquote>
        <p className="text-justify text-sm md:text-lg leading-relaxed">
          Hi Everyone, I am <span className="text-purple-500 font-semibold">Saurabh Maurya</span> from{" "}
          <span className="text-purple-500 font-semibold">Uttar Pradesh, India</span>.
          <br />
          I'm currently working as a <strong>Software Developer at Tata Consultancy Service</strong>.
          <br />
          I graduated from <strong>NIT Allahabad</strong> with a strong interest in Software Development.
          <br />
          <br />
          Apart from coding, here are a few things I love doing!
        </p>
        <ul className="list-none mt-2 md:mt-4 space-y-2">
          <li className="flex items-center gap-2 text-base">
            <ImPointRight className="text-purple-500" /> Watching Tech YouTube Channels
          </li>
          <li className="flex items-center gap-2 text-base">
            <ImPointRight className="text-purple-500" /> Exploring New Frameworks
          </li>
          <li className="flex items-center gap-2 text-base">
            <ImPointRight className="text-purple-500" /> Playing Games
          </li>
        </ul>
        <p className="mt-3 md:mt-6 text-purple-600 font-medium">
          "Strive to build things that make a difference!"
        </p>
        <footer className="md:mt-2 px-20 text-lg text-gray-800 md:px-24 font-semibold">— Saurabh</footer>
      </blockquote>
    </div>
  );
}

export default AboutCard;
