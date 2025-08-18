import React from "react";
import { motion } from "motion/react";
import Badge from "../Badge";
import SectionHeader from "../SecHeader";
import { Card, CardContent } from "../ui/Card";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from '../ImageWithFallback'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechVenture Inc.",
      company: "Technology Startup",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b0e4?w=150&h=150&fit=crop&crop=face",
      content:
        "Paawani Group transformed our business operations with their innovative solutions. Their expertise in technology integration helped us scale efficiently and enter new markets successfully.",
      rating: 5,
      color: "from-[#20ab26] to-[#1a8f21]",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Director of Operations",
      company: "Global Manufacturing",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "The partnership with Paawani Group has been exceptional. Their strategic guidance and industry expertise have been instrumental in our international expansion and operational excellence.",
      rating: 5,
      color: "from-[#1a8f21] to-[#16a085]",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder & MD",
      company: "Educational Services",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "Working with Paawani Group through MakeMyEducation has revolutionized how we serve students. Their comprehensive platform and support system have exceeded our expectations.",
      rating: 5,
      color: "from-[#16a085] to-[#27ae60]",
    },
  ];

  return (
    <section className="py-30 bg-background relative overlfow-hidden">
      {/* Bacgkground Elements */}
      <div className="absolute inset-0 bg-texture-dots opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
        title="What Our"
        highlighted="Partners Say"
        description="Discover how we've helped businesses across industries achieve their goals and drive sustainable growth."
        badge={<Badge title="Client Success Stories" />}
      />

      {/* Section Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {testimonials.map((testi) => (
          <motion.div
            key={testi.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: testi.id * 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="modern-card h-full border-0 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden bg-texture-noise">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-16 w-16 text-primary" />
              </div>
              {/* Gradient Background Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${testi.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <CardContent className="p-10 relative z-10">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-8">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                {/* Testimonial Content */}
                <blockquote className="font-body text-muted-foreground leading-relaxed mb-10 relative text-base">
                  <p className="italic">"{testi.content}"</p>
                </blockquote>

                {/* Client */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-18 h-18 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                      <ImageWithFallback
                        src={testi.image}
                        alt={testi.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-primary to-[#1a8f21] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-heading text-xl font-semibold text-charcoal">
                        {testi.name}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                        {testi.position}
                    </p>
                    <p className="font-body text-xs text-primary font-semibold">
                        {testi.company}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-[#1a8f21] group-hover:w-full transition-all duration-500 delay-200" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
