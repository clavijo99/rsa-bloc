import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // ¡Aquí estaba el detalle!
import { Menu, X, Lock, Key, Shield } from 'lucide-react';

const navItems = [
  { name: 'Fundamentos', icon: <Lock className="w-5 h-5" /> },
  { name: 'Algoritmos', icon: <Key className="w-5 h-5" /> },
  { name: 'Ventajas/Desventajas', icon: <Shield className="w-5 h-5" /> },
  { name: 'Caso Práctico', icon: <Menu className="w-5 h-5" /> },
  { name: 'Recomendaciones', icon: <Menu className="w-5 h-5" /> },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="bg-white/90 backdrop-blur-lg shadow-lg fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          CriptoBlog
        </motion.div>

        <nav className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={`#${item.name.toLowerCase().replace(/\s/g, '-')}`}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 flex items-center gap-2"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {item.icon}
              {item.name}
            </motion.a>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600">
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <ul className="flex flex-col p-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <a
                    href={`#${item.name.toLowerCase().replace(/\s/g, '-')}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200 flex items-center gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;