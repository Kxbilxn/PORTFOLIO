import React from 'react';
import { motion } from 'framer-motion';

const SectionFadeUp = ({ children, id, className = '' }) => {
  return (
    <section id={id} className={`w-full py-24 px-6 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionFadeUp;
