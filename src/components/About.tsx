import { motion } from 'motion/react';
import { education, personalInfo } from '../data';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start"
        >
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">Academic Background</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              I combine research experience, technical coursework, and hands-on analytics projects to investigate problems rigorously and communicate results clearly. My interests sit at the intersection of deep learning, big data, and applied decision-making.
            </p>
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="text-sm font-bold text-blue-900">{personalInfo.availability}</p>
              <p className="text-sm text-blue-800 mt-1">Open to opportunities in data science, machine learning, analytics, and research.</p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <GraduationCap className="w-48 h-48" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{education.degree}</h3>
                <p className="text-lg text-slate-700 font-medium mb-1">{education.institution}</p>
                <p className="text-slate-500 mb-6">{education.duration}</p>
                
                <p className="text-slate-600 mb-8">{education.description}</p>
                
                <div>
                  <div className="flex items-center gap-2 text-slate-900 font-semibold mb-4">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <h4>Relevant Coursework</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 shadow-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
