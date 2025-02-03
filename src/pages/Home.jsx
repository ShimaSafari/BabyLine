import React from "react";
import Hero from "../components/Hero";
import PopularProducts from "../components/PopularProducts";
import Offers from "../components/Offers";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularProducts/>
      <Offers/>
    </>
  );
};

export default Home;