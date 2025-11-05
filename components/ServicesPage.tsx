
import React from 'react';
import type { Content } from '../types';

interface ServicesPageProps {
  content: Content;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ content }) => {
  const { title, items } = content.services;
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 tracking-tight">{title}</h1>
        </div>
        <div className="space-y-16">
          {items.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="ml-4 text-2xl md:text-3xl font-bold text-gray-800">{service.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              <div className="md:w-1/2">
                <img src={`https://picsum.photos/800/600?random=${20 + index}`} alt={service.title} className="rounded-lg shadow-2xl w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
