import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { profile, navItems } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50/30 px-4 py-12 text-slate-950 dark:border-white/10 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="grid gap-8 rounded-2xl border border-cyan-100 bg-white p-6 shadow-[0_18px_50px_rgba(8,145,178,0.10)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_24px_70px_rgba(0,0,0,0.18)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <a href="#home" className="inline-flex items-baseline text-2xl font-black tracking-tight text-slate-950 dark:text-white">
              E<span className="text-cyan-400">ba</span>
            </a>
            <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-slate-600 dark:text-slate-300">
              Full-stack web development, REST APIs, responsive interfaces, and professional creative delivery.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:max-w-md md:justify-end">
            {navItems.slice(0, 6).map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="inline-flex min-h-10 items-center rounded-full border border-slate-200 px-4 text-sm font-bold text-slate-600 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950 dark:border-white/10 dark:text-slate-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 text-sm font-semibold text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>{`\u00a9 ${new Date().getFullYear()} ${profile.name.trim()}. All rights reserved.`}</p>
          <a href="#contact" className="inline-flex w-fit items-center gap-2 text-cyan-600 transition hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200">
            Let&apos;s build something <FiArrowUpRight />
          </a>
        </div>
      </div>
    </footer>
  );
}
