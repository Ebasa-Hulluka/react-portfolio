import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../data/portfolio';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 px-4 py-12 dark:bg-slate-900/45 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-14">
          <h2 className="text-3xl font-black text-slate-800 dark:text-white sm:text-5xl">Testimonials</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-cyan-400 sm:mt-4 sm:w-20" />
          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-6 text-slate-700 dark:text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
            Feedback focused on clear communication, polished delivery, and dependable results.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.name}
              className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4 shadow-premium transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_24px_70px_rgba(6,182,212,0.16)] dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-cyan-300/60 sm:rounded-2xl sm:p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-cyan-400 opacity-0 transition group-hover:opacity-100" />
              <FaQuoteLeft className="text-2xl text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:text-cyan-300 sm:text-3xl" />
              <blockquote className="mt-3 text-sm font-semibold leading-6 text-slate-700 transition group-hover:text-slate-800 dark:text-slate-200 dark:group-hover:text-white sm:mt-5 sm:text-base sm:leading-8">
                "{testimonial.quote}"
              </blockquote>
              <figcaption className="mt-4 border-t border-slate-200 pt-4 transition group-hover:border-cyan-200 dark:border-white/10 dark:group-hover:border-cyan-300/30 sm:mt-6 sm:pt-5">
                <div className="font-black text-slate-950 transition group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-200">
                  {testimonial.name}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">{testimonial.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
