import React from "react";
import { motion } from "framer-motion";
import { Users, Server, Code, Database, Shield, Cpu } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Users className="h-10 w-10 text-gold-400" />,
      title: "IT Staffing",
      description:
        "We match exceptional IT professionals with industry-leading technology companies for full-time and contract positions.",
    },
    {
      icon: <Code className="h-10 w-10 text-gold-400" />,
      title: "Software Development",
      description:
        "Custom software solutions designed and developed by expert engineers to meet your specific business needs.",
    },
    {
      icon: <Server className="h-10 w-10 text-gold-400" />,
      title: "IT Infrastructure",
      description:
        "Comprehensive infrastructure solutions including cloud migration, server management, and network optimization.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-gold-400" />,
      title: "Technical Support",
      description:
        "Reliable technical support services to ensure your systems run smoothly and efficiently at all times.",
    },
    {
      icon: <Database className="h-10 w-10 text-gold-400" />,
      title: "Data Services",
      description:
        "Data management, analytics, and business intelligence solutions to help you leverage your data effectively.",
    },
    {
      icon: <Shield className="h-10 w-10 text-gold-400" />,
      title: "Cybersecurity",
      description:
        "Protect your business with comprehensive security assessments, monitoring, and threat prevention solutions.",
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Visual elements for the background - matching About section style */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-60 h-60 bg-primary-500 rounded-full filter blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 15 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1.5 h-1.5 bg-primary-400 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0.2
            }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3 + (Math.random() * 2),
              ease: "easeInOut",
              delay: index * 0.1
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-md font-medium text-gold-400 px-3 py-1 bg-gray-900 rounded-full mb-5"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Comprehensive IT Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300"
          >
            We provide tailored IT consulting and technology services to meet your specific
            business needs, helping organizations navigate the digital landscape and achieve their goals.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gray-800/20 rotate-45 origin-bottom-left transform translate-y-[-50%] translate-x-[50%]"></div>
              </div>
              
              <div className="mb-6 p-4 bg-gray-950/80 rounded-lg inline-block group-hover:bg-gray-950 transition-colors relative">
                <div className="absolute inset-0 bg-gold-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-black bg-gold-400 hover:bg-gold-500 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg relative overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-gold-300 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10">Discuss Your IT Needs</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
