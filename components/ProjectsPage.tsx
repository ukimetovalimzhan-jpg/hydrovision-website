
import React from 'react';
import type { Content } from '../types';

interface ProjectsPageProps {
  content: Content;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ content }) => {
  const { title, items } = content.projects;
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 tracking-tight">{title}</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {items.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col group">
              <div className="overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h2>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <p className="text-blue-600 font-semibold">
                    <span className="font-bold text-gray-700">Результат:</span> {project.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
