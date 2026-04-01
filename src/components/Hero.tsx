import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for opportunities
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight">
            Hi, I'm <span className="text-gradient">Dhruv Mishra</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-foreground/90 mb-4 max-w-2xl leading-snug">
            Frontend Engineer focused on building clean, responsive, and production-ready web applications.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            I turn ideas into functional digital products using modern frontend technologies.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-white rounded-full font-medium flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#resume"
              className="px-8 py-3 glass rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              Resume <FileText size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 glass rounded-full font-medium flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Philioraptor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dhruv-mishra-5b0001338/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:dhruvm05062004@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass rounded-3xl p-8 aspect-square flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
             {/* Floating Tech Badges */}
             <div className="grid grid-cols-2 gap-4 w-full h-full p-4 relative">
                {[
                  { name: 'React', delay: 0 },
                  { name: 'Next.js', delay: 0.2 },
                  { name: 'Tailwind CSS', delay: 0.4 },
                  { name: 'TypeScript', delay: 0.6 }
                ].map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      delay: tech.delay,
                      ease: "easeInOut"
                    }}
                    className={`w-full h-full glass rounded-2xl flex items-center justify-center text-sm md:text-base font-semibold text-primary/90 border border-primary/20 shadow-lg glow bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-xl ${i % 2 === 0 ? 'mt-8' : 'mb-8'}`}
                  >
                    {tech.name}
                  </motion.div>
                ))}
             </div>
             
             {/* Decorative lines */}
             <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
          </div>
          
          {/* Glow behind the card */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[40px] blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
