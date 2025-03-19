
import React from "react";
import { motion } from "framer-motion";
import { Users, Building2, Briefcase, Award, Clock, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Users className="h-10 w-10 text-gold-400" />,
      title: "Permanent Placement",
      description:
        "We match exceptional talent with industry-leading companies for full-time positions across various sectors.",
    },
    {
      icon: <Clock className="h-10 w-10 text-gold-400" />,
      title: "Contract Staffing",
      description:
        "Flexible staffing solutions for project-based work, temporary positions, and seasonal demands.",
    },
    {
      icon: <Building2 className="h-10 w-10 text-gold-400" />,
      title: "Executive Search",
      description:
        "Specialized recruitment for C-level executives and senior management positions.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-gold-400" />,
      title: "Professional Recruiting",
      description:
        "Connecting qualified professionals with opportunities that match their skills and career goals.",
    },
    {
      icon: <CheckCircle2 className="h-10 w-10 text-gold-400" />,
      title: "Talent Assessment",
      description:
        "Comprehensive evaluation of candidates to ensure the perfect fit for your organization's culture and needs.",
    },
    {
      icon: <Award className="h-10 w-10 text-gold-400" />,
      title: "Specialized Expertise",
      description:
        "Industry-specific recruitment in healthcare, technology, finance, manufacturing, and more.",
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
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold-400 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gold-300 rounded-full filter blur-3xl"></div>
        
        {/* Blue contrast extension to this section - new addition */}
        <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        
        {/* Animated dots pattern */}
        <div className="absolute inset-0 flex flex-wrap gap-4 opacity-15">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div 
              key={i}
              className="w-2 h-2 bg-gold-400 rounded-full"
              initial={{ opacity: 0.1 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                delay: i * 0.1 % 3,
                ease: "easeInOut" 
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-gold-400 px-3 py-1 bg-gold-400/10 rounded-full mb-5"
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
            Comprehensive Staffing Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300"
          >
            We provide tailored recruitment services to meet your specific
            business needs, connecting the right talent with the right
            opportunities across various industries.
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
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold-400/10 rotate-45 origin-bottom-left transform translate-y-[-50%] translate-x-[50%]"></div>
              </div>
              
              <div className="mb-6 p-4 bg-black/40 rounded-lg inline-block group-hover:bg-black/60 transition-colors relative">
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
            <span className="relative z-10">Discuss Your Staffing Needs</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
