
import React, { useEffect, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

// Lazily load non-critical sections to improve initial load time
const Services = React.lazy(() => import("@/components/Services"));
const About = React.lazy(() => import("@/components/About"));
const Contact = React.lazy(() => import("@/components/Contact"));
const Footer = React.lazy(() => import("@/components/Footer"));

// Simple loading component for lazy-loaded sections
const SectionLoading = () => (
  <div className="w-full py-12 flex justify-center">
    <div className="animate-pulse bg-gray-200 rounded-lg h-64 w-full max-w-3xl"></div>
  </div>
);

const Index = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    // Force scroll to top and ensure images load
    window.scrollTo(0, 0);
    
    // Preload the hero background image with proper path
    const img = new Image();
    img.src = '/lovable-uploads/1e9a6991-2300-4fb0-8944-af387d5fb32d.png';
    console.log('Preloading background image:', img.src);
    
    // Set the body background to light theme
    document.body.className = 'bg-white text-gray-900';
    
    // Add service worker registration for better offline support
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(error => {
          console.log('Service Worker registration failed:', error);
        });
      });
    }
  }, []);

  // Use simpler animations on mobile for better performance
  const pageAnimations = isMobile 
    ? { 
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3 }
      }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.5 }
      };

  return (
    <motion.div
      {...pageAnimations}
      className="min-h-screen"
    >
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoading />}>
        <Services />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <Footer />
      </Suspense>
    </motion.div>
  );
};

export default Index;
