import React from "react";
import { motion } from "motion/react";
import SecHeader from "@/components/SecHeader";
import Badge from "@/components/Badge";
import CTA from "@/components/Cta";
import { Card, CardContent } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const OurBusinesses = () => {
  const businesses = [
    {
      id: 1,
      name: "MakeMyEducation",
      description:
        "Empowering students worldwide with comprehensive educational consulting, admissions guidance, and global learning opportunities.",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      link: "/business/mme",
      category: "Education",
      color: "from-[#20ab26] to-[#1a8f21]",
    },
    {
      id: 2,
      name: "Havells Partnership",
      description:
        "Strategic alliance delivering cutting-edge electrical solutions, smart home automation, and energy-efficient technologies.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      link: "/business/havells",
      category: "Technology",
      color: "from-[#1a8f21] to-[#16a085]",
    },
  ];

  return (
    <section
      id="businesses"
      className="y-300 bg-background relative overflow-hidden py-30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-texture-grid opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <SecHeader
          title="Our Key"
          highlighted="Business Ventures"
          description="Discover our flagship businesses that are transforming industries and creating value for communities worldwide."
          badge={<Badge title="Our Businesses" />}
        />

        {/* Businesses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {businesses.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 1, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: item.id * 0.2,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="modern-card h-full border-0 transition-all duration-500 hover:-translate-y-2 overflow-hidden bg-texture-noise">
                <div className="relative">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 glass-effect text-charcoal text-sm font-body font-semibold rounded-full shadow-lg">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                </div>

                <CardContent className="p-10">
                  <div className="space-y-6">
                    <h3 className="font-heading text-3xl font-semibold text-charcoal group-hover:text-primary transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed text-base">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-6">
                      <Link to={item.link}>
                        <Button
                          variant="outline"
                          className="font-body border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 x-6 py-3 rounded-full font-semibold"
                        >
                          Learn More  
                        </Button>
                      </Link>

                      <motion.div
                        className="w-14 h-14 rounded-full bg-secondary group-hover:bg-primary flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer"
                        whileHover={{ scale: 1.1, rotate: 45 }}
                      >
                        <Link to={item.link}>
                          <ArrowRight className="h-6 w-6 text-charcoal group-hover:text-white transition-colors duration-300" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <CTA
          title="Ready to Partner with Us?"
          description="Join our network of successful partnerships and discover new opportunities for growth and innovation."
          btnText="Explore Partnership Opportunities"
          path="/"
        />
      </div>
    </section>
  );
};

export default OurBusinesses;
