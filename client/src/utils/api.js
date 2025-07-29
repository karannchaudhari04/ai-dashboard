import axios from "axios";

const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5050"
  : "https://ai-dashboard-npl0.onrender.com";

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});


// Attach JWT token automatically to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
