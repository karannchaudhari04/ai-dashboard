import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import API from "../../utils/axiosInstance";
import useAuthStore from "../../store/useAuthStore";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        email: email.toLowerCase(),
        password,
      });

      localStorage.setItem("token", res.data.token);
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
    <>
      <Helmet>
        <title>Login | AI Analytics</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-4">
        <Card className="w-full max-w-md bg-gray-900 border-gray-800 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-center font-semibold">
              Welcome Back
            </CardTitle>
          </CardHeader>

          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="mb-4">
                <Label htmlFor="email" className="block text-sm font-medium mb-1">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-[#1a1c23] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="block text-sm font-medium mb-1">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 bg-[#1a1c23] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3">
              <Button type="submit" className="w-full py-2 px-4 bg-gradient-to-r from-gray-800 to-black text-white rounded-md hover:opacity-90">
                Login
              </Button>

              <p className="mt-4 text-center text-sm text-gray-400">
                Don’t have an account?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="text-purple-400 hover:underline cursor-pointer"
                >
                  Sign up
                </span>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Login;
