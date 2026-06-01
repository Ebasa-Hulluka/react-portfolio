import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-white via-slate-50 to-cyan-50/30 px-4 py-12 text-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-14">
          <h2 className="text-3xl font-black text-slate-800 dark:text-white sm:text-5xl">Projects</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-cyan-400 sm:mt-4 sm:w-20" />
          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-6 text-slate-700 dark:text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
            Real full-stack projects built with practical features, clean interfaces, and production-focused workflows.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
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
                  className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-slate-950/80 text-lg text-white shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950 sm:right-4 sm:top-4 sm:h-11 sm:w-11 sm:text-xl"
                >
                  <FaGithub />
                </a>
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h3 className="text-base font-black leading-snug text-slate-950 dark:text-white sm:text-xl">{project.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300 sm:mt-3 sm:min-h-40 sm:text-sm sm:leading-7">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-slate-100 px-2 py-1.5 text-[0.68rem] font-bold text-slate-700 transition group-hover:bg-cyan-50 group-hover:text-cyan-700 dark:bg-white/10 dark:text-slate-200 dark:group-hover:bg-cyan-300/10 dark:group-hover:text-cyan-200 sm:rounded-lg sm:px-3 sm:py-2 sm:text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4 sm:pt-6">
                  <a
                    href={project.github}
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 text-xs font-extrabold text-slate-700 transition hover:border-slate-950 hover:bg-slate-950 hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-slate-950 sm:min-h-11 sm:px-4 sm:text-sm"
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
