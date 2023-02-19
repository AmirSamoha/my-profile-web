import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "./animation";

const ContactUs = () => {
  return (
    <ContactStyle>
    <motion.div
      animate={{ opacity: 1, transition: { duration: 2 } }}
      initial={{ opacity: 0 }}
    >
      <Title>Contact Us</Title>
      <Social>
        <Circle />
        <h3>Send Me a Message</h3>
      </Social>
      <Social>
        <Circle />
        <h3>Send Me an Email</h3>
      </Social>
      <Social>
        <Circle />
        <h3>Git Hub</h3>
      </Social>
      <Social>
        <Circle />
        <h3>Facebook</h3>
      </Social>
      <Social>
        <Circle />
        <h3>Linkedin</h3>
      </Social>
    </motion.div>
    </ContactStyle>
  );
};

const ContactStyle = styled.div`
    padding: 5rem 10rem;
    min-height: 90vh;
`
const Title = styled.h1`
  color: white;
  font-family: monospace;
`

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
`;

export default ContactUs;
