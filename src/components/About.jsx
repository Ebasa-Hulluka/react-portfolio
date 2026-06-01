import React from 'react';
import { FiBookOpen, FiDownload, FiMail, FiMapPin, FiPhone, FiUser } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';
import { profile } from '../data/portfolio';
import cvFile from '../assets/ebasa hulluka (1).pdf';

export default function About() {
  const personalInfo = [
    { label: 'Name', value: profile.name.trim(), icon: FiUser },
    { label: 'Email', value: profile.email, icon: FiMail },
    { label: 'Phone', value: profile.phone, icon: FiPhone },
    { label: 'Location', value: profile.location, icon: FiMapPin },
    { label: 'Education', value: 'Software Engineering', icon: FiBookOpen },
    { label: 'Freelance', value: 'Available', icon: FaHandshake, badge: true },
  ];

  return (
    <section id="about" className="bg-gradient-to-br from-slate-50 via-cyan-50/40 to-white px-4 py-24 text-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-black text-slate-800 dark:text-white sm:text-5xl">About Me</h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-cyan-400" />
          <p className="mt-7 text-lg font-medium text-slate-700 dark:text-slate-300">
            Get to know me and my professional journey
          </p>
        </div>

        <div className="mt-10 rounded-lg border border-cyan-100 bg-white p-5 shadow-[0_20px_60px_rgba(8,145,178,0.10)] transition duration-300 hover:scale-[1.01] dark:border-white/10 dark:bg-white/[0.06] sm:mt-16 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_minmax(340px,0.64fr)] lg:items-start">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white sm:text-3xl">{profile.name.trim()}</h3>
              <p className="mt-4 max-w-3xl text-sm font-normal leading-7 text-slate-700 dark:text-slate-300 sm:mt-7 sm:text-xl sm:leading-9">
                {profile.summary}
              </p>

              <a
                href={cvFile}
                download
                className="mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-cyan-400 px-6 text-sm font-black text-slate-950 shadow-[0_16px_36px_rgba(6,182,212,0.25)] transition hover:-translate-y-1 hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyan-300/30 sm:mt-8 sm:min-h-14 sm:px-8 sm:text-base"
              >
                <FiDownload /> Download My CV
              </a>
            </div>

            <div className="flex w-full flex-col justify-start rounded-lg border border-slate-200 bg-slate-50/70 px-5 py-5 dark:border-white/10 dark:bg-slate-950/25 lg:max-w-lg lg:justify-self-end lg:self-stretch">
              <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white">Personal Information</h3>
              <dl className="mt-7 grid gap-x-6 gap-y-6 sm:grid-cols-2">
                {personalInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-50 text-base text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                      <Icon />
                    </span>
                    <div className="min-w-0 flex-1">
                      <dt className="text-sm font-extrabold text-slate-950 dark:text-white">{item.label}</dt>
                      <dd className="mt-1 whitespace-nowrap text-[13px] font-medium leading-5 text-slate-700 dark:text-slate-300">
                      {item.badge ? (
                        <span className="inline-flex rounded-lg bg-cyan-400 px-2.5 py-1 text-xs font-black text-slate-950">
                          {item.value}
                        </span>
                      ) : (
                        item.value
                      )}
                      </dd>
                    </div>
                  </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
