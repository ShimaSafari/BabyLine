import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography, Checkbox } from "@mui/material";
import { ShopContext } from "../context/ShopContext";
import { Data } from "../assets/DataAssets";
import ProductItem from "../components/ProductItem";
import SearchProducts from "../components/SearchProducts";
const Store = () => {
  const { Products, Categories, TAGS, inputValue } = useContext(ShopContext);

  const [category, setCategory] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = Products.slice();

    if (inputValue) {
      // console.log(inputValue);
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, inputValue]);

  return (
    <Grid
      container
      sx={{
        paddingX: { md: "70px", xs: "10px" },
        justifyContent: "space-between",
      }}
    >
      <Grid size={{ xs: 12, md: 7.5 }}>
        {/* 1- <StoreAllProducts /> */}
        <Grid
          container
          sx={{
            backgroundColor: "#FFFCF9",
            borderRadius: "50px",
            maxHeight: "2000px",
          }}
        >
          {/*  Grid Products text All Products */}
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              paddingY: "40px",
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                gap: 2,
                paddingX: 7,
                marginBottom: -1,
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: 40, sm: 30 },
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                All Products
              </Typography>
            </Grid>
            <Grid
              container
              size={{ xs: 8, sm: 7, md: 6 }}
              sx={{ justifyContent: "center" }}
            >
              <img src={Data.i_Line_Orange} alt="line_orange" width="90%" />
            </Grid>
          </Grid>
          <Grid
            className="grid-scroll"
            container
            size={11.8}
            rowSpacing={5}
            sx={{
              maxHeight: "1200px",
              overflow: "auto",
              marginBottom: "40px",
            }}
          >
            {filterProducts.map((item, index) => (
              <Grid
                container
                key={index}
                size={{ lg: 4, md: 6, sm: 6, xs: 12 }}
                sx={{
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <ProductItem
                  key={index}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  discountPrice={item.discountPrice}
                  discountPercent={item.discountPercent}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        size={{ sm: 12, md: 4.2 }}
        sx={{ flexDirection: "column" }}
      >
        {/* 2- Search bar Products */}
        <SearchProducts />

        {/* 3- <StoreCategory /> */}
        <Grid
          container
          size={12}
          sx={{
            backgroundColor: "#FFFCF9",
            borderRadius: "50px",
            marginTop: 2,
          }}
        >
          {/* 1-  Grid Products text Categories */}
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              marginY: 2,
            }}
          >
            <Grid
              container
              sx={{
                display: "flex",
                gap: 2,
                paddingX: 7,
                marginBottom: -1,
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: 35, sm: 30 },
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                Categories
              </Typography>
            </Grid>
            <Grid container size={7} sx={{ justifyContent: "center" }}>
              <img src={Data.i_Line_Orange} alt="line_orange" width="90%" />
            </Grid>
          </Grid>
          {/* 2- Grid Store products category */}
          <Grid
            container
            sx={{
              justifyContent: "space-evenly",
              gap: 1,
            }}
          >
            {Categories.map((item, index) => (
              <Checkbox
                onChange={toggleCategory}
                value={item.name}
                disableRipple
                key={index}
                icon={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      width: "180px",
                      height: "180px",
                      cursor: "pointer",
                    }}
                  >
                    <img src={item.image[0]} alt="" width="180px" />
                  </Box>
                }
                checkedIcon={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      width: "180px",
                      cursor: "pointer",
                      borderRadius: "45px",
                      border: 1,
                      borderColor:"warning.main",
                      filter:
                        "drop-shadow(0 10px 8px rgb(255 150 26 / 0.1)) drop-shadow(0 4px 3px rgb(255 150 26 / 0.3))",
                    }}
                  >
                    <img src={item.image[0]} alt="" width="180px" />
                  </Box>
                }
              />
            ))}
          </Grid>
          {/* 3- Grid Store TAGS */}
          <Grid
            sx={{
              marginY: 2,
            }}
          >
            <Box
              sx={{
                width: "85%",
                display: { xs: "flex", md: "none", lg: "flex" },
                justifySelf: "center",
                gap: 1.5,
                flexWrap: "wrap",
              }}
            >
              <Typography
                sx={{
                  width: "100%",
                  textDecoration: "underline",
                  textDecorationStyle: "dashed",
                  textDecorationColor: "#FF961A",
                  textUnderlinePosition: "under",
                }}
              >
                TAGS
              </Typography>
              {TAGS.map((tag, index) => (
                <Typography
                  key={index}
                  component="span"
                  fontSize={20}
                  sx={{
                    padding: "10px",
                    border: 2,
                    borderColor: "primary.main",
                    borderRadius: "15px",
                    backgroundColor: "#FF961A52",
                  }}
                >
                  {tag}
                </Typography>
              ))}
              <Typography
                component="span"
                fontSize={20}
                sx={{
                  padding: "10px",
                  border: 2,
                  borderColor: "primary.main",
                  borderRadius: "15px",
                  backgroundColor: "#FF961A52",
                }}
              >
                More +
              </Typography>
            </Box>
          </Grid>
          <Grid
            size={12}
            sx={{
              display: { xs: "flex", md: "none", lg: "flex" },
              justifyContent: "center",
              marginY: 6,
            }}
          >
            <img src={Data.i_off50} alt="off50%" />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 11 }}
        sx={{
          backgroundImage: `url(${Data.Store_Banner})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: { md: 500, sm: 300, xs: 200 },
          marginX: "auto",
          marginTop: { lg: -12, xs: 2 },
          zIndex: { lg: -10, xs: 0 },
        }}
      />
    </Grid>
  );
};

export default Store;
