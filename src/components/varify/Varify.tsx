

import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { verifyOtp } from "../../redux/slices/registerSlice";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Varify: React.FC = () => {
  const [varifyOtp, setVarifyOtp] = useState<string>("");
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setVarifyOtp()

  };

  const handleOtp = async() =>{
    try {
      await dispatch<any>(verifyOtp({ otp: varifyOtp }));
    } catch (error) {
     console.log(error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: any = e.target.value;
    setVarifyOtp(value);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary" }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Verification
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Otp"
              name="name"
              value={varifyOtp}
              onChange={handleChange}
              autoComplete="name"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>handleOtp()}
            >
              Verify Otp
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Varify;

