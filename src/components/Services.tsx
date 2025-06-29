'use client';

import { motion } from 'framer-motion';
import { FaCode, FaBug, FaPaintBrush, FaServer, FaGlobe, FaShoppingCart, FaDatabase, FaCloudUploadAlt, FaCogs } from 'react-icons/fa';

const services = [
    { title: 'Frontend Development', icon: <FaCode />, desc: 'Modern, responsive UI with React/Next.js & Tailwind CSS.' },
    { title: 'Backend Development', icon: <FaServer />, desc: 'Secure & fast server-side development with Node.js & Express.' },
    { title: 'UI/UX Design', icon: <FaPaintBrush />, desc: 'Clean & user-friendly designs using Figma & modern trends.' },
    { title: 'Bug Fixing', icon: <FaBug />, desc: 'Fix frontend/backend bugs & optimize performance.' },
    { title: 'Website Deployment', icon: <FaGlobe />, desc: 'Deploy & host websites on Vercel, Netlify, or custom servers.' },
    { title: 'E-Commerce Development', icon: <FaShoppingCart />, desc: 'Custom e-commerce platforms with secure payment gateways.' },
    { title: 'Database Design', icon: <FaDatabase />, desc: 'Optimized and scalable MongoDB and SQL database solutions.' },
    { title: 'Cloud Hosting Setup', icon: <FaCloudUploadAlt />, desc: 'Secure, scalable cloud hosting setup and management.' },
    { title: 'API Integration', icon: <FaCogs />, desc: 'Integrate third-party APIs & custom REST APIs for your apps.' },
];

export default function Services() {
    return (
        <section id="services" className="min-h-screen bg-gradient-to-br from-cyan-500 to-teal-400 text-white px-5 md:px-20 py-20">
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-orange-300 mb-12 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                What I Do
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto">
                {services.map(({ title, icon, desc }, index) => (
                    <motion.div
                        key={title}
                        className="relative overflow-hidden rounded-xl p-8 flex flex-col items-center text-center cursor-pointer group border border-orange-200 transition-all duration-500 ease-out"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 * index, duration: 0.6, ease: 'easeOut' }}
                    >
                        {/* Hover overlay animation */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-300 opacity-0 scale-0 group-hover:scale-150 group-hover:opacity-20 blur-sm transition-all duration-500 ease-out z-0"></div>

                        {/* Border Glow */}
                        <div className="absolute inset-0 rounded-xl group-hover:border-2 group-hover:border-orange-300 group-hover:shadow-[0_0_30px_#9333ea80] transition-all duration-500 ease-out z-0"></div>

                        {/* Icon & Text */}
                        <div className="relative z-10 flex flex-col items-center space-y-4">
                            <div className="text-5xl group-hover:text-white transition-colors duration-500">{icon}</div>
                            <h3 className="text-2xl font-semibold group-hover:text-white transition-colors duration-500">{title}</h3>
                            <p className="text-slate-100 text-sm">{desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
