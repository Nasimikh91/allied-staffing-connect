
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const CookiePolicy = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    // Set the body background to light theme
    document.body.className = 'bg-white text-gray-900';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-900"
    >
      <Navbar />
      <div className="container mx-auto px-4 lg:px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900">Cookie Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              This Cookie Policy explains how Allied IT Consultant ("we," "our," or "us") uses cookies and similar technologies on our website to enhance your browsing experience.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">2. What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They allow the website to recognize your device and remember information about your visit, such as your preferences or login information.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">3. Types of Cookies We Use</h2>
            <h3 className="text-lg font-medium mt-6 mb-3">Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Performance and Analytics Cookies</h3>
            <p className="mb-4">
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This information helps us improve our website functionality.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Functional Cookies</h3>
            <p className="mb-4">
              These cookies enable our website to provide enhanced functionality and personalization, such as remembering your preferences and settings.
            </p>
            
            <h3 className="text-lg font-medium mt-6 mb-3">Targeting or Advertising Cookies</h3>
            <p className="mb-4">
              These cookies are used to deliver advertisements more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">4. Third-Party Cookies</h2>
            <p className="mb-4">
              We may allow third-party service providers to place cookies on our website to provide enhanced functionality. These third parties may collect information about your online activities over time and across different websites.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">5. Managing Cookies</h2>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings preferences. You can usually find these settings in the "options" or "preferences" menu of your browser.
            </p>
            <p className="mb-4">
              Please note that disabling certain cookies may impact your experience on our website, as some features may not function properly.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">6. Changes to This Cookie Policy</h2>
            <p className="mb-4">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have questions about our Cookie Policy, please contact us at:
            </p>
            <p className="mb-4">
              Allied IT Consultant<br />
              6228 Crooked Creek Drive<br />
              Mason, OH 45040<br />
              Phone: +1 (513) 299-6363<br />
              Email: info@allieditconsultant.net
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default CookiePolicy;
