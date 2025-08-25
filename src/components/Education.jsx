import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: 'KPR Institute of Engineering and Technology',
      degree: 'B.E. CSE (Artificial Intelligence & Machine Learning) honors in Computational Analytics',
      duration: '2023 - 2027',
      details: 'CGPA: 8.1 (Till 4th Sem)',
    },
    {
      institution: 'Sri Aurobindo Mira Matriculation Higher Secondary School, Madurai',
      degree: 'HSC & SSLC',
      duration: '2020 - 2023',
      details: 'HSC (2022-23): 90.5%, SSLC (2020-21)',
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <GraduationCap className="inline-block w-10 h-10 md:w-12 md:h-12 mr-4" />
          Education
        </motion.h2>

        <div className="relative">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              className="glass-card p-6 md:p-8 timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-bold gradient-text mb-1">{edu.institution}</h3>
              <p className="text-base md:text-lg text-gray-300 mb-2">{edu.degree}</p>
              <p className="text-brand-light-blue font-semibold mb-3 text-sm md:text-base">{edu.duration}</p>
              <p className="text-gray-300 text-sm md:text-base">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;