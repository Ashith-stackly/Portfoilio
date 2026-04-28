"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="relative py-16 px-4 border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-background" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Ashith Jain</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Front-End Developer focused on responsive interfaces and modern web experiences.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:ashithjain97@gmail.com" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300" aria-label="Email Ashith Jain">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="grid gap-4">
              <a href="mailto:ashithjain97@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="h-3 w-3" />
                ashithjain97@gmail.com
              </a>
              <a href="tel:8217577406" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="h-3 w-3" />
                8217577406
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} Ashith Jain. Designed and Developed with love</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
