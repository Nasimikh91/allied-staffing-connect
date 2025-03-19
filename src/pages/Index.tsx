
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
    
    // Preload both potential background images
    const primaryImg = new Image();
    primaryImg.src = '/lovable-uploads/80c83d07-8d5e-4076-bf55-1909f6f3e2cb.png';
    console.log('Preloading primary background image:', primaryImg.src);
    
    const fallbackImg = new Image();
    fallbackImg.src = '/lovable-uploads/562340c9-d9eb-40ac-a0a3-8a67bbfb5fe3.png';
    console.log('Preloading fallback background image:', fallbackImg.src);
    
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
