import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BrandLockup } from '@/components/shared/BrandLockup';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Business Solutions', path: '/business-solutions' },
  { name: 'Software Services', path: '/software-services' },
  { name: 'Products', path: '/products' },
  { name: 'Event Management', path: '/event-management' },
  { name: 'About Us', path: '/about' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-primary/90 backdrop-blur-md shadow-lg py-4 border-b border-white/10' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-50 group">
              <BrandLockup size="sm" className="group-hover:opacity-90 transition-opacity duration-300" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex flex-1 justify-center items-center gap-8">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className={`relative text-sm uppercase tracking-widest font-medium transition-colors ${
                      isActive ? 'text-accent' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                        initial={false}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block relative z-50">
              <Link 
                to="/contact"
                className="group flex items-center gap-2 px-6 py-2.5 border border-accent/50 text-accent font-medium tracking-wide uppercase text-sm hover:bg-accent hover:text-white transition-all duration-300"
              >
                <span>Get in Touch</span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white p-2 relative z-50 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-xl pt-24 pb-8 px-6 flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-serif ${
                    location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path))
                      ? 'text-accent'
                      : 'text-white hover:text-accent'
                  } transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-auto pb-10">
              <div className="w-10 h-[1px] bg-accent/50 mb-6" />
              <Link
                to="/contact"
                className="flex items-center gap-3 text-lg font-serif text-white hover:text-accent transition-colors group w-full"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
