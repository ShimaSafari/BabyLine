import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
const ProductItem = ({
  id,
  image,
  name,
  price,
  discountPrice,
  discountPercent,
}) => {
  const { currency } = useContext(ShopContext);
  return (
    <Grid container sx={{ justifyContent: "center" }}>
      <Card
        sx={{
          width: "210px",
          backgroundColor: "transparent",
          boxShadow: 0,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: "200px",
            height: "266px",
            backgroundColor: "#fff",
            border: "4px solid",
            borderColor: "primary.main",
            borderRadius: "34px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Typography
              component="span"
              sx={{
                backgroundColor: "#DBBCBA",
                color: "#fff",
                fontSize: "13px",
                display: "flex-inline",
                borderRadius: "30px",
                paddingX: "10px",
                paddingY: "4px",
                marginLeft: "15px",
                marginTop: "12px",
                zIndex: 10,
              }}
            >
              Sale {discountPercent}%
            </Typography>
          </Box>
          <Link to={`/product/${id}`} sx={{}}>
            <CardMedia
              sx={{
                height: "90%",
                width: "100%",
                backgroundPosition: "center",
                backgroundSize: "contain",
                position: "absolute",
                bottom: 0,
                left: 0,
                "&:hover": {
                  transitionProperty: "all",
                  transitionDuration: "250ms",
                  transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
                  transform: "scale(1.05)",
                },
              }}
              image={image[0]}
            />
          </Link>
        </Box>
        <CardContent sx={{ paddingX: 0 }}>
          <Typography variant="body1">{name}</Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 0,
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#00000080", textDecorationLine: "line-through" }}
          >
            {currency}
            {price}
          </Typography>
          <Typography variant="body1">
            {currency}
            {discountPrice}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", paddingTop: 0 }}>
          <Button
            variant="contained"
            color="warning"
            disableElevation
            sx={{
              color: "#FFF",
              borderRadius: "30px",
              paddingX: "23px",
              paddingY: "10px",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 800,
              lineHeight: "normal",
              textTransform: "none",
              "&:hover": {
                color: "#000",
                backgroundColor: "warning.main",
              },
            }}
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
