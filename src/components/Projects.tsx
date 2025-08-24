import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "📋",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      github: "#",
      live: "#",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "3D Portfolio Website",
      description: "Interactive 3D portfolio website using Three.js with smooth animations, particle effects, and responsive design.",
      image: "🎨",
      technologies: ["Three.js", "React", "Framer Motion", "GLSL"],
      github: "#",
      live: "#",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI integration, featuring smart responses, file sharing, and video calls.",
      image: "🤖",
      technologies: ["React", "WebRTC", "OpenAI", "Socket.io"],
      github: "#",
      live: "#",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Real-time cryptocurrency tracking dashboard with portfolio management, price alerts, and market analysis.",
      image: "💰",
      technologies: ["React", "Chart.js", "CoinGecko API", "Redux"],
      github: "#",
      live: "#",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with post scheduling, engagement tracking, and performance metrics.",
      image: "📊",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
      github: "#",
      live: "#",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section ref={ref} id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="glass h-full overflow-hidden transition-all duration-300 hover:shadow-neon">
                  {/* Project Image */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-6xl opacity-80">{project.image}</div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    
                    {/* Hover Links */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex gap-4">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-black/50 rounded-full backdrop-blur-sm hover:bg-black/70 transition-all"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-black/50 rounded-full backdrop-blur-sm hover:bg-black/70 transition-all"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" className="flex-1 bg-gradient-primary">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;