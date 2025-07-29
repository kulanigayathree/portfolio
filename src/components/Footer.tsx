import React from 'react';
import { Linkedin, Mail, Github, ArrowUp, Heart, Code, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/kulanigayathree',
      icon: <Github size={20} />,
      description: 'View my code'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kulani-gayathree-19174a278',
      icon: <Linkedin size={20} />,
      description: 'Professional network'
    },
    {
      name: 'Email',
      href: 'mailto:kulanigayathree99@gmail.com',
      icon: <Mail size={20} />,
      description: 'Send me a message'
    }
  ];

  return (
    <footer className="bg-[#022b3a] text-white relative">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#1f7a8c] hover:bg-[#022b3a] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="group-hover:animate-bounce" />
      </button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-4">
              <h3 className="text-2xl font-bold text-[#1f7a8c] hover:text-white transition-colors duration-300">
                Kulani Gayathree
              </h3>
            </a>
            <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
              IT undergraduate passionate about data science and web development. 
              Creating innovative solutions and exploring the fascinating world of technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2 text-[#1f7a8c]" />
                <span className="text-sm">Ratnapura, Sri Lanka</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2 text-[#1f7a8c]" />
                <a 
                  href="mailto:kulanigayathree99@gmail.com" 
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  kulanigayathree99@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2 text-[#1f7a8c]" />
                <a 
                  href="tel:+94725545479" 
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  +94 72 5545 479
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-[#1f7a8c] text-sm transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Let's Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-[#1f7a8c] transition-all duration-200 group"
                >
                  <div className="mr-3 group-hover:scale-110 transition-transform duration-200">
                    {social.icon}
                  </div>
                  <div>
                    <span className="text-sm font-medium">{social.name}</span>
                    <p className="text-xs text-gray-500">{social.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Status Badge */}
            <div className="mt-6 inline-flex items-center bg-green-900/30 text-green-400 px-3 py-1 rounded-full text-xs">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Available for opportunities
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-gray-400 mb-4">Built with passion using</h4>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center">
                <Code size={14} className="mr-1 text-[#1f7a8c]" />
                React
              </span>
              <span className="flex items-center">
                <Code size={14} className="mr-1 text-[#1f7a8c]" />
                TypeScript
              </span>
              <span className="flex items-center">
                <Code size={14} className="mr-1 text-[#1f7a8c]" />
                Tailwind CSS
              </span>
              <span className="flex items-center">
                <Code size={14} className="mr-1 text-[#1f7a8c]" />
                Vite
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Copyright */}
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-gray-400 text-sm flex items-center justify-center md:justify-start">
                &copy; {currentYear} Kulani Gayathree. Made with 
                <Heart size={14} className="mx-1 text-red-500 animate-pulse" />
                in Sri Lanka
              </p>
              <p className="text-xs text-gray-500 mt-1">
                All rights reserved. Designed & developed by me.
              </p>
            </div>

            {/* Version & Update Info */}
            <div className="text-center md:text-right">
              <p className="text-xs text-gray-500">
                Portfolio v2.0 • Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Continuously evolving and improving
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1f7a8c] via-blue-500 to-[#1f7a8c]"></div>
      </div>
    </footer>
  );
};