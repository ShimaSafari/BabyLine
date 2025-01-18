import React, { useContext } from "react";
import Grid from "@mui/material/Grid2";
import { TextField, IconButton } from "@mui/material";
import { Data } from "../assets/DataAssets";
import { ShopContext } from "../context/ShopContext";
const SearchProducts = () => {
  const { inputValue, setInputValue } = useContext(ShopContext);
  return (
    <Grid
      container
      size={12}
      sx={{
        gap: "7px",
        flexWrap: "nowrap",
        justifyContent: { md: "end" },
        marginY: { xs: 3, md: 0 },
      }}
    >
      <TextField
        id="filled-search"
        label="Search Products"
        type="search"
        variant="filled"
        size="small"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        // customizing style of search button
        sx={{
          height: "75px",
          flexGrow: 1,
          color: "text.secondary",
          backgroundColor: "#FFFCF9",
          borderRadius: "50px 0px 0px 50px",
          overflow: "hidden",
          "& .MuiInputBase-root::after": {
            borderBottom: "none",
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "transparent" },
          },
          " & .MuiFilledInput-root::before": {
            borderBottom: "none",
            "&:hover": { backgroundColor: "transparent" },
          },
          " & .MuiInputBase-root": {
            borderBottom: "none",
            height: "100%",
            // borderRadius: "50px 0px 0px 50px",
            backgroundColor: "transparent",
            "&:hover": { backgroundColor: "transparent" },
            "&.Mui-focused": {
              backgroundColor: "transparent",
            },
          },
          "& .MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before":
            { borderBottom: "none" },
          "& .MuiFormLabel-root ": {
            width: "85%",
            borderRadius: "50px 0px 0px 50px",
            backgroundColor: "#DFF7C8",
            color: "text.secondary",
            paddingLeft: "25px",
            paddingY: "4px",

            "&.Mui-focused": {
              //important style when label focused
              backgroundColor: "transparent",
              color: "text.secondary",
              opacity: 0.5,
            },
          },
        }}
      />
      <IconButton
        sx={{
          backgroundColor: "#FFFCF9",
          borderRadius: "0px 50px 50px 0px",
          height: "100%",
          paddingRight: 2,
        }}
      >
        <img src={Data.i_searchicon} width="40px" />
      </IconButton>
    </Grid>
  );
};

export default SearchProducts;
