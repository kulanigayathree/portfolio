import React from 'react';
import profilePic from '../assets/images/profile.jpg';  // adjust path if needed
import { ArrowRight, Linkedin, Github, Download } from 'lucide-react';

export const Hero = () => {
  return <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#bfdbf7] to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="text-[#022b3a]"> Hi, I'm</span> <span className="text-[#1f7a8c]">Kulani Gayathree</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">

            
            </h2>
            <p className="text-lg text-black mb-8 max-w-2xl">
             I am a <strong>Third Year IT undergraduate student at SLIIT</strong> with a strong interest in data science. 
             I enjoy exploring data, finding patterns, and using analytical tools to solve real-world problems.
             I'm currently building my skills in Python, data analysis, and visualization to pursue a future career in data science.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-[#022b3a] text-white font-medium rounded-lg flex items-center gap-2 hover:bg-[#1a4156] transition-colors">
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
                className="px-6 py-3 border border-gray-300 bg-gray-50 text-black font-medium rounded-full hover:bg-[#1f7a8c] hover:text-[#e1e5f2] transition-colors flex items-center gap-2 "
>
                 <Download size={20} /> Resume
               </button>
              
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/kulanigayathree" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#022b3a] transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kulani-gayathree-19174a278" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#022b3a] transition-colors">
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