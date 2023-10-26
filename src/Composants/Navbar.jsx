import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {mobil} from "../Responsive"

const Container = styled.div`
  height: 60px;
  ${mobil({backgroundColor :"red"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display :flex;
  align-items:center;
  justify-content:flex-end;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const MenuIcons = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {" "}
          <Language> EN</Language>{" "}
          <SearchContainer>
            {" "}
            <Input />
            <Search />{" "}
          </SearchContainer>{" "}
        </Left>
        <Center>
          {" "}
          <Logo> E-commerce</Logo>{" "}
        </Center>
        <Right>
          {" "}
          <MenuIcons> Register </MenuIcons> <MenuIcons> Sign in </MenuIcons>
          <MenuIcons>
            {" "}
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined/>
            </Badge>{" "}
          </MenuIcons>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
