// img Home Page
import Bgline from "./images/hero-bgline.png";
import Herobg from "./images/Bg-main.svg";
import ToddlerShop from "./images/GroupToddlerShop.svg";
import BabyShop from "./images/GroupBabyShop.svg";

// img products
import p_BunnySuit from "./images/p_BunnySuit.png";
import p_PlushToy from "./images/p_PlushToy.png";
import p_SleevyShirt from "./images/p_SleevyShirt.png";
import p_PlushTeddy from "./images/p_PlushTeddy.png";
import p_CareCarry from "./images/p_CareCarry.png";

export const Data = {
  Bgline,
  Herobg,
  ToddlerShop,
  BabyShop,
  p_BunnySuit,
  p_PlushToy,
  p_SleevyShirt,
  p_PlushTeddy,
  p_CareCarry,
};

export const Products = [
  {
    id: 1,
    name: "Sleevy Shirt",
    description:
      "Here we will display the descp of the Sleevy Shirt in short, this is a test para for ui works only. Lorem ipsum test of Sleevy Shirt here. ",
    price: 1199,
    image: [p_SleevyShirt],
    category: "Toddlers Clothing & Accessories",
    sizes: ["S", "M", "L"],
    bestseller: true,
  },
  {
    id: 2,
    name: "Bunny Suit",
    description:
      "Here we will display the descp of the Bunny Suit in short, this is a test para for ui works only. Lorem ipsum test of Bunny Suit here",
    price: 1499,
    image: [p_BunnySuit],
    category: "Newborn & Baby Care Shop",
    sizes: ["S", "M", "L"],
    bestseller: true,
  },
  {
    id: 3,
    name: "Plush Toy",
    description:
      "Here we will display the descp of the Plush Toy in short, this is a test para for ui works only. Lorem ipsum test of Plush Toy here. ",
    price: 1300,
    image: [p_PlushToy],
    category: "Party Shop & Gift Sets",
    sizes: ["S"],
    bestseller: true,
  },
  {
    id: 4,
    name: "Plush Teddy",
    description:
      "Here we will display the descp of the Plush Teddy in short, this is a test para for ui works only. Lorem ipsum test of Plush Teddy here. ",
    price: 1699,
    image: [p_PlushTeddy],
    category: "Party Shop & Gift Sets",
    sizes: ["L"],
    bestseller: true,
  },
  {
    id: 5,
    name: "Care Carry",
    description:
      "Here we will display the descp of the Care Carry in short, this is a test para for ui works only. Lorem ipsum test of Care Carry here. ",
    price: 3699,
    image: [p_CareCarry],
    category: "Strollers Car Seats & Ride-Ons",
    sizes: ["S", "M", "L"],
    bestseller: true,
  },
];
export const Categories = [
  "Party Shop & Gift Sets",
  "Newborn & Baby Care Shop",
  "Toddlers Clothing & Accessories",
  "Toys Books & Games",
  "Strollers Car Seats & Ride-Ons",
];
