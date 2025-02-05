import React, { createContext, useState, useEffect } from "react";
import { Products } from "../assets/DataAssets";
import { Categories } from "../assets/DataAssets";
import { TAGS } from "../assets/DataAssets";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [cartItems, setCartItems] = useState({});
  const [discount, setDiscount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info",
  });
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      setSnackbar({
        open: true,
        message: "Please Select Size!",
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
      message: "Added To Cart!",
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

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.error();
        }
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = Products.find((product) => product.id == items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.discountPrice * cartItems[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalAmount;
  };

  const handleApplyCoupon = (discount) => {
    setDiscount(discount);
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const applyDiscount = (discountCode) => {
    const discountValue = discountCode === "DISCOUNT10" ? 0.1 : 0;
    setDiscount(discountValue);
  };

  const getDiscountedAmount = () => {
    return getCartAmount() * (1 - discount);
  };

  const getTotalAmount = () => {
    return getDiscountedAmount() + delivery_fee;
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
    getCartCount,
    updateQuantity,
    getCartAmount,
    discount,
    setDiscount,
    handleApplyCoupon,
    navigate,
    applyDiscount,
    getDiscountedAmount,
    getTotalAmount,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopProvider;
