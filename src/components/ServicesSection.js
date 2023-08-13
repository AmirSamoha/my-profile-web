import React from "react";
//import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import myPhoto from "../img/me.jpeg";
//styeld component
import { Image, Description, About } from "../styles";
import styled from "styled-components";

function ServicesSection() {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>
              Achieving the best results while making maximum use of the means.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="team" />
              <h3>Teamwork</h3>
            </div>
            <p>Functioning within a team to achieve the goal.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Personal Development</h3>
            </div>
            <p>
              Taking responsibility, enjoying the process in an independent and
              group way.
            </p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={myPhoto} alt="myPhoto" />
      </Image>
    </Services>
  );
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 3rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
  @media (max-width: 806px) {
    display: flex;
    flex-direction: column;
  }
`;

const Card = styled.div`
  /* flex-basis: 20rem; */
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      font-size: 25px;
      /* background: white;
        color: black;
        padding: 1rem; */
    }
  }
`;

export default ServicesSection;
