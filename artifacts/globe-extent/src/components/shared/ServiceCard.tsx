import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description?: string;
  icon: React.ReactElement<{ className?: string }>;
  linkTo: string;
  delay?: number;
}

export function ServiceCard({ title, description, icon, linkTo, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="group h-full"
    >
      <Link to={linkTo} className="block h-full">
        <div className="bg-white border border-border h-full p-8 md:p-10 relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
          {/* Top border highlight */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-yellow-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
          
          <div className="w-14 h-14 bg-primary/5 text-primary flex items-center justify-center rounded-sm mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-7 h-7' })}
          </div>
          
          <h3 className="text-xl md:text-2xl font-serif text-primary mb-4 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          
          {description && (
            <p className="text-muted-foreground mb-8 font-sans leading-relaxed">
              {description}
            </p>
          )}
          
          <div className="mt-auto flex items-center text-primary font-medium tracking-wide text-sm group-hover:text-accent transition-colors">
            Explore Service 
            <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
