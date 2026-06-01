import React from 'react';
import GlassCard from './GlassCard';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-slate-50 via-cyan-50/35 to-white px-4 py-12 text-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-14">
          <h2 className="text-3xl font-black text-slate-800 dark:text-white sm:text-5xl">Skills</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-cyan-400 sm:mt-4 sm:w-20" />
          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-6 text-slate-700 dark:text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
            Full-stack skills for building responsive interfaces, reliable APIs, and data-driven web applications.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
          {skills.map((group, index) => (
            <GlassCard
              key={group.category}
              className="rounded-lg border-cyan-100 bg-white p-3 shadow-[0_18px_50px_rgba(8,145,178,0.10)] dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none sm:rounded-xl sm:p-5"
              delay={index * 0.07}
            >
              <div className="mb-3 flex items-center gap-2 border-b border-slate-200 pb-3 dark:border-white/10 sm:mb-4 sm:gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-cyan-100 text-base text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300 sm:h-10 sm:w-10 sm:text-lg">
                  <group.icon />
                </span>
                <h3 className="text-base font-black text-slate-950 dark:text-white sm:text-lg">{group.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex min-h-20 flex-col items-center justify-center rounded-lg border border-slate-200 bg-slate-50/80 p-2 text-center transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300 hover:bg-cyan-50 hover:shadow-[0_18px_42px_rgba(6,182,212,0.18)] dark:border-white/10 dark:bg-slate-950/45 dark:hover:border-cyan-300/70 dark:hover:bg-cyan-400/10 dark:hover:shadow-[0_18px_42px_rgba(6,182,212,0.14)] sm:min-h-32 sm:p-4"
                  >
                    <span className="mb-2 grid h-8 w-8 place-items-center text-2xl text-cyan-500 transition duration-300 group-hover:scale-110 group-hover:text-cyan-600 dark:text-cyan-300 dark:group-hover:text-cyan-200 sm:mb-5 sm:h-11 sm:w-11 sm:text-4xl">
                      <skill.icon />
                    </span>
                    <span className="text-[0.72rem] font-black leading-tight text-slate-950 transition duration-300 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-100 sm:text-sm sm:leading-snug">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
