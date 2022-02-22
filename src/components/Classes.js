import React from 'react';
import styled from 'styled-components'

// image imports
import image3 from "../img/image3.jpg"
import testnet from "../img/testnet.jpg"
import promotion from "../img/promotion.jpg"



export const Container = styled.div`
   ${'' /* background: rgba(255, 130, 14, 0.25); */}
    ${'' /* height: 100%; */}
    background: rgba(248,195,0, 0.18);
    padding: 30px;
`

export const Title = styled.h3`
    width: 100%;
    height: 60px;

    margin: 0px auto;
    text-align: center;


    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 150%;
    /* identical to box height, or 60px */


    color: #000000;

    @media (max-width: 768px) {
        font-size: 25px;
    }
`

const SubTitle = styled.p`
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 172.5%;
        /* or 35px */

        text-align: center;

        color: #000000;

        width: 882px;
        height: 105px;

        margin: 0px auto;

        @media (max-width: 768px) {
          width: unset;
          height: unset;
        }
`

const Card = styled.div`
margin: 10px auto; 

width: 343px;
${'' /* height: 687px; */}
background: #FFFFFF;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);

.textArea{
    height: 100%;   
    padding: 20px;
}

.textArea > p{
    ${'' /* width: 254px; */}
    ${'' /* height: 188px; */}
    margin: 0px auto;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    ${'' /* line-height: 150%; */}
    /* or 30px */

    text-align: left;

    color: #000000;
}

.textArea > h3{
${'' /* width: 150px; */}

text-align: center;
height: 30px;

margin: 0px auto;

font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 20px;
${'' /* line-height: 150%; */}
/* identical to box height, or 30px */


color: #f8c300; 
}

.readmore > a{

    text-decoration: none;
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 150%;
/* identical to box height, or 27px */


color: #f8c300; 
}

.readmore{
    
    width: 101px;
    height: 27px;

    margin: 0px auto;
}
`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const Image = styled.img`
    width: 100%;
    height: 100%
`


const Classes = () => {
  return (
      <Container id='about'>
           <Title>What we offer?</Title>
           <SubTitle></SubTitle>

        <CardContainer>
        <Card>
            <div className='Image' >
            <Image src={testnet} />
            </div>
            <div className='textArea'>
                <h3>Testnet/Product Testing</h3>
                    <p>We have a competent team who would be willing to test your products to give feedbacks in rewards for crypto. <br></br>  <br></br>
                    We also have a community who participate in validator/mining programs from the testnet to the mainnet.</p>
            </div>
        </Card>

        <Card>
            <div className='Image' >
            <Image src={image3} />
            </div>
            <div className='textArea'>
                <h3>Online Learning </h3>
                    <p>We offer teaching services online to help educate students on everything blockchain and it's technology. <br></br> <br></br>
                    We also organize events and webinars to this effect.
                    </p>
            </div>
        </Card>

        <Card>
            <div className='Image' >
            <Image src={promotion} />
            </div>
            <div className='textArea'>
                <h3>Project Promotion</h3>
                    <p>We have built a strong community driven platform where projects can be promoted and given an audience reach for support. <br></br> <br></br>
                    We also have a core team who specialize in handing and executing paid promotions for blockchain projects. <br></br> <br></br>
                    We also offer community management services as well.
                    </p>
            </div>
        </Card>
        </CardContainer>
        
      </Container>
  );
};

export default Classes;
