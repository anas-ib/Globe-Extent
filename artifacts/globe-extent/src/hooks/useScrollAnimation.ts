import React, { useEffect } from 'react';
import { useAnimation, useInView } from 'framer-motion';

export function useScrollAnimation(ref: React.RefObject<Element | null>) {
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return controls;
}

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const fadeLeftVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const fadeRightVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};
