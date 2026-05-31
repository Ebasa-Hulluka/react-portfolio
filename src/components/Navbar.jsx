import React, { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { navItems } from '../data/portfolio';

export default function Navbar({ isDark, setIsDark }) {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/90">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="text-3xl font-black text-slate-950 dark:text-white">
            E<span className="text-cyan-400">ba</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeItem === item;

            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setActiveItem(item)}
                className={`relative rounded-full px-4 py-2.5 text-base font-bold transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/10 hover:text-cyan-500 dark:hover:text-cyan-300 ${
                  isActive
                    ? 'bg-cyan-400/10 text-cyan-500 after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-10 after:-translate-x-1/2 after:rounded-full after:bg-cyan-400 dark:text-cyan-300'
                    : 'text-slate-700 dark:text-white/80'
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setIsDark((value) => !value)}
            className="grid h-9 w-14 place-items-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-600 dark:border-white/10 dark:bg-white/10 dark:text-cyan-300 dark:hover:bg-white/15"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 bg-slate-100 text-slate-900 dark:border-white/10 dark:bg-white/10 dark:text-white lg:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-5 shadow-premium backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 text-left">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  setActiveItem(item);
                  setOpen(false);
                }}
                className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-bold transition hover:bg-cyan-400/10 hover:pl-5 hover:text-cyan-600 dark:hover:text-cyan-300 ${
                  activeItem === item
                    ? 'bg-cyan-400/10 text-cyan-600 shadow-[inset_4px_0_0_rgba(34,211,238,1)] dark:text-cyan-300'
                    : 'text-slate-700 dark:text-white/80'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
