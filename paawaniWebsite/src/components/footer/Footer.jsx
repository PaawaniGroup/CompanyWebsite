import React from "react";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  Send,
  ChevronRight,
} from "lucide-react";
import { Separator } from "../ui/separator";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSections = [
    {
      id: 1,
      title: "Company",
      links: [
        { name: "About Us", id: "about" },
        { name: "Career", id: "career" },
        { name: "Blogs", id: "blog" },
        { name: "Partner Us", id: "partners" },
      ],
    },
    {
      id: 2,
      title: "Our Product",
      links: [
        { name: "Overview", id: "business" },
        { name: "Features", id: "business" },
        { name: "Tutorials", id: "business" },
        { name: "Pricing", id: "business" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Code of Conduct", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/paawanigroup/",
      label: "LinkedIn",
      hoverColor: "hover:bg-blue-600 hover:border-blue-600",
    },
    {
      id: 2,
      icon: FaWhatsapp,
      href: "https://wa.me/7302983397",
      label: "Whatsapp",
      hoverColor: "hover:bg-green-500 hover:border-green-500",
    },
    {
      id: 3,
      icon: FaFacebook,
      href: "#",
      label: "Facebook",
      hoverColor: "hover:bg-blue-700 hover:border-blue-700",
    },
    {
      id: 4,
      icon: FaInstagram,
      href: "#",
      label: "Instagram",
      hoverColor: "hover:bg-pink-600 hover:border-pink-600",
    },
  ];

  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-18">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="space-y-8">
                {/* About Company */}
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Paawani Group
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                    Transforming businesses through innovation, strategic
                    partnerships, and excellence. Building the future of
                    industry leadership across global markets.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={social.id}
                        variant="outline"
                        size="icon"
                        className={`h-12 w-12 border-2 transition-all duration-300 hover:scale-110 hover:text-white ${social.hoverColor}`}
                        asChild
                      >
                        <a href={social.href} aria-label={social.label}>
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    )
                  })}
                </div>                
              </div>
            </motion.div>

            {/* Navigation Links */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
                {footerSections.map((section) => (
                  <motion.div
                    key={section.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: section.id * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-foreground mb-6">
                      {section.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <button
                            onClick={() =>
                              link.id ? scrollToSection(link.id) : undefined
                            }
                            className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-left group flex items-center gap-1"
                          >
                            <span>{link.name}</span>
                            <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator />        
        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="py-8 flex flex-col md:flex-row justify-center gap-8 items-center"
        >
          <p className="text-muted-foreground text-center">
            © 2025 Paawani Group. All rights reserved.
          </p>

          <Button
            variant="outline"
            size="icon"
            className="hover:scale-110 transition-all duration-300"
            onClick={scrollToTop}
            aria-label="Scroll to Top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
