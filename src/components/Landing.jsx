import React from 'react'
import styled from 'styled-components'
import Pics from '../img/people.svg'


const Container = styled.div `
    height: calc(100vh);
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px){
        flex-direction: column-reverse;
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

    @media only screen and (max-width: 768px){
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
    text-transform: uppercase;
    /* or 62px */


    color: #F8C300;

    @media only screen and (max-width: 480px){
        width: 100%;
        margin-bottom: 30px;
        text-align: center;

        font-size: 36px;
        line-height: 41px;
        font-weight: 900;
        text-transform: uppercase;
        
    }
`;

const Desc = styled.p `
width: 100%;
font-family: Montserrat;
font-style: normal;
font-weight: 900;
font-size: 20px;
line-height: 150%;
color: #000000;

    @media only screen and (max-width: 480px){
        width: 100%;
        text-align: justify;
            font-weight: 400;
        font-size: 18px;
        line-height: 35px;
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

    background: #F8C300;
    border-radius: 20px;
    border: none;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 150%;
    color: #FFFFFF;

    @media only screen and (max-width: 480px){
        font-size: 15px;
    }
`;

const Right = styled.div `
    width: 40%;
    margin: 10px auto;

    @media only screen and (max-width: 480px){
        display: flex;
        width: 100%;
        margin: 40px auto;
        justify-content: center;
        align-items: center;
    }
`;

const Image = styled.img `
    width: 80%;
`;


export const Landing = () => {
    return (
        <Container id='index'>
            <Left>
                <Title>Everyone is a block on a blockchain.</Title>
                <Desc>A community built to enlighten
the student community about 
the blockchain ecosystem and
how to connect to this ecosystem.</Desc>
                <Info>
                    <Button>Discord</Button>
                </Info>
            </Left>
            <Right>
                <Image src={Pics} />
            </Right>
        </Container>
    );
}


export default Landing;