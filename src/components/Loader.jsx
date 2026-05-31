import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-slate-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ delay: 1.15, duration: 0.45 }}
    >
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border-2 border-cyan-300/20" />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-4 rounded-full bg-cyan-300/10 shadow-[0_0_30px_rgba(6,182,212,0.35)]" />
      </div>
    </motion.div>
  );
}
