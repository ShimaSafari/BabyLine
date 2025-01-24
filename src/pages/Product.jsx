import React from "react";
import Grid from "@mui/material/Grid2";
import ProductInfo from "../components/ProductInfo";
import ProductReview from "../components/ProductReview";
import PopularProducts from "../components/PopularProducts";
import ProductPhotoShoot from "../components/ProductPhotoShoot";
const Product = () => {
  return (
    <Grid
      container
      sx={{
        paddingX: { md: "70px", sm: "10px" },
        borderRadius: "50px",
        justifyContent: "center",
      }}
    >
      <ProductInfo />
      <ProductReview />
      <PopularProducts />
      <ProductPhotoShoot />
    </Grid>
  );
};

export default Product;
