import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//animation
import { motion } from "framer-motion";
import { pageAnimation, lineAnimation } from "./animation";

const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <ProjectTitle>React Project</ProjectTitle>
      <Project>
        <Link to="https://playermusic-amirsamoha.netlify.app">
          <Title>The player music</Title>
        </Link>
        <motion.div variants={lineAnimation} className="line"></motion.div>
      </Project>
      <Project>
        <Link to="https://onlineshop-amirsamoha.onrender.com">
          <Title>Online Shop</Title>
        </Link>
      </Project>

      <ProjectTitle>Html&CSS and JS </ProjectTitle>
      <Project>
        <Link>{/* */}</Link>
        <Title>dog information</Title>
      </Project>
      <Project>
        <Link to="https://web-clock-amir-samoha.netlify.app">
          <Title>clock web</Title>
        </Link>
      </Project>
      <Project>
        <Link to="https://counter-game-amir-samoha.netlify.app">
          <Title>Counter Game</Title>
        </Link>
        <motion.div variants={lineAnimation} className="line"></motion.div>
      </Project>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Project = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  a {
    text-decoration: none;
  }
`;

const Title = styled.h2`
  color: white;
  font-family: monospace;
`;

const ProjectTitle = styled.h1`
  font-size: 5rem;
  color: #23d997;
`;

export default OurWork;
