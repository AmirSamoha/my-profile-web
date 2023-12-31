import styled from "styled-components";

//stayed commands
export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: flex;
    padding: 2rem 2rem;
    text-align: center;
  }
  @media (max-width: 806px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 70%;
    height: 50vh;
    object-fit: cover;
    border-radius: 50%;
  }
  @media (max-width: 806px) {
    img {
    width: 50%;
    height: 50vh;
    object-fit: cover;
    border-radius: 5%;
  }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
