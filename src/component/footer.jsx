import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaLink } from "react-icons/fa";

const footer = () => {
  return (
    <div className='bg-purple-50'>
        <div className="text-center py-10">
          <h1 className="text-lg md:text-3xl font-bold">FIND ME ON</h1>
          <p className="text-base md:text-lg text-gray-600">
            Feel free to <span className="text-purple-600">connect</span> with me
          </p>

          <div className="flex justify-center mt-2 md:mt-4 gap-6 text-2xl md:text-3xl">
            <Link
              to="https://github.com/saurabh00025"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-800"
            >
              <AiFillGithub />
            </Link>
            <Link
              to="https://saurabh-maurya.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-800"
            >
              <FaLink />
            </Link>
            <Link
              to="https://www.linkedin.com/in/saurabh-maurya-176155229/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-800"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="https://www.instagram.com/saurabh_maurya10"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-800"
            >
              <AiFillInstagram />
            </Link>
          </div>
        </div>
      </div>
  )
}

export default footer
