
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

interface Review {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "John Schmidt",
    position: "IT Manager",
    company: "IBM",
    content: "Allied IT Consultant has been instrumental in helping us find specialized IT talent quickly. Their understanding of our technical requirements and company culture resulted in candidates who were not just qualified, but who integrated seamlessly with our team.",
    rating: 5,
  },
  {
    name: "Neha Kumar",
    position: "Director of Cyber Security Services",
    company: "Bank of America",
    content: "When we needed to scale our cybersecurity team rapidly, Allied IT Consultant delivered exceptional candidates within tight timeframes. Their technical screening process saved us countless hours and ensured we only interviewed the most qualified professionals.",
    rating: 5,
  },
  {
    name: "Gaurav Kumar",
    position: "Vice President of Wealth Management",
    company: "Ernest Capital",
    content: "The technical consultants provided by Allied IT have transformed our wealth management platforms. Their expertise in financial technology and understanding of our specific needs has been invaluable to our digital transformation efforts.",
    rating: 5,
  },
  {
    name: "Jessica Benker",
    position: "Project Manager",
    company: "Visa",
    content: "Allied IT Consultant's talent acquisition team understood exactly what skills we needed for our complex projects. The consultants they placed have consistently delivered high-quality work and met critical deadlines.",
    rating: 5,
  },
  {
    name: "Rosemary B.",
    position: "HR specialist",
    company: "CrowdStrike",
    content: "Working with Allied IT Consultant has simplified our technical hiring process tremendously. Their commitment to finding candidates who are both technically proficient and aligned with our company values sets them apart from other staffing agencies.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-950">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Discover how we've helped organizations find the perfect IT talent and solutions
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="p-1">
                    <Card className="bg-gray-900 border-gray-800 hover:border-gold-700/50 transition-all duration-300">
                      <CardContent className="p-8 flex flex-col">
                        <div className="mb-4 flex items-center">
                          <Quote className="text-gold-400 mr-2 h-6 w-6" />
                        </div>
                        <p className="text-gray-300 mb-6 text-lg">{review.content}</p>
                        <div className="flex items-center mt-auto">
                          <div>
                            <div className="flex mb-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                              ))}
                            </div>
                            <h4 className="font-semibold text-white text-xl">{review.name}</h4>
                            <p className="text-sm text-gray-400">
                              {review.position} at {review.company}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static bg-primary text-primary-foreground hover:bg-primary/90" />
              <CarouselNext className="relative static bg-primary text-primary-foreground hover:bg-primary/90" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
