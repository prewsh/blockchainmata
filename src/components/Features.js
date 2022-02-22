import React from 'react';
import { Container } from './Classes';
import { Title } from './Teachers';
import styled from 'styled-components'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';



// image imports
import image3 from "../img/event1.png"
import event2 from "../img/event2.png"


const Image = styled.img`
    width: 450px !important;
    height: 450px;
    z-index: -1;

    @media (max-width: 768px) {

    width: 100% !important;
    height: 100%;
    }
`

const CoverDiv = styled.div `

.item{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`






const Features = () => {
  return (
      <Container id='event'>
        <Title  >Events</Title>
        
        <OwlCarousel className="owl-main  owl-theme" items={1} loop autoplay>

            <CoverDiv>
            <div className='item'>
                    <Image src={event2} /> 
            </div>
            </CoverDiv>
            <CoverDiv>
            <div className='item'>
                    <Image src={image3} /> 
            </div>
            </CoverDiv>
        </OwlCarousel>



      </Container>
  );
};

export default Features;
