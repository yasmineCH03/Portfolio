
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Yasmine Chebbi. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
