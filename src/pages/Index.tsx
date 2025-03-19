
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  useEffect(() => {
    // Force scroll to top and ensure images load
    window.scrollTo(0, 0);
    
    // Preload the hero background image with proper path
    const img = new Image();
    img.src = '/lovable-uploads/1e9a6991-2300-4fb0-8944-af387d5fb32d.png';
    console.log('Preloading background image:', img.src);
    
    // Set the body background to light theme
    document.body.className = 'bg-white text-gray-900';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Index;
