import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import { Data } from "../assets/DataAssets";
import Slider from "react-slick";
import LeftArrowPink from "../assets/icons/LeftArrowPink";
import RightArrowPink from "../assets/icons/RightArrowPink";
const ProductPhotoShoot = () => {
  const photoShootImages = [
    Data.PhotoShoot_1,
    Data.PhotoShoot_2,
    Data.PhotoShoot_3,
    Data.PhotoShoot_4,
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LeftArrowPink />,
    nextArrow: <RightArrowPink />,
  };
  return (
    <>
      <Grid
        container
        size={11}
        sx={{
          backgroundColor: "#f9faf5",
          backgroundImage: `url(${Data.Bg_PhotoShoot})`,
          backgroundSize: "cover",
          backgroundPosition: { xs: "left", md: "right" },
          backgroundRepeat: "no-repeat",
          borderRadius: "24px",
          justifyContent: { xs: "center", md: "initial" },
          marginTop:"90px"
        }}
      >
        {/* Grid container for content */}
        <Grid
          container
          size={{ xs: 12, md: 9 }}
          sx={{
            padding: { xs: 4, lg: 5 },
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            rowGap: 2,
          }}
        >
          {/* 1- Grid for Slider ------------------------- */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ justifyContent: "center" }}>
            <Box
              sx={{
                marginBottom: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography fontSize={32} fontWeight={700}>
                <Typography
                  component="span"
                  color="common.main"
                  fontSize={32}
                  fontWeight={700}
                >
                  nini
                </Typography>
                bits photoshoot
              </Typography>
            </Box>
            <Slider {...settings} className="review-slider">
              {photoShootImages.map((image, index) => (
                <Box
                  key={index}
                  sx={{ justifyContent: "center", borderRadius: "25px" }}
                >
                  <img
                    src={image}
                    alt="Photo Shoot ninibits"
                    style={{
                      height: "200px",
                      objectFit: "contain",
                      width: "100%",
                    }}
                  />
                </Box>
              ))}
            </Slider>
          </Grid>
          {/* 2- Grid for images -----------------------------*/}
          <Grid
            container
            size={{ xs: 12, md: 5 }}
            sx={{
              justifyContent: { xs: "space-between", md: "start" },
              rowGap: 2,
              columnGap: 3,
            }}
          >
            {photoShootImages.slice(1).map((image, index) => (
              <Box
                key={index}
                sx={{ width: { xs: 100, sm: 120, md: 80, lg: 120 } }}
              >
                <img
                  src={image}
                  alt="Photo Shoot"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                  }}
                />
              </Box>
            ))}
            <Box
              sx={{
                width: { xs: 100, sm: 120, md: 80, lg: 120 },
              }}
            >
              <Typography fontSize={20}>View + More Photos </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductPhotoShoot;
