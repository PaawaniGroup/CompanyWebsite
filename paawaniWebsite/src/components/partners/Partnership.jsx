import React from "react";
import SectionHeader from "../SecHeader";
import Badge from "../Badge";
import { Link } from "react-router";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { motion } from "motion/react";
import { Target, Lightbulb, TrendingUp, Award } from "lucide-react";

const Partnership = () => {
  const cards = [
    {
      id: 1,
      icon: Target,
      title: "Targeted Growth",
      description:
        "Access new markets and customer segments through our established networks.",
    },
    {
      id: 2,
      icon: Lightbulb,
      title: "Innovation Access",
      description:
        "Leverage cutting-edge technologies and innovative solutions.",
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Accelerated Success",
      description:
        "Fast-track your business growth with proven strategies and support.",
    },
    {
      id: 4,
      icon: Award,
      title: "Quality Assurance",
      description:
        "Maintain highest standards with our quality-focused approach.",
    },
  ];

  const opportunities = [
    {
      type: "Strategic Alliance",
      description: "Long-term partnerships for market expansion and innovation",
      features: ["Joint ventures", "Technology sharing", "Market access"],
    },
    {
      type: "Distribution Partner",
      description: "Exclusive or regional distribution arrangements",
      features: ["Product distribution", "Sales support", "Training programs"],
    },
    {
      type: "Solution Partner",
      description: "Collaborative solution development and delivery",
      features: ["Co-development", "Technical integration", "Joint marketing"],
    },
  ];

  return (
    <section id="partner" className="py-30 bg-accent relative overflow-hidden">
      {/* BG Elements */}
      <div className="absolute inset-0 bg-texture-grid opacity-60" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <SectionHeader
          title="Be Our"
          highlighted="Partner"
          description="Join forces with Paawani Group to unlock new opportunities, drive
            innovation, and achieve sustainable growth together."
          badge={<Badge title="Partnership" />}
        />

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
                  Why Partner with Us?
                </h3>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  We believe in the power of collaboration. We partner with industry leaders to create mutually beneficial
                  relationships that drive growth, innovation, and success for
                  all parties involved.
                </p>
              </div>

              <div className="space-y-6 mt-8">
                {[
                  "Tailored for Your Success",
                  "Dedicated Partner Support",
                  "Forward-Thinking Strategies",
                  "Commitment to Your Growth",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-[#1a8f21] rounded-full" />
                    <span className="font-body text-charcoal font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button className="btn-modern font-body text-white px-10 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg mt-5">
                  Start Your Partnership Journey
                </Button>
              </Link>
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
                      <h4 className="font-heading text-xl font-semibold text-charcoal mb-3">
                        {card.title}
                      </h4>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Partnership Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-16 shadow-2xl bg-teture-wave relative overflow-hidden"
        >
          <div className="absolute inset-0 gradient-overlay-green-light" />
          <div className="relative z-10">
            {/* Subsection Header */}
            <div className="text-center mb-16">
              <h3 className="font-heading text-4xl font-bold text-charcoal mb-6">
                Partnership Opportunities
              </h3>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg">
                We offer various partnership models tailored to meet different
                business needs and objectives.
              </p>
            </div>

            {/* Content grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {opportunities.map((opportunities, index) => (
                <motion.div
                  key={opportunities.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 glass-effect rounded-2xl hover:shadow-xl transition-all duration-300 bg-texture-dots"
                >
                  <h4 className="font-heading text-2xl font-semibold text-charcoal mb-4">
                    {opportunities.type}
                  </h4>
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    {opportunities.description}
                  </p>
                  <ul className="space-y-3">
                    {opportunities.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="font-body text-sm text-muted-foreground flex items-center justify-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 b-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-4 h-4 bg-primary/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-10 w-6 h-6 bg-primary/20 rounded-full animate-pulse"></div>
    </section>
  );
};

export default Partnership;
