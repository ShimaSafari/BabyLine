import React from "react";
import Grid from "@mui/material/Grid2";
import { Data } from "/src/assets/DataAssets";

const HeroGroup = () => {
  return (
    <Grid
      container
      spacing={4}
      sx={{
        marginTop: "50px",
        marginX: {md:"100px", xs:"10px"},
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Grid
        size={{ md: 6, xs: 12 }}
        sx={{ display: "flex", justifyContent: { md: "start", xs: "center" } }}
      >
        <img
          src={Data.ToddlerShop}
          alt="Toddler Shop"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "auto",
          }}
        />
      </Grid>
      <Grid
        size={{ md: 6, xs: 12 }}
        sx={{ display: "flex", justifyContent: { md: "end", xs: "center" } }}
      >
        <img
          src={Data.BabyShop}
          alt="Baby Shop"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "auto",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default HeroGroup;
