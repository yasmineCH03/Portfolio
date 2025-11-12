
import React from 'react';
import type { SkillCategory, Project, Experience, Education, Strength } from './types';
import { GithubIcon, LinkedInIcon, CodeIcon, BrainIcon, DatabaseIcon, ChartIcon } from './components/Icons';

export const NAV_LINKS = [
  { href: '#about', label: 'À propos' },
  { href: '#skills', label: 'Compétences' },
  { href: '#projects', label: 'Projets' },
  { href: '#experience', label: 'Expérience' },
  { href: '#contact', label: 'Contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Développement & Programmation',
    skills: [
      { name: 'Python' }, { name: 'Java' }, { name: 'SQL' }, { name: 'PHP' }, { name: 'JavaScript' },
      { name: 'Symfony 6+' }, { name: '.NET' }, { name: 'React' },
      { name: 'REST API' }, { name: 'Microservices' }, { name: 'Docker' }
    ]
  },
  {
    title: 'Data Science & Machine Learning',
    skills: [
      { name: 'TensorFlow' }, { name: 'PyTorch' }, { name: 'Scikit-learn' },
      { name: 'Pandas' }, { name: 'NumPy' }, { name: 'Feature Engineering' },
      { name: 'Classification' }, { name: 'Régression' }, { name: 'Clustering' }
    ]
  },
  {
    title: 'Bases de Données & BI',
    skills: [
      { name: 'MySQL' }, { name: 'PostgreSQL' }, { name: 'MongoDB' },
      { name: 'Power BI' }, { name: 'ETL' }, { name: 'Data Modeling' },
      { name: 'Matplotlib' }, { name: 'Seaborn' }, { name: 'Plotly' }
    ]
  },
  {
    title: 'Actuariat & Analyse Quantitative',
    skills: [
      { name: 'Modélisation des risques' }, { name: 'Tarification actuarielle' }, { name: 'Mathématiques financières' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: 'API de Mailing Asynchrone',
    stack: ['Symfony 6+', 'RabbitMQ', 'MongoDB', 'Docker'],
    description: 'API REST pour envoi d\'e-mails asynchrones, conçue pour être une solution scalable et fiable pour l\'envoi massif d\'e-mails.',
    features: ['POST /emails', 'GET /emails/{id}', 'Gestion de statuts (envoyé, en attente, erreur)'],
    objective: 'Solution scalable et fiable pour l\'envoi massif d\'e-mails.',
    image: 'https://picsum.photos/seed/project1/600/400',
    githubLink: 'https://github.com/yasmineCH03'
  },
  {
    title: 'KOOLHEALTHY',
    stack: ['Symfony', 'JavaFX', 'Flutter Flow', 'MySQL'],
    description: 'Plateforme intelligente de nutrition utilisant l\'IA pour générer des régimes personnalisés et synchroniser les données sur plusieurs plateformes.',
    features: ['Génération de régimes personnalisés', 'Synchronisation multi-plateformes', 'CI/CD avec Maven et GitHub'],
    objective: 'Fournir une expérience de nutrition personnalisée et connectée.',
    image: 'https://picsum.photos/seed/project2/600/400',
    githubLink: 'https://github.com/yasmineCH03'
  },
  {
    title: 'DigiDars',
    stack: ['HTML/CSS/JS', 'PHP', 'MySQL'],
    description: 'Application web fullstack éducative avec un backend sécurisé, un frontend dynamique et une collaboration via GitHub.',
    features: ['Backend sécurisé', 'Frontend dynamique', 'Collaboration GitHub'],
    objective: 'Créer une plateforme d\'apprentissage en ligne interactive.',
    image: 'https://picsum.photos/seed/project3/600/400',
    githubLink: 'https://github.com/yasmineCH03'
  }
];

export const EXPERIENCES: Experience[] = [
    {
        role: 'Agente d\'assistance',
        company: 'Uber (via Concentrix Tunisie)',
        period: 'Juillet 2025 – Septembre 2025',
        missions: ['Support technique pour les utilisateurs et chauffeurs.', 'Analyse et résolution des problèmes signalés.', 'Transmission de feedback qualitatif aux équipes techniques.']
    },
    {
        role: 'Stage Développement – API Mailing',
        company: 'CodeCrafter',
        period: 'Juillet 2025 – Octobre 2025',
        missions: ['Conception et développement d\'une API REST avec Symfony.', 'Intégration de RabbitMQ pour la gestion de files d\'attente.', 'Utilisation de MongoDB pour le stockage des données.', 'Déploiement avec Docker.']
    },
    {
        role: 'Stage en Neurologie',
        company: 'Hôpital Mongi Ben Hmida',
        period: 'Mai – Juillet 2021',
        missions: ['Analyse des données nutritionnelles des patients.', 'Automatisation de la génération de rapports avec Excel, améliorant l\'efficacité de 30%.']
    }
];

export const EDUCATIONS: Education[] = [
    {
        degree: 'Master Actuariat',
        institution: 'Université du Mans, France',
        period: 'Septembre 2025 – Présent',
        specialties: ['Mathématiques financières', 'Modélisation des risques'],
    },
    {
        degree: 'Cycle Ingénieur – Data Science',
        institution: 'ESPRIT, Tunis',
        period: 'Depuis septembre 2022',
        specialties: ['Data Science', 'Machine Learning', 'Systèmes distribués'],
        badge: '★ Major de classe (1ère année prépa & 1ère année cycle ingénieur)'
    }
]

export const STRENGTHS: Strength[] = [
  { title: 'Profil hybride Data Science + Actuariat', icon: <BrainIcon className="h-10 w-10 mx-auto mb-4 text-[#FF3B5C]" /> },
  { title: 'Excellence académique', icon: <CodeIcon className="h-10 w-10 mx-auto mb-4 text-[#FF3B5C]" /> },
  { title: 'Adaptabilité et rigueur analytique', icon: <DatabaseIcon className="h-10 w-10 mx-auto mb-4 text-[#FF3B5C]" /> },
  { title: 'Collaboration en équipe pluridisciplinaire', icon: <ChartIcon className="h-10 w-10 mx-auto mb-4 text-[#FF3B5C]" /> },
  { title: 'Communication professionnelle', icon: <GithubIcon className="h-10 w-10 mx-auto mb-4 text-[#FF3B5C]" /> },
  { title: 'Polyvalence Finance & Tech', icon: <LinkedInIcon className="h-10 w-10 mx-auto mb-4 text-[#FF3B5C]" /> },
];
