import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Data } from "../assets/DataAssets";
import ProductItem from "./ProductItem";
import Grid from "@mui/material/Grid2";
import Title from "./Title";
import LeftArrow from "../assets/icons/LeftArrow";
import RightArrow from "../assets/icons/RightArrow";

// -- import css in slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PopularProducts = () => {
  const { Products } = useContext(ShopContext);
  const [PopularProducts, setPopularProduct] = useState([]);
  useEffect(() => {
    const bestSeller = Products.filter((item) =>(item.bestseller));
    // console.log(bestSeller);
    setPopularProduct(bestSeller);
  }, []);

  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Grid
      sx={{
        width: "100%",
        height: "670px",
        backgroundImage: `url(${Data.Bgline_popular})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Title text="Popular products" />
      {/* --------------- rendering Products -------------- */}
      <Grid
        sx={{ paddingX: { md: "70px", xs: "50px" } }}
        className="slider-container"
      >
        <Slider {...settings}>
          {PopularProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              discountPrice={item.discountPrice}
              discountPercent={item.discountPercent}
            />
          ))}
        </Slider>
      </Grid>
    </Grid>
  );
};

export default PopularProducts;
