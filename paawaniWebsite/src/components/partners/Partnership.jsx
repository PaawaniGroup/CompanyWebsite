import React from "react";
import Badge from "../Badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { motion } from "motion/react";
import {
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Globe,
  Award,
} from "lucide-react";

const Partnership = () => {
  const cards = [
    {
      id: 1,
      icon: Users,
      title: "Strategic Collaboration",
      description:
        "Work with industry leaders to expand market reach and capabilities.",
    },
    {
      id: 2,
      icon: Target,
      title: "Targeted Growth",
      description:
        "Access new markets and customer segments through our established networks.",
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Innovation Access",
      description:
        "Leverage cutting-edge technologies and innovative solutions.",
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Accelerated Success",
      description:
        "Fast-track your business growth with proven strategies and support.",
    },
    {
      id: 5,
      icon: Globe,
      title: "Global Reach",
      description:
        "Expand internationally with our worldwide presence and expertise.",
    },
    {
      id: 6,
      icon: Award,
      title: "Quality Assurance",
      description:
        "Maintain highest standards with our quality-focused approach.",
    },
  ];

  return (
    <section
      id="partnership"
      className="pt-30 bg-accent relative overflow-hidden"
    >
      {/* BG Elements */}
      <div className="absolute inset-0 bg-texture-grid opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <Badge title="Partnership" />
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-charcoal mb-8">
            Be Our{" "}
            <span className="bg-gradient-to-r from-primary to-[#1a8f21] bg-clip-text text-transparent">
              Partner
            </span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join forces with Paawani Group to unlock new opportunities, drive
            innovation, and achieve sustainable growth together.
          </p>
        </motion.div>

        {/* Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Left Side - Text */}
            <div className="glass-effect rounded-3xl p-10 bg-texture-noise">
              <div className="space-y-8">
                <h3 className="font-heading text-4xl font-bold text-charcoal">
                  Why Partner with Paawani Group?
                </h3>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  We believe in the power of collaboration. Our partnership
                  program is designed to create mutually beneficial
                  relationships that drive growth, innovation, and success for
                  all parties involved.
                </p>
              </div>

              <div className="space-y-6 mt-8">
                {[
                  "Proven track record across multiple industries",
                  "Comprehensive support and resources",
                  "Flexible partnership models",
                  "Global network and reach",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-[#1a8f21] rounded-full" />
                    <span className="font-body text-charcoal font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Button className="btn-modern font-body text-white px-10 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg mt-5">
                Start Your Partnership Journey
              </Button>
            </div>
          </motion.div>

          {/* Right Side - Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: card.id * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="modern-card h-full border-0 transition-all duration-300 hover:translate-y-1 bg-texture-noise">
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-[#1a8f21] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="font-heading text-xl font-semibold text-charcoal mb-3">{card.title}</h4>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
