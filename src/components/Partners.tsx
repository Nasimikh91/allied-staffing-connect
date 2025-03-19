
import React from "react";
import { motion } from "framer-motion";

interface Partner {
  name: string;
  logoUrl: string;
}

const partners: Partner[] = [
  { 
    name: "IBM", 
    logoUrl: "https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/01_8-bar-positive.svg" 
  },
  { 
    name: "Bank of America", 
    logoUrl: "https://logos-world.net/wp-content/uploads/2020/11/Bank-of-America-Logo.png" 
  },
  { 
    name: "Ernest Capital", 
    logoUrl: "https://img.freepik.com/premium-vector/finance-logo-with-letter-e-gold-color_278222-562.jpg" 
  },
  { 
    name: "JP Morgan Chase & Co", 
    logoUrl: "https://logos-world.net/wp-content/uploads/2021/02/JP-Morgan-Chase-Logo.png" 
  },
  { 
    name: "CrowdStrike", 
    logoUrl: "https://www.crowdstrike.com/wp-content/uploads/2022/01/CS_LOCKUP_COLOR_POSITIVE.svg" 
  },
  { 
    name: "Charles Schwab", 
    logoUrl: "https://www.schwab.com/resource-center/insights/themes/custom/schwab/img/logo-blue.svg" 
  },
  { 
    name: "Goldman Sachs", 
    logoUrl: "https://www.goldmansachs.com/our-firm/images/logo.svg" 
  },
  { 
    name: "Expedia Group", 
    logoUrl: "https://www.expediagroup.com/wp-content/uploads/2022/03/EG_Mark_Blue_RGB.png" 
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
                    className="max-h-full max-w-full object-contain"
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
