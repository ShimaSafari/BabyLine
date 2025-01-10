// img Home Page
// img in Hero Component
import Bgline from "./images/Bg-lineHero.png";
import Herobg from "./images/Bg-main.svg";
// img in HeroGroup Component
import ToddlerShop from "./images/GroupToddlerShop.svg";
import BabyShop from "./images/GroupBabyShop.svg";
// img in Title Component
import Left from "./images/i_left.png";
import Right from "./images/i_right.png";
// img in PopularProducts Component
import Bgline_popular from "./images/Bg-popularproduct.png";
// img in Offers Component
import Bg_Offers from "./images/Bg_Offers.png";
import Group_offer1 from "./images/Group_offer1.svg";
import Group_offer2 from "./images/Group_offer2.svg";
import Group_offer3 from "./images/Group_offer3.svg";
import mouse from "./images/i_mouse.png";
// img in Footer Component
import Bg_Footer from "./images/Bg_Footerdash.png";
import Footer_brand1 from "./images/Footer_brand1.svg";
import Footer_brand2 from "./images/Footer_brand2.svg";
import Footer_brand3 from "./images/Footer_brand3.svg";
import Footer_brand4 from "./images/Footer_brand4.svg";
import Footer_pay1 from "./images/Footer_pay1.svg";
import Footer_pay2 from "./images/Footer_pay2.svg";
import Footer_pay3 from "./images/Footer_pay3.svg";
import Footer_pay4 from "./images/Footer_pay4.svg";
import i_Dot from "./images/i_DotMenu.png";
// img in About Page
// img in AboutHero components
import Bg_ContactUs from "./images/Bg_ContactUs.png";
import Bg_About_Hero from "./images/Bg_About_Hero.png";
import About_Hero from "./images/About_Hero.png";
import i_Line_Black from "./images/i_Line_Black.svg";
// img in AboutCategory components
import Bg_About_category from "./images/Bg_About_category.png";
import About_category1 from "./images/About_category1.svg";
import About_category2 from "./images/About_category2.svg";
import About_category3 from "./images/About_category3.svg";
import About_category4 from "./images/About_category4.svg";
import About_category5 from "./images/About_category5.svg";
// img in AboutInfo components
import About_info1 from "./images/About_info1.png";
import About_info2 from "./images/About_info2.png";
// img in Conatct Page
import i_Line_Orange from "./images/i_Line_orange.svg";
// img products
import p_BunnySuit from "./images/p_BunnySuit.png";
import p_PlushToy from "./images/p_PlushToy.png";
import p_SleevyShirt from "./images/p_SleevyShirt.png";
import p_PlushTeddy from "./images/p_PlushTeddy.png";
import p_CareCarry from "./images/p_CareCarry.png";
import p_FullSleevTshirt from "./images/p_FullSleevTshirt.png";
import p_DisneyBag from "./images/p_DisneyBag.png";
import p_SleevyTshtx from "./images/p_SleevyTshtx.png";
import p_BabySeatCar from "./images/p_BabySeatCar.png";
import p_SetyJacks from "./images/p_SetyJacks.png";
import p_BabyS1Pro from "./images/p_BabyS1Pro.png";
import p_BuildingBlocks from "./images/p_BuildingBlocks.png";
import p_EasterBunny from "./images/p_EasterBunny.png";
import p_BabySeatS2 from "./images/p_BabySeatS2.png";
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
  Left,
  Right,
  Bgline_popular,
  Bg_Offers,
  Group_offer1,
  Group_offer2,
  Group_offer3,
  mouse,
  Bg_Footer,
  Footer_brand1,
  Footer_brand2,
  Footer_brand3,
  Footer_brand4,
  Footer_pay1,
  Footer_pay2,
  Footer_pay3,
  Footer_pay4,
  i_Dot,
  Bg_About_Hero,
  About_Hero,
  i_Line_Black,
  Bg_About_category,
  About_category1,
  About_category2,
  About_category3,
  About_category4,
  About_category5,
  About_info1,
  About_info2,
  Bg_ContactUs,
  i_Line_Orange,
  p_DisneyBag,
  p_SleevyTshtx,
  p_BabySeatCar,
  p_SetyJacks,
  p_BabyS1Pro,
  p_BuildingBlocks,
  p_FullSleevTshirt,
  p_EasterBunny,
  p_BabySeatS2,
};

