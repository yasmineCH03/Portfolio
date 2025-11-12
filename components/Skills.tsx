
import React from 'react';
import Section from './common/Section';
import { SKILL_CATEGORIES } from '../constants';

const Skills = () => {
  return (
    <Section id="skills" title="Mes Compétences">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category, index) => (
          <div key={index} className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-[#FF3B5C] hover:-translate-y-2">
            <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
