
import React from 'react';
import Section from './common/Section';
import { STRENGTHS } from '../constants';

const Strengths = () => {
  return (
    <Section id="strengths" title="Points Forts">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {STRENGTHS.map((strength, index) => (
          <div key={index} className="glass-card p-6 rounded-xl transition-all duration-300 hover:border-[#5856D6] hover:-translate-y-2">
            {strength.icon}
            <h4 className="font-semibold text-white text-sm">{strength.title}</h4>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Strengths;
