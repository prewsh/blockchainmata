import React from 'react';
import styled from 'styled-components'
import { Image } from './Teachers';
import social from "../img/social1.png"
import social2 from "../img/social2.png"
import {LogoImage} from './nav/Navbar'


import bm from "../img/bm-black.png"


const Container = styled.div`
    background: #f8c300;
    padding: 40px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 50px 30px;
        }
`

const Left = styled.div`
    width: 40%;
    padding-left: 60px;


    .social{
        display: flex
    }

    .social > span{
        margin: 3px;
    }

    .socialImage{
        width: 30px;
        height: 30px;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding-left: unset;
    }

`

const FTitle =  styled.h3`
    ${'' /* width: 246.17px;
    height: 45px; */}


    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 150%;
    margin-bottom: 30px;

    @media (max-width: 768px) {
    font-size: 40px;
    }
`

const FText = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 150%;
    /* or 30px */


    color: #FFFFFF;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 20px;
    }


`



const Right = styled.div`
    width: 60%;



    form > input{
        width: 440.3px;
        height: 63px;
        background: #FFFFFF;
        border-radius: 13px;
        border: none;
    }

    form > button{
        width: 229.16px;
        height: 63px;
        margin-left: -15px;

        background: #000000;
        border-radius: 10px;
        border: none;



        font-family: Montserrat;
        font-style: normal;
        font-weight: bold;
        ${'' /* font-size: 24px; */}
        ${'' /* line-height: 150%; */}
        /* identical to box height, or 36px */


        color: #FFFFFF;
    }


    @media (max-width: 768px) {
        width: 100%;


        form > input{
            width: 70%;
            height: 43px;
        }

        form > button{
            width: 30%;
            height: 43px;

            font-size: 12px;
        }


        }
`

const FTitler = styled.div`

font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 35px;
line-height: 150%;
/* identical to box height, or 60px */


color: #FFFFFF;

@media (max-width: 768px) {
    font-size: 20px;
}

`



const Footer = () => {
  return (
      <Container>

        <Left>
            <FTitle><LogoImage src={bm} /></FTitle>
            <FText>
                <p>Copyright 2022</p>
                <p>All right reserved</p>
            </FText>
            
            <div className='social' >
                    <span ><a href='/'><Image className='socialImage' src={social} /></a></span>
                    <span ><a href='/'><Image className='socialImage' src={social2} /></a></span>
            </div>

        </Left>

      <Right>
        <FTitler>
        Subscribe to our weekly Mailing
        </FTitler>
        <form>
            <input
                type="email"
                name="email"
                className="email"
                tabIndex="4"
        />
        <button type="submit" className="send">Send Message</button>
        </form>
      </Right>

      </Container>
  );
};

export default Footer;
