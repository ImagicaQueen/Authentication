import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { RegisterDataProps } from "../../interface/register";

import {
  isNameValid,
  isEmailValid,
  isPasswordValid,
  isAvatarValid,
} from "../../helper/helper";
import { useDispatch } from "react-redux";
import { addAsync } from "../../redux/slices/registerSlice";
import { AppDispatch } from "../../redux/store/store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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

const Register: React.FC = () => {
  const [registerData, setRegisterData] = useState<RegisterDataProps>({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, password } = registerData;

    const validName = isNameValid(name);
    const validEmail = isEmailValid(email);
    const validPassword = isPasswordValid(password);

    if (validName && validEmail && validPassword) {
      console.log("Form is valid");
      console.log(registerData,"registerData")

      navigate("/verify");
    } else {
      handleClickOpen();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    console.log("type",type)
    if (type === "file") {
      avatarUpload(e);
    } else {
      setRegisterData({
        ...registerData,
        [name]: value,
      });
    }
    console.log(registerData,"registerData")
  };
  const avatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      sendAvatar(file);
    }
  };

  const sendAvatar = (file: File) => {
    console.log("Sending avatar", file);
    setRegisterData({
      ...registerData,
      avatar: file,
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
          <Avatar sx={{ m: 1, bgcolor: "secondary" }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
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
              id="name"
              label="Name"
              name="name"
              value={registerData.name}
              onChange={handleChange}
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={registerData.password}
              onChange={handleChange}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="avatar"
              onChange={handleChange}
              label="Avatar"
              type="file"
              id="avatar"
              autoComplete="avatar"
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                dispatch<any>(addAsync(registerData));
              }}
            >
              Register
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

export default Register;
