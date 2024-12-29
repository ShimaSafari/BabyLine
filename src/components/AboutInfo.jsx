import React from "react";
import { Data } from "../assets/DataAssets";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
const AboutInfo = () => {
  return (
    <Grid container justifyContent="center" gap={5} marginBottom={7}>
      {/* Grid for box1 */}
      <Grid
        container
        size={10}
        sx={{
          backgroundColor: "#F6F7FF",
          borderRadius: "50px",
          paddingX: "40px",
          paddingY: "50px",
          justifyContent: { md: "space-between" },
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: { xs: 4, md: 0 },
        }}
      >
        {/* Grid text */}
        <Grid
          container
          size={{ md: 6.5, xs: 12 }}
          sx={{ flexDirection: "column", justifyContent: "space-evenly" }}
        >
          <Typography fontSize={{ xs: 30, sm: 40, md: 50 }}>
            New Born Babies Care
          </Typography>
          <Typography color="#09168A">
            If you're a first-time parent, put your fears aside and get the
            basics in this guide about burping, bathing, bonding, and other
            baby-care concerns.
          </Typography>
        </Grid>
        {/* Grid img */}
        <Grid size={{ md: 5, xs: 12 }}>
          <img src={Data.About_info1} alt="" width="100%" />
        </Grid>
      </Grid>
      {/* Grid for box2 */}
      <Grid
        container
        size={10}
        sx={{
          backgroundColor: "#F6F7FF",
          borderRadius: "50px",
          paddingX: "40px",
          paddingY: "50px",
          justifyContent: { md: "space-between" },
          gap: { xs: 4, md: 0 },
        }}
      >
        {/* Grid img */}
        <Grid size={{ md: 5, xs: 12 }}>
          <img src={Data.About_info2} alt="" width="100%" />
        </Grid>
        {/* Grid text */}
        <Grid
          container
          size={{ md: 6.5, xs: 12 }}
          sx={{ flexDirection: "column", justifyContent: "space-evenly" }}
        >
          <Typography fontSize={{ xs: 30, sm: 40, md: 50 }}>
            Happy Moments
          </Typography>
          <Typography color="#09168A">
            Birthdays are for loved ones, friends, and family members who are
            still living. A celebration of life, on the other hand.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutInfo;
