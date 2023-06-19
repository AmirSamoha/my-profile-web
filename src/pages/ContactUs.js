import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import email from "../img/email.png";
import github from "../img/github.svg";
import linkedin from "../img/linkedin.svg";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [mail, setMail] = useState(false);
  const showMail = () => {
    setMail(!mail);
  };

  return (
    <ContactStyle>
      <motion.div
        animate={{ opacity: 1, transition: { duration: 2 } }}
        initial={{ opacity: 0 }}
      >
        <Title>Contact Me</Title>

        <Social>
          <Circle />
          <h3>Send Me an Email</h3>
          <Icon src={email} alt="mail" onClick={showMail} />
          <p>{mail ? "Amir.samoha42@gmail.com" : null}</p>
        </Social>
        <Social>
          <Circle />
          <h3>Git Hub</h3>
          <Link to="https://github.com/AmirSamoha">
            <Icongithub src={github} alt="github" />
          </Link>
        </Social>
        <Social>
          <Circle />
          <h3>Linkedin</h3>
          <Link to="https://www.linkedin.com/in/amir-samoha-b968321aa/">
            <Iconlinkedin src={linkedin} alt="linkedin" />
          </Link>
        </Social>
      </motion.div>
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
  padding: 5rem 10rem;
  min-height: 90vh;
`;
const Title = styled.h1`
  color: white;
  font-family: monospace;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background: #23d997;
`;
const Social = styled.div`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  h3 {
    padding: 2rem;
    font-size: 2rem;
  }
`;

const Icon = styled.img`
  cursor: pointer;
  margin: 1rem;
  padding-left: 7.2rem;
`;
const Icongithub = styled.img`
  cursor: pointer;
  margin: 1rem;
  padding-left: 17.2rem;
`;
const Iconlinkedin = styled.img`
  cursor: pointer;
  margin: 1rem;
  padding-left: 16.7rem;
`;

export default ContactUs;
