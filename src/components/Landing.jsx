import React from 'react'
import styled from 'styled-components'
import Pics from '../img/la.png'


const Container = styled.div `
    height: calc(100vh);
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px){
        flex-direction: column;
        height: unset;
    }
`;

const Left = styled.div `
    width: 60%;
    display: flex;
    padding: 70px;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 480px){
        width: 100%;
        height: 100%;
        padding: unset;
        padding-top: 70px;
    }
`;

const Title = styled.h1 `
width: 100%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 130%;
    /* or 62px */


    color: #FF820E;

    @media only screen and (max-width: 480px){
        width: 100%;
        font-size: 50px;
        margin-bottom: 30px;
        text-align: center;
        
    }
`;

const Desc = styled.p `
width: 100%;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 150%;
color: #000000;

    @media only screen and (max-width: 480px){
        width: 100%;
        text-align: justify;
    }

`;

const Info = styled.div `
    width: 100%;
    margin-top: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: 480px){
        width: 100%;
        flex-direction: column;
    }
`;

const Button = styled.button `
    width: 245px;
    height: 64px;
    cursor: pointer;

    background: #FF820E;
    border-radius: 20px;
    border: none;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 150%;
    color: #FFFFFF;

    @media only screen and (max-width: 480px){
        
    }
`;

const Right = styled.div `
    width: 40%;
    margin: 10px auto;

    @media only screen and (max-width: 480px){
        width: 100%;
        margin: 40px auto;
    }
`;

const Image = styled.img `
    width: 100%;
`;


export const Landing = () => {
    return (
        <Container>
            <Left>
                <Title>Learn from the best</Title>
                <Desc>Withever you want to, learn from the best at your 
own time, convenience and speed.</Desc>
                <Info>
                    <Button>Sign Up</Button>
                </Info>
            </Left>
            <Right>
                <Image src={Pics} />
            </Right>
        </Container>
    );
}


export default Landing;