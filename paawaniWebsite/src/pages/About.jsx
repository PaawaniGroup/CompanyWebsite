import React, { useEffect, useState, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Badge from "@/components/Badge"
import SectionHeader from "@/components/SecHeader"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
} from "lucide-react"
import { ImageWithFallback } from "@/components/ImageWithFallback"
import CTA from "@/components/Cta"
import Havells from "@/assets/certificates/Havells.pdf"
import Iso from "@/assets/certificates/ISO.pdf"
import Udyam from "@/assets/certificates/UDYAM.pdf"
import Startup from "@/assets/certificates/DPIIT.pdf"
import AmitSir from "@/assets/A.webp"
import Shobha from "@/assets/S.webp"
// import Abhi from "@/assets/AB.webp";
import Geet from "@/assets/G.webp"
import certificate from "@/assets/STARTUP.webp"
import first from "@/assets/office/workspace.webp"
import second from "@/assets/office/2.webp"
import third from "@/assets/office/5.webp"
import fourth from "@/assets/office/1.webp"
import fifth from "@/assets/office/4.webp"

const About = () => {
  const [currentImageSlide, setCurrentImageSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);

  const images = [
    {
      id: 1,
      url: certificate,
    },
    {
      id: 2,
      url: first,
    },
    {
      id: 3,
      url: second,
    },
    {
      id: 4,
      url: third,
    },
    {
      id: 5,
      url: fourth,
    },
    {
      id: 6,
      url: fifth,
    },
  ];

  // Intersection Observer for autoplay control
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        //Set Autoplay true if the component is i view
        entries.forEach((entry) => {
          setIsAutoPlaying(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    //Cleanup on component unmount
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return; //Only run if in viewport
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

  const goToImageSlide = (index) => {
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
      bio: "Our founder, Mrs. Shobha Singh, envisioned an ongoing, self-directed learning experience for students. Her goal was to cultivate a generation of thinkers who could approach challenges critically and creatively. This vision extends beyond the classroom. She believed that education should empower individuals to provide competent and compassionate services.",
      image: Shobha,
      // achievements: [
      //   "Harvard Business School Alumni",
      //   "Industry Leader Award 2023",
      //   "Forbes 40 Under 40",
      // ],
      linkedin: "https://www.linkedin.com/company/paawanigroup",
      mail: "mailto:officeadmin@paawanigroup.com",
    },
    {
      id: 2,
      name: "Geetanjali Singh",
      position: "Chairman",
      bio: "Mrs. Geetanjali Singh, Chairman of Paawani Group, brings a unique blend of educational and managerial expertise. Her hands-on experience as a professor and her time as a director at Zigyan Education have given her deep insight into the education sector. Her strategic leadership and commitment to innovation and social responsibility drive the company's sustainable growth.",
      image: Geet,
      // achievements: [
      //   "MIT Sloan Graduate",
      //   "Operations Excellence Award",
      //   "Women in Business Leader",
      // ],
      linkedin: "https://www.linkedin.com/company/paawanigroup",
      mail: "mailto:geetanjali@paawanigroup.com",
    },
    // {
    //   id: 3,
    //   name: "Abhishek Singh",
    //   position: "Chief Technology Analyst",
    //   bio: "Abhishek Singh, a technical consultant for Paawani Group and founder of InfnIITy Classes, has a strong background in tech and education. For over 13 years, he mentored thousands of students at a leading IIT-JEE coaching institute. He combines technical expertise with a passion for education, helping to shape the future of educational journey.",
    //   image: Abhi,
    //   // achievements: [
    //   //   "Stanford Computer Science PhD",
    //   //   "Tech Innovation Award",
    //   //   "AI Pioneer Recognition",
    //   // ],
    //   linkedin: "https://www.linkedin.com/company/paawanigroup",
    //   mail: "mailto:abhishek@paawanigroup.com",
    // },
    {
      id: 4,
      name: "Amit Singh",
      position: "Financial Consultant",
      bio: "Amit Singh is the Financial Consultant for Paawani Group, serving as a Chartered Accountant. He uses his expertise in financial planning and compliance to ensure precise management of the group's financial operations. His strong analytical skills are vital for guiding the financial strategic decisions of the company, ensuring its long-term growth.",
      image: AmitSir,
      // achievements: [
      //   "CPA Certified",
      //   "Finance Leader Award",
      //   "Wharton MBA Graduate",
      // ],
      linkedin: "https://www.linkedin.com/company/paawanigroup",
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
          title="Your Future,"
          highlighted="Simplified!"
          description="Paawani Group, a DPIIT-recognized startup (Certificate No. DIPP221453), is dedicated to enriching lives and empowering progress across diverse sectors. Through our flagship product, MakeMyEducation, we offer a complete, one-stop solution for higher education admissions."
          badge={<Badge title="About Paawani Group" />}
        />

        {/* Images Slides */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
          // onMouseEnter={() => setIsAutoPlaying(false)}
          // onMouseLeave={() => setIsAutoPlaying(true)}
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
              <div className="absolute top-1/2 left-4 right-4 flex justify-between items-center pointer-events-none">
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
                    duration: 3,
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
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-[#1a8521] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Target className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mb-2 sm:mb-4">
                      Our Mission
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed text-base sm:text-lg">
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
              <CardContent className="p-6 sm:p-10">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1a8f21] to-[#16a085] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mb-2 sm:mb-4">
                      Our Vision
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed text-base sm:text-lg">
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
              <CardContent className="p-6 sm:p-10">
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-[#1a8521] rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal mb-2 sm:mb-4">
                      Our Certifications
                    </h3>
                    {/* <p className="font-body text-muted-foreground leading-relaxed text-base sm:text-md">
                      Explore our commitment to quality and excellence through
                      our official certifications.
                    </p> */}
                    <ul className="space-y-2 sm:space-y-3">
                      <li className="flex items-center gap-2 sm:gap-3">
                        <span className="inline-flex h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                        <a
                          href={Startup}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-muted-foreground text-sm sm:text-lg hover:underline hover:text-primary transition-colors"
                        >
                          DPIIT Startup India Registration
                        </a>
                      </li>
                      <li className="flex items-center gap-2 sm:gap-3">
                        <span className="inline-flex h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                        <a
                          href={Iso}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-muted-foreground text-sm sm:text-lg hover:underline hover:text-primary transition-colors"
                        >
                          ISO 9001=2015 Quality Management System
                        </a>
                      </li>
                      <li className="flex items-center gap-2 sm:gap-3">
                        <span className="inline-flex h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                        <a
                          href={Udyam}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-muted-foreground text-sm sm:text-lg hover:underline hover:text-primary transition-colors"
                        >
                          UDYAM Registration Certificate
                        </a>
                      </li>
                      <li className="flex items-center gap-2 sm:gap-3">
                        <span className="inline-flex h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                        <a
                          href={Havells}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-body text-muted-foreground text-sm sm:text-lg hover:underline hover:text-primary transition-colors"
                        >
                          Havells Official Automation Partner in Uttarakhand
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
          <div className="text-center mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
              Leadership Team
            </h3>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our experienced leadership team brings together decades of
              expertise across diverse industries and disciplines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {partners.map((team) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: team.id * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="modern-card border-0 overflow-hidden bg-texture-wave hover:-translate-y-2 transition-all duration-300 flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {/* <div className="h-120 overflow-hidden"> */}
                    <ImageWithFallback
                      src={team.image}
                      alt={team.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {/* </div> */}
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                      <h4 className="font-heading text-lg md:text-xl font-bold text-white mb-0.5">
                        {team.name}
                      </h4>
                      <p className="font-body text-white/90 text-xs sm:text-sm">
                        {team.position}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-4 md:p-6 flex-grow">
                    <p
                      className="font-body text-muted-foreground leading-relaxed mb-4 text-sm md:text-base"
                      style={{ textAlign: "justify" }}
                    >
                      {team.bio}
                    </p>

                    {/* Achievements */}
                    {/* <div className="mb-6">
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
                    </div> */}

                    <div className="flex items-center gap-3 sm:gap-4 mt-auto">
                      <a
                        href={team.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          vairant="outline"
                          size="sm"
                          className="flex items-center gap-2 hover:bg-white hover:text-primary border-2 border-primary"
                        >
                          Linkedin
                        </Button>
                      </a>

                      <a
                        href={team.mail}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
          path="/contact"
        />
      </div>
    </section>
  );
};

export default About;
