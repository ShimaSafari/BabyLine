import React from "react";
import { Data } from "../assets/DataAssets";
import Grid from "@mui/material/Grid2";
import { Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const TextFieldPink = styled(TextField)(({ theme }) => ({
    "& .MuiInputLabel-root": {
      color: theme.palette.text.secondary,
      fontSize: "20px",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.palette.primary.main,
    },
    backgroundColor: "#F4E6E6",
    borderRadius: "20px",
    "& .MuiOutlinedInput-notchedOutline": {
      border: 0,
    },
  }));
  return (
    <Grid
      container
      sx={{
        paddingX: { md: "70px", sm: "10px" },
        backgroundImage: `url(${Data.Bg_Offers})`,
        backgroundSize: "contain",
        backgroundRepeat: "repeat-y",
        marginBottom: "-30px",
      }}
    >
      <Grid
        sx={{
          width: "100%",
          marginTop: "50px",
          marginBottom: "87px",
          backgroundColor: "secondary.main",
          backgroundImage: `url(${Data.Bg_ContactUs})`,
          backgroundSize: "cover",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
          borderRadius: { md: "25px", sm: "20px" },
        }}
      >
        {/* Grid content */}
        <Grid
          container
          sx={{
            paddingX: { xs: "15px", md: "60px", lg: "80px" },
            paddingTop: "36px",
            paddingBottom: "70px",
          }}
        >
          {/*  Grid Contact Us text */}
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              marginBottom: "45px",
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
                  fontSize: 50,
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                Contact Us
              </Typography>
            </Grid>
            <Box>
              <img src={Data.i_Line_Orange} alt="" />
            </Box>
          </Grid>
          {/* Grid container for 1.form & 2.map */}
          <Grid
            container
            sx={{
              flexDirection: { lg: "row", xs: "column" },
              justifyContent: "space-between",
              rowGap: 3,
            }}
          >
            {/* 1- grid for form */}
            <Grid
              container
              component="form"
              onSubmit={handleSubmit}
              size={{ lg: 6, xs: 12 }}
              columnSpacing={"22px"}
              rowSpacing={"16px"}
            >
              <Grid size={6} sx={{ height: "75px" }}>
                <TextFieldPink
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={6} sx={{ height: "75px" }}>
                <TextFieldPink
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={6} sx={{ height: "75px" }}>
                <TextFieldPink
                  id="outlined-basic"
                  label="Mobile Number"
                  variant="outlined"
                  fullWidth
                  required
                  type="tel"
                />
              </Grid>
              <Grid size={6} sx={{ height: "75px" }}>
                <TextFieldPink
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                />
              </Grid>
              <Grid size={12}>
                <TextFieldPink
                  id="outlined-multiline-static"
                  multiline
                  required
                  rows={4}
                  label="Your Valuble Message"
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid size={12}>
                <Button
                  type="submit"
                  size="small"
                  variant="contained"
                  disableElevation
                  sx={{
                    backgroundColor: "warning.main",
                    borderRadius: "20px",
                    textTransform: "initial",
                    paddingY: 1,
                    marginTop: 2,
                    paddingX: "20px",
                    "&:hover": { backgroundColor: "primary.main" },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>

            {/* 2- grid for map */}
            <Grid container size={{ lg: 5.5, xs: 12 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1607.9979124602187!2d59.65250725263977!3d36.28815119620251!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c918d357bb401%3A0x9b4e215fd107b10e!2sbaby%20shop!5e0!3m2!1sen!2sus!4v1736196234382!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: 25 }}
                loading="lazy"
              ></iframe>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
