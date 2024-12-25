import React from "react";
import { Box, Typography } from "@mui/material";
import { Data } from "../assets/DataAssets";
const Title = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "22px",
        justifyContent: "center",
        marginTop: "85px",
        marginBottom: "55px",
      }}
    >
      <Box>
        <img src={Data.Left} alt="left-icon" />
      </Box>
      <Box sx={{ alignContent: "center" }}>
        <Typography
          sx={{
            fontSize: { sm: "36px", xs: "22px" },
            fontStyle: "normal",
            fontWeight: 800,
            lineHeight: "normal",
            display: "flex",
          }}
        >
          {text}
        </Typography>
      </Box>
      <Box>
        <img src={Data.Right} alt="left-icon" />
      </Box>
    </Box>
  );
};

export default Title;
