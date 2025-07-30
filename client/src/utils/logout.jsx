// src/utils/logout.js
import useAuthStore from "../store/useAuthStore";

export const logoutUser = (navigate, toast) => {
  // Clear JWT token from localStorage
  localStorage.removeItem("token");

  // ✅ Clear user from Zustand store and from persisted localStorage
  useAuthStore.getState().clearUser();

  // Optional success message
  toast?.success("Logged out successfully");

  // Redirect to login
  navigate("/login");
};
