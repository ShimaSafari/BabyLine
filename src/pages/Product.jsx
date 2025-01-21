import React from "react";
import Grid from "@mui/material/Grid2";
import ProductInfo from "../components/ProductInfo";
const Product = () => {
  return (
    <Grid
      container
      sx={{ paddingX: { md: "70px", sm: "10px" }, borderRadius: "50px" }}
    >
      <ProductInfo />
    </Grid>
  );
};

export default Product;
