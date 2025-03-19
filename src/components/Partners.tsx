
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
  isText?: boolean;
  textColor?: string;
  bgColor?: string;
}

const partners: Partner[] = [
  { 
    name: "IBM", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
  },
  { 
    name: "Bank of America", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bank_of_America_logo.svg/2560px-Bank_of_America_logo.svg.png" 
  },
  { 
    name: "Ernest Capital", 
    logoUrl: "", // Empty string to satisfy TypeScript requirements
    isText: true,
    textColor: "#5A3D2B",
    bgColor: "#ffffff" // Changed to white for better visibility
  },
  { 
    name: "JP Morgan", 
    logoUrl: "public/lovable-uploads/397abe62-c464-4ee5-a332-6022b04faf44.png" 
  },
  { 
    name: "CrowdStrike", 
    logoUrl: "public/lovable-uploads/318bfc0c-fe3e-4178-a0d0-ed237df4cbc0.png" 
  },
  { 
    name: "Charles Schwab", 
    logoUrl: "public/lovable-uploads/4bd5c7a1-4677-4328-a120-c42d51cfe870.png" 
  },
  { 
    name: "Goldman Sachs", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/2560px-Goldman_Sachs.svg.png" 
  },
  { 
    name: "Expedia Group", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Expedia_2012_logo.svg/2560px-Expedia_2012_logo.svg.png" 
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
                <CarouselItem key={index} className="basis-full">
                  <Card className="bg-white border-gray-300 hover:border-gray-400 transition-all duration-300">
                    <CardContent className="p-6 h-40 flex items-center justify-center">
                      <div className="relative h-full w-full flex items-center justify-center">
                        {partner.isText ? (
                          <div 
                            className="h-full w-full flex items-center justify-center rounded-md"
                            style={{ backgroundColor: partner.bgColor }}
                          >
                            <h3 
                              className="text-2xl font-serif font-bold"
                              style={{ color: partner.textColor }}
                            >
                              {partner.name}
                            </h3>
                          </div>
                        ) : (
                          <img 
                            src={partner.logoUrl} 
                            alt={`${partner.name} logo`} 
                            className="max-h-full max-w-full object-contain" 
                            style={{ maxWidth: "80%" }}
                          />
                        )}
                        <span className="sr-only">{partner.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Partners;
