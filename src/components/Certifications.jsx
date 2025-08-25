import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
    const certificationData = [
        {
            title: "C, C++, and Java Training",
            issuer: "Spoken Tutorial Project at IIT Bombay",
            link: "https://drive.google.com/drive/folders/18hHjcG4N5VB1VYcGvHMQqcd8tI4C_QiW"
        },
        {
            title: "Foundation of Prompt Engineering",
            issuer: "AWS Skill Builder",
            link: "https://drive.google.com/drive/folders/18hHjcG4N5VB1VYcGvHMQqcd8tI4C_QiW"
        },
        {
            title: "No Code Machine Learning and Generative AI on AWS",
            issuer: "AWS Skill Builder",
            link: "https://drive.google.com/drive/folders/18hHjcG4N5VB1VYcGvHMQqcd8tI4C_QiW"
        }
    ];

    return (
        <section id="certifications" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Award className="inline-block w-10 h-10 mr-4" />
                    Achievements & Certifications
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificationData.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-6 flex flex-col justify-between text-center hover:scale-105 transition-transform duration-300 hover:border-brand-light-blue"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <Award className="w-10 h-10 mx-auto mb-4 text-brand-light-blue" />
                                <h3 className="text-lg font-bold font-heading text-brand-white mb-2">{cert.title}</h3>
                                <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>
                            </div>
                            <Button
                                variant="link"
                                className="text-brand-light-blue"
                                onClick={() => window.open(cert.link, '_blank')}>
                                View Certificate <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;