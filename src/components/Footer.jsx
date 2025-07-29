import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-8 mt-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg mb-4">
          &copy; {new Date().getFullYear()} CriptoBlog. Todos los derechos reservados.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;