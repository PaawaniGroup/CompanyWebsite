import React from "react";
import { motion } from "motion/react";
import {
  Zap,
  Shield,
  Lightbulb,
  Home,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import SecHeader from "@/components/SecHeader";
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Card, CardContent } from "@/components/ui/card";

const Havells = () => {
  const solutions = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Smart Lighting Solutions",
      description:
        "Energy-efficient LED lighting systems with smart controls and automation capabilities.",
      features: [
        "LED Technology",
        "Smart Controls",
        "Energy Saving",
        "Remote Management",
      ],
    },
    {
      id: 2,
      icon: Home,
      title: "Home Automation",
      description:
        "Complete smart home solutions for modern living with integrated IoT devices.",
      features: [
        "Voice Control",
        "Mobile App",
        "Security Integration",
        "Energy Monitoring",
      ],
    },
    {
      id: 3,
      icon: Zap,
      title: "Electrical Infrastructure",
      description:
        "Comprehensive electrical solutions for residential, commercial, and industrial applications.",
      features: [
        "Switchgear",
        "Distribution Boards",
        "Circuit Protection",
        "Power Management",
      ],
    },
    {
      id: 4,
      icon: Shield,
      title: "Safety & Protection",
      description:
        "Advanced safety systems and protective devices for electrical installations.",
      features: [
        "RCBO Technology",
        "Surge Protection",
        "Fire Safety",
        "Emergency Systems",
      ],
    },
  ];

  const products = [
    {
      id: 1,
      category: "Lighting",
      name: "LED Downlights",
      description:
        "Premium quality LED downlights for residential and commercial spaces.",
      image:
        "https://images.unsplash.com/photo-1675602487652-3a4d8cdada94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBzbWFydCUyMGhvbWUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NTY3MjAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      category: "Automation",
      name: "Smart Switches",
      description:
        "Intelligent switching solutions with app control and voice commands.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      category: "Infrastructure",
      name: "Distribution Boards",
      description: "Robust and reliable electrical distribution solutions.",
      image:
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-30 bg-white/70 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-texture-grid opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Badge title="Strategic Partnership" />
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-charcoal leading-tight">
                Powering{" "}
                <span className="bg-gradient-to-r from-primary to-[#1a8f21] bg-clip-text text-transparent">
                  Smart Solutions
                </span>
              </h1>

              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                Through our strategic partnership with Havells, we deliver
                cutting-edge electrical solutions, smart home automation, and
                energy-efficient technologies that transform the way you live
                and work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-modern text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300">
                  Explore Solutions
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1675602487652-3a4d8cdada94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBzbWFydCUyMGhvbWUlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1NTY3MjAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Havells Automation"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHeader
            title="Our Solutions"
            description="Comprehensive electrical and automation solutions designed for modern living and working spaces."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: solution.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="modern-card border-0 h-full hover:-translate-y-2 transition-all duration-300 bg-texture-noise">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#1a8f21] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-charcoal mb-4">
                        {solution.title}
                      </h3>
                      <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                        {solution.description}
                      </p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="font-body text-charcoal">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Featured Products
            </h2>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our range of innovative electrical products and smart
              solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: product.id * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="modern-card border-0 overflow-hidden hover:-translate-y-2 transition-all duration-300">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 glass-effect text-charcoal text-xs font-body font-semibold rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-charcoal mb-2">
                      {product.name}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl font-bold text-charcoal mb-6">
                Ready to Electrify Your Space?
              </h2>
              <p className="font-body text-xl text-muted-foreground mb-8 leading-relaxed">
                Contact us today to discuss your electrical and automation
                needs. Our experts are ready to provide customized solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-body font-semibold text-charcoal">
                      Call Us
                    </div>
                    <div className="font-body text-muted-foreground">
                      +91 749829384
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-body font-semibold text-charcoal">
                      Mail Us
                    </div>
                    <div className="font-body text-muted-foreground">
                      info@makemyeducation.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-body font-semibold text-charcoal">
                      Visit Us
                    </div>
                    <div className="font-body text-muted-foreground">
                      123 Education Street, Academic City
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1743327595893-f9eb22e04c01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBhY2FkZW1pYyUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc1NTY3MjAwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Graduation Ceremony"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Havells;
