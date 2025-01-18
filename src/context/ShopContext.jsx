import { createContext, useState } from "react";
import { Products } from "../assets/DataAssets";
import { Categories } from "../assets/DataAssets";
import { TAGS } from "../assets/DataAssets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [inputValue, setInputValue] = useState("");
  const value = {
    Products,
    currency,
    delivery_fee,
    Categories,
    TAGS,
    inputValue,
    setInputValue,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
