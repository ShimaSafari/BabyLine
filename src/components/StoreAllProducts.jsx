import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Data } from "../assets/DataAssets";
import ProductItem from "../components/ProductItem";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
const StoreAllProducts = () => {
  const { Products } = useContext(ShopContext);
  const [PopularProducts, setPopularProduct] = useState([]);
  useEffect(() => {
    setPopularProduct(Products);
  }, []);

  return (
    // Grid Container for 8 col bg white
    <Grid
      container
      sx={{
        backgroundColor: "#FFFCF9",
        borderRadius: "50px",
        maxHeight: "2000px",
      }}
    >
      {/*  Grid Products text All Products */}
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          paddingY: "40px",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            gap: 2,
            paddingX: 7,
            marginBottom: -1,
          }}
        >
          <Typography
            sx={{
              fontSize: { md: 40, sm: 30 },
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            All Products
          </Typography>
        </Grid>
        <Grid
          container
          size={{ xs: 8, sm: 7, md: 6 }}
          sx={{ justifyContent: "center" }}
        >
          <img src={Data.i_Line_Orange} alt="line_orange" width="90%" />
        </Grid>
      </Grid>
      <Grid
        className="grid-scroll"
        container
        size={11.8}
        rowSpacing={5}
        sx={{
          maxHeight: "1200px",
          overflow: "auto",
          marginBottom: "40px",
        }}
      >
        {PopularProducts.map((item, index) => (
          <Grid
            key={index}
            container
            size={{ lg: 4, md: 6, sm: 6, xs: 12 }}
            sx={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <ProductItem
              key={index}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              discountPrice={item.discountPrice}
              discountPercent={item.discountPercent}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default StoreAllProducts;
