// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";
// import API from "../../apis/api"


// interface stateOtp {
//   otp: any;
//   userToken: string | null;
//   status: "idle" | "loading" | "failed";
// }

// const userToken = localStorage.getItem("userToken");

// const initialState: stateOtp = {
//   otp: "",
//   userToken,
//   status: "idle",
// };

// export const verifyOtp = createAsyncThunk(
//   "verify/addItem",
//   async (otp: any) => {
//     try {
//       const url =
//         "https://user-auth-native-app-server.vercel.app/api/v1/user/verify";
//       const response = await API.post(
//         url,
//         otp
//       );
//       return response.data;
//     } catch (error: any) {
//       console.error("Error", error.message);
//     }
//   }
// );

// export const verifySlice = createSlice({
//   name: "verify",
//   initialState,
//   reducers: {},

//   extraReducers: (builder) => {
//     builder
//       .addCase(verifyOtp.pending, (state, action) => {
//         state.status = "loading";
//         console.log("calling panding ------", action);
//       })
//       .addCase(verifyOtp.fulfilled, (state: any, action) => {
//         state.status = "idle";
//         console.log("call fullfilled ------", action);
//       })
//       .addCase(verifyOtp.rejected, (state, action) => {
//         console.log("calling rejected  ----", action);
//         state.status = "failed";
//       });
//   },
// });

// export default verifySlice.reducer;

export const data = 5;
