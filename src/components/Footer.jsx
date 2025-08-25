import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = {
    linkedin: 'https://www.linkedin.com/in/rameshkumark24',
    github: 'https://github.com/rameshkumark24',
    leetcode: 'https://leetcode.com/u/Ramesh_Kumar_K/',
    email: 'mailto:rameshkumaroff@gmail.com',
  };

  const contactDetails = [
      { icon: Mail, text: 'rameshkumaroff@gmail.com', href: socialLinks.email },
      { icon: Phone, text: '+91 9787724866', href: 'tel:+919787724866' },
      { icon: MapPin, text: 'Coimbatore', href: '#' },
  ];

  return (
    <footer className="py-12 px-4 border-t border-brand-mid-blue/30">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-2xl font-bold font-heading gradient-text mb-4 block">Let's Connect!</span> {/* Adjusted text-3xl */}
          <p className="text-sm text-gray-400 mb-8 max-w-2xl mx-auto"> {/* Adjusted text-base */}
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
          </p>

          <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 mb-8">
              {contactDetails.map((detail, index) => (
                  <a key={index} href={detail.href} className="flex items-center text-gray-300 hover:text-brand-light-blue transition-colors text-sm"> {/* Added text-sm */}
                      <detail.icon className="w-4 h-4 mr-2" /> {/* Adjusted w-5 h-5 */}
                      <span>{detail.text}</span>
                  </a>
              ))}
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-light-blue transition-colors">
              <Github className="w-6 h-6" /> {/* Adjusted w-8 h-8 */}
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-light-blue transition-colors">
              <Linkedin className="w-6 h-6" /> {/* Adjusted w-8 h-8 */}
            </a>
            <a href={socialLinks.leetcode} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-light-blue transition-colors">
              <Code className="w-6 h-6" /> {/* Adjusted w-8 h-8 */}
            </a>
          </div>
          <p className="text-gray-500 text-xs"> {/* Adjusted text-sm */}
            © {new Date().getFullYear()} Ramesh Kumar K. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;