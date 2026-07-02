import axios from "axios";

const api = axios.create({
  baseURL: "https://prl-forge-web.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;