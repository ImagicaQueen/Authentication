import axios from "axios";
const API = axios.create({baseURL: "https://user-auth-native-app-server.vercel.app/api/v1/user/"});

const token = localStorage.getItem("userToken");

API.interceptors.request.use((req) => {
    if (localStorage.getItem("user")) {
      req.headers.token = String(token)
    }
    return req;
  });

export default API