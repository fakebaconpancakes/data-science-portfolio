import { motion } from 'motion/react';
import { timelineData } from '../data';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Experience & Education</h2>
          <p className="text-lg text-slate-600">
            My academic journey and professional roles in data science.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-slate-100"></div>
          {timelineData.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-12 pl-8 md:pl-0 relative flex flex-col md:flex-row gap-6 md:gap-12 items-start group ${
                item.side === 'left' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white shadow-sm z-10 group-hover:scale-125 transition-transform duration-300"></div>

              {/* Left Column (Empty on mobile, contains date on md+) */}
              <div className={`hidden md:flex md:w-1/2 pt-0.5 ${
                item.side === 'left' ? 'justify-start text-left pl-8' : 'justify-end text-right pr-8'
              }`}>
                <span className="text-sm font-bold text-blue-600">{item.date}</span>
              </div>

              {/* Content alternates sides for concurrent roles and projects. */}
              <div className={`md:w-1/2 ${
                item.side === 'left' ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="md:hidden inline-block mb-3 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold">
                  {item.date}
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  {item.type === 'education' ? (
                    <GraduationCap className="w-5 h-5 text-slate-400" />
                  ) : (
                    <Briefcase className="w-5 h-5 text-slate-400" />
                  )}
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                </div>
                <h4 className="text-base font-medium text-slate-700 mb-3">{item.organization}</h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
