import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        {/* Professional workspace environment */}
        <div className="w-full h-full bg-gradient-to-r from-blue-900 via-indigo-900 to-gray-900">
          {/* Abstract lighting and atmosphere */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-400/40 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-purple-500/30 blur-3xl"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gold-400/20 blur-3xl"></div>
            <div className="absolute bottom-1/3 left-1/3 w-64 h-64 rounded-full bg-indigo-600/25 blur-3xl"></div>
          </div>
          
          {/* Office environment elements */}
          <div className="absolute inset-0">
            {/* Modern office grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="h-full w-full" 
                style={{
                  backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .08) 25%, rgba(255, 255, 255, .08) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .08) 75%, rgba(255, 255, 255, .08) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .08) 25%, rgba(255, 255, 255, .08) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .08) 75%, rgba(255, 255, 255, .08) 76%, transparent 77%, transparent)',
                  backgroundSize: '60px 60px'
                }}>
              </div>
            </div>
            
            {/* Abstract office elements - windows/panels */}
            <div className="absolute inset-x-0 top-0 h-1/3 flex justify-around overflow-hidden opacity-20">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-full w-24 bg-white/30 mx-1 rounded-b-lg transform translate-y-[-20%]"></div>
              ))}
            </div>
            
            {/* Professional team representation */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="relative h-72 w-full max-w-5xl">
                {/* Stylized desk/table */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-12 bg-white/10 rounded-t-md backdrop-blur-sm"></div>
                
                {/* Team silhouettes with glow effect */}
                <div className="absolute bottom-12 left-0 right-0 flex justify-around items-end">
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
                
                {/* Conference room table effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-4 bg-white/5 rounded-t-full blur-sm"></div>
                
                {/* Abstract computer/device representations */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-4/5 flex justify-around">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-3 bg-gold-400/30 rounded-sm blur-[1px]"></div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Light beams effect */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-gold-400/20 to-transparent transform rotate-[-30deg] blur-md"></div>
              <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-gold-400/20 to-transparent transform rotate-[20deg] blur-md"></div>
            </div>
          </div>
        </div>
        
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-600/5 rounded-full filter blur-3xl opacity-20 z-0"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-gold-600/5 rounded-full filter blur-3xl opacity-20 z-0"></div>

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
              <span className="inline-block text-sm font-medium text-gold-400 px-3 py-1 bg-gold-400/10 rounded-full mb-6">
                Premier Staffing Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Connecting{" "}
              <span className="text-gold-400">Exceptional Talent</span> with
              Industry Leaders
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg font-bold text-white max-w-xl"
            >
              At Allied Pro Staffing, we specialize in connecting the
              right people with the right opportunities, delivering tailored
              staffing solutions that drive business success.
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
                className="inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-black bg-gold-400 hover:bg-gold-500 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
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
                      <div className="text-sm text-gray-300">Successful Placements</div>
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
                      <div className="text-sm text-gray-300">Years Experience</div>
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
