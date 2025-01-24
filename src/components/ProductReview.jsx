import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Reviews from "./Reviews";

const StyledTabs = styled(Tabs)(() => ({
  minHeight: "40px",
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTabs-flexContainer": {
    marginLeft: "22px",
    gap: "13px",
  },
  "&.MuiTabs-root": {
    height: "40px",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: "#FFCF97",
    color: "#000",
  },
  "&.MuiTabs-indicator": {
    display: "none",
  },
  color: theme.palette.text.secondary,
  background: "#FDE7CE",
  fontSize: 20,
  fontWeight: 700,
  textTransform: "none",
  borderRadius: "13px 13px 0 0",
  [theme.breakpoints.up("xs")]: {
    padding: "0 30px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "0 51px",
  },
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid
          container
          size={12}
          sx={{
            minHeight: "200px",
            backgroundColor: "#FFD8D8",
            borderRadius: "25px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container size={10}>
            {children}
          </Grid>
        </Grid>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const ProductReview = () => {
  const { productId } = useParams();
  const { Products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [value, setValue] = useState(0);

  const fetchProductData = async () => {
    Products.map((item) => {
      if (item.id == productId) {
        setProductData(item);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      size={12}
      sx={{
        backgroundColor: "#FFFCF9",
        borderRadius: "50px",
        marginY: { xs: "30px", lg: "40px" },
      }}
    >
      <Grid
        size={12}
        sx={{
          paddingY: "56px",
          paddingX: { xs: "10px", sm: "30px", md: "60px" },
        }}
      >
        <Grid>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="tabs description reviews"
          >
            <StyledTab label="Description" disableRipple {...a11yProps(0)} />
            <StyledTab label="Reviews" disableRipple {...a11yProps(1)} />
          </StyledTabs>
        </Grid>
        <CustomTabPanel value={value} index={0}>
          <Typography color="#726868" fontWeight={700} px={4}>
            {productData.description}
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Reviews />
        </CustomTabPanel>
      </Grid>
    </Grid>
  );
};
export default ProductReview;
