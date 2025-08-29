import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/SanjayKumar394",
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sanjaykumar-vinayagamoorthy/",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://www.linkedin.com/in/sanjaykumar-vinayagamoorthy/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section ref={ref} id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to start a project or just want to chat? I'd love to hear
              from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 sm:space-y-6 lg:space-y-8"
            >
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4 lg:mb-6">
                  Get in Touch
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 lg:mb-8">
                  I'm always open to discussing new opportunities, creative
                  projects, or just having a friendly chat about technology and
                  development.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "sanjaykumar.vinayagamoorthy@gmail.com",
                    action: "mailto:sanjaykumar.vinayagamoorthy@gmail.com",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+91 9342646795",
                    action: "tel:+91 9342646795",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Chennai, TN",
                    action: "https://maps.app.goo.gl/Awh54kSMXZZpmoXW9",
                  },
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.action}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 p-2.5 sm:p-3 lg:p-4 glass rounded-lg hover:shadow-neon transition-all duration-300 group"
                  >
                    <div className="p-1.5 sm:p-2 lg:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-xs lg:text-sm text-muted-foreground">
                        {contact.label}
                      </div>
                      <div className="text-xs sm:text-sm lg:text-base text-foreground font-medium break-words">
                        {contact.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 lg:pt-8">
                <h4 className="text-base lg:text-lg font-semibold text-foreground mb-3 lg:mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-3 lg:space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2.5 lg:p-3 glass rounded-lg transition-all duration-300 ${social.color} hover:shadow-neon`}
                    >
                      <social.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="glass p-3 sm:p-4 md:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mb-3 sm:mb-4 lg:mb-6">
                  Send a Message
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-3 sm:space-y-4 lg:space-y-6"
                >
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-muted/50 border-border focus:border-primary h-9 sm:h-10 lg:h-12 text-xs sm:text-sm lg:text-base"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-muted/50 border-border focus:border-primary h-9 sm:h-10 lg:h-12 text-xs sm:text-sm lg:text-base"
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-muted/50 border-border focus:border-primary min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] text-xs sm:text-sm lg:text-base"
                      required
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full btn-hero h-10 lg:h-12 text-sm lg:text-base"
                      size="lg"
                    >
                      <Send className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>

          {/* Download Resume Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 lg:mt-16 text-center"
          >
            <Card className="glass p-6 lg:p-8 max-w-2xl mx-auto">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold gradient-text mb-3 lg:mb-4">
                Interested in my work?
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 lg:mb-6">
                Download my resume to learn more about my experience and skills
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="../../public/RESUME-SANJAY  (1) (1).pdf" download>
                  <Button className="btn-secondary px-6 py-2 lg:px-8 lg:py-3 text-sm lg:text-base">
                    Download Resume
                  </Button>
                </a>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
