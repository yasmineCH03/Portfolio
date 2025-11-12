import React from 'react';
import Section from './common/Section';
import { EDUCATIONS } from '../constants';

const Education = () => {
  return (
    <Section id="education" title="Formation" className="bg-black/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATIONS.map((edu, index) => (
          <div key={index} className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
            <p className="text-[#FF3B5C] font-semibold">{edu.institution}</p>
            <p className="text-gray-400 text-sm my-2">{edu.period}</p>
            <ul className="space-y-1">
                {edu.specialties.map(spec => (
                    <li key={spec} className="text-gray-300 flex items-start">
                        <span className="text-[#5856D6] mr-2 mt-1">&#10148;</span> {spec}
                    </li>
                ))}
            </ul>
            {edu.badge && (
              <div className="mt-4">
                <span className="bg-yellow-900/50 text-yellow-300 text-xs font-bold px-3 py-1 rounded-full">{edu.badge}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;