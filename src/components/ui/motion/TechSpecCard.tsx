'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TechSpecCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function TechSpecCard({ icon, title, description, className = '' }: TechSpecCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl bg-card p-6 group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true }}
    >
      {/* Background gradient effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-300"
        initial={false}
        whileHover={{ opacity: 1 }}
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className="mb-4 relative w-12 h-12"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.h3
          className="text-lg font-bold text-primary mb-2"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
        >
          {description}
        </motion.p>

        {/* Hover line effect */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-primary/50"
          initial={{ width: "0%" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
} 