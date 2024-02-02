"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

export const PageWrapper = ({ children }) => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="progress-bar"
      style={{ scaleX: scrollYProgress }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
