import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-3xl md:text-5xl font-serif mb-6 leading-tight ${light ? 'text-white' : 'text-primary'}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`text-lg md:text-xl font-sans max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-muted-foreground'}`}>
            {subtitle}
          </p>
        )}
        <div className={`w-20 h-1 bg-accent mt-8 ${centered ? 'mx-auto' : ''}`} />
      </motion.div>
    </div>
  );
}
