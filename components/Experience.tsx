
import React from 'react';
import Section from './common/Section';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <Section id="experience" title="Expérience Professionnelle">
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-700"></div>
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className="w-1/2">
              <div className={`relative p-6 glass-card rounded-xl ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}>
                <div className={`absolute w-4 h-4 bg-[#FF3B5C] rounded-full top-1/2 -translate-y-1/2 ${index % 2 === 0 ? '-right-2.5' : '-left-2.5'}`}></div>
                <p className="text-xs text-gray-400 mb-1">{exp.period}</p>
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <p className="text-sm text-gray-300 mb-3">{exp.company}</p>
                <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  {exp.missions.map((mission, i) => <li key={i}>{mission}</li>)}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
