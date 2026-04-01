import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
              <img
                src="https://picsum.photos/seed/dhruv/800/800"
                alt="Dhruv Mishra"
                className="w-full h-full object-cover rounded-2xl opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">About & Edge</h2>
            <h3 className="text-4xl font-bold mb-6 tracking-tight">
              Building <span className="text-gradient">real-world</span> digital products.
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I am a Frontend Engineer dedicated to translating complex ideas into highly polished, user-centric web applications. 
              My expertise lies in React and modern UI/UX principles, focusing entirely on performance, clean aesthetics, and shipping production-ready code.
            </p>

            <div className="mb-10">
              <h4 className="text-xl font-bold mb-4 text-foreground">Why work with me?</h4>
              <ul className="space-y-3">
                {[
                  "Strong UI implementation skills with an eye for detail",
                  "Deep focus on responsive, accessible, and clean design",
                  "Fast learner with a highly hands-on, builder approach",
                  "Proven experience developing functional, real-world applications"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">✦</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
              <div>
                <h4 className="text-3xl font-extrabold text-foreground mb-1">2+</h4>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-foreground mb-1">10+</h4>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
