import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaFileAlt } from 'react-icons/fa';
import { skills } from '../data/portfolio';
import { AnimatedLineBackground, FloatingElements } from './AnimatedBackground';
import resumePdf from '../assets/ebasa hulluka (1).pdf';

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-surface px-4 py-10 text-slate-100 sm:px-6 sm:py-24 lg:px-8"
    >
      <AnimatedLineBackground colorScheme="cyan-purple" />
      <FloatingElements />

      <div className="relative mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <motion.div
          className="overflow-hidden rounded-lg border border-cyan-300/15 bg-[#0b1224]/92 p-3 shadow-[0_22px_80px_rgba(2,6,23,0.42),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl sm:p-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-3 flex flex-col gap-3 border-b border-cyan-300/10 pb-4 sm:mb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pb-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-400/10 text-lg text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.14)] sm:h-11 sm:w-11 sm:text-xl">
                <FaCode />
              </span>
              <div>
                <h2 className="text-xl font-black leading-tight text-white sm:text-2xl">Developer Skills</h2>
                <p className="mt-1 text-xs font-semibold text-slate-400 sm:text-sm">Professional toolkit & expertise</p>
              </div>
            </div>

            <a
              href={resumePdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-600/60 bg-slate-800/75 px-4 text-sm font-black text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-slate-800 sm:w-auto"
            >
              <FaFileAlt className="text-base text-slate-300" />
              View Resume
            </a>
          </div>

          <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
            {skills.map((group, index) => (
              <motion.div
                key={group.category}
                className="rounded-lg border border-cyan-300/10 bg-slate-900/45 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="mb-3 flex items-center gap-2.5 sm:mb-4 sm:gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-cyan-300/10 bg-gradient-to-br from-cyan-400/15 to-purple-500/20 text-base text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.12)] sm:h-10 sm:w-10 sm:text-lg">
                    <group.icon />
                  </span>
                  <div>
                    <h3 className="text-base font-black text-slate-100 sm:text-lg">{group.category}</h3>
                    <p className="mt-0.5 text-[0.7rem] font-medium leading-tight text-slate-400 sm:text-sm">{group.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-4">
                  {group.items.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      className="group flex min-h-20 flex-col items-center justify-center rounded-md border border-cyan-300/10 bg-slate-800/45 p-2 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-slate-800/70 hover:shadow-[0_14px_34px_rgba(6,182,212,0.1)] sm:min-h-32 sm:p-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + skillIdx * 0.03 }}
                    >
                      <motion.span
                        className={`mb-2 grid h-8 w-8 place-items-center text-3xl sm:mb-3 sm:h-10 sm:w-10 sm:text-4xl ${skill.color}`}
                        animate={{ scale: [1, 1.06, 1] }}
                        transition={{ duration: 2.2, delay: skillIdx * 0.12, repeat: Infinity }}
                      >
                        <skill.icon />
                      </motion.span>
                      <span className="text-[0.68rem] font-black leading-tight text-slate-100 sm:text-sm">{skill.name}</span>
                      <span className="mt-1 text-[0.62rem] font-semibold leading-tight text-slate-400 sm:mt-2 sm:text-xs">
                        {skill.subtitle}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
