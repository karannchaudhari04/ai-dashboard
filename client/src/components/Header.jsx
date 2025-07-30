import { Bell, Settings, LogOut, User, Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser } from "../utils/logout";
import useAuthStore from "../store/useAuthStore"; // ✅ renamed to match your Zustand store

const Header = ({ setSidebarOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // ✅ Get user from Zustand store
  const { user } = useAuthStore();

  // ✅ Use fallback values in case user or fields are not defined
  const userName = user?.name || "Admin";
  const userRole = user?.role || "admin";

  const handleProfileClick = () => {
    setDropdownOpen(false);
    navigate("/profile");
  };


  const handleSettingClick = () => {
    setDropdownOpen(false);
    navigate("../pages/settings");
  };


  return (
    <header className="bg-gray-900 px-6 py-3 flex justify-between items-center sticky top-0 z-30 shadow-md">
      {/* Left - Hamburger + Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-white md:hidden"
        >
          <Menu size={24} />
        </button>
        <div className="text-xl font-semibold text-white">Dashboard</div>
      </div>

      {/* Right - Profile Dropdown */}
      <div className="relative">
        <button
          className="flex items-center gap-3 focus:outline-none"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="avatar"
            className="w-9 h-9 rounded-full border-2 border-gray-700"
          />
          <div className="block text-left">
            <div className="text-sm font-medium text-white">{userName}</div>
            <div className="text-xs text-gray-300 capitalize">{userRole}</div>
          </div>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg border border-gray-700 text-sm z-50">
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-700 text-white flex items-center gap-2"
              onClick={handleProfileClick}
            >
              <User size={16} /> Profile
            </button>

            <hr className="border-gray-600" />

            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-700 text-red-400 flex items-center gap-2"
              onClick={() => {
                setDropdownOpen(false);
                logoutUser(navigate, toast);
              }}
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
