'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
    const [status, setStatus] = useState('');

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('');

        emailjs
            .sendForm(
                'service_dmh9esp',
                'template_w8orqqx',
                e.currentTarget,
                'h10c7o7qoHRvD8vGr'
            )
            .then(
                () => {
                    setStatus('success');
                    e.currentTarget.reset();
                },
                () => {
                    setStatus('error');
                }
            );
    };

    return (
        <section id="contact" className="relative min-h-screen bg-gradient-to-br from-teal-500 to-cyan-400 text-white px-5 md:px-20 py-20 flex items-center overflow-hidden">
            {/* Animated Gradient Blob */}
            <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse z-0"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-300">Let’s Work Together</h2>
                    <p className="text-slate-100 text-lg leading-relaxed">
                        Have a project idea? Or just want to connect? Drop a message and I’ll get back ASAP.
                    </p>

                    <div className="flex gap-6 mt-10">
                        <a href="#" target="_blank" className="p-4 rounded-full border border-orange-300 hover:bg-orange-300 transition-all duration-300 text-xl">
                            <FaFacebookF />
                        </a>
                        <a href="#" target="_blank" className="p-4 rounded-full border border-orange-300 hover:bg-orange-300 transition-all duration-300 text-xl">
                            <FaGithub />
                        </a>
                        <a href="#" target="_blank" className="p-4 rounded-full border border-orange-300 hover:bg-orange-300 transition-all duration-300 text-xl">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </motion.div>

                {/* Right */}
                <motion.form
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    onSubmit={sendEmail}
                    className="bg-gray-800/40 backdrop-blur-lg p-8 rounded-2xl space-y-6 border border-orange-300 shadow-lg"
                >
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="from_name"
                        required
                        className="w-full p-4 rounded-lg  bg-amber-100 text-black border border-orange-300 focus:border-orange-300 focus:ring-1 focus:ring-orange-600 outline-none transition duration-300"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        name="from_email"
                        required
                        className="w-full p-4 rounded-lg  bg-amber-100 text-black border border-orange-300 focus:border-orange-300 focus:ring-1 focus:ring-orange-300 outline-none transition duration-300"
                    />
                    <textarea
                        rows={5}
                        placeholder="Write your message..."
                        name="message"
                        required
                        className="w-full p-4 rounded-lg bg-amber-100 text-black border border-orange-300 focus:border-orange-300 focus:ring-1 focus:ring-orange-300 outline-none transition duration-300"
                    ></textarea>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full py-4 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 text-white font-semibold text-lg shadow-lg transition-all duration-300"
                    >
                        Send Message
                    </motion.button>

                    {status === 'success' && (
                        <motion.p className="text-green-400 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            ✅ Message sent successfully!
                        </motion.p>
                    )}
                    {status === 'error' && (
                        <motion.p className="text-red-400 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            ❌ Something went wrong. Try again.
                        </motion.p>
                    )}
                </motion.form>
            </div>
        </section>
    );
}
