import React from "react";
import { Data } from "../assets/DataAssets";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
const AboutHero = () => {
  return (
    <Grid
      container
      sx={{
        // height: "748px",
        paddingX: { md: "70px", sm: "10px" },
      }}
    >
      <Grid
        sx={{
          width: "100%",
          //   height: "700px",
          backgroundColor: "secondary.main",
          backgroundImage: `url(${Data.Bg_About_Hero})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: { md: "25px", sm: "20px" },
        }}
      >
        {/* Grid content */}
        <Grid
          container
          sx={{
            paddingX: { md: "80px" },
            paddingY: "78px",
          }}
        >
          {/* 1- Grid About ninibits */}
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: { md: "end", xs: "center" },
              marginBottom: 2,
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                gap: 2,
                paddingX: 7,
                marginBottom: -1,
              }}
            >
              <Typography
                sx={{
                  fontSize: 40,
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                About
              </Typography>
              {/* 1-Grid for logo */}
              <Grid container>
                <Typography
                  sx={{
                    color: "common.main",
                    fontSize: 40,
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
                    fontSize: 40,
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                  }}
                >
                  bits
                </Typography>
              </Grid>
            </Grid>
            <Box>
              <img src={Data.i_Line_Black} alt="" width="90%" />
            </Box>
          </Grid>
          {/* 2- Grid container for img & text */}
          <Grid container sx={{ flexDirection: { md: "row", xs: "column" } }}>
            {/* grid for img */}
            <Grid
              size={{ md: 6, xs: 12 }}
              sx={{
                display: { xs: "flex", md: "block" },
                justifyContent: "center",
              }}
            >
              <img src={Data.About_Hero} alt="" width="90%" />
            </Grid>
            {/* grid for text */}
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginTop: "60px",
                paddingX: { xs: 3, md: 0 },
              }}
              size={{ md: 6, xs: 12 }}
            >
              <Typography
                variant="h1"
                sx={{ fontWeight: 800, fontSize: { md: 30, lg: 50 } }}
              >
                “ Happy, healthy{" "}
                <Typography
                  variant="h1"
                  component="span"
                  sx={{
                    color: "common.main",
                    fontWeight: 800,
                    fontSize: { md: 30, lg: 50 },
                  }}
                >
                  Babies
                </Typography>{" "}
                and this is at the heart of everything we do “
              </Typography>
              <Box>
                <Typography sx={{ color: "#09168A", fontSize: 25 }}>
                  Mohammed Jaseem
                </Typography>
                <Typography variant="h4">Ceo, ninibits</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutHero;
