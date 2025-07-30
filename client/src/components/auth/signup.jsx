import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import { Helmet } from "react-helmet";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/signup", {
        name,
        email: email.toLowerCase(),
        password,
      });

      toast.success("Signup successful! Please login.", { autoClose: 1000 });

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Signup failed!";
      toast.error(errorMsg, { autoClose: 1000 });
    }
  };

  return (
    <>
      <Helmet>
        <title>Sign Up | AI Analytics</title>
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 px-4">
        <Card className="w-full max-w-md bg-gray-900 border-gray-800 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-center font-semibold">
              Sign Up
            </CardTitle>
          </CardHeader>

          <form onSubmit={handleSignup}>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-1">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 bg-[#1a1c23] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
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
              <Button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-md hover:opacity-90"
              >
                Sign Up
              </Button>

              <p className="text-sm text-center text-gray-400">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="text-purple-400 hover:underline cursor-pointer"
                >
                  Login
                </span>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Signup;
