
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary-500/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary-600/5 to-transparent"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute bg-primary-400/10 rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15],
              scale: [1, Math.random() * 0.2 + 0.9, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 5 + 5,
              ease: "easeInOut",
              yoyo: true,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-primary-400 px-3 py-1 bg-primary-900/30 rounded-full mb-5"
          >
            Contact Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
          >
            Get In Touch With Our IT Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300"
          >
            Have a question or ready to discuss your IT consulting needs? Reach out
            to us, and we'll be happy to assist you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-background rounded-xl shadow-sm p-8 border border-gray-800 relative overflow-hidden">
              {/* Card visual effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-400/5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              
              <h3 className="text-xl font-semibold text-foreground mb-6 relative">
                Contact Information
              </h3>

              <div className="space-y-6 relative">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-900/30 flex items-center justify-center mr-4 group-hover:bg-primary-900/40 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Our Office</h4>
                    <p className="text-gray-300">
                      6228 Crooked Creek Drive,<br />
                      Mason, OH 45040
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-900/30 flex items-center justify-center mr-4 group-hover:bg-primary-900/40 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Phone</h4>
                    <p className="text-gray-300">
                      <a
                        href="tel:+15132162663"
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        +1 (513) 216-2663
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-900/30 flex items-center justify-center mr-4 group-hover:bg-primary-900/40 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email</h4>
                    <p className="text-gray-300">
                      <a
                        href="mailto:info@allieditconsultant.net"
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        info@allieditconsultant.net
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 relative">
                <h4 className="font-medium text-foreground mb-4">Hours of Operation</h4>
                <div className="space-y-2">
                  <div className="flex justify-between group hover:bg-primary-900/10 px-2 py-1 rounded-md transition-colors duration-300">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-foreground font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between group hover:bg-primary-900/10 px-2 py-1 rounded-md transition-colors duration-300">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                  <div className="flex justify-between group hover:bg-primary-900/10 px-2 py-1 rounded-md transition-colors duration-300">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-background rounded-xl shadow-sm p-8 border border-gray-800 relative overflow-hidden">
              {/* Form visual effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary-400/5 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              
              <h3 className="text-xl font-semibold text-foreground mb-6 relative">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 bg-gray-900/70 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 bg-gray-900/70 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 bg-gray-900/70 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 bg-gray-900/70 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      required
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Staffing Needs">Staffing Needs</option>
                      <option value="Job Opportunities">Job Opportunities</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="block w-full px-4 py-3 bg-gray-900/70 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 font-medium tracking-wide text-black bg-primary-600 hover:bg-primary-700 rounded-md transition-all duration-300 disabled:bg-primary-400 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-500 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {formStatus === 'submitting' ? (
                      <span className="inline-flex items-center relative z-10">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : formStatus === 'success' ? (
                      <span className="inline-flex items-center relative z-10">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Sent Successfully
                      </span>
                    ) : (
                      <span className="inline-flex items-center relative z-10">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
