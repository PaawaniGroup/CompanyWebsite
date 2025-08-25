import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Button } from "./ui/button";

const Cta = ({ title, description, btnText, path }) => {
    
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="glass-effect rounded-3xl p-16 shadow-2xl bg-texture-wave relative overflow-hidden">
          <div className="absolute inset-0 gradient-overlay-green-light"></div>
          <div className="relative z-10">
            <h3 className="font-heading text-4xl font-bold text-charcoal mb-6">
              {title}
            </h3>
            <p className="font-body text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
              {description}
            </p>

            <Link to={path}>
              <Button className="btn-modern font-body text-white px-10 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
                {btnText}
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Cta;
