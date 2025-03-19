
import React from "react";
import { motion } from "framer-motion";

interface Partner {
  name: string;
  logo?: string; // Optional logo path
}

const partners: Partner[] = [
  { name: "IBM" },
  { name: "Bank of America" },
  { name: "Ernest Capital" },
  { name: "JP Morgan, Chase & Co" },
  { name: "CrowdStrike" },
  { name: "Charles Schwab" },
  { name: "Goldman Sachs" },
  { name: "Expedia Group" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex justify-center items-center"
            >
              <div className="bg-gray-800 hover:bg-gray-750 transition-colors px-6 py-8 rounded-lg w-full h-32 flex items-center justify-center border border-gray-700">
                <span className="text-xl font-semibold text-white text-center">{partner.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
