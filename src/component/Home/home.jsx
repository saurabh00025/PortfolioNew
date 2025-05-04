import React from "react";
import homeLogo from '../../assets/home-main.svg';
import avatarImg from '../../assets/avatar.svg';
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";
import Skill from "../About/skill.jsx";
import Projects from "../Project/project.jsx";
import Resume from "../Resume/resume.jsx";
import Contact from "../Contact/contact.jsx";
import Footer from "../footer.jsx";

const Home = () => {
  return (
    <>
      <section className="min-h-screen bg-purple-50 text-black py-16 md:py-10 px-4" id="home">
        {/* Top Content */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center">
          <div className="md:w-2/3 space-y-2 md:space-y-6">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hi There!{" "}
              <span role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="text-xl md:text-4xl font-bold">
              I'M <span className="text-purple-500">SAURABH MAURYA</span>
            </h1>
            <div className="text-lg md:text-2xl text-left font-semibold">
              <Typewriter
                options={{
                  strings: [
                    "Software Developer",
                    "Full Stack Developer",
                    "Freelancer",
                    "Tech Enthusiast",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </div>

          <div className="md:w-1/3 md:mt-0">
          <Tilt>
            <img
              src={homeLogo}
              alt="home"
              className="w-full max-h-[450px] object-contain"
            />
          </Tilt>
          </div>
        </div>

        {/* Introduction Section */}
        <div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-20"
        >
          <div className="md:w-2/3">
            <h1 className="text-xl md:text-3xl font-semibold mb-4">
              LET ME <span className="text-purple-500"> INTRODUCE </span> MYSELF
            </h1>
            <p className="text-sm md:text-lg leading-7">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br /><span>I am fluent in classics like{" "}</span>
              <span className="text-purple-500 font-semibold italic">C++, Java and JavaScript</span>.
              <br />
              <br />
              My field of interest includes developing{" "}
              <span className="text-purple-500 font-semibold italic">Web Technologies and E-commerce Products</span>{" "}
              and exploring{" "}
              <span className="text-purple-500 font-semibold italic">Database Management and Full-stack Development</span>.
              <br />
              <br />
              I love working with{" "}
              <span className="text-purple-500 font-semibold italic">Angular.js, React.js, MongoDB, SQL, and Express.js</span>{" "}
              to create dynamic and scalable applications, and I have experience in{" "}
              <span className="text-purple-500 font-semibold italic">Node.js</span> and{" "}
              <span className="text-purple-500 font-semibold italic">Spring Boot</span> for backend development.
            </p>
          </div>

          <div className="w-1/3 md:w-1/5">
            <Tilt>
              <img src={avatarImg} alt="avatar" className="rounded-full w-full max-w-xs" />
            </Tilt>
          </div>
        </div>
      </section>
      <Skill/>
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
