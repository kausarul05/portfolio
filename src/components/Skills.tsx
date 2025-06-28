'use client';

import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiNodedotjs } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <SiReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Node.js', icon: <SiNodedotjs /> },
];

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen bg-gray-900 text-white px-5 md:px-20 py-20">
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-blue-500 mb-12 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                My Skills
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {skills.map(({ name, icon }, index) => (
                    <motion.div
                        key={name}
                        className="relative overflow-hidden rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer group border border-gray-700 transition-all duration-500 ease-out"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 * index, duration: 0.6, ease: 'easeOut' }}
                    >
                        {/* Hover overlay animation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-0 scale-0 group-hover:scale-150 group-hover:opacity-25 blur-sm transition-all duration-500 ease-out z-0"></div>

                        {/* Border Glow */}
                        <div className="absolute inset-0 rounded-xl group-hover:border-2 group-hover:border-blue-600 group-hover:shadow-[0_0_30px_#3b82f680] transition-all duration-500 ease-out z-0"></div>

                        {/* Icon & Text */}
                        <div className="relative z-10 flex flex-col items-center space-y-4">
                            <div className="text-6xl group-hover:text-blue-400 transition-colors duration-500">{icon}</div>
                            <h3 className="text-xl font-semibold group-hover:text-blue-300 transition-colors duration-500">{name}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
