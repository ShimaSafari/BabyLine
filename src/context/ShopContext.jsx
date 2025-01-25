import { createContext, useState } from "react";
import { Products } from "../assets/DataAssets";
import { Categories } from "../assets/DataAssets";
import { TAGS } from "../assets/DataAssets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [inputValue, setInputValue] = useState("");
  const [cartItems, setCartItems] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });

  const addToCart = async (itemId, size) => {
    if (!size) {
      setSnackbar({
        open: true,
        message: "Please Select a Product Size !",
        severity: "error",
      });
      return false;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    setSnackbar({
      open: true,
      message: "Product Added To Cart !",
      severity: "success",
    });
    return true;
  };

  const handleCloseSnackbar = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };
  const value = {
    Products,
    currency,
    delivery_fee,
    Categories,
    TAGS,
    inputValue,
    setInputValue,
    cartItems,
    addToCart,
    snackbar,
    setSnackbar,
    handleCloseSnackbar,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
