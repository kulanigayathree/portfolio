import React from 'react';
import profilePic from '../assets/images/profile.jpg';  // adjust path if needed
import { ArrowRight, Linkedin, Github, Download } from 'lucide-react';
export const Hero = () => {
  return <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-blue-600">Kulani Gayathree</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
              Undergraduate
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              I turn data into simple, meaningful solutions that help people 
              solve problems and make their everyday lives easier and better.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
                Contact Me <ArrowRight size={18} />
              </a>
              <a href="#projects" className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                View My Work
              </a>
              
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/portfolio/KulaniGayathree_CV.pdf';
                  link.download = 'KulaniGayathree_CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-6 py-3 border border-gray-300 bg-gray-50 text-black font-medium rounded-full hover:bg-blue-100 transition-colors flex items-center gap-2"
>
                 <Download size={20} /> Resume
               </button>
              
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/kulanigayathree" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kulani-gayathree-19174a278" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10"></div>
              <img src={profilePic} alt="Professional portrait" className="rounded-full w-full h-full object-cover border-4 border-white shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};