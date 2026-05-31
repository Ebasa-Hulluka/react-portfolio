import React from 'react';
import GlassCard from './GlassCard';
import { skills } from '../data/portfolio';

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-br from-slate-50 via-cyan-50/35 to-white px-4 py-20 text-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <h2 className="text-4xl font-black text-slate-800 dark:text-white sm:text-5xl">Skills</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-cyan-400" />
          <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-slate-700 dark:text-slate-300">
            Full-stack skills for building responsive interfaces, reliable APIs, and data-driven web applications.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {skills.map((group, index) => (
            <GlassCard
              key={group.category}
              className="rounded-xl border-cyan-100 bg-white p-4 shadow-[0_18px_50px_rgba(8,145,178,0.10)] dark:border-white/10 dark:bg-white/[0.06] dark:shadow-none sm:p-5"
              delay={index * 0.07}
            >
              <div className="mb-4 flex items-center gap-3 border-b border-slate-200 pb-3 dark:border-white/10">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-100 text-lg text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                  <group.icon />
                </span>
                <h3 className="text-lg font-black text-slate-950 dark:text-white">{group.category}</h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex min-h-32 flex-col items-center justify-center rounded-lg border border-slate-200 bg-slate-50/80 p-4 text-center transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300 hover:bg-cyan-50 hover:shadow-[0_18px_42px_rgba(6,182,212,0.18)] dark:border-white/10 dark:bg-slate-950/45 dark:hover:border-cyan-300/70 dark:hover:bg-cyan-400/10 dark:hover:shadow-[0_18px_42px_rgba(6,182,212,0.14)]"
                  >
                    <span className="mb-5 grid h-11 w-11 place-items-center text-4xl text-cyan-500 transition duration-300 group-hover:scale-110 group-hover:text-cyan-600 dark:text-cyan-300 dark:group-hover:text-cyan-200">
                      <skill.icon />
                    </span>
                    <span className="text-sm font-black leading-snug text-slate-950 transition duration-300 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-100">
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
