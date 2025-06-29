'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Myself from '../../public/assets/myself.png';

export default function Hero() {
    return (
        <section className="h-screen flex items-center px-5 md:px-20 section-bg-1 text-white overflow-hidden relative">
            {/* Animated Gradient Blob */}
            <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse z-0"></div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
                {/* Left Content */}
                <div className="space-y-4 text-center md:text-left">
                    <motion.h1
                        className="text-5xl md:text-3xl font-extrabold leading-tight"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        Hi,
                    </motion.h1>
                    <motion.h1
                        className="text-5xl md:text-6xl font-extrabold leading-tight"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        I am <span className="text-[#38bdf8]">Kausarul</span>
                    </motion.h1>

                    <motion.p
                        className="text-lg text-slate-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                    >
                        A passionate web developer crafting smooth, animated, modern websites using Next.js, TypeScript, and Tailwind CSS.
                    </motion.p>

                    <div className='flex gap-10'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
                        >
                            <a
                                href="#projects"
                                className="inline-block bg-[#38bdf8] font-bold text-white text-lg  px-8 py-3 rounded-full shadow-lg hover:bg-[#38bdf8] transition-all duration-300 mt-10"
                            >
                                View Projects
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
                        >
                            <a
                                href="#projects"
                                className="inline-block border border-[#38bdf8] text-slate-100 text-lg font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#38bdf8] transition-all duration-300 mt-10"
                            >
                                Download CV
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Right Image */}
                <motion.div
                    className="flex justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.2, ease: 'easeOut' }}
                >
                    {/* <div className="relative p-[6px] rounded-2xl  overflow-hidden group"> */}

                    {/* Top line */}
                    {/* <span className="absolute top-0 left-0 w-full h-[3px] bg-cyan-300 animate-[runRight_2s_linear_infinite]"></span> */}

                    {/* Right line */}
                    {/* <span className="absolute top-0 right-0 w-[3px] h-full bg-cyan-300 animate-[runDown_2s_linear_infinite]"></span> */}

                    {/* Bottom line */}
                    {/* <span className="absolute bottom-0 right-0 w-full h-[3px] bg-cyan-300 animate-[runLeft_2s_linear_infinite]"></span> */}

                    {/* Left line */}
                    {/* <span className="absolute bottom-0 left-0 w-[3px] h-full bg-cyan-300 animate-[runUp_2s_linear_infinite]"></span> */}

                    {/* Image */}
                    <Image
                        src={Myself}
                        alt="Profile Image"
                        width={400}
                        height={400}
                        className="rounded-2xl object-cover"
                    />
                    {/* </div> */}

                </motion.div>




            </div>
        </section>
    );
}
