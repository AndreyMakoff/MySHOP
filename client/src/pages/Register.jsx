import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.6),
  rgba(255, 255, 255, 0.6)), url('https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') center;
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-sixe: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Link>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder='name' />
            <Input placeholder='Last name' />
            <Input placeholder='username' />
            <Input placeholder='email' />
            <Input placeholder='password' />
            <Input placeholder='confirm password' />
            <Agreement>
              Я соглашаюсь с данной политикой компании на обработку персональных
              данных <b>Privacy Policy</b>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Register;
