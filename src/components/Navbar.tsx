
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Close menu when changing from mobile to desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      )}
    >
      <div className="container px-4 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <div className="mr-2 h-10 w-10 md:h-14 md:w-14 text-gold-400">
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
                    fill="#000000" 
                  />
                </svg>
              </div>
              <span className="text-xl md:text-2xl font-bold text-gold-400 truncate">Allied Pro Staffing</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="flex space-x-8 items-center"
            >
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.name === "Home" ? (
                    <Link
                      to={link.href}
                      className="text-white hover:text-gold-400 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gold-500 after:transition-all"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-white hover:text-gold-400 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-gold-500 after:transition-all"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 font-medium tracking-tight text-black bg-gold-400 hover:bg-gold-500 rounded-md transition-colors duration-300"
                >
                  Contact Us
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </motion.li>
            </motion.ul>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gold-400 transition-colors p-2 menu-button"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - improved for better mobile UX */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-black mobile-menu"
        style={{ touchAction: "pan-y" }}
      >
        {isOpen && (
          <div className="px-6 py-4 space-y-2 shadow-inner">
            {navLinks.map((link) => (
              link.name === "Home" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-white hover:text-gold-400 font-medium border-b border-gray-800 active:bg-gray-900 transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-white hover:text-gold-400 font-medium border-b border-gray-800 active:bg-gray-900 transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center mt-4 px-5 py-3 font-medium text-black bg-gold-400 hover:bg-gold-500 rounded-md transition-colors active:bg-gold-600"
            >
              Contact Us
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
