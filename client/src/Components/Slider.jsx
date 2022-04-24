import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { sliderItems } from '../data';
import { mobile } from '../responsive';

import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
  position: relative;
  overflow: hidden;
  ${mobile({ display: 'none' })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  z-index: 1;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  height: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const Image = styled.img`
  height: 80%;
`;

const ImgContainer = styled.div`
  height: 700px;
  width: 850px;
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 100;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: blue;
  cursor: pointer;
  color: white
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
    } else {
      setSlideIndex(
        slideIndex < sliderItems.length - 1
          ? slideIndex + 1
          : sliderItems.length - 1
      );
    }
  };
  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to={`/products/${item.cat}`}>
                <Button>SHOW NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
        {/* <Slide bg='fcf1ed'>
          <ImgContainer>
            <Image src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3R5bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
          </ImgContainer>
          <InfoContainer>
            <Title>SPRING SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg='fbf0f4'>
          <ImgContainer>
            <Image src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3R5bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
          </ImgContainer>
          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide> */}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
