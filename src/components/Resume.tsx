import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Download, FileText, CheckCircle2 } from 'lucide-react';

export default function Resume() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    'Frontend Engineer (React + Tailwind)',
    'Built AI-based applications',
    'Experience with API integration and UI systems',
  ];

  return (
    <section id="resume" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-bold text-primary uppercase tracking-widest mb-4"
          >
            Credentials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            My <span className="text-gradient">Resume</span>
          </motion.h3>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="lg:col-span-1 space-y-8"
          >
            <div className="glass p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FileText className="text-primary" /> Key Highlights
              </h4>
              <ul className="space-y-4">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20">
              <Download size={20} /> Download Full Resume
            </button>
            
            <p className="text-xs text-center text-muted-foreground italic">
              * PDF Viewer may not load in all iframe environments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 glass rounded-3xl overflow-hidden aspect-[3/4] md:aspect-video relative"
          >
            {/* Real iframe embedding the resume */}
            <div className="absolute inset-0 p-4">
              <iframe 
                src="/resume.pdf" 
                className="w-full h-full border-none rounded-2xl bg-white shadow-inner" 
                title="Dhruv Mishra Resume"
              /> 
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
