
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
    
    // Explicitly preload background images
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
      console.log('Preloading image:', src);
    };
    
    preloadImage('lovable-uploads/76997e81-ebe5-4361-a39a-d308c3819a56.png');
    
    // Set the body background to light theme
    document.body.className = 'bg-white text-gray-900';
    
    // Add service worker registration with better error handling
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
            
            // Check for updates to the Service Worker
            registration.update();
            
            // If there's a waiting worker, let's have it take over
            if (registration.waiting) {
              registration.waiting.postMessage({type: 'SKIP_WAITING'});
            }
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
          });
      });
      
      // Reload the page when the Service Worker is updated
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('Service Worker controller changed, reloading page');
        window.location.reload();
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
