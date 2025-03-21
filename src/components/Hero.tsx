
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        {/* Dark gray background matching About section */}
        <div className="w-full h-full bg-gray-950">
          {/* Abstract lighting and atmosphere */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary-600 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-primary-500/30 blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gold-400/20 blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-primary-600/25 blur-3xl"></div>
          </div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          {/* Office environment elements */}
          <div className="absolute inset-0">            
            {/* Professional team representation */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="relative h-72 w-full max-w-5xl">
                
                {/* Team silhouettes with glow effect */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-around items-end">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="w-16 h-40 bg-gradient-to-t from-gold-400/50 to-white/20 rounded-t-full relative overflow-hidden backdrop-blur-sm"
                  >
                    <div className="absolute inset-x-0 top-6 h-5 w-5 rounded-full bg-white/40 mx-auto"></div>
                  </motion.div>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-16 h-48 bg-gradient-to-t from-gold-400/50 to-white/20 rounded-t-full relative overflow-hidden backdrop-blur-sm"
                  >
                    <div className="absolute inset-x-0 top-6 h-5 w-5 rounded-full bg-white/40 mx-auto"></div>
                  </motion.div>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-16 h-44 bg-gradient-to-t from-gold-400/50 to-white/20 rounded-t-full relative overflow-hidden backdrop-blur-sm"
                  >
                    <div className="absolute inset-x-0 top-6 h-5 w-5 rounded-full bg-white/40 mx-auto"></div>
                  </motion.div>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-16 h-52 bg-gradient-to-t from-gold-400/50 to-white/20 rounded-t-full relative overflow-hidden backdrop-blur-sm"
                  >
                    <div className="absolute inset-x-0 top-6 h-5 w-5 rounded-full bg-white/40 mx-auto"></div>
                  </motion.div>
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-16 h-40 bg-gradient-to-t from-gold-400/50 to-white/20 rounded-t-full relative overflow-hidden backdrop-blur-sm"
                  >
                    <div className="absolute inset-x-0 top-6 h-5 w-5 rounded-full bg-white/40 mx-auto"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      </div>

      {/* Remove all decorative elements that could be creating dots */}
      
      {/* Content overlay */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block text-md font-medium text-gold-400 px-3 py-1 bg-gold-400/10 rounded-full mb-6">
                Premier IT Consulting Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Connecting{" "}
              <span className="text-gold-400">Exceptional IT Talent</span> with
              Technology Leaders
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-white max-w-xl"
            >
              At Allied IT Consultant, we specialize in connecting the
              right IT professionals with the right tech opportunities, delivering tailored
              technology solutions that drive digital transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/#services"
                className="inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-black bg-gold-400 hover:bg-gold-500 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Explore Our Services
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-gold-400 bg-gray-800 border border-gold-700/30 hover:bg-gold-900/20 rounded-md transition-all duration-300"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-900/10 to-gold-700/5 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-lg border border-gray-800">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <div className="bg-black/70 h-32 rounded-lg flex items-center justify-center p-6 border border-gray-800">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold-400">150+</div>
                      <div className="text-sm text-gray-300">IT Projects Completed</div>
                    </div>
                  </div>
                  <div className="bg-black/70 h-48 rounded-lg flex items-center justify-center p-6 border border-gray-800">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold-400">95%</div>
                      <div className="text-sm text-gray-300">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-black/70 h-48 rounded-lg flex items-center justify-center p-6 border border-gray-800">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold-400">10</div>
                      <div className="text-sm text-gray-300">Years in IT Consulting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 text-gold-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
