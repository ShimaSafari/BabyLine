import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Grid from "@mui/material/Grid2";
import {
  Box,
  Typography,
  Rating,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Snackbar,
  Alert,
} from "@mui/material";
import AddToCartIcon from "../assets/icons/AddToCartIcon";

// -- import css in slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductInfo = () => {
  const { productId } = useParams();
  const { Products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  // const context = useContext(ShopContext); // Get the context
  // if (!context) {
  //   // Handle the case where the context is not available
  //   return <div>Shop context is not available!</div>; // Or return null, or a loading indicator
  // }

  const { addToCart, snackbar, setSnackbar, handleCloseSnackbar } =
    useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(productData.id, selectedSize); // No need to check return value here
  };

  const fetchProductData = async () => {
    Products.map((item) => {
      if (item.id == productId) {
        setProductData(item);
        setImage(item.image[1]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, Products]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return productData ? (
    <Grid
      container
      size={12}
      sx={{
        backgroundColor: "#FFFCF9",
        borderRadius: { md: "25px", sm: "20px" },
      }}
    >
      {/* Grid container for 1.Galley & 2.info */}
      <Grid
        container
        size={12}
        sx={{
          paddingX: { xs: "20px", md: "50px" },
          paddingY: "40px",
          flexDirection: { md: "row", xs: "column" },
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        {/* 1- grid for Galley of products */}
        <Grid container size={{ lg: 5.5, xs: 12 }} gap={3}>
          <Grid
            size={12}
            sx={{
              height: "400px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src={image} style={{ borderRadius: "35px" }} />
          </Grid>
          <Grid
            size={11.8}
            className="slider-container"
            sx={{
              height: "140px",
            }}
          >
            <Slider {...settings}>
              {productData.image.map((item, index) => (
                <Grid container key={index}>
                  <img
                    onClick={() => setImage(item)}
                    src={item}
                    alt={index}
                    style={{
                      borderRadius: "20px",
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      display: "flex",
                      justifySelf: "center",
                      cursor: "pointer",
                    }}
                  />
                </Grid>
              ))}
            </Slider>
          </Grid>
        </Grid>

        {/* 2- grid for info */}
        <Grid container size={{ lg: 6, xs: 12 }}>
          <Grid
            size={12}
            sx={{
              backgroundColor: "secondary.main",
              borderRadius: "35px",
              paddingY: "70px",
              paddingX: "50px",
            }}
          >
            <Typography variant="h1" fontSize={{ xs: 35, sm: 50 }}>
              {productData.name}
            </Typography>
            <Box sx={{ display: "flex", gap: "20px", marginY: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "#00000080",
                  textDecorationLine: "line-through",
                }}
              >
                {currency}
                {productData.price}
              </Typography>
              <Typography variant="body1" color="primary.main">
                {currency}
                {productData.discountPrice}
              </Typography>
            </Box>
            <Box>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                size="small"
                readOnly
                sx={{
                  "& > span .MuiRating-icon": {
                    color: "common.main",
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                marginY: 3,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 5, sm: 2 },
              }}
            >
              <Button
                variant="contained"
                color="warning"
                disableElevation
                endIcon={<AddToCartIcon />}
                // onClick={() => addToCart(productData.id, selectedSize)}
                onClick={handleAddToCart}
                sx={{
                  borderRadius: "30px",
                  paddingY: "10px",
                  fontSize: 22,
                  fontStyle: "normal",
                  fontWeight: 800,
                  lineHeight: "normal",
                  textTransform: "none",
                  "&:hover": {
                    color: "#FFF",
                    backgroundColor: "warning.main",
                  },
                }}
              >
                Add To Cart
              </Button>
              <FormControl sx={{ width: "190px" }} size="small">
                <InputLabel
                  id="demo-select-small-label"
                  sx={{ color: "text.secondary", fontSize: 22 }}
                >
                  Choose Size
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  label="Choose Size"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: 0,
                    },
                    "& .MuiSvgIcon-root": {
                      color: "primary.main",
                    },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        backgroundColor: "#FFFCF9",
                      },
                    },
                  }}
                >
                  {productData.sizes.map((item, index) => (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Typography fontSize={22} sx={{ marginY: 5 }}>
              Category: {productData.category}
            </Typography>
            <Typography>{productData.description}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        key={snackbar.message}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ fontWeight: 800, borderRadius: "15px" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Grid>
  ) : (
    <div></div>
  );
};

export default ProductInfo;
