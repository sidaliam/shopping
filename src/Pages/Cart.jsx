import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcment from "../Composants/Announcment";
import Footer from "../Composants/Footer";
import Navbar from "../Composants/Navbar";
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 20px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const Toptexts = styled.div``;
const Toptext = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
`;
const Hr = styled.hr`
  background-color: #eee;
`;
const Summary = styled.div`
flex:1;
border:0.5px solid lightgrey;
border-radius:10px;
padding:20px
`;
const SummaryTitle = styled.h1`
 font-weight:200;
`
const Summaryitem = styled.div`
 margin:20px 0px;
 display:flex;
 justify-content:space-between;
 font-weight:${props=>props.type==="totale"&& "500"};
 font-size:${props=>props.type==="totale"&& "24px"};
`
const Summaryitemprice = styled.span``
const Summaryitemtext = styled.span``
const Button = styled.button`
 width:100%;
 padding:10px;
 background-color:black;
 color:white;
 font-weight:600;
`
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Wrapper>
        <Title> YOUR BAG </Title>
        <Top>
          <TopButton> Continue Shopping </TopButton>
          <Toptexts>
            <Toptext> Shopping Bag(2) </Toptext>
            <Toptext>your wishlist </Toptext>
          </Toptexts>
          <TopButton type="filled"> Checkout Now ! </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    {" "}
                    <b> Product :</b> Jeans levis
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b> ID :</b>36544789
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    {" "}
                    <b> Size :</b> 38
                  </ProductSize>
                </Details>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount> 2 </ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice> 30 $ </ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    {" "}
                    <b> Product :</b> Jeans levis
                  </ProductName>
                  <ProductId>
                    {" "}
                    <b> ID :</b>36544789
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    {" "}
                    <b> Size :</b> 38
                  </ProductSize>
                </Details>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount> 2 </ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice> 30 $ </ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle> Order Summary :</SummaryTitle>
            <Summaryitem>
                <Summaryitemtext> subtotal </Summaryitemtext>
                <Summaryitemprice> 80$ </Summaryitemprice>
            </Summaryitem>
            <Summaryitem>
                <Summaryitemtext> subtotal </Summaryitemtext>
                <Summaryitemprice> 80$ </Summaryitemprice>
            </Summaryitem>
            <Summaryitem>
                <Summaryitemtext> subtotal </Summaryitemtext>
                <Summaryitemprice> 80$ </Summaryitemprice>
            </Summaryitem>
            <Summaryitem  type="totale" >
                <Summaryitemtext> Totale </Summaryitemtext>
                <Summaryitemprice> 80$ </Summaryitemprice>
            </Summaryitem>
            <Button> Checkout now !</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
