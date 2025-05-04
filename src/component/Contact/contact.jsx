import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaLink,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000); // Hide success message after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("https://formspree.io/f/xwkgvlaa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 text-white px-4 py-10 flex flex-col items-center justify-center">
      <h1 className="mt-6 md:mt-8 text-lg md:text-4xl font-bold text-black text-center mb-2 md:mb-12">
        Contact With <span className="text-purple-400">Me</span>
      </h1>

      <div className="flex flex-col md:flex-row md:gap-20 w-full max-w-6xl relative">
      {/* Success popup */}

        {/* Left: Form */}
        <div className="flex-1 rounded-2xl bg-white shadow-2xl">
          {submitted && (
          <div className="ml-2 mr-2 mt-2 text-xs md:text-base absolute bg-green-500 text-white px-2 md:py-2 rounded-lg shadow-md z-10 font-semibold">
            ✅ Message sent successfully! We will get back to you as soon as possible.
          </div>
        )}
          <div className="rounded-lg md:py-4 md:px-6 p-2">
            <p className="text-purple-600 md:mb-6 mb-4 font-semibold text-xs md:text-base">
              If you have any questions, ideas, or collaboration opportunities,
              feel free to reach out. I'm always open to exciting projects that
              align with my skills and passion for development.
            </p>

            <form className="space-y-2 md:space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="font-semibold block mb-1 text-xs md:text-sm text-black">
                  Your Name:
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="text-xs md:text-base w-full px-4 py-2 rounded bg-[#111132] border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-xs md:text-sm text-black">
                  Your Email:
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="text-xs md:text-base w-full px-4 py-2 rounded bg-[#111132] border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold text-xs md:text-sm text-black">
                  Your Message:
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="text-xs md:text-base w-full px-4 py-2 rounded bg-[#111132] border border-gray-600 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="text-xs md:text-base bg-gradient-to-r from-pink-500 to-purple-500 md:px-6 md:py-3 px-4 py-2 rounded-full font-semibold hover:opacity-90 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <svg class="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24">
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" class="text-gray-900">
                  </path>
                </svg>
                ) : null }
                {loading ? (
                  <span className="px-2">Sending...</span>
                ) : (
                  <>
                    Send Message <FaEnvelope />
                  </>
                )}

              </button>
            </form>
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex-1 space-y-2 md:space-y-6 text-black">
          <h2 className="text-lg md:text-2xl font-bold mt-4 md:mb-6 text-purple-600">Contact Info</h2>
          <div className="space-y-2 md:space-y-4 text-left">
          <div className="flex items-center gap-2 md:gap-4 text-sm md:text-lg">
            <Link to="mailto:saurabhmaurya0025@gmail.com" target="_blank" className="bg-purple-200 text-black rounded-full p-2 md:p-3 inline-flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
              <FaEnvelope className="text-sm md:text-xl" />
            </Link>
            <span className="text-gray-800 font-semibold">saurabhmaurya0025@gmail.com</span>
          </div>
        <div className="flex items-center gap-2 md:gap-4 text-sm md:text-lg">
            <Link to="tel:+917266817216" target="_blank" className="bg-purple-200 text-black rounded-full p-2 md:p-3 inline-flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
              <FaPhone className="text-sm md:text-xl" />
            </Link>
          <span className="text-gray-800 font-semibold">+91 7266817216</span>
        </div>
        <div className="flex items-center gap-2 md:gap-4 text-sm md:text-lg">
        <Link to="https://www.google.com/maps/place/Jaunpur,+Uttar+Pradesh" target="_blank" className="bg-purple-200 text-black rounded-full p-2 md:p-3 inline-flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
              <FaMapMarkerAlt className="text-sm md:text-xl" />
            </Link>
          <span className="text-gray-800 font-semibold">Jaunpur, Uttar Pradesh</span>
        </div>
      </div>

          <div className="md:mt-10">
            <h2 className="text-lg md:text-2xl font-bold text-purple-600 mb-2 mt-4 md:mb-4">Social Links</h2>
            <div className="space-x-4">
              <Link to="https://www.github.com/saurabh00025" target="_blank" className="bg-purple-200 text-black rounded-full p-2 md:p-3 inline-flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <FaGithub className="text-base md:text-xl" />
              </Link>
              <Link to="https://www.linkedin.com/in/saurabh-maurya-176155229/" target="_blank" className="bg-purple-200 text-black rounded-full p-2 md:p-3 inline-flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <FaLinkedin className="md:text-xl" />
              </Link>
              <Link to="https://www.instagram.com/saurabh_maurya10" target="_blank" className="bg-purple-200 text-black rounded-full p-2 md:p-3 inline-flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <FaInstagram className="md:text-xl" />
              </Link>
              <Link to="https://saurabh-maurya.vercel.app/" target="_blank" className="bg-purple-200 text-black rounded-full p-2 md:p-3 inline-flex items-center justify-center transform transition-transform duration-300 hover:scale-110">
                <FaLink className="md:text-xl" />
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
