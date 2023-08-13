import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavStayeld>
      <h1>
        <Link id="logo" to="/">
          Amir Samoha
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/aboutus">About Me</Link>
        </li>
        <li>
          <Link to="/work">My Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </NavStayeld>
  );
};

const NavStayeld = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 806px) {
    flex-direction: column;
    padding: 1rem 0rem;
    ul {
      display: flex;
      padding: 0.5;
      justify-content: center;
      width: 100%;
    }
  }

  @media (max-width: 612px) {
    display: flex;
    align-items: center;
    padding: 0rem 0rem;
    width: auto;
    margin: 0;
    ul {
      padding: 0.5rem;
      justify-content: flex-start;
    }
    #logo {
    font-size: 1rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 2.5rem;
    position: relative;
  }
  }
`;

export default Nav;
