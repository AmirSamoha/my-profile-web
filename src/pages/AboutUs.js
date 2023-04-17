import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";

function AboutUs() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
    </motion.div>
  );
}

export default AboutUs;
