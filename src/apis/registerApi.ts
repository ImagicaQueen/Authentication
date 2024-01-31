import axios from "axios";
import { RegisterItem } from "../interface/slicesType/register";

export function registerApi(item: RegisterItem) {
  try {
    const url =
      "https://user-auth-native-app-server.vercel.app/api/v1/user/register";
    console.log("Request URL:", url);

    return axios.post(url, item);
  } catch (error) {
    console.log("error from api", error);
  }
}

// export function verifyApi(item: any) {
//   const url =
//     "https://user-auth-native-app-server.vercel.app/api/v1/user/verify";
//   console.log("Request URL:", url);

//   return axios.post(url, item);
// }

// export function verifyApi (item:any) {
//   try {
//     const token =
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI3YTZlNmI5MzY5NTkzOWZlYWRiNjUiLCJpYXQiOjE3MDY1MzQ2MzEsImV4cCI6MTc5MjkzNDYzMX0.IPEFGALI9v6oCT0DVjpu6nsqiQl-khocC9jqzH4Agvs";
//     const url =
//       "https://user-auth-native-app-server.vercel.app/api/v1/user/verify";
//     const data =  axios.post(
//       url,
//       item,
//       {
//         withCredentials: true,
//         headers: {
//           token: token,
//         },
//       }
//     );
//     console.log("verify ---", data);
//     return data
//   } catch (error) {
//     console.log("error: ", error);
//   }
// }

