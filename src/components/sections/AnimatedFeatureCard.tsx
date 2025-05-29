'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedFeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function AnimatedFeatureCard({ icon, title, description }: AnimatedFeatureCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-card p-6 group">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-300"
        initial={false}
        whileHover={{ opacity: 1 }}
      />
      <div className="relative z-10">
        <motion.div
          className="mb-4 flex justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.div>
        <motion.h3
          className="text-lg font-bold text-primary mb-2 text-center"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-sm text-muted-foreground text-center"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
} 