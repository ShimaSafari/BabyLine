import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Rating, Typography } from "@mui/material";
import Slider from "react-slick";
import LeftArrowOrange from "../assets/icons/LeftArrowOrange";
import RightArrowOrange from "../assets/icons/RightArrowOrange";
import UserIconVerifed from "../assets/icons/UserIconVerifed";
import { Data } from "../assets/DataAssets";

const Reviews = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LeftArrowOrange />,
    nextArrow: <RightArrowOrange />,
  };

  const reviewsData = [
    {
      name: "Ayisha Jincy",
      review:
        "Product quality was fabulous, review can be posted here for users those who buy this product, best for Gifting in birthdays",
      rating: 4.5,
      image: Data.Reviews_photo,
    },
    {
      name: "Johny Doe",
      review:
        "Jonny's mom : It is excellent customer service and the fast delivery. I am very happy with my purchase and I would recommend it to everyone.",
      rating: 4,
      image: Data.About_info1,
    },
  ];

  return (
    <Grid container size={12}>
      <Slider {...settings} className="review-slider" style={{ width: "100%" }}>
        {reviewsData.map((review, index) => (
          <Grid
            key={index}
            sx={{
              paddingX: { xs: "40px", md: "50px", lg: "90px" },
              paddingY: { xs: "25px", lg: "32px" },
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: "space-between",
              rowGap: 3,
            }}
          >
            {/* 1- Grid for Review detail */}
            <Grid
              size={{ xs: 12, lg: 8 }}
              sx={{
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Grid
                size={12}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  marginBottom: 2,
                }}
              >
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Typography fontWeight={700}>{review.name}</Typography>
                  <UserIconVerifed />
                </Box>

                <Rating
                  name="half-rating-read"
                  defaultValue={review.rating}
                  precision={0.5}
                  size="small"
                  readOnly
                  sx={{
                    "& > span .MuiRating-icon": {
                      color: "inherit",
                    },
                  }}
                />
              </Grid>

              <Typography color="#726868" fontWeight={700} fontSize={20}>
                {review.review}
              </Typography>
            </Grid>
            {/* 1- Grid for Review photo */}
            <Grid size={{ xs: 12, lg: 3 }} sx={{ justifyContent: "center" }}>
              <img
                src={review.image}
                alt="Reviews_photo"
                style={{ height: "200px", objectFit: "contain" }}
              />
            </Grid>
          </Grid>
        ))}
      </Slider>
    </Grid>
  );
};

export default Reviews;
