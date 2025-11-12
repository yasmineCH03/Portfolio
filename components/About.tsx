import React from 'react';
import Section from './common/Section';

const About = () => {
  return (
    <Section id="about" title="À Propos de Moi" className="bg-black/20 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed">
        <p className="mb-6">
          Étudiante en double diplôme <strong>Ingénieur ESPRIT (Data Science)</strong> et <strong>Master Actuariat</strong> (Université du Mans). Mon parcours hybride me permet de combiner expertise informatique avancée et compétences en analyse des risques, statistiques et modélisation financière.
        </p>
        <p>
          <strong>Objectif :</strong> Devenir un profil hybride capable de transformer les données en solutions décisionnelles à forte valeur ajoutée pour les secteurs de la finance et de l'assurance.
        </p>
      </div>
    </Section>
  );
};

export default About;