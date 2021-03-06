import React from 'react';
import styled from 'styled-components';
import { Send } from '@material-ui/icons';
import { mobile } from '../responsive';

const NewsLetter = () => {
  const Container = styled.div`
    height: 60vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;
  const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
  `;
  const Desc = styled.div`
    font-size: 18px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: 'center' })}
  `;
  const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({ width: '80%' })}
  `;
  const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
  `;
  const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
  `;

  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Get timely updates from your favorite product</Desc>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
