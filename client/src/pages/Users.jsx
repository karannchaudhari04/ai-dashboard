// src/pages/Users.jsx
import Navbar from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Users = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-4 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">User Management</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-700">
              Here you can manage registered users, update their roles, and view user activity.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Users;
