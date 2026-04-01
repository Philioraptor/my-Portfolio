import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Sparkles, Brain, Layout } from 'lucide-react';

const featuredProjects = [
  {
    title: 'Locker AI',
    problem: 'Users spend an excessive amount of time reading and manually digesting long PDF documents.',
    solution: 'Developed an AI-powered SaaS platform that extracts text and generates structured summaries instantly.',
    impact: 'Saves users hours of reading time, increasing productivity and learning efficiency.',
    link: 'https://cloud-computing-project-9p77.onrender.com/',
    github: '#', // Add actual GitHub link if available
    tags: ['React', 'Node.js', 'AWS S3', 'Gemini API'],
    icon: <Brain className="text-primary" />,
    image: 'https://picsum.photos/seed/locker/800/450',
  },
  {
    title: 'Cyber Heist',
    problem: 'Learning cryptography concepts is often highly theoretical and difficult to visualize.',
    solution: 'Built a gamified cybersecurity platform featuring practical encryption missions and leaderboards.',
    impact: 'Increased engagement by transforming dry theory into an interactive hacker-themed experience.',
    link: 'https://cyberheist.onrender.com/',
    github: '#', // Add actual GitHub link if available
    tags: ['React', 'Tailwind', 'Gamification'],
    icon: <Sparkles className="text-secondary" />,
    image: 'https://picsum.photos/seed/cyber/800/450',
  },
];

const aiProjects = [
  {
    title: 'Sanjeevani AI',
    problem: 'Access to structured medical or health-related assistance is often fragmented.',
    solution: 'Created an AI-based assistant interface offering clear guidance and a user-friendly design.',
    impact: 'Improves user experience and accessibility for AI-driven health support paradigms.',
    link: 'https://maroomuze.vercel.app/',
    github: '#',
    tags: ['AI', 'UI/UX', 'Product'],
  },
  {
    title: 'Scout AI',
    problem: 'Discovering detailed and structural company insights usually requires manual data aggregation.',
    solution: 'Engineered a data exploration dashboard for browsing company profiles and related analytics.',
    impact: 'Streamlines company research with a clean, responsive data presentation layer.',
    link: 'https://scout-ai-five.vercel.app/companies',
    github: '#',
    tags: ['Data', 'AI', 'Insights'],
  },
];

const miniProjects = [
  { 
    title: 'Text Compare Tool', 
    problem: 'Checking text diffs manually is error-prone.', 
    solution: 'Built a quick inline visual diff checker.',
    impact: 'Saves developer time.',
    link: 'https://textcompare-kohl.vercel.app/'
  },
  { 
    title: 'Background Generator', 
    problem: 'Writing complex CSS gradients is tedious.', 
    solution: 'Created a visual gradient builder tool.',
    impact: 'Accelerates UI prototyping.',
    link: 'https://day4-rbg.vercel.app/'
  },
  { 
    title: 'Prompt Writer Tool', 
    problem: 'Crafting quality AI prompts is difficult.', 
    solution: 'Developed a structured prompt engineer helper.',
    impact: 'Enhances AI output quality.',
    link: 'https://day3-prompt-writer.vercel.app/'
  },
  { 
    title: 'Color Palette Generator', 
    problem: 'Finding harmonious colors is hard.', 
    solution: 'Built a tool generating matching hex codes.',
    impact: 'Boosts design workflows.',
    link: 'https://day-2-color-pallete-generator.vercel.app/'
  },
  { 
    title: 'Landing Page Generator', 
    problem: 'Building landing pages from scratch is slow.', 
    solution: 'Created a fast LPG template builder.',
    impact: 'Rapid page deployment.',
    link: 'https://day-1-lpg-landing-page-generator.vercel.app/'
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-bold text-primary uppercase tracking-widest mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            Selected <span className="text-gradient">Works</span>
          </motion.h3>
        </div>

          <div ref={ref} className="space-y-24">
          {/* Featured Projects */}
          <div className="grid grid-cols-1 gap-16">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center glass p-8 md:p-12 rounded-[2rem] hover:bg-white/[0.03] hover:shadow-2xl hover:shadow-primary/10 transition-all border border-white/5 hover:border-white/10"
              >
                <div className="order-2 lg:order-1 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        {project.icon}
                      </div>
                      <span className="text-xs font-bold text-primary tracking-widest uppercase">Featured Project</span>
                    </div>
                    <h4 className="text-4xl font-extrabold mb-6 tracking-tight group-hover:text-primary transition-colors">{project.title}</h4>
                    
                    <div className="space-y-4 mb-8">
                      <div>
                        <span className="text-sm font-bold text-foreground/80 uppercase tracking-wider block mb-1">Problem</span>
                        <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <span className="text-sm font-bold text-foreground/80 uppercase tracking-wider block mb-1">Solution</span>
                        <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <span className="text-sm font-bold text-primary uppercase tracking-wider block mb-1">Impact</span>
                        <p className="text-foreground/90 font-medium leading-relaxed">{project.impact}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-foreground/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-6">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 text-sm"
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-semibold transition-colors text-sm"
                      >
                        <Github size={20} /> Repository
                      </a>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2 relative overflow-hidden rounded-[1.5rem] aspect-[4/3] ring-1 ring-white/10 group-hover:ring-primary/30 transition-all shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI / Product Projects */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-white/10 flex-grow" />
              <h4 className="text-2xl font-bold flex items-center gap-3 px-4">
                <Brain className="text-primary" /> AI & Product Focus
              </h4>
              <div className="h-px bg-white/10 flex-grow" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiProjects.map((project, idx) => (
               <motion.div
                 key={project.title}
                 initial={{ opacity: 0, y: 20 }}
                 animate={inView ? { opacity: 1, y: 0 } : {}}
                 transition={{ delay: idx * 0.15 }}
                 className="flex flex-col h-full glass p-8 rounded-[2rem] hover:bg-white/5 hover:-translate-y-1 transition-all group border border-white/5 hover:border-white/10 shadow-lg"
               >
                 <div className="flex justify-between items-start mb-6">
                   <h5 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h5>
                   <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all">
                     <ExternalLink size={20} />
                   </a>
                 </div>
                 
                 <div className="space-y-3 mb-8 flex-grow">
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground/80">Problem:</strong> {project.problem}</p>
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground/80">Solution:</strong> {project.solution}</p>
                    <p className="text-sm font-medium text-primary/90"><strong className="text-foreground/80">Impact:</strong> {project.impact}</p>
                 </div>
                 
                 <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                   <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-black/20 rounded-md text-[10px] uppercase font-bold tracking-widest text-muted-foreground border border-white/5">
                          {tag}
                        </span>
                      ))}
                   </div>
                 </div>
               </motion.div>
              ))}
            </div>
          </div>

          {/* Mini Projects */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-white/10 flex-grow" />
              <h4 className="text-2xl font-bold flex items-center gap-3 px-4">
                <Layout className="text-primary" /> Mini Frontend Tools
              </h4>
              <div className="h-px bg-white/10 flex-grow" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {miniProjects.map((project, idx) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: idx * 0.05 }}
                  className="flex flex-col h-full glass p-6 rounded-2xl hover:bg-white/5 hover:shadow-xl transition-all group border border-white/5 hover:border-primary/30"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h5 className="text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h5>
                    <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="space-y-2 mb-4 flex-grow">
                    <p className="text-xs text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground/70">Problem:</span> {project.problem}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground/70">Solution:</span> {project.solution}</p>
                    <p className="text-xs text-primary/80 font-medium leading-relaxed"><span className="font-semibold text-foreground/70 text-xs">Impact:</span> {project.impact}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
