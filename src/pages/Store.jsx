import React from "react";
import StoreAllProducts from "../components/StoreAllProducts";
import Grid from "@mui/material/Grid2";
import SearchProducts from "../components/SearchProducts";
const Store = () => {
  return (
    <Grid
      container
      sx={{ paddingX: { md: "70px", xs: "10px" }, 
      justifyContent:"space-between"
    }}
    >
      <StoreAllProducts />
      <SearchProducts />
    </Grid>
  );
};

export default Store;
