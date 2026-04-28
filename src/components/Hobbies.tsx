"use client";

import { motion } from "framer-motion";
import { Camera, Music, BookOpen, Plane, Coffee, Gamepad2 } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    {
      icon: Camera,
      title: "Photography",
      description: "Capturing moments and exploring visual storytelling",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Music,
      title: "Music",
      description: "Listening to diverse genres and discovering new artists",
      gradient: "from-secondary to-accent",
    },
    {
      icon: BookOpen,
      title: "Reading",
      description: "Tech blogs, sci-fi novels, and continuous learning",
      gradient: "from-accent to-primary",
    },
    {
      icon: Plane,
      title: "Travel",
      description: "Exploring new places and experiencing different cultures",
      gradient: "from-primary to-accent",
    },
    {
      icon: Coffee,
      title: "Coffee",
      description: "Brewing and enjoying the perfect cup of coffee",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Gamepad2,
      title: "Gaming",
      description: "Strategic and story-driven gaming experiences",
      gradient: "from-accent to-secondary",
    },
  ];

  return (
    <section id="hobbies" className="py-16 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Hobbies & <span className="text-gradient">Interests</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="glass-card p-4 rounded-xl group cursor-pointer text-center"
            >
              <div className="flex items-center justify-center mb-3">
                <hobby.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-sm font-semibold">{hobby.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
