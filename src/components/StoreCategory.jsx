import React from "react";
import { Data, TAGS } from "../assets/DataAssets";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
const StoreCategory = () => {
  return (
    <Grid
      container
      size={12}
      sx={{
        backgroundColor: "#FFFCF9",
        borderRadius: "50px",
        marginTop: 2,
      }}
    >
      {/* 1-  Grid Products text Categories */}
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          marginY: 2,
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
              fontSize: { md: 40, sm: 30 },
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            Categories
          </Typography>
        </Grid>
        <Grid container size={7} sx={{ justifyContent: "center" }}>
          <img src={Data.i_Line_Orange} alt="line_orange" width="90%" />
        </Grid>
      </Grid>
      {/* 2- Grid Store products category */}
      <Grid
        container
        sx={{
          justifyContent: "space-evenly",
          alignContent: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <img src={Data.About_category1} alt="" width="180px" />
          <Typography
            variant="body2"
            fontWeight={700}
            sx={{
              width: "70%",
              textAlign: "center",
            }}
          >
            Party & Gifts items
          </Typography>
        </Box>
        <Box
          sx={{
            width: "180px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <img src={Data.About_category2} alt="" width="180px" />
          <Typography
            variant="body2"
            fontWeight={700}
            sx={{
              width: "70%",
              textAlign: "center",
            }}
          >
            Strollers & Car Seats
          </Typography>
        </Box>
        <Box
          sx={{
            width: "180px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <img src={Data.About_category3} alt="" width="180px" />
          <Typography
            variant="body2"
            fontWeight={700}
            sx={{
              width: "70%",
              textAlign: "center",
            }}
          >
            Toddlers Clothing & Sets
          </Typography>
        </Box>
        <Box
          sx={{
            width: "180px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <img src={Data.About_category4} alt="" width="180px" />
          <Typography
            variant="body2"
            fontWeight={700}
            sx={{
              width: "70%",
              textAlign: "center",
            }}
          >
            Toys, Books & Games
          </Typography>
        </Box>
        <Box
          sx={{
            width: "180px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <img src={Data.About_category5} alt="" width="180px" />
          <Typography
            variant="body2"
            fontWeight={700}
            sx={{
              width: "70%",
              textAlign: "center",
            }}
          >
            Baby Care Products
          </Typography>
        </Box>
        <Box
          sx={{
            width: "180px",
            display: { xs: "flex", md: "none", lg: "flex" },
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{ width: "70%", color: "warning.main", paddingTop: 4 }}
          >
            Explore More Categories
          </Typography>
        </Box>
      </Grid>
      {/* 3- Grid Store TAGS */}
      <Grid
        sx={{
          marginTop: 2,
        }}
      >
        <Box
          sx={{
            width: "85%",
            display: { xs: "flex", md: "none", lg: "flex" },
            justifySelf: "center",
            gap: 1.5,
            flexWrap: "wrap",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              textDecoration: "underline",
              textDecorationStyle: "dashed",
              textDecorationColor: "#FF961A",
              textUnderlinePosition: "under",
            }}
          >
            TAGS
          </Typography>
          {TAGS.map((tag, index) => (
            <Typography
              key={index}
              component="span"
              fontSize={20}
              sx={{
                padding: "10px",
                border: 2,
                borderColor: "primary.main",
                borderRadius: "15px",
                backgroundColor: "#FF961A52",
              }}
            >
              {tag}
            </Typography>
          ))}
          <Typography
            component="span"
            fontSize={20}
            sx={{
              padding: "10px",
              border: 2,
              borderColor: "primary.main",
              borderRadius: "15px",
              backgroundColor: "#FF961A52",
            }}
          >
            More +
          </Typography>
        </Box>
      </Grid>
      <Grid
        size={12}
        sx={{
          display: { xs: "flex", md: "none", lg: "flex" },
          justifyContent: "center",
          marginY: 2,
        }}
      >
        <img src={Data.i_off50} alt="off50%" />
      </Grid>
    </Grid>
  );
};

export default StoreCategory;