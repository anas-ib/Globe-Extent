import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="min-h-screen bg-primary flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="text-center px-4 relative z-10">
        <h1 className="text-9xl font-serif text-accent mb-6">404</h1>
        <h2 className="text-3xl font-serif text-white mb-6">Page Not Found</h2>
        <p className="text-white/60 font-sans mb-10 max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <button className="group relative px-8 py-4 bg-white text-primary font-medium flex items-center justify-center gap-3 overflow-hidden shadow-lg mx-auto">
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <ArrowLeft className="w-5 h-5 relative z-10 group-hover:-translate-x-1 transition-transform" />
            <span className="relative z-10 tracking-wide uppercase text-sm">Return Home</span>
          </button>
        </Link>
      </div>
    </motion.main>
  );
}
