import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Badge from "@/components/Badge";
import SectionHeader from "@/components/SecHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  Award,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import CTA from "../components/Cta";
import Havells from "../assets/certificates/Havells.pdf";
import Iso from "../assets/certificates/ISO.pdf";
import Udyam from "../assets/certificates/UDYAM.pdf";

const About = () => {
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const images = [
    {
      id: 1,
      url: "https://t3.ftcdn.net/jpg/04/79/93/20/360_F_479932092_BmeQGwL1ljKI368UJVlIwczA8MtjbBnj.jpg",
    },
    {
      id: 2,
      url: "https://media.istockphoto.com/id/1362120018/photo/multi-ethnic-business-team.jpg?s=612x612&w=0&k=20&c=72pGNEMuZc2uxW7KJqv8nTafopfcY4rCd3NvDJagiHo=",
    },
    {
      id: 3,
      url: "https://media.istockphoto.com/id/1443245439/photo/business-meeting-businesswoman-woman-office-portrait-job-career-happy-businessman-teamwork.jpg?s=612x612&w=0&k=20&c=1ZR02c1UKfGdBCNWzzKlrwrVZuEiOqnAKcKF4V_t038=",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentImageSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextImageSlide = () => {
    setCurrentImageSlide((prev) => (prev + 1) % images.length);
  };

  const prevImageSlide = () => {
    setCurrentImageSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImageSlide = (number) => {
    setCurrentImageSlide(index);
  };

  const values = [
    {
      id: 1,
      icon: Target,
      title: "Innovation",
      description:
        "We embrace forward-thinking approaches, continuously exploring new ideas and collaborations to offer cutting-edge solutions and adapt to evolving markets.",
      color: "from-[#20ab26] to-[#1a8f21]",
    },
    {
      id: 2,
      icon: Heart,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our dealings, ensuring transparency, honesty, and trustworthiness.",
      color: "from-[#1a8f21] to-[#16a085]",
    },
    {
      id: 3,
      icon: Users,
      title: "Client-Centricity",
      description:
        "Our clients are at the heart of everything we do; we listen, understand, and tailor our solutions to meet their unique needs and aspirations.",
      color: "from-[#16a085] to-[#27ae60]",
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Excellence",
      description:
        "We're committed to delivering superior quality in every service and product, constantly striving for improvement and exceeding expectations.",
      color: "from-[#27ae60] to-[#2ecc71]",
    },
    {
      id: 5,
      icon: Globe,
      title: "Empowerment",
      description:
        "We're dedicated to empowering individuals and businesses by providing the tools, knowledge, and connections they need to achieve their full potential.",
      color: "from-[#27ae60] to-[#2ecc71]",
    },
  ];

  const partners = [
    {
      id: 1,
      name: "Shobha Singh",
      position: "Partner",
      bio: "With over 20 years of experience in business development and strategic planning, Rajesh has led Paawani Group to become a recognized leader in multiple industries.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      achievements: [
        "Harvard Business School Alumni",
        "Industry Leader Award 2023",
        "Forbes 40 Under 40",
      ],
      linkedin:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      mail: "mailto:officeadmin@paawanigroup.com",
    },
    {
      id: 2,
      name: "Geetanjali Singh",
      position: "Chairman",
      bio: "Priya brings extensive expertise in operations management and business strategy, ensuring seamless execution of our global initiatives.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      achievements: [
        "MIT Sloan Graduate",
        "Operations Excellence Award",
        "Women in Business Leader",
      ],
      linkedin:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      mail: "mailto:geetanjali@paawanigroup.com",
    },
    {
      id: 3,
      name: "Abhishek Singh",
      position: "Chief Technology Analyst",
      bio: "David leads our technology initiatives and digital transformation efforts, driving innovation across all business verticals.",
      image: "https://i.ytimg.com/vi/ZcZM2dDt7aQ/maxresdefault.jpg",
      achievements: [
        "Stanford Computer Science PhD",
        "Tech Innovation Award",
        "AI Pioneer Recognition",
      ],
      linkedin:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      mail: "mailto:abhishek@paawanigroup.com",
    },
    {
      id: 4,
      name: "Amit Singh",
      position: "Chief Financial Officer",
      bio: "Sarah oversees our financial strategy and risk management, ensuring sustainable growth and profitability across all ventures.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      achievements: [
        "CPA Certified",
        "Finance Leader Award",
        "Wharton MBA Graduate",
      ],
      linkedin:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      mail: "mailto:amit@paawanigroup.com",
    },
  ];

  return (
    <section
      id="about"
      className="py-30 bg-background relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-texture-grid opacity-40"></div>
      <div className="absolute inset-0 bg-texture-dots opacity-20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <SectionHeader
          title="Transforming"
          highlighted="Business Excellence"
          description="Paawani Group, a dynamic and forward-thinking enterprise dedicated to enriching lives and empowering progress across diverse sectors. We've established a significant presence in Uttarakhand, India, and beyond."
          badge={<Badge title="About Paawani Group" />}
        />

        {/* Images Slides */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="max-w-5xl mx-auto relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="aspect-[16/9] w-full">
                    <ImageWithFallback
                      src={images[currentImageSlide].url}
                      alt={images[currentImageSlide].url}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute top-1/2 left-4 right-4 flex justify-between itesm-center pointer-events-none">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevImageSlide}
                  className="glass-effect border-white/20 hover:bg-white hover:text-primary shadow-lg pointer-events-auto w-12 h-12 opacity-80 hover:opacity-100 transition-all duration-300"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextImageSlide}
                  className="glass-effect border-white/20 hover:bg-white hover:text-primary shadow-lg pointer-events-auto w-12 h-12 opacity-80 hover:opacity-100 transiton-all duration-300"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                <motion.div
                  className="h-full bg-white"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: isAutoPlaying ? Infinity : 0,
                  }}
                />
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-6 gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImageSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageSlide
                      ? "bg-primary shadow-lg scale-110"
                      : "bg-muted-foreground/30 hover:bg-primary/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
        {/* Section Content */}
        {/* --> Mission, Vision & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <h3 className="font-heading text-3xl font-bold text-charcoal mb-8">
              Mission, Vision & Certifications
            </h3>
            {/* Mission */}
            <Card className="modern-card border-0 bg-texture-noise">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#1a8521] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-bold text-charcoal mb-4">
                      Our Mission
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed text-lg">
                      To empower individuals and businesses with expert
                      education guidance and innovative technology, creating
                      tailored solutions that enrich lives and drive progress
                      for a brighter future.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="modern-card border-0 bg-texture-wave">
              <CardContent className="p-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1a8f21] to-[#16a085] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-bold text-charcoal mb-4">
                      Our Vision
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed text-lg">
                      To be a trusted, multifaceted leader providing a holistic
                      ecosystem of services that simplifies complex processes
                      and facilitates access to global opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="modern-card border-0 bg-texture-noise">
              <CardContent className="p-10">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-[#1a8521] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl font-bold text-charcoal mb-2">
                      Our Certifications
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed text-lg mb-4">
                      Explore our commitment to quality and excellence through
                      our official certifications.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <span className="inline-flex h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                        <a
                          href={Havells}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-muted-foreground text-lg hover:underline hover:text-primary transition-colors"
                        >
                          Havells Official Automation Partner in Uttarakhand
                        </a>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="inline-flex h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                        <a
                          href={Iso}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-muted-foreground text-lg hover:underline hover:text-primary transition-colors"
                        >
                          ISO 9001=2015 Quality Management System
                        </a>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="inline-flex h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                        <a
                          href={Udyam}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-muted-foreground text-lg hover:underline hover:text-primary transition-colors"
                        >
                          UDYAM Registration Certificate
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-3xl font-bold text-charcoal mb-8">
              Core Values
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: value.id * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="modern-card border-0 hover:-translate-y-1 transition-all duration-300 bg-texture-noise">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h4 className="font-heading text-xl font-semibold text-charcoal mb-2">
                              {value.title}
                            </h4>
                            <p className="font-body text-muted-foreground text-sm leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Leadership Team
            </h3>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our experienced leadership team brings together decades of
              expertise across diverse industries and disciplines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {partners.map((team) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: team.id * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="modern-card border-0 overflow-hidden bg-texture-wave hover:-translate-y-2 transition-all duration-300">
                  <div className="relative">
                    <div className="h-80 overflow-hidden">
                      <ImageWithFallback
                        src={team.image}
                        alt={team.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h4 className="font-heading text-2xl font-bold text-white mb-1">
                        {team.name}
                      </h4>
                      <p className="font-body text-white/90 text-sm">
                        {team.position}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="font-body text-muted-foreground leading-relaxed mb-6">
                      {team.bio}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="font-heading font-semibold text-charcoal mb-3">
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {team.achievements.map((item, index) => (
                          <li
                            key={index}
                            className="font-body text-sm text-muted-foreground flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center gap-4">
                      <a href={team.linkedin} target="_blank">
                        <Button
                          vairant="outline"
                          size="sm"
                          className="flex items-center gap-2 hover:bg-white hover:text-primary border-2 border-primary"
                        >
                          Linkedin
                        </Button>
                      </a>

                      <a href={team.mail} target="_blank">
                        <Button
                          vairant="outline"
                          size="sm"
                          className="flex items-center gap-2 hover:bg-white hover:text-primary border-2 border-primary"
                        >
                          Mail
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <CTA
          title="Ready to Transform Your Business?"
          description="Join hundreds of successful companies that have partnered with us to achieve exceptional growth and innovation."
          btnText="Get Started Today"
          path="/"
        />
      </div>
    </section>
  );
};

export default About;
