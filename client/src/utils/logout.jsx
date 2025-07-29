// src/utils/logout.js
export const logoutUser = (navigate, toast) => {
  localStorage.removeItem("token");
  toast?.success("Logged out successfully");
  navigate("/login");
};
