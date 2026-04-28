"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "NLP Academy",
    subtitle: "Ultimate NLP Tutor",
    description: "Advanced learning platform powered by state-of-the-art NLP models",
    tags: ["NLP", "Python", "TensorFlow"],
    color: "from-blue-500/20 to-purple-500/20",
    views: "1.2k",
  },
  {
    title: "Agentic Multi-Dialect SQL Assistant",
    subtitle: "Intelligent Database Assistant",
    description: "Multi-dialect SQL query generation using AI agents",
    tags: ["AI Agents", "SQL", "LangChain"],
    color: "from-green-500/20 to-teal-500/20",
    views: "890",
  },
  {
    title: "Enhanced Feedback Analysis",
    subtitle: "Multi-Intent RAG",
    description: "Advanced sentiment analysis with retrieval-augmented generation",
    tags: ["RAG", "NLP", "Analytics"],
    color: "from-purple-500/20 to-pink-500/20",
    views: "1.5k",
  },
  {
    title: "NLP Sentiment Analysis",
    subtitle: "Real-time Analysis",
    description: "Production-ready sentiment classification system",
    tags: ["NLP", "Machine Learning"],
    color: "from-orange-500/20 to-red-500/20",
    views: "2.1k",
  },
  {
    title: "QuizBuilderAI",
    subtitle: "AI Quiz Generator",
    description: "Intelligent quiz generation from any content source",
    tags: ["AI", "Education", "GPT"],
    color: "from-cyan-500/20 to-blue-500/20",
    views: "750",
  },
  {
    title: "Smart CVvCraft Assistant",
    subtitle: "CV Analysis Tool",
    description: "AI-powered resume optimization and analysis",
    tags: ["NLP", "Career Tech"],
    color: "from-indigo-500/20 to-purple-500/20",
    views: "1.8k",
  },
  {
    title: "Introduction to Gen AI with AWS",
    subtitle: "Educational Platform",
    description: "Comprehensive guide to generative AI on AWS infrastructure",
    tags: ["AWS", "Gen AI", "Cloud"],
    color: "from-yellow-500/20 to-orange-500/20",
    views: "3.2k",
  },
  {
    title: "Titanic Survival Predictor",
    subtitle: "ML Classic",
    description: "Classic machine learning problem with modern approaches",
    tags: ["ML", "Python", "Data Science"],
    color: "from-teal-500/20 to-green-500/20",
    views: "1.1k",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Exploring the intersection of AI, data science, and practical applications
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -8 }} className="group">
              <div className="glass-card glow-card p-6 rounded-3xl h-full flex flex-col transition-all duration-500">
                <div className={`h-32 rounded-2xl bg-gradient-to-br ${project.color} mb-6 flex items-center justify-center text-5xl transition-transform duration-500 group-hover:scale-105`}>
                  {"\u{1F4CA}"}
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-sm text-muted-foreground">{project.views} views</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
