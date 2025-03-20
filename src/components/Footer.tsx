
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-gold-400">Allied IT Consultant</h3>
            <p className="text-gray-400 mb-4">
              Providing specialized IT staffing and consulting services tailored to your business needs.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#about" className="text-gray-400 hover:text-gold-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-gold-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="/#contact" className="text-gray-400 hover:text-gold-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="text-gray-400 hover:text-gold-400 transition-colors">IT Staffing</a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-gold-400 transition-colors">Contract Recruiting</a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-gold-400 transition-colors">Direct Hire</a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-gold-400 transition-colors">Executive Search</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
            <p className="text-gray-400 mb-2">
              6228 Crooked Creek Drive<br />
              Mason, OH 45040
            </p>
            <p className="text-gray-400 mb-2">
              Phone: <a href="tel:+15132996363" className="hover:text-gold-400 transition-colors">+1 (513) 299-6363</a>
            </p>
            <p className="text-gray-400 mb-2">
              Email: <a href="mailto:info@allieditconsultant.net" className="hover:text-gold-400 transition-colors">info@allieditconsultant.net</a>
            </p>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            &copy; {currentYear} Allied IT Consultant. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link to="/privacy" className="hover:text-gold-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold-400 transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-gold-400 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
