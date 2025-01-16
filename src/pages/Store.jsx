import React from "react";
import StoreAllProducts from "../components/StoreAllProducts";
import Grid from "@mui/material/Grid2";
import SearchProducts from "../components/SearchProducts";
import StoreCategory from "../components/StoreCategory";
import { Data } from "../assets/DataAssets";
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
      <Grid
        size={{ xs: 12, sm: 11 }}
        sx={{
          backgroundImage: `url(${Data.Store_Banner})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: { md: 500, sm: 300, xs: 200 },
          marginX: "auto",
          marginTop: { lg: -12, xs: 2 },
          zIndex: { lg: -10, xs: 0 },
        }}
      />
    </Grid>
  );
};

export default Store;
