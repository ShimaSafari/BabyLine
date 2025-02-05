import React, { useContext } from "react";
import Grid from "@mui/material/Grid2";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Typography } from "@mui/material";
import { ShopContext } from "../context/ShopContext";
const Payment = () => {
  const { getDiscountedAmount, currency } = useContext(ShopContext);
  return (
    <Grid container size={12} sx={{ justifyContent: "center" }}>
      <Grid
        container
        size={{ xs: 11, sm: 10, md: 9 }}
        sx={{
          backgroundColor: "secondary.main",
          border: "2px dashed",
          borderRadius: "25px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginY: "40px",
          }}
        >
          <CheckCircleIcon
            color="primary"
            sx={{
              fontSize: 108,
            }}
          />
        </Box>

        <Typography variant="h1" fontSize={{ xs: 20, sm: 26, md: 50 }}>
          Payment Successful..!
        </Typography>
        <Grid
          container
          size={11}
          sx={{
            backgroundColor: "#E2066645",
            paddingY: "50px",
            paddingX: { xs: "10px", sm: "30px", md: "40px" },
            marginY: "60px",
            borderRadius: "20px",
            rowGap: "15px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography fontSize={{ xs: 20, sm: 24, md: 30 }} fontWeight={600}>
              Amount Paid:
            </Typography>
            <Typography fontSize={{ xs: 20, sm: 24, md: 30 }} fontWeight={600}>
              {currency}
              {getDiscountedAmount()}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography fontSize={{ xs: 20, sm: 24, md: 30 }} fontWeight={600}>
              Payment Method:
            </Typography>
            <Typography fontSize={{ xs: 20, sm: 24, md: 30 }} fontWeight={600}>
              Cash On Delivery
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Payment;
