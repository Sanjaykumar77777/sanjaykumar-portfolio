import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-white" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-blue-400" },
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
              Ready to start a project or just want to chat? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, creative projects, 
                  or just having a friendly chat about technology and development.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "hello@yourname.com",
                    action: "mailto:hello@yourname.com"
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "+1 (555) 123-4567",
                    action: "tel:+15551234567"
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "San Francisco, CA",
                    action: "#"
                  }
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.action}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 glass rounded-lg hover:shadow-neon transition-all duration-300 group"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      <div className="text-foreground font-medium">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 glass rounded-lg transition-all duration-300 ${social.color} hover:shadow-neon`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="glass p-8">
                <h3 className="text-2xl font-bold gradient-text mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-muted/50 border-border focus:border-primary"
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
                      className="bg-muted/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-muted/50 border-border focus:border-primary min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full btn-hero"
                      size="lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>

          {/* Download Resume Section */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Card className="glass p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Interested in my work?
              </h3>
              <p className="text-muted-foreground mb-6">
                Download my resume to learn more about my experience and skills
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="btn-secondary">
                  Download Resume
                </Button>
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;