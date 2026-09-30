import { motion } from 'motion/react';
import { papersData } from '../data';
import { FileText, ExternalLink, Download } from 'lucide-react';

export default function Papers() {
  if (papersData.length === 0) return null;

  return (
    <section id="papers" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Publications & Research</h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            My academic contributions, pre-prints, and published papers in machine learning and data science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {papersData.map((paper, idx) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight mb-2">{paper.title}</h3>
                  <p className="text-sm text-slate-600 font-medium mb-1">{paper.authors}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5">
                    <span className="font-semibold text-slate-700">{paper.venue}</span>
                    <span>•</span>
                    <span>{paper.date}</span>
                  </p>
                </div>
              </div>
              
              <div className="mt-4 mb-6 text-sm text-slate-600 leading-relaxed flex-grow">
                <strong>Abstract:</strong> {paper.abstract}
              </div>
              
              <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-slate-50">
                {paper.link && (
                  <a 
                    href={paper.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Read Paper
                  </a>
                )}
                {paper.pdfUrl && (
                  <a 
                    href={paper.pdfUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    PDF
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
