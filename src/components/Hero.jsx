import React from "react";
import { Data } from "/src/assets/DataAssets";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

const Hero = () => {
  return (
    // Grid for main container for line background
    <Grid
      sx={{
        width: "100%",
        paddingX: { md: "70px", sm: "10px" },
        // height:"730px",
        backgroundImage: `url(${Data.Bgline})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Grid for hero banner background */}
      <Grid
        sx={{
          width: "100%",
          height: "660px",
          backgroundImage: `url(${Data.Herobg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: { md: "50px", sm: "30px" },
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "end",
          alignContent: "center",
        }}
      >
        {/* Grid for hero banner content has 2 grid */}
        <Grid
          sx={{
            height: "100%",
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/*1-  Hero banner text */}
          <Grid container>
            <Typography
              sx={{
                color: "common.main",
                fontSize: { lg: 128, md: 90, sm: 80, xs: 64 },
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              nini
            </Typography>
            <Typography
              component="span"
              sx={{
                fontSize: { lg: 128, md: 90, sm: 80, xs: 64 },
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              bits
            </Typography>
          </Grid>
          {/* 2-  Hero banner text */}
          <Grid
            container
            sx={{
              width: "400px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", lg: "row" },
              alignContent: "center",
              rowGap: 5,
            }}
          >
            <Grid sx={{ display: "flex" }}>
              <Typography
                sx={{
                  color: "text.primary",
                  fontSize: { md: 35, sm: 30, xs: 25 },
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                Fun to Care
              </Typography>
            </Grid>
            <Grid sx={{ display: "flex" }}>
              <Typography
                sx={{
                  color: "common.main",
                  fontSize: { md: 35, sm: 30, xs: 25 },
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                Comfy Feel
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
