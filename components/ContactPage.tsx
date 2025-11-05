
import React from 'react';
import type { Content } from '../types';
import ContactForm from './ContactForm';

interface ContactPageProps {
  content: Content;
}

const ContactPage: React.FC<ContactPageProps> = ({ content }) => {
  const { title, details } = content.contact;
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 tracking-tight">{title}</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg">
            <ContactForm content={content.contact.form} />
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{details.title}</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>{details.address}</span>
                </li>
                <li className="flex items-center">
                  <svg className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>{details.phone}</span>
                </li>
                <li className="flex items-center">
                   <svg className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>{details.email}</span>
                </li>
              </ul>
            </div>
             <div className="rounded-lg shadow-lg overflow-hidden h-96">
                <img src="https://picsum.photos/800/600?random=30" alt="Map" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
