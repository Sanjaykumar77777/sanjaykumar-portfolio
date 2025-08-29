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
      title: "Edemy",
      description:
        "Edemy is an intuitive, modern LMS frontend created to enhance the digital learning journey. It boasts a clean login interface, offering flexible authentication methods—such as standard email/password and convenient Gmail login options—making access quick and seamless.",
      image: "📚",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Vercel"],
      github: "https://github.com/Sanjaykumar77777/LMS",
      live: "https://lms-frontend-nine-rosy.vercel.app/",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "PriceHub",
      description:
        "PriceCompare Hub is a smart price comparison platform that helps users find the best deals across major Indian e-commerce websites like Flipkart, Snapdeal, and ShopClues. With real-time updates, our website scans these platforms to display the latest prices for your favorite products—all in one place.",
      image: "📋",
      technologies: ["HTML", "Javascript", "Bootstrap", "JSP"],
      github: "https://github.com/Sanjaykumar77777/OPCW",
      live: "https://github.com/Sanjaykumar77777/OPCW",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "3D Portfolio Website",
      description:
        "Explore a visually stunning 3D portfolio showcasing creative projects with immersive animations, interactive elements, and a modern design. Highlighting skills, experiences, and achievements, it delivers a dynamic, engaging, and professional presentation for clients, employers, and collaborators",
      image: "🎨",
      technologies: ["Javascript", "React", "Three js", "Firebase"],
      github: "https://github.com/Sanjaykumar77777/Portfolio_web",
      live: "https://github.com/Sanjaykumar77777/Portfolio_web",
      gradient: "from-green-500 to-emerald-500",
    },
    // {
    //   title: "AI Chat Application",
    //   description:
    //     "Real-time chat application with AI integration, featuring smart responses, file sharing, and video calls.",
    //   image: "🤖",
    //   technologies: ["React", "WebRTC", "OpenAI", "Socket.io"],
    //   github: "#",
    //   live: "#",
    //   gradient: "from-orange-500 to-red-500",
    // },
    // {
    //   title: "Cryptocurrency Tracker",
    //   description:
    //     "Real-time cryptocurrency tracking dashboard with portfolio management, price alerts, and market analysis.",
    //   image: "💰",
    //   technologies: ["React", "Chart.js", "CoinGecko API", "Redux"],
    //   github: "#",
    //   live: "#",
    //   gradient: "from-indigo-500 to-purple-500",
    // },
    // {
    //   title: "Social Media Dashboard",
    //   description:
    //     "Analytics dashboard for social media management with post scheduling, engagement tracking, and performance metrics.",
    //   image: "📊",
    //   technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    //   github: "#",
    //   live: "#",
    //   gradient: "from-teal-500 to-blue-500",
    // },
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
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
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
