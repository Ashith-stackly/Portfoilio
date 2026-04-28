"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(var(--accent)/0.08)_0%,transparent_50%)]" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                {"\u{1F44B}"} Available for opportunities
              </span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hey, I&apos;m <span className="text-gradient">Ashith Jain</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-light">
                Front-End Developer
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Building responsive, polished web interfaces with{" "}
              <span className="text-foreground font-medium">HTML5</span>,{" "}
              <span className="text-foreground font-medium">CSS3</span>,{" "}
              <span className="text-foreground font-medium">JavaScript</span>,{" "}
              <span className="text-foreground font-medium">ReactJs</span>, and{" "}
              <span className="text-foreground font-medium">Next.js</span>.
            </p>

            <blockquote className="pl-4 border-l-2 border-primary/30 italic text-muted-foreground">
              &quot;Clean interfaces, clear code, and user-focused front-end experiences.&quot;
            </blockquote>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="group">
                View Skills
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:ashithjain97@gmail.com" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300" aria-label="Email Ashith Jain">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:8217577406" className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300" aria-label="Call Ashith Jain">
                <Phone className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="glass-card glow-card p-8 rounded-3xl">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-8xl">
                {"\u{1F468}\u200D\u{1F4BB}"}
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold">Ashith Jain</h3>
                <p className="text-muted-foreground mt-2">Front-End Developer</p>
                <p className="text-muted-foreground mt-1">ashithjain97@gmail.com | 8217577406</p>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
