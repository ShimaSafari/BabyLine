import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Data } from "../assets/DataAssets";
import Grid from "@mui/material/Grid2";
import { Box, Typography, IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CartTotal from "../components/CartTotal";
const Cart = () => {
  const { Products, currency, cartItems, updateQuantity } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  return (
    <Grid
      container
      size={12}
      sx={{
        backgroundImage: `url(${Data.Bg_Offers})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        paddingX: { xs: "20px", md: "70px" },
        justifyContent: "center",
        rowGap: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 3,
          paddingX: 3,
          paddingY: 2,
          borderBottom: 2,
          borderColor: "background.paper",
          borderRadius: "30px",
        }}
      >
        <Typography variant="h1" fontSize={{ xs: 35, sm: 50 }}>
          Cart Items
        </Typography>
        <img src={Data.i_CartItems} width={50} height={50} />
      </Box>
      <Grid
        container
        size={{ xs: 12, md: 9, lg: 7 }}
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cartData.map((item, index) => {
          const productData = Products.find((product) => product.id == item.id);
          return (
            <Grid
              container
              key={index}
              size={11}
              sx={{
                backgroundColor: "background.paper",
                borderRadius: "24px",
                justifyContent: { xs: "center", sm: "space-between" },
                paddingX: { xs: 2, md: 6 },
                paddingY: 2,
                marginY: 2,
                rowGap: 2,
              }}
            >
              {/* 1- grid for img */}
              <Grid
                container
                size={{ xs: 12, sm: "auto" }}
                sx={{ borderRadius: "15px", justifyContent: "center" }}
              >
                <img
                  src={productData.image[0]}
                  alt={productData.name}
                  style={{
                    width: "150px",
                    height: "140px",
                    objectFit: "contain",
                  }}
                />
              </Grid>
              {/* 2- grid for product info */}
              <Grid
                container
                size={{ xs: 11, sm: 6, md: "auto" }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: { xs: "center", sm: "start" },
                  rowGap: { xs: 2, sm: 0 },
                }}
              >
                <Typography fontSize={{ xs: 30, sm: 32, md: 36 }}>
                  {productData.name}
                </Typography>
                <Box
                  sx={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>
                    {currency}
                    {productData.discountPrice}
                  </Typography>
                  <Typography fontSize={20} color="#685555">
                    Size: {item.size}
                  </Typography>
                </Box>
                <Button
                  onClick={() => updateQuantity(item.id, item.size, 0)}
                  variant="contained"
                  sx={{
                    width: "80px",
                    height: "30px",
                    borderRadius: "17px",
                    fontSize: 14,
                    textTransform: "none",
                    alignSelf: { xs: "center", sm: "start" },
                    "&:hover": {
                      color: "#FFF",
                      backgroundColor: "common.main",
                    },
                  }}
                  disableRipple
                >
                  Remove
                </Button>
              </Grid>
              {/* 3- grid for quantity */}
              <Grid
                container
                size={{ xs: 12, sm: "auto" }}
                sx={{
                  flexDirection: { xs: "row-reverse", sm: "column" },
                  justifyContent: { xs: "space-evenly", md: "space-between" },
                  alignItems: "center",
                }}
              >
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity + 1)
                  }
                >
                  <AddIcon />
                </IconButton>
                <Typography
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item.id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  component="span"
                  sx={{
                    backgroundColor: "#F8EFEF",
                    textAlign: "center",
                    borderRadius: "7px",
                    minWidth: "70px",
                    minHeight: "31px",
                    fontSize: 20,
                  }}
                >
                  {item.quantity}
                </Typography>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() =>
                    updateQuantity(item.id, item.size, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                >
                  <RemoveIcon />
                </IconButton>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      {/* Component for Total Amount */}
      {cartData.length > 0 && <CartTotal />}
    </Grid>
  );
};

export default Cart;
