import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Typography,
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchIcon from "../assets/icons/SearchIcon";
import UserIcon from "../assets/icons/UserIcon";
import CartIcon from "../assets/icons/CartIcon";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import GroupsIcon from "@mui/icons-material/Groups";
import ContactMailIcon from "@mui/icons-material/ContactMail";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  // UI for Drawer Menu in small screen
  const DrawerList = (
    <Box
      sx={{
        width: 250,
        marginTop: 2,
        "& .MuiTypography-root": {
          fontSize: "20px",
          "&:hover": {
            color: "primary.main",
          },
        },
        "& .MuiSvgIcon-root": { color: "primary.main" },
        "& .MuiListItemButton-root": {
          columnGap: 2,
        },
        "& .MuiListItem-root": {
          display: "block",
        },
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {/* List = ul */}
      <List sx={{}}>
        {/* ListItem = ul , navlink or a is inside, display=block for better UI */}
        <ListItem>
          <NavLink to={"/"}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"/store"}>
            <ListItemButton>
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText primary={"Store"} />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"/about"}>
            <ListItemButton>
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={"/contact"}>
            <ListItemButton>
              <ListItemIcon>
                <ContactMailIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={"Contact"} />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <Divider />
        <ListItem>
          <NavLink to={"/cart"}>
            <ListItemButton>
              <ListItemIcon>
                <CartIcon />
              </ListItemIcon>
              <ListItemText primary="Cart" />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>

      <List></List>
    </Box>
  );
  return (
    // Grid for main container
    <Grid
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
        zIndex: "999",
        backgroundColor: "background.default",
        border: "none",
      }}
    >
      {/* navbar paper bgcolor  that has 3 section Grid*/}
      <Grid
        component="header"
        sx={{
          height: "100px",
          marginTop: { sm: "10px", md: "20px" },
          marginBottom: "40px",
          marginX: { md: "70px", sm: "10px" },
          paddingX: { md: "60px", xs: "20px" },
          borderRadius: { sm: "30px" },
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
          <NavLink to={`/`} style={{ display: "flex" }}>
            <Typography
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
          </NavLink>
        </Grid>
        {/* 2- section Grid for menu */}
        <Grid
          container
          size={{ lg: 8 }}
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          <Box component="ul" sx={{ display: "flex", gap: "30px" }}>
            <NavLink to={"/"}>
              <Typography
                component="li"
                variant="h4"
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                Home
              </Typography>
            </NavLink>
            <NavLink to={"/store"}>
              <Typography
                component="li"
                variant="h4"
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                Store
              </Typography>
            </NavLink>
            <NavLink to={"/about"}>
              <Typography
                component="li"
                variant="h4"
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                About
              </Typography>
            </NavLink>
            <NavLink to={"/contact"}>
              <Typography
                component="li"
                variant="h4"
                sx={{ "&:hover": { color: "primary.main" } }}
              >
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
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          <SearchIcon />
          <UserIcon />
          <NavLink to={"/cart"}>
            <CartIcon />
          </NavLink>
        </Grid>
        {/* 3-1 section Grid for HamMenu */}
        <Grid
          container
          size={{ lg: 2, xs: 6 }}
          spacing={4}
          sx={{ display: { xs: "flex", lg: "none" } }}
        >
          {/* button or menu icon to open drawer menu */}
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: "primary.main", width: "40px" }} />
          </Button>
          <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            sx={{
              "& .MuiPaper-root": { backgroundColor: "background.default" },
            }}
          >
            {DrawerList}
          </Drawer>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
