import React from "react";
import home1 from "../img/home1.png";
//styled
// import styled from "styled-components";
import {Image, Hide, Description, About} from '../styles'

const AboutSection = () => {
  return (
    //styled About
    <About>
      {/* styled Description */}
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
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
    </About>
  );
};



export default AboutSection;
