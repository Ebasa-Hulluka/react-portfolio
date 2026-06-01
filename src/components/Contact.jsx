import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { FiMail, FiSend } from 'react-icons/fi';
import GlassCard from './GlassCard';
import { profile } from '../data/portfolio';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const contactItems = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: FiMail,
    },
    {
      label: 'GitHub',
      value: 'github.com/Ebasa-Hulluka',
      href: 'https://github.com/Ebasa-Hulluka',
      icon: FaGithub,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ebasa-huluka',
      href: 'https://www.linkedin.com/in/ebasa-huluka',
      icon: FaLinkedin,
    },
    {
      label: 'Telegram',
      value: '@ebo1234e',
      href: 'https://t.me/ebo1234e',
      icon: FaTelegramPlane,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-14">
          <h2 className="text-3xl font-black text-slate-800 dark:text-white sm:text-5xl">Contact</h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-cyan-400 sm:mt-4 sm:w-20" />
          <p className="mx-auto mt-4 max-w-3xl text-sm font-medium leading-6 text-slate-700 dark:text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
            Send a message about the website, API, full-stack app, or video project you want to build.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <GlassCard className="rounded-lg p-4 sm:rounded-2xl sm:p-6">
            <h3 className="text-xl font-black text-slate-800 dark:text-white sm:text-2xl">Contact Info</h3>
            <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-5">
              {contactItems.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center gap-3 rounded-lg transition hover:-translate-y-1 sm:gap-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-cyan-400 text-lg text-slate-950 shadow-[0_12px_26px_rgba(6,182,212,0.22)] transition group-hover:rotate-3 group-hover:bg-cyan-300 sm:h-12 sm:w-12 sm:rounded-xl sm:text-xl">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-black text-slate-800 dark:text-white sm:text-lg">{label}</span>
                    <span className="mt-0.5 block break-words text-sm font-medium text-slate-700 dark:text-slate-300">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
            <h4 className="mt-6 text-lg font-black text-slate-800 dark:text-white sm:mt-8 sm:text-xl">Follow Me</h4>
            <div className="mt-4 flex gap-3">
              {profile.socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-lg text-slate-800 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-cyan-400 dark:hover:text-slate-950"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="rounded-lg p-4 sm:rounded-2xl sm:p-6" delay={0.08}>
            <form className="grid gap-3.5" onSubmit={handleSubmit}>
              <div className="grid gap-3.5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                  Name
                  <input className="min-h-11 rounded-lg border border-slate-200 bg-white px-4 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-300/20 dark:border-white/10 dark:bg-white/10 dark:text-white" placeholder="Your name" />
                </label>
                <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                  Email
                  <input type="email" className="min-h-11 rounded-lg border border-slate-200 bg-white px-4 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-300/20 dark:border-white/10 dark:bg-white/10 dark:text-white" placeholder="you@example.com" />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                Project Type
                <input className="min-h-11 rounded-lg border border-slate-200 bg-white px-4 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-300/20 dark:border-white/10 dark:bg-white/10 dark:text-white" placeholder="Full-stack app, REST API, frontend UI..." />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                Message
                <textarea className="min-h-28 resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-300/20 dark:border-white/10 dark:bg-white/10 dark:text-white" placeholder="Tell me about your goals, timeline, and expected deliverables." />
              </label>
              <button type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-cyan-500 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-300">
                Send Message <FiSend />
              </button>
              {sent && (
                <div className="rounded-lg border border-cyan-300/50 bg-cyan-400/10 px-4 py-3 text-sm font-bold text-cyan-700 dark:text-cyan-200">
                  Message captured. Connect this form to EmailJS, Formspree, or your backend API when you deploy.
                </div>
              )}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
