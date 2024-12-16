import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Data } from "../assets/DataAssets";
import ProductItem from "./ProductItem";
import Grid from "@mui/material/Grid2";
import Title from "./Title";
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
      {/* rendering Products */}
      <Grid
        conatiner
        // columns={{ xs: 2, sm: 3, md: 5 }}
        // spacing={{ xs: 2, md: 3 }}
        sx={{ display: "flex", flexDirection: "row", gap: 8 }}
      >
        {PopularProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default PopularProducts;
