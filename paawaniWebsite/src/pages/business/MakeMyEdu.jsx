import React from "react";
import { motion } from "motion/react";
import {
  UserCheck,
  Brain,
  BookOpen,
  Wallet,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import SecHeader from "@/components/SecHeader";
// import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const MakeMyEdu = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const services = [
    {
      id: 1,
      icon: BookOpen,
      title: "Schools & College Admissions",
      description:
        "Expert guidance and comprehensive support for admissions to educational institutions in India and abroad.",
      features: [
        "Smart Search & Filters",
        "Application & Deadline Tracker",
        "Document Management",
        "AI-Powered Recommendations",
      ],
    },
    {
      id: 2,
      icon: UserCheck,
      title: "Personalized Career Counseling",
      description:
        "One-on-one counseling with dedicated experts to help students on their academic journey.",
      features: [
        "1:1 Counseling Sessions",
        "AI Psychometric Test",
        "Profile Building",
        "Live Webinars & Events",
      ],
    },
    {
      id: 3,
      icon: Wallet,
      title: "Financial & Logistical Support",
      description:
        "Essential guidance for managing all aspects of the admission journey, including financial and travel needs.",
      features: [
        "Scholarship & Loan Guidance",
        "Visa Assistance",
        "Accommodation Search",
        "Travel Insurance & Booking",
      ],
    },
    {
      id: 4,
      icon: Brain,
      title: "AI-Powered Tools",
      description:
        "Utilize innovative AI tools to get personalized insights and simplify key parts of the application process.",
      features: [
        "Admission Prediction",
        "Scholarship Matching",
        "Document Generator (SOP, LOR, Resume)",
        "Application Tracker with Timeline",
      ],
    },
  ];

  // const partners = [
  //   "Harvard University",
  //   "MIT",
  //   "Stanford University",
  //   "Oxford University",
  //   "Cambridge University",
  //   "Yale University",
  //   "Princeton University",
  //   "ETH Zurich",
  //   "University of Toronto",
  //   "Australian National University",
  // ];

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
              {/* <Badge title="Education Excellence" /> */}
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-charcoal leading-tight">
                Empowering{" "}
                <span className="bg-gradient-to-r from-primary to-[#1a8f21] bg-clip-text text-transparent">
                  Future Leaders
                </span>
              </h1>

              <p className="font-body text-xl text-muted-foreground leading-relaxed">
                MakeMyEducation is your trusted partner in achieving academic
                excellence.
                <span className="block">Whether you're looking for the right program, comparing universities, or need help with accommodation, MakeMyEducation provides everything you need to confidently begin your academic career, including education loan support, comprehensive study abroad assistance, visa guidance, and 1:1 expert counseling.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button className="btn-modern text-white px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300">
                  Start Your Journey
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
                  src="https://images.unsplash.com/photo-1660128357991-713518efae48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTU2NzIwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="MakeMyEducation"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHeader
            title="Our Services"
            description="Comprehensive educational services designed to guide you through every step of your academic journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: service.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="modern-card border-0 h-full hover:-translate-y-2 transition-all duration-300 bg-texture-noise">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#1a8f21] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-charcoal mb-4">
                        {service.title}
                      </h3>
                      <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
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

      {/* Partner Colleges */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SecHeader
            title="Partner Colleges"
            description="We have partnerships with leading universities and institutions worldwide."
          />

          {/* CTA */}
          <div className="bg-primary/10 w-[90%] md:w-[70%] lg:w-[50%] block mx-auto rounded-4xl">
            <div className="p-10 flex flex-col items-center">
              <h1 className="text-black/70 font-heading text-2xl text-center font-bold mb-5">
                Ready to expand your reach and meet your enrollment goals?
              </h1>
              <Link to="/contact">
                <Button className="text-xl font-semibold bg-primary py-2 px-4 rounded-full text-white font-heading" onClick={scrollToTop}>
                  Partner with us
                </Button>
              </Link>
            </div>
          </div>
          
          {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: partner.id * 0.05 }}
                viewport={{ once: true }}
                className="text-center p-4 glass-effect rounded-3xl hover:shadow-lg transition-all duration-300"
              >
                <span className="font-body text-charcoal font-medium text-sm">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div> */}
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
                Ready to Start Your Educational Journey?
              </h2>
              <p className="font-body text-xl text-muted-foreground mb-8 leading-relaxed">
                Contact our expert counselors today for a free consultation and
                take the first step towards your dream education.
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
                      contact@makemyeducation.com
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
                     Ganga Enclave, Roorkee,
                      Uttarakhand Pincode - 247667
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
                  className="w-full h-[400px] md:h-[550px] object-cover"
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

export default MakeMyEdu;
