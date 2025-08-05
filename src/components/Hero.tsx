import React from 'react';
import profilePic from '../assets/images/profile.jpg';  // adjust path if needed
import { ArrowRight, Linkedin, Github, Download, MapPin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-gradient-to-br from-[#bfdbf7] via-indigo-50 to-blue-100 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute -bottom-32 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 min-h-[80vh]">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-3xl">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-[#022b3a] block">Hi, I'm</span> 
              <span className="text-[#1f7a8c] bg-gradient-to-r from-[#1f7a8c] to-blue-600 bg-clip-text text-transparent">
                Kulani Gayathree
              </span>
            </h1>
            
            {/* Subtitle with typing animation effect */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-700 mb-2">
              IT Undergraduate & Data Science Enthusiast 
            </h2>
            
            {/* Location */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <MapPin size={16} className="text-gray-500" />
              <span className="text-gray-600">Colombo, Sri Lanka</span>
            </div>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-800 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I am a <strong className="text-[#022b3a]">Third Year IT undergraduate student at SLIIT</strong> with a passionate interest in data science. 
              I enjoy exploring data, discovering patterns, and leveraging analytical tools to solve real-world problems.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-[#022b3a] text-white font-semibold rounded-xl flex items-center justify-center gap-3 hover:bg-[#1a4156] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Mail size={20} />
                Contact Me 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#projects" 
                className="px-8 py-4 bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
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
                className="group px-8 py-4 bg-gradient-to-r from-[#1f7a8c] to-blue-600 text-white font-semibold rounded-xl hover:from-[#1a6b7a] hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://github.com/kulanigayathree" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-white hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kulani-gayathree-19174a278" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-white hover:bg-[#0077b5] transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1f7a8c] to-blue-600 rounded-full opacity-20 animate-spin-slow"></div>
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1f7a8c] to-blue-600 rounded-full opacity-20 blur-sm"></div>
                <img 
                  src={profilePic} 
                  alt="Kulani Gayathree - IT Student & Aspiring Data Scientist" 
                  className="relative rounded-full w-full h-full object-cover border-8 border-white shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating badges */}
                <div className="absolute -top-6 -right-6 bg-white rounded-full p-3 shadow-lg animate-bounce delay-1000">
                  <span className="text-2xl">📊</span>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-3 shadow-lg animate-bounce">
                  <span className="text-2xl">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add this to your CSS file for the custom animation
const style = document.createElement('style');
style.textContent = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
`;
document.head.appendChild(style);