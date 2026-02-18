import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { useState } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <nav className="mb-10 mt-10 ml-0 mr-0 py-4 flex items-center justify-between shadow-lg gap-10">
        
  
        <div className="flex md:hidden">
          <button
            className="text-gray-600 hover:text-white focus:outline-none text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
  
        
        {/* Hamburger Menu for Navigation Links */}
       
        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-10">
          <div className="text-gray-350 hover:text-gray-600 text-2xl">
            <Link className="cursor-pointer " to="home" spy={true} smooth={true} offset={-100} duration={600}>
                Home
            </Link>
          </div>
         
          <div className="text-gray-350 hover:text-gray-600 text-2xl">
            <Link className="cursor-pointer " to="skills" spy={true} smooth={true} offset={-100} duration={600} isDynamic={true} >Skills</Link>
          </div>
          <div className="text-gray-350 hover:text-gray-600 text-2xl">
            <Link className="cursor-pointer " to="experiences" spy={true} smooth={true} offset={-100} duration={700} isDynamic={true} >Experience</Link>
          </div>
          <div className="text-gray-350 hover:text-gray-600 text-2xl">
            <Link className="cursor-pointer " to="projects" spy={true} smooth={true} offset={-100} duration={700} isDynamic={true} >Projects</Link>
          </div>
          <div className="text-gray-350 hover:text-gray-600 text-2xl">
            <Link className="cursor-pointer " to="contact" spy={true} smooth={true} offset={-100} duration={800}>Contact</Link>
          </div>
        </div>
  
        {/* Navigation Links (Mobile Dropdown) */}
        {isMenuOpen && (
          <div className="absolute top-26 left-0 w-full bg-white shadow-lg md:hidden gap-8">
            <div className="flex flex-col items-start space-y-4 p-4">
              <a
                href="#home"
                className="block text-gray-400 hover:text-purple-500 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-gray-400 hover:text-purple-500 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#skills"
                className="block text-gray-400 hover:text-purple-500 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#experiences"
                className="block text-gray-400 hover:text-purple-500 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#projects"
                className="block text-gray-400 hover:text-purple-500 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-purple-500 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
        {/* Social Icons Section */}
        <div className="flex items-center justify-center gap-8 text-3xl">
          <a href="https://www.linkedin.com/in/vineet-saini-8551b72b8/" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/vineetsaini007" target="_blank"><FaGithub /></a>
          <a href="" target="_blank"><FaTwitterSquare /></a>
        </div>
      </nav>
    );
  };
  

export default Navbar