import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUpVariant } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

export function AnimatedSection({ children, className = '', delay = 0, id }: AnimatedSectionProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const controls = useScrollAnimation(ref as React.RefObject<Element | null>);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUpVariant}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
