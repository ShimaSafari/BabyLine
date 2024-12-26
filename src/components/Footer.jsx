import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import { Data } from "/src/assets/DataAssets";
import HeartIcon from "/src/assets/icons/HeartIcon";
const Footer = () => {
  return (
    <Grid
      sx={{
        backgroundColor: "background.paper",
        width: "100%",
        backgroundImage: `url(${Data.Bg_Footer})`,
        backgroundSize: "contain",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        marginTop: "30px",
      }}
    >
      <Grid
        container
        sx={{
          paddingX: { md: "70px", xs: "20px" },
          paddingY: "20px",
          justifyContent: "center",
          borderBottom: 2,
          borderColor: "#C71E1E",
        }}
      >
        {/* Footer 1 Grid */}
        <Grid
          container
          sx={{
            marginTop: "40px",
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            rowGap: 5,
          }}
        >
          {/* Footer1 - 1 menu */}
          <Grid container size={{ lg: 2.5, md: 6, xs: 12 }}>
            <Box
              component="ul"
              sx={{ display: { xs: "flex", md: "block" }, gap: 2 }}
            >
              <Box
                component="li"
                sx={{
                  paddingX: { xs: "20px", md: "10px" },
                  listStyleImage: `url(${Data.i_Dot})`,
                }}
              >
                <Typography variant="body2" sx={{ fontSize: { md: "28px" } }}>
                  New Born
                </Typography>
              </Box>
              <Box
                component="li"
                sx={{
                  paddingX: { xs: "20px", md: "10px" },
                  listStyleImage: `url(${Data.i_Dot})`,
                }}
              >
                <Typography variant="body2" sx={{ fontSize: { md: "28px" } }}>
                  3-6 Months
                </Typography>
              </Box>
              <Box
                component="li"
                sx={{
                  paddingX: { xs: "20px", md: "10px" },
                  listStyleImage: `url(${Data.i_Dot})`,
                }}
              >
                <Typography variant="body2" sx={{ fontSize: { md: "28px" } }}>
                  6-12 Months
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* Footer1 - 2 brands */}
          <Grid
            container
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "space-between",
            }}
            size={{ lg: 4.5, md: 6, xs: 12 }}
          >
            <Box sx={{ width: { lg: "100px", md: "80px", xs: "70px" } }}>
              <img
                src={Data.Footer_brand1}
                alt=""
                style={{
                  width: "100%",
                  maxWidth: "100px",
                  height: "auto",
                }}
              />
            </Box>
            <Box sx={{ width: { lg: "100px", md: "80px", xs: "70px" } }}>
              <img
                src={Data.Footer_brand2}
                alt=""
                style={{
                  width: "100%",
                  maxWidth: "100px",
                  height: "auto",
                }}
              />
            </Box>
            <Box sx={{ width: { lg: "100px", md: "80px", xs: "70px" } }}>
              <img
                src={Data.Footer_brand3}
                alt=""
                style={{
                  width: "100%",
                  maxWidth: "100px",
                  height: "auto",
                }}
              />
            </Box>
            <Box sx={{ width: { lg: "100px", md: "80px", xs: "70px" } }}>
              <img
                src={Data.Footer_brand4}
                alt=""
                style={{
                  width: "100%",
                  maxWidth: "100px",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>
          {/* Footer1 - 3 pay */}
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: { xs: "space-between", md: "center" },
            }}
            size={{ lg: 2.2, md: 6, xs: 12 }}
          >
            <img src={Data.Footer_pay1} alt="bitcoin" width="100px" />
            <img src={Data.Footer_pay2} alt="master_card" width="100px" />
            <img src={Data.Footer_pay3} alt="visa" width="100px" />
            <img src={Data.Footer_pay4} alt="western" width="100px" />
          </Grid>
          {/* Footer1 - 4 logo */}
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: { lg: "right" },
              alignItems: { lg: "end" },
            }}
            size={{ lg: 2.8, md: 6, xs: 12 }}
          >
            {/* logo typography */}
            <Grid container>
              <Typography
                sx={{
                  color: "common.main",
                  fontSize: { md: 64, xs: 40 },
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
                  fontSize: { md: 64, xs: 40 },
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                bits
              </Typography>
            </Grid>
            <Typography variant="body2" sx={{ fontSize: "24px" }}>
              23 Kinfra Park Calicut - 676056 +91 8086 5000 23{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Footer 2 Grid */}
      <Grid
        sx={{
          paddingX: { md: "70px", sm: "50px", xs: "20px" },
          paddingY: "21px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
        }}
      >
        <Grid>
          <Typography variant="body2">All rights reserved</Typography>
        </Grid>
        <Grid sx={{ display: "flex", gap: 1 }}>
          <Typography variant="body2">Designed By</Typography>
          <HeartIcon />
          <Typography variant="body2">Mohammed Jaseem</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
