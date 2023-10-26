import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcment from "../Composants/Announcment";
import Footer from "../Composants/Footer";
import Navbar from "../Composants/Navbar";
import Newsletter from "../Composants/Newsletter";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageCont = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoCont = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterCont = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
const Filter = styled.div`
  display: flex;
  justify-content: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 5px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeoption = styled.option``;
const AddCont = styled.div`
  margin-top: 10px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmmountCont = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Ammount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  backgroound-color: white;
  cursor: pointer;

  &:hover{
    background-color: #f8f4f4;
  }
`;

const SignleProduct = () => {
  return (
    <Container>
      <Announcment />
      <Navbar />
      <Wrapper>
        <ImageCont>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageCont>
        <InfoCont>
          <Title> Denim jumpsuit</Title>
          <Desc>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minus
            voluptas tempora veniam atque quas voluptate asperiores saepe
            consequatur non.
          </Desc>
          <Price>20$</Price>
          <FilterCont>
            <Filter>
              <FilterTitle> Color </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="blue" />
              <FilterColor color="grey" />
            </Filter>
            <Filter>
              <FilterTitle> Size </FilterTitle>
              <FilterSize>
                <FilterSizeoption> XS</FilterSizeoption>
                <FilterSizeoption> S</FilterSizeoption>
                <FilterSizeoption> M</FilterSizeoption>
                <FilterSizeoption> L</FilterSizeoption>
                <FilterSizeoption> XL</FilterSizeoption>
                <FilterSizeoption> XXL</FilterSizeoption>
              </FilterSize>
            </Filter>
          </FilterCont>
          <AddCont>
            <AmmountCont>
              <Remove />
              <Ammount>1</Ammount>
              <Add />
            </AmmountCont>
            <Button> Add to cart </Button>
          </AddCont>
        </InfoCont>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SignleProduct;
