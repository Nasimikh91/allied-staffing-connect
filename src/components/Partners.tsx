
import React from "react";
import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Partner {
  name: string;
  logoUrl: string;
}

const partners: Partner[] = [
  { 
    name: "IBM", 
    logoUrl: "https://1000logos.net/wp-content/uploads/2016/11/IBM-Logo.png" 
  },
  { 
    name: "Bank of America", 
    logoUrl: "https://1000logos.net/wp-content/uploads/2021/05/Bank-of-America-logo.png" 
  },
  { 
    name: "Ernest Capital", 
    logoUrl: "https://t3.ftcdn.net/jpg/03/01/74/00/360_F_301740003_BjWgI7VQ2FZ2qHGdGfqgXM1jG0aLxg2h.jpg" 
  },
  { 
    name: "JP Morgan Chase & Co", 
    logoUrl: "https://1000logos.net/wp-content/uploads/2016/10/JP-Morgan-Logo.png" 
  },
  { 
    name: "CrowdStrike", 
    logoUrl: "https://1000logos.net/wp-content/uploads/2020/08/CrowdStrike-Logo.png" 
  },
  { 
    name: "Charles Schwab", 
    logoUrl: "https://1000logos.net/wp-content/uploads/2021/05/Charles-Schwab-logo.png" 
  },
  { 
    name: "Goldman Sachs", 
    logoUrl: "https://1000logos.net/wp-content/uploads/2016/11/Goldman-Sachs-Logo.png" 
  },
  { 
    name: "Expedia Group", 
    logoUrl: "https://1000logos.net/wp-content/uploads/2017/05/Expedia-Logo.png" 
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

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <CardContent className="p-6 h-40 flex items-center justify-center">
                      <div className="relative h-full w-full flex items-center justify-center">
                        <img 
                          src={partner.logoUrl} 
                          alt={`${partner.name} logo`} 
                          className="max-h-full max-w-full object-contain"
                        />
                        <span className="sr-only">{partner.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static position-static" />
              <CarouselNext className="relative static position-static" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Partners;
