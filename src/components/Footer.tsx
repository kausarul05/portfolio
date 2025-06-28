'use client';

import { motion } from 'framer-motion';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8 px-5 md:px-20 border-t border-gray-800">
            <motion.div
                className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <p className="text-sm">© {new Date().getFullYear()} Kausarul Islam. All Rights Reserved.</p>

                <div className="flex gap-5">
                    <a href="#" target="_blank" className="hover:text-blue-500 transition-all duration-300 text-lg">
                        <FaFacebookF />
                    </a>
                    <a href="#" target="_blank" className="hover:text-white transition-all duration-300 text-lg">
                        <FaGithub />
                    </a>
                    <a href="#" target="_blank" className="hover:text-blue-400 transition-all duration-300 text-lg">
                        <FaLinkedinIn />
                    </a>
                </div>
            </motion.div>
        </footer>
    );
}
