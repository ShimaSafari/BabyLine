import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

const CartTotal = () => {
  const { currency, delivery_fee, getDiscountedAmount, getTotalAmount } =
    useContext(ShopContext);

  const discountedAmount = getDiscountedAmount();
  const totalAmount = getTotalAmount();

  return (
    <Grid
      sx={{
        paddingY: 2,
        textAlign: "right",
        borderBottom: 3,
        borderColor: "background.paper",
      }}
    >
      <Typography fontSize={30}>
        Sub Total: {currency} {discountedAmount.toFixed(2)}
      </Typography>
      <Typography fontSize={30}>
        Delivery Fee: {currency} {delivery_fee}
      </Typography>
      <Typography fontSize={30}>
        Total: {currency} {totalAmount.toFixed(2)}
      </Typography>
    </Grid>
  );
};

export default CartTotal;
