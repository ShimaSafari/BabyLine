import React from "react";
import StoreAllProducts from "../components/StoreAllProducts";
import Grid from "@mui/material/Grid2";
import SearchProducts from "../components/SearchProducts";
import StoreCategory from "../components/StoreCategory";

const Store = () => {
  return (
    <Grid
      container
      sx={{
        paddingX: { md: "70px", xs: "10px" },
        justifyContent: "space-between",
      }}
    >
      <Grid size={{ xs: 12, md: 7.5 }}>
        <StoreAllProducts />
      </Grid>
      <Grid
        container
        size={{ sm: 12, md: 4.2 }}
        sx={{ flexDirection: "column" }}
      >
        <SearchProducts />
        <StoreCategory />
      </Grid>
    </Grid>
  );
};

export default Store;
