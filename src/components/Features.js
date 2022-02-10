import React from 'react';
import { Container } from './Classes';
import { Title } from './Teachers';
import styled from 'styled-components'


// image imports
import image3 from "../img/Frame 1.png"

const Card = styled.div`
margin: 10px auto;

width: 541px;


background: #FFFFFF;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);

.textArea{
    height: 50%;
    padding: 20px;
}

.textArea > p{
    width: 254px;
    height: 100%;
    margin: 0px auto;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    ${'' /* line-height: 150%; */}
    /* or 30px */

    text-align: center;

    color: #000000;
}

.textArea > h3{
    width: 100%;
    text-align: center;
height: 30px;

margin: 0px auto;

font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 20px;
${'' /* line-height: 150%; */}
/* identical to box height, or 30px */


color: #FF820E;
}

.readmore > a{

    text-decoration: none;
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 150%;
/* identical to box height, or 27px */


color: #024E95;
}

.readmore{
    
    width: 101px;
    height: 27px;

    margin: 0px auto;
}
`

const Image = styled.img`
    width: 100%;
    height: 100%
`

const CardContainer = styled.div`
    padding-bottom: 40px;
`

const CardInner1 =styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
`

const CardInner2 =styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
`


const Features = () => {
  return (
      <Container>
        <Title  >Our Special Features</Title>
        
        <CardContainer>

        <CardInner1>

        <Card>
            <div className='Image' >
            <Image src={image3} />
            </div>
            <div className='textArea'>
                <h3>Personalizes Classes</h3>
                    <p>We have the best personalizes classes </p>
            </div>
        </Card>

        <Card>
            <div className='Image' >
            <Image src={image3} />
            </div>
            <div className='textArea'>
                <h3>Personalizes Classes</h3>
                    <p>We have the best personalizes classes </p>
            </div>
        </Card>

        </CardInner1>

        <CardInner2>
        <Card>
            <div className='Image' >
            <Image src={image3} />
            </div>
            <div className='textArea'>
                <h3>Personalizes Classes</h3>
                    <p>We have the best personalizes classes </p>
            </div>
        </Card>

        <Card>
            <div className='Image' >
            <Image src={image3} />
            </div>
            <div className='textArea'>
                <h3>Personalizes Classes</h3>
                    <p>We have the best personalizes classes </p>
            </div>
        </Card>
</CardInner2>


        </CardContainer>


      </Container>
  );
};

export default Features;
