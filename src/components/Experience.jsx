import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experienceData = [
    {
      title: 'Summer Intern',
      company: 'Lennox India Technology Centre (LITC)',
      duration: '6 Weeks | Chennai, TN',
      points: [
        'Worked in the RPA and Engineering team, contributing to automation and efficiency improvements across internal business workflows and reduces manual works.',
        'Gained hands-on experience with tools like Automation Anywhere, Power Automate, PowerApps and Mendix for building bots and low-code apps.',
        'Understood the culture and structure of working in an MNC and Product-based company, Including professional communication and agile collaboration.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-brand-dark-blue/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Briefcase className="inline-block w-10 h-10 md:w-12 md:h-12 mr-4" />
          Work Experience
        </motion.h2>

        <div className="relative">
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              className="glass-card p-6 md:p-8 timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-bold gradient-text mb-1">{exp.title}</h3>
              <p className="text-lg md:text-xl text-gray-300 mb-2">{exp.company}</p>
              <p className="text-brand-light-blue font-semibold mb-4 text-sm md:text-base">{exp.duration}</p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside text-sm md:text-base">
                {exp.points.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;