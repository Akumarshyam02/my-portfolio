import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, MapPin, Phone} from "lucide-react";

const Home = () => {
  return (
    <section id="home" className="bg-black dark:bg-gray-900 min-h-screen flex items-center justify-center px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* 👤 Text Section */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 dark:text-white mb-4">
            Hi, I'm <span className="text-cyan-400">Shyam Kumar</span>
          </h1>

          <p className="text-lg text-gray-300 dark:text-gray-300 mb-6">
            A passionate Web Developer building modern, responsive websites.
          </p>

          {/* 🚀 Buttons */}
          <div className="flex flex-col sm:flex-row sm:gap-16 gap-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-cyan-500 text-white sm:rounded-xl hover:bg-cyan-600 text-center transition min-w-55 sm:mx-0 rounded-sm w-2 mx-16"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-cyan-500 text-cyan-500 sm:rounded-xl hover:bg-gray-800 transition text-center sm:mx-0 rounded-xl w-55 mx-16"
            >
              Download Resume
            </a>
          </div>
          <div className='sm:mx-0 mx-16'>
           <ul className="text-violet-50 flex space-x-6 pt-6">
  {/* LinkedIn */}
  <li>
    <a
      href="https://www.linkedin.com/in/shyam-kumar-36243b237"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-indigo-600 transition"
    >
      <Linkedin className="w-8 h-8 text-[#0A66C2]" />
    </a>
  </li>

  {/* GitHub */}
  <li>
    <a
      href="https://github.com/Akumarshyam02"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-indigo-600 transition"
    >
      <Github className="w-8 h-8 text-gray-300" />
    </a>
  </li>

  {/* Instagram */}
  <li>
    <a
      href="https://www.instagram.com/shyamkumar2245"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-indigo-600 transition"
    >
      <Instagram className="w-8 h-8 text-pink-500" />
    </a>
  </li>

  {/* Email */}
  <li>
    <a
      href="mailto:sk5859915@gmail.com"
      className="hover:text-indigo-600 transition"
    >
      <Mail className="w-8 h-8 text-red-400" />
    </a>
  </li>
</ul>

          </div>
        </div>

        {/* 🖼️ Image Section */}
        <div className="flex justify-center mr-18 md:ml-60 ">
          <motion.img
            src="/profile.png"
            alt="Shyam Kumar"
            className="w-60 h-60 p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg "
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
