import React from 'react'
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

const SecHeader = ({title, highlighted, description, badge}) => {
  return (
    <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {badge}
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-charcoal mb-8 mt-5">
            {title}{" "}
            <span className="bg-gradient-to-r from-primary to-[#1a8f21] bg-clip-text text-transparent">
              {highlighted}
            </span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>
    </div>
  )
}

SecHeader.propTypes = {
  title: PropTypes.string.isRequired,
  highlighted: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  badge: PropTypes.node, // badge can be any renderable type (string, element, etc.)
};

export default SecHeader
