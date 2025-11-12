import React, { useState } from 'react';
import Section from './common/Section';
import { PROJECTS } from '../constants';
import { GithubIcon, ChevronDownIcon } from './Icons';

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Section id="projects" title="Projets Techniques" className="bg-black/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto space-y-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="glass-card rounded-xl transition-all duration-300 hover:border-[#FF3B5C]">
            <div
              className="p-6 cursor-pointer"
              onClick={() => handleToggle(index)}
              aria-expanded={expandedIndex === index}
              aria-controls={`project-details-${index}`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <ChevronDownIcon className={`h-5 w-5 ml-3 text-gray-400 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`} />
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex-shrink-0 ml-4 z-10"
                  onClick={(e) => e.stopPropagation()} // Prevents card from toggling when clicking the icon
                >
                  <GithubIcon className="h-6 w-6" />
                </a>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map(tech => (
                  <span key={tech} className="bg-blue-900/50 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tech}</span>
                ))}
              </div>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
            <div
              id={`project-details-${index}`}
              className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedIndex === index ? 'max-h-96' : 'max-h-0'}`}
            >
              <div className="px-6 pb-6 pt-2 border-t border-gray-700/50">
                <h4 className="font-semibold text-white mb-2">Objectif Principal :</h4>
                <p className="text-gray-400 text-sm mb-4">{project.objective}</p>
                <h4 className="font-semibold text-white mb-2">Fonctionnalités Clés :</h4>
                <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                  {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;