
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Strengths from './components/Strengths';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      // FIX: Use `instanceof Element` as a type guard to ensure `section` is a valid DOM element.
      if (section instanceof Element) {
        observer.observe(section);
      }
    });

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        // FIX: Use `instanceof Element` as a type guard to ensure `section` is a valid DOM element.
        if (section instanceof Element) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="text-gray-200 relative z-10">
      <Header activeSection={activeSection} />
      <main>
        <div ref={(el) => (sectionRefs.current['hero'] = el)} id="hero">
          <Hero />
        </div>
        <div ref={(el) => (sectionRefs.current['about'] = el)} id="about">
          <About />
        </div>
        <div ref={(el) => (sectionRefs.current['skills'] = el)} id="skills">
          <Skills />
        </div>
        <div ref={(el) => (sectionRefs.current['projects'] = el)} id="projects">
          <Projects />
        </div>
        <div ref={(el) => (sectionRefs.current['experience'] = el)} id="experience">
          <Experience />
        </div>
        <Education />
        <Strengths />
        <div ref={(el) => (sectionRefs.current['contact'] = el)} id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}