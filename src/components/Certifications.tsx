"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "AI Engineer for Developers",
    issuer: "Microsoft",
    icon: "\u{1F3C6}",
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    icon: "\u2601\uFE0F",
    color: "from-purple-500/10 to-blue-500/10",
  },
  {
    title: "Azure AI Engineer Associate (AI-102)",
    issuer: "Microsoft",
    icon: "\u{1F3AF}",
    color: "from-green-500/10 to-teal-500/10",
  },
  {
    title: "AWS AI Practitioner (AIF-C01)",
    issuer: "Amazon Web Services",
    icon: "\u{1F31F}",
    color: "from-orange-500/10 to-yellow-500/10",
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    icon: "\u{1F419}",
    color: "from-gray-500/10 to-slate-500/10",
  },
  {
    title: "GitHub Copilot (GH-201)",
    issuer: "GitHub",
    icon: "\u{1F916}",
    color: "from-violet-500/10 to-purple-500/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-primary/5" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-gradient">Certifications</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-recognized credentials demonstrating expertise in AI, cloud, and software development
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5, scale: 1.02 }} className="group">
              <div className="glass-card glow-card p-6 rounded-2xl h-full flex flex-col">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>

                <Button variant="ghost" size="sm" className="w-full mt-4 group-hover:bg-primary/10">
                  View Certificate
                  <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Certifications
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
