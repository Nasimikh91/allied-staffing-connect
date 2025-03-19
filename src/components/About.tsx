import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    "Technical excellence in delivery",
    "Integrity in all client interactions",
    "Innovative IT solutions",
    "Dedication to long-term technology partnerships",
    "Commitment to talent development",
    "Continuous improvement in IT practices",
  ];

  return (
    <section id="about" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Visual elements for the background */}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-md font-medium text-gold-400 px-3 py-1 bg-gold-400/10 rounded-full mb-5">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Your Trusted Partner for IT Consulting Solutions
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              At Allied IT Consultant, we bridge the gap between talented
              IT professionals and leading technology organizations. With years of industry
              experience, we understand the unique challenges of modern technology environments
              and provide tailored IT solutions that drive digital transformation.
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
                    className="flex items-start group"
                  >
                    <div className="relative">
                      <CheckCircle className="h-5 w-5 text-gold-400 mt-0.5 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <motion.div 
                        className="absolute -inset-1 bg-gold-400/20 rounded-full z-[-1] opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
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
                className="inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-black bg-gold-400 hover:bg-gold-500 rounded-md transition-all duration-300 relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-gold-300 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">Get In Touch</span>
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
            
            {/* Floating elements in the background */}
            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 bg-gold-400/10 rounded-full"
              animate={{ y: ["-5%", "5%"], x: ["2%", "-2%"] }}
              transition={{ repeat: Infinity, duration: 3, yoyo: 1 }}
            />
            <motion.div 
              className="absolute -bottom-6 left-10 w-20 h-20 bg-gold-400/5 rounded-full"
              animate={{ y: ["8%", "-8%"], x: ["-3%", "3%"] }}
              transition={{ repeat: Infinity, duration: 3.5, yoyo: 1 }}
            />
            
            <div className="relative bg-black p-8 rounded-3xl shadow-lg border border-gray-800 overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-600/5 to-transparent"></div>
              
              <div className="relative rounded-xl overflow-hidden mb-8 bg-gray-900 aspect-w-16 aspect-h-9">
                <div className="w-full h-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  {/* Abstract workspace illustration */}
                  <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-gold-900/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black to-transparent"></div>
                    
                    {/* Building silhouettes */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3">
                      <div className="absolute bottom-0 left-1/4 w-10 h-20 bg-gray-800 rounded-t"></div>
                      <div className="absolute bottom-0 left-1/3 w-16 h-24 bg-gray-800 rounded-t"></div>
                      <div className="absolute bottom-0 left-1/2 w-20 h-28 bg-gray-800 rounded-t"></div>
                      <div className="absolute bottom-0 right-1/4 w-12 h-16 bg-gray-800 rounded-t"></div>
                    </div>
                    
                    {/* People silhouettes */}
                    <motion.div 
                      className="absolute bottom-3 left-1/4 w-5 h-5 bg-gold-400/50 rounded-full"
                      animate={{ x: ["-50%", "50%"] }}
                      transition={{ duration: 5, repeat: Infinity, yoyo: true }}
                    />
                    <motion.div 
                      className="absolute bottom-3 left-2/3 w-4 h-4 bg-gold-400/50 rounded-full"
                      animate={{ x: ["30%", "-30%"] }}
                      transition={{ duration: 7, repeat: Infinity, yoyo: true }}
                    />
                    <motion.div 
                      className="absolute bottom-3 left-1/2 w-4 h-4 bg-gold-400/50 rounded-full"
                      animate={{ x: ["-20%", "20%"] }}
                      transition={{ duration: 6, repeat: Infinity, yoyo: true }}
                    />
                  </div>
                  <span className="text-gold-400 font-medium text-lg relative z-10">IT Excellence</span>
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start group">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400 font-bold text-sm mr-3 group-hover:bg-gold-400/30 transition-colors duration-300">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-white">IT Expertise</h4>
                      <p className="text-gray-300 text-sm">
                        Deep technical knowledge across multiple IT domains
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400 font-bold text-sm mr-3 group-hover:bg-gold-400/30 transition-colors duration-300">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Custom Solutions</h4>
                      <p className="text-gray-300 text-sm">
                        Tailored IT strategies designed for your specific business challenges
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400 font-bold text-sm mr-3 group-hover:bg-gold-400/30 transition-colors duration-300">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Elite Talent</h4>
                      <p className="text-gray-300 text-sm">
                        Access to top-tier IT professionals and technology experts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400 font-bold text-sm mr-3 group-hover:bg-gold-400/30 transition-colors duration-300">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Technical Support</h4>
                      <p className="text-gray-300 text-sm">
                        Continuous assistance throughout your technology implementation
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
