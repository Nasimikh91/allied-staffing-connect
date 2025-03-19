
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Clock, Award, ChevronRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay - matching Services section */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Animated particles matching Services section */}
        {Array.from({ length: 15 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-1.5 h-1.5 bg-gold-400 rounded-full"
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
        {/* About us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-medium text-gold-400 px-3 py-1 bg-gray-900 rounded-full mb-5"
            >
              About Us
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Innovative IT Solutions for Forward-Thinking Organizations
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              At Allied IT Consultant, we bridge the gap between exceptional IT talent and 
              forward-thinking organizations. Our expertise in the technology sector allows us to 
              provide specialized IT consulting and staffing solutions that drive innovation and growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-900 text-gold-400">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                  <p className="text-gray-300">
                    Our network includes vetted IT professionals with specialized skills across various domains.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-900 text-gold-400">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
                  <p className="text-gray-300">
                    We move quickly to meet your IT needs with efficient processes and responsive service.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#services"
              className="inline-flex items-center text-gold-400 font-medium hover:text-gold-300 transition-colors"
            >
              Explore Our Services <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Removed the problematic image that was showing Allied Pro Staffing */}
          </motion.div>
        </div>

        {/* Why choose us - Removed the "IT Excellence" heading and box */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 max-w-3xl mx-auto"
            >
              We provide specialized IT consulting services with a focus on quality, reliability, and exceptional results that help businesses thrive in today's digital landscape.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-14 w-14 rounded-full bg-gray-950 flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-400 group-hover:text-black transition-colors">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Quality Assurance</h3>
              <p className="text-gray-300">
                Our rigorous selection processes ensure we provide only the highest quality IT professionals and solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-14 w-14 rounded-full bg-gray-950 flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-400 group-hover:text-black transition-colors">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Industry Expertise</h3>
              <p className="text-gray-300">
                Our consultants bring deep industry knowledge and specialized technical skills to every project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-14 w-14 rounded-full bg-gray-950 flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-400 group-hover:text-black transition-colors">
                <Award className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Client Success</h3>
              <p className="text-gray-300">
                We measure our success by the achievements of our clients and their technology initiatives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="h-14 w-14 rounded-full bg-gray-950 flex items-center justify-center text-gold-400 mb-6 group-hover:bg-gold-400 group-hover:text-black transition-colors">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rapid Response</h3>
              <p className="text-gray-300">
                Our agile approach allows us to quickly adapt to changing needs and deliver solutions promptly.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="text-center p-6 bg-gray-900 border border-gray-800 rounded-xl shadow-sm">
            <h3 className="text-4xl font-bold text-gold-400 mb-2">10+</h3>
            <p className="text-gray-300">Years Experience</p>
          </div>

          <div className="text-center p-6 bg-gray-900 border border-gray-800 rounded-xl shadow-sm">
            <h3 className="text-4xl font-bold text-gold-400 mb-2">500+</h3>
            <p className="text-gray-300">IT Professionals</p>
          </div>

          <div className="text-center p-6 bg-gray-900 border border-gray-800 rounded-xl shadow-sm">
            <h3 className="text-4xl font-bold text-gold-400 mb-2">300+</h3>
            <p className="text-gray-300">Satisfied Clients</p>
          </div>

          <div className="text-center p-6 bg-gray-900 border border-gray-800 rounded-xl shadow-sm">
            <h3 className="text-4xl font-bold text-gold-400 mb-2">95%</h3>
            <p className="text-gray-300">Client Retention</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
