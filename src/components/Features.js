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
    width: 100%;
    height: 100%;
    z-index: -1;
`




const Features = () => {
  return (
      <Container>
        <Title  >Events</Title>
        
        <OwlCarousel className="owl-main  owl-theme" items={1} loop autoplay>
            <div className='item'>
                    <Image src={event2} /> 
            </div>
            <div className='item'>
                    <Image src={image3} /> 
            </div>
        </OwlCarousel>



      </Container>
  );
};

export default Features;
