import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Data } from "../assets/DataAssets";
import ProductItem from "../components/ProductItem";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
const Store = () => {
  const { Products } = useContext(ShopContext);
  const [PopularProducts, setPopularProduct] = useState([]);
  useEffect(() => {
    setPopularProduct(Products);
  }, []);
  return (
    <Grid container>
      <Grid
        container
        size={8}
        sx={{ backgroundColor: "#FFFCF9", borderRadius: "50px" }}
      >
        {/*  Grid Products text */}
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
                fontSize: 40,
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              All Products
            </Typography>
          </Grid>
          <Box>
            <img src={Data.i_Line_Orange} alt="" />
          </Box>
        </Grid>
        <Grid container size={12}>
          <Grid
            container
            size={4}
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              justifyContent: "space-evenly",
            }}
          >
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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Store;
