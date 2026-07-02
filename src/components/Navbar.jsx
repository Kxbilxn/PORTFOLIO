import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
);

const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }

      // Calculate scroll progress percentage
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        setScrollProgress((window.scrollY / totalScrollHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-40 glass-nav transition-all duration-300">
      {/* Scroll Progress Indicator */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="font-semibold text-lg tracking-tight cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          KS.
        </div>
        
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
               <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'bg-black text-white dark:bg-white dark:text-black' 
                    : 'text-apple-muted hover:text-apple-black hover:bg-gray-200 dark:text-apple-muted dark:hover:text-apple-base dark:hover:bg-gray-800'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <button
            onClick={() => {
              const isDark = document.documentElement.classList.toggle('dark');
              localStorage.setItem('theme', isDark ? 'dark' : 'light');
            }}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200 text-apple-black dark:text-apple-base"
            aria-label="Toggle Theme"
          >
            <Sun className="hidden dark:block w-5 h-5" />
            <Moon className="block dark:hidden w-5 h-5" />
          </button>

          <button 
            className="md:hidden p-2 text-apple-black dark:text-apple-base"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full glass-nav border-b-thin">
          <div className="flex flex-col px-6 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'bg-black text-white dark:bg-white dark:text-black' 
                      : 'text-apple-muted hover:text-apple-black hover:bg-gray-200 dark:text-apple-muted dark:hover:text-apple-base dark:hover:bg-gray-800'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
