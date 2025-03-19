import React from "react";
import { MapPin, Phone, Mail, ArrowRight, ExternalLink } from "lucide-react";
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
              <div className="mt-4">
                <a
                  href="https://alliedprostaffing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-400 hover:text-primary-300 transition-colors w-fit"
                >
                  <span>alliedprostaffing.com</span>
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
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
