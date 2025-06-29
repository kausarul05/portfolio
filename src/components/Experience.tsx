'use client';

import { motion } from 'framer-motion';

const educations = [
    { year: '2018 - 2022', title: 'High School Degree', desc: 'Completed SSC from XYZ School with Science background.' },
    { year: '2018 - 2022', title: "Bachelor's Degree", desc: 'Completed Diploma in Engineering (Electrical).' },
];

const experiences = [
    { year: '2023 - Present', title: 'Frontend Mentor', desc: 'Teaching React, Next.js & modern UI trends at Code Guru.' },
    { year: '2022 - 2023', title: 'Full-Stack Developer', desc: 'Worked on wholesale eCommerce sites with MERN stack.' },
    { year: '2021 - 2022', title: 'Freelance Developer', desc: 'Built client websites & landing pages on Fiverr & Upwork.' },
];

export default function Timeline() {
    return (
        <section id="experience" className="min-h-screen section-bg-2 text-white px-5 md:px-20 py-20">
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-cyan-400 mb-16 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                Education & Experience
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

                {/* Education */}
                <div>
                    <h3 className="text-3xl font-semibold text-cyan-300 mb-8">Education</h3>
                    <div className="border-l-4 border-cyan-500 space-y-8">
                        {educations.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="relative pl-6 pb-6 group"
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 * index, duration: 0.6 }}
                            >
                                <span className="absolute -left-3 top-2 w-4 h-4 bg-cyan-500 rounded-full group-hover:scale-125 transition duration-300"></span>
                                <p className="text-sm text-gray-400">{item.year}</p>
                                <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">{item.title}</h4>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Experience */}
                <div>
                    <h3 className="text-3xl font-semibold text-cyan-300 mb-8">Experience</h3>
                    <div className="border-l-4 border-cyan-500 space-y-8">
                        {experiences.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="relative pl-6 pb-6 group"
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 * index, duration: 0.6 }}
                            >
                                <span className="absolute -left-3 top-2 w-4 h-4 bg-cyan-500 rounded-full group-hover:scale-125 transition duration-300"></span>
                                <p className="text-sm text-gray-400">{item.year}</p>
                                <h4 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">{item.title}</h4>
                                <p className="text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
