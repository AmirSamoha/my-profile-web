import React from "react";
//styled
import styled from "styled-components";
import { Hide, Description, About } from "../styles";
//
import { motion } from "framer-motion";
import Wave from "./Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    //styled About
    <About>
    
      <Description>
        <div className="title">
          <Hide>
            <motion.h2
              animate={{ opacity: 1, transition: { duration: 2 } }}
              initial={{ opacity: 0 }}
            >
              <span>Amir Samoha Fullstack developer </span>
            </motion.h2>
          </Hide>
          <Hide>
            <FontStyle>
              Enthusiastic and highly motivated developer, fast learner and Self
              learning ability.
            </FontStyle>
          </Hide>
          <Hide>
            <FontStyle>
              High work ethic, responsibility, interpersonal communication and
              excellent human relations.
            </FontStyle>
          </Hide>
        </div>
        <p>HTML | CSS | Bootstrap | Tailwind | JavaScript | React.js | Nextjs | Node.js | MongoDB </p>
        <Link to="/contact">
          <button>Contact Me</button>
        </Link>
      </Description>

      <Wave />
    </About>
  );
};

const FontStyle = styled.h2`
  font-family: sans-serif;
  font-size: 2rem;
`

export default AboutSection;
