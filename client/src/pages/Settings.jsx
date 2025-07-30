// src/pages/Settings.jsx
import Navbar from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // ✅ Import

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation(); // ✅ Get route info

  // ✅ Close sidebar automatically when route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex h-screen">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-4 overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Settings</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-700">
              Configure your preferences, account details, and other settings here.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
