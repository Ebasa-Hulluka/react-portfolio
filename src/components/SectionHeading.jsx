import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-300">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}
    </motion.div>
  );
}
