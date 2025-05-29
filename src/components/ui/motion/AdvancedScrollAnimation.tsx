'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface AdvancedScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  effect?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale' | 'rotate';
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export function AdvancedScrollAnimation({
  children,
  className = '',
  effect = 'fade',
  duration = 0.5,
  delay = 0,
  threshold = 0.2,
  once = true,
}: AdvancedScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Define animation variants based on effect type
  const getInitialStyles = () => {
    switch (effect) {
      case 'slide-up':
        return { opacity: 0, y: 50 };
      case 'slide-down':
        return { opacity: 0, y: -50 };
      case 'slide-left':
        return { opacity: 0, x: 50 };
      case 'slide-right':
        return { opacity: 0, x: -50 };
      case 'scale':
        return { opacity: 0, scale: 0.8 };
      case 'rotate':
        return { opacity: 0, rotate: -10 };
      case 'fade':
      default:
        return { opacity: 0 };
    }
  };

  const getAnimateStyles = () => {
    switch (effect) {
      case 'slide-up':
      case 'slide-down':
        return { opacity: 1, y: 0 };
      case 'slide-left':
      case 'slide-right':
        return { opacity: 1, x: 0 };
      case 'scale':
        return { opacity: 1, scale: 1 };
      case 'rotate':
        return { opacity: 1, rotate: 0 };
      case 'fade':
      default:
        return { opacity: 1 };
    }
  };

  // Add parallax effect for certain animations
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    effect.includes('slide') ? [20, -20] : [0, 0]
  );

  return (
    <motion.div
      ref={ref}
      initial={getInitialStyles()}
      animate={isInView ? getAnimateStyles() : getInitialStyles()}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      style={{
        y: effect.includes('slide') ? y : undefined,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 