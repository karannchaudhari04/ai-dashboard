import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../../utils/axiosInstance";
import useAuthStore from "../../store/useAuthStore"; // ✅ import Zustand store

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const setUser = useAuthStore((state) => state.setUser); // ✅ subscribe to setUser

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email: email.toLowerCase(),
        password,
      });

      // ✅ Save token
      localStorage.setItem("token", res.data.token);

      // ✅ Update Zustand store with logged-in user
      setUser(res.data.user);

      toast.success("Login successful!", {
        autoClose: 1000,
        position: "top-right",
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Login failed. Please try again.";

      toast.error(errorMsg, {
        autoClose: 1000,
        position: "top-right",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-4">
      <div className="bg-gray-900 p-8 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 hover:bg-purple-700 transition rounded-md font-medium"
          >
            Login
          </button>
        </form>
        <p className="text-sm mt-4 text-center text-gray-400">
          Don’t have an account?{" "}
          <span
            className="text-purple-400 hover:underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
