import React from "react";
import Hero from "../components/Hero";
import HeroGroup from "../components/HeroGroup";
import PopularProducts from "../components/PopularProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroGroup/>
      <PopularProducts/>
    </>
  );
};

export default Home;