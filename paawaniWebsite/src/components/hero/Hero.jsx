import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "../badge";
import Hero1 from "../../assets/Hero1.jpg";
import Hero2 from "../../assets/Hero2.jpg";
import Hero3 from "../../assets/Hero3.jpg";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: Hero1,
      title: "Empowering Progress for a Brighter Future",
      subtitle:
        "Innovating across vital sectors to shape a better tomorrow through excellence and commitment.",
      theme: "business",
      link: "/about",
    },
    {
      id: 2,
      image: Hero2,
      title: "MakeMyEducation Your Pathway to Global Learning",
      subtitle:
        "Your comprehensive portal for seamless college admissions, worldwide travel arrangements, and comfortable accommodation solutions.",
      theme: "education",
      link: "/business/mme",
    },
    {
      id: 3,
      image: Hero3,
      title: "Smart Living, Simplified by Havells",
      subtitle:
        "As trusted partners, we deliver cutting-edge automation and electrical solutions for modern homes and thriving businesses.",
      theme: "smart-living",
      link: "business/havells",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); //it will change slide in every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // const stats = [
  //   {
  //     id: 1,
  //     number: "500+",
  //     label: "Happy Clients",
  //   },
  //   {
  //     id: 2,
  //     number: "15+",
  //     label: "Years of Experience",
  //   },
  //   {
  //     id: 3,
  //     number: "50+",
  //     label: "Countries",
  //   },
  // ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen bg-background overflow-hidden pt-20 lg:pt-0"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Floating Background Animation */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary/4 rounded-full blur-3xl"></div>

      {/* Navigation Controls */}
      <div className="absolute top-1/3 lg:top-1/2 left-4 right-4 z-20 flex justify-between items-center pointer-events-none">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="glass-effect border-primary/20 hover:bg-primary hover:text-white shadow-lg pointer-events-auto opacity-30 hover:opacity-100 transition-all duration-300 w-12 h-12 hidden md:flex"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="glass-effect border-primary/20 hover:bg-primary hover:text-white shadow-lg pointer-events-auto opacity-0 hover:opacity-100 transition-all duration-300 w-12 h-12 hidden md:flex"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {/* Mobile Navigation Controls */}
        <div className="flex items-center gap-4 mb-4 md:hidden justify-center">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="glass-effect border-primary/20 hover:bg-primary hover:text-white shadow-lg transition-all duration-300 w-10 h-10 rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary shadow-lg scale-110"
                    : "bg-white/40 hover:bg-primary/60"
                }`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="glass-effect border-primary/20 hover:bg-primary hover:text-white shadow-lg transition-all duration-300 w-10 h-10 rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        {/* Desktop Slide Indicators */}
        <div className="hidden md:flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary shadow-lg scale-110"
                  : "bg-white/40 hover:bg-primary/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="relative min-h-screen flex items-center"
        >
          {/* Dynamic Slide-specific BG Texture
          <div
            className="absolute inset-0 z-0"
            style={getBackgroundTexture(slides[currentSlide].backgroundTexture)}
          ></div> */}
          {/* Additional Animated BG Elements */}
          <motion.div
            animate={{
              backgroundPosition: ["0px 0px", "100px 100px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(32, 171, 38, 0.08) 20px, transparent 21px),
                radial-gradient(circle at 80% 50%, rgba(32, 171, 38, 0.08) 20px, transparent 21px)`,
              backgroundSize: "200px 200px",
            }}
          ></motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pb-16 sm:pb-20 lg:pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[calc(100vh-8rem)] lg:min-h-[calc(100vh-10rem)]">
              {/* Left Side */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1 px-4 sm:px-0 relative z-30"
              >
                <Badge
                  title={`Slide ${currentSlide + 1} of ${slides.length}`}
                />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  tranisition={{ delay: 0.5, duration: 0.8 }}
                  className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-charcoal"
                >
                  {slides[currentSlide].title.split(" ").map((word, index) => {
                    const highlightWords = [
                      "Progress",
                      "MakeMyEducation",
                      "Smart",
                    ];
                    const isHighlight = highlightWords.some((hw) =>
                      word.includes(hw.replace(":", ""))
                    );

                    return (
                      <span
                        key={index}
                        className={
                          isHighlight
                            ? "bg-gradient-to-r from-primary to-[#1a8f21] bg-clip-text text-transparent"
                            : ""
                        }
                      >
                        {word}{" "}
                      </span>
                    );
                  })}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="font-body text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <Button
                    onClick={scrollToContact}
                    className="btn-modern font-body text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Get Started Today
                  </Button>
                  <Link to={slides[currentSlide].link}>
                    <Button
                      variant="outline"
                      className="font-body border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 group"
                    >
                      Learn More
                    </Button>
                  </Link>
                </motion.div>
                {/* Stats
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t border-border relative z-30"
                >
                  {stats.map((stat) => (
                    <div key={stat.id} className="text-center">
                      <div className="font-heading text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-[#1a8f21] bg-clip-text text-transparent mb-1">
                        {stat.number}
                      </div>
                      <div className="font-body text-muted-foreground text-xs sm:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div> */}
              </motion.div>

              {/* Right Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="relative order-1 lg:order-2 px-4 sm:px-0 z-30"
              >
                <div className="relative">
                  {/* Main Img Container */}
                  <div className="modern-card rounded-3xl overflow-hidden bg-texture-wave relative">
                    <div
                      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[650px] bg-cover bg-center relative"
                      style={{
                        backgroundImage: `url('${slides[currentSlide].image}')`,
                      }}
                    >
                      {/* Texture Overlay on Image */}
                      {/* <div
                        className="absolute inset-0 opacity-20"
                        style={getBackgroundTexture(
                          slides[currentSlide].backgroundTexture
                        )}
                      ></div> */}
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 gradient-overlay-green-light"></div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 3, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-[#1a8f21]/20 rounded-3xl blur-xl"
                  />
                  <motion.div
                    animate={{
                      y: [0, 20, 0],
                      x: [0, 8, 0],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/15 to-[#1a8f21]/15 rounded-3xl blur-xl"
                  />

                  {/* Decorative dots */}
                  <div className="absolute top-1/4 -right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute bottom-1/3 -left-4 w-2 h-2 bg-primary/60 rounded-full animate-ping"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Slide Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-border/50">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-[#1a8f21]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: isAutoPlaying ? Infinity : 0,
              }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-4 h-4 bg-primary/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-10 w-6 h-6 bg-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary/25 rounded-full animate-bounce"></div>
    </section>
  );
};

export default hero;
