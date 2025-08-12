import React from "react";
import {
  Rocket,
  Users,
  Globe,
  TrendingUp,
  Handshake,
  Award,
} from "lucide-react";
import Badge from "../Badge";
import { Card, CardContent } from "../ui/card";
import { motion } from "motion/react";

const whyus = () => {
  const cards = [
    {
      icon: Rocket,
      title: "Innovation First",
      description:
        "Cutting-edge solutions that drive market leadership and transform industries with the latest technologies and methodologies.",
      color: "from-[#20ab26] to-[#1a8f21]",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Industry veterans with decades of combined experience across multiple sectors and specialized domains.",
      color: "from-[#1a8f21] to-[#16a085]",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Worldwide presence and international expertise with operations spanning multiple continents and markets.",
      color: "from-[#16a085] to-[#27ae60]",
    },
    {
      icon: TrendingUp,
      title: "Proven Growth",
      description:
        "Consistent results and measurable success across all ventures with documented track record of achievements.",
      color: "from-[#27ae60] to-[#2ecc71]",
    },
    {
      icon: Handshake,
      title: "Trusted Partner",
      description:
        "Reliable ally committed to your long-term success with transparent communication and dedicated support.",
      color: "from-[#2ecc71] to-[#20ab26]",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "Unwavering commitment to delivering exceptional quality in every project and maintaining highest standards.",
      color: "from-[#20ab26] to-[#27ae60]",
    },
  ];

  return (
    <section className="py-30 bg-gradient-to-b from-accent to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-texture-grid opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge title="Why Choose Us" />

          <h2 className="font-heading text-5xl md:text-6xl font-bold text-charcoal mb-8 mt-5">
            Excellence in Every{" "}
            <span className="bg-gradient-to-r from-primary to-[#1a8f21] bg-clip-text text-transparent">
              Venture
            </span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We combine innovation, expertise, and dedication to deliver
            exceptional results that drive your business forward with measurable
            impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="modern-card h-full border-0 transition-all duration-500 hover:translate-y-3 relative overflow-hidden bg-texture-noise">
                  {/* Gradient Background Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0  group-hover:translate-x-full transform transition-transform duration-1000"></div>
                  <CardContent className="p-10 relative z-10">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className="relative">
                        <div
                          className={`w-20 h-20 bg-gradient-to-br ${card.color} rounded-3xl flex items-center justify-center group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                        >
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                        {/* Icon Glow Effect */}
                        <div
                          className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${card.color} rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacitiy duration-500`}
                        ></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="font-heading text-2xl font-semibold text-charcoal group-hover:text-primary transition-colors duration-300">
                        {card.title}
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed text-base">
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-[#1a8f21] group-hover:w-full transition-all duration-500 delay-200"></div>
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

export default whyus;
