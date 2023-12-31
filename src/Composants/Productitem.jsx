import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div`
  opacity:0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  background-color: rgba(0,0,0,0.2);
  justify-content: center;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbf5;
  position: relative;

  &:hover ${InfoContainer}{
    opacity:1;
  }
`;

const Image = styled.img`
  height: 75%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all .5s ease;
  cursor:pointer;

  &:hover{
    background-color:#e9f7c3;
    transform:scale(1.1);
  }
`;
const Productitem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <InfoContainer>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </InfoContainer>
    </Container>
  );
};

export default Productitem;
