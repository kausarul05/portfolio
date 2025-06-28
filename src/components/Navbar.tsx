'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const navItems = ['Home', 'About', 'Projects', 'Contact'];

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full flex items-center justify-between px-10 py-5 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 bg-opacity-90 backdrop-blur-lg shadow-md z-50"
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
        Kausarul
      </motion.div>

      {/* Nav Items */}
      <ul className="flex gap-10">
        {navItems.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <Link
              href={`#${item.toLowerCase()}`}
              className="relative text-gray-300 font-medium transition duration-300 hover:text-blue-400 group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
