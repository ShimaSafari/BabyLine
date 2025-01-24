import React from "react";
import Grid from "@mui/material/Grid2";
import ProductInfo from "../components/ProductInfo";
import ProductReview from "../components/ProductReview";
import PopularProducts from "../components/PopularProducts"
const Product = () => {
  return (
    <Grid
      container
      sx={{ paddingX: { md: "70px", sm: "10px" }, borderRadius: "50px" }}
    >
      <ProductInfo />
      <ProductReview/>
      <PopularProducts/>
    </Grid>
  );
};

export default Product;
