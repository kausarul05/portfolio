'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="h-screen flex items-center px-5 md:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
                {/* Left Content */}
                <div className="space-y-6 text-center md:text-left">
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold leading-tight"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        Hi, I am <span className="text-blue-500">Kausarul</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg text-gray-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                    >
                        A passionate web developer crafting smooth, animated, modern websites using Next.js, TypeScript, and Tailwind CSS.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
                    >
                        <a
                            href="#projects"
                            className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
                        >
                            View Projects
                        </a>
                    </motion.div>
                </div>

                {/* Right Image */}
                <motion.div
                    className="flex justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
                >
                    <Image
                        src="/profile.png"
                        alt="Profile Image"
                        width={400}
                        height={400}
                        className="rounded-2xl shadow-2xl object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
