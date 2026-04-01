import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Code2, Languages, Wrench, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code2 className="text-primary" />,
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Languages',
    icon: <Languages className="text-secondary" />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java'],
  },
  {
    title: 'Tools',
    icon: <Wrench className="text-accent" />,
    skills: ['Git', 'GitHub', 'Figma', 'Firebase', 'Vercel'],
  },
  {
    title: 'Concepts',
    icon: <Lightbulb className="text-yellow-500" />,
    skills: [
      'Responsive Design',
      'Component-Based Architecture',
      'API Integration',
      'State Management',
      'Performance Optimization',
      'UI/UX Principles',
    ],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-bold text-primary uppercase tracking-widest mb-4"
          >
            Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            My <span className="text-gradient">Technical Arsenal</span>
          </motion.h3>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col h-full glass p-8 rounded-[2rem] hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group border border-white/5 hover:border-white/10 flex-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2rem] pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 border border-white/10 group-hover:border-primary/30 relative z-10 shadow-lg">
                {category.icon}
              </div>
              <h4 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors relative z-10">{category.title}</h4>
              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 rounded-full bg-black/20 border border-white/5 text-xs font-semibold text-muted-foreground hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-colors shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
