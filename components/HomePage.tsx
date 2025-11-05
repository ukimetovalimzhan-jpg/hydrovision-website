
import React from 'react';
import type { Content, Page } from '../types';

interface HomePageProps {
  content: Content;
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ content, onNavigate }) => {
  const { hero, services, advantages, cta } = content.home;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img src="https://picsum.photos/1920/1080?blur=2&random=10" alt="Clean water background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
            {hero.subtitle}
          </p>
          <button onClick={() => onNavigate('contact')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
            {hero.cta}
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{services.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.items.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-blue-700 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{advantages.title}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {advantages.items.map((item, index) => (
              <div key={index} className="p-6">
                 <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  {/* Placeholder for icon */}
                   <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{cta.title}</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">{cta.subtitle}</p>
          <button onClick={() => onNavigate('contact')} className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
            {cta.button}
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
