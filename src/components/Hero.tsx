import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Background image with original image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/lovable-uploads/1e9a6991-2300-4fb0-8944-af387d5fb32d.png"
          alt="Office background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-white/50"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-primary-100 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      {/* Keep the rest of the Hero component the same */}
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
              <span className="inline-block text-sm font-medium text-primary-600 px-3 py-1 bg-primary-100/80 rounded-full mb-6">
                Premier Staffing Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Connecting{" "}
              <span className="text-primary-600">Exceptional Talent</span> with
              Industry Leaders
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-700 max-w-xl"
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
                className="inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
              >
                Explore Our Services
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-primary-600 border border-primary-300 hover:bg-primary-50 rounded-md transition-all duration-300"
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
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-primary-100/30 rounded-3xl transform rotate-1"></div>
            <div className="relative bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <div className="bg-primary-50 h-32 rounded-lg flex items-center justify-center p-6 border border-primary-100">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600">150+</div>
                      <div className="text-sm text-gray-700">Successful Placements</div>
                    </div>
                  </div>
                  <div className="bg-primary-50 h-48 rounded-lg flex items-center justify-center p-6 border border-primary-100">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600">95%</div>
                      <div className="text-sm text-gray-700">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-primary-50 h-48 rounded-lg flex items-center justify-center p-6 border border-primary-100">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600">10</div>
                      <div className="text-sm text-gray-700">Years Experience</div>
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
        <span className="text-sm text-gray-600 mb-2">Scroll to explore</span>
        <ChevronDown className="w-5 h-5 text-primary-600" />
      </motion.div>
    </section>
  );
};

export default Hero;
