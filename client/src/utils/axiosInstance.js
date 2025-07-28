import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5050/api",
});

// Add token to every request if available
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle 401 errors but DO NOT auto logout
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Just log the message or show a toast — don't redirect or remove token
      console.warn("⚠️ 401 Unauthorized - Please check your token or re-authenticate.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
