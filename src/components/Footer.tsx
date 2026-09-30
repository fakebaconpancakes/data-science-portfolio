import { Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-lg text-slate-400 max-w-xl mb-10">
          {personalInfo.availability} Feel free to reach out if you have an open role or just want to chat about data.
        </p>
        
        <a 
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-500 transition-colors mb-16 shadow-lg shadow-blue-900/20"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </a>
        
        <div className="w-full border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tight text-white">
            ANH<span className="text-blue-500">.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="w-5 h-5" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
