import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 px-4 py-20 dark:bg-slate-900/45 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-slate-800 dark:text-white sm:text-5xl">Experience</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-cyan-400" />
          <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-slate-700 dark:text-slate-300">
            A focused timeline of academic growth, full-stack projects, and creative client work.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-white/10 sm:left-1/2" />
          <div className="space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative grid gap-6 sm:grid-cols-2"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <span className="absolute left-2 top-8 h-5 w-5 rounded-full border-4 border-white bg-cyan-400 shadow-[0_0_24px_rgba(6,182,212,0.45)] transition group-hover:scale-125 dark:border-slate-950 sm:left-1/2 sm:-ml-2.5" />
                <div
                  className={`relative ml-10 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-premium transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_24px_70px_rgba(6,182,212,0.16)] dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-cyan-300/60 sm:ml-0 ${
                    index % 2 === 1 ? 'sm:col-start-2' : ''
                  }`}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-cyan-400 opacity-0 transition group-hover:opacity-100" />
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-300">
                    {item.type}
                  </span>
                  <h3 className="mt-3 text-xl font-black text-slate-950 transition group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-200">
                    {item.title}
                  </h3>
                  <div className="mt-1 text-sm font-bold text-slate-500 dark:text-slate-400">{item.period}</div>
                  <p className="mt-4 text-sm leading-7 text-slate-600 transition group-hover:text-slate-700 dark:text-slate-300 dark:group-hover:text-slate-200">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
