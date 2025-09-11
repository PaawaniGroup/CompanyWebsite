import React from "react";
import { motion } from "motion/react";
import {
  Zap,
  Shield,
  Lightbulb,
  Home,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import SecHeader from "@/components/SecHeader";
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import cta from "@/assets/havells-cta.webp"
import hero from "@/assets/havells-hero.webp"

const Havells = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const solutions = [
    {
      id: 1,
      icon: Lightbulb,
      title: "Smart Lighting Solutions",
      description:
        "Energy-efficient LED lighting systems with smart controls and automation capabilities.",
      // features: [
      //   "LED Technology",
      //   "Smart Controls",
      //   "Energy Saving",
      //   "Remote Management",
      // ],
    },
    {
      id: 2,
      icon: Home,
      title: "Home Automation",
      description:
        "Complete smart home solutions for modern living with integrated IoT devices.",
      // features: [
      //   "Voice Control",
      //   "Mobile App",
      //   "Security Integration",
      //   "Energy Monitoring",
      // ],
    },
    {
      id: 3,
      icon: Zap,
      title: "Electrical Infrastructure",
      description:
        "Comprehensive electrical solutions for residential, commercial, and industrial applications.",
      // features: [
      //   "Switchgear",
      //   "Distribution Boards",
      //   "Circuit Protection",
      //   "Power Management",
      // ],
    },
    {
      id: 4,
      icon: Shield,
      title: "Safety & Protection",
      description:
        "Advanced safety systems and protective devices for electrical installations.",
      // features: [
      //   "RCBO Technology",
      //   "Surge Protection",
      //   "Fire Safety",
      //   "Emergency Systems",
      // ],
    },
  ];

  const products = [
    {
      id: 1,
      category: "Lighting",
      name: "Smart Lighting",
      description:
        "Premium quality LED downlights for residential and commercial spaces.",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/g/l/glamax_tw_downlighter_1.jpg",
    },
    {
      id: 2,
      category: "Automation",
      name: "Smart Switches and Panels",
      description:
        "Intelligent switching solutions with app control and voice commands.",
      image:
        "https://havells.com/media/catalog/product/cache/2051dfe7399bbb12fcdb3313c6f79cc4/1/_/1_dot_3_20230407_black_copy_1.jpg",
    },
    {
      id: 3,
      category: "Infrastructure",
      name: "IoT-enabled Appliances",
      description: "Havells is building an ecosystem of smart products that can be controlled with their mobile app",
      image:
        "https://www.smarthomeworld.in/wp-content/uploads/2024/04/Untitled-design-2-6-1024x576.png",
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
                {/* <Button className="btn-modern text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300">
                  Explore Solutions
                </Button> */}
                <Link to="/contact">
                  <Button
                    onClick={scrollToTop}
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </Link>
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
                  src={hero}
                  alt="Havells Automation"
                  className="w-full h-[500px] object-cover"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" /> */}
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
                      {/* <ul className="space-y-2">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="font-body text-charcoal">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul> */}
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
                      +91 7302983393
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
                      contact@paawanigroup.com
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
                      651/B, Sainik Colony Near Ganga Enclave, Roorkee, Uttarakhand Pincode - 247667
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
                  src={cta}
                  alt="Smart Home"
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
