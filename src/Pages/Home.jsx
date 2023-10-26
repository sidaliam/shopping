import React from "react";
import Announcment from "../Composants/Announcment";
import Categories from "../Composants/Categories";
import Footer from "../Composants/Footer";
import Navbar from "../Composants/Navbar";
import Newsletter from "../Composants/Newsletter";
import Products from "../Composants/Products";
import Slider from "../Composants/Slider";

const Home = () => {
  return (
    <div>
      <Announcment />
      <Navbar />
      <Slider />
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
