
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <Navbar />
      <div className="container mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              At Allied Pro Staffing ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Register on our website</li>
              <li>Submit a job application</li>
              <li>Contact us via email, phone, or contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Request information about our services</li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">
              We may use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing and maintaining our services</li>
              <li>Matching candidates with job opportunities</li>
              <li>Communicating with you about our services</li>
              <li>Responding to your inquiries and requests</li>
              <li>Improving our website and services</li>
              <li>Sending newsletters and marketing communications</li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">5. Third-Party Disclosure</h2>
            <p className="mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Potential employers (with your consent)</li>
              <li>Service providers who assist us in operating our website and conducting our business</li>
              <li>Legal authorities when required by law</li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">6. Your Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have rights regarding your personal information, such as:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Accessing your personal information</li>
              <li>Correcting inaccurate information</li>
              <li>Deleting your personal information</li>
              <li>Restricting or objecting to processing</li>
              <li>Data portability</li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-4">
              Allied Pro Staffing<br />
              6228 Crooked Creek Drive<br />
              Mason, OH 45040<br />
              Phone: +1 (513) 216-2663<br />
              Email: info@alliedprostaffing.com
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default PrivacyPolicy;
