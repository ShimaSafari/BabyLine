import React from "react";
import { Data } from "/src/assets/DataAssets";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    // Grid for main container for line background
    <Grid
      sx={{
        width: "100%",
        paddingX: { md: "70px", sm: "10px" },
        backgroundImage: `url(${Data.Bgline})`,
        backgroundSize: "contain",
        backgroundPosition: "left",
      }}
    >
      {/* Grid for hero banner background */}
      <Grid
        sx={{
          width: "100%",
          height: "660px",
          backgroundImage: `url(${Data.Herobg})`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          borderRadius: "50px",
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
      <Grid
        container
        spacing={4}
        sx={{
          marginTop: "50px",
          marginX: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Grid
          size={{ md: 6, xs: 12 }}
          sx={{
            display: "flex",
            justifyContent: { md: "start", xs: "center" },
          }}
        >
          <Link to={"/store"}>
            <img
              src={Data.ToddlerShop}
              alt="Toddler Shop"
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
              }}
            />
          </Link>
        </Grid>
        <Grid
          size={{ md: 6, xs: 12 }}
          sx={{ display: "flex", justifyContent: { md: "end", xs: "center" } }}
        >
          <Link to={"/store"}>
            <img
              src={Data.BabyShop}
              alt="Baby Shop"
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
              }}
            />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
