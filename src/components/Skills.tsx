import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Three.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 88 }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 88 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 85 },
        { name: "Jest", level: 80 },
        { name: "Webpack", level: 75 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        delay: 0.5,
      },
    }),
  };

  return (
    <section ref={ref} id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="glass h-full p-6 transition-all duration-300 hover:shadow-neon">
                  {/* Category Header */}
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-foreground font-medium">
                            {skill.name}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            variants={progressVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            custom={skill.level}
                            className="h-full bg-gradient-primary rounded-full"
                            style={{
                              backgroundImage: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Highlights */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: "🚀", label: "Performance Optimization" },
                { icon: "📱", label: "Responsive Design" },
                { icon: "🔒", label: "Security Best Practices" },
                { icon: "🔄", label: "CI/CD Pipelines" }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="glass p-4 rounded-lg text-center group cursor-pointer"
                >
                  <div className="text-3xl mb-2 group-hover:animate-bounce">
                    {highlight.icon}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {highlight.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;