import React, { Suspense, lazy, useEffect, useState } from 'react';
import Hero from '../components/Hero';

const About = lazy(() => import('../components/About'));
const Skills = lazy(() => import('../components/Skills'));
const Certifications = lazy(() => import('../components/Certifications'));
const Projects = lazy(() => import('../components/Projects'));
const Experience = lazy(() => import('../components/Experience'));
const Services = lazy(() => import('../components/Services'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Contact = lazy(() => import('../components/Contact'));

export default function Home() {
  const [loadSections, setLoadSections] = useState(false);

  useEffect(() => {
    const load = () => setLoadSections(true);

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(load, { timeout: 1200 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timer = window.setTimeout(load, 600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Hero />
      {loadSections && (
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Certifications />
          <Projects />
          <Experience />
          <Services />
          <Testimonials />
          <Contact />
        </Suspense>
      )}
    </>
  );
}
