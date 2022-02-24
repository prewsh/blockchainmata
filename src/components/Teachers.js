import React from 'react';
import styled from 'styled-components'
// import Title from "./Classes"


// image imports
import image3 from "../img/profile1.png"
import social from "../img/social1.png"
import social2 from "../img/social2.png"

const Container = styled.div`
    background: rgba(248,195,0, 0.18);
    padding: 30px;
`

export const Title = styled.h3`
width: 100%;
height: 60px;
color: #000000;


font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 150%;
/* identical to box height, or 60px */


text-align: center;
margin: 0px auto;


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

          font-size: 18px;
        }
`


const Card = styled.div`
margin: 10px auto;

width: 300px;
${'' /* height: 548px; */}

${'' /* height: 687px; */}
background: #FFFFFF;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);

.textArea{
    height: 30%;
    ${'' /* padding: 20px; */}

    background: #f8c300;
}

.textArea > p{
    width: 254px;
    ${'' /* height: 188px; */}
    margin: 0px auto;

    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    ${'' /* line-height: 150%; */}
    /* or 30px */

    text-align: center;

    color: #FFFFFF;
}

.textArea > h3{
padding-top: 4px;
width: 100%;
height: 30px;
text-align: center;

margin: 0px auto;

font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 20px;
${'' /* line-height: 150%; */}
/* identical to box height, or 30px */


color: #FFFFFF;
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

.socialImage{
    
    width: 20px;
    height: 20px;
    

    margin: 0px auto;
}

.social{
  margin: 0px auto;

  display: flex;
    margin: 0px auto;
    align-items: center;
    justify-content: center;
}

.social > span{
  margin: 7.5px
}

`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const Image = styled.img`
    width: 100%;
    height: 100%
`





const Teachers = () => {
  return (
      <Container id='team'>

           <Title>Meet the Team</Title>
           <SubTitle>Our Team is a group of professional blockchain developers, traders and designers.</SubTitle>


           <CardContainer>
        <Card>
            <div className='Image' >
            <Image src={image3} />
            </div>
            <div className='textArea'>
                <h3>Jenny Wilson</h3>
                    <p>Product manager </p>
              <div className='social' >
                <span ><a href='/'><Image className='socialImage' src={social} /></a></span>
                <span ><a href='/'><Image className='socialImage' src={social2} /></a></span>
              </div>
            </div>
        </Card>

        <Card>
            <div className='Image' >
            <Image src={image3} />
            </div>
            <div className='textArea'>
                <h3>Jenny Wilson</h3>
                    <p>Product manager </p>
              <div className='social' >
                <span ><a href='/'><Image className='socialImage' src={social} /></a></span>
                <span ><a href='/'><Image className='socialImage' src={social2} /></a></span>
              </div>
            </div>
        </Card>

        <Card>
            <div className='Image' >
            <Image src={image3} />
            </div>
            <div className='textArea'>
                <h3>Jenny Wilson</h3>
                    <p>Product manager </p>
              <div className='social' >
                <span ><a href='/'><Image className='socialImage' src={social} /></a></span>
                <span ><a href='/'><Image className='socialImage' src={social2} /></a></span>
              </div>
            </div>
        </Card>

        
        </CardContainer>



      </Container>
  );
};

export default Teachers;
