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
    color: #FF820E; 
  }


  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const Button = styled.button`
    width: 192px;
    height: 53px;
    border: 2px solid #FF820E;
    border-radius: 20px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 150%;
    /* identical to box height, or 25px */
    background-color: transparent;


    color: #FF820E; 
`

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <Button>Log In</Button>
    </Ul>
  )
}

export default RightNav