import React from "react";
import { motion } from "motion/react";
import PropTypes from "prop-types";

const Badge = ({ title }) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="inline-flex items-center gap-2 px-6 py-3 glass-effect-green rounded-full shadow-lg"
      >
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <span className="text-primary font-body font-semibold text-sm">
          {title}
        </span>
      </motion.div>
    </div>
  );
};

Badge.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Badge;
