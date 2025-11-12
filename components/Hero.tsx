import React from 'react';
import { GithubIcon, LinkedInIcon } from './Icons';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-grid-gray-700/[0.2] [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 bg-gradient-to-tr from-[#5856D6] to-[#FF3B5C] rounded-full filter blur-[150px] opacity-30"></div>
        </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Yasmine Chebbi
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-300">
              Ingénieur Data Science & Actuariat
            </p>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-gray-400">
              Passionnée par l'IA, la Data Science et les systèmes distribués. Je transforme les données en leviers décisionnels stratégiques.
            </p>
            <div className="mt-8 flex justify-center md:justify-start space-x-6">
              <a href="https://www.linkedin.com/in/yasmine-chebbi-857908263/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <LinkedInIcon className="h-7 w-7" />
              </a>
              <a href="https://github.com/yasmineCH03" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <GithubIcon className="h-7 w-7" />
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
              <img
                src="https://picsum.photos/seed/yasmine/500/500"
                alt="Yasmine Chebbi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;