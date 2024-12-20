import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Data } from "../assets/DataAssets";
import ProductItem from "./ProductItem";
import Grid from "@mui/material/Grid2";
import Title from "./Title";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LeftArrow from "../assets/icons/LeftArrow";
import RightArrow from "../assets/icons/RightArrow";
const PopularProducts = () => {
  const { Products } = useContext(ShopContext);
  const [PopularProducts, setPopularProduct] = useState([]);
  useEffect(() => {
    setPopularProduct(Products); // .slice(0,10)
  }, []);

  return (
    <Grid
      sx={{
        width: "100%",
        paddingX: { md: "70px", sm: "10px" },
        height: "745px",
        backgroundImage: `url(${Data.Bgline_popular})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // flexGrow: 1,
      }}
    >
      <Title text="Popular products" />
      {/* --------- rendering Products --------- */}
      <Grid>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          grabCursor={true}
          loop={true}
        >
          {PopularProducts.map((item, index) => (
            <SwiperSlide>
              <ProductItem
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </SwiperSlide>
          ))}
          <div>
            <div className="swiper-button-prev ">
              <LeftArrow />
            </div>
            <div className="swiper-button-next ">
              <RightArrow />
            </div>
          </div>
        </Swiper>
      </Grid>
    </Grid>
  );
};

export default PopularProducts;
