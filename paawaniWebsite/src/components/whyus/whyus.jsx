import React from "react";
import {
  Atom,
  ShieldCheck,
  Compass,
  Lightbulb,
  Handshake,
  ChartLine,
} from "lucide-react";
import SectionHeader from "../SecHeader";
import Badge from "../Badge";
import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";

const whyus = () => {
  const cards = [
    {
      icon: Atom,
      title: "Holistic Solutions",
      description:
        "We provide comprehensive strategies that guide you toward your goals.",
      color: "from-[#20ab26] to-[#1a8f21]",
    },
    {
      icon: ShieldCheck,
      title: "Seasoned Experts",
      description:
        "Our team consists of experienced professionals who are committed to providing you with reliable and expert guidance.",
      color: "from-[#1a8f21] to-[#16a085]",
    },
    {
      icon: Compass,
      title: "Client-First Focus",
      description:
        "Your needs are our top priority. We provide a transparent, client-centric approach with dedicated support every step of the way.",
      color: "from-[#16a085] to-[#27ae60]",
    },
    {
      icon: Lightbulb,
      title: "Pioneering Innovation",
      description:
        "We use forward-thinking strategies and modern technology to bring you solutions that are ahead of the curve.",
      color: "from-[#27ae60] to-[#2ecc71]",
    },
    {
      icon: Handshake,
      title: "Empowering Partnerships",
      description:
        "We don’t just provide a service; we equip you with the knowledge and tools for long-term success.",
      color: "from-[#2ecc71] to-[#20ab26]",
    },
    {
      icon: ChartLine,
      title: "Tangible Results",
      description:
        "Our strategies are built to deliver clear, measurable results, helping you achieve your aspirations and goals.",
      color: "from-[#20ab26] to-[#27ae60]",
    },
  ];

  return (
    <section className="py-30 bg-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-texture-grid opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          title="Excellence in Every"
          highlighted="Venture"
          description="We combine innovation, expertise, and dedication to deliver
            exceptional results that drive your business forward with measurable
            impact."
          badge={<Badge title="Why Choose Us" />}
        />

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
