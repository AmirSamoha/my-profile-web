import React from "react";
import home1 from "../img/home1.png";
//styled
// import styled from "styled-components";
import { Image, Hide, Description, About } from "../styles";
//
import { motion } from "framer-motion";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    //styled About
    <About>
      {/* styled Description */}
      <Description>
        <div className="title">
          <Hide>
            <motion.h2
              animate={{ opacity: 1, transition: { duration: 2 } }}
              initial={{ opacity: 0 }}
            >
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>Contact Us for eny photography or ideas that you have. </p>
        <button>Contact Us</button>
      </Description>
      {/* styled Image */}
      <Image>
        <img src={home1} alt="camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
