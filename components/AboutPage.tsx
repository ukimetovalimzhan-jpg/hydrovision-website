
import React from 'react';
import type { Content } from '../types';

interface AboutPageProps {
  content: Content;
}

const AboutPage: React.FC<AboutPageProps> = ({ content }) => {
  const { title, mission, history, team, partners } = content.about;
  const partnerLogos = [
    "https://via.placeholder.com/150x60/cccccc/ffffff?text=Partner+1",
    "https://via.placeholder.com/150x60/cccccc/ffffff?text=Partner+2",
    "https://via.placeholder.com/150x60/cccccc/ffffff?text=Partner+3",
    "https://via.placeholder.com/150x60/cccccc/ffffff?text=Partner+4",
    "https://via.placeholder.com/150x60/cccccc/ffffff?text=Partner+5",
    "https://via.placeholder.com/150x60/cccccc/ffffff?text=Partner+6"
  ];


  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 tracking-tight">{title}</h1>
        </div>
        
        {/* Mission & History */}
        <div className="mt-16 grid md:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{mission.title}</h2>
            <p className="text-gray-600 leading-relaxed">{mission.text}</p>
          </div>
          <div>
             <img src="https://picsum.photos/800/600?random=11" alt="Company history" className="rounded-lg shadow-xl"/>
          </div>
          <div className="md:col-start-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{history.title}</h2>
            <p className="text-gray-600 leading-relaxed">{history.text}</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">{team.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.members.map((member) => (
              <div key={member.name} className="text-center">
                <img className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg" src={member.imageUrl} alt={member.name} />
                <h3 className="mt-6 text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Partners Section */}
        <div className="mt-24">
           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">{partners.title}</h2>
           <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerLogos.map((logo, index) => (
                <img key={index} src={logo} alt={`Partner logo ${index + 1}`} className="h-10 md:h-12 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
