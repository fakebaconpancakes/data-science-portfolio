import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, CalendarDays, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100vh-5rem)] items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_25%,#dbeafe_0%,transparent_38%),linear-gradient(to_bottom,#f8fafc,#ffffff)]" />
      <div
        className="absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 text-center md:px-12 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm shadow-blue-100"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />
          {personalInfo.headline}
        </motion.div>

        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative z-10 mx-auto max-w-5xl text-5xl font-serif font-bold leading-[1.05] tracking-tight text-slate-900 md:text-7xl lg:text-8xl"
          >
            Hi there, I&apos;m Abel
        </motion.h1>
        <div className="mx-auto mt-7 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" aria-hidden="true" />

        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl"
          >
            I&apos;m <span className="font-semibold text-slate-900">{personalInfo.name}</span>, {personalInfo.bio}
        </motion.p>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-2 text-sm font-semibold text-blue-800"
          >
            <CalendarDays className="w-4 h-4" />
            {personalInfo.availability}
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              className="group flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-slate-900 px-7 py-3.5 font-medium text-white shadow-lg shadow-slate-300 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-200 sm:w-auto"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex w-full items-center justify-center whitespace-nowrap rounded-full border border-slate-200 bg-white px-7 py-3.5 font-medium text-slate-900 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 sm:w-auto"
            >
              Get in touch
            </a>
          </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500"
        >
          <span className="font-medium text-slate-400">Explore the portfolio</span>
          <span className="hidden h-4 w-px bg-slate-300 sm:block" />
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-slate-900">
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-blue-700">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </motion.div>

        <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 transition-colors hover:text-blue-600 md:inline-flex">
          Scroll to explore
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
