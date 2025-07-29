import React, { useEffect, useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  {
    name: 'Home',
    href: '#home'
  },
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Skills',
    href: '#skills'
  },
  {
    name: 'Contact',
    href: '#contact'
  }
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 10);
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleMobileNavClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  const headerClasses = `fixed w-full z-30 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#home" 
              className="text-2xl font-bold text-[#022b3a] hover:opacity-80 transition-opacity"
              aria-label="Portfolio Home"
            >
              Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10" role="navigation" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-gray-900 hover:text-[#1f7a8c] transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1f7a8c] focus:ring-opacity-50 p-2 rounded-md transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden" id="mobile-navigation">
          <nav 
            className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg border-t border-gray-100"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#022b3a] hover:bg-gray-50 transition-colors duration-200"
                onClick={handleMobileNavClick}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};