import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-[#022b3a]">
              Portfolio
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map(item => <a key={item.name} href={item.href} className="font-medium text-gray-900 hover:text-[#1f7a8c] transition-colors">
                {item.name}
              </a>)}
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            {navItems.map(item => <a key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
                {item.name}
              </a>)}
          </div>
        </div>}
    </header>;
};