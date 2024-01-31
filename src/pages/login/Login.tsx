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
import { isEmailValid, isPasswordValid } from "../../helper/helper";
import { LoginDataProps } from "../../interface/login";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../redux/slices/registerSlice";
import AlertDialog from "../../components/varify/AlertDialog";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

const Login = () => {
  const [loginData, setLoginData] = useState<LoginDataProps>({
    email: "",
    password: "",
  });
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { email, password } = loginData;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = loginData;

    const validEmail = isEmailValid(email);
    const validPassword = isPasswordValid(password);
    console.log("Form is valid");

    if (validEmail && validPassword) {
      console.log("Form is valid");
      setLoginData({
        email: "",
        password: "",
      })

    } else {
      handleClickOpen();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
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
          <Avatar
            sx={{ m: 1, bgcolor: "secondary" }}
            style={{ backgroundColor: "#2196f3" }}
          >
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={loginData.password}
              onChange={handleChange}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                dispatch<any>(loginAsync(loginData));
              }}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <AlertDialog
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={open}
      />
    </ThemeProvider>
  );
};

export default Login;
