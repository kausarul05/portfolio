'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle'
import Image from 'next/image';
import logo from "@/../public/assets/logo.png"

const navItems = ['Home', 'About', 'Projects', 'Contact'];

export default function Navbar() {
  return (
    <div className='container mx-auto'>
      <motion.nav
        className="fixed top-5 container mx-auto flex items-center justify-between px-10 py-5 bg-gradient-to-r from-teal-600 to-cyan-400 bg-opacity-90 backdrop-blur-lg shadow-md z-50 rounded-full"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Logo */}
        <motion.div
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={logo} // Replace with your logo path
            alt="Logo"
            width={120}
            height={120}
            className='w-30 h-full object-contain'
          />
        </motion.div>

        {/* Nav Items */}
        <ul className="flex items-center gap-10">
          {navItems.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className="relative text-slate-100 font-medium transition duration-300 hover:text-blue-400 group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.li>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>

        </ul>
      </motion.nav>
    </div>
  );
}
