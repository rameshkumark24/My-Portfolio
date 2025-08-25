import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Publications from '@/components/Publications';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <Helmet>
        <title>Ramesh Kumar K - Portfolio</title>
        <meta name="description" content="Portfolio of Ramesh Kumar K, a passionate developer specializing in Artificial Intelligence and Machine Learning." />
        <meta property="og:title" content="Ramesh Kumar K - Portfolio" />
        <meta property="og:description" content="Portfolio of Ramesh Kumar K, a passionate developer specializing in Artificial Intelligence and Machine Learning." />
      </Helmet>
      
      <div className="min-h-screen relative font-body bg-brand-dark-blue-deep text-brand-white overflow-x-hidden">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-light-blue rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-mid-blue rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-brand-dark-blue rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10">
          <Header activeSection={activeSection} scrollToSection={scrollToSection} />
          <main>
            <Hero scrollToSection={scrollToSection}/>
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Publications />
          </main>
          <Footer />
        </div>
        
        <Toaster />
      </div>
    </>
  );
}

export default App;