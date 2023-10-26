import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100wh;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.pinimg.com/originals/f4/e2/f4/f4e2f41dbaa5aff30e550bab7b70ac99.png") center/cover;

  display:flex;
  align-items:center;
  justify-content:center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction:column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom:5px;
`;
const Link = styled.a`
 margin: 10px 0px;
 font-size: 12px;
 text-decoration: underline;
 cursor:pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button> Login </Button>
          <Link> Forget password ?</Link>
          <Link> CREATE NEW ACCOUNT </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
