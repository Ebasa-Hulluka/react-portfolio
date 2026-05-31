import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-white via-slate-50 to-cyan-50/30 px-4 py-20 text-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-slate-800 dark:text-white sm:text-5xl">Projects</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-cyan-400" />
          <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-slate-700 dark:text-slate-300">
            Real full-stack projects built with practical features, clean interfaces, and production-focused workflows.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.10)] transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_24px_70px_rgba(8,145,178,0.16)] dark:border-white/10 dark:bg-slate-950/70 dark:hover:border-cyan-300/40"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent opacity-80" />
                <a
                  href={project.github}
                  aria-label={`Open ${project.title} on GitHub`}
                  className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-slate-950/80 text-xl text-white shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-black leading-snug text-slate-950 dark:text-white">{project.title}</h3>
                <p className="mt-3 min-h-40 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 transition group-hover:bg-cyan-50 group-hover:text-cyan-700 dark:bg-white/10 dark:text-slate-200 dark:group-hover:bg-cyan-300/10 dark:group-hover:text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <a
                    href={project.github}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-extrabold text-slate-700 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-slate-950"
                  >
                    <FaGithub /> GitHub <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
