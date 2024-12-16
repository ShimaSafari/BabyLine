import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Data } from "../assets/DataAssets";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Grid container size={2}>
      <Card
      
        sx={{
          width: "210px",
          height: "666px",
          backgroundColor: "transparent",
          boxShadow: 0,
        //   margin: 10,
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
          }}
        >
          <Link to={`/product/${id}`}>
            <CardMedia
              sx={{ height: "100%", width: "100%" , backgroundPosition:"center"}}
              image={image[0]}
            />
          </Link>
        </Box>
        <CardContent>
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
            {currency}{price}
          </Typography>
          <Typography variant="body1">{currency}{price}</Typography>
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
            }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
