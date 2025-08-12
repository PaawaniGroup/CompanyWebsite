import React from "react";
import Badge from "../Badge";
import { Card, CardContent } from "../ui/card";
import { motion } from "motion/react";
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
      website: "#",
    },
    {
      id: 2,
      logoUrl:
        "https://edurank.org/assets/img/uni-logos/graphic-era-hill-university-logo.png",
      title: "Graphic Era",
      badge: "Gold Partner",
      description:
        "Leading provider of innovative solutions in the tech industry.",
      category: "Education",
      website: "#",
    },
    {
      id: 3,
      logoUrl:
        "https://animationvisarts.com/wp-content/uploads/2017/05/chandigarh-university-seal-1.png",
      title: "Chandigarh University",
      badge: "Gold Partner",
      description:
        "Leading provider of innovative solutions in the tech industry.",
      category: "Technology",
      website: "#",
    },
    {
      id: 4,
      logoUrl:
        "https://cis-india.org/Christuniversitylogocolour.jpg/download",
      title: "Christ University",
      badge: "Gold Partner",
      description:
        "Leading provider of innovative solutions in the tech industry.",
      category: "Technology",
      website: "#",
    },
    {
      id: 5,
      logoUrl:
        "https://blog.oureducation.in/wp-content/uploads/2012/07/doon-university.gif",
      title: "Doon University",
      badge: "Gold Partner",
      description:
        "Leading provider of innovative solutions in the tech industry.",
      category: "Technology",
      website: "#",
      website: "",
    },
    {
      id: 6,
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEgRvyVAr3Q_Ka3Wausl2i8dbr0eZUoA5MK_auXU-nO5q99f_ApnCsHxJ7uto5lyCWC0M&usqp=CAU",
      title: "Parul University",
      badge: "Gold Partner",
      description:
        "Leading provider of innovative solutions in the tech industry.",
      category: "Technology",
      website: "#",
    },
  ];

  return (
    <section
      id="our-partners"
      className="py-30 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-texture-dots opacity-40"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary/4 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge title="Our Partners" />
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-charcoal mb-8 mt-5">
            Trusted{" "}
            <span className="bg-gradient-to-r from-primary to-[#1a8f21] bg-clip-text text-transparent">
              Partnerships
            </span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We collaborate with industry leaders to deliver exceptional value
            and innovative solutions to our clients worldwide.
          </p>
        </motion.div>

        {/* Section Content  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <CardContent className="p-8 text-center">
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
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-body font-semibold rounded-full">
                          {partner.badge}
                        </div>
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
