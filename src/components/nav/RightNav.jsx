import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    margin: 5px 20px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 150%;
    color: #F8C300; 
  }
  a{
    color:  #F8C300;
    text-decoration: none;
  }


  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #F8C300;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    padding-left: unset;
    li{
      color: #000;
    }
    a{
    color:  #000;
    text-decoration: none;
  }
  }
`;



const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li> <a href="#index">Home</a> </li>
      <li> <a href="#about">About</a> </li>
      <li> <a href="#team">Team</a> </li>
      <li> <a href="#event">Events</a> </li>
    </Ul>
  )
}

export default RightNav