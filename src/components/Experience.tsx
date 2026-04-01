import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Frontend & UI/UX Intern',
    company: 'Tech Startup Internship',
    period: 'Sep 2023 – Dec 2023',
    points: [
      'Designed critical user flows and detailed wireframes',
      'Built interactive, high-fidelity UI prototypes in Figma',
      'Improved overall app usability through iterative user feedback',
      'Bridged the gap between design and engineering teams',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-bold text-primary uppercase tracking-widest mb-4"
          >
            Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h3>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative pl-8 border-l border-white/10 pb-12 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary glow" />
              
              <div className="glass p-8 rounded-3xl hover:bg-white/10 transition-all">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-foreground">{exp.role}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <span className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
