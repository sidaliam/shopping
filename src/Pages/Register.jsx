import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100wh;
  height: 100vh;
  background:url("https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png");
  display:flex;
  align-items:center;
  justify-content:center
   `;

const Wrapper = styled.div`
 padding:20px;
 width:40%;
 background-color:white;
`;

const Title = styled.h1`
font-size:24px; 
font-weight:300;
`;
const Form = styled.form`
 display:flex;
 flex-wrap:wrap;
`;
const Input = styled.input`
 flex:1;
 min-width:40%;
 margin:20px 10px 0px 0px;
 padding:10px;
`;
const Aggrement = styled.p`
 font-size:12px;
 margin: 20px 0px;
`;
const Button = styled.button`
 width:40%;
 border:none;
 padding:15px 20px;
 background-color:teal;
 color:white;
 cursor:pointer;
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title> Create an account </Title>
        <Form>
          <Input placeholder="name"/> 
          <Input placeholder="last name"/> 
          <Input placeholder="username"/> 
          <Input placeholder="email"/> 
          <Input placeholder="password"/> 
          <Input placeholder="Confirm password"/>
          <Aggrement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            amet fugit voluptatum doloribus assumenda accusantium odit
            consectetur animi, delectus corporis?
          </Aggrement>
          <Button> CREATE </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
