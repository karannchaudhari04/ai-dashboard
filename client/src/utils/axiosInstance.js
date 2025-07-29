// utils/axiosInstance.js
import axios from "axios";

// Automatically switch between dev and production
const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:5050/api" // Local development URL
  : import.meta.env.VITE_API_BASE_URL; // 👈 safer for deployment flexibility

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Automatically attach JWT to every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
