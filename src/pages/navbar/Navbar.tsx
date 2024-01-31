import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { LinkDataProps } from "../../interface/navbar";

function ResponsiveAppBar() {
  const [link, setLink] = useState<Array<LinkDataProps>>([
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Login",
      path: "/login",
    },
    {
      name: "Register",
      path: "/register",
    },
    {
      name: "Add Task",
      path: "/add/task",
    },
    {
      name: "Show Task",
      path: "/show/task",
    },
    {
      name: "Verify",
      path: "/verify",
    },
  ]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              TODO
            </Link>
          </Typography>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {link.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                  padding: "10px",
                }}
              >
                {item.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
