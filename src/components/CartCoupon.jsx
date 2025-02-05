import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, styled, Typography, TextField } from "@mui/material";
import { ShopContext } from "../context/ShopContext";

const CartCoupon = () => {
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const { applyDiscount } = useContext(ShopContext);

  const handleApplyCoupon = () => {
    applyDiscount(coupon);
    setCouponApplied(true);
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
    <Grid container columnSpacing={4} rowSpacing={1} sx={{ marginY: 4 }}>
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
        <Box>
          <Typography color="#0000008C" fontSize={{ xs: 18, sm: 20 }}>
            Coupon Applied Successfully!
          </Typography>
        </Box>
      )}
    </Grid>
  );
};

export default CartCoupon;
