'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { useState } from 'react';

export default function About() {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const midX = rect.width / 2;
        const midY = rect.height / 2;

        const rotateY = ((x - midX) / midX) * 10;
        const rotateX = ((midY - y) / midY) * 10;

        setRotateX(rotateX);
        setRotateY(rotateY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <section id="about" className="min-h-screen flex items-center bg-gray-900 text-white px-5 md:px-20 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                {/* Left Image / Card */}
                <motion.div
                    className="flex"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                            transition: 'transform 0.1s ease',
                        }}
                        className="relative w-[300px] h-[350px] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700 shadow-2xl p-6 flex flex-col items-center text-center cursor-pointer"
                    >
                        <Image
                            src="/profile.png"
                            alt="Profile Image"
                            width={120}
                            height={120}
                            className="rounded-full border-4 border-blue-600 mb-4"
                        />
                        <h3 className="text-2xl font-semibold text-blue-400">Kausarul Islam</h3>
                        <p className="text-gray-400 text-sm">MERN Stack Developer</p>

                        <div className="mt-6 space-y-2 text-gray-300 text-sm">
                            <p>📍 Mymensingh, Bangladesh</p>
                            <p>📞 +8801868703130</p>
                            <p>✉️ kauserulislam0055@gmail.com</p>
                        </div>

                        <div className="absolute -top-10 -right-10 w-36 h-36 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
                    </div>
                </motion.div>


                {/* Right Content */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
                        <Typewriter
                            words={["About Me", "Who I Am", "Why Hire Me?"]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h2>

                    <p className="text-lg text-gray-300 leading-relaxed">
                        I am <span className="text-blue-400 font-semibold">Kausarul</span>, a passionate and creative web developer focused on building modern, animated, and high-performance web applications.
                    </p>

                    <p className="text-lg text-gray-400 leading-relaxed">
                        I specialize in technologies like <span className="text-blue-400">Next.js</span>, <span className="text-blue-400">React</span>, <span className="text-blue-400">Tailwind CSS</span>, and <span className="text-blue-400">TypeScript</span>. My goal is to craft seamless, engaging, and impactful digital experiences for businesses and individuals.
                    </p>

                    <div className="flex gap-5 pt-4">
                        <a
                            href="#projects"
                            className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="border border-blue-600 text-blue-400 text-lg font-semibold px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
