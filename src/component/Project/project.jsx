import React from "react";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

// Replace these with your actual image imports
import lenshshop from "../../assets/project/lenshshop.png";
import portfolio from "../../assets/project/portfolio.png";
import anokhiPehel from "../../assets/project/anokhiPehel.png";
import homeHeaven1 from "../../assets/project/homeHeaven1.png";
import bloodBank from "../../assets/project/bloodBank.png";
import vlog from "../../assets/project/vlog.png";

// Inline ProjectCard component using Tailwind
const ProjectCard = ({ imgPath, title, descriptionMobile,descriptionDesktop, ghLink, demoLink }) => (
  <Link to={demoLink || ghLink} target="_blank" className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform md:hover:scale-105 w-full cursor-pointer">
    <img src={imgPath} alt={title} className="rounded-t-xl md:w-full md:h-48 object-cover" />
    <div className="p-2 md:p-5 text-left">
      <h2 className="text-base md:text-xl font-semibold text-gray-800 md:mb-2">{title}</h2>
      {/* Show different descriptions based on screen size */}
      <p className="text-gray-600 text-xs mb-2 md:hidden">{descriptionMobile}</p>
      <p className="hidden md:block text-gray-600 text-sm mb-4">{descriptionDesktop}</p>
      <div className="flex space-x-6 md:space-x-4 mb-2 md:mb-0">
        {ghLink && (
          <Link to={ghLink} target="_blank" rel="noreferrer">
            <button className="text-xs md:text-base flex items-center gap-2 p-1 md:px-4 md:py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
              <BsGithub /> Github
            </button>
          </Link>
        )}
        {demoLink && (
          <Link to={demoLink} target="_blank" rel="noreferrer">
            <button className="text-xs md:text-base flex items-center gap-2 p-1 md:px-4 md:py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
              <CgWebsite /> Demo
            </button>
          </Link>
        )}
      </div>
    </div>
  </Link>
);

// Main Projects component
function Projects() {
  return (
    <div className=" bg-purple-50 py-8 md:py-16 px-2 md:px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="mt-8 text-xl md:text-4xl font-bold text-black text-center md:mb-4">
          My Recent <span className="text-purple-400">Works</span>
        </h1>
        <p className="text-sm md:text-lg text-gray-600 text-center mb-4 md:mb-12">
          Here are a few projects I've worked on recently.
        </p>
        {/* <div className="grid grid-cols-2 md:grid-cols-3 flex flex-wrap justify-center gap-y-8 gap-x-4"> */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 justify-start">

          <ProjectCard
            imgPath={anokhiPehel}
            isBlog={false} 
            title="Anokhi Pehel"
            descriptionMobile="Anokhi Pehel is a platform for educators to manage free education with features like secure login, student enrollment, attendance, and class scheduling."
            descriptionDesktop="Developed Anokhi Pehel, a dedicated platform for educators to manage free education for underprivileged students, featuring secure login, student enrollment, attendance tracking, performance monitoring, and class scheduling — streamlining administration and enabling personalized student support."
            ghLink="https://github.com/saurabh00025/Anokhi-Pehel"
            demoLink="https://anokhi-pehel.azurewebsites.net/"
          />
          <ProjectCard
            imgPath={lenshshop}
            isBlog={false}
            title="EyePort"
            descriptionMobile="EyePort is a live eyewear store built with the MERN stack, featuring product filtering, prescription uploads, OTP login, and payment integration."
            descriptionDesktop={
              <>
                Developed EyePort, a live MERN-stack e-commerce website for eyewear with features like product filtering, prescription uploads, OTP-based login recovery, admin dashboard, and payment integration—
                <b>built for a client and currently used by customers for real purchases</b>.
              </>
            }
            demoLink="https://lenshshop.com/"
          />
          <ProjectCard
            imgPath={homeHeaven1}
            isBlog={false}
            title="Home Heaven"
            descriptionMobile="Built an e-commerce furniture store with AR capabilities, using React and Tailwind CSS to let users visualize furniture in their space."
            descriptionDesktop="Built a responsive e-commerce furniture store with AR capabilities using Vite, React, and Tailwind CSS, integrating 3D models via Vectary to let users visualize furniture in their space for an immersive shopping experience."
            ghLink="https://github.com/saurabh00025/Furniture_project"
            demoLink="https://mnnit-furniture-store.vercel.app/"
          />

          <ProjectCard
            imgPath={portfolio}
            isBlog={false}
            title="Portfolio"
            descriptionMobile="Designed a personal portfolio to showcase projects, skills, and experience, built with React, Tailwind CSS, and React Bootstrap."
            descriptionDesktop="Designed and developed a personal portfolio using React, Vite, Tailwind CSS, and React Bootstrap to showcase projects, skills, and experience, with a clean UI, responsive layout, and seamless navigation for recruiters and clients."
            ghLink="https://github.com/saurabh00025/portfolio"
            demoLink="https://saurabh-maurya.vercel.app/"
          />

          <ProjectCard
            imgPath={bloodBank}
            isBlog={false}
            title="Lifelink"
            descriptionMobile="Developed BloodConnect, a web app to search blood availability across hospitals with role-based login for hospitals to manage blood inventory."
            descriptionDesktop="Developed BloodConnect, a full-stack web application to help users search blood availability across hospitals, with role-based login for hospitals to manage their blood inventory. Integrated user authentication, GitHub API for profile linking, and real-time analytics using the MERN stack."
            ghLink="https://github.com/saurabh00025/blood-bank-app"
          />

          <ProjectCard
            imgPath={vlog}
            isBlog={false}
            title="NewsHub"
            descriptionMobile="Created a news web app that allows users to access the latest articles and post updates, fostering a community-driven news experience."
            descriptionDesktop="Designed a dynamic news web application that transforms the way users consume and contribute to current events—enabling access to the latest articles and allowing users to post updates from diverse sources, fostering an engaging and community-driven news experience."
            ghLink="https://github.com/saurabh00025/news-website"
          />

        </div>
      </div>
    </div>
  );
}

export default Projects;
