import React from "react";
import { Data } from "../assets/DataAssets";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
const AboutCategory = () => {
  return (
    <Grid container>
      <Grid
        sx={{
          width: "100%",
          
          paddingX: { md: "70px", xs: 2 },
          backgroundImage: `url(${Data.Bg_About_category})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* 1- Grid About ninibits */}
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: { md: "start", xs: "center" },
            paddingY: "70px",
            paddingLeft: { md: "50px" },
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              gap: 2,
              // paddingX: 4,
              marginBottom: -1,
            }}
          >
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
            <Typography
              sx={{
                fontSize: 40,
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Products
            </Typography>
          </Grid>
          <Box sx={{ transform: "rotate(180deg)" }}>
            <img src={Data.i_Line_Black} />
          </Box>
        </Grid>
        {/* 2- Grid About products category */}
        <Grid
          container
          sx={{
            justifyContent: "space-around",
            alignContent: "center",
            gap: 3,
          }}
        >
          <img src={Data.About_category1} alt="" width="250px" />
          <img src={Data.About_category2} alt="" width="250px" />
          <img src={Data.About_category3} alt="" width="250px" />
          <img src={Data.About_category4} alt="" width="250px" />
          <img src={Data.About_category5} alt="" width="250px" />
        </Grid>
        {/* 3- Grid About text */}
        <Grid
          container
          sx={{
            justifyContent: "center",
            marginTop: "100px",
            marginBottom: "60px",
          }}
        >
          <Grid size={9}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: 30, lg: 40 },
                color: "common.main",
                textAlign: "center",
              }}
            >
              Dress your little girl as a{" "}
              <Typography
                component="span"
                variant="body1"
                sx={{ fontSize: { xs: 30, lg: 40 } }}
              >
                Princess
              </Typography>{" "}
              of the kingdom, who will conquer her dreams! 🏆
            </Typography>
            <Typography
              sx={{ textAlign: "center", color: "#09168A", marginTop: "28px" }}
            >
              Nabeela Pv
            </Typography>
            <Typography sx={{ textAlign: "center", fontSize: 20 }}>
              Co Founder, ninibits
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutCategory;
