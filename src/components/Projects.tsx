'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import examtice from "@/../public/assets/examtic.png"
import azan from "@/../public/assets/azan.png"
import savarshall from "@/../public/assets/savarshall.png"
import eurasia from "@/../public/assets/eurasia.png"
import elegance from "@/../public/assets/elegance.png"
import webartsfactory from "@/../public/assets/webartsfactory.png"

const projects = [
    {
        name: 'ExamTice',
        image: examtice,
        description: 'An online exam system built with Next.js, Tailwind CSS and MongoDB.',
        link: 'https://www.examtice.com',
    },
    {
        name: 'Azan Wholesale',
        image: azan,
        description: 'An ecommerce wholesale platform using React, Node.js and Stripe.',
        link: 'https://www.azanwholesale.com',
    },
    {
        name: 'Savers Hall',
        image: savarshall,
        description: 'A multi-vendor product management system built with MERN Stack.',
        link: 'https://www.savershall.com',
    },
    {
        name: 'Savers Hall',
        image: eurasia,
        description: 'A multi-vendor product management system built with MERN Stack.',
        link: 'https://www.savershall.com',
    },
    {
        name: 'Savers Hall',
        image: elegance,
        description: 'A multi-vendor product management system built with MERN Stack.',
        link: 'https://www.savershall.com',
    },
    {
        name: 'Savers Hall',
        image: webartsfactory,
        description: 'A multi-vendor product management system built with MERN Stack.',
        link: 'https://www.savershall.com',
    }
];

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen section-bg-2 text-white px-5 md:px-20 py-20">
            <motion.h2
                className="text-4xl md:text-5xl font-bold text-orange-300 mb-12 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                My Projects
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 container mx-auto">
                {projects.map(({ name, image, description, link }, index) => (
                    <motion.a
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group rounded-xl overflow-hidden bg-gray-800 shadow-lg cursor-pointer transition-all duration-500"
                        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 * index, duration: 0.8, ease: 'easeOut' }}
                    >
                        {/* Image */}
                        <div className="overflow-hidden">
                            <Image
                                src={image}
                                alt={name}
                                width={600}
                                height={400}
                                className="object-cover w-full h-80 group-hover:scale-110 transition-transform duration-700 ease-out"
                            />
                        </div>

                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-all duration-500 blur-sm"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-900 bg-opacity-80 backdrop-blur-md text-white translate-y-full group-hover:translate-y-0 transition-all duration-600 ease-out">
                            <h3 className="text-2xl font-bold mb-2 text-blue-400">{name}</h3>
                            <p className="text-gray-300 text-sm mb-3">{description}</p>
                            <span className="text-blue-300 underline">Visit Project →</span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
