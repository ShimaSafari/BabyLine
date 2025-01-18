import React, { useContext, useEffect, useState } from "react";
import { Data } from "../assets/DataAssets";
import Grid from "@mui/material/Grid2";
import { Box, Typography, Checkbox } from "@mui/material";
import { ShopContext } from "../context/ShopContext";
const StoreCategory = () => {
  const { Products } = useContext(ShopContext);
  const { Categories } = useContext(ShopContext);
  const { TAGS } = useContext(ShopContext);

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
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    setFilterProducts(productsCopy);
  };
  useEffect(() => {
    setFilterProducts(Products)
  }, []);
  useEffect(() => {
    applyFilter();
  }, [category]);

  return (
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
              fontSize: { md: 40, sm: 30 },
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
          // alignContent: "center",
          gap: 1,
        }}
      >
        {Categories.map((item, index) => (
          // <Checkbox onChange={toggleCategory} value={item.name} key={index}>
          // <Box
          //   // component="checkbox"
          //   key={index}
          //   sx={{
          //     display: "flex",
          //     flexDirection: "column",
          //     alignItems: "center",
          //     gap: 2,
          //     width: "180px",
          //     cursor: "pointer",
          //   }}
          //   onClick={() => toggleCategory(item.name)}
          //   onChange={toggleCategory}
          //   value={item.name}
          // >
          //   <img src={item.image[0]} alt="" width="180px" />
          //   <Typography
          //     variant="body2"
          //     fontWeight={700}
          //     sx={{
          //       width: "70%",
          //       textAlign: "center",
          //     }}
          //   >
          //     {item.name}
          //   </Typography>
          // </Box>
          //  </Checkbox>

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
  );
};

export default StoreCategory;
