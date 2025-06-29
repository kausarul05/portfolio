'use client';

import { motion } from 'framer-motion';
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiJavascript,
    SiNodedotjs,
    SiMongodb,
    SiFigma,
    SiFirebase,
    SiExpress,
    SiGithub,
    SiHtml5,
    SiCss3,
    SiRedux,
    SiFramer,
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'Firebase', icon: <SiFirebase /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Framer Motion', icon: <SiFramer /> },
  { name: 'GitHub', icon: <SiGithub /> },
  { name: 'HTML5', icon: <SiHtml5 /> },
  { name: 'CSS3', icon: <SiCss3 /> },
  { name: 'Figma', icon: <SiFigma /> },
];

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen section-bg-1 text-white px-5 md:px-20 py-20">
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-[#38bdf8] mb-12 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                My Skills
            </motion.h2>

            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-auto">
                {skills.map(({ name, icon }, index) => (
                    <motion.div
                        key={name}
                        className="relative overflow-hidden rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer group border border-[#38bdf8] transition-all duration-500 ease-out"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 * index, duration: 0.6, ease: 'easeOut' }}
                    >
                        {/* Hover overlay animation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8] to-[#38bdf8] opacity-0 scale-0 group-hover:scale-150 group-hover:opacity-25 blur-sm transition-all duration-500 ease-out z-0"></div>

                        {/* Border Glow */}
                        <div className="absolute inset-0 rounded-xl group-hover:border-2 group-hover:border-[#38bdf8] group-hover:shadow-[0_0_30px_#3b82f680] transition-all duration-500 ease-out z-0"></div>

                        {/* Icon & Text */}
                        <div className="relative z-10 flex flex-col items-center space-y-4">
                            <div className="text-6xl group-hover:text-white transition-colors duration-500">{icon}</div>
                            <h3 className="text-xl font-semibold group-hover:text-white transition-colors duration-500">{name}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
