import React from "react";
import Hero from "../components/Hero";
import HeroGroup from "../components/HeroGroup";
import PopularProducts from "../components/PopularProducts";
import Offers from "../components/Offers";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroGroup/>
      <PopularProducts/>
      <Offers/>
    </>
  );
};

export default Home;