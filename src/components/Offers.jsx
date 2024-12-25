import React from "react";
import { Data } from "../assets/DataAssets";
import Grid from "@mui/material/Grid2";
import Title from "./Title";
const Offers = () => {
  return (
    <Grid>
      <Title text="Our Offers" />
      {/*  Grid for flower Bg */}
      <Grid
        sx={{
          height: "600px",
          marginX: { md: "70px", xs: "10px" },
          backgroundImage: `url(${Data.Bg_Offers})`,
          backgroundSize: { md: "contain", xs: "cover" },
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: { lg: "row", xs: "column" },
          justifyContent: "space-between",
        }}
      >
        {/* Grid for left content */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "35px",
            paddingTop: { lg: "70px" },
            paddingLeft: { lg: "40px" },
          }}
        >
          <img
            src={Data.Group_offer1}
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
            }}
          />
          <img
            src={Data.Group_offer2}
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
            }}
          />
          <img
            src={Data.Group_offer3}
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
            }}
          />
        </Grid>
        {/* Grid for right mouse img */}
        <Grid sx={{ textAlign: "center" }}>
          <img
            src={Data.mouse}
            style={{
              width: "100%",
              maxWidth: "450px",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Offers;
