import {
  // Telegram,
  // Instagram,
  // Twitter,
  // Facebook,
  Email,
  Phone,
  AddLocation,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`;
// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
// `;
// const Center = styled.div`
//   flex: 1;
//   padding: 20px;
//   ${mobile({ display: 'none' })}
// `;

const Title = styled.h3`
  margin: 20px;
`;

// const List = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   display: flex;
//   flex-wrap: wrap;
// `;

// const ListItem = styled.li`
//   width: 50%;
//   margin-bottom: 10px;
// `;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ backgroundColor: 'lightgray' })}
`;

// const Logo = styled.h1`
//   margin-bottom: 30px;
//   text-align: center;
// `;
// const Desc = styled.p`
//   margin-bottom: 30px;
// `;
// const SocialConteiner = styled.div`
//   display: flex;
//   align-items: center;
// `;
// const SocialIcon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   color: white;
//   background-color: #${(props) => props.color};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 20px;
// `;

const ContactItem = styled.div`
  margin-bottom: 20px;
  margin: 20px;
  display: flex;
  align-items: center;
`;
// const Payment = styled.img`
//   width: 20%;
// `;

const Footer = () => {
  return (
    <Container>
      {/* <Left>
        <Logo>MakSHOP</Logo>
        <Desc>adhfghfghgghhjhjhjghjgjghj</Desc>

        <SocialConteiner>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='5505FF'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Telegram />
          </SocialIcon>
        </SocialConteiner>
      </Left> */}
      {/* <Center>
        <Title>useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center> */}
      <Right>
        <Title>Contact: </Title>
        <ContactItem>
          <AddLocation style={{ marginRight: '10px' }} />
          222 Marshal, North of Ocean 54345
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />
          +7 924-378-456
        </ContactItem>
        <ContactItem>
          <Email style={{ marginRight: '10px' }} />
          makoof@mail.ru
        </ContactItem>
        {/* <Payment src='https://cdn.pixabay.com/photo/2016/07/15/21/07/credit-card-1520400__480.jpg' /> */}
      </Right>
    </Container>
  );
};

export default Footer;
