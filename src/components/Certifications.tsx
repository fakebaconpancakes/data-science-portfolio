import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Certifications & Recognition</h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Continuous learning, practical programmes, and academic recognition supporting my data science journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificationsData.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 leading-snug">{certification.title}</h3>
                <p className="text-sm text-slate-700 mt-1">{certification.issuer}</p>
                <p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                  {certification.type}
                </p>
                {certification.link && (
                  <a
                    href={certification.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-3 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View credential
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
