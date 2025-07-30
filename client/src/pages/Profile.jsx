import React, { useEffect, useState } from "react"; // ⬅ add useState
import Navbar from "../components/Header";
import Sidebar from "../components/Sidebar";
import API from "../utils/axiosInstance";
import useAuthStore from "../store/useAuthStore";

const Profile = () => {
  const { user, setUser } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(false); // ⬅ add this

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!user) {
          const res = await API.get("/api/auth/me");
          setUser(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch profile info:", error);
      }
    };

    fetchUser();
  }, [user, setUser]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> {/* pass props */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar setSidebarOpen={setSidebarOpen} /> {/* pass toggle function */}
        <main className="p-6 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-6">Admin Profile</h2>

          <div className="bg-gray-800 rounded-lg p-6 shadow-md max-w-md w-full">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="avatar"
                className="w-16 h-16 rounded-full border-2 border-white"
              />
              <div>
                <h3 className="text-xl font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-400 capitalize">
                  {user.role || "Admin"}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium text-gray-400">Email: </span>
                {user.email}
              </p>
              <p>
                <span className="font-medium text-gray-400">Role: </span>
                {user.role}
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
