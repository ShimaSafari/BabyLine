import { Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import SearchIcon from "../assets/icons/SearchIcon";
import UserIcon from "../assets/icons/UserIcon";
import CartIcon from "../assets/icons/CartIcon";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  return (
    // Grid for main container
    <Grid
      sx={{
        width:"100wvw",
        position: "sticky",
        top: 0,
        zIndex: "999",
        backgroundColor: "background.default",
        border:"none",
      }}
    >
      {/* navbar paper bgcolor  that has 3 section Grid*/}
      <Grid
        component="header"
        sx={{
          height: "100px",
          marginTop: {sm:"10px",md:"20px"},
          marginBottom: "40px",
          marginX: { md: "70px", sm: "10px" },
          paddingX: { md: "60px", xs: "20px" },
          borderRadius: {sm:"30px"},
          backgroundColor: "background.paper",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          color: "text.primary",
        }}
      >
        {/* 1- section Grid for logo */}
        <Grid container size={{ lg: 2, xs: 6 }}>
          <Typography
            // variant="h1"
            sx={{
              color: "common.main",
              fontSize: { md: 50, xs: 30 },
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            nini
          </Typography>
          <Typography
            // variant="h1"
            component="span"
            sx={{
              fontSize: { md: 50, xs: 30 },
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            bits
          </Typography>
        </Grid>
        {/* 2- section Grid for menu */}
        <Grid
          container
          size={{ lg: 8 }}
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          <Box component="ul" sx={{ display: "flex", gap: "30px" }}>
            <NavLink to={"/"}>
              <Typography component="li" variant="h4">
                Home
              </Typography>
            </NavLink>
            <NavLink to={"/store"}>
              <Typography component="li" variant="h4">
                Store
              </Typography>
            </NavLink>
            <NavLink to={"/about"}>
              <Typography component="li" variant="h4">
                About
              </Typography>
            </NavLink>
            <NavLink to={"/contact"}>
              <Typography component="li" variant="h4">
                Contact
              </Typography>
            </NavLink>
          </Box>
        </Grid>
        {/* 3- section Grid for icons */}
        <Grid
          container
          size={{ lg: 2, xs: 6 }}
          spacing={4}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <SearchIcon />
          <UserIcon />
          <CartIcon />
        </Grid>
        {/* 3-1 section Grid for HamMenu */}
        <Grid
          container
          size={{ lg: 2, xs: 6 }}
          spacing={4}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon sx={{ color: "primary.main", width: "40px" }} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;