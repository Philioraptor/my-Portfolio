import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center text-xs font-bold border border-white/10">
            DM
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Dhruv Mishra. Built with passion.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Philioraptor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhruv-mishra-5b0001338/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:dhruvm05062004@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground flex items-center gap-1">
          Made with <Heart size={12} className="text-accent fill-accent" /> using React & Tailwind
        </p>
      </div>
    </footer>
  );
}
