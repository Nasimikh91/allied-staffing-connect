
import React from "react";
import { motion } from "framer-motion";

interface Partner {
  name: string;
  logoUrl: string;
}

const partners: Partner[] = [
  { 
    name: "IBM", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
  },
  { 
    name: "Bank of America", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Bank_of_America_logo.svg" 
  },
  { 
    name: "Ernest Capital", 
    // Using a standard finance logo icon that's easily visible on dark background
    logoUrl: "https://cdn-icons-png.flaticon.com/512/1048/1048277.png" 
  },
  { 
    name: "JP Morgan Chase & Co", 
    // Using a cleaner version of the logo that works better with invert filter
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/42/JPMorgan_Chase_Logo_2008.svg" 
  },
  { 
    name: "CrowdStrike", 
    // Using a simpler version of the logo
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/96/Crowdstrike_logo.svg" 
  },
  { 
    name: "Charles Schwab", 
    // Using a cleaner version of the logo that works better with invert filter
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/82/Charles_Schwab_Corporation_logo.svg" 
  },
  { 
    name: "Goldman Sachs", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg" 
  },
  { 
    name: "Expedia Group", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Expedia_2012_logo.svg" 
  },
];

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Partners</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We work with leading companies across various industries to provide exceptional IT talent and solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="bg-gray-800 hover:bg-gray-750 hover:shadow-lg transition-all duration-300 px-6 py-8 rounded-lg h-40 flex items-center justify-center border border-gray-700">
                <div className="relative h-full w-full flex items-center justify-center p-4">
                  <img 
                    src={partner.logoUrl} 
                    alt={`${partner.name} logo`} 
                    className="max-h-full max-w-full object-contain filter invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="sr-only">{partner.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
