import React from 'react';
import { Linkedin, Mail, Github} from 'lucide-react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white">
              Portfolio
            </a>
            <p className="text-gray-400 mt-2">
              Creating beautiful web experiences
            </p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/kulanigayathree" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="www.linkedin.com/in/kulani-gayathree-19174a278" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Kulani Gayathree. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-400 hover:text-white text-sm transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>;
};