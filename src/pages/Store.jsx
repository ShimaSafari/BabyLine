import React from "react";
import StoreAllProducts from "../components/StoreAllProducts";
import Grid from "@mui/material/Grid2";
const Store = () => {
  return (
    <Grid container sx={{ paddingX: { md: "70px", sm: "10px" },}}>
      <StoreAllProducts />
    </Grid>
  );
};

export default Store;
