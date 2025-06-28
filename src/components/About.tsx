'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-5 md:px-20">
            <motion.div
                className="max-w-3xl text-center space-y-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-blue-500">About Me</h2>

                <p className="text-lg text-gray-300">
                    I'm <span className="text-blue-400 font-semibold">Kausarul</span>, a passionate web developer with expertise in modern web technologies like
                    <span className="text-blue-400"> Next.js</span>, <span className="text-blue-400">React</span>, and <span className="text-blue-400">Tailwind CSS</span>.
                    I love crafting clean, animated, and dynamic web experiences that stand out and connect people through seamless interfaces.
                </p>

                <p className="text-lg text-gray-400">
                    Always exploring new trends, technologies, and ideas to build creative, user-friendly, and high-performance websites.
                </p>
            </motion.div>
        </section>
    );
}
