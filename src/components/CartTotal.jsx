import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Grid from "@mui/material/Grid2";
import { Box, styled, Typography, TextField, Button } from "@mui/material";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

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
      size={12}
      sx={{
        justifyContent: "center",
      }}
    >
      {/* Grid dashed for Total checkout */}
      <Grid
        container
        size={{ xs: 10, md: 6 }}
        sx={{
          backgroundColor: "secondary.main",
          border: "5px dashed",
          borderRadius: "25px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
        }}
      >
        <Typography fontSize={35}>Check Out</Typography>
        {/* --------------- 1- Grid for coupon ------------ */}
        <Grid container columnSpacing={4} rowSpacing={1} sx={{ marginY: 4 }}>
          <Box>
            <TextFieldCoupon
              id="outlined-basic"
              label="Have Coupons"
              variant="outlined"
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              disableRipple
              disableElevation
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
          <Box>
            <Typography color="#0000008C" fontSize={{ xs: 18, sm: 20 }}>
              Coupon Applied Successfully!
            </Typography>
          </Box>
        </Grid>
        {/* --------------- 2- Grid for Total ------------ */}
        <Grid size={12} sx={{ textAlign: "right" }}>
          <Typography fontSize={{ xs: 22, sm: 30 }}>
            Sub Total: {currency} {getCartAmount()}
          </Typography>
          <Typography fontSize={{ xs: 22, sm: 30 }}>
            Delivery Fee: {currency} {delivery_fee}
          </Typography>
          <Typography fontSize={{ xs: 22, sm: 30 }}>
            Total: {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </Typography>
        </Grid>
        <Button
          variant="contained"
          disableRipple
          disableElevation
          sx={{
            backgroundColor: "primary.main",
            textTransform: "none",
            borderRadius: "25px",
            padding: "10px 40px",
            marginTop: 3,
            alignSelf: "start",
            "&:hover": {
              backgroundColor: "warning.main",
            },
          }}
        >
          Pay Now
        </Button>
      </Grid>
    </Grid>
  );
};

export default CartTotal;
