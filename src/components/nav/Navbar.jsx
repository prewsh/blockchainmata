import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

import bm from "./../../img/bm.png"

const Nav = styled.nav`
  ${'' /* margin-top: 10px; */}
  box-shadow: 0px 10px 20px rgb(0 0 0 / 25%);
  width: 100%;
  height: 55px;
  padding: 50px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: #ffffff;
  z-index: 100;


  .logo {
    display: flex;
    align-items: center;
    justify-content: start;
    ${'' /* padding: 150px 0; */}
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 150%;
    /* identical to box height, or 37px */


    color: #FF820E; 
  }

  @media (max-width: 768px) {
    padding: 10px 40px
}
`

export const LogoImage = styled.img`
        width: 30%;
        height: 40%;
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
      <LogoImage src={bm} />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar