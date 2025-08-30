import React from "react";
import { Button } from "@/ui/button";
import logo from "@/assets/Logo.svg";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const navitems = [
    { name: "About Us", id: "about", link: "/about" },
    { name: "Our Businesses", id: "businesses", link: "/business" },
    // { name: "Blogs", id: "blogs", link: "/blogs" },
    { name: "Career", id: "career", link: "/career" },
    { name: "Be Our Partner", id: "partner", link: "/contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect shadow-lg border-b border-light-grey"
          : "glass-effect"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Paawani Logo"
              className="logo w-[2rem] lg:w-[4rem]"
            />
            <a
              href="/"
              className="font-heading text-2xl lg:text-3xl font-bold text-primary"
            >
              Paawani Group
            </a>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden lg:flex">
            <div className="nav-items mx-10 flex items-center space-x-6">
              {navitems.map((item) => (
                <Link
                  key={item.id}
                  to={item.link}
                  className="nav-item font-body text-charcoal hover:text-primary px-4 py-2 text-base font-medium transition-all duration-300 relative group"
                  onClick={scrollToTop}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-[#1a8f21] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
            <Link to="/contact">
              <Button onClick={scrollToTop}
              className="contact-button btn-modern font-body text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-all duration-300">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal hover:text-primary hover:bg-primary/10"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-effect rounded-lg mt-2 border border-light-gray shadow-xl bg-texture-dots">
              {navitems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-body text-charcoal hover:text-primary hover:bg-primary/5 block px-3 py-3 text-base font-medium w-full text-left rounded-md transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="contact-button btn-modern font-body text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
