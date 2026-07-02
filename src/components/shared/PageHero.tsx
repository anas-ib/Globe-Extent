import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  breadcrumbs: { label: string; path: string }[];
}

export function PageHero({ title, subtitle, backgroundImage, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-24 overflow-hidden bg-primary">
      {/* Background with overlay */}
      {backgroundImage ? (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-primary/90" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-primary" />
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-accent/40 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]" />
          </div>
        </>
      )}

      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="max-w-4xl">
          <motion.nav 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 flex flex-wrap items-center text-sm font-sans tracking-wider"
          >
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.path}>
                {index > 0 && <span className="mx-3 text-white/40">/</span>}
                <Link 
                  to={crumb.path} 
                  className={`${
                    index === breadcrumbs.length - 1 
                      ? 'text-accent pointer-events-none' 
                      : 'text-white/70 hover:text-white transition-colors'
                  }`}
                >
                  {crumb.label}
                </Link>
              </React.Fragment>
            ))}
          </motion.nav>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 font-sans max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
