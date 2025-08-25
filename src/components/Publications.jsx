import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const Publications = () => {
    return (
        <section id="publications" className="py-20 px-4 bg-brand-dark-blue/30">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <FileText className="inline-block w-9 h-9 mr-4" /> {/* Adjusted w-12 h-12 */}
                    Publications
                </motion.h2>

                <motion.div
                    className="glass-card p-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <FileText className="w-14 h-14 mx-auto mb-4 text-brand-light-blue" /> {/* Adjusted w-16 h-16 */}
                    <h3 className="text-xl font-bold font-heading gradient-text mb-4">Coming Soon!</h3> {/* Adjusted text-2xl */}
                    <p className="text-base text-gray-300 text-base"> {/* Adjusted text-lg */}
                        Details about research papers and publications will be added here in the future.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Publications;