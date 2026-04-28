"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Languages & Frameworks",
    items: [
      { name: "HTML5", label: "HTML5" },
      { name: "CSS3", label: "CSS3" },
      { name: "Bootstrap", label: "Bootstrap" },
      { name: "JavaScript", label: "JavaScript" },
      { name: "jQuery", label: "jQuery" },
      { name: "ReactJs", label: "ReactJs" },
      { name: "Python", label: "Python" },
      { name: "SQL", label: "SQL" },
      { name: "Tailwind CSS", label: "Tailwind" },
      { name: "Next.js", label: "Next.js" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", label: "Git" },
      { name: "GitHub", label: "GitHub" },
      { name: "Postman", label: "Postman" },
    ],
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {category.items.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="glass-card p-3 rounded-xl group cursor-pointer"
                  >
                    <div className="text-center space-y-2">
                      <p className="font-medium text-xs">
                        {tech.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
