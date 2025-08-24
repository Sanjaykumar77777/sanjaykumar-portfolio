import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  return (
    <section ref={ref} id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know more about who I am and what drives my passion for development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image/3D Avatar Placeholder */}
            <motion.div variants={itemVariants}>
              <Card className="glass p-8 text-center">
                <div className="w-64 h-64 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-2">John Doe</h3>
                <p className="text-muted-foreground">Full Stack Developer</p>
              </Card>
            </motion.div>

            {/* About Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Crafting Digital Experiences
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with over 5 years of experience 
                  creating innovative web applications. My journey began with curiosity 
                  about how websites work, and it has evolved into a deep love for 
                  building scalable, user-friendly solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in React, Node.js, and modern web technologies. 
                  When I'm not coding, you can find me exploring new frameworks, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass p-4 rounded-lg text-center"
                >
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass p-4 rounded-lg text-center"
                >
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass p-4 rounded-lg text-center"
                >
                  <div className="text-3xl font-bold gradient-text">30+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass p-4 rounded-lg text-center"
                >
                  <div className="text-3xl font-bold gradient-text">24/7</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;