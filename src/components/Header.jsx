import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Eye, Menu, X } from 'lucide-react';

const Header = ({ activeSection, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const resumeUrl = "https://drive.google.com/drive/folders/1JBDQXGWWhgc7Q3D0EZZ9gQKw_pZHBJ_y";

  const sections = [
    'about', 'education', 'experience', 'projects', 'skills', 'certifications', 'publications'
  ];

  const handleScrollAndCloseMenu = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 p-4">
        <motion.div 
          className="glass-card max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <button onClick={() => scrollToSection('about')} className="text-xl font-bold font-heading gradient-text">
            RK
          </button>
          
          <nav className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link capitalize ${activeSection === section ? 'active text-brand-light-blue' : ''}`}
              >
                {section}
              </button>
            ))}
          </nav>

          <Button 
            onClick={() => window.open(resumeUrl, '_blank')}
            className="hidden sm:flex bg-brand-light-blue hover:bg-brand-mid-blue text-brand-white font-semibold rounded-full text-sm"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Resume
          </Button>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-6 w-6 text-brand-white" />
            </Button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-brand-dark-blue-deep p-6 flex flex-col md:hidden"
          >
            <div className="flex justify-end mb-8">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-7 w-7 text-brand-white" />
              </Button>
            </div>
            
            <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleScrollAndCloseMenu(section)}
                  className={`text-2xl font-semibold capitalize transition-colors duration-300 ${activeSection === section ? 'gradient-text' : 'text-brand-white hover:text-brand-light-blue'}`}
                >
                  {section}
                </button>
              ))}
            </nav>

            <div className="mt-auto flex justify-center">
              <Button 
                onClick={() => window.open(resumeUrl, '_blank')}
                className="w-full bg-brand-light-blue hover:bg-brand-mid-blue text-brand-white font-semibold rounded-full text-base"
              >
                <Eye className="w-5 h-5 mr-2" />
                View Resume
              </Button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;