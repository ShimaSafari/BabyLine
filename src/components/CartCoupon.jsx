import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, styled, Typography, TextField } from "@mui/material";

const CartCoupon = ({ onApplyCoupon }) => {
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const handleApplyCoupon = () => {
    const discount = coupon === "DISCOUNT20" ? 0.2 : 0;
    if (discount > 0) {
      setCouponApplied(true);
      onApplyCoupon(discount);
    } else {
      setCouponApplied(false);
      onApplyCoupon(0);
    }
  };

  const TextFieldCoupon = styled(TextField)(({ theme }) => ({
    backgroundColor: "#FFF",
    borderRadius: "15px",
    "& .MuiInputBase-input": {
      color: theme.palette.primary.main,
      fontSize: "20px",
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.text.primary,
      fontSize: "20px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px dashed #00000080",
    },
  }));

  return (
    <Grid
      container
      columnSpacing={3}
      rowSpacing={1}
      sx={{ marginY: 4, alignItems: "center" }}
    >
      <Box>
        <TextFieldCoupon
          id="outlined-basic"
          label="Have Coupons"
          variant="outlined"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
      </Box>
      <Box>
        <Button
          variant="contained"
          disableRipple
          disableElevation
          onClick={handleApplyCoupon}
          disabled={couponApplied}
          sx={{
            backgroundColor: "#E2666694",
            textTransform: "none",
            height: "100%",
            borderRadius: "13px",
            "&:hover": {
              backgroundColor: "primary.main",
            },
          }}
        >
          Apply Coupon
        </Button>
      </Box>
      {couponApplied && (
        <Typography color="#0000008C" fontSize={14}>
          Coupon Applied Successfully!
        </Typography>
      )}
    </Grid>
  );
};

export default CartCoupon;
