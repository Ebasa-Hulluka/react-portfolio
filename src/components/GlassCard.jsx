import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={`border border-white/50 bg-white/75 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay }}
    >
      {children}
    </motion.div>
  );
}
