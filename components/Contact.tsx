import React from 'react';
import Section from './common/Section';
import { GithubIcon, LinkedInIcon } from './Icons';

const Contact = () => {
  return (
    <Section id="contact" title="Contactez-Moi" className="bg-black/20 backdrop-blur-sm">
      <div className="max-w-lg mx-auto glass-card p-8 rounded-xl">
        <form action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">Nom</label>
            <input type="text" name="name" id="name" placeholder="Votre Nom" className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5856D6]" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" name="email" id="email" placeholder="Votre Email" className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5856D6]" />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea name="message" id="message" rows={4} placeholder="Votre Message" className="w-full bg-gray-800/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5856D6]"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full btn-gradient text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
              Envoyer le Message
            </button>
          </div>
        </form>
        <div className="text-center mt-8">
            <p className="text-gray-400">Ou contactez-moi via :</p>
            <a href="mailto:yasmine.chebbi@esprit.tn" className="text-[#FF3B5C] hover:underline">yasmine.chebbi@esprit.tn</a>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/yasmine-chebbi-857908263/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <LinkedInIcon className="h-7 w-7" />
              </a>
              <a href="https://github.com/yasmineCH03" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <GithubIcon className="h-7 w-7" />
              </a>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;