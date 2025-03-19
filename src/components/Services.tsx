
import React from "react";
import { motion } from "framer-motion";
import { Users, Building2, Briefcase, Award, Clock, CheckCircle2 } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Users className="h-10 w-10 text-primary-600" />,
      title: "Permanent Placement",
      description:
        "We match exceptional talent with industry-leading companies for full-time positions across various sectors.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary-600" />,
      title: "Contract Staffing",
      description:
        "Flexible staffing solutions for project-based work, temporary positions, and seasonal demands.",
    },
    {
      icon: <Building2 className="h-10 w-10 text-primary-600" />,
      title: "Executive Search",
      description:
        "Specialized recruitment for C-level executives and senior management positions.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary-600" />,
      title: "Professional Recruiting",
      description:
        "Connecting qualified professionals with opportunities that match their skills and career goals.",
    },
    {
      icon: <CheckCircle2 className="h-10 w-10 text-primary-600" />,
      title: "Talent Assessment",
      description:
        "Comprehensive evaluation of candidates to ensure the perfect fit for your organization's culture and needs.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary-600" />,
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-primary-600 px-3 py-1 bg-primary-50 rounded-full mb-5"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Comprehensive Staffing Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
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
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="mb-6 p-4 bg-primary-50 rounded-lg inline-block group-hover:bg-primary-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
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
            className="inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
          >
            Discuss Your Staffing Needs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
