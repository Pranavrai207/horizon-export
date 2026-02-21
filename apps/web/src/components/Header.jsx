
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Quality Checks', path: '/quality-checks' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md shadow-2xl'
            : 'bg-black/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 px-6">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="https://horizons-cdn.hostinger.com/38727cf0-565e-4ae8-b59b-37f2b9952d98/7885caf093d35e71a809bbaf759d8500.jpg"
                alt="JIANSH Spark Plugs Logo"
                className="h-12 w-12 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-wider">
                  JIANSH
                </span>
                <span className="text-xs text-[#FF3333] font-semibold uppercase tracking-widest">
                  Spark Plugs
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 relative group ${
                    location.pathname === link.path
                      ? 'text-[#FF3333]'
                      : 'text-white hover:text-[#FF3333]'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF3333] transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-[#FF3333] transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-20 right-0 bottom-0 w-full bg-black/98 backdrop-blur-lg z-40 md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8 px-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full"
                >
                  <Link
                    to={link.path}
                    className={`inline-block text-2xl font-bold uppercase tracking-wider transition-all duration-300 px-6 py-3 rounded w-full text-center ${
                      location.pathname === link.path
                        ? 'text-white bg-[#FF3333]'
                        : 'text-[#FF3333] hover:text-white hover:bg-[#FF3333] border-2 border-[#FF3333]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
