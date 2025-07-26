import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: use Lucide icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-zinc-950 shadow-md fixed top-0 left-0 w-full z-50 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-pink-50"><a href="#home">MyPortfolio</a></h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-16 font-medium text-white">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-2 font-medium">
          <a href="#home" onClick={toggleMenu} className="block hover:text-blue-600">Home</a>
          <a href="#about" onClick={toggleMenu} className="block hover:text-blue-600">About</a>
          <a href="#projects" onClick={toggleMenu} className="block hover:text-blue-600">Projects</a>
          <a href="#Skills" onClick={toggleMenu} className="block hover:text-blue-600">Skills</a>
          <a href="#contact" onClick={toggleMenu} className="block hover:text-blue-600">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;

