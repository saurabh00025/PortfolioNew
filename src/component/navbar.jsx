import React, { useState, useEffect,useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close menu on route change
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Top */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-800 shadow-lg" : "bg-gray-600"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link to="/" className="text-white text-xl md:text-2xl font-bold tracking-wide">
          𝑺𝒂𝒖𝒓𝒂𝒃𝒉 𝑴𝒂𝒖𝒓𝒚𝒂
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6 text-white">
            <Link to="/" className="flex items-center space-x-1 hover:text-blue-300">
              <AiOutlineHome />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:text-blue-300">
              <AiOutlineUser />
              <span>About</span>
            </Link>
            <Link to="/project" className="flex items-center space-x-1 hover:text-blue-300">
              <AiOutlineFundProjectionScreen />
              <span>Projects</span>
            </Link>
            <Link to="/resume" className="flex items-center space-x-1 hover:text-blue-300">
              <CgFileDocument />
              <span>Resume</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 hover:text-blue-300">
              <FiPhoneCall />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Right Side Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 bg-purple-50 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-3/4`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <span className="text-lg font-semibold">Menu</span>
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="space-y-4 p-4">
          {
            <>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  <AiOutlineHome />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  <AiOutlineUser />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  <AiOutlineFundProjectionScreen />
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  <CgFileDocument />
                  <span>Resume</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-500"
                  onClick={() => setIsOpen(false)}
                >
                  <FiPhoneCall />
                  <span>Contact</span>
                </Link>
              </li>
            </>
          }
        </ul>
      </div>

      {/* Overlay to close on outside click */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Navbar;
