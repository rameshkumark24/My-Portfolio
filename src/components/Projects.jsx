import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
    const projectData = [
        {
            title: "Fashion Product Recommendation System",
            description: "This project builds a fashion product recommendation system using ResNet50 to extract features from 44,000 images and Nearest Neighbors to recommend similar products based on Euclidean distance. The system is deployed as a web app for user interaction.",
            tools: ["Python", "TensorFlow", "scikit-learn", "Pillow", "Flask"],
            link: "https://github.com/rameshkumark24"
        },
        {
            title: "Stock Market Prediction",
            description: "This project aims to predict stock market values for the next 10 days using Long Short-Term Memory (LSTM) networks, a type of recurrent neural network. It involves preprocessing historical stock data, creating a dataset with a lookback period, and building an LSTM model.",
            tools: ["Python", "yfinance"],
            link: "https://github.com/rameshkumark24"
        }
    ];

    return (
        <section id="projects" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <FolderGit2 className="inline-block w-10 h-10 md:w-12 md:h-12 mr-4" />
                    Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projectData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-6 flex flex-col justify-between hover:border-brand-light-blue transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl md:text-2xl font-bold gradient-text flex-1 pr-4">{project.title}</h3>
                                    <Button variant="ghost" size="icon" className="flex-shrink-0" onClick={() => window.open(project.link, '_blank')}>
                                        <ExternalLink className="w-5 h-5 text-brand-light-blue" />
                                    </Button>
                                </div>
                                <p className="text-gray-300 mb-4 text-base">{project.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="text-xs bg-brand-dark-blue text-brand-light-blue font-mono py-1 px-3 rounded-full">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;