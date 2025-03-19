import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImagePath, setCurrentImagePath] = useState('');
  
  // Define image paths - ensure they're absolutely correct
  const primaryImagePath = 'lovable-uploads/80c83d07-8d5e-4076-bf55-1909f6f3e2cb.png';
  const fallbackImagePath = 'lovable-uploads/562340c9-d9eb-40ac-a0a3-8a67bbfb5fe3.png';

  useEffect(() => {
    const loadImage = (path) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = path;
        img.onload = () => resolve(path);
        img.onerror = () => reject(new Error(`Failed to load: ${path}`));
      });
    };

    // Try to load primary image first, then fallback
    console.log('Attempting to load primary image:', primaryImagePath);
    
    loadImage(primaryImagePath)
      .then(path => {
        console.log('Successfully loaded primary image');
        setCurrentImagePath(path);
        setImageLoaded(true);
      })
      .catch(error => {
        console.error('Primary image failed to load:', error.message);
        
        // Try fallback image
        console.log('Attempting to load fallback image:', fallbackImagePath);
        return loadImage(fallbackImagePath);
      })
      .then(path => {
        if (path) {
          console.log('Successfully loaded fallback image');
          setCurrentImagePath(path);
          setImageLoaded(true);
        }
      })
      .catch(error => {
        console.error('All images failed to load:', error.message);
        // Set a default solid color background instead
        setImageLoaded(true);
      });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: imageLoaded && currentImagePath ? `url('${currentImagePath}')` : 'none',
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in'
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
      </div>

      {/* Fallback background color while image loads */}
      <div className="absolute inset-0 bg-black z-[-1]"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gold-600/5 rounded-full filter blur-3xl opacity-20 z-0"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-gold-600/5 rounded-full filter blur-3xl opacity-20 z-0"></div>

      {/* Rest of the Hero component */}
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
              className="text-lg text-gray-300 max-w-xl"
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
                className="inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-gold-400 border border-gold-700/30 hover:bg-gold-900/20 rounded-md transition-all duration-300"
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
