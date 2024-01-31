import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store/store";
import axios from "axios";
// import API from "../../apis/api";
import {
  RegisterItem,
  RegisterState,
} from "../../interface/slicesType/register";

const token = localStorage.getItem("token");

const initialState: RegisterState = {
  items: [],
  otp: "",
  status: "idle",
  login: [],
};

export const addAsync = createAsyncThunk(
  "register/addItem",
  async (item: RegisterItem) => {
    try {
      console.log(item, "item==============");
      const url =
        "https://user-auth-native-app-server.vercel.app/api/v1/user/register";
      const response = await axios.post(url, item);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
      }

      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "verify/addItem",
  async (otp: any) => {
    console.log("verify");
    try {
      const url =
        "https://user-auth-native-app-server.vercel.app/api/v1/user/verify";
      const response = await axios.post(url, otp, {
        withCredentials: true,
        headers: {
          token: String(token),
        },
      });
      console.log("fulfilled");
      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  }
);

export const loginAsync = createAsyncThunk(
  "login/loginUser",
  async (cre: { email: string; password: string }) => {
    try {
      const url =
        "https://user-auth-native-app-server.vercel.app/api/v1/user/login";
      const response = await axios.post(url, cre);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error: any) {
      if (error.response) {
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
      throw error;
    }
  }
);

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(addAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addAsync.fulfilled, (state: any, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(addAsync.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(verifyOtp.pending, (state, action) => {
        state.status = "loading";
        console.log("calling panding ------", action);
      })
      .addCase(verifyOtp.fulfilled, (state: any, action) => {
        state.status = "idle";
        console.log("call fullfilled ------", action);
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        console.log("calling rejected  ----", action);
        state.status = "failed";
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state: any, action) => {
        state.status = "idle";
        state.login = action.payload;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default registerSlice.reducer;
