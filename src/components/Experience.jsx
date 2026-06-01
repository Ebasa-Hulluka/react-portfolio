import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 px-4 py-12 dark:bg-slate-900/45 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-14">
          <h2 className="text-3xl font-black text-slate-800 dark:text-white sm:text-5xl">Experience</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-cyan-400 sm:mt-4 sm:w-20" />
          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-6 text-slate-700 dark:text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
            A focused timeline of academic growth, full-stack projects, and creative client work.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-slate-200 dark:bg-white/10 sm:left-1/2" />
          <div className="space-y-5 sm:space-y-8">
            {experiences.map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative grid gap-4 sm:grid-cols-2 sm:gap-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <span className="absolute left-2 top-6 h-4 w-4 rounded-full border-[3px] border-white bg-cyan-400 shadow-[0_0_24px_rgba(6,182,212,0.45)] transition group-hover:scale-125 dark:border-slate-950 sm:left-1/2 sm:top-8 sm:-ml-2.5 sm:h-5 sm:w-5 sm:border-4" />
                <div
                  className={`relative ml-8 overflow-hidden rounded-lg border border-slate-200 bg-white p-4 shadow-premium transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_24px_70px_rgba(6,182,212,0.16)] dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-cyan-300/60 sm:ml-0 sm:rounded-2xl sm:p-6 ${
                    index % 2 === 1 ? 'sm:col-start-2' : ''
                  }`}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-cyan-400 opacity-0 transition group-hover:opacity-100" />
                  <span className="text-[0.65rem] font-black uppercase tracking-[0.16em] text-cyan-600 dark:text-cyan-300 sm:text-xs sm:tracking-[0.22em]">
                    {item.type}
                  </span>
                  <h3 className="mt-2 text-base font-black text-slate-950 transition group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-200 sm:mt-3 sm:text-xl">
                    {item.title}
                  </h3>
                  <div className="mt-1 text-xs font-bold text-slate-500 dark:text-slate-400 sm:text-sm">{item.period}</div>
                  <p className="mt-2 text-xs leading-6 text-slate-600 transition group-hover:text-slate-700 dark:text-slate-300 dark:group-hover:text-slate-200 sm:mt-4 sm:text-sm sm:leading-7">
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
