
import React, { useState, useEffect } from 'react';
import type { Language, NavLink, Page } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  navLinks: NavLink[];
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, navLinks, onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const LanguageSwitcher: React.FC = () => (
    <div className="flex items-center">
      <button
        onClick={() => setLang('ru')}
        className={`px-3 py-1 text-sm font-medium rounded-l-md transition-colors ${
          lang === 'ru' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        RU
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 text-sm font-medium rounded-r-md transition-colors ${
          lang === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        EN
      </button>
    </div>
  );

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="text-2xl font-bold text-blue-700">
              Hydro<span className="text-gray-800">Vision</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); onNavigate(link.id); }}
                className={`text-base font-medium transition-colors hover:text-blue-600 relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-blue-600 after:transition-transform after:transform ${currentPage === link.id ? 'text-blue-600 after:scale-x-100' : 'text-gray-600 after:scale-x-0'}`}
              >
                {link.text}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <div className="md:hidden flex items-center">
             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); onNavigate(link.id); setIsOpen(false); }}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${currentPage === link.id ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {link.text}
              </a>
            ))}
            <div className="pt-4 px-3">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
