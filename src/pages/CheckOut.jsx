import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Grid from "@mui/material/Grid2";
import {
  Box,
  styled,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import CartTotal from "../components/CartTotal";
const CheckOut = () => {
  const { navigate } = useContext(ShopContext);

  const TextFieldDelively = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: "15px",
    "& .MuiInputBase-input": {
      color: theme.palette.primary.main,
      fontSize: 18,
      fontWeight: 600,
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.text.primary,
      fontSize: 16,
      fontWeight: 600,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "2px dashed #00000080",
      borderRadius: "15px",
    },
  }));
  return (
    <Grid
      container
      size={12}
      sx={{
        justifyContent: "center",
      }}
    >
      {/* ---------- Grid dashed for Total checkout --------------- */}
      <Grid
        container
        size={10}
        sx={{
          backgroundColor: "secondary.main",
          border: "5px dashed",
          borderRadius: "25px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "start",
          padding: 4,
          rowGap: 2,
        }}
      >
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Typography fontSize={35}>Check Out</Typography>
        </Box>
        {/*------------- 1- Grid Delivery info ------------- */}
        <Grid container size={{ xs: 12, md: 6 }} rowGap={2}>
          <Typography fontWeight={600} width={"100%"}>
            Delivery Information
          </Typography>
          <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
            <TextFieldDelively
              label="First Name"
              variant="outlined"
              size="small"
              fullWidth
              required
            />
            <TextFieldDelively
              label="Last Name"
              variant="outlined"
              size="small"
              fullWidth
              required
            />
          </Box>
          <TextFieldDelively
            label="Email Address"
            variant="outlined"
            size="small"
            type="email"
            fullWidth
            required
          />
          <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
            <TextFieldDelively
              label="Province"
              variant="outlined"
              size="small"
              fullWidth
              required
            />
            <TextFieldDelively
              label="City"
              variant="outlined"
              size="small"
              fullWidth
              required
            />
          </Box>
          <TextFieldDelively
            label="Address"
            variant="outlined"
            size="small"
            fullWidth
            required
          />
          <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
            <TextFieldDelively
              label="Zip Code"
              variant="outlined"
              size="small"
              type="number"
              fullWidth
              required
            />
            <TextFieldDelively
              label="Phone Number"
              variant="outlined"
              size="small"
              type="number"
              fullWidth
              required
            />
          </Box>
        </Grid>
        {/*------------- 2- Grid Payment info ------------- */}
        <Grid size={{ xs: 12, md: 5 }}>
          <CartTotal />
          <FormControl
            sx={{
              "& .MuiTypography-root": { fontSize: 20, fontWeight: 600 },
              marginY: 2,
            }}
          >
            <FormLabel id="demo-row-radio-buttons-group-label">
              Payment Method
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="payment-getway"
                control={<Radio size="small" />}
                label="Payment Gateway"
                disabled
              />
              <FormControlLabel
                value="cash-on-delivery"
                control={<Radio size="small" />}
                label="Cash On Delivery"
              />
            </RadioGroup>
          </FormControl>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              variant="contained"
              onClick={() => navigate("/payment")}
              disableRipple
              disableElevation
              sx={{
                backgroundColor: "primary.main",
                textTransform: "none",
                borderRadius: "25px",
                padding: "10px 40px",
                "&:hover": {
                  backgroundColor: "warning.main",
                },
              }}
            >
              Pay Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CheckOut;
