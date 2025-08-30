import React from "react";
import SectionHeader from "../SecHeader";
import Badge from "../Badge";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";

const OurPartners = () => {
  const partners = [
    {
      id: 1,
      logoUrl:
        "https://logos-world.net/wp-content/uploads/2023/03/Havells-Logo.png",
      title: "Havells",
      badge: "Platinum Partner",
      description:
        "Leading provider of innovative solutions in the tech industry.",
      category: "Automation",
      website: "https://havells.com/",
    }
  ];

  return (
    <section
      id="our-partners"
      className="py-30 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-texture-dots opacity-100"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full opacity-20"></div>
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary/4 rounded-full opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <SectionHeader
        title="Trusted"
        highlighted="Partnerships"
        description="We collaborate with industry leaders to deliver exceptional value
            and innovative solutions to our clients worldwide."
        badge={<Badge title="Our Partners" />}
      />

        {/* Section Content  */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner) => {
            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: partner.id * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="modern-card border-0 transition-all duration-300 hover:-translate-y-2 bg-texture-noise">
                  <CardContent className="px-6 pt-2 text-center">
                    {/* Partner Logo */}
                    <div className="w-32 h-20 mx-auto mb-6 flex items-center justify-center overflow-hidden">
                      <img
                        src={partner.logoUrl}
                        alt={partner.title}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>

                    {/* Partner Details */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-charcoal     group-hover:text-primary transition-colors duration-300 mb-2">
                          {partner.title}
                        </h3>
                        {/* <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-body font-semibold rounded-full">
                          {partner.badge}
                        </div> */}
                      </div>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">
                        {partner.description}
                      </p>
                      <div className="text-xs font-body text-muted-foreground">
                        {partner.category}
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="font-body border-primary/30 text-primary hover:bg-primary hover:text-white transition-all duration-300 group/btn opacity-0 group-hover:opacity-100"
                        asChild
                      >
                        <a
                          href={partner.website}
                          className="inline-flex items-center gap-2"
                        >
                          Visit Website
                          <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
