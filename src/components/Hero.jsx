import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Code } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/rameshkumark24',
    github: 'https://github.com/rameshkumark24',
    leetcode: 'https://leetcode.com/u/Ramesh_Kumar_K/',
    email: 'mailto:rameshkumaroff@gmail.com',
  };

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-32 pb-16 md:pt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.div
            className="w-40 h-40 sm:w-56 sm:h-56 mx-auto md:hidden mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="glass-card p-2 rounded-full shadow-2xl shadow-brand-dark-blue/50 w-full h-full">
              <img
                src="https://horizons-cdn.hostinger.com/bd498f5d-327d-44f2-8163-9949a3c8464e/6c3bf79f64178bcecb25d4f84415fd2f.jpg"
                alt="A professional portrait of Ramesh Kumar K"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <div className="px-4 sm:px-0">
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 text-brand-white font-heading text-center md:text-left">
              Hi, I'm <span className="gradient-text">Ramesh Kumar K</span>
            </h1>

            <h2 className="text-base sm:text-xl text-brand-light-blue font-semibold mb-6 text-center md:text-left">
              B.E. CSE | Artificial Intelligence & Machine Learning
            </h2>

            <p className="text-base text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              A passionate and dedicated student with a keen interest in leveraging technology to solve real-world problems. Eager to contribute to innovative projects and grow as a developer.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
              <Button 
                onClick={() => handleLinkClick(socialLinks.email)}
                className="bg-brand-light-blue hover:bg-brand-mid-blue text-brand-white rounded-full text-sm"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('projects')}
                className="border-brand-light-blue text-brand-light-blue hover:bg-brand-light-blue hover:text-brand-white rounded-full text-sm"
              >
                <Github className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </div>

            <div className="flex space-x-6 justify-center md:justify-start">
              <motion.button whileHover={{ scale: 1.2, rotate: 5 }} onClick={() => handleLinkClick(socialLinks.github)} className="text-gray-400 hover:text-brand-light-blue transition-colors">
                <Github className="w-5 h-5" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.2, rotate: 5 }} onClick={() => handleLinkClick(socialLinks.linkedin)} className="text-gray-400 hover:text-brand-light-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.2, rotate: 5 }} onClick={() => handleLinkClick(socialLinks.leetcode)} className="text-gray-400 hover:text-brand-light-blue transition-colors">
                <Code className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden md:block"
        >
          <div className="glass-card p-4 rounded-3xl shadow-2xl shadow-brand-dark-blue/50">
             <img src="https://horizons-cdn.hostinger.com/bd498f5d-327d-44f2-8163-9949a3c8464e/6c3bf79f64178bcecb25d4f84415fd2f.jpg" alt="A professional portrait of Ramesh Kumar K" className="rounded-2xl w-full h-auto object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;