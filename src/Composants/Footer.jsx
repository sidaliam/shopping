import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Right = styled.div`
  flex: 1;
`;
const Contactitem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img``;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo> E-Commerce</Logo>
        <Description>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          officia veniam maxime numquam vitae quia nemo doloribus repudiandae
          iusto, libero ducimus minus enim laboriosam, explicabo debitis? In
          nostrum corrupti delectus.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            {" "}
            <Facebook />{" "}
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />{" "}
          </SocialIcon>
          <SocialIcon color="E4405F ">
            {" "}
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            {" "}
            <Pinterest />{" "}
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> useful Links </Title>
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
      </Center>
      <Right>
        <Title> Contact us </Title>
        <Contactitem>
          {" "}
          <Room style={{marginRight:"10px"}} /> 2,rue mouloud madjen, el biar
        </Contactitem>
        <Contactitem>
          {" "}
          <Phone style={{marginRight:"10px"}} /> 0794861373{" "}
        </Contactitem>
        <Contactitem>
          {" "}
          <Mail style={{marginRight:"10px"}} /> sidaliamo18@gmail.com{" "}
        </Contactitem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
