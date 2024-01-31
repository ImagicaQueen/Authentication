import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/login/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";
import AddTask from "./pages/addTask/AddTask";
import ShowTask from "./pages/showTask/ShowTask";
import Varify from "./components/varify/Varify";
import axios from "axios";
import AlertDialog from "./components/varify/AlertDialog";
import Demo from "./pages/navbar/Demo";

function App() {

  const handleRegister = async () => {
    try {
      const url =
        "https://user-auth-native-app-server.vercel.app/api/v1/user/register";
      const data = await axios.post(url, {
        name: "khushi",
        email: "khushichandravansi3@gmail.com",
        password: "Khushi@5443",
        avatar: "",
      });
      console.log("register ----", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  const verify = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI5MDAzYThmM2NkNjhhZDlmYzA4NjciLCJpYXQiOjE3MDY2MjMwMzQsImV4cCI6MTc5MzAyMzAzNH0.514rITgiOHM8_H7-zRspoJfGWN7qXDnGssbNoffXutY";
      const url =
        "https://user-auth-native-app-server.vercel.app/api/v1/user/verify";
      const data = await axios.post(
        url,
        {
          otp: 380725,
        },
        {
          withCredentials: true,
          headers: {
            token: token,
          },
        }
      );
      console.log("verify ---", data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <div className="App">
      {/* <button onClick={handleRegister}>Register</button>
      <button onClick={verify}>Verify</button> */}
      {/* <Navbar /> */}
      <Demo/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add/task" element={<AddTask />} />
        <Route path="/show/task" element={<ShowTask />} />
        <Route path="/verify" element={<Varify />} />
      </Routes>
    </div>
  );
}

export default App;
