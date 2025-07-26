import { Github, Linkedin, Mail, Instagram, MapPin, Phone} from "lucide-react";
import React from "react";
// import { Mail } from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-4 mt-16 border-t dark:border-gray-700">
      <div className="grid sm:grid-cols-4  gap-4 ml-8 ">
<div>
  <h1 className="text-2xl font-bold text-sky-300 mr-32">MyPortfolio</h1>
<div className="text-violet-50 pt-5 ">This is MyPortfolio <br /> designed by <span className="text-indigo-500">
  Shyam kumar</span></div>
</div>

<div>
  <h1 className="text-2xl font-bold text-sky-300">Quick Links</h1>
  <ul className="text-violet-50 space-y-2 pt-2 px-1">
    <li><a href="#home" className="flex items-center space-x-2 hover:text-indigo-600 transition">Home</a></li>
    <li><a href="#about" className="flex items-center space-x-2 hover:text-indigo-600 transition">About</a></li>
    <li><a href="#projects"  className="flex items-center space-x-2 hover:text-indigo-600 transition">Projects</a></li>
    <li><a href="#skills"  className="flex items-center space-x-2 hover:text-indigo-600 transition">Skills</a></li>
    <li><a href="#contact"  className="flex items-center space-x-2 hover:text-indigo-600 transition">Contact</a></li>
  </ul>
</div>

<div>
  <h1 className="text-2xl font-bold text-sky-300">Contact</h1>
  <ul className="text-violet-50 space-y-2 pt-2">
    <li> <a
            href="mailto:sk5859915@gmail.com"
            className="flex items-center space-x-2 hover:text-indigo-600 transition"
          >
            <Mail className="w-5 h-5" />
            <span>sk5859915@gmail.com</span>
          </a>
          </li>
    
    <li> <a
            // href="mailto:sk5859915@gmail.com"
            className="flex items-center space-x-2 hover:text-indigo-600 transition"
          >
            < MapPin className="w-5 h-5" />
            <span> Sitamarhi, Bihar</span>
          </a>
          </li>
    <li> <a
            // href="mailto:sk5859915@gmail.com"
            className="flex items-center space-x-2 hover:text-indigo-600 transition"
          >
            < Phone className="w-5 h-5" />
            <span> +91 9905158261</span>
          </a>
          </li>
  </ul>
</div>
<div>
  <h1 className="text-2xl font-bold text-sky-300">Social Media</h1>
  <ul className="text-violet-50 flex flex-grid-col space-x-6 pt-6">
      <li> <a
            href="https://www.linkedin.com/in/shyam-kumar-36243b237"
            className="flex items-center space-x-2 hover:text-indigo-600 transition"
          >
            <Linkedin className="w-8 h-8" />
          
          </a>
          </li>
    <li> <a
            href="https://github.com/Akumarshyam02"
            className="flex items-center space-x-2 hover:text-indigo-600 transition"
          >
            < Github className="w-8 h-8" />
     
          </a>
          </li>
    <li> <a
           
      href="https://www.instagram.com/shyamkumar2245"
            className="flex items-center space-x-2 hover:text-indigo-600 transition"
          >
            < Instagram className="w-8 h-8" />
         
          </a>
          </li>
          <li> <a
            href="mailto:sk5859915@gmail.com"
            className="flex items-center space-x-2 hover:text-indigo-600 transition"
          >
            <Mail className="w-8 h-8" />
            
          </a>
          </li>
</ul>

</div>

      </div>

    </footer>
  );
}
