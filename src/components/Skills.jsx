
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users } from 'lucide-react';

const Skills = () => {
    const technicalSkills = {
        "Languages": ["C", "Python", "Javascript", "SQL"],
        "Tools": ["VS Code", "Git", "Vercel", "Automation Anywhere", "Amazon SageMaker"],
        "Coursework": ["Data Structures & Algorithms", "Database Management System", "Software Engineering"]
    };

    const softSkills = [
        'Prompt Engineering', 'Problem Solving', 'High Impact Presentation', 'Canva for Work'
    ];

    return (
        <section id="skills" className="py-20 px-4 bg-brand-dark-blue/30">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Code className="inline-block w-12 h-12 mr-4" />
                    Skills
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold gradient-text mb-6 flex items-center">
                            <Code className="w-6 h-6 mr-3" />
                            Technical Skills
                        </h3>
                        {Object.entries(technicalSkills).map(([category, skills]) => (
                            <div key={category} className="mb-6">
                                <h4 className="font-semibold text-brand-light-blue mb-3">{category}</h4>
                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill, index) => (
                                        <motion.span
                                            key={skill}
                                            className="skill-badge"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold gradient-text mb-6 flex items-center">
                            <Users className="w-6 h-6 mr-3" />
                            Soft Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {softSkills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    className="skill-badge"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
