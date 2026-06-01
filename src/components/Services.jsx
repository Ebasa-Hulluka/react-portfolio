import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/portfolio';

export default function Services() {
  return (
    <section id="services" className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-14">
          <h2 className="text-3xl font-black text-slate-800 dark:text-white sm:text-5xl">Services</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-cyan-400 sm:mt-4 sm:w-20" />
          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-6 text-slate-700 dark:text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
            Practical services for reliable web development, APIs, responsive interfaces, and creative delivery.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4 shadow-premium transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_24px_70px_rgba(6,182,212,0.18)] dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-cyan-300/60 sm:rounded-2xl sm:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.07 }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-cyan-400 opacity-0 transition group-hover:opacity-100" />
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-slate-950 text-xl text-cyan-300 transition duration-300 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950 dark:bg-white dark:text-slate-950 sm:h-14 sm:w-14 sm:text-2xl">
                <service.icon />
              </span>
              <h3 className="mt-4 text-base font-black text-slate-950 transition group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-200 sm:mt-6 sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-2 text-xs leading-6 text-slate-600 transition group-hover:text-slate-700 dark:text-slate-300 dark:group-hover:text-slate-200 sm:mt-4 sm:text-sm sm:leading-7">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
