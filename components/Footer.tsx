
import React from 'react';
import type { Content, Page } from '../types';

interface FooterProps {
  content: Content;
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ content, onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400">
              Hydro<span className="text-white">Vision</span>
            </h3>
            <p className="mt-2 text-gray-400 max-w-xs">{content.home.hero.subtitle}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase text-gray-300">Навигация</h4>
            <ul className="mt-4 space-y-2">
              {content.nav.map(link => (
                <li key={link.id}>
                  <a href="#" onClick={e => { e.preventDefault(); onNavigate(link.id); }} className="text-gray-400 hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
               <li>
                  <a href="#" onClick={e => { e.preventDefault(); onNavigate('privacy'); }} className="text-gray-400 hover:text-white transition-colors">
                    {content.privacy.title}
                  </a>
                </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold tracking-wider uppercase text-gray-300">{content.contact.details.title}</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>{content.contact.details.address}</li>
              <li>{content.contact.details.phone}</li>
              <li>{content.contact.details.email}</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
