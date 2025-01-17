import { createContext } from "react";
import { Products } from "../assets/DataAssets";
import { Categories } from "../assets/DataAssets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  const value = {
    Products,
    currency,
    delivery_fee,
    Categories
  };
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
