
import * as React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfService: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    // Set the body background for consistency
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
      <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing or using the Allied IT Consultant website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">2. Description of Services</h2>
            <p className="mb-4">
              Allied IT Consultant provides staffing, recruiting, and placement services to connect job seekers with potential employers. Our services include permanent placement, contract staffing, executive search, and professional recruiting.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
            <p className="mb-4">
              When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">4. User Conduct</h2>
            <p className="mb-4">
              When using our services, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide false or misleading information</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our website</li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property of Allied IT Consultant or its licensors and is protected by copyright and other intellectual property laws.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">6. Disclaimer of Warranties</h2>
            <p className="mb-4">
              Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will be uninterrupted, error-free, or that defects will be corrected.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Allied IT Consultant shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">8. Modifications to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the modified terms.
            </p>
            
            <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-4">9. Contact Information</h2>
            <p className="mb-4">
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <p className="mb-4">
              Allied IT Consultant<br />
              6228 Crooked Creek Drive<br />
              Mason, OH 45040<br />
              Phone: <a href="tel:+15132996363" className="text-blue-600 hover:underline">+1 (513) 299-6363</a><br />
              Email: <a href="mailto:info@allieditconsultant.net" className="text-blue-600 hover:underline">info@allieditconsultant.net</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default TermsOfService;
