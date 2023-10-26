import React from "react";
import Navbar from "../Composants/Navbar";
import styled from "styled-components";
import Announcment from "../Composants/Announcment";
import Products from "../Composants/Products";
import Newsletter from "../Composants/Newsletter";
import Footer from "../Composants/Footer";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterCont = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;

const Filtertext = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right:20px;
`;
const Select = styled.select`
 padding:10px;
 margin-right:20px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcment />
      <Navbar />
      <Title> Dresses </Title>
      <FilterCont>
        <Filter>
          {" "}
          <Filtertext> Filter Product: </Filtertext>{" "}
          <Select>
            <Option disabled selected>
              {" "}
              Color{" "}
            </Option>
            <Option>white</Option>
            <Option> Black</Option>
            <Option>Blue</Option>
            <Option> Yellow </Option>
          </Select>
          <Select>
          <Option disabled selected>
            {" "}
            Size{" "}
          </Option>
          <Option>s</Option>
          <Option> m</Option>
          <Option>l</Option>
          <Option> xl </Option>
        </Select>
        </Filter>

        <Filter>
          {" "}
          <Filtertext> Sort Product: </Filtertext>{" "}
          <Select>
          <Option selected>
            {" "}
            Newest{" "}
          </Option>
          <Option>Price (asc)</Option>
          <Option> Price (desc) </Option>
        </Select>
        </Filter>
      </FilterCont>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
