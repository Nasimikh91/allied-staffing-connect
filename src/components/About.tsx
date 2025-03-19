
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    "Excellence in service delivery",
    "Integrity in all interactions",
    "Personalized approach to client needs",
    "Dedication to long-term partnerships",
    "Commitment to diversity and inclusion",
    "Continuous improvement and innovation",
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-medium text-gold-400 px-3 py-1 bg-gold-400/10 rounded-full mb-5">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Trusted Partner for Professional Staffing Solutions
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              At Allied Professional Staffing, we bridge the gap between talented
              professionals and leading organizations. With years of industry
              experience, we understand the unique challenges of the modern
              workforce and provide tailored staffing solutions that make a
              difference.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-gold-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-black bg-gold-400 hover:bg-gold-500 rounded-md transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-900/20 to-gold-700/10 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-black p-8 rounded-3xl shadow-lg border border-gray-800">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-8 bg-gray-900">
                <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                  <span className="text-gold-400 font-medium">Company Image</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400 font-bold text-sm mr-3">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Industry Expertise</h4>
                      <p className="text-gray-300 text-sm">
                        Specialized knowledge across multiple sectors and roles
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400 font-bold text-sm mr-3">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Personalized Approach</h4>
                      <p className="text-gray-300 text-sm">
                        Custom solutions tailored to your specific requirements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400 font-bold text-sm mr-3">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Quality Candidates</h4>
                      <p className="text-gray-300 text-sm">
                        Rigorous screening process to ensure top-tier talent
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400 font-bold text-sm mr-3">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Ongoing Support</h4>
                      <p className="text-gray-300 text-sm">
                        Continuous assistance throughout the entire process
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
