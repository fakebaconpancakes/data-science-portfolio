import { motion } from 'motion/react';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-left order-2 lg:order-1">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 tracking-tight leading-tight mb-6"
          >
            Turning complex data into <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              clear insights.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed"
          >
            Hi, I'm <span className="font-semibold text-slate-900">{personalInfo.name}</span>. {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-800 mb-8"
          >
            <CalendarDays className="w-4 h-4" />
            {personalInfo.availability}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a 
              href="#projects"
              className="w-full sm:w-auto whitespace-nowrap px-6 py-3.5 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto whitespace-nowrap px-6 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-colors flex items-center justify-center"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative justify-self-center lg:justify-self-end order-1 lg:order-2 mb-8 lg:mb-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]">
            <div className="absolute inset-0 bg-blue-600 rounded-3xl translate-x-4 translate-y-4 opacity-20"></div>
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name} 
              className="relative w-full h-full object-cover rounded-3xl border border-slate-100 shadow-2xl z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