export const Products = [
  {
    id: 1,
    name: "Sleevy Shirt",
    description:
      "Here we will display the descp of the Sleevy Shirt in short, this is a test para for ui works only. Lorem ipsum test of Sleevy Shirt here. ",
    price: 1499,
    discountPrice: 1199,
    discountPercent: 0,
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
    price: 1800,
    discountPrice: 1499,
    discountPercent: 0,
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
    price: 1949,
    discountPrice: 1300,
    discountPercent: 0,
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
    price: 2200,
    discountPrice: 1699,
    discountPercent: 0,
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
    price: 4899,
    discountPrice: 3699,
    discountPercent: 0,
    image: [p_CareCarry],
    category: "Strollers Car Seats & Ride-Ons",
    sizes: ["S", "M", "L"],
    bestseller: true,
  },
  {
    id: 6,
    name: "Full Sleev Tshirt",
    description:
      "Here we will display the descp of the Full Sleev Tshirt in short, this is a test para for ui works only. Lorem ipsum test of Full Sleev Tshirt here. ",
    price: 1999,
    discountPrice: 1899,
    discountPercent: 0,
    image: [p_FullSleevTshirt],
    category: "Toddlers Clothing & Accessories",
    sizes: ["S", "M", "L"],
    bestseller: false,
  },
  {
    id: 7,
    name: "Disney Bag",
    description:
      "Here we will display the descp of the Disney Bag in short, this is a test para for ui works only. Lorem ipsum test of Disney Bag here. ",
    price: 2999,
    discountPrice: 1999,
    discountPercent: 0,
    image: [p_DisneyBag],
    category: "Party Shop & Gift Sets",
    sizes: ["S"],
    bestseller: false,
  },
  {
    id: 8,
    name: "Sleevy Tshtx",
    description:
      "Here we will display the descp of the Sleevy Tshtx in short, this is a test para for ui works only. Lorem ipsum test of Sleevy Tshtx here. ",
    price: 2300,
    discountPrice: 1500,
    discountPercent: 0,
    image: [p_SleevyTshtx],
    category: "Toddlers Clothing & Accessories",
    sizes: ["S", "M", "L"],
    bestseller: false,
  },
  {
    id: 9,
    name: "Baby Seat | Car",
    description:
      "Here we will display the descp of the Baby Seat | Car in short, this is a test para for ui works only. Lorem ipsum test of Baby Seat | Car here. ",
    price: 4600,
    discountPrice: 3500,
    discountPercent: 0,
    image: [p_BabySeatCar],
    category: "Strollers Car Seats & Ride-Ons",
    sizes: ["M", "L"],
    bestseller: false,
  },
  {
    id: 10,
    name: "Sety Jacks",
    description:
      "Here we will display the descp of the Sety Jacks in short, this is a test para for ui works only. Lorem ipsum test of Sety Jacks here. ",
    price: 2599,
    discountPrice: 1899,
    discountPercent: 0,
    image: [p_SetyJacks],
    category: "Newborn & Baby Care Shop",
    sizes: ["S", "M", "L"],
    bestseller: false,
  },
  {
    id: 11,
    name: "Baby S1 Pro",
    description:
      "Here we will display the descp of the Baby S1 Pro in short, this is a test para for ui works only. Lorem ipsum test of Baby S1 Pro here. ",
    price: 5699,
    discountPrice: 4899,
    discountPercent: 0,
    image: [p_BabyS1Pro],
    category: "Strollers Car Seats & Ride-Ons",
    sizes: ["S", "M", "L"],
    bestseller: false,
  },
  {
    id: 12,
    name: "Building Blocks",
    description:
      "Here we will display the descp of the Building Blocks in short, this is a test para for ui works only. Lorem ipsum test of Building Blocks here. ",
    price: 1399,
    discountPrice: 799,
    discountPercent: 0,
    image: [p_BuildingBlocks],
    category: "Toys Books & Games",
    sizes: ["S", "M", "L"],
    bestseller: false,
  },
  {
    id: 13,
    name: "Easter Bunny",
    description:
      "Here we will display the descp of the Easter Bunny in short, this is a test para for ui works only. Lorem ipsum test of Easter Bunny here. ",
    price: 2300,
    discountPrice: 1500,
    discountPercent: 0,
    image: [p_EasterBunny],
    category: "Toys Books & Games",
    sizes: ["S", "M"],
    bestseller: false,
  },
  {
    id: 14,
    name: "Baby Seat S2",
    description:
      "Here we will display the descp of the Baby Seat S2 in short, this is a test para for ui works only. Lorem ipsum test of Baby Seat S2 here. ",
    price: 8999,
    discountPrice: 6799,
    discountPercent: 0,
    image: [p_BabySeatS2],
    category: "Toys Books & Games",
    sizes: ["S", "M"],
    bestseller: false,
  },
];

export const Categories = [
  "Party Shop & Gift Sets",
  "Newborn & Baby Care Shop",
  "Toddlers Clothing & Accessories",
  "Toys Books & Games",
  "Strollers Car Seats & Ride-Ons",
];
// function to  discountPercent
Products.forEach((product) => {
  if (product.discountPrice < product.price) {
    product.discountPercent = Math.round(
      ((product.price - product.discountPrice) / product.price) * 100
    );
  } else {
    product.discountPercent = "";
  }
});
