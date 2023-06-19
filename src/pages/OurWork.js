import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//animation
import { motion } from "framer-motion";
import { pageAnimation, lineAnimation } from "./animation";

const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Project>
        <ProjectTitle>React Project</ProjectTitle>
        <motion.div variants={lineAnimation} className="line"></motion.div>
      </Project>

      <Project>
        <Link to="https://onlineshop-amirsamoha.onrender.com">
          <Title>Online Shop</Title>
        </Link>
        <ProjectDescription>
          A complete project built using node.js express and mongoDB on the
          server side, the client side using React. An online shopping site
          where a user can register and buy products using PayPal.
          <Link to="https://github.com/AmirSamoha/shopReact">
            <GitLink>GitHub Link</GitLink>
          </Link>
        </ProjectDescription>
      </Project>

      <Project>
        <Link to="https://ignite-samoha.netlify.app/">
          <Title>Games</Title>
        </Link>
        <ProjectDescription>
          A nice site that use Css, React, displays all the games for the user's
          choice by using a free game API that is constantly updated release
          dates, new games and more...
          <Link to="https://github.com/AmirSamoha/ignite-use-api">
            <GitLink>GitHub Link</GitLink>
          </Link>
        </ProjectDescription>
      </Project>

      <Project>
        <Link to="https://playermusic-amirsamoha.netlify.app">
          <Title>The player music </Title>
        </Link>
        <ProjectDescription>
          A project I used a json file that contains free music data, using
          React and components to display and play music.
        </ProjectDescription>
      </Project>

      <Project>
        <ProjectTitle>Html&CSS and JS</ProjectTitle>
        <motion.div variants={lineAnimation} className="line"></motion.div>
      </Project>

      <Project>
        <Link to="https://web-clock-amir-samoha.netlify.app">
          <Title>clock web</Title>
        </Link>
        <ProjectDescription>
        A site that displays a live clock by using JS
        </ProjectDescription>
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
  padding-bottom: 1rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 1rem;
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
  font-size: 2.5rem;
  color: white;
  font-family: monospace;
`;

const ProjectTitle = styled.h1`
  font-size: 2rem;
  color: #23d997;
`;

const ProjectDescription = styled.div`
  color: #23d997;
  font-size: 1.5rem;
`;

const GitLink = styled.div`
  color: rgb(170, 74, 68);
`;

export default OurWork;
