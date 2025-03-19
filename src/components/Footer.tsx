
import React from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div>
              <Link to="/" className="inline-flex items-center">
                <div className="mr-3 h-10 w-10 text-primary-400">
                  <svg viewBox="0 0 24 24" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M12 2L4 6V12C4 15.31 7.58 20 12 22C16.42 20 20 15.31 20 12V6L12 2Z" 
                      fill="currentColor" 
                      fillOpacity="0.2"
                    />
                    <path 
                      d="M12 4L6 7.27273V12C6 14.4545 8.72727 18.1818 12 19.6364C15.2727 18.1818 18 14.4545 18 12V7.27273L12 4Z" 
                      fill="currentColor"
                    />
                    <path 
                      d="M9 14L10.5 9.5L12 14L15 9L13.5 14.5H9Z" 
                      fill="#121212" 
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold text-primary-400">Allied Pro Staffing</span>
              </Link>
              <p className="mt-4 text-gray-400">
                Connecting exceptional talent with industry leaders for over a
                decade.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" /> Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" /> About Us
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" /> Our Services
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" /> Permanent Placement
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" /> Contract Staffing
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" /> Executive Search
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="text-gray-400 hover:text-primary-400 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" /> Professional Recruiting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  6228 Crooked Creek Drive,<br />
                  Mason, OH 45040
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <a
                  href="tel:+15132162663"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  +1 (513) 216-2663
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@alliedprostaffing.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  info@alliedprostaffing.com
                </a>
              </li>
              <li className="text-gray-400 mt-2">
                <p className="font-medium mb-1">Hours:</p>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Allied Pro Staffing. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-500 hover:text-primary-400 text-sm transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-500 hover:text-primary-400 text-sm transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookies"
                    className="text-gray-500 hover:text-primary-400 text-sm transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
